/** Script that is placed at the end of the body */

function addRelNoOpener(link) {
  let linkTypes = (link.getAttribute('rel') || '').split(' ');
  if (!linkTypes.includes('noopener')) {
    linkTypes.push('noopener');
  }
  link.setAttribute('rel', linkTypes.join(' ').trim());
}

function addNewTabMessage(link) {
  if (!link.querySelector('.visually-hidden')) {
    link.insertAdjacentHTML('beforeend', '<span class="visually-hidden"> (opens in a new tab)</span>');
  }
}

document.querySelectorAll('a[target="_blank"]').forEach(link => {
  addRelNoOpener(link);
  addNewTabMessage(link);
});

if ("fonts" in document) {
  var latoRegular = new FontFace("Lato", "url(/fonts/lato/Lato-Regular-hint-all.woff2) format('woff2'), url(/fonts/lato/Lato-Regular-hint-all.woff) format('woff')");
  var latoBold = new FontFace("Lato", "url(/fonts/lato/Lato-Bold-hint-all.woff2) format('woff2'), url(/fonts/lato/Lato-Bold-hint-all.woff) format('woff')", { weight: "700" });
  var aleoBold = new FontFace("Aleo", "url(/fonts/aleo/Aleo-Bold-hint-all.woff2) format('woff2'), url(/fonts/aleo/Aleo-Bold-hint-all.woff) format('woff')", { weight: "700" });

  Promise.all([latoRegular.load(), latoBold.load(), aleoBold.load()]).then(function (fonts) {
    fonts.forEach(function (font) {
      document.fonts.add(font);
    });
  });
}

if (!("fonts" in document) && "head" in document) {
  // Awkwardly dump the second stage @font-face blocks in the head
  var style = document.createElement("style");
  // Note: Edge supports WOFF2
  style.innerHTML = "@font-face { font-family: Lato; src: url(/fonts/lato/Lato-Regular-hint-all.woff2) format('woff2'), url(/fonts/lato/Lato-Regular-hint-all.woff) format('woff'); } @font-face { font-family: Lato; font-weight: 700; src: url(/fonts/lato/Lato-Bold-hint-all.woff2) format('woff2'), url(/fonts/lato/Lato-Bold-hint-all.woff) format('woff'); } @font-face { font-family: Aleo; font-weight: 700; src: url(/fonts/aleo/Aleo-Bold-hint-all.woff2) format('woff2'), url(/fonts/aleo/Aleo-Bold-hint-all.woff) format('woff'); }";
  document.head.appendChild(style);
}