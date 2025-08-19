const images = import.meta.glob("@/assets/images/content/*", {
  eager: true,
  as: "url",
});

export function getImageUrl(filename) {
  for (const [path, url] of Object.entries(images)) {
    if (path.endsWith("/" + filename)) return url;
  }
  return "";
}
