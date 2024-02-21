"use strict";

$(document).ready(function () {
    let bg_navbar = getComputedStyle(document.documentElement).getPropertyValue('--bg-navbar');
    let heightSlider = $('.navbar').height();
    console.log(`heightSlider: ${heightSlider}`);
    $('.content').css({ marginTop: heightSlider + 0 + 'px' });
    $('.presentacion').css({ marginTop: (- heightSlider) + 'px' });

    /* FONDO NAVBAR SCROLL VISIBILITY */
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 60) {
            $('.navbar-bg-color').css('background', bg_navbar);
        } else {
            //$('.navbar').css('background', 'transparent');
        }
    });
});