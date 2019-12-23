WebFont.load({
  google: {
    families: ['PT Sans:400,700,400italic,700italic']
  }
});
jQuery(document.links).filter(function () {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');

const swup = new Swup();
