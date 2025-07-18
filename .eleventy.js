import { DateTime } from "luxon";
import fs from "fs";
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
    widths: [600, 900, 1200, 1800],
    formats: ["avif", "webp", "jpeg"],
    filenameFormat: function (src, width, format) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);

      return `${name}-${width}w.${format}`;
    },
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
        sizes: "(min-width: 42em) 42em, 100vw",
      },
    },
  });
  eleventyConfig.addPlugin(pluginImageAvatar);

  eleventyConfig.addShortcode(
    "currentyear",
    () => `${new Date().getFullYear()}`,
  );

  // Specify files or directories for Eleventy to copy to output.
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Return Config object
  return { dir: { input: "src", output: "dist" } };
}
