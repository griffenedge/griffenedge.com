/** Script that is placed at the end of the body */

function addRelNoOpener(link) {
  let linkTypes = (link.getAttribute("rel") || "").split(" ");
  if (!linkTypes.includes("noopener")) {
    linkTypes.push("noopener");
  }
  link.setAttribute("rel", linkTypes.join(" ").trim());
}

function addNewTabMessage(link) {
  if (!link.querySelector(".visually-hidden")) {
    link.insertAdjacentHTML(
      "beforeend",
      '<span class="visually-hidden"> (opens in a new tab)</span>'
    );
  }
}

document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  addRelNoOpener(link);
  addNewTabMessage(link);
});
