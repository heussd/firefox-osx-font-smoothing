// ==UserScript==
// @name Retina font smoothing
// @description		Enables OS X font smoothing in Firefox by default
// @namespace https://github.com/heussd/retina-font-smoothing
// @updateURL https://github.com/heussd/retina-font-smoothing/raw/master/retina-font-smoothing.user.js
// @match *://*/*
// @grant none
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
