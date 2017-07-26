$( document ).ready(function() {
$('.carousel').carousel({
  interval: 3000
});
    $('#myCarousel').carousel();
    var winWidth = $(window).innerWidth();
    $(window).resize(function () {

        if ($(window).innerWidth() < winWidth) {
            $('.carousel-inner>.carousel-item>img').css({
                'min-width': winWidth, 'width': winWidth
            });
        }
        else {
            winWidth = $(window).innerWidth();
            $('.carousel-inner>.carousel-item>img').css({
                'min-width': '', 'width': ''
            });
        }
    });
});