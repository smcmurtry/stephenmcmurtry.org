import pluginRss from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Everything in legacy/ is published at the site root, unchanged, so the
  // old visualization pages keep their original URLs.
  eleventyConfig.addPassthroughCopy({ legacy: "/" });
  eleventyConfig.addPassthroughCopy("src/assets");

  // A post with `draft: true` shows up in `npm start` but is left out of the
  // production build, so it never gets deployed.
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  const longDate = new Intl.DateTimeFormat("en-CA", {
    dateStyle: "long",
    timeZone: "UTC",
  });
  eleventyConfig.addFilter("readableDate", (date) => longDate.format(new Date(date)));
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));
  eleventyConfig.addFilter("year", (date) => new Date(date).getUTCFullYear());
  eleventyConfig.addFilter("head", (array, n) => array.slice(0, n));
  eleventyConfig.addFilter("sortByDateDesc", (array) =>
    [...array].sort((a, b) => (a.date < b.date ? 1 : -1))
  );

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
