import "./style.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { DeviceDetector } from "./modules/deviceDetector";
import { NavbarMobile } from "./components/NavbarMobile";
import { GitHubDetector } from "./modules/githubDetector";

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app");
  if (appElement) {
    //Check device type and render the navbar element
    const navbar = new Navbar(appElement);
    const navbarMobile = new NavbarMobile(appElement);
    if (DeviceDetector.isMobile()) {
      navbarMobile.render();
    } else {
      navbar.render();
    }

    const content = document.createElement("div");
    content.id = "content";
    appElement.appendChild(content);

    const footer = new Footer(appElement);
    footer.render();
  } else {
    console.error("Parent Target does not exist.");
  }

  if (GitHubDetector.isGithubPages(window.location.href)) {
    const defaultLoad = document.querySelectorAll('[id="default"]');
    const timelineLoad = document.querySelectorAll('[id="timeline"]');
    defaultLoad.forEach(element => {
      if (element instanceof HTMLAnchorElement) {
        element.href = "/Timeline/";
      }
    });
    timelineLoad.forEach(element => {
      if (element instanceof HTMLAnchorElement) {
        element.href = "/Timeline/timeline";
      }
    });
  }
  console.log(GitHubDetector.isGithubPages(window.location.href));
});
