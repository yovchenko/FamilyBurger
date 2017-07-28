$( document ).ready(function() {
var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "http://yovchenko.github.io/familyBurger/images/slide-1-lg.jpg",
    "http://yovchenko.github.io/familyBurger/images/slide-2-lg.jpg",
    "http://yovchenko.github.io/familyBurger/images/slide-3-lg.jpg",
    "http://yovchenko.github.io/familyBurger/images/slide-1-md.jpg",
    "http://yovchenko.github.io/familyBurger/images/slide-2-md.jpg",
    "http://yovchenko.github.io/familyBurger/images/slide-3-md.jpg"
)

var $carousel = $('.carousel');
    $carousel.carousel();
    $carousel.carousel({
         interval: 3500,
         pause: "false"
    });
 $carousel.swiperight(function() {  
    		  $(this).carousel('prev');  
	    		});  
		   $carousel.swipeleft(function() {  
		      $(this).carousel('next');  
}); 
});
