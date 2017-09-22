 $(document).ready(function() {
    let $carousel = $('.carousel');
    $carousel.swiperight(function () {
        $(this).carousel('prev');
    });
    $carousel.swipeleft(function () {
        $(this).carousel('next');
    });
});
