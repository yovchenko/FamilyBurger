document.addEventListener('DOMContentLoaded', function () {
      var navbar = {
        offsetY: 105,
        init: function () {
          this.header = document.getElementsByTagName('header')[0];
          this.menu = document.getElementsByClassName('navbar')[0];
          this.toggle = document.getElementsByClassName('navbar-toggle')[0];
          this.wrap = document.getElementById('contentWrap');
          this.clone = this.menu.cloneNode(true);
        },
        state: function () {
          return this.toggle.getAttribute("aria-expanded") === 'false' || this.toggle.getAttribute("aria-expanded") === null;
        },
        scrollElm: function () {
          return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        },
        elHeight: function () {
          return document.body.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        }
      };
      navbar.init();
      navbar.clone.classList.add("clone");
      navbar.header.insertBefore(navbar.clone, navbar.lastChild);

      window.addEventListener('scroll', scrollFunction, false);
      window.addEventListener("touchmove", touchFunction, true);

      if (navbar.scrollElm() >= navbar.offsetY) $(navbar.menu).add(navbar.clone).addClass('scrolled-nav'); // initial value
      else $(navbar.menu).removeClass('scrolled-nav');

      function touchFunction(event) {
        if (navbar.state()) {
          if (navbar.scrollElm() >= navbar.offsetY) $(navbar.clone).addClass('scrolled-nav scrolled-top')
          .add(navbar.menu).addClass('scrolled-nav');
          else $(navbar.menu).removeClass('scrolled-nav').removeClass('no-animation')
          .add(navbar.clone).removeClass('scrolled-top');
        }
      }

      function scrollFunction() {
        if (navbar.state()) {
          if (navbar.scrollElm() >= navbar.offsetY) $(navbar.clone).addClass('scrolled-nav scrolled-top')
          .add(navbar.menu).addClass('scrolled-nav');
          else $(navbar.menu).removeClass('scrolled-nav').removeClass('no-animation')
          .add(navbar.clone).removeClass('scrolled-top');
        }
        if (navbar.scrollElm() > navbar.elHeight() / 3) {
          document.getElementsByClassName('scrollTop')[0].classList.add('visible');
        } else document.getElementsByClassName('scrollTop')[0].classList.remove('visible');
      }

      navbar.toggle.addEventListener('click', function (event) {
        event.preventDefault();
        if (navbar.state()) {
          $(navbar.menu).removeClass('no-animation').addClass('active-bar');
        } else {
          $(navbar.menu).removeClass('active-bar');
          if (navbar.scrollElm() >= navbar.offsetY) $(navbar.menu).addClass('scrolled-nav no-animation');
          else $(navbar.menu).removeClass('scrolled-nav');
        }
      });

  function scrollIt(destination) {
    var duration = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
    var easing = arguments.length <= 2 || arguments[2] === undefined ? 'linear' : arguments[2];
    var callback = arguments[3];

    // Predefine list of available timing functions
    var easings = {
      linear: function linear(t) {
        return t;
      },
      easeInQuad: function easeInQuad(t) {
        return t * t;
      },
      easeOutQuad: function easeOutQuad(t) {
        return t * (2 - t);
      },
      easeInOutQuad: function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      easeInCubic: function easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic: function easeOutCubic(t) {
        return --t * t * t + 1;
      },
      easeInOutCubic: function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart: function easeOutQuart(t) {
        return 1 - --t * t * t * t;
      },
      easeInOutQuart: function easeInOutQuart(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint: function easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
      },
      easeInOutQuint: function easeInOutQuint(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      }
    };

    // Store initial position of a window and time
    // If performance is not available in your browser
    // It will fallback to new Date().getTime() - thanks IE < 10
    var start = window.pageYOffset;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    // const startTime = typeof(window.performance['now']) == 'function' ? performance.now() : new Date().getTime();

    // Take height of window and document to sesolve max scrollable value
    // Prevent requestAnimationFrame() from scrolling below maximum scollable value
    // Resolve destination type (node or number)
    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    // If requestAnimationFrame is not supported
    // Move window to destination position and trigger callback function
    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }

    // function resolves position of a window and moves to exact amount of pixels
    // Resolved by calculating delta and timing function choosen by user
    function scroll() {
      var now = 'now' in window.performance ? performance.now() : new Date().getTime();
      var time = Math.min(1, (now - startTime) / duration);
      var timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

      // Stop requesting animation when window reached its destination
      // And run a callback function
      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }

      // If window still needs to scroll to reach destination
      // Request another scroll invokation
      requestAnimationFrame(scroll);
    }

    // Invoke scroll and sequential requestAnimationFrame
    scroll();
  }

  //measure scroll speed
  function scrollGetSpeed(elem) {
    var pageHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight,
      elementOffset = elem.offsetTop || elem.getBoundingClientRect().top,
      pixels = pageHeight + elementOffset,
      pixelsPerMs = 4;
    return pixels / pixelsPerMs;
  }

  document.getElementsByClassName('scrollTop')[0].addEventListener('click', function (event) {
    event.preventDefault();
    var scrollTime = scrollGetSpeed(this);
    scrollIt(document.getElementsByClassName('targetTop')[0], scrollTime, 'linear', function () {});
  });
}, false);