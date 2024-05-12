import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Device } from "./modules/device";
import { NavbarMobile } from "./components/NavbarMobile";

import "./style.css";
// import { DarkMode } from "./modules/darkMode";

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.getElementById("app");
  if (appElement) {
    //Check device type and render the navbar element
    const navbar = new Navbar(appElement);
    const navbarMobile = new NavbarMobile(appElement);
    if (Device.isMobile()) {
      navbarMobile.render();
    } else {
      navbar.render();
    }

    const content = document.createElement("div");
    content.id = "content";
    content.classList.add("relative", "h-screen");
    appElement.appendChild(content);

    const footer = new Footer(appElement);
    footer.render();
  } else {
    console.error("Parent Target does not exist.");
  }
  // new DarkMode();
});
