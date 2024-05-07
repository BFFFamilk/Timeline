//Import class
import { Host } from "./host";

//Update meta tag for web
export default function updateMetaTags(title: string, description: string) {
  const existingDescriptionMeta = document.querySelector(
    'meta[name="description"]'
  );
  
  var defaultTitle: string
  if (Host.isGithubPages(window.location.href)) {
    const repoName = Host.getRepoNameFromUrl(window.location.href);
    defaultTitle = repoName!;
  } else if (Host.isDevMode()) {
    defaultTitle = "Timeline Dev"
  } else {
    defaultTitle = "Timeline";
  }

  if (existingDescriptionMeta) {
    existingDescriptionMeta.setAttribute("content", description);
  } else {
    const newDescriptionMeta = document.createElement("meta");
    newDescriptionMeta.setAttribute("name", "description");
    newDescriptionMeta.setAttribute("content", description);
    document.head.appendChild(newDescriptionMeta);
  }

  document.title = title + " 〡 " + defaultTitle;
}
