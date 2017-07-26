$( document ).ready(function() {
         $('.carousel').carousel();
         var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');
$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});
         $('.carousel').carousel({
         interval: 3500,
         pause: "false"
          });
});
   