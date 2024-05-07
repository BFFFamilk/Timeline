//Import class
import { Home } from "../components/Home";
import { Overview } from "../components/Overview";
import { Timeline } from "../components/Timeline";
import { PageNotFound } from "../components/PageNotFound";
import { Host } from "./host";

//Import function
import updateMetaTags from "./updateMeta";

//Page Routing for SPA
document.addEventListener("DOMContentLoaded", function () {
  const contentDiv: string = "content";

  function renderContent(pathname) {
    switch (pathname) {
      case "/":
        const homePage = new Home(contentDiv); homePage
        updateMetaTags("Home", "Home page");
        break;

      case "/overview":
        const overviewPage = new Overview(contentDiv); overviewPage
        updateMetaTags("Overview", "Overview page");
        break;

      case "/timeline":
        const timelinePage = new Timeline(contentDiv); timelinePage
        updateMetaTags("Timeline", "Timeline page");
        break;

      default:
        const pageNotFound = new PageNotFound(contentDiv); pageNotFound
        updateMetaTags("404", "Page Not Found");
        break;
    }
  }

  function handleNavigation(event) {
    event.preventDefault();
    if (Host.isGithubPages(window.location.href)) {
      const pathname = event.target.getAttribute("href");
      renderContent(pathname);
    } else {
      const pathname = event.target.getAttribute("href");
      window.history.pushState({}, "", pathname);
      renderContent(pathname);
    }
  }

  // Initial render based on current route
  if (Host.isGithubPages(window.location.href)) {
    renderContent("/");
  } else {
    renderContent(window.location.pathname);
  }

  // Listen for clicks on navigation links
  document.querySelectorAll('#route').forEach((link) => {
    link.addEventListener("click", handleNavigation);
  });

  // Listen for changes in the browser history
  window.addEventListener("popstate", () => {
    renderContent(window.location.pathname);
  });
});
