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
    var $images = $('.product-img');
    var itemImg = Array.prototype.slice.call(document.querySelectorAll('.container .item-img'));
    console.log(itemImg);
    for (var i = 0; i < itemImg.length; i++) {
        itemImg[i].onclick = addImage;
    }
    function addImage() {
        var num = itemImg.indexOf(this) + 1;
        $images.css('background-image', 'url(images/product/img-' + num + '.png)');
    }
});
