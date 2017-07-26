$( document ).ready(function() {
    var $carousel = $('.carousel');
    $carousel.carousel();
    $carousel.carousel({
         interval: 3500,
         pause: "false"
    });

var $itemNum;    
$('.carousel-control-next').click(function(){
$itemNum = $('.active').index();  
$carousel.carousel($itemNum + 1);
$('.carousel-control-prev').click(function(){
$itemNum = $('.active').index();  
$carousel.carousel($itemNum - 1);
});
});
});