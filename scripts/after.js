function addRelNoOpener(link) {
  let linkTypes = (link.getAttribute('rel') || '').split(' ');
  if (!linkTypes.includes('noopener')) {
    linkTypes.push('noopener');
  }
  link.setAttribute('rel', linkTypes.join(' ').trim());
}

function addNewTabMessage(link) {
  if (!link.querySelector('.screen-reader-only')) {
    link.insertAdjacentHTML('beforeend', '<span class="sr-only">(opens in a new tab)</span>');
  }
}

document.querySelectorAll('a[target="_blank"]').forEach(link => {
  addRelNoOpener(link);
  addNewTabMessage(link);
});