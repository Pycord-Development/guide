/*
 * Appends a "Licensed under the Unlicense license" footer to every Python code
 * block.
 */
(function () {
  var LICENSE_URL = "/licenses/unlicense.txt";
  var LINK_TEXT = "the Unlicense license";
  var SELECTOR = ".language-python.highlight, .language-py.highlight";

  function decorate() {
    var blocks = document.querySelectorAll(SELECTOR);
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if (block.dataset.pycLicense) continue;
      block.dataset.pycLicense = "1";

      var bar = document.createElement("div");
      bar.className = "pyc-code-license";
      bar.appendChild(document.createTextNode("Licensed under "));

      var link = document.createElement("a");
      link.href = LICENSE_URL;
      link.textContent = LINK_TEXT;
      link.target = "_blank";
      link.rel = "noopener";
      bar.appendChild(link);

      block.appendChild(bar);
    }
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(decorate);
  } else {
    document.addEventListener("DOMContentLoaded", decorate);
  }
})();
