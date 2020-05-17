WebFont.load({
  google: {
    families: ['Lato:400;700,Aleo:700']
  }
});
jQuery(document.links).filter(function () {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');

const swup = new Swup();
