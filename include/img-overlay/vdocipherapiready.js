function onVdoCipherAPIReady() {
  var htmlStr = '<img class="vdo-overlay-image" src="https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">';
  var v = vdo.getObjects()[0];
  v.addEventListener('mpmlLoad', () => {
    v.injectThemeHtml(htmlStr);
  });
}
