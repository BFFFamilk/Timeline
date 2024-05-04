//Update meta tag for web
export default function updateMetaTags(title: string, description: string) {
  const existingDescriptionMeta = document.querySelector(
    'meta[name="description"]'
  );
  const defaultTitle = "Timeline";

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
