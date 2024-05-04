import { GitHubDetector } from "./githubDetector";

//Update meta tag for web
export default function updateMetaTags(title: string, description: string) {
  const existingDescriptionMeta = document.querySelector(
    'meta[name="description"]'
  );
  
  var defaultTitle: string
  if (GitHubDetector.isGithubPages(window.location.href)) {
    const repoName = GitHubDetector.getRepoNameFromUrl(window.location.href);
    defaultTitle = repoName!;
  } else {
    defaultTitle = "Timeline Local";
  }

  if (existingDescriptionMeta) {
    existingDescriptionMeta.setAttribute("content", description);
  } else {
    const newDescriptionMeta = document.createElement("meta");
    newDescriptionMeta.setAttribute("name", "description");
    newDescriptionMeta.setAttribute("content", description);
    document.head.appendChild(newDescriptionMeta);
  }

  document.title = title + " • " + defaultTitle;
}
