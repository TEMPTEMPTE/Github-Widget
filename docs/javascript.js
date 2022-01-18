var doc = document;
var styleSheet = doc.createElement("style");
var docURL = window.location.href;
var params = [];

docURL = docURL.replace(window.location.origin, '');

if (docURL.indexOf('/#/') > -1) {
  docURL = docURL.split('/#/')[1];
  if (docURL != '') {
    if (docURL[docURL.length - 1] == '/') {
      docURL = docURL.substring(0, docURL.length - 1);
    }
    params = docURL.split('/');

    doc.getElementById("add2me").innerHTML = 
    `<div class="github-widget" data-username="${params[0]}"></div>`

    styleSheet.type = "text/css"
    styleSheet.innerText = params[1]
    document.head.appendChild(styleSheet)
    }
} else {
    doc.getElementById("add2me").innerHTML = `<p>No username given</p>`;
}
