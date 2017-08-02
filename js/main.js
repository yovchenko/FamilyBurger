$(document).ready(function () {
    function preloader() {
        if (document.images && window.matchMedia('(min-width: 769px)').matches) {
            var img1 = new Image();
            var img2 = new Image();
            var img3 = new Image();
         /*   img1.src = "http://yovchenko.github.io/familyBurger/images/slide-1-lg.jpg";
            img2.src = "http://yovchenko.github.io/familyBurger/images/slide-2-lg.jpg";
            img3.src = "http://yovchenko.github.io/familyBurger/images/slide-3-lg.jpg"; */
        }

        else if (document.images && window.matchMedia('(max-width: 768px)').matches) {
            var img4 = new Image();
            var img5 = new Image();
            var img6 = new Image();
           /* img4.src = "http://yovchenko.github.io/familyBurger/images/slide-1-md.jpg";
            img5.src = "http://yovchenko.github.io/familyBurger/images/slide-2-md.jpg";
            img6.src = "http://yovchenko.github.io/familyBurger/images/slide-3-md.jpg";*/
        }
    }
    function addLoadEvent(func) {
        var oldonload = window.onload;
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
    var $carousel = $('.carousel');
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

var $images = $('.product-img');
function modalFunction2() {
$images.css('background-image','url("images/product/img-2.png")');
}
function modalFunction3() {
$images.css('background-image','url("images/product/img-3.png")');
}
function modalFunction4() {
$images.css('background-image','url("images/product/img-4.png")');
}
function modalFunction5() {
$images.css('background-image','url("images/product/img-5.png")');
}
function modalFunction6() {
$images.css('background-image','url("images/product/img-6.png")');
}
function modalFunction7() {
$images.css('background-image','url("images/product/img-7.png")');
}
function modalFunction8() {
$images.css('background-image','url("images/product/img-8.png")');
}
function modalFunction9() {
$images.css('background-image','url("images/product/img-9.png")');
}
function modalFunction10() {
$images.css('background-image','url("images/product/img-10.png")');
}
function modalFunction11() {
$images.css('background-image','url("images/product/img-11.png")');
}
function modalFunction12() {
$images.css('background-image','url("images/product/img-12.png")');
}
function modalFunction13() {
$images.css('background-image','url("images/product/img-13.png")');
}
function modalFunction14() {
$images.css('background-image','url("images/product/img-14.png")');
}
function modalFunction15() {
$images.css('background-image','url("images/product/img-15.png")');
}
function modalFunction16() {
$images.css('background-image','url("images/product/img-16.png")');
}
function modalFunction17() {
$images.css('background-image','url("images/product/img-17.png")');
}
function modalFunction18() {
$images.css('background-image','url("images/product/img-18.png")');
}
function modalFunction19() {
$images.css('background-image','url("images/product/img-19.png")');
}
function modalFunction20() {
$images.css('background-image','url("images/product/img-20.png")');
}
