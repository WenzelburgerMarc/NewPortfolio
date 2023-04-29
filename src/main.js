import { createApp } from "vue";
import "./global_css/reset.scss";
import "animate.css";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router/index.js";

const app = createApp(App);

// Links of site (keep in mind to also change icons after changing links)
app.config.globalProperties.homeLink = "https://www.marcwenzelburger.com";
app.config.globalProperties.githubLink = "https://github.com/WenzelburgerMarc/";
app.config.globalProperties.linkedinLink =
  "https://www.linkedin.com/in/marc-wenzelburger-a499a5244/";
app.config.globalProperties.instagramLink =
  "https://www.instagram.com/disguisedliar/";

app.provide("homeLink", app.config.globalProperties.homeLink);
app.provide("githubLink", app.config.globalProperties.githubLink);
app.provide("instagramLink", app.config.globalProperties.instagramLink);
app.provide("linkedinLink", app.config.globalProperties.linkedinLink);

app.use(store); //use plugin - to gain access of the store in each component
app.use(router);
app.mount("#app");

// Check if it is https:
function redirectToHttps() {
  if (
    location.protocol !== "https:" &&
    location.hostname !== "localhost" &&
    location.hostname !== "127.0.0.1"
  ) {
    location.href =
      "https:" +
      window.location.href.substring(window.location.protocol.length);
  }
}

redirectToHttps();
