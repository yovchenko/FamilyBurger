<<<<<<< HEAD
$(document).ready(function () {
let offsetButton = (function () {
let scrollOffset = document.getElementById('contentWrap').offsetTop;
return scrollOffset;
});
window.onresize = offsetButton;
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  
    if (document.body.scrollTop > offsetButton() || document.documentElement.scrollTop > offsetButton()) {
        document.getElementById('scrollTop').style.display = "block";
    } else {
        document.getElementById('scrollTop').style.display = "none";
    }
}

$('#scrollTop').on('click', function(event){
    event.stopPropagation();
    $('html,body').stop().animate({ scrollTop: 0 }, 'slow');
    return false;
});
});
=======
$(document).ready(function(){function e(){return document.getElementById("contentWrap").offsetTop}function n(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function t(e){function n(){var e="now"in window.performance?performance.now():(new Date).getTime(),c=Math.min(1,(e-r)/t),l=a[o](c);window.scroll(0,Math.ceil(l*(d-u)+u)),window.pageYOffset!==d?requestAnimationFrame(n):i&&i()}var t=arguments.length<=1||void 0===arguments[1]?200:arguments[1],o=arguments.length<=2||void 0===arguments[2]?"linear":arguments[2],i=arguments[3],a={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},u=window.pageYOffset,r="now"in window.performance?performance.now():(new Date).getTime(),c=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),l=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,s="number"==typeof e?e:e.offsetTop,d=Math.round(c-s<l?c-l:s);if("requestAnimationFrame"in window==!1)return window.scroll(0,d),void(i&&i());n()}function o(e){return(document.body.clientHeight+e.offsetTop)/4}window.onresize=e,window.onscroll=function(){var t=e(),o=n();document.getElementById("scrollTop").style.display=o>t?"block":"none",o>=105?$(".navbar").addClass("scrolled-nav"):$(".navbar").removeClass("scrolled-nav")},$("#selectMenu").change(function(e){var n=$("#selectMenu option:selected").text();if("Піца"===n){var i=document.getElementById("pizza");t(i,o(i),"linear",function(){})}else if("Роли"===n){var a=document.getElementById("roll");t(a,o(a),"linear",function(){})}else if("Салати"===n){var u=document.getElementById("salat");t(u,o(u),"linear",function(){})}else if("Різне"===n){var r=document.getElementById("chicken");t(r,o(r),"linear",function(){})}$(this).val("burger")}),document.getElementById("scrollTop").addEventListener("click",function(e){e.stopPropagation(),e.preventDefault();var n=o(this);t(document.getElementsByClassName("targetTop")[0],n,"linear",function(){})}),document.getElementsByClassName("navbar-toggle")[0].onclick=function(){var e=document.getElementsByClassName("navbar")[0];"false"===this.getAttribute("aria-expanded")||null===this.getAttribute("aria-expanded")&&!e.classList.contains("activeBar")?(e.classList.add("activeBar"),e.style.height="auto"):e.classList.remove("activeBar")}});
>>>>>>> master
