const { DateTime } = require("luxon");
const fs = require("fs");
const path = require("path");
const eleventyPluginRss = require("@11ty/eleventy-plugin-rss");
const eleventyPluginNavigation = require("@11ty/eleventy-navigation");
const eleventyImage = require("@11ty/eleventy-img");

async function imageShortcode(
  src,
  alt,
  cls = null,
  loading = "lazy",
  sizes = "(min-width: 42em) 42em, 100vw"
) {
  const { dir: imgDir } = path.parse(src);
  const fullSrc = path.join("src", src);

  let metadata = await eleventyImage(fullSrc, {
    widths: [600, 900, 1200, 1800],
    formats: ["avif", "webp", "jpeg"],
    filenameFormat: function (id, src, width, format) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
    outputDir: path.join("dist", imgDir),
    urlPath: imgDir,
  });

  let imageAttributes = {
    class: cls,
    alt,
    sizes,
    loading,
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return eleventyImage.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

module.exports = function (eleventyConfig) {
  // Plugins are custom code that Eleventy can import into a project from an external repository.
  eleventyConfig.addPlugin(eleventyPluginRss);
  eleventyConfig.addPlugin(eleventyPluginNavigation);

  eleventyConfig.addShortcode("currentyear", () => `${new Date().getFullYear()}`);
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // Specify files or directories for Eleventy to copy to output.
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        browserSync.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("dist/404.html");
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  // Return Config object
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
