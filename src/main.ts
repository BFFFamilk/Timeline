import "./style.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { DeviceDetector } from "./modules/deviceDetector";
import { NavbarMobile } from "./components/NavbarMobile";

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

  const defaultLoad = document.getElementById("default") as HTMLAnchorElement;
  const timelineLoad = document.getElementById("timeline") as HTMLAnchorElement;
  if (defaultLoad) {
    defaultLoad.href = "/Timeline/";
  }
  if (timelineLoad) {
    timelineLoad.href = "/Timeline/timeline";
  }
});
