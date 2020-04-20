// убеждаемся, что вся стр-ца загружена, все картинки загружены, плагин с каруселью загружен
$(document).ready(function () {
    // через селектор jquery находит элемент по id #carousel1 (или по классу .owl-carousel) и к нему применяется метод Карусель .owlCarousel
    $("#carousel1").owlCarousel({
        items: 1, 
        nav: true,
        loop: true,
        margin: 10,
        dots: false,
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