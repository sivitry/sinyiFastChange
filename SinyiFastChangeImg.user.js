// ==UserScript==
// @name         SinyiFastChangeImg
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  an plugin to Sinyi website, can use keyboard to change left/right img.
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

window.onload = function() {
    document.onkeydown = pagebook;
};

function pagebook(e) {
    var leftvalue, rightvalue;
    //var an = document.querySelectorAll('a[href]');
    var cprev = document.querySelector('.carousel-control-prev');
    var cnext = document.querySelector('.carousel-control-next');


    e = e || window.event;
    switch (e.keyCode) {
        case 37:
            //alert('left');
            //$(".carousel-control-prev").click();
            cprev.click();
            break;
        case 38:
            //alert('up');
            break;
        case 39:
            //$(".carousel-control-next").click();
            cnext.click();
            break;
        case 40:
            //alert('down');
            break;
    }
}