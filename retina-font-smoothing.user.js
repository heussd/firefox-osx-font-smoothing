// ==UserScript==
// @description		Enables OS X font smoothing in Firefox by default
// ==/UserScript==

// http://greasemonkey.win-start.de/patterns/add-css.html
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('body, input {-moz-osx-font-smoothing: grayscale !important;}');
