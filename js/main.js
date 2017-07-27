$( document ).ready(function() {
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