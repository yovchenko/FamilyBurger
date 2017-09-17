$(document).ready(function () {
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

$('#scrollTop').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 'slow');
});
});