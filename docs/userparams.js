var doc = document;
var styleSheet = doc.createElement("style");
var docURL = window.location.href;
var css_link = ""
var params = [];

// filter out the website origin "example.github.io"
docURL = docURL.replace(window.location.origin, '');

// if /#/ found then we have URL parameters
// grabbing the parameters part of the URL
if (docURL.indexOf('/#/') !== -1) { 
  docURL = docURL.split('/#/')[1];
  if (docURL != '') {

    // if "link: exist remove it from docUrl and add it to css_link"
    if(docURL.indexOf('link:') !== -1) {
      css_link = docURL.split('/link:')[1];
      docURL = docURL.split('/link:')[0];
    }
    
    // split the URL final string o get an object with all params 
    params = docURL.split('/');
    // add css_link to params
    params.push(css_link)
    console.log("params:",params);

    if(params[2] != ""){
        if(document.createStyleSheet) {
            document.createStyleSheet(params[2]);
        }
        else {
            var styles = `@import url(${params[2]});`;
            var newSS = document.createElement('link');
            newSS.rel='stylesheet';
            newSS.href='data:text/css,'+escape(styles);
            document.getElementsByTagName("head")[0].appendChild(newSS);
        }
    }

    if(params[1] != ""){
      styleSheet.type = "text/css"
      styleSheet.innerText = params[1]
      doc.head.appendChild(styleSheet)
    }

    if(params[0] != ""){
      doc.getElementById("add2me").innerHTML = 
      `<div class="github-widget" data-username="${params[0]}"></div>`
    }
  }
} else {
  console.log('No URL parameters found');
    doc.getElementById("add2me").innerHTML = `<p>No URL parameters found</p>`;
}