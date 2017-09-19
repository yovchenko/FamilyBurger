 $(document).ready(function() {
    let $carousel = $('.carousel');
    $carousel.carousel();
    $carousel.carousel({
        interval: 3500,
        pause: "false",
        wrap: true
    });
    $carousel.swiperight(function () {
        $(this).carousel('prev');
    });
    $carousel.swipeleft(function () {
        $(this).carousel('next');
    });
});
