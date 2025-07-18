// https://github.com/zachleat/zachleat.com/blob/05e90c6fbac22ca699c6f92c91eb04ef8bd37533/_11ty/imageAvatarPlugin.js

export function getIndieAvatarUrl(url) {
  return `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(url)}/`;
}

export default function (eleventyConfig) {
  function indieAvatarHtml(url = "", classes = "z-avatar", onerror = "") {
    let screenshotUrl = getIndieAvatarUrl(url);
    return `<img alt="IndieWeb Avatar for ${url}" class="${classes}" loading="lazy" decoding="async" src="${screenshotUrl}" width="60" height="60"${onerror ? ` onerror="${onerror}"` : ""} eleventy:ignore>`;
  }

  eleventyConfig.addNunjucksShortcode("indieAvatar", indieAvatarHtml);
}
