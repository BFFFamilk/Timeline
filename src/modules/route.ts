import { PageNotFound } from "../components/PageNotFound";
import { GitHubDetector } from "./githubDetector";
import updateMetaTags from "./updateMeta";

//Page Routing for SPA
document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
  
    function renderContent(pathname) {
      switch (pathname) {
        case '/':
          contentDiv!.innerHTML = '<h1>Overview</h1>';

          updateMetaTags("Home", null!);
          break;
        case '/timeline':
          contentDiv!.innerHTML = '<h1>Timeline</h1>';

          updateMetaTags("Timeline", null!);
          break;
        default:
          const pageNotFound = new PageNotFound(contentDiv!);
          pageNotFound.render();

          updateMetaTags("Page Not Found", "An error occurred while loading the page!");
          break;
      }
    }
  
    function handleNavigation(event) {
      event.preventDefault();
      if (GitHubDetector.isGithubPages(window.location.href)) {
        const pathname = event.target.getAttribute('href');
        const repoName = GitHubDetector.getRepoNameFromUrl(window.location.href);
        const githubPathname = `${repoName}${pathname}`;
        window.history.pushState({}, '', githubPathname);
        renderContent(pathname);
        console.log(repoName);
        console.log(githubPathname);
        console.log(pathname)
      }
      else {
        const pathname = event.target.getAttribute('href');
        window.history.pushState({}, '', pathname);
        renderContent(pathname);
        console.log(pathname);
      }
    }
  
    // Initial render based on current route
    if (GitHubDetector.isGithubPages(window.location.href)) {
      
    } else {
      renderContent(window.location.pathname);
    }
    console.log(window.location.pathname);
    console.log(window.location.href);
  
    // Listen for clicks on navigation links
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', handleNavigation);
    });
  
    // Listen for changes in the browser history
    window.addEventListener('popstate', () => {
      if (GitHubDetector.isGithubPages(window.location.pathname)) {}
      else {
        renderContent(window.location.pathname);
      }
    });
  });