/* Get Repositories from Github */

import axios from "axios";

const state = {
  projects: [
    {
      name: "",
      description: "",
      languages: [],
      html_url: "",
      image: "",
      openProjectLink: "",
    },
  ],
};

const getters = {
  allProjects: (state) => state.projects,
};

const actions = {
  async fetchProjects({ commit }) {
    const { data } = await axios.get(
      "https://api.github.com/users/WenzelburgerMarc/repos?per_page=100&full_description=true"
    );
    const repositories = await Promise.all(
      data.map(async (repo) => {
        const { name, description, html_url, languages_url } = repo;
        const { data: crawledLanguages } = await axios.get(languages_url);
        const portfolioLink = await checkForPortfolioLink(repo.name);
        const imageLink = await checkForImageLink(repo.name);
        //const description = await fetchReadme(repo.name);
        return {
          name,
          description,
          languages: Object.keys(crawledLanguages),
          html_url,
          openProjectLink: portfolioLink ? portfolioLink.trim() : "",
          image: imageLink ? imageLink.trim() : "",
        };
      })
    );
    commit("setProjects", repositories);
  },
};

const mutations = {
  setProjects: (state, projects) => (state.projects = projects),
};

async function checkForPortfolioLink(repoName) {
  try {
    const { data } = await axios.get(
      `https://raw.githubusercontent.com/WenzelburgerMarc/${repoName}/main/portfolioLink.txt`
    );
    return data;
  } catch (error) {
    //console.clear();
    return "";
  }
}

async function checkForImageLink(repoName) {
  try {
    await axios.get(
      `https://raw.githubusercontent.com/WenzelburgerMarc/${repoName}/main/portfolioPreview.png`
    );

    return `https://raw.githubusercontent.com/WenzelburgerMarc/${repoName}/main/portfolioPreview.png`;
  } catch (error) {
    //console.clear();
    return "";
    //return "./src/assets/portfolio/img/github.jpeg";
  }
}

// async function fetchReadme(repoName) {
//   try {
//     const { data } = await axios.get(
//       `https://api.github.com/repos/WenzelburgerMarc/${repoName}/readme`
//     );
//     const { content } = data;
//     return atob(content);
//   } catch (error) {
//     console.clear();
//     return "";
//   }
// }

export default {
  state,
  getters,
  actions,
  mutations,
};
