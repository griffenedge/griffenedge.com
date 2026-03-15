import { DateTime } from "luxon";
import path from "path";
import eleventyPluginRss from "@11ty/eleventy-plugin-rss";
import eleventyPluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginImageAvatar from "./_11ty/imageAvatarPlugin.js";

export default function (eleventyConfig) {
  // Plugins are custom code that Eleventy can import into a project from an external repository.
  eleventyConfig.addPlugin(eleventyPluginRss);
  eleventyConfig.addPlugin(eleventyPluginNavigation);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    widths: [510, 700, 950, 1200, 1450, 1920, 2560],
    formats: ["avif", "webp", "jpeg", "svg"],
    filenameFormat: function (src, width, format) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
        sizes:
          "auto, (min-width: 1536px) 1450px, (min-width: 1280px) 1200px, (min-width: 1024px) 950px, (min-width: 768px) 700px, (min-width: 576px) 510px, calc(100vw - 2rem)",
      },
    },
  });
  eleventyConfig.addPlugin(pluginImageAvatar);

  eleventyConfig.addShortcode(
    "currentyear",
    () => `${new Date().getFullYear()}`,
  );

  eleventyConfig.addShortcode(
    "currentdate",
    () =>
      `${new Date().toLocaleDateString("en-AU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`,
  );

  // Specify files or directories for Eleventy to copy to output.
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/_redirects");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Return Config object
  return {
    dir: { input: "src", output: "dist", layouts: "_layouts" },
    markdownTemplateEngine: "njk",
  };
}
