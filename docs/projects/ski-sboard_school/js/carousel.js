// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// убеждаемся, что вся стр-ца загружена, все картинки загружены, плагин с каруселью загружен

$(document).ready(function () {
    // через селектор jquery находит элемент по id #carousel1 (или по классу .owl-carousel) и к нему применяется метод Карусель .owlCarousel
    
    $(".owl-carousel").owlCarousel({
        items: 5, 
        margin: 10,
        // nav: true,
        dots: true,
        loop: true,
        navSpeed: 800,
        // navText: ['', ''],
        responsive: {
            0: {
                items: 1
            // },
            // 600: {
            //     items: 3
            // },
            // 1000: {
            //     items: 1
            }
        }
    });
});