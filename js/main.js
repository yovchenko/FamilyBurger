function offsetButton() {
    return document.getElementById("contentWrap").offsetTop
}

function checkBrowserSupport() {
    return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
}

function scrollFunction() {
    var e = offsetButton(),
        t = checkBrowserSupport();
    t > e && t > window.innerHeight ? document.getElementById("scrollTop").style.display = "block" : document.getElementById("scrollTop").style.display = "none", t >= 105 ? document.getElementsByClassName("navbar")[0].classList.add("scrolled-nav") : document.getElementsByClassName("navbar")[0].classList.remove("scrolled-nav")
}

function scrollIt(e) {
    function t() {
        var e = "now" in window.performance ? performance.now() : (new Date).getTime(),
            a = Math.min(1, (e - i) / n),
            s = u[o](a);
        window.scroll(0, Math.ceil(s * (d - c) + c)), window.pageYOffset !== d ? requestAnimationFrame(t) : r && r()
    }
    var n = arguments.length <= 1 || void 0 === arguments[1] ? 200 : arguments[1],
        o = arguments.length <= 2 || void 0 === arguments[2] ? "linear" : arguments[2],
        r = arguments[3],
        u = {
            linear: function (e) {
                return e
            },
            easeInQuad: function (e) {
                return e * e
            },
            easeOutQuad: function (e) {
                return e * (2 - e)
            },
            easeInOutQuad: function (e) {
                return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
            },
            easeInCubic: function (e) {
                return e * e * e
            },
            easeOutCubic: function (e) {
                return --e * e * e + 1
            },
            easeInOutCubic: function (e) {
                return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
            },
            easeInQuart: function (e) {
                return e * e * e * e
            },
            easeOutQuart: function (e) {
                return 1 - --e * e * e * e
            },
            easeInOutQuart: function (e) {
                return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
            },
            easeInQuint: function (e) {
                return e * e * e * e * e
            },
            easeOutQuint: function (e) {
                return 1 + --e * e * e * e * e
            },
            easeInOutQuint: function (e) {
                return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
            }
        },
        c = window.pageYOffset,
        i = "now" in window.performance ? performance.now() : (new Date).getTime(),
        a = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
        s = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
        l = "number" == typeof e ? e : e.offsetTop,
        d = Math.round(a - l < s ? a - s : l);
    if ("requestAnimationFrame" in window == !1) return window.scroll(0, d), void(r && r());
    t()
}

function scrollGetSpeed(e) {
    return (document.body.clientHeight + e.offsetTop) / 4
}
window.onresize = offsetButton, window.onscroll = scrollFunction, document.getElementById("scrollTop").addEventListener("click", function (e) {
    e.stopPropagation(), e.preventDefault();
    var t = scrollGetSpeed(this);
    scrollIt(document.getElementsByClassName("targetTop")[0], t, "linear", function () {})
}), document.getElementsByClassName("navbar-toggle")[0].onclick = function () {
    var e = document.getElementsByClassName("navbar")[0];
    "false" === this.getAttribute("aria-expanded") || null === this.getAttribute("aria-expanded") && !e.classList.contains("activeBar") ? (e.classList.add("activeBar"), e.style.height = "auto") : e.classList.remove("activeBar")
};