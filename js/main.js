    
$(document).ready(function () {
    function preloader() {
        if (document.images && window.matchMedia('(min-width: 768px)').matches) {
            let img1 = new Image();
            let img2 = new Image();
            let img3 = new Image();
            let img4 = new Image();
            img1.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-1.jpg";
            img2.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-2.jpg";
            img3.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-3.jpg";
            img4.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-4.jpg";
        }

        else if (document.images && window.matchMedia('(max-width: 767px) and (min-width: 577px)').matches) {
            let img5 = new Image();
            let img6 = new Image();
            let img7 = new Image();
            let img8 = new Image();
            img5.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-1-pad.jpg";
            img6.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-2-pad.jpg";
            img7.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-3-pad.jpg";
            img8.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-4-pad.jpg";
        }

        else {
            let img9 = new Image();
            let img10 = new Image();
            let img11 = new Image();
            let img12 = new Image();
            img9.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-1-mob.jpg";
            img10.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-2-mob.jpg";
            img11.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-3-mob.jpg";
            img12.src = "https://yovchenko.github.io/familyBurger/images/carousel/img-4-mob.jpg";
        }
    }
    function addLoadEvent(func) {
        let oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function () {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    }
    addLoadEvent(preloader);
    let $carousel = $('.carousel');
    $carousel.carousel();
    $carousel.carousel({
        interval: 3500,
        pause: "false",
        wrap: true
    });
    $carousel.swiperight(function () {
        $(this).carousel('prev');
    });
    $carousel.swipeleft(function () {
        $(this).carousel('next');
    });
});
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}
function goTop() {
    $('html,body').animate({ scrollTop: 0 }, 'slow');
}