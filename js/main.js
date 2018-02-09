var keyboardHeight,
resizeTimeout,
scrollHeight = $(document).height(),
scrollPosition = $(window).height() + $(window).scrollTop(),
header = document.getElementsByClassName('navbar')[0],
footer = document.getElementsByClassName('footer-wrapper')[0],
keyboard = false;

window.addEventListener("orientationchange", function () {
  if (keyboard) {
    window.lastOrientation = true;
  }
}, false);

function updateWindowSize() {
  window.lastInnerWidth = window.innerWidth;
  window.lastInnerHeight = window.innerHeight;
  // Stays the same for iOS, so that's our ticket to detect iOS keyboard
  window.lastOrientation = false;
  window.lastBodyHeight = document.body.clientHeight;
};

function detectKeyboard() {
  function orientationChange() {
    if (window.lastOrientation) {
      return !window.lastOrientation;
    } else {
      return window.lastOrientation;
    }
  }

  // No orientation change, keyboard opening
  if ((window.lastInnerHeight - window.innerHeight > 150) && window.innerWidth == window.lastInnerWidth) {
    keyboardHeight = window.lastInnerHeight - window.innerHeight;
    updateWindowSize();
    return keyboardHeight;
  }
  // Orientation change with keyboard already opened
  if (orientationChange() && keyboard) {
    keyboardHeight = screen.height - window.topBarHeight - window.innerHeight;
    updateWindowSize();
    return keyboardHeight;
  }

  // No orientation change, keyboard closing
  if ((window.innerHeight - window.lastInnerHeight > 150) && window.innerWidth == window.lastInnerWidth) {
    keyboardHeight = -1;
    updateWindowSize();
    return keyboardHeight;
  }

  // Orientation change or regular resize, no keyboard action
  keyboardHeight = 0;
  updateWindowSize();
  return keyboardHeight;
};

function keyboardShift(keyboardHeight) {
  document.getElementsByClassName('body')[0].className = 'body keyboard-open';
  keyboard = true;
};

function removeKeyboardShift() {
  document.getElementsByClassName('body')[0].className = 'body';
  keyboard = false;
};

// OnStart innit
(function () {
  updateWindowSize();
  window.topBarHeight = screen.height - window.innerHeight;
  window.addEventListener("resize", resizeThrottler, false);
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function () {
        resizeTimeout = null;
        actualResizeHandler();
        // The actualResizeHandler will execute at a rate of 15fps
      }, 66);
    }
  }

  function actualResizeHandler() {
     offsetButton;
    keyboardHeight = detectKeyboard();
    if (keyboardHeight > 0) {
      keyboardShift(keyboardHeight);
    } else if (keyboardHeight == -1) {
      removeKeyboardShift();
    }
  }
}());

if ($(window).height() === scrollPosition) {
  header.classList.remove('scrolled-nav');
}
else if ((scrollHeight - scrollPosition) / scrollHeight <= 0) {
  footer.classList.add('scrolled-footer')
}
else {
  header.classList.add('scrolled-nav');
}

  function offsetButton() {
    return document.getElementById('contentWrap').offsetTop;
  };

  function checkBrowserSupport() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
  }

  window.onscroll = scrollFunction;

  function scrollFunction() {
    var scrollOffset = offsetButton();
    var scrollElm = checkBrowserSupport();
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    header.classList.add('scrolled-nav');
    footer.classList.remove('scrolled-footer')
    if (scrollElm > scrollOffset) {
      document.getElementById('scrollTop').style.display = "block";
    } else {
      document.getElementById('scrollTop').style.display = "none";
    }
    if ((scrollHeight - scrollPosition) / scrollHeight <= 0) {
      footer.classList.add('scrolled-footer')
    }
    if ($(window).height() === scrollPosition) {
      header.classList.remove('scrolled-nav');
    }
  }

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
  function scrollGetSpeed (elem) {
    var pixels = document.body.clientHeight + elem.offsetTop,
    pixelsPerMs = 4; 
    return pixels / pixelsPerMs;
  }

    // Scroll to section 
  $('#selectMenu').change(function (event) {
    var scrollTime = 0;
    var $option = $('#selectMenu option:selected').text();
    if ($option === 'Піца') {
       var pizza = document.getElementById('pizza');
        scrollTime = scrollGetSpeed(pizza);
        scrollIt(pizza, scrollTime, 'linear', function () {});
    } else if ($option === 'Роли') {
      var roll = document.getElementById('roll');
        scrollTime = scrollGetSpeed(roll);
        scrollIt(roll, scrollTime, 'linear', function () {});
    } else if ($option === 'Салати') {
      var salat = document.getElementById('salat');
        scrollTime = scrollGetSpeed(salat); 
        scrollIt(salat, scrollTime, 'linear', function () {});
    } else if ($option === 'Різне') {
      var food = document.getElementById('chicken');
        scrollTime = scrollGetSpeed(food);
        scrollIt(food, scrollTime, 'linear', function () {});
    }
    $(this).val('burger');
});

  // Scroll to section 
  document.getElementById('scrollTop').addEventListener('click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    var scrollTime = scrollGetSpeed(this);
    scrollIt(document.getElementsByClassName('targetTop')[0], scrollTime, 'linear', function () {});
  });

  document.getElementsByClassName('navbar-toggle')[0].onclick = function () {
    if (this.getAttribute("aria-expanded") === 'false' || this.getAttribute("aria-expanded") === null && !header.classList.contains("activeBar")) {
      header.classList.add("activeBar");
      header.style.height = 'auto';
    } else {
      header.classList.remove("activeBar");
    }
  };
  