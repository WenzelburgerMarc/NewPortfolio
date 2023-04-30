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
      created_at: "",
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
        const { name, description, html_url, languages_url, created_at } = repo;
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
          created_at,
        };
      })
    );

    const sortedProjects = sortProjectsByDate(repositories);
    commit("setProjects", sortedProjects);
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

function sortProjectsByDate(projects) {
  return projects.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
}

export default {
  state,
  getters,
  actions,
  mutations,
};
