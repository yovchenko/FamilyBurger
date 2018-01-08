<<<<<<< HEAD
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
=======
$(document).ready(function(){$carousel=$("#myCarousel"),document.images&&window.matchMedia("(min-width: 769px)").matches?$carousel.carousel({interval:3500,pause:"false",wrap:!0}):document.images&&window.matchMedia("(max-width: 768px)").matches&&($carousel.carousel({pause:!0,interval:!1}),$carousel.swiperight(function(){$(this).carousel("prev")}),$carousel.swipeleft(function(){$(this).carousel("next")}))});
>>>>>>> master
