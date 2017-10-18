var anime = function() {
    var t = {
        linear: function(t, e, n, r) {
            return e + t / r * n
        },
        easeInQuad: function(t, e, n, r) {
            return n * (t /= r) * t + e
        },
        easeOutQuad: function(t, e, n, r) {
            return - n * (t /= r) * (t - 2) + e
        },
        easeInOutQuad: function(t, e, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t + e: -n / 2 * (--t * (t - 2) - 1) + e
        },
        easeInCubic: function(t, e, n, r) {
            return n * (t /= r) * t * t + e
        },
        easeOutCubic: function(t, e, n, r) {
            return n * ((t = t / r - 1) * t * t + 1) + e
        },
        easeInOutCubic: function(t, e, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t + e: n / 2 * ((t -= 2) * t * t + 2) + e
        },
        easeInQuart: function(t, e, n, r) {
            return n * (t /= r) * t * t * t + e
        },
        easeOutQuart: function(t, e, n, r) {
            return - n * ((t = t / r - 1) * t * t * t - 1) + e
        },
        easeInOutQuart: function(t, e, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e: -n / 2 * ((t -= 2) * t * t * t - 2) + e
        },
        easeInQuint: function(t, e, n, r) {
            return n * (t /= r) * t * t * t * t + e
        },
        easeOutQuint: function(t, e, n, r) {
            return n * ((t = t / r - 1) * t * t * t * t + 1) + e
        },
        easeInOutQuint: function(t, e, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e: n / 2 * ((t -= 2) * t * t * t * t + 2) + e
        },
        easeInSine: function(t, e, n, r) {
            return - n * Math.cos(t / r * (Math.PI / 2)) + n + e
        },
        easeOutSine: function(t, e, n, r) {
            return n * Math.sin(t / r * (Math.PI / 2)) + e
        },
        easeInOutSine: function(t, e, n, r) {
            return - n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
        },
        easeInExpo: function(t, e, n, r) {
            return 0 == t ? e: n * Math.pow(2, 10 * (t / r - 1)) + e
        },
        easeOutExpo: function(t, e, n, r) {
            return t == r ? e + n: n * ( - Math.pow(2, -10 * t / r) + 1) + e
        },
        easeInOutExpo: function(t, e, n, r) {
            return 0 == t ? e: t == r ? e + n: (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e: n / 2 * ( - Math.pow(2, -10 * --t) + 2) + e
        },
        easeInCirc: function(t, e, n, r) {
            return - n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
        },
        easeOutCirc: function(t, e, n, r) {
            return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
        },
        easeInOutCirc: function(t, e, n, r) {
            return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e: n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        },
        easeInElastic: function(t, e, n, r, a) {
            var i = 1.70158,
            o = r * (1 - Math.min(a, 99) / 100),
            u = n;
            if (0 == t) return e;
            if (1 == (t /= r)) return e + n;
            if (u < Math.abs(n)) {
                u = n;
                var i = o / 4
            } else var i = o / (2 * Math.PI) * Math.asin(n / u);
            return - (u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - i) * (2 * Math.PI) / o)) + e
        },
        easeOutElastic: function(t, e, n, r, a) {
            var i = 1.70158,
            o = r * (1 - Math.min(a, 999) / 1e3),
            u = n;
            if (0 == t) return e;
            if (1 == (t /= r)) return e + n;
            if (u < Math.abs(n)) {
                u = n;
                var i = o / 4
            } else var i = o / (2 * Math.PI) * Math.asin(n / u);
            return u * Math.pow(2, -10 * t) * Math.sin((t * r - i) * (2 * Math.PI) / o) + n + e
        },
        easeInOutElastic: function(t, e, n, r, a) {
            var i = 1.70158,
            o = r * (1 - Math.min(a, 99) / 100),
            u = n;
            if (0 == t) return e;
            if (2 == (t /= r / 2)) return e + n;
            if (u < Math.abs(n)) {
                u = n;
                var i = o / 4
            } else var i = o / (2 * Math.PI) * Math.asin(n / u);
            return 1 > t ? -.5 * (u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - i) * (2 * Math.PI) / o)) + e: u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - i) * (2 * Math.PI) / o) * .5 + n + e
        },
        easeInBack: function(t, e, n, r, a) {
            var a = 1.70158;
            return n * (t /= r) * t * ((a + 1) * t - a) + e
        },
        easeOutBack: function(t, e, n, r, a) {
            var a = 1.70158;
            return n * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + e
        },
        easeInOutBack: function(t, e, n, r, a) {
            var a = 1.70158;
            return (t /= r / 2) < 1 ? n / 2 * (t * t * (((a *= 1.525) + 1) * t - a)) + e: n / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + e
        },
        easeInBounce: function(t, e, n, r) {
            return n - jQuery.easing.easeOutBounce(r - t, 0, n, r) + e
        },
        easeOutBounce: function(t, e, n, r) {
            return (t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + e: 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e: 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e: n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
        },
        easeInOutBounce: function(e, n, r, a) {
            return a / 2 > e ? .5 * t.easeInBounce(2 * e, 0, r, a) + n: .5 * t.easeOutBounce(2 * e - a, 0, r, a) + .5 * r + n
        }
    },
    e = {
        duration: 1e3,
        delay: 0,
        loop: !1,
        autoPlay: !0,
        direction: "normal",
        easing: "easeInOutQuad",
        elasticity: 50,
        speed: 1,
        round: !1,
        begin: void 0,
        update: void 0,
        complete: void 0
    },
    n = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY"],
    r = function() {
        return {
            array: function(t) {
                return Array.isArray(t)
            },
            object: function(t) {
                return Object.prototype.toString.call(t).indexOf("Object") > -1
            },
            nodeList: function(t) {
                return t instanceof NodeList || t instanceof HTMLCollection
            },
            html: function(t) {
                return t.nodeType
            },
            svg: function(t) {
                return t instanceof SVGElement
            },
            number: function(t) {
                return ! isNaN(parseInt(t))
            },
            string: function(t) {
                return "string" == typeof t
            },
            func: function(t) {
                return "function" == typeof t
            },
            undef: function(t) {
                return "undefined" == typeof t
            },
            "null": function(t) {
                return "null" == typeof t
            },
            hex: function(t) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
            },
            rgb: function(t) {
                return /^rgb/.test(t)
            },
            rgba: function(t) {
                return /^rgba/.test(t)
            },
            hsl: function(t) {
                return /^hsl/.test(t)
            },
            color: function(t) {
                return r.hex(t) || r.rgb(t) || r.rgba(t) || r.hsl(t)
            }
        }
    } (),
    a = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t
    },
    i = function(t) {
        return r.string(t) ? t: t + ""
    },
    o = function(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    u = function(t) {
        for (var e = t.split(" "), n = /^[\#\.\[\]:>+~*A-Za-z][A-Za-z0-9\-_=:>+~*$|^()\"\'\[\]\.]*$/, r = 0; r < e.length; r++) if (!n.test(e[r])) return ! 1;
        return document.querySelectorAll(t).length ? document.querySelectorAll(t) : !1
    },
    s = function(t) {
        return t.reduce(function(t, e) {
            return t.concat(r.array(e) ? s(e) : e)
        },
        [])
    },
    c = function(t) {
        return r.array(t) ? t: (r.string(t) && (t = u(t) || t), r.nodeList(t) ? [].slice.call(t) : [t])
    },
    f = function(t, e) {
        return t.some(function(t) {
            return t === e
        })
    },
    l = function(t, e) {
        var n = {};
        return t.forEach(function(t) {
            var r = JSON.stringify(e.map(function(e) {
                return t[e]
            }));
            n[r] = n[r] || [],
            n[r].push(t)
        }),
        Object.keys(n).map(function(t) {
            return n[t]
        })
    },
    m = function(t) {
        var e = {};
        for (var n in t) e[n] = t[n];
        return e
    },
    d = function(t, e) {
        for (var n in e) t[n] = r.undef(t[n]) ? e[n] : t[n];
        return t
    },
    g = function(t) {
        var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        t = t.replace(e,
        function(t, e, n, r) {
            return e + e + n + n + r + r
        }),
        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
        r = parseInt(n[1], 16),
        a = parseInt(n[2], 16),
        i = parseInt(n[3], 16);
        return "rgb(" + r + "," + a + "," + i + ")"
    },
    b = function(t) {
        var e, n, r, t = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),
        a = parseInt(t[1]) / 360,
        i = parseInt(t[2]) / 100,
        o = parseInt(t[3]) / 100,
        u = function(t, e, n) {
            return 0 > n && (n += 1),
            n > 1 && (n -= 1),
            1 / 6 > n ? t + 6 * (e - t) * n: .5 > n ? e: 2 / 3 > n ? t + (e - t) * (2 / 3 - n) * 6 : t
        };
        if (0 == i) e = n = r = o;
        else var s = .5 > o ? o * (1 + i) : o + i - o * i;
        var c = 2 * o - s;
        return e = u(c, s, a + 1 / 3),
        n = u(c, s, a),
        r = u(c, s, a - 1 / 3),
        "rgb(" + 255 * e + "," + 255 * n + "," + 255 * r + ")"
    },
    h = function(t) {
        return r.rgb(t) || r.rgba(t) ? t: r.hex(t) ? g(t) : r.hsl(t) ? b(t) : void 0
    },
    p = function(t) {
        return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2]
    },
    v = function(t, e, n) {
        return p(e) ? e: t.indexOf("translate") > -1 ? p(n) ? e + p(n) : e + "px": t.indexOf("rotate") > -1 || t.indexOf("skew") > -1 ? e + "deg": e
    },
    y = function(t, e) {
        return (r.html(t) || r.svg(t)) && f(n, e) ? "transform": (r.html(t) || r.svg(t)) && M(t, e) ? "css": (r.html(t) || r.svg(t)) && t.getAttribute(e) && !t[e] ? "attribute": r["null"](t[e]) || r.undef(t[e]) ? void 0 : "object"
    },
    M = function(t, e) {
        return getComputedStyle(t).getPropertyValue(o(e))
    },
    I = function(t, e) {
        var n = e.indexOf("scale") > -1 ? 1 : 0,
        r = t.style.transform;
        if (!r) return n;
        for (var a = /(\w+)\((.+?)\)/g,
        i = [], o = [], u = []; i = a.exec(r);) o.push(i[1]),
        u.push(i[2]);
        var s = u.filter(function(t, n) {
            return o[n] === e
        });
        return s.length ? s[0] : n
    },
    w = function(t, e) {
        switch (y(t, e)) {
        case "transform":
            return I(t, e);
        case "css":
            return M(t, e);
        case "attribute":
            return t.getAttribute(e)
        }
        return t[e] || 0
    },
    O = function(t, e, n) {
        if (r.color(e)) return h(e);
        if (p(e)) return e;
        var a = p(p(t.to) ? t.to: t.from);
        return ! a && n && (a = p(n)),
        a ? e + a: e
    },
    E = function(t, e, n) {
        return e.reduce(function(e, r, a) {
            var r = r ? r: n[a - 1];
            return e + t[a - 1] + r
        })
    },
    x = function(t) {
        var e = /-?\d*\.?\d+/g;
        return {
            numbers: i(t).match(e) ? i(t).match(e).map(Number) : [0],
            strings: i(t).split(e)
        }
    },
    A = function(t) {
        return t.map(function(t, e) {
            return {
                target: t,
                id: e
            }
        })
    },
    k = function(t) {
        var n = d(t, e);
        return "alternate" !== n.direction || n.loop || (n.loop = 1),
        n
    },
    L = function(t, n) {
        var a = [];
        for (var i in t) if (!e.hasOwnProperty(i) && "targets" !== i) {
            var o = r.object(t[i]) ? m(t[i]) : {
                value: t[i]
            };
            o.name = i,
            a.push(d(o, n))
        }
        return a
    },
    S = function(t, e, n, a) {
        var i = c(r.func(n) ? n(t, a) : n);
        return {
            from: i.length > 1 ? i[0] : w(t, e),
            to: i.length > 1 ? i[1] : i[0]
        }
    },
    T = function(t, e, n, r) {
        var a = {};
        if ("transform" === n) a.from = t + "(" + v(t, e.from, e.to) + ")",
        a.to = t + "(" + v(t, e.to) + ")";
        else {
            var i = "css" === n ? M(r, t) : void 0;
            a.from = O(e, e.from, i),
            a.to = O(e, e.to, i)
        }
        return {
            from: x(a.from),
            to: x(a.to)
        }
    },
    P = function(t, e) {
        var n = [];
        return t.forEach(function(a, i) {
            var o = a.target;
            e.forEach(function(e) {
                var u = y(o, e.name);
                if (u) {
                    var s = S(o, e.name, e.value, i),
                    c = m(e);
                    c.animatables = a,
                    c.type = u,
                    c.round = r.color(s.from) ? !0 : c.round,
                    c.delay = (r.func(c.delay) ? c.delay(i, t.length) : c.delay) / c.speed,
                    c.duration = (r.func(c.duration) ? c.duration(i, t.length) : c.duration) / c.speed,
                    c.from = T(e.name, s, c.type, o).from,
                    c.to = T(e.name, s, c.type, o).to,
                    n.push(c)
                }
            })
        }),
        n
    },
    C = function(t, e) {
        var n = P(t, e),
        r = l(n, ["name", "from", "to", "delay", "duration"]);
        return r.map(function(t) {
            var e = m(t[0]);
            return e.animatables = t.map(function(t) {
                return t.animatables
            }),
            e.totalDuration = e.delay + e.duration,
            e
        })
    },
    D = function(t) {
        var e = t.to,
        n = t.from;
        t.from = e,
        t.to = n
    },
    j = function(e, n) {
        var r = Math.min(Math.max(n - e.delay, 0), e.duration),
        a = e.to.numbers.map(function(n, a) {
            var i = e.from.numbers[a],
            o = n - i,
            u = t[e.easing](r, i, o, e.duration, e.elasticity);
            return e.round ? Math.round(u) : u
        });
        return e.currentValues = {
            progress: a,
            full: E(a, e.to.strings, e.from.strings)
        },
        e.currentValues.full
    },
    H = function(t, e) {
        var n = void 0;
        if (t.currentTime = Math.min(e, t.totalDuration), t.progress = t.currentTime / t.totalDuration * 100, t.interpolations.forEach(function(r) {
            var a = j(r, e);
            t.values[r.name] = {},
            r.animatables.forEach(function(e) {
                var i = e.id;
                switch (t.values[r.name][i] = r.currentValues, r.type) {
                case "css":
                    e.target.style[r.name] = a;
                    break;
                case "attribute":
                    e.target.setAttribute(r.name, a);
                    break;
                case "object":
                    e.target[r.name] = a;
                    break;
                case "transform":
                    n || (n = {}),
                    n[i] || (n[i] = []),
                    f(n[i], a) || n[i].push(a)
                }
            })
        }), n) for (var r in n) t.animatables[r].target.style.transform = n[r].join(" ");
        t.settings.update && t.settings.update(t)
    },
    Q = function(t) {
        var e = {};
        return e.targets = s(r.array(t.targets) ? t.targets.map(c) : c(t.targets)),
        e.animatables = A(e.targets),
        e.settings = k(t),
        e.properties = L(t, e.settings),
        e.interpolations = C(e.animatables, e.properties),
        e.totalDuration = Math.max.apply(Math, e.interpolations.map(function(t) {
            return t.totalDuration
        })),
        e.values = {},
        e.currentTime = 0,
        e.progress = 0,
        e.running = !1,
        e.ended = !1,
        e
    },
    q = function(t) {
        if (t && t.targets) {
            var e = Q(t),
            n = {};
            return n.tick = function() {
                e.running && (e.ended = !1, n.now = +new Date, n.current = n.last + n.now - n.start, H(e, n.current), n.current >= e.totalDuration ? (e.settings.loop ? (n.start = +new Date, r.number(e.settings.loop) && e.settings.loop--, "alternate" === e.settings.direction && e.interpolations.forEach(D), n.raf = requestAnimationFrame(n.tick)) : (e.ended = !0, e.settings.complete ? e.settings.complete(e) : e.pause()), n.last = 0) : n.raf = requestAnimationFrame(n.tick))
            },
            e.set = function(t) {
                var n = d(t, e.settings);
                e = d(Q(n), e)
            },
            e.seek = function(t) {
                var n = r.number(t) ? t: r.number(t.time) ? t.time: t.percent / 100 * e.totalDuration;
                H(e, n)
            },
            e.play = function(t) {
                t && e.set(t),
                e.running = !0,
                n.start = +new Date,
                n.last = e.ended ? 0 : e.currentTime,
                "reverse" === e.settings.direction && e.interpolations.forEach(D),
                e.settings.begin && e.settings.begin(e),
                n.raf = requestAnimationFrame(n.tick)
            },
            e.pause = function(t) {
                t && e.set(t),
                e.running = !1,
                cancelAnimationFrame(n.raf)
            },
            e.restart = function(t) {
                t && e.set(t),
                e.running = !1,
                e.currentTime = 0,
                e.play()
            },
            e.settings.autoPlay && e.play(),
            e
        }
    };
    return q.easings = t,
    q.is = r,
    q.getInitialValue = w,
    q.random = a,
    q
} ();
window.onload = function() {
    var t = document.querySelector(".messages"),
    e = 20,
    n = "<b>•</b><b>•</b><b>•</b>",
    r = 0,
    a = "Tenha um bom dia",
    i = "Tenha uma boa noite",
    o = "Tenha uma boa noite",
    u = function() {
        var t = new Date,
        e = t.getHours(),
        n = t.getMinutes(),
        r = e + .01 * n;
        return r >= 5 && 19 > r ? a: r >= 19 && 22 > r ? o: r >= 22 || 5 > r ? o: void 0
    },
    s = ["Hi~","欢迎来到前哥的博客。","我工作主要使用 Python/C++/C",'这里是我的博客<a href="./mainPage"> www.imbaqian.com </a>',"想找我玩的小伙伴可以邮箱联系喽~ sqian416@163.com",'对我感兴趣的大老板可以看看我的简历~<a>老前的简历</a>',"O(∩_∩)O哈哈~"];
    var c = function() {
        return parseInt(getComputedStyle(document.body).getPropertyValue("font-size"))
    },
    f = function(t) {
        return t / c() + "rem"
    },
    l = function(t, e) {
        var r = document.createElement("div"),
        a = document.createElement("span"),
        i = document.createElement("span");
        return r.classList.add("bubble"),
        r.classList.add("is-loading"),
        r.classList.add("cornered"),
        r.classList.add("right" === e ? "right": "left"),
        a.classList.add("message"),
        i.classList.add("loading"),
        a.innerHTML = t,
        i.innerHTML = n,
        r.appendChild(i),
        r.appendChild(a),
        r.style.opacity = 0,
        {
            bubble: r,
            message: a,
            loading: i
        }
    },
    m = function(t) {
        return dimensions = {
            loading: {
                w: "4rem",
                h: "2.25rem"
            },
            bubble: {
                w: f(t.bubble.offsetWidth + 4),
                h: f(t.bubble.offsetHeight)
            },
            message: {
                w: f(t.message.offsetWidth + 4),
                h: f(t.message.offsetHeight)
            }
        }
    },
    d = function(n, a) {
        var i = n.length * e + 500,
        o = l(n, a);
        t.appendChild(o.bubble),
        t.appendChild(document.createElement("br"));
        var u = m(o);
        o.bubble.style.width = "0rem",
        o.bubble.style.height = u.loading.h,
        o.message.style.width = u.message.w,
        o.message.style.height = u.message.h,
        o.bubble.style.opacity = 1;
        var c = o.bubble.offsetTop + o.bubble.offsetHeight;
        if (c > t.offsetHeight) {
            anime({
                targets: t,
                scrollTop: c,
                duration: 750
            })
        }
        var f = anime({
            targets: o.bubble,
            width: ["0rem", u.loading.w],
            marginTop: ["2.5rem", 0],
            marginLeft: ["-2.5rem", 0],
            duration: 800,
            easing: "easeOutElastic"
        }),
        d = anime({
            targets: o.bubble,
            scale: [1.05, .95],
            duration: 1100,
            loop: !0,
            direction: "alternate",
            easing: "easeInOutQuad"
        }),
        g = (anime({
            targets: o.loading,
            translateX: ["-2rem", "0rem"],
            scale: [.5, 1],
            duration: 400,
            delay: 25,
            easing: "easeOutElastic"
        }), anime({
            targets: o.bubble.querySelectorAll("b"),
            scale: [1, 1.25],
            opacity: [.5, 1],
            duration: 300,
            loop: !0,
            direction: "alternate",
            delay: function(t) {
                return 100 * t + 50
            }
        }));
        setTimeout(function() {
            d.pause(),
            g.restart({
                opacity: 0,
                scale: 0,
                loop: !1,
                direction: "forwards",
                update: function(t) {
                    t.progress >= 65 && o.bubble.classList.contains("is-loading") && (o.bubble.classList.remove("is-loading"), anime({
                        targets: o.message,
                        opacity: [0, 1],
                        duration: 300
                    }))
                }
            }),
            f.restart({
                scale: 1,
                width: [u.loading.w, u.bubble.w],
                height: [u.loading.h, u.bubble.h],
                marginTop: 0,
                marginLeft: 0,
                begin: function() {
                    r < s.length && o.bubble.classList.remove("cornered")
                }
            })
        },
        i - 50)
    },
    g = function() {
        var t = s[r];
        t && (d(t), ++r, setTimeout(g, t.length * e + anime.random(900, 1200)), document.getElementById("messages-body").scrollTop = document.getElementById("messages-body").scrollHeight)
    };
    g()
};