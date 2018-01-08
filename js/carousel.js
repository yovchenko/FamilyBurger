$(document).ready(function() {
    $carousel = $('#myCarousel');
    if (document.images && window.matchMedia('(min-width: 769px)').matches) {
    $carousel.carousel({
    interval: 3500,
    pause: "false",
     wrap: true
    });
    }
    else if (document.images && window.matchMedia('(max-width: 768px)').matches) {
    $carousel.carousel({
    pause: true,
    interval: false
    });
    $carousel.swiperight(function () {
        $(this).carousel('prev');
    });
    $carousel.swipeleft(function () {
        $(this).carousel('next');
    });
    }
});
