//Import class
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
        const overviewPage = new Overview(contentDiv);
        overviewPage;
        updateMetaTags("Overview", "Overview page");
        activePage('"/"');
        break;

      case "/timeline":
        const timelinePage = new Timeline(contentDiv);
        timelinePage;
        updateMetaTags("Timeline", "Timeline page");
        activePage('"/timeline"');
        break;

      default:
        const pageNotFound = new PageNotFound(contentDiv);
        pageNotFound;
        updateMetaTags("404", "Page Not Found");
        break;
    }
  }

  function activePage(href: string) {
    document.querySelectorAll("nav a").forEach((links) => {
      links.classList.remove("active");
      document
        .querySelector("nav a[href=" + href + "]")
        ?.classList.add("active");
    });
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
  document.querySelectorAll("#route").forEach((link) => {
    link.addEventListener("click", handleNavigation);
  });

  // Listen for changes in the browser history
  window.addEventListener("popstate", () => {
    renderContent(window.location.pathname);
  });
});
