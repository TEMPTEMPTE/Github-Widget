var doc = document;
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
    params = params[0]
    if(doc.getElementById("add2me") != null){
        doc.getElementById("add2me").innerHTML = 
        `<div class="github-widget" data-username="${params}"></div>`;
    }
    }
} else {
    if(doc.getElementById("add2me") != null){
        doc.getElementById("add2me").innerHTML = `<p>No username given</p>`;
    }
}