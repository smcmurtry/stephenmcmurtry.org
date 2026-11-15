// Defaults for every post in this folder.
// Posts with `draft: true` are skipped in production builds
// (see the "drafts" preprocessor in eleventy.config.js).
export default {
  layout: "post.njk",
  tags: "posts",
  permalink: "/blog/{{ page.fileSlug }}/",
};
