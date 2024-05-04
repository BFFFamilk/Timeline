import { PageNotFound } from "../components/PageNotFound";
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
      const pathname = event.target.getAttribute('href');
      window.history.pushState({}, '', pathname);
      renderContent(pathname);
    }
  
    // Initial render based on current route
    renderContent(window.location.pathname);
  
    // Listen for clicks on navigation links
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', handleNavigation);
    });
  
    // Listen for changes in the browser history
    window.addEventListener('popstate', () => {
      renderContent(window.location.pathname);
    });
  });