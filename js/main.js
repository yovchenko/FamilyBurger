$( document ).ready(function() {
    function preloader() {
	if (document.getElementById) {
		document.getElementById("preload-01").style.background = "url('../images/slide-1-lg.jpg') no-repeat -9999px -9999px";
		document.getElementById("preload-02").style.background = "url('../images/slide-2-lg.jpg') no-repeat -9999px -9999px";
        document.getElementById("preload-03").style.background = "url('../images/slide-3-lg.jpg') no-repeat -9999px -9999px";
        document.getElementById("preload-04").style.background = "url('../images/slide-1-md.jpg') no-repeat -9999px -9999px";
		document.getElementById("preload-05").style.background = "url('../images/slide-2-md.jpg') no-repeat -9999px -9999px";
		document.getElementById("preload-06").style.background = "url('../images/slide-3-md.jpg') no-repeat -9999px -9999px";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader)
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