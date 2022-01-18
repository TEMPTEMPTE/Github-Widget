var doc = document;
var styleSheet = doc.createElement("style");
var docURL = window.location.href;
var params = [];

// filter out the website origin "example.github.io"
docURL = docURL.replace(window.location.origin, '');

// if /#/ found then we have URL parameters
// grabbing the parameters part of the URL
if (docURL.indexOf('/#/') > -1) {
  docURL = docURL.split('/#/')[1];
  if (docURL != '') {

    // omit the last forward slash if exist
    if (docURL[docURL.length - 1] == '/') {
      docURL = docURL.substring(0, docURL.length - 1);
    }
    // split the URL final string o get an object with all params 
    params = docURL.split('/');
    console.log(params);

    if(params[1] != null){
      styleSheet.type = "text/css"
      styleSheet.innerText = params[1]
      document.head.appendChild(styleSheet)
    }

    if(params[0] != null){
      doc.getElementById("add2me").innerHTML = 
      `<div class="github-widget" data-username="${params[0]}"></div>`
    }
  }
} else {
  console.log('No URL parameters found');
    doc.getElementById("add2me").innerHTML = `<p>No URL parameters found</p>`;
}
