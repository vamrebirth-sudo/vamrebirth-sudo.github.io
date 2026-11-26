(function () {
  var allowed = { terracotta: 1, matcha: 1, yuzu: 1, indigo: 1 };
  var accent = null;
  try {
    var q = new URLSearchParams(location.search).get('accent');
    if (q && allowed[q]) {
      accent = q;
      sessionStorage.setItem('eatmatch-accent', q);
    } else {
      var saved = sessionStorage.getItem('eatmatch-accent');
      if (saved && allowed[saved]) accent = saved;
    }
  } catch (e) {}
  if (accent) {
    document.documentElement.setAttribute('data-accent', accent);
  }
})();
