module.exports = function (eleventyConfig) {

  // Specify files or directories for Eleventy to copy to output.
  eleventyConfig.addPassthroughCopy("src/style");
  eleventyConfig.addPassthroughCopy("src/script");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Return Config object
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};