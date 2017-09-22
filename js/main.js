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