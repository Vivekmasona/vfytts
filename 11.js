(function (fe) {
    typeof define == "function" && define.amd ? define(fe) : fe();
})(function () {
    "use strict";
    var Xd = Object.defineProperty;
    var Zd = (fe, P, Qe) => (P in fe ? Xd(fe, P, { enumerable: !0, configurable: !0, writable: !0, value: Qe }) : (fe[P] = Qe));
    var Be = (fe, P, Qe) => Zd(fe, typeof P != "symbol" ? P + "" : P, Qe);
    var fe,
        P,
        Qe,
        Fo,
        et,
        Bo,
        Uo,
        Wo,
        Vo,
        yn,
        bn,
        wn,
        Ho,
        xt = {},
        zo = [],
        ja = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        Ct = Array.isArray;
    function Se(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function xn(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
    }
    function H(e, t, n) {
        var o,
            r,
            i,
            a = {};
        for (i in t) i == "key" ? (o = t[i]) : i == "ref" ? (r = t[i]) : (a[i] = t[i]);
        if ((arguments.length > 2 && (a.children = arguments.length > 3 ? fe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)) for (i in e.defaultProps) a[i] === void 0 && (a[i] = e.defaultProps[i]);
        return St(e, a, o, r, null);
    }
    function St(e, t, n, o, r) {
        var i = { type: e, props: t, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++Qe, __i: -1, __u: 0 };
        return r == null && P.vnode != null && P.vnode(i), i;
    }
    function jo() {
        return { current: null };
    }
    function ie(e) {
        return e.children;
    }
    function ye(e, t) {
        (this.props = e), (this.context = t);
    }
    function at(e, t) {
        if (t == null) return e.__ ? at(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
        return typeof e.type == "function" ? at(e) : null;
    }
    function qo(e) {
        var t, n;
        if ((e = e.__) != null && e.__c != null) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if ((n = e.__k[t]) != null && n.__e != null) {
                    e.__e = e.__c.base = n.__e;
                    break;
                }
            return qo(e);
        }
    }
    function Cn(e) {
        ((!e.__d && (e.__d = !0) && et.push(e) && !$t.__r++) || Bo !== P.debounceRendering) && ((Bo = P.debounceRendering) || Uo)($t);
    }
    function $t() {
        for (var e, t, n, o, r, i, a, s = 1; et.length; )
            et.length > s && et.sort(Wo),
                (e = et.shift()),
                (s = et.length),
                e.__d &&
                    ((n = void 0),
                    (r = (o = (t = e).__v).__e),
                    (i = []),
                    (a = []),
                    t.__P &&
                        (((n = Se({}, o)).__v = o.__v + 1),
                        P.vnode && P.vnode(n),
                        Sn(t.__P, n, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [r] : null, i, r ?? at(o), !!(32 & o.__u), a),
                        (n.__v = o.__v),
                        (n.__.__k[n.__i] = n),
                        Zo(i, n, a),
                        n.__e != r && qo(n)));
        $t.__r = 0;
    }
    function Ko(e, t, n, o, r, i, a, s, c, l, d) {
        var u,
            p,
            h,
            v,
            f,
            _,
            y = (o && o.__k) || zo,
            g = t.length;
        for (c = qa(n, t, y, c, g), u = 0; u < g; u++)
            (h = n.__k[u]) != null &&
                ((p = h.__i === -1 ? xt : y[h.__i] || xt),
                (h.__i = u),
                (_ = Sn(e, h, p, r, i, a, s, c, l, d)),
                (v = h.__e),
                h.ref && p.ref != h.ref && (p.ref && kn(p.ref, null, h), d.push(h.ref, h.__c || v, h)),
                f == null && v != null && (f = v),
                4 & h.__u || p.__k === h.__k ? (c = Yo(h, c, e)) : typeof h.type == "function" && _ !== void 0 ? (c = _) : v && (c = v.nextSibling),
                (h.__u &= -7));
        return (n.__e = f), c;
    }
    function qa(e, t, n, o, r) {
        var i,
            a,
            s,
            c,
            l,
            d = n.length,
            u = d,
            p = 0;
        for (e.__k = new Array(r), i = 0; i < r; i++)
            (a = t[i]) != null && typeof a != "boolean" && typeof a != "function"
                ? ((c = i + p),
                  ((a = e.__k[i] =
                      typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String
                          ? St(null, a, null, null, null)
                          : Ct(a)
                          ? St(ie, { children: a }, null, null, null)
                          : a.constructor === void 0 && a.__b > 0
                          ? St(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                          : a).__ = e),
                  (a.__b = e.__b + 1),
                  (s = null),
                  (l = a.__i = Ka(a, n, c, u)) !== -1 && (u--, (s = n[l]) && (s.__u |= 2)),
                  s == null || s.__v === null ? (l == -1 && (r > d ? p-- : r < d && p++), typeof a.type != "function" && (a.__u |= 4)) : l != c && (l == c - 1 ? p-- : l == c + 1 ? p++ : (l > c ? p-- : p++, (a.__u |= 4))))
                : (e.__k[i] = null);
        if (u) for (i = 0; i < d; i++) (s = n[i]) != null && !(2 & s.__u) && (s.__e == o && (o = at(s)), Qo(s, s));
        return o;
    }
    function Yo(e, t, n) {
        var o, r;
        if (typeof e.type == "function") {
            for (o = e.__k, r = 0; o && r < o.length; r++) o[r] && ((o[r].__ = e), (t = Yo(o[r], t, n)));
            return t;
        }
        e.__e != t && (t && e.type && !n.contains(t) && (t = at(e)), n.insertBefore(e.__e, t || null), (t = e.__e));
        do t = t && t.nextSibling;
        while (t != null && t.nodeType == 8);
        return t;
    }
    function Te(e, t) {
        return (
            (t = t || []),
            e == null ||
                typeof e == "boolean" ||
                (Ct(e)
                    ? e.some(function (n) {
                          Te(n, t);
                      })
                    : t.push(e)),
            t
        );
    }
    function Ka(e, t, n, o) {
        var r,
            i,
            a = e.key,
            s = e.type,
            c = t[n];
        if ((c === null && e.key == null) || (c && a == c.key && s === c.type && !(2 & c.__u))) return n;
        if (o > (c != null && !(2 & c.__u) ? 1 : 0))
            for (r = n - 1, i = n + 1; r >= 0 || i < t.length; ) {
                if (r >= 0) {
                    if ((c = t[r]) && !(2 & c.__u) && a == c.key && s === c.type) return r;
                    r--;
                }
                if (i < t.length) {
                    if ((c = t[i]) && !(2 & c.__u) && a == c.key && s === c.type) return i;
                    i++;
                }
            }
        return -1;
    }
    function Go(e, t, n) {
        t[0] == "-" ? e.setProperty(t, n ?? "") : (e[t] = n == null ? "" : typeof n != "number" || ja.test(t) ? n : n + "px");
    }
    function Ft(e, t, n, o, r) {
        var i;
        e: if (t == "style")
            if (typeof n == "string") e.style.cssText = n;
            else {
                if ((typeof o == "string" && (e.style.cssText = o = ""), o)) for (t in o) (n && t in n) || Go(e.style, t, "");
                if (n) for (t in n) (o && n[t] === o[t]) || Go(e.style, t, n[t]);
            }
        else if (t[0] == "o" && t[1] == "n")
            (i = t != (t = t.replace(Vo, "$1"))),
                (t = t.toLowerCase() in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2)),
                e.l || (e.l = {}),
                (e.l[t + i] = n),
                n ? (o ? (n.t = o.t) : ((n.t = yn), e.addEventListener(t, i ? wn : bn, i))) : e.removeEventListener(t, i ? wn : bn, i);
        else {
            if (r == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
                try {
                    e[t] = n ?? "";
                    break e;
                } catch {}
            typeof n == "function" || (n == null || (n === !1 && t[4] != "-") ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
        }
    }
    function Xo(e) {
        return function (t) {
            if (this.l) {
                var n = this.l[t.type + e];
                if (t.u == null) t.u = yn++;
                else if (t.u < n.t) return;
                return n(P.event ? P.event(t) : t);
            }
        };
    }
    function Sn(e, t, n, o, r, i, a, s, c, l) {
        var d,
            u,
            p,
            h,
            v,
            f,
            _,
            y,
            g,
            b,
            w,
            x,
            E,
            S,
            A,
            M,
            F,
            L = t.type;
        if (t.constructor !== void 0) return null;
        128 & n.__u && ((c = !!(32 & n.__u)), (i = [(s = t.__e = n.__e)])), (d = P.__b) && d(t);
        e: if (typeof L == "function")
            try {
                if (
                    ((y = t.props),
                    (g = "prototype" in L && L.prototype.render),
                    (b = (d = L.contextType) && o[d.__c]),
                    (w = d ? (b ? b.props.value : d.__) : o),
                    n.__c
                        ? (_ = (u = t.__c = n.__c).__ = u.__E)
                        : (g ? (t.__c = u = new L(y, w)) : ((t.__c = u = new ye(y, w)), (u.constructor = L), (u.render = Ga)),
                          b && b.sub(u),
                          (u.props = y),
                          u.state || (u.state = {}),
                          (u.context = w),
                          (u.__n = o),
                          (p = u.__d = !0),
                          (u.__h = []),
                          (u._sb = [])),
                    g && u.__s == null && (u.__s = u.state),
                    g && L.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = Se({}, u.__s)), Se(u.__s, L.getDerivedStateFromProps(y, u.__s))),
                    (h = u.props),
                    (v = u.state),
                    (u.__v = t),
                    p)
                )
                    g && L.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), g && u.componentDidMount != null && u.__h.push(u.componentDidMount);
                else {
                    if (
                        (g && L.getDerivedStateFromProps == null && y !== h && u.componentWillReceiveProps != null && u.componentWillReceiveProps(y, w),
                        !u.__e && ((u.shouldComponentUpdate != null && u.shouldComponentUpdate(y, u.__s, w) === !1) || t.__v == n.__v))
                    ) {
                        for (
                            t.__v != n.__v && ((u.props = y), (u.state = u.__s), (u.__d = !1)),
                                t.__e = n.__e,
                                t.__k = n.__k,
                                t.__k.some(function (W) {
                                    W && (W.__ = t);
                                }),
                                x = 0;
                            x < u._sb.length;
                            x++
                        )
                            u.__h.push(u._sb[x]);
                        (u._sb = []), u.__h.length && a.push(u);
                        break e;
                    }
                    u.componentWillUpdate != null && u.componentWillUpdate(y, u.__s, w),
                        g &&
                            u.componentDidUpdate != null &&
                            u.__h.push(function () {
                                u.componentDidUpdate(h, v, f);
                            });
                }
                if (((u.context = w), (u.props = y), (u.__P = e), (u.__e = !1), (E = P.__r), (S = 0), g)) {
                    for (u.state = u.__s, u.__d = !1, E && E(t), d = u.render(u.props, u.state, u.context), A = 0; A < u._sb.length; A++) u.__h.push(u._sb[A]);
                    u._sb = [];
                } else
                    do (u.__d = !1), E && E(t), (d = u.render(u.props, u.state, u.context)), (u.state = u.__s);
                    while (u.__d && ++S < 25);
                (u.state = u.__s),
                    u.getChildContext != null && (o = Se(Se({}, o), u.getChildContext())),
                    g && !p && u.getSnapshotBeforeUpdate != null && (f = u.getSnapshotBeforeUpdate(h, v)),
                    (M = d),
                    d != null && d.type === ie && d.key == null && (M = Jo(d.props.children)),
                    (s = Ko(e, Ct(M) ? M : [M], t, n, o, r, i, a, s, c, l)),
                    (u.base = t.__e),
                    (t.__u &= -161),
                    u.__h.length && a.push(u),
                    _ && (u.__E = u.__ = null);
            } catch (W) {
                if (((t.__v = null), c || i != null))
                    if (W.then) {
                        for (t.__u |= c ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
                        (i[i.indexOf(s)] = null), (t.__e = s);
                    } else for (F = i.length; F--; ) xn(i[F]);
                else (t.__e = n.__e), (t.__k = n.__k);
                P.__e(W, t, n);
            }
        else i == null && t.__v == n.__v ? ((t.__k = n.__k), (t.__e = n.__e)) : (s = t.__e = Ya(n.__e, t, n, o, r, i, a, c, l));
        return (d = P.diffed) && d(t), 128 & t.__u ? void 0 : s;
    }
    function Zo(e, t, n) {
        for (var o = 0; o < n.length; o++) kn(n[o], n[++o], n[++o]);
        P.__c && P.__c(t, e),
            e.some(function (r) {
                try {
                    (e = r.__h),
                        (r.__h = []),
                        e.some(function (i) {
                            i.call(r);
                        });
                } catch (i) {
                    P.__e(i, r.__v);
                }
            });
    }
    function Jo(e) {
        return typeof e != "object" || e == null ? e : Ct(e) ? e.map(Jo) : Se({}, e);
    }
    function Ya(e, t, n, o, r, i, a, s, c) {
        var l,
            d,
            u,
            p,
            h,
            v,
            f,
            _ = n.props,
            y = t.props,
            g = t.type;
        if ((g == "svg" ? (r = "http://www.w3.org/2000/svg") : g == "math" ? (r = "http://www.w3.org/1998/Math/MathML") : r || (r = "http://www.w3.org/1999/xhtml"), i != null)) {
            for (l = 0; l < i.length; l++)
                if ((h = i[l]) && "setAttribute" in h == !!g && (g ? h.localName == g : h.nodeType == 3)) {
                    (e = h), (i[l] = null);
                    break;
                }
        }
        if (e == null) {
            if (g == null) return document.createTextNode(y);
            (e = document.createElementNS(r, g, y.is && y)), s && (P.__m && P.__m(t, i), (s = !1)), (i = null);
        }
        if (g === null) _ === y || (s && e.data === y) || (e.data = y);
        else {
            if (((i = i && fe.call(e.childNodes)), (_ = n.props || xt), !s && i != null)) for (_ = {}, l = 0; l < e.attributes.length; l++) _[(h = e.attributes[l]).name] = h.value;
            for (l in _)
                if (((h = _[l]), l != "children")) {
                    if (l == "dangerouslySetInnerHTML") u = h;
                    else if (!(l in y)) {
                        if ((l == "value" && "defaultValue" in y) || (l == "checked" && "defaultChecked" in y)) continue;
                        Ft(e, l, null, h, r);
                    }
                }
            for (l in y) (h = y[l]), l == "children" ? (p = h) : l == "dangerouslySetInnerHTML" ? (d = h) : l == "value" ? (v = h) : l == "checked" ? (f = h) : (s && typeof h != "function") || _[l] === h || Ft(e, l, h, _[l], r);
            if (d) s || (u && (d.__html === u.__html || d.__html === e.innerHTML)) || (e.innerHTML = d.__html), (t.__k = []);
            else if ((u && (e.innerHTML = ""), Ko(t.type === "template" ? e.content : e, Ct(p) ? p : [p], t, n, o, g == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, a, i ? i[0] : n.__k && at(n, 0), s, c), i != null))
                for (l = i.length; l--; ) xn(i[l]);
            s ||
                ((l = "value"),
                g == "progress" && v == null ? e.removeAttribute("value") : v !== void 0 && (v !== e[l] || (g == "progress" && !v) || (g == "option" && v !== _[l])) && Ft(e, l, v, _[l], r),
                (l = "checked"),
                f !== void 0 && f !== e[l] && Ft(e, l, f, _[l], r));
        }
        return e;
    }
    function kn(e, t, n) {
        try {
            if (typeof e == "function") {
                var o = typeof e.__u == "function";
                o && e.__u(), (o && t == null) || (e.__u = e(t));
            } else e.current = t;
        } catch (r) {
            P.__e(r, n);
        }
    }
    function Qo(e, t, n) {
        var o, r;
        if ((P.unmount && P.unmount(e), (o = e.ref) && ((o.current && o.current !== e.__e) || kn(o, null, t)), (o = e.__c) != null)) {
            if (o.componentWillUnmount)
                try {
                    o.componentWillUnmount();
                } catch (i) {
                    P.__e(i, t);
                }
            o.base = o.__P = null;
        }
        if ((o = e.__k)) for (r = 0; r < o.length; r++) o[r] && Qo(o[r], t, n || typeof e.type != "function");
        n || xn(e.__e), (e.__c = e.__ = e.__e = void 0);
    }
    function Ga(e, t, n) {
        return this.constructor(e, n);
    }
    function Ue(e, t, n) {
        var o, r, i, a;
        t == document && (t = document.documentElement),
            P.__ && P.__(e, t),
            (r = (o = typeof n == "function") ? null : (n && n.__k) || t.__k),
            (i = []),
            (a = []),
            Sn(t, (e = ((!o && n) || t).__k = H(ie, null, [e])), r || xt, xt, t.namespaceURI, !o && n ? [n] : r ? null : t.firstChild ? fe.call(t.childNodes) : null, i, !o && n ? n : r ? r.__e : t.firstChild, o, a),
            Zo(i, e, a);
    }
    function En(e, t) {
        Ue(e, t, En);
    }
    function Pn(e, t, n) {
        var o,
            r,
            i,
            a,
            s = Se({}, e.props);
        for (i in (e.type && e.type.defaultProps && (a = e.type.defaultProps), t)) i == "key" ? (o = t[i]) : i == "ref" ? (r = t[i]) : (s[i] = t[i] === void 0 && a !== void 0 ? a[i] : t[i]);
        return arguments.length > 2 && (s.children = arguments.length > 3 ? fe.call(arguments, 2) : n), St(e.type, s, o || e.key, r || e.ref, null);
    }
    function ue(e) {
        function t(n) {
            var o, r;
            return (
                this.getChildContext ||
                    ((o = new Set()),
                    ((r = {})[t.__c] = this),
                    (this.getChildContext = function () {
                        return r;
                    }),
                    (this.componentWillUnmount = function () {
                        o = null;
                    }),
                    (this.shouldComponentUpdate = function (i) {
                        this.props.value !== i.value &&
                            o.forEach(function (a) {
                                (a.__e = !0), Cn(a);
                            });
                    }),
                    (this.sub = function (i) {
                        o.add(i);
                        var a = i.componentWillUnmount;
                        i.componentWillUnmount = function () {
                            o && o.delete(i), a && a.call(i);
                        };
                    })),
                n.children
            );
        }
        return (
            (t.__c = "__cC" + Ho++),
            (t.__ = e),
            (t.Provider = t.__l = (t.Consumer = function (n, o) {
                return n.children(o);
            }).contextType = t),
            t
        );
    }
    (fe = zo.slice),
        (P = {
            __e: function (e, t, n, o) {
                for (var r, i, a; (t = t.__); )
                    if ((r = t.__c) && !r.__)
                        try {
                            if (((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)), (a = r.__d)), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), (a = r.__d)), a))
                                return (r.__E = r);
                        } catch (s) {
                            e = s;
                        }
                throw e;
            },
        }),
        (Qe = 0),
        (Fo = function (e) {
            return e != null && e.constructor == null;
        }),
        (ye.prototype.setState = function (e, t) {
            var n;
            (n = this.__s != null && this.__s !== this.state ? this.__s : (this.__s = Se({}, this.state))), typeof e == "function" && (e = e(Se({}, n), this.props)), e && Se(n, e), e != null && this.__v && (t && this._sb.push(t), Cn(this));
        }),
        (ye.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), Cn(this));
        }),
        (ye.prototype.render = ie),
        (et = []),
        (Uo = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
        (Wo = function (e, t) {
            return e.__v.__b - t.__v.__b;
        }),
        ($t.__r = 0),
        (Vo = /(PointerCapture)$|Capture$/i),
        (yn = 0),
        (bn = Xo(!1)),
        (wn = Xo(!0)),
        (Ho = 0);
    function An() {
        return (An = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                  }
                  return e;
              }).apply(this, arguments);
    }
    var Xa = ["context", "children"];
    function Za(e) {
        this.getChildContext = function () {
            return e.context;
        };
        var t = e.children,
            n = (function (o, r) {
                if (o == null) return {};
                var i,
                    a,
                    s = {},
                    c = Object.keys(o);
                for (a = 0; a < c.length; a++) r.indexOf((i = c[a])) >= 0 || (s[i] = o[i]);
                return s;
            })(e, Xa);
        return Pn(t, n);
    }
    function Ja() {
        var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
        this.dispatchEvent(e),
            (this._vdom = H(
                Za,
                An({}, this._props, { context: e.detail.context }),
                (function t(n, o) {
                    if (n.nodeType === 3) return n.data;
                    if (n.nodeType !== 1) return null;
                    var r = [],
                        i = {},
                        a = 0,
                        s = n.attributes,
                        c = n.childNodes;
                    for (a = s.length; a--; ) s[a].name !== "slot" && ((i[s[a].name] = s[a].value), (i[er(s[a].name)] = s[a].value));
                    for (a = c.length; a--; ) {
                        var l = t(c[a], null),
                            d = c[a].slot;
                        d ? (i[d] = H(tr, { name: d }, l)) : (r[a] = l);
                    }
                    var u = o ? H(tr, null, r) : r;
                    return H(o || n.nodeName.toLowerCase(), i, u);
                })(this, this._vdomComponent)
            )),
            (this.hasAttribute("hydrate") ? En : Ue)(this._vdom, this._root);
    }
    function er(e) {
        return e.replace(/-(\w)/g, function (t, n) {
            return n ? n.toUpperCase() : "";
        });
    }
    function Qa(e, t, n) {
        if (this._vdom) {
            var o = {};
            (o[e] = n = n ?? void 0), (o[er(e)] = n), (this._vdom = Pn(this._vdom, o)), Ue(this._vdom, this._root);
        }
    }
    function es() {
        Ue((this._vdom = null), this._root);
    }
    function tr(e, t) {
        var n = this;
        return H(
            "slot",
            An({}, e, {
                ref: function (o) {
                    o
                        ? ((n.ref = o),
                          n._listener ||
                              ((n._listener = function (r) {
                                  r.stopPropagation(), (r.detail.context = t);
                              }),
                              o.addEventListener("_preact", n._listener)))
                        : n.ref.removeEventListener("_preact", n._listener);
                },
            })
        );
    }
    function ts(e, t, n, o) {
        function r() {
            var i = Reflect.construct(HTMLElement, [], r);
            return (i._vdomComponent = e), (i._root = i.attachShadow({ mode: o.mode || "open" })), i;
        }
        return (
            ((r.prototype = Object.create(HTMLElement.prototype)).constructor = r),
            (r.prototype.connectedCallback = Ja),
            (r.prototype.attributeChangedCallback = Qa),
            (r.prototype.disconnectedCallback = es),
            (n = n || e.observedAttributes || Object.keys(e.propTypes || {})),
            (r.observedAttributes = n),
            n.forEach(function (i) {
                Object.defineProperty(r.prototype, i, {
                    get: function () {
                        return this._vdom.props[i];
                    },
                    set: function (a) {
                        this._vdom ? this.attributeChangedCallback(i, null, a) : (this._props || (this._props = {}), (this._props[i] = a), this.connectedCallback());
                        var s = typeof a;
                        (a != null && s !== "string" && s !== "boolean" && s !== "number") || this.setAttribute(i, a);
                    },
                });
            }),
            customElements.define(t, r)
        );
    }
    var ns = 0;
    function m(e, t, n, o, r, i) {
        t || (t = {});
        var a,
            s,
            c = t;
        if ("ref" in c) for (s in ((c = {}), t)) s == "ref" ? (a = t[s]) : (c[s] = t[s]);
        var l = { type: e, props: c, key: n, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --ns, __i: -1, __u: 0, __source: r, __self: i };
        if (typeof e == "function" && (a = e.defaultProps)) for (s in a) c[s] === void 0 && (c[s] = a[s]);
        return P.vnode && P.vnode(l), l;
    }
    var Ie,
        G,
        Tn,
        nr,
        st = 0,
        or = [],
        Q = P,
        rr = Q.__b,
        ir = Q.__r,
        ar = Q.diffed,
        sr = Q.__c,
        cr = Q.unmount,
        lr = Q.__;
    function tt(e, t) {
        Q.__h && Q.__h(G, e, st || t), (st = 0);
        var n = G.__H || (G.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
    }
    function k(e) {
        return (st = 1), Bt(dr, e);
    }
    function Bt(e, t, n) {
        var o = tt(Ie++, 2);
        if (
            ((o.t = e),
            !o.__c &&
                ((o.__ = [
                    n ? n(t) : dr(void 0, t),
                    function (s) {
                        var c = o.__N ? o.__N[0] : o.__[0],
                            l = o.t(c, s);
                        c !== l && ((o.__N = [l, o.__[1]]), o.__c.setState({}));
                    },
                ]),
                (o.__c = G),
                !G.__f))
        ) {
            var r = function (s, c, l) {
                if (!o.__c.__H) return !0;
                var d = o.__c.__H.__.filter(function (p) {
                    return !!p.__c;
                });
                if (
                    d.every(function (p) {
                        return !p.__N;
                    })
                )
                    return !i || i.call(this, s, c, l);
                var u = o.__c.props !== s;
                return (
                    d.forEach(function (p) {
                        if (p.__N) {
                            var h = p.__[0];
                            (p.__ = p.__N), (p.__N = void 0), h !== p.__[0] && (u = !0);
                        }
                    }),
                    (i && i.call(this, s, c, l)) || u
                );
            };
            G.__f = !0;
            var i = G.shouldComponentUpdate,
                a = G.componentWillUpdate;
            (G.componentWillUpdate = function (s, c, l) {
                if (this.__e) {
                    var d = i;
                    (i = void 0), r(s, c, l), (i = d);
                }
                a && a.call(this, s, c, l);
            }),
                (G.shouldComponentUpdate = r);
        }
        return o.__N || o.__;
    }
    function I(e, t) {
        var n = tt(Ie++, 3);
        !Q.__s && Mn(n.__H, t) && ((n.__ = e), (n.u = t), G.__H.__h.push(n));
    }
    function Oe(e, t) {
        var n = tt(Ie++, 4);
        !Q.__s && Mn(n.__H, t) && ((n.__ = e), (n.u = t), G.__h.push(n));
    }
    function O(e) {
        return (
            (st = 5),
            K(function () {
                return { current: e };
            }, [])
        );
    }
    function In(e, t, n) {
        (st = 6),
            Oe(
                function () {
                    if (typeof e == "function") {
                        var o = e(t());
                        return function () {
                            e(null), o && typeof o == "function" && o();
                        };
                    }
                    if (e)
                        return (
                            (e.current = t()),
                            function () {
                                return (e.current = null);
                            }
                        );
                },
                n == null ? n : n.concat(e)
            );
    }
    function K(e, t) {
        var n = tt(Ie++, 7);
        return Mn(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
    }
    function j(e, t) {
        return (
            (st = 8),
            K(function () {
                return e;
            }, t)
        );
    }
    function Ne(e) {
        var t = G.context[e.__c],
            n = tt(Ie++, 9);
        return (n.c = e), t ? (n.__ == null && ((n.__ = !0), t.sub(G)), t.props.value) : e.__;
    }
    function On(e, t) {
        Q.useDebugValue && Q.useDebugValue(t ? t(e) : e);
    }
    function os(e) {
        var t = tt(Ie++, 10),
            n = k();
        return (
            (t.__ = e),
            G.componentDidCatch ||
                (G.componentDidCatch = function (o, r) {
                    t.__ && t.__(o, r), n[1](o);
                }),
            [
                n[0],
                function () {
                    n[1](void 0);
                },
            ]
        );
    }
    function Nn() {
        var e = tt(Ie++, 11);
        if (!e.__) {
            for (var t = G.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
            var n = t.__m || (t.__m = [0, 0]);
            e.__ = "P" + n[0] + "-" + n[1]++;
        }
        return e.__;
    }
    function rs() {
        for (var e; (e = or.shift()); )
            if (e.__P && e.__H)
                try {
                    e.__H.__h.forEach(Ut), e.__H.__h.forEach(Rn), (e.__H.__h = []);
                } catch (t) {
                    (e.__H.__h = []), Q.__e(t, e.__v);
                }
    }
    (Q.__b = function (e) {
        (G = null), rr && rr(e);
    }),
        (Q.__ = function (e, t) {
            e && t.__k && t.__k.__m && (e.__m = t.__k.__m), lr && lr(e, t);
        }),
        (Q.__r = function (e) {
            ir && ir(e), (Ie = 0);
            var t = (G = e.__c).__H;
            t &&
                (Tn === G
                    ? ((t.__h = []),
                      (G.__h = []),
                      t.__.forEach(function (n) {
                          n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
                      }))
                    : (t.__h.forEach(Ut), t.__h.forEach(Rn), (t.__h = []), (Ie = 0))),
                (Tn = G);
        }),
        (Q.diffed = function (e) {
            ar && ar(e);
            var t = e.__c;
            t &&
                t.__H &&
                (t.__H.__h.length && ((or.push(t) !== 1 && nr === Q.requestAnimationFrame) || ((nr = Q.requestAnimationFrame) || is)(rs)),
                t.__H.__.forEach(function (n) {
                    n.u && (n.__H = n.u), (n.u = void 0);
                })),
                (Tn = G = null);
        }),
        (Q.__c = function (e, t) {
            t.some(function (n) {
                try {
                    n.__h.forEach(Ut),
                        (n.__h = n.__h.filter(function (o) {
                            return !o.__ || Rn(o);
                        }));
                } catch (o) {
                    t.some(function (r) {
                        r.__h && (r.__h = []);
                    }),
                        (t = []),
                        Q.__e(o, n.__v);
                }
            }),
                sr && sr(e, t);
        }),
        (Q.unmount = function (e) {
            cr && cr(e);
            var t,
                n = e.__c;
            n &&
                n.__H &&
                (n.__H.__.forEach(function (o) {
                    try {
                        Ut(o);
                    } catch (r) {
                        t = r;
                    }
                }),
                (n.__H = void 0),
                t && Q.__e(t, n.__v));
        });
    var ur = typeof requestAnimationFrame == "function";
    function is(e) {
        var t,
            n = function () {
                clearTimeout(o), ur && cancelAnimationFrame(t), setTimeout(e);
            },
            o = setTimeout(n, 100);
        ur && (t = requestAnimationFrame(n));
    }
    function Ut(e) {
        var t = G,
            n = e.__c;
        typeof n == "function" && ((e.__c = void 0), n()), (G = t);
    }
    function Rn(e) {
        var t = G;
        (e.__c = e.__()), (G = t);
    }
    function Mn(e, t) {
        return (
            !e ||
            e.length !== t.length ||
            t.some(function (n, o) {
                return n !== e[o];
            })
        );
    }
    function dr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function fr(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function Dn(e, t) {
        for (var n in e) if (n !== "__source" && !(n in t)) return !0;
        for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
        return !1;
    }
    function Ln(e, t) {
        var n = t(),
            o = k({ t: { __: n, u: t } }),
            r = o[0].t,
            i = o[1];
        return (
            Oe(
                function () {
                    (r.__ = n), (r.u = t), $n(r) && i({ t: r });
                },
                [e, n, t]
            ),
            I(
                function () {
                    return (
                        $n(r) && i({ t: r }),
                        e(function () {
                            $n(r) && i({ t: r });
                        })
                    );
                },
                [e]
            ),
            n
        );
    }
    function $n(e) {
        var t,
            n,
            o = e.u,
            r = e.__;
        try {
            var i = o();
            return !(((t = r) === (n = i) && (t !== 0 || 1 / t == 1 / n)) || (t != t && n != n));
        } catch {
            return !0;
        }
    }
    function Fn(e) {
        e();
    }
    function Bn(e) {
        return e;
    }
    function Un() {
        return [!1, Fn];
    }
    var Wn = Oe;
    function Wt(e, t) {
        (this.props = e), (this.context = t);
    }
    function Vt(e, t) {
        function n(r) {
            var i = this.props.ref,
                a = i == r.ref;
            return !a && i && (i.call ? i(null) : (i.current = null)), t ? !t(this.props, r) || !a : Dn(this.props, r);
        }
        function o(r) {
            return (this.shouldComponentUpdate = n), H(e, r);
        }
        return (o.displayName = "Memo(" + (e.displayName || e.name) + ")"), (o.prototype.isReactComponent = !0), (o.__f = !0), o;
    }
    ((Wt.prototype = new ye()).isPureReactComponent = !0),
        (Wt.prototype.shouldComponentUpdate = function (e, t) {
            return Dn(this.props, e) || Dn(this.state, t);
        });
    var pr = P.__b;
    P.__b = function (e) {
        e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), pr && pr(e);
    };
    var as = (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) || 3911;
    function D(e) {
        function t(n) {
            var o = fr({}, n);
            return delete o.ref, e(o, n.ref || null);
        }
        return (t.$$typeof = as), (t.render = t), (t.prototype.isReactComponent = t.__f = !0), (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"), t;
    }
    var hr = function (e, t) {
            return e == null ? null : Te(Te(e).map(t));
        },
        We = {
            map: hr,
            forEach: hr,
            count: function (e) {
                return e ? Te(e).length : 0;
            },
            only: function (e) {
                var t = Te(e);
                if (t.length !== 1) throw "Children.only";
                return t[0];
            },
            toArray: Te,
        },
        ss = P.__e;
    P.__e = function (e, t, n, o) {
        if (e.then) {
            for (var r, i = t; (i = i.__); ) if ((r = i.__c) && r.__c) return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t);
        }
        ss(e, t, n, o);
    };
    var mr = P.unmount;
    function _r(e, t, n) {
        return (
            e &&
                (e.__c &&
                    e.__c.__H &&
                    (e.__c.__H.__.forEach(function (o) {
                        typeof o.__c == "function" && o.__c();
                    }),
                    (e.__c.__H = null)),
                (e = fr({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
                (e.__k =
                    e.__k &&
                    e.__k.map(function (o) {
                        return _r(o, t, n);
                    }))),
            e
        );
    }
    function vr(e, t, n) {
        return (
            e &&
                n &&
                ((e.__v = null),
                (e.__k =
                    e.__k &&
                    e.__k.map(function (o) {
                        return vr(o, t, n);
                    })),
                e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
            e
        );
    }
    function kt() {
        (this.__u = 0), (this.o = null), (this.__b = null);
    }
    function gr(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e);
    }
    function yr(e) {
        var t, n, o;
        function r(i) {
            if (
                (t ||
                    (t = e()).then(
                        function (a) {
                            n = a.default || a;
                        },
                        function (a) {
                            o = a;
                        }
                    ),
                o)
            )
                throw o;
            if (!n) throw t;
            return H(n, i);
        }
        return (r.displayName = "Lazy"), (r.__f = !0), r;
    }
    function ct() {
        (this.i = null), (this.l = null);
    }
    (P.unmount = function (e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), mr && mr(e);
    }),
        ((kt.prototype = new ye()).__c = function (e, t) {
            var n = t.__c,
                o = this;
            o.o == null && (o.o = []), o.o.push(n);
            var r = gr(o.__v),
                i = !1,
                a = function () {
                    i || ((i = !0), (n.__R = null), r ? r(s) : s());
                };
            n.__R = a;
            var s = function () {
                if (!--o.__u) {
                    if (o.state.__a) {
                        var c = o.state.__a;
                        o.__v.__k[0] = vr(c, c.__c.__P, c.__c.__O);
                    }
                    var l;
                    for (o.setState({ __a: (o.__b = null) }); (l = o.o.pop()); ) l.forceUpdate();
                }
            };
            o.__u++ || 32 & t.__u || o.setState({ __a: (o.__b = o.__v.__k[0]) }), e.then(a, a);
        }),
        (kt.prototype.componentWillUnmount = function () {
            this.o = [];
        }),
        (kt.prototype.render = function (e, t) {
            if (this.__b) {
                if (this.__v.__k) {
                    var n = document.createElement("div"),
                        o = this.__v.__k[0].__c;
                    this.__v.__k[0] = _r(this.__b, n, (o.__O = o.__P));
                }
                this.__b = null;
            }
            var r = t.__a && H(ie, null, e.fallback);
            return r && (r.__u &= -33), [H(ie, null, t.__a ? null : e.children), r];
        });
    var br = function (e, t, n) {
        if ((++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size)))
            for (n = e.i; n; ) {
                for (; n.length > 3; ) n.pop()();
                if (n[1] < n[0]) break;
                e.i = n = n[2];
            }
    };
    function cs(e) {
        return (
            (this.getChildContext = function () {
                return e.context;
            }),
            e.children
        );
    }
    function ls(e) {
        var t = this,
            n = e.h;
        (t.componentWillUnmount = function () {
            Ue(null, t.v), (t.v = null), (t.h = null);
        }),
            t.h && t.h !== n && t.componentWillUnmount(),
            t.v ||
                ((t.h = n),
                (t.v = {
                    nodeType: 1,
                    parentNode: n,
                    childNodes: [],
                    contains: function () {
                        return !0;
                    },
                    appendChild: function (o) {
                        this.childNodes.push(o), t.h.appendChild(o);
                    },
                    insertBefore: function (o, r) {
                        this.childNodes.push(o), t.h.insertBefore(o, r);
                    },
                    removeChild: function (o) {
                        this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.h.removeChild(o);
                    },
                })),
            Ue(H(cs, { context: t.context }, e.__v), t.v);
    }
    function Ht(e, t) {
        var n = H(ls, { __v: e, h: t });
        return (n.containerInfo = t), n;
    }
    ((ct.prototype = new ye()).__a = function (e) {
        var t = this,
            n = gr(t.__v),
            o = t.l.get(e);
        return (
            o[0]++,
            function (r) {
                var i = function () {
                    t.props.revealOrder ? (o.push(r), br(t, e, o)) : r();
                };
                n ? n(i) : i();
            }
        );
    }),
        (ct.prototype.render = function (e) {
            (this.i = null), (this.l = new Map());
            var t = Te(e.children);
            e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
            for (var n = t.length; n--; ) this.l.set(t[n], (this.i = [1, 0, this.i]));
            return e.children;
        }),
        (ct.prototype.componentDidUpdate = ct.prototype.componentDidMount = function () {
            var e = this;
            this.l.forEach(function (t, n) {
                br(e, n, t);
            });
        });
    var wr = (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) || 60103,
        us = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        ds = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
        fs = /[A-Z0-9]/g,
        ps = typeof document < "u",
        hs = function (e) {
            return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
        };
    function xr(e, t, n) {
        return t.__k == null && (t.textContent = ""), Ue(e, t), typeof n == "function" && n(), e ? e.__c : null;
    }
    function Cr(e, t, n) {
        return En(e, t), typeof n == "function" && n(), e ? e.__c : null;
    }
    (ye.prototype.isReactComponent = {}),
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
            Object.defineProperty(ye.prototype, e, {
                configurable: !0,
                get: function () {
                    return this["UNSAFE_" + e];
                },
                set: function (t) {
                    Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
                },
            });
        });
    var Sr = P.event;
    function ms() {}
    function _s() {
        return this.cancelBubble;
    }
    function vs() {
        return this.defaultPrevented;
    }
    P.event = function (e) {
        return Sr && (e = Sr(e)), (e.persist = ms), (e.isPropagationStopped = _s), (e.isDefaultPrevented = vs), (e.nativeEvent = e);
    };
    var Vn,
        gs = {
            enumerable: !1,
            configurable: !0,
            get: function () {
                return this.class;
            },
        },
        kr = P.vnode;
    P.vnode = function (e) {
        typeof e.type == "string" &&
            (function (t) {
                var n = t.props,
                    o = t.type,
                    r = {},
                    i = o.indexOf("-") === -1;
                for (var a in n) {
                    var s = n[a];
                    if (!((a === "value" && "defaultValue" in n && s == null) || (ps && a === "children" && o === "noscript") || a === "class" || a === "className")) {
                        var c = a.toLowerCase();
                        a === "defaultValue" && "value" in n && n.value == null
                            ? (a = "value")
                            : a === "download" && s === !0
                            ? (s = "")
                            : c === "translate" && s === "no"
                            ? (s = !1)
                            : c[0] === "o" && c[1] === "n"
                            ? c === "ondoubleclick"
                                ? (a = "ondblclick")
                                : c !== "onchange" || (o !== "input" && o !== "textarea") || hs(n.type)
                                ? c === "onfocus"
                                    ? (a = "onfocusin")
                                    : c === "onblur"
                                    ? (a = "onfocusout")
                                    : ds.test(a) && (a = c)
                                : (c = a = "oninput")
                            : i && us.test(a)
                            ? (a = a.replace(fs, "-$&").toLowerCase())
                            : s === null && (s = void 0),
                            c === "oninput" && r[(a = c)] && (a = "oninputCapture"),
                            (r[a] = s);
                    }
                }
                o == "select" &&
                    r.multiple &&
                    Array.isArray(r.value) &&
                    (r.value = Te(n.children).forEach(function (l) {
                        l.props.selected = r.value.indexOf(l.props.value) != -1;
                    })),
                    o == "select" &&
                        r.defaultValue != null &&
                        (r.value = Te(n.children).forEach(function (l) {
                            l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value;
                        })),
                    n.class && !n.className ? ((r.class = n.class), Object.defineProperty(r, "className", gs)) : ((n.className && !n.class) || (n.class && n.className)) && (r.class = r.className = n.className),
                    (t.props = r);
            })(e),
            (e.$$typeof = wr),
            kr && kr(e);
    };
    var Er = P.__r;
    P.__r = function (e) {
        Er && Er(e), (Vn = e.__c);
    };
    var Pr = P.diffed;
    P.diffed = function (e) {
        Pr && Pr(e);
        var t = e.props,
            n = e.__e;
        n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), (Vn = null);
    };
    var Ar = {
            ReactCurrentDispatcher: {
                current: {
                    readContext: function (e) {
                        return Vn.__n[e.__c].props.value;
                    },
                    useCallback: j,
                    useContext: Ne,
                    useDebugValue: On,
                    useDeferredValue: Bn,
                    useEffect: I,
                    useId: Nn,
                    useImperativeHandle: In,
                    useInsertionEffect: Wn,
                    useLayoutEffect: Oe,
                    useMemo: K,
                    useReducer: Bt,
                    useRef: O,
                    useState: k,
                    useSyncExternalStore: Ln,
                    useTransition: Un,
                },
            },
        },
        ys = "18.3.1";
    function Tr(e) {
        return H.bind(null, e);
    }
    function Re(e) {
        return !!e && e.$$typeof === wr;
    }
    function Ir(e) {
        return Re(e) && e.type === ie;
    }
    function Or(e) {
        return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(");
    }
    function Et(e) {
        return Re(e) ? Pn.apply(null, arguments) : e;
    }
    function Nr(e) {
        return !!e.__k && (Ue(null, e), !0);
    }
    function Rr(e) {
        return (e && (e.base || (e.nodeType === 1 && e))) || null;
    }
    var Mr = function (e, t) {
            return e(t);
        },
        zt = function (e, t) {
            return e(t);
        },
        Dr = ie,
        Lr = Re,
        Me = {
            useState: k,
            useId: Nn,
            useReducer: Bt,
            useEffect: I,
            useLayoutEffect: Oe,
            useInsertionEffect: Wn,
            useTransition: Un,
            useDeferredValue: Bn,
            useSyncExternalStore: Ln,
            startTransition: Fn,
            useRef: O,
            useImperativeHandle: In,
            useMemo: K,
            useCallback: j,
            useContext: Ne,
            useDebugValue: On,
            version: "18.3.1",
            Children: We,
            render: xr,
            hydrate: Cr,
            unmountComponentAtNode: Nr,
            createPortal: Ht,
            createElement: H,
            createContext: ue,
            createFactory: Tr,
            cloneElement: Et,
            createRef: jo,
            Fragment: ie,
            isValidElement: Re,
            isElement: Lr,
            isFragment: Ir,
            isMemo: Or,
            findDOMNode: Rr,
            Component: ye,
            PureComponent: Wt,
            memo: Vt,
            forwardRef: D,
            flushSync: zt,
            unstable_batchedUpdates: Mr,
            StrictMode: Dr,
            Suspense: kt,
            SuspenseList: ct,
            lazy: yr,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ar,
        };
    const bs = Object.freeze(
            Object.defineProperty(
                {
                    __proto__: null,
                    Children: We,
                    Component: ye,
                    Fragment: ie,
                    PureComponent: Wt,
                    StrictMode: Dr,
                    Suspense: kt,
                    SuspenseList: ct,
                    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ar,
                    cloneElement: Et,
                    createContext: ue,
                    createElement: H,
                    createFactory: Tr,
                    createPortal: Ht,
                    createRef: jo,
                    default: Me,
                    findDOMNode: Rr,
                    flushSync: zt,
                    forwardRef: D,
                    hydrate: Cr,
                    isElement: Lr,
                    isFragment: Ir,
                    isMemo: Or,
                    isValidElement: Re,
                    lazy: yr,
                    memo: Vt,
                    render: xr,
                    startTransition: Fn,
                    unmountComponentAtNode: Nr,
                    unstable_batchedUpdates: Mr,
                    useCallback: j,
                    useContext: Ne,
                    useDebugValue: On,
                    useDeferredValue: Bn,
                    useEffect: I,
                    useErrorBoundary: os,
                    useId: Nn,
                    useImperativeHandle: In,
                    useInsertionEffect: Wn,
                    useLayoutEffect: Oe,
                    useMemo: K,
                    useReducer: Bt,
                    useRef: O,
                    useState: k,
                    useSyncExternalStore: Ln,
                    useTransition: Un,
                    version: ys,
                },
                Symbol.toStringTag,
                { value: "Module" }
            )
        ),
        ws =
            '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap";*{box-sizing:border-box}._devHost_me40k_7,:host{pointer-events:none;position:fixed;right:32px;bottom:32px;z-index:1000}._wrapper_me40k_16{display:flex;flex-direction:column-reverse;align-items:flex-end;gap:16px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}._box_me40k_37{background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);display:flex;align-items:center;gap:16px;padding:20px;border-radius:var(--el-border-radius);box-shadow:0 0 64px 64px #0000001a;pointer-events:none;opacity:0;transition:opacity .2s var(--el-timing-function);max-width:calc(100vw - 64px);max-height:calc(100vh - 64px)}._open_me40k_55 ._box_me40k_37{pointer-events:initial;opacity:1}._expandable_me40k_60 ._box_me40k_37{flex-direction:column;padding:24px;gap:20px}._expandable_me40k_60:not(._customContent_me40k_66) ._box_me40k_37{padding-top:40px}._compact_me40k_70:not(._customContent_me40k_66) ._box_me40k_37{gap:8px;padding:12px;border-radius:32px}._avatar_me40k_76{position:relative;width:54px;height:54px}._compact_me40k_70 ._avatar_me40k_76{width:36px;height:36px}._expandable_me40k_60 ._avatar_me40k_76{width:86px;height:86px}._avatarBackground_me40k_92{border-radius:50%;position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;background-color:var(--el-border-color)}._avatarImage_me40k_102{border-radius:50%;position:absolute;top:0;left:0;right:0;bottom:0;background-size:cover;background-color:var(--el-bg-color);overflow:hidden}._canvas_me40k_114{width:100%;height:100%}._actions_me40k_119{min-width:156px;width:min-content;display:flex;gap:11px;flex-direction:column}._hasLanguageSelect_me40k_127 ._actions_me40k_119{min-width:200px}._expandable_me40k_60 ._actions_me40k_119{min-width:180px;width:min-content;justify-content:end}._actionButtons_me40k_137{display:flex;gap:8px}._expandable_me40k_60 ._actionButtons_me40k_137{flex-direction:column}._status_me40k_146{font-size:14px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._expandable_me40k_60 ._status_me40k_146{text-align:center;text-wrap:wrap;line-height:18px}._btn_me40k_160{--el-ring-color: transparent;--el-ring-radius: 0;--el-focus-ring-radius: 0;--el-border-width: 0;background-color:var(--el-btn-color);color:var(--el-btn-text-color);border-radius:var(--el-btn-radius);box-shadow:0 1px 2px #1018280d,0 0 0 var(--el-ring-radius) var(--el-ring-color),0 0 0 var(--el-focus-ring-radius) var(--el-focus-color),inset 0 0 0 var(--el-border-width) var(--el-border-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-size:14px;font-weight:500;transition:all .2s var(--el-timing-function);flex-grow:1;min-height:36px;max-width:320px}._avatarButton_me40k_191{background-color:transparent;color:transparent;box-shadow:none;height:56px;padding:0}._avatarButton_me40k_191 ._avatar_me40k_76{margin:1px}._expandable_me40k_60 ._btn_me40k_160{flex-grow:0}._btn_me40k_160:hover{--el-ring-color: rgba(125, 135, 155, .2);--el-ring-radius: 3px}._btn_me40k_160:active{--el-ring-color: rgba(101, 115, 135, .3);--el-ring-radius: 3px}._btn_me40k_160._disabled_me40k_218{opacity:.5}._btn_me40k_160:disabled{opacity:.5;pointer-events:none}._btn_me40k_160:focus-visible{--el-focus-ring-radius: 1px;outline:none}._btn_me40k_160._secondary_me40k_232{--el-border-width: 1px;background-color:var(--el-bg-color);color:var(--el-text-color)}._btn_me40k_160._secondary_me40k_232:hover{--el-ring-color: rgba(135, 145, 165, .1)}._btn_me40k_160._secondary_me40k_232:active{--el-ring-color: rgba(125, 135, 155, .2)}._btn_me40k_160._iconBtn_me40k_246{height:36px;width:36px}._btn_me40k_160._select_me40k_251{flex-grow:0;padding:6px;gap:4px}._ellipsis_me40k_257{overflow:hidden;text-overflow:ellipsis}._icon_me40k_246{margin-left:-6px;margin-right:4px;width:16px;height:16px;flex-shrink:0}._iconBtn_me40k_246 ._icon_me40k_246{margin-left:-6px;margin-right:-6px}._minimize_me40k_275{pointer-events:all;display:grid;grid-template-columns:1fr;position:relative;overflow:hidden}._open_me40k_55 ._minimize_me40k_275{grid-template-columns:0fr;align-items:center;height:36px;padding:0 18px}._openContent_me40k_290{position:absolute;top:7px;left:6px;opacity:0;pointer-events:none;rotate:90deg}._open_me40k_55 ._openContent_me40k_290{opacity:1;pointer-events:initial;rotate:0deg}._closedContent_me40k_305{min-width:0;display:flex;align-items:center;justify-content:center}._open_me40k_55 ._closedContent_me40k_305{opacity:0;pointer-events:none}._openContent_me40k_290,._closedContent_me40k_305{transition:all .2s var(--el-timing-function)}._poweredBy_me40k_322{pointer-events:all;font-size:10px;align-self:center;text-align:center;color:var(--el-text-color)}._poweredBy_me40k_322 a,._poweredBy_me40k_322 span{opacity:.5}._poweredBy_me40k_322 a{white-space:nowrap;color:inherit;outline-color:var(--el-focus-color)}._poweredBy_me40k_322 a:hover,._poweredBy_me40k_322 a:focus-visible{opacity:1}._compact_me40k_70 ._poweredBy_me40k_322,._full_me40k_347 ._poweredBy_me40k_322{margin:-8px 0 -20px}._terms_me40k_351{display:none;max-width:480px;font-size:14px;line-height:20px;accent-color:var(--el-btn-color)}._terms_me40k_351 form{display:flex;flex-direction:column;gap:16px}._terms_me40k_351 p,._terms_me40k_351 ul,._terms_me40k_351 ol,._terms_me40k_351 h1,._terms_me40k_351 h2,._terms_me40k_351 h3,._terms_me40k_351 h4,._terms_me40k_351 h5,._terms_me40k_351 h6{margin:0;font-weight:400}._terms_me40k_351 a{color:var(--el-text-color)}._terms_me40k_351 ._strong_me40k_382{font-weight:500}._terms_me40k_351 h1{font-size:35px}._terms_me40k_351 h2{font-size:28px}._terms_me40k_351 h3{font-size:24px}._terms_me40k_351 h4{font-size:20px}._terms_me40k_351 h5{font-size:18px}._terms_me40k_351 h6{font-size:16px}._terms_me40k_351._show_me40k_410{display:block}._termsFooter_me40k_414{display:flex;gap:8px;justify-content:end;margin-top:20px}._termsFooter_me40k_414 ._btn_me40k_160{flex-grow:0}._feedback_me40k_425{display:flex;align-items:center;gap:8px;z-index:1;opacity:0;translate:0 8px;transition:all .6s var(--el-timing-function);font-size:10px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._feedback_me40k_425._show_me40k_410{opacity:.5;translate:0 0;pointer-events:auto}._feedback_me40k_425._show_me40k_410:hover{opacity:1}._feedbackText_me40k_451{margin:0 12px}._inlineFeedback_me40k_455{display:flex;align-items:center;gap:5px;z-index:1;translate:0 8px;transition:all .6s var(--el-timing-function);font-size:14px;font-weight:500;text-wrap:nowrap;line-height:20px}._inlineFeedback_me40k_455._show_me40k_410{translate:0 0;pointer-events:auto}._flag_me40k_474{width:24px;height:24px;border-radius:50%;object-fit:cover;border:1px solid var(--el-border-color)}._selectContent_me40k_482{z-index:1;overflow:hidden;background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);border-radius:var(--el-border-radius);max-height:min(384px,var(--radix-select-content-available-height));min-width:var(--radix-select-trigger-width)}._selectViewport_me40k_493{padding:8px}._selectValue_me40k_497{display:none;margin-right:auto;margin-left:auto}._selectIcon_me40k_503{padding-right:4px}._expandable_me40k_60 ._selectValue_me40k_497{display:inline}._selectItem_me40k_511{display:flex;-webkit-user-select:none;user-select:none;align-items:center;padding:6px 32px 6px 6px;gap:8px;cursor:pointer;border-radius:var(--el-border-radius);position:relative}._selectItem_me40k_511:focus-visible{outline:none}._selectItem_me40k_511[data-highlighted]{background-color:#8080801a}._selectItemIndicator_me40k_530{position:absolute;right:0;width:24px;display:inline-flex;align-items:center;justify-content:center}._selectScrollButton_me40k_539{display:flex;align-items:center;justify-content:center;height:24px;background-color:var(--el-bg-color);cursor:default}._error_me40k_548{max-width:320px;font-size:14px;line-height:20px}._error_me40k_548 h1{margin:0 0 16px;font-size:20px;font-weight:400}._error_me40k_548 p{margin:0}',
        C = {
            devHost: "_devHost_me40k_7",
            wrapper: "_wrapper_me40k_16",
            box: "_box_me40k_37",
            open: "_open_me40k_55",
            expandable: "_expandable_me40k_60",
            customContent: "_customContent_me40k_66",
            compact: "_compact_me40k_70",
            avatar: "_avatar_me40k_76",
            avatarBackground: "_avatarBackground_me40k_92",
            avatarImage: "_avatarImage_me40k_102",
            canvas: "_canvas_me40k_114",
            actions: "_actions_me40k_119",
            hasLanguageSelect: "_hasLanguageSelect_me40k_127",
            actionButtons: "_actionButtons_me40k_137",
            status: "_status_me40k_146",
            btn: "_btn_me40k_160",
            avatarButton: "_avatarButton_me40k_191",
            disabled: "_disabled_me40k_218",
            secondary: "_secondary_me40k_232",
            iconBtn: "_iconBtn_me40k_246",
            select: "_select_me40k_251",
            ellipsis: "_ellipsis_me40k_257",
            icon: "_icon_me40k_246",
            minimize: "_minimize_me40k_275",
            openContent: "_openContent_me40k_290",
            closedContent: "_closedContent_me40k_305",
            
            full: "_full_me40k_347",
          
            strong: "_strong_me40k_382",
            show: "_show_me40k_410",
            
           
            
            
            
            selectContent: "_selectContent_me40k_482",
            selectViewport: "_selectViewport_me40k_493",
            selectValue: "_selectValue_me40k_497",
            selectIcon: "_selectIcon_me40k_503",
            selectItem: "_selectItem_me40k_511",
            selectItemIndicator: "_selectItemIndicator_me40k_530",
            selectScrollButton: "_selectScrollButton_me40k_539",
            error: "_error_me40k_548",
        },
        $r = ["full", "compact"],
        xs = ["expandable"];
    function Cs(e) {
        return xs.includes(e) ? (console.warn(`[ConversationalAI] The variant "${e}" is deprecated. Please use "full" or "compact" instead and choose how the widget should expand.`), "full") : $r.includes(e) ? e : $r[0];
    }
    const Fr = ["never", "mobile", "desktop", "always"];
    function Ss(e, t) {
        return t === "expandable" ? "always" : Fr.includes(e) ? e : Fr[0];
    }
    function ks(e) {
        return e.replace(/_/g, "-");
    }
    const Es = [
            "variant",
            "expandable",
            "override-config",
            "avatar-image-url",
            "avatar-orb-color-1",
            "avatar-orb-color-2",
            "agent-id",
            "signed-url",
            "terms-key",
            "server-location",
            "language",
            "dynamic-variables",
            "show-avatar-when-collapsed",
        ],
        Br = { start_call_text: "Start a call", end_call_text: "End", action_text: "Need help?", expand_text: "Chat with AI", listening_text: "Listening", speaking_text: "Talk to interrupt" },
        Ur = Object.keys(Br),
        Wr = Ur.map(ks),
        Hn = [...Es, ...Wr];
    var Ps = Symbol.for("preact-signals");
    function jt() {
        if (Ve > 1) Ve--;
        else {
            for (var e, t = !1; Pt !== void 0; ) {
                var n = Pt;
                for (Pt = void 0, zn++; n !== void 0; ) {
                    var o = n.o;
                    if (((n.o = void 0), (n.f &= -3), !(8 & n.f) && zr(n)))
                        try {
                            n.c();
                        } catch (r) {
                            t || ((e = r), (t = !0));
                        }
                    n = o;
                }
            }
            if (((zn = 0), Ve--, t)) throw e;
        }
    }
    function Vr(e) {
        if (Ve > 0) return e();
        Ve++;
        try {
            return e();
        } finally {
            jt();
        }
    }
    var X = void 0,
        Pt = void 0,
        Ve = 0,
        zn = 0,
        qt = 0;
    function Hr(e) {
        if (X !== void 0) {
            var t = e.n;
            if (t === void 0 || t.t !== X) return (t = { i: 0, S: e, p: X.s, n: void 0, t: X, e: void 0, x: void 0, r: t }), X.s !== void 0 && (X.s.n = t), (X.s = t), (e.n = t), 32 & X.f && e.S(t), t;
            if (t.i === -1) return (t.i = 0), t.n !== void 0 && ((t.n.p = t.p), t.p !== void 0 && (t.p.n = t.n), (t.p = X.s), (t.n = void 0), (X.s.n = t), (X.s = t)), t;
        }
    }
    function se(e) {
        (this.v = e), (this.i = 0), (this.n = void 0), (this.t = void 0);
    }
    (se.prototype.brand = Ps),
        (se.prototype.h = function () {
            return !0;
        }),
        (se.prototype.S = function (e) {
            this.t !== e && e.e === void 0 && ((e.x = this.t), this.t !== void 0 && (this.t.e = e), (this.t = e));
        }),
        (se.prototype.U = function (e) {
            if (this.t !== void 0) {
                var t = e.e,
                    n = e.x;
                t !== void 0 && ((t.x = n), (e.e = void 0)), n !== void 0 && ((n.e = t), (e.x = void 0)), e === this.t && (this.t = n);
            }
        }),
        (se.prototype.subscribe = function (e) {
            var t = this;
            return ut(function () {
                var n = t.value,
                    o = X;
                X = void 0;
                try {
                    e(n);
                } finally {
                    X = o;
                }
            });
        }),
        (se.prototype.valueOf = function () {
            return this.value;
        }),
        (se.prototype.toString = function () {
            return this.value + "";
        }),
        (se.prototype.toJSON = function () {
            return this.value;
        }),
        (se.prototype.peek = function () {
            var e = X;
            X = void 0;
            try {
                return this.value;
            } finally {
                X = e;
            }
        }),
        Object.defineProperty(se.prototype, "value", {
            get: function () {
                var e = Hr(this);
                return e !== void 0 && (e.i = this.i), this.v;
            },
            set: function (e) {
                if (e !== this.v) {
                    if (zn > 100) throw new Error("Cycle detected");
                    (this.v = e), this.i++, qt++, Ve++;
                    try {
                        for (var t = this.t; t !== void 0; t = t.x) t.t.N();
                    } finally {
                        jt();
                    }
                }
            },
        });
    function jn(e) {
        return new se(e);
    }
    function zr(e) {
        for (var t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
        return !1;
    }
    function jr(e) {
        for (var t = e.s; t !== void 0; t = t.n) {
            var n = t.S.n;
            if ((n !== void 0 && (t.r = n), (t.S.n = t), (t.i = -1), t.n === void 0)) {
                e.s = t;
                break;
            }
        }
    }
    function qr(e) {
        for (var t = e.s, n = void 0; t !== void 0; ) {
            var o = t.p;
            t.i === -1 ? (t.S.U(t), o !== void 0 && (o.n = t.n), t.n !== void 0 && (t.n.p = o)) : (n = t), (t.S.n = t.r), t.r !== void 0 && (t.r = void 0), (t = o);
        }
        e.s = n;
    }
    function lt(e) {
        se.call(this, void 0), (this.x = e), (this.s = void 0), (this.g = qt - 1), (this.f = 4);
    }
    ((lt.prototype = new se()).h = function () {
        if (((this.f &= -3), 1 & this.f)) return !1;
        if ((36 & this.f) == 32 || ((this.f &= -5), this.g === qt)) return !0;
        if (((this.g = qt), (this.f |= 1), this.i > 0 && !zr(this))) return (this.f &= -2), !0;
        var e = X;
        try {
            jr(this), (X = this);
            var t = this.x();
            (16 & this.f || this.v !== t || this.i === 0) && ((this.v = t), (this.f &= -17), this.i++);
        } catch (n) {
            (this.v = n), (this.f |= 16), this.i++;
        }
        return (X = e), qr(this), (this.f &= -2), !0;
    }),
        (lt.prototype.S = function (e) {
            if (this.t === void 0) {
                this.f |= 36;
                for (var t = this.s; t !== void 0; t = t.n) t.S.S(t);
            }
            se.prototype.S.call(this, e);
        }),
        (lt.prototype.U = function (e) {
            if (this.t !== void 0 && (se.prototype.U.call(this, e), this.t === void 0)) {
                this.f &= -33;
                for (var t = this.s; t !== void 0; t = t.n) t.S.U(t);
            }
        }),
        (lt.prototype.N = function () {
            if (!(2 & this.f)) {
                this.f |= 6;
                for (var e = this.t; e !== void 0; e = e.x) e.t.N();
            }
        }),
        Object.defineProperty(lt.prototype, "value", {
            get: function () {
                if (1 & this.f) throw new Error("Cycle detected");
                var e = Hr(this);
                if ((this.h(), e !== void 0 && (e.i = this.i), 16 & this.f)) throw this.v;
                return this.v;
            },
        });
    function De(e) {
        return new lt(e);
    }
    function Kr(e) {
        var t = e.u;
        if (((e.u = void 0), typeof t == "function")) {
            Ve++;
            var n = X;
            X = void 0;
            try {
                t();
            } catch (o) {
                throw ((e.f &= -2), (e.f |= 8), qn(e), o);
            } finally {
                (X = n), jt();
            }
        }
    }
    function qn(e) {
        for (var t = e.s; t !== void 0; t = t.n) t.S.U(t);
        (e.x = void 0), (e.s = void 0), Kr(e);
    }
    function As(e) {
        if (X !== this) throw new Error("Out-of-order effect");
        qr(this), (X = e), (this.f &= -2), 8 & this.f && qn(this), jt();
    }
    function At(e) {
        (this.x = e), (this.u = void 0), (this.s = void 0), (this.o = void 0), (this.f = 32);
    }
    (At.prototype.c = function () {
        var e = this.S();
        try {
            if (8 & this.f || this.x === void 0) return;
            var t = this.x();
            typeof t == "function" && (this.u = t);
        } finally {
            e();
        }
    }),
        (At.prototype.S = function () {
            if (1 & this.f) throw new Error("Cycle detected");
            (this.f |= 1), (this.f &= -9), Kr(this), jr(this), Ve++;
            var e = X;
            return (X = this), As.bind(this, e);
        }),
        (At.prototype.N = function () {
            2 & this.f || ((this.f |= 2), (this.o = Pt), (Pt = this));
        }),
        (At.prototype.d = function () {
            (this.f |= 8), 1 & this.f || qn(this);
        });
    function ut(e) {
        var t = new At(e);
        try {
            t.c();
        } catch (n) {
            throw (t.d(), n);
        }
        return t.d.bind(t);
    }
    var Kn,
        Kt,
        Yn,
        Yr = [],
        Gr = [];
    ut(function () {
        Kn = this.N;
    })();
    function dt(e, t) {
        P[e] = t.bind(null, P[e] || function () {});
    }
    function Yt(e) {
        Yn && Yn(), (Yn = e && e.S());
    }
    function Xr(e) {
        var t = this,
            n = e.data,
            o = Gn(n);
        o.value = n;
        var r = K(function () {
                for (var s = t, c = t.__v; (c = c.__); )
                    if (c.__c) {
                        c.__c.__$f |= 4;
                        break;
                    }
                var l = De(function () {
                        var h = o.value.value;
                        return h === 0 ? 0 : h === !0 ? "" : h || "";
                    }),
                    d = De(function () {
                        return !Fo(l.value);
                    }),
                    u = ut(function () {
                        if (((this.N = Zr), d.value)) {
                            var h = l.value;
                            s.base && s.base.nodeType === 3 && (s.base.data = h);
                        }
                    }),
                    p = t.__$u.d;
                return (
                    (t.__$u.d = function () {
                        u(), p.call(this);
                    }),
                    [d, l]
                );
            }, []),
            i = r[0],
            a = r[1];
        return i.value ? a.peek() : a.value;
    }
    (Xr.displayName = "_st"),
        Object.defineProperties(se.prototype, {
            constructor: { configurable: !0, value: void 0 },
            type: { configurable: !0, value: Xr },
            props: {
                configurable: !0,
                get: function () {
                    return { data: this };
                },
            },
            __b: { configurable: !0, value: 1 },
        }),
        dt("__b", function (e, t) {
            if (typeof t.type == "string") {
                var n,
                    o = t.props;
                for (var r in o)
                    if (r !== "children") {
                        var i = o[r];
                        i instanceof se && (n || (t.__np = n = {}), (n[r] = i), (o[r] = i.peek()));
                    }
            }
            e(t);
        }),
        dt("__r", function (e, t) {
            Yt();
            var n,
                o = t.__c;
            o &&
                ((o.__$f &= -2),
                (n = o.__$u) === void 0 &&
                    (o.__$u = n = (function (r) {
                        var i;
                        return (
                            ut(function () {
                                i = this;
                            }),
                            (i.c = function () {
                                (o.__$f |= 1), o.setState({});
                            }),
                            i
                        );
                    })())),
                (Kt = o),
                Yt(n),
                e(t);
        }),
        dt("__e", function (e, t, n, o) {
            Yt(), (Kt = void 0), e(t, n, o);
        }),
        dt("diffed", function (e, t) {
            Yt(), (Kt = void 0);
            var n;
            if (typeof t.type == "string" && (n = t.__e)) {
                var o = t.__np,
                    r = t.props;
                if (o) {
                    var i = n.U;
                    if (i)
                        for (var a in i) {
                            var s = i[a];
                            s !== void 0 && !(a in o) && (s.d(), (i[a] = void 0));
                        }
                    else (i = {}), (n.U = i);
                    for (var c in o) {
                        var l = i[c],
                            d = o[c];
                        l === void 0 ? ((l = Ts(n, c, d, r)), (i[c] = l)) : l.o(d, r);
                    }
                }
            }
            e(t);
        });
    function Ts(e, t, n, o) {
        var r = t in e && e.ownerSVGElement === void 0,
            i = jn(n);
        return {
            o: function (a, s) {
                (i.value = a), (o = s);
            },
            d: ut(function () {
                this.N = Zr;
                var a = i.value.value;
                o[t] !== a && ((o[t] = a), r ? (e[t] = a) : a ? e.setAttribute(t, a) : e.removeAttribute(t));
            }),
        };
    }
    dt("unmount", function (e, t) {
        if (typeof t.type == "string") {
            var n = t.__e;
            if (n) {
                var o = n.U;
                if (o) {
                    n.U = void 0;
                    for (var r in o) {
                        var i = o[r];
                        i && i.d();
                    }
                }
            }
        } else {
            var a = t.__c;
            if (a) {
                var s = a.__$u;
                s && ((a.__$u = void 0), s.d());
            }
        }
        e(t);
    }),
        dt("__h", function (e, t, n, o) {
            (o < 3 || o === 9) && (t.__$f |= 2), e(t, n, o);
        }),
        (ye.prototype.shouldComponentUpdate = function (e, t) {
            var n = this.__$u,
                o = n && n.s !== void 0;
            for (var r in t) return !0;
            if (this.__f || (typeof this.u == "boolean" && this.u === !0)) {
                var i = 2 & this.__$f;
                if (!(o || i || 4 & this.__$f) || 1 & this.__$f) return !0;
            } else if (!(o || 4 & this.__$f) || 3 & this.__$f) return !0;
            for (var a in e) if (a !== "__source" && e[a] !== this.props[a]) return !0;
            for (var s in this.props) if (!(s in e)) return !0;
            return !1;
        });
    function Gn(e) {
        return K(function () {
            return jn(e);
        }, []);
    }
    function nt(e) {
        var t = O(e);
        return (
            (t.current = e),
            (Kt.__$f |= 4),
            K(function () {
                return De(function () {
                    return t.current();
                });
            }, [])
        );
    }
    var Is = typeof requestAnimationFrame > "u" ? setTimeout : requestAnimationFrame,
        Os = function (e) {
            queueMicrotask(function () {
                queueMicrotask(e);
            });
        };
    function Ns() {
        Vr(function () {
            for (var e; (e = Yr.shift()); ) Kn.call(e);
        });
    }
    function Rs() {
        Yr.push(this) === 1 && (P.requestAnimationFrame || Is)(Ns);
    }
    function Ms() {
        Vr(function () {
            for (var e; (e = Gr.shift()); ) Kn.call(e);
        });
    }
    function Zr() {
        Gr.push(this) === 1 && (P.requestAnimationFrame || Os)(Ms);
    }
    function Ds(e) {
        var t = O(e);
        (t.current = e),
            I(function () {
                return ut(function () {
                    return (this.N = Rs), t.current();
                });
            }, []);
    }
    function ot(e) {
        const t = Ne(e);
        if (t == null) throw new Error(`${e.displayName} cannot be used outside of provider`);
        return t;
    }
    const Jr = ue(null);
    function Ls({ value: e, children: t }) {
        const n = K(() => Object.fromEntries(Hn.map((o) => [o, jn(e[o])])), []);
        return (
            Hn.forEach((o) => {
                n[o].value = e[o];
            }),
            m(Jr.Provider, { value: n, children: t })
        );
    }
    function Qr() {
        return ot(Jr);
    }
    function he(e) {
        return Qr()[e];
    }
    const $s = "https://api.elevenlabs.io",
        Fs = "https://api.us.elevenlabs.io",
        Bs = "wss://api.elevenlabs.io",
        Us = "wss://api.us.elevenlabs.io",
        ei = ue(null);
    function Ws({ children: e }) {
        const t = he("server-location"),
            n = K(() => {
                const o = De(() => Vs(t.value));
                return { location: o, serverUrl: De(() => (o.value === "us" ? Fs : $s)), webSocketUrl: De(() => (o.value === "us" ? Us : Bs)) };
            }, []);
        return m(ei.Provider, { value: n, children: e });
    }
    function Xn() {
        return ot(ei);
    }
    function Vs(e = "us") {
        switch (e) {
            case "us":
            case "global":
                return e;
            default:
                return console.warn(`[ConversationalAI] Invalid server-location: ${e}. Defaulting to "us"`), "us";
        }
    }
    const ti = ue(null);
    function Hs({ children: e }) {
        const { serverUrl: t } = Xn(),
            n = he("agent-id"),
            o = he("override-config"),
            r = Gn(null);
        Ds(() => {
            if (o.value)
                try {
                    const d = JSON.parse(o.value);
                    if (d) {
                        r.value = d;
                        return;
                    }
                } catch (d) {
                    console.error(`[ConversationalAI] Cannot parse override-config: ${d == null ? void 0 : d.message}`);
                }
            if (!n.value) {
                r.value = null;
                return;
            }
            const l = new AbortController();
            return (
                zs(n.value, t.value, l.signal)
                    .then((d) => {
                        l.signal.aborted || (r.value = d);
                    })
                    .catch((d) => {
                        console.error(`[ConversationalAI] Cannot fetch config for agent ${n.value}: ${d == null ? void 0 : d.message}`), l.signal.aborted || (r.value = null);
                    }),
                () => {
                    l.abort();
                }
            );
        });
        const i = he("variant"),
            a = he("expandable"),
            s = he("terms-key"),
            c = nt(() => {
                if (!r.value) return null;
                const l = i.value ?? r.value.variant,
                    d = a.value ?? r.value.expandable;
                return { ...r.value, variant: Cs(l), expandable: Ss(d, l), termsKey: s.value ?? r.value.terms_key };
            });
        return c.value ? m(ti.Provider, { value: c, children: e }) : null;
    }
    function ft() {
        return ot(ti);
    }
    async function zs(e, t, n) {
        const r = await (await fetch(`${t}/v1/convai/agents/${e}/widget`, { signal: n })).json();
        if (!r.widget_config) throw new Error("Response does not contain widget_config");
        return r.widget_config;
    }
    function js() {
        const e = ft();
        let t = ws;
        const n = nt(
            () => `.${C.devHost}, :host {
  --el-bg-color: ${e.value.bg_color ?? "#fff"};
  --el-text-color: ${e.value.text_color ?? "#000"};
  --el-border-color: ${e.value.border_color ?? "#e1e1e1"};
  --el-border-radius: ${e.value.border_radius ?? "20"}px;
  --el-btn-color: ${e.value.btn_color ?? "#000"};
  --el-btn-text-color: ${e.value.btn_text_color ?? "#fff"};
  --el-btn-radius: ${e.value.btn_radius ?? "32"}px;
  --el-focus-color: ${e.value.focus_color ?? "#000"};
  --el-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}`
        );
        return m("style", { children: [n, t] });
    }
    function Gt() {
        return (
            (Gt = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var o in n) ({}.hasOwnProperty.call(n, o) && (e[o] = n[o]));
                      }
                      return e;
                  }),
            Gt.apply(null, arguments)
        );
    }
    function qs(e) {
        const t = new Uint8Array(e);
        return window.btoa(String.fromCharCode(...t));
    }
    function Ks(e) {
        const t = window.atob(e),
            n = t.length,
            o = new Uint8Array(n);
        for (let r = 0; r < n; r++) o[r] = t.charCodeAt(r);
        return o.buffer;
    }
    const Ys = new Blob(
            [
                `
      const BIAS = 0x84;
      const CLIP = 32635;
      const encodeTable = [
        0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
      ];
      
      function encodeSample(sample) {
        let sign;
        let exponent;
        let mantissa;
        let muLawSample;
        sign = (sample >> 8) & 0x80;
        if (sign !== 0) sample = -sample;
        sample = sample + BIAS;
        if (sample > CLIP) sample = CLIP;
        exponent = encodeTable[(sample>>7) & 0xFF];
        mantissa = (sample >> (exponent+3)) & 0x0F;
        muLawSample = ~(sign | (exponent << 4) | mantissa);
        
        return muLawSample;
      }
    
      class RawAudioProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
                    
          this.port.onmessage = ({ data }) => {
            switch (data.type) {
              case "setFormat":
                this.isMuted = false;
                this.buffer = []; // Initialize an empty buffer
                this.bufferSize = data.sampleRate / 4;
                this.format = data.format;

                if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
                  globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {
                    this.resampler = resampler;
                  });
                }
                break;
              case "setMuted":
                this.isMuted = data.isMuted;
                break;
            }
          };
        }
        process(inputs) {
          if (!this.buffer) {
            return true;
          }
          
          const input = inputs[0]; // Get the first input node
          if (input.length > 0) {
            let channelData = input[0]; // Get the first channel's data

            // Resample the audio if necessary
            if (this.resampler) {
              channelData = this.resampler.full(channelData);
            }

            // Add channel data to the buffer
            this.buffer.push(...channelData);
            // Get max volume 
            let sum = 0.0;
            for (let i = 0; i < channelData.length; i++) {
              sum += channelData[i] * channelData[i];
            }
            const maxVolume = Math.sqrt(sum / channelData.length);
            // Check if buffer size has reached or exceeded the threshold
            if (this.buffer.length >= this.bufferSize) {
              const float32Array = this.isMuted 
                ? new Float32Array(this.buffer.length)
                : new Float32Array(this.buffer);

              let encodedArray = this.format === "ulaw"
                ? new Uint8Array(float32Array.length)
                : new Int16Array(float32Array.length);

              // Iterate through the Float32Array and convert each sample to PCM16
              for (let i = 0; i < float32Array.length; i++) {
                // Clamp the value to the range [-1, 1]
                let sample = Math.max(-1, Math.min(1, float32Array[i]));

                // Scale the sample to the range [-32768, 32767]
                let value = sample < 0 ? sample * 32768 : sample * 32767;
                if (this.format === "ulaw") {
                  value = encodeSample(Math.round(value));
                }

                encodedArray[i] = value;
              }

              // Send the buffered data to the main script
              this.port.postMessage([encodedArray, maxVolume]);

              // Clear the buffer after sending
              this.buffer = [];
            }
          }
          return true; // Continue processing
        }
      }
      registerProcessor("raw-audio-processor", RawAudioProcessor);
  `,
            ],
            { type: "application/javascript" }
        ),
        Gs = URL.createObjectURL(Ys);
    function ni() {
        return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    }
    class Zn {
        static async create({ sampleRate: t, format: n, preferHeadphonesForIosDevices: o }) {
            let r = null,
                i = null;
            try {
                const c = { sampleRate: { ideal: t }, echoCancellation: { ideal: !0 }, noiseSuppression: { ideal: !0 } };
                if (ni() && o) {
                    const h = (await window.navigator.mediaDevices.enumerateDevices()).find((v) => v.kind === "audioinput" && ["airpod", "headphone", "earphone"].find((f) => v.label.toLowerCase().includes(f)));
                    h && (c.deviceId = { ideal: h.deviceId });
                }
                const l = navigator.mediaDevices.getSupportedConstraints().sampleRate;
                r = new window.AudioContext(l ? { sampleRate: t } : {});
                const d = r.createAnalyser();
                l || (await r.audioWorklet.addModule("https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js")),
                    await r.audioWorklet.addModule(Gs),
                    (i = await navigator.mediaDevices.getUserMedia({ audio: c }));
                const u = r.createMediaStreamSource(i),
                    p = new AudioWorkletNode(r, "raw-audio-processor");
                return p.port.postMessage({ type: "setFormat", format: n, sampleRate: t }), u.connect(d), d.connect(p), await r.resume(), new Zn(r, d, p, i);
            } catch (c) {
                var a, s;
                throw ((a = i) == null || a.getTracks().forEach((l) => l.stop()), (s = r) == null || s.close(), c);
            }
        }
        constructor(t, n, o, r) {
            (this.context = void 0), (this.analyser = void 0), (this.worklet = void 0), (this.inputStream = void 0), (this.context = t), (this.analyser = n), (this.worklet = o), (this.inputStream = r);
        }
        async close() {
            this.inputStream.getTracks().forEach((t) => t.stop()), await this.context.close();
        }
        setMuted(t) {
            this.worklet.port.postMessage({ type: "setMuted", isMuted: t });
        }
    }
    const Xs = new Blob(
            [
                `
      const decodeTable = [0,132,396,924,1980,4092,8316,16764];
      
      export function decodeSample(muLawSample) {
        let sign;
        let exponent;
        let mantissa;
        let sample;
        muLawSample = ~muLawSample;
        sign = (muLawSample & 0x80);
        exponent = (muLawSample >> 4) & 0x07;
        mantissa = muLawSample & 0x0F;
        sample = decodeTable[exponent] + (mantissa << (exponent+3));
        if (sign !== 0) sample = -sample;

        return sample;
      }
      
      class AudioConcatProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
          this.buffers = []; // Initialize an empty buffer
          this.cursor = 0;
          this.currentBuffer = null;
          this.wasInterrupted = false;
          this.finished = false;
          
          this.port.onmessage = ({ data }) => {
            switch (data.type) {
              case "setFormat":
                this.format = data.format;
                break;
              case "buffer":
                this.wasInterrupted = false;
                this.buffers.push(
                  this.format === "ulaw"
                    ? new Uint8Array(data.buffer)
                    : new Int16Array(data.buffer)
                );
                break;
              case "interrupt":
                this.wasInterrupted = true;
                break;
              case "clearInterrupted":
                if (this.wasInterrupted) {
                  this.wasInterrupted = false;
                  this.buffers = [];
                  this.currentBuffer = null;
                }
            }
          };
        }
        process(_, outputs) {
          let finished = false;
          const output = outputs[0][0];
          for (let i = 0; i < output.length; i++) {
            if (!this.currentBuffer) {
              if (this.buffers.length === 0) {
                finished = true;
                break;
              }
              this.currentBuffer = this.buffers.shift();
              this.cursor = 0;
            }

            let value = this.currentBuffer[this.cursor];
            if (this.format === "ulaw") {
              value = decodeSample(value);
            }
            output[i] = value / 32768;
            this.cursor++;

            if (this.cursor >= this.currentBuffer.length) {
              this.currentBuffer = null;
            }
          }

          if (this.finished !== finished) {
            this.finished = finished;
            this.port.postMessage({ type: "process", finished });
          }

          return true; // Continue processing
        }
      }

      registerProcessor("audio-concat-processor", AudioConcatProcessor);
    `,
            ],
            { type: "application/javascript" }
        ),
        Zs = URL.createObjectURL(Xs);
    class Jn {
        static async create({ sampleRate: t, format: n }) {
            let o = null;
            try {
                o = new AudioContext({ sampleRate: t });
                const i = o.createAnalyser(),
                    a = o.createGain();
                a.connect(i), i.connect(o.destination), await o.audioWorklet.addModule(Zs);
                const s = new AudioWorkletNode(o, "audio-concat-processor");
                return s.port.postMessage({ type: "setFormat", format: n }), s.connect(a), await o.resume(), new Jn(o, i, a, s);
            } catch (i) {
                var r;
                throw ((r = o) == null || r.close(), i);
            }
        }
        constructor(t, n, o, r) {
            (this.context = void 0), (this.analyser = void 0), (this.gain = void 0), (this.worklet = void 0), (this.context = t), (this.analyser = n), (this.gain = o), (this.worklet = r);
        }
        async close() {
            await this.context.close();
        }
    }
    function oi(e) {
        return !!e.type;
    }
    class Qn {
        static async create(t) {
            let n = null;
            try {
                var o;
                const i = (o = t.origin) != null ? o : "wss://api.elevenlabs.io",
                    a = t.signedUrl ? t.signedUrl : i + "/v1/convai/conversation?agent_id=" + t.agentId,
                    s = ["convai"];
                t.authorization && s.push(`bearer.${t.authorization}`), (n = new WebSocket(a, s));
                const c = await new Promise((v, f) => {
                        n.addEventListener(
                            "open",
                            () => {
                                var _;
                                const y = { type: "conversation_initiation_client_data" };
                                var g, b, w, x;
                                t.overrides &&
                                    (y.conversation_config_override = {
                                        agent: {
                                            prompt: (g = t.overrides.agent) == null ? void 0 : g.prompt,
                                            first_message: (b = t.overrides.agent) == null ? void 0 : b.firstMessage,
                                            language: (w = t.overrides.agent) == null ? void 0 : w.language,
                                        },
                                        tts: { voice_id: (x = t.overrides.tts) == null ? void 0 : x.voiceId },
                                    }),
                                    t.customLlmExtraBody && (y.custom_llm_extra_body = t.customLlmExtraBody),
                                    t.dynamicVariables && (y.dynamic_variables = t.dynamicVariables),
                                    (_ = n) == null || _.send(JSON.stringify(y));
                            },
                            { once: !0 }
                        ),
                            n.addEventListener("error", (_) => {
                                setTimeout(() => f(_), 0);
                            }),
                            n.addEventListener("close", f),
                            n.addEventListener(
                                "message",
                                (_) => {
                                    const y = JSON.parse(_.data);
                                    oi(y) && (y.type === "conversation_initiation_metadata" ? v(y.conversation_initiation_metadata_event) : console.warn("First received message is not conversation metadata."));
                                },
                                { once: !0 }
                            );
                    }),
                    { conversation_id: l, agent_output_audio_format: d, user_input_audio_format: u } = c,
                    p = ri(u ?? "pcm_16000"),
                    h = ri(d);
                return new Qn(n, l, p, h);
            } catch (i) {
                var r;
                throw ((r = n) == null || r.close(), i);
            }
        }
        constructor(t, n, o, r) {
            (this.socket = void 0),
                (this.conversationId = void 0),
                (this.inputFormat = void 0),
                (this.outputFormat = void 0),
                (this.queue = []),
                (this.disconnectionDetails = null),
                (this.onDisconnectCallback = null),
                (this.onMessageCallback = null),
                (this.socket = t),
                (this.conversationId = n),
                (this.inputFormat = o),
                (this.outputFormat = r),
                this.socket.addEventListener("error", (i) => {
                    setTimeout(() => this.disconnect({ reason: "error", message: "The connection was closed due to a socket error.", context: i }), 0);
                }),
                this.socket.addEventListener("close", (i) => {
                    this.disconnect(i.code === 1e3 ? { reason: "agent", context: i } : { reason: "error", message: i.reason || "The connection was closed by the server.", context: i });
                }),
                this.socket.addEventListener("message", (i) => {
                    try {
                        const a = JSON.parse(i.data);
                        if (!oi(a)) return;
                        this.onMessageCallback ? this.onMessageCallback(a) : this.queue.push(a);
                    } catch {}
                });
        }
        close() {
            this.socket.close();
        }
        sendMessage(t) {
            this.socket.send(JSON.stringify(t));
        }
        onMessage(t) {
            (this.onMessageCallback = t), this.queue.forEach(t), (this.queue = []);
        }
        onDisconnect(t) {
            (this.onDisconnectCallback = t), this.disconnectionDetails && t(this.disconnectionDetails);
        }
        disconnect(t) {
            var n;
            this.disconnectionDetails || ((this.disconnectionDetails = t), (n = this.onDisconnectCallback) == null || n.call(this, t));
        }
    }
    function ri(e) {
        const [t, n] = e.split("_");
        if (!["pcm", "ulaw"].includes(t)) throw new Error(`Invalid format: ${e}`);
        const o = parseInt(n);
        if (isNaN(o)) throw new Error(`Invalid sample rate: ${n}`);
        return { format: t, sampleRate: o };
    }
    const Js = { clientTools: {} },
        Qs = { onConnect: () => {}, onDebug: () => {}, onDisconnect: () => {}, onError: () => {}, onMessage: () => {}, onModeChange: () => {}, onStatusChange: () => {}, onCanSendFeedbackChange: () => {} };
    class eo {
        static async startSession(t) {
            const n = Gt({}, Js, Qs, t);
            n.onStatusChange({ status: "connecting" }), n.onCanSendFeedbackChange({ canSendFeedback: !1 });
            let o = null,
                r = null,
                i = null,
                a = null;
            try {
                var s, c;
                a = await navigator.mediaDevices.getUserMedia({ audio: !0 });
                const f = (s = t.connectionDelay) != null ? s : { default: 0, android: 3e3 };
                let _ = f.default;
                var l;
                if (/android/i.test(navigator.userAgent)) _ = (l = f.android) != null ? l : _;
                else if (ni()) {
                    var d;
                    _ = (d = f.ios) != null ? d : _;
                }
                return (
                    _ > 0 && (await new Promise((y) => setTimeout(y, _))),
                    (r = await Qn.create(t)),
                    ([o, i] = await Promise.all([Zn.create(Gt({}, r.inputFormat, { preferHeadphonesForIosDevices: t.preferHeadphonesForIosDevices })), Jn.create(r.outputFormat)])),
                    (c = a) == null || c.getTracks().forEach((y) => y.stop()),
                    (a = null),
                    new eo(n, r, o, i)
                );
            } catch (f) {
                var u, p, h, v;
                throw (
                    (n.onStatusChange({ status: "disconnected" }),
                    (u = a) == null || u.getTracks().forEach((_) => _.stop()),
                    (p = r) == null || p.close(),
                    await ((h = o) == null ? void 0 : h.close()),
                    await ((v = i) == null ? void 0 : v.close()),
                    f)
                );
            }
        }
        constructor(t, n, o, r) {
            var i = this;
            (this.options = void 0),
                (this.connection = void 0),
                (this.input = void 0),
                (this.output = void 0),
                (this.lastInterruptTimestamp = 0),
                (this.mode = "listening"),
                (this.status = "connecting"),
                (this.inputFrequencyData = void 0),
                (this.outputFrequencyData = void 0),
                (this.volume = 1),
                (this.currentEventId = 1),
                (this.lastFeedbackEventId = 1),
                (this.canSendFeedback = !1),
                (this.endSession = () => this.endSessionWithDetails({ reason: "user" })),
                (this.endSessionWithDetails = async function (a) {
                    (i.status !== "connected" && i.status !== "connecting") ||
                        (i.updateStatus("disconnecting"), i.connection.close(), await i.input.close(), await i.output.close(), i.updateStatus("disconnected"), i.options.onDisconnect(a));
                }),
                (this.updateMode = (a) => {
                    a !== this.mode && ((this.mode = a), this.options.onModeChange({ mode: a }));
                }),
                (this.updateStatus = (a) => {
                    a !== this.status && ((this.status = a), this.options.onStatusChange({ status: a }));
                }),
                (this.updateCanSendFeedback = () => {
                    const a = this.currentEventId !== this.lastFeedbackEventId;
                    this.canSendFeedback !== a && ((this.canSendFeedback = a), this.options.onCanSendFeedbackChange({ canSendFeedback: a }));
                }),
                (this.onMessage = async function (a) {
                    switch (a.type) {
                        case "interruption":
                            a.interruption_event && (i.lastInterruptTimestamp = a.interruption_event.event_id), i.fadeOutAudio();
                            break;
                        case "agent_response":
                            i.options.onMessage({ source: "ai", message: a.agent_response_event.agent_response });
                            break;
                        case "user_transcript":
                            i.options.onMessage({ source: "user", message: a.user_transcription_event.user_transcript });
                            break;
                        case "internal_tentative_agent_response":
                            i.options.onDebug({ type: "tentative_agent_response", response: a.tentative_agent_response_internal_event.tentative_agent_response });
                            break;
                        case "client_tool_call":
                            if (i.options.clientTools.hasOwnProperty(a.client_tool_call.tool_name)) {
                                try {
                                    var s;
                                    const c = (s = await i.options.clientTools[a.client_tool_call.tool_name](a.client_tool_call.parameters)) != null ? s : "Client tool execution successful.";
                                    i.connection.sendMessage({ type: "client_tool_result", tool_call_id: a.client_tool_call.tool_call_id, result: c, is_error: !1 });
                                } catch (c) {
                                    i.onError("Client tool execution failed with following error: " + (c == null ? void 0 : c.message), { clientToolName: a.client_tool_call.tool_name }),
                                        i.connection.sendMessage({ type: "client_tool_result", tool_call_id: a.client_tool_call.tool_call_id, result: "Client tool execution failed: " + (c == null ? void 0 : c.message), is_error: !0 });
                                }
                                break;
                            }
                            if (i.options.onUnhandledClientToolCall) {
                                i.options.onUnhandledClientToolCall(a.client_tool_call);
                                break;
                            }
                            i.onError(`Client tool with name ${a.client_tool_call.tool_name} is not defined on client`, { clientToolName: a.client_tool_call.tool_name }),
                                i.connection.sendMessage({ type: "client_tool_result", tool_call_id: a.client_tool_call.tool_call_id, result: `Client tool with name ${a.client_tool_call.tool_name} is not defined on client`, is_error: !0 });
                            break;
                        case "audio":
                            i.lastInterruptTimestamp <= a.audio_event.event_id && (i.addAudioBase64Chunk(a.audio_event.audio_base_64), (i.currentEventId = a.audio_event.event_id), i.updateCanSendFeedback(), i.updateMode("speaking"));
                            break;
                        case "ping":
                            i.connection.sendMessage({ type: "pong", event_id: a.ping_event.event_id });
                            break;
                        default:
                            i.options.onDebug(a);
                    }
                }),
                (this.onInputWorkletMessage = (a) => {
                    this.status === "connected" && this.connection.sendMessage({ user_audio_chunk: qs(a.data[0].buffer) });
                }),
                (this.onOutputWorkletMessage = ({ data: a }) => {
                    a.type === "process" && this.updateMode(a.finished ? "listening" : "speaking");
                }),
                (this.addAudioBase64Chunk = (a) => {
                    (this.output.gain.gain.value = this.volume), this.output.worklet.port.postMessage({ type: "clearInterrupted" }), this.output.worklet.port.postMessage({ type: "buffer", buffer: Ks(a) });
                }),
                (this.fadeOutAudio = () => {
                    this.updateMode("listening"),
                        this.output.worklet.port.postMessage({ type: "interrupt" }),
                        this.output.gain.gain.exponentialRampToValueAtTime(1e-4, this.output.context.currentTime + 2),
                        setTimeout(() => {
                            (this.output.gain.gain.value = this.volume), this.output.worklet.port.postMessage({ type: "clearInterrupted" });
                        }, 2e3);
                }),
                (this.onError = (a, s) => {
                    console.error(a, s), this.options.onError(a, s);
                }),
                (this.calculateVolume = (a) => {
                    if (a.length === 0) return 0;
                    let s = 0;
                    for (let c = 0; c < a.length; c++) s += a[c] / 255;
                    return (s /= a.length), s < 0 ? 0 : s > 1 ? 1 : s;
                }),
                (this.getId = () => this.connection.conversationId),
                (this.isOpen = () => this.status === "connected"),
                (this.setVolume = ({ volume: a }) => {
                    this.volume = a;
                }),
                (this.setMicMuted = (a) => {
                    this.input.setMuted(a);
                }),
                (this.getInputByteFrequencyData = () => (
                    this.inputFrequencyData != null || (this.inputFrequencyData = new Uint8Array(this.input.analyser.frequencyBinCount)), this.input.analyser.getByteFrequencyData(this.inputFrequencyData), this.inputFrequencyData
                )),
                (this.getOutputByteFrequencyData = () => (
                    this.outputFrequencyData != null || (this.outputFrequencyData = new Uint8Array(this.output.analyser.frequencyBinCount)), this.output.analyser.getByteFrequencyData(this.outputFrequencyData), this.outputFrequencyData
                )),
                (this.getInputVolume = () => this.calculateVolume(this.getInputByteFrequencyData())),
                (this.getOutputVolume = () => this.calculateVolume(this.getOutputByteFrequencyData())),
                (this.sendFeedback = (a) => {
                    this.canSendFeedback
                        ? (this.connection.sendMessage({ type: "feedback", score: a ? "like" : "dislike", event_id: this.currentEventId }), (this.lastFeedbackEventId = this.currentEventId), this.updateCanSendFeedback())
                        : console.warn(this.lastFeedbackEventId === 0 ? "Cannot send feedback: the conversation has not started yet." : "Cannot send feedback: feedback has already been sent for the current response.");
                }),
                (this.options = t),
                (this.connection = n),
                (this.input = o),
                (this.output = r),
                this.options.onConnect({ conversationId: n.conversationId }),
                this.connection.onDisconnect(this.endSessionWithDetails),
                this.connection.onMessage(this.onMessage),
                (this.input.worklet.port.onmessage = this.onInputWorkletMessage),
                (this.output.worklet.port.onmessage = this.onOutputWorkletMessage),
                this.updateStatus("connected");
        }
    }
    function ec(e, t, n = "https://api.elevenlabs.io") {
        return fetch(`${n}/v1/convai/conversations/${e}/feedback`, { method: "POST", body: JSON.stringify({ feedback: t ? "like" : "dislike" }), headers: { "Content-Type": "application/json" } });
    }
    function to() {
        return (
            (to = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var o in n) ({}.hasOwnProperty.call(n, o) && (e[o] = n[o]));
                      }
                      return e;
                  }),
            to.apply(null, arguments)
        );
    }
    const tc = ["micMuted", "volume"];
    function nc(e = {}) {
        const { micMuted: t, volume: n } = e,
            o = (function (p, h) {
                if (p == null) return {};
                var v = {};
                for (var f in p)
                    if ({}.hasOwnProperty.call(p, f)) {
                        if (h.includes(f)) continue;
                        v[f] = p[f];
                    }
                return v;
            })(e, tc),
            r = O(null),
            i = O(null),
            [a, s] = k("disconnected"),
            [c, l] = k(!1),
            [d, u] = k("listening");
        return (
            I(() => {
                var p;
                t !== void 0 && (r == null || (p = r.current) == null || p.setMicMuted(t));
            }, [t]),
            I(() => {
                var p;
                n !== void 0 && (r == null || (p = r.current) == null || p.setVolume({ volume: n }));
            }, [n]),
            I(
                () => () => {
                    var p;
                    (p = r.current) == null || p.endSession();
                },
                []
            ),
            {
                startSession: async (p) => {
                    var h;
                    if ((h = r.current) != null && h.isOpen()) return r.current.getId();
                    if (i.current) return (await i.current).getId();
                    try {
                        return (
                            (i.current = eo.startSession(
                                to({}, o ?? {}, p ?? {}, {
                                    onModeChange: ({ mode: v }) => {
                                        u(v);
                                    },
                                    onStatusChange: ({ status: v }) => {
                                        s(v);
                                    },
                                    onCanSendFeedbackChange: ({ canSendFeedback: v }) => {
                                        l(v);
                                    },
                                })
                            )),
                            (r.current = await i.current),
                            t !== void 0 && r.current.setMicMuted(t),
                            n !== void 0 && r.current.setVolume({ volume: n }),
                            r.current.getId()
                        );
                    } finally {
                        i.current = null;
                    }
                },
                endSession: async () => {
                    const p = r.current;
                    (r.current = null), await (p == null ? void 0 : p.endSession());
                },
                setVolume: ({ volume: p }) => {
                    var h;
                    (h = r.current) == null || h.setVolume({ volume: p });
                },
                getInputByteFrequencyData: () => {
                    var p;
                    return (p = r.current) == null ? void 0 : p.getInputByteFrequencyData();
                },
                getOutputByteFrequencyData: () => {
                    var p;
                    return (p = r.current) == null ? void 0 : p.getOutputByteFrequencyData();
                },
                getInputVolume: () => {
                    var p, h;
                    return (p = (h = r.current) == null ? void 0 : h.getInputVolume()) != null ? p : 0;
                },
                getOutputVolume: () => {
                    var p, h;
                    return (p = (h = r.current) == null ? void 0 : h.getOutputVolume()) != null ? p : 0;
                },
                sendFeedback: (p) => {
                    var h;
                    (h = r.current) == null || h.sendFeedback(p);
                },
                status: a,
                canSendFeedback: c,
                micMuted: t,
                isSpeaking: d === "speaking",
            }
        );
    }
    function oc(e) {
        return m("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            height: "24px",
            width: "24px",
            ...e,
            children: m("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }),
        });
    }
    function ii(e) {
        return m("svg", {
            viewBox: "0 0 640 640",
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            stroke: "currentColor",
            fill: "currentColor",
            ...e,
            children: m("path", {
                d:
                    "M 82.6 88.6 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 36 76.7 98.9 140.5 177.2 177.2 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 C 572.1 430.5 578 442.1 575.4 453.4 l -24 104 C 548.9 568.2 539.3 576 528 576 c -256.1 0 -464 -207.5 -464 -464 c 0 -11.2 7.7 -20.9 18.6 -23.4 z",
            }),
        });
    }
    function rc(e) {
        return m("svg", {
            viewBox: "0 0 640 640",
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            stroke: "currentColor",
            fill: "currentColor",
            ...e,
            children: m("path", {
                d:
                    "M 371.8 445.4 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 c 10.7 4.6 16.5 16.1 13.9 27.5 l -24 104 c -2.5 10.8 -12.1 18.6 -23.4 18.6 c -100.7 0 -193.7 -32.4 -269.7 -86.9 l 80 -61.8 c 10.9 6.5 22.1 12.7 33.6 18.1 z m -365.6 76.7 L 164.9 399.5 C 102.1 320.4 64 220.9 64 112 c 0 -11.2 7.7 -20.9 18.6 -23.4 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 12.2 26.1 27.9 50.3 46 72.8 L 594.5 67.4 C 601.5 62 611.5 63.2 617 70.2 L 636.6 95.4 c 5.4 7 4.2 17 -2.8 22.4 l -588.4 454.7 c -7 5.4 -17 4.2 -22.5 -2.8 l -19.6 -25.3 c -5.4 -6.8 -4.1 -16.9 2.9 -22.3 z",
            }),
        });
    }
    function ic(e) {
        return m("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            className: "lucide lucide-thumbs-up",
            ...e,
            children: [m("path", { d: "M7 10v12" }), m("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" })],
        });
    }
    function ac(e) {
        return m("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            height: "1em",
            width: "1em",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            ...e,
            children: [m("path", { d: "M17 14V2" }), m("path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" })],
        });
    }
    const sc = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uOffsets[7];
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform sampler2D uPerlinTexture;

in vec2 vUv;

out vec4 outColor;

const float PI = 3.14159265358979323846;

// Draw a single oval with soft edges and calculate its gradient color
bool drawOval(vec2 polarUv, vec2 polarCenter, float a, float b, bool reverseGradient, float softness, out vec4 color) {
    vec2 p = polarUv - polarCenter;
    float oval = (p.x * p.x) / (a * a) + (p.y * p.y) / (b * b);
    
    float edge = smoothstep(1.0, 1.0 - softness, oval);
    
    if (edge > 0.0) {
        float gradient = reverseGradient ? (1.0 - (p.x / a + 1.0) / 2.0) : ((p.x / a + 1.0) / 2.0);
        color = vec4(vec3(gradient), 0.8 * edge);
        return true;
    }
    return false;
}

// Map grayscale value to a 4-color ramp (color1, color2, color3, color4)
vec3 colorRamp(float grayscale, vec3 color1, vec3 color2, vec3 color3, vec3 color4) {
    if (grayscale < 0.33) {
        return mix(color1, color2, grayscale * 3.0);
    } else if (grayscale < 0.66) {
        return mix(color2, color3, (grayscale - 0.33) * 3.0);
    } else {
        return mix(color3, color4, (grayscale - 0.66) * 3.0);
    }
}

vec2 hash2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

// 2D noise for the ring
float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );

    return 0.5 + 0.5 * n;
}

float sharpRing(vec2 uv, float theta, float time) {
    float ringStart = 1.0;
    float ringWidth = 0.5;
    float noiseScale = 5.0;
    
    vec2 noiseCoord = vec2(theta / (2.0 * PI), time * 0.1);
    noiseCoord *= noiseScale;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 4.0;
    
    return ringStart + noise * ringWidth * 1.5;
}

float smoothRing(vec2 uv, float time) {
    float angle = atan(uv.y, uv.x);
    if (angle < 0.0) angle += 2.0 * PI;
    
    vec2 noiseCoord = vec2(angle / (2.0 * PI), time * 0.1);
    noiseCoord *= 6.0;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 8.0;
    
    float ringStart = 0.9;
    float ringWidth = 0.3;
    
    return ringStart + noise * ringWidth;
}

void main() {
    // Normalize vUv to be centered around (0.0, 0.0)
    vec2 uv = vUv * 2.0 - 1.0;

    // Convert uv to polar coordinates
    float radius = length(uv);
    float theta = atan(uv.y, uv.x);
    if (theta < 0.0) theta += 2.0 * PI; // Normalize theta to [0, 2*PI]

    // Initialize the base color to white
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

    // Original parameters for the ovals in polar coordinates
    float originalCenters[7] = float[7](0.0, 0.5 * PI, 1.0 * PI, 1.5 * PI, 2.0 * PI, 2.5 * PI, 3.0 * PI);

    // Parameters for the animated centers in polar coordinates
    float centers[7];
    for (int i = 0; i < 7; i++) {
        centers[i] = originalCenters[i] + 0.5 * sin(uTime / 20.0 + uOffsets[i]);
    }

    float a, b;
    vec4 ovalColor;

    // Check if the pixel is inside any of the ovals
    for (int i = 0; i < 7; i++) {
        float noise = texture(uPerlinTexture, vec2(mod(centers[i] + uTime * 0.05, 1.0), 0.5)).r;
        a = noise * 1.5; // Increased variance: goes from 0.0 to 1.0
        b = noise * 4.5; // Tall semi-minor axis
        bool reverseGradient = (i % 2 == 1); // Reverse gradient for every second oval

        // Calculate the distance in polar coordinates
        float distTheta = abs(theta - centers[i]);
        if (distTheta > PI) distTheta = 2.0 * PI - distTheta; // Shortest distance on circle
        float distRadius = radius;

        float softness = 0.4; // Controls edge softness (e.g. how much blur is applied to the ovals)

        // Check if the pixel is inside the oval in polar coordinates
        if (drawOval(vec2(distTheta, distRadius), vec2(0.0, 0.0), a, b, reverseGradient, softness, ovalColor)) {
            // Blend the oval color with the existing color
            color.rgb = mix(color.rgb, ovalColor.rgb, ovalColor.a);
            color.a = max(color.a, ovalColor.a); // Max alpha
        }
    }
    
    // Calculate both noisy rings
    float ringRadius1 = sharpRing(uv, theta, uTime);
    float ringRadius2 = smoothRing(uv, uTime);
    
    // Blend both rings
    float ringAlpha1 = (radius >= ringRadius1) ? 0.3 : 0.0;
    float ringAlpha2 = smoothstep(ringRadius2 - 0.05, ringRadius2 + 0.05, radius) * 0.25;
    
    float totalRingAlpha = max(ringAlpha1, ringAlpha2);
    
    // Apply screen blend mode for combined rings
    vec3 ringColor = vec3(1.0); // White ring color
    color.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - ringColor * totalRingAlpha);

    // Define colours to ramp against greyscale (could increase the amount of colours in the ramp)
    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
    vec3 color2 = uColor1; // Darker Color
    vec3 color3 = uColor2; // Lighter Color
    vec3 color4 = vec3(1.0, 1.0, 1.0); // White

    // Convert grayscale color to the color ramp
    float luminance = color.r; 
    color.rgb = colorRamp(luminance, color1, color2, color3, color4); // Apply the color ramp

    outColor = color;
}
`,
        cc = `#version 300 es
precision highp float;

in vec2 position;

out vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0, 1);
}
`,
        ai = 0,
        lc = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]),
        uc = "https://storage.googleapis.com/eleven-public-cdn/images/perlin-noise.png",
        Pe = class Pe {
            constructor(t) {
                Be(this, "gl");
                Be(this, "program");
                Be(this, "startTime");
                Be(this, "rafId", null);
                Be(this, "resizeObserver");
                Be(this, "copyNoiseImage", () => {
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Pe.noiseImage), this.gl.generateMipmap(this.gl.TEXTURE_2D);
                });
                Be(this, "render", () => {
                    if (!this.gl) {
                        this.rafId = null;
                        return;
                    }
                    const t = (performance.now() - this.startTime) / 1e3;
                    this.gl.uniform1f(this.gl.getUniformLocation(this.program, "uTime"), t), this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4), (this.rafId = requestAnimationFrame(this.render));
                });
                const n = t.getContext("webgl2", { depth: !1, stencil: !1 });
                this.gl = n;
                const o = this.getShader(n.FRAGMENT_SHADER, sc),
                    r = this.getShader(n.VERTEX_SHADER, cc);
                if (!o || !r) throw new Error("Failed to compile shaders");
                if (((this.program = n.createProgram()), n.attachShader(this.program, o), n.attachShader(this.program, r), n.linkProgram(this.program), !n.getProgramParameter(this.program, n.LINK_STATUS)))
                    throw new Error("Failed to link program");
                const i = n.createTexture();
                n.bindTexture(n.TEXTURE_2D, i),
                    n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, new Uint8Array([128, 128, 128, 255])),
                    Pe.noiseImage || ((Pe.noiseImage = new Image()), (Pe.noiseImage.crossOrigin = "anonymous"), (Pe.noiseImage.src = uc)),
                    Pe.noiseImage.complete ? this.copyNoiseImage() : Pe.noiseImage.addEventListener("load", this.copyNoiseImage);
                const a = n.createBuffer();
                n.bindBuffer(n.ARRAY_BUFFER, a),
                    n.bufferData(n.ARRAY_BUFFER, lc, n.STATIC_DRAW),
                    n.vertexAttribPointer(ai, 2, n.FLOAT, !1, 0, 0),
                    n.enableVertexAttribArray(ai),
                    n.useProgram(this.program),
                    n.uniform1i(n.getUniformLocation(this.program, "uPerlinTexture"), 0),
                    n.uniform1fv(
                        n.getUniformLocation(this.program, "uOffsets"),
                        new Float32Array(7).map(() => Math.random() * Math.PI * 2)
                    ),
                    this.updateColors("#2792DC", "#9CE6E6"),
                    (this.resizeObserver = new ResizeObserver((c) => {
                        const l = c[0],
                            d = l.devicePixelContentBoxSize ? l.devicePixelContentBoxSize[0] : l.contentBoxSize[0];
                        (t.width = Math.min(512, d.inlineSize)), (t.height = Math.min(512, d.blockSize)), this.updateViewport();
                    }));
                const s = t.parentElement;
                if (s)
                    try {
                        this.resizeObserver.observe(s, { box: "device-pixel-content-box" });
                    } catch {
                        this.resizeObserver.observe(s);
                    }
                (this.startTime = performance.now()), (this.rafId = requestAnimationFrame(this.render));
            }
            dispose() {
                var t, n, o;
                this.rafId !== null && cancelAnimationFrame(this.rafId),
                    (t = this.resizeObserver) == null || t.disconnect(),
                    (o = (n = this.gl) == null ? void 0 : n.getExtension("WEBGL_lose_context")) == null || o.loseContext(),
                    (this.gl = null),
                    (this.program = null);
            }
            updateViewport() {
                this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
            }
            updateColors(t, n) {
                this.updateColor("uColor1", t), this.updateColor("uColor2", n);
            }
            updateColor(t, n) {
                try {
                    const o = parseInt(n.slice(1, 3), 16) / 255,
                        r = parseInt(n.slice(3, 5), 16) / 255,
                        i = parseInt(n.slice(5, 7), 16) / 255;
                    this.gl.uniform3fv(this.gl.getUniformLocation(this.program, t), [Math.pow(o, 2.2), Math.pow(r, 2.2), Math.pow(i, 2.2)]);
                } catch (o) {
                    console.error(`[ConversationalAI] Failed to parse ${n} as color:`, o);
                }
            }
            getShader(t, n) {
                const o = this.gl.createShader(t);
                return this.gl.shaderSource(o, n), this.gl.compileShader(o), this.gl.getShaderParameter(o, this.gl.COMPILE_STATUS) ? o : (this.gl.deleteShader(o), null);
            }
        };
    Be(Pe, "noiseImage");
    let no = Pe;
    const si = ue(null);
    function dc({ children: e }) {
        const t = ft(),
            n = he("avatar-image-url"),
            o = he("avatar-orb-color-1"),
            r = he("avatar-orb-color-2"),
            i = nt(() => (n.value ? { type: "image", url: n.value } : o.value && r.value ? { type: "orb", color_1: o.value, color_2: r.value } : t.value.avatar));
        return m(si.Provider, { value: i, children: e });
    }
    function fc() {
        return ot(si);
    }
    function ci({ getInputVolume: e, getOutputVolume: t, isSpeaking: n, status: o }) {
        const r = fc(),
            i = O(null),
            a = O(null);
        I(() => {
            if (o === "disconnected") {
                (i.current.style.transform = ""), (a.current.style.transform = ""), (a.current.style.opacity = "");
                return;
            }
            let c;
            function l() {
                const d = e(),
                    u = t(),
                    p = n ? 1 : 0.5,
                    h = n ? 1 : 1 - d * 0.6,
                    v = n ? 1 + u * 0.6 : 1;
                (i.current.style.transform = `scale(${v})`), (a.current.style.transform = `scale(${h})`), (a.current.style.opacity = `${p}`), (c = requestAnimationFrame(l));
            }
            return (
                l(),
                () => {
                    cancelAnimationFrame(c);
                }
            );
        }, [o]);
        const s = nt(() => ({ backgroundImage: r.value.type === "image" ? `url(${r.value.url})` : r.value.type === "url" ? `url(${r.value.custom_url})` : void 0 }));
        return m("div", {
            className: C.avatar,
            children: [m("div", { ref: i, className: C.avatarBackground }), m("div", { ref: a, style: s, className: C.avatarImage, children: r.value.type === "orb" && m(pc, { color1: r.value.color_1, color2: r.value.color_2 }) })],
        });
    }
    function pc({ color1: e, color2: t }) {
        const n = O(null),
            o = O(null);
        return (
            I(() => {
                var r;
                try {
                    o.current = new no(n.current);
                } catch {
                    (r = o.current) == null || r.dispose(), (o.current = null);
                }
                return () => {
                    var i;
                    (i = o.current) == null || i.dispose();
                };
            }, []),
            I(() => {
                var r;
                (r = o.current) == null || r.updateColors(e, t);
            }, [e, t]),
            m("canvas", { className: C.canvas, ref: n })
        );
    }
    function li(e) {
        var t,
            n,
            o = "";
        if (typeof e == "string" || typeof e == "number") o += e;
        else if (typeof e == "object")
            if (Array.isArray(e)) {
                var r = e.length;
                for (t = 0; t < r; t++) e[t] && (n = li(e[t])) && (o && (o += " "), (o += n));
            } else for (n in e) e[n] && (o && (o += " "), (o += n));
        return o;
    }
    function me() {
        for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = li(e)) && (o && (o += " "), (o += t));
        return o;
    }
    function hc() {
        return m("div", { className: C.poweredBy, children: [m("span", { children: "Powered by ElevenLabs " }), m("a", { href: "https://elevenlabs.io/conversational-ai", target: "_blank", children: "Conversational AI" })] });
    }
    function ui(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
    }
    function oe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
            if ((e == null || e(r), n === !1 || !r.defaultPrevented)) return t == null ? void 0 : t(r);
        };
    }
    function di(e, t = []) {
        let n = [];
        function o(i, a) {
            const s = ue(a),
                c = n.length;
            n = [...n, a];
            function l(u) {
                const { scope: p, children: h, ...v } = u,
                    f = (p == null ? void 0 : p[e][c]) || s,
                    _ = K(() => v, Object.values(v));
                return m(f.Provider, { value: _, children: h });
            }
            function d(u, p) {
                const h = (p == null ? void 0 : p[e][c]) || s,
                    v = Ne(h);
                if (v) return v;
                if (a !== void 0) return a;
                throw new Error(`\`${u}\` must be used within \`${i}\``);
            }
            return (l.displayName = i + "Provider"), [l, d];
        }
        const r = () => {
            const i = n.map((a) => ue(a));
            return function (s) {
                const c = (s == null ? void 0 : s[e]) || i;
                return K(() => ({ [`__scope${e}`]: { ...s, [e]: c } }), [s, c]);
            };
        };
        return (r.scopeName = e), [o, mc(r, ...t)];
    }
    function mc(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = () => {
            const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
            return function (i) {
                const a = o.reduce((s, { useScope: c, scopeName: l }) => {
                    const u = c(i)[`__scope${l}`];
                    return { ...s, ...u };
                }, {});
                return K(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
            };
        };
        return (n.scopeName = t.scopeName), n;
    }
    function _c(e, t) {
        typeof e == "function" ? e(t) : e != null && (e.current = t);
    }
    function fi(...e) {
        return (t) => e.forEach((n) => _c(n, t));
    }
    function ce(...e) {
        return j(fi(...e), e);
    }
    var Tt = D((e, t) => {
        const { children: n, ...o } = e,
            r = We.toArray(n),
            i = r.find(gc);
        if (i) {
            const a = i.props.children,
                s = r.map((c) => (c === i ? (We.count(a) > 1 ? We.only(null) : Re(a) ? a.props.children : null) : c));
            return m(oo, { ...o, ref: t, children: Re(a) ? Et(a, void 0, s) : null });
        }
        return m(oo, { ...o, ref: t, children: n });
    });
    Tt.displayName = "Slot";
    var oo = D((e, t) => {
        const { children: n, ...o } = e;
        if (Re(n)) {
            const r = bc(n);
            return Et(n, { ...yc(o, n.props), ref: t ? fi(t, r) : r });
        }
        return We.count(n) > 1 ? We.only(null) : null;
    });
    oo.displayName = "SlotClone";
    var vc = ({ children: e }) => m(ie, { children: e });
    function gc(e) {
        return Re(e) && e.type === vc;
    }
    function yc(e, t) {
        const n = { ...t };
        for (const o in t) {
            const r = e[o],
                i = t[o];
            /^on[A-Z]/.test(o)
                ? r && i
                    ? (n[o] = (...s) => {
                          i(...s), r(...s);
                      })
                    : r && (n[o] = r)
                : o === "style"
                ? (n[o] = { ...r, ...i })
                : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
        }
        return { ...e, ...n };
    }
    function bc(e) {
        var o, r;
        let t = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get,
            n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : ((t = (r = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : r.get), (n = t && "isReactWarning" in t && t.isReactWarning), n ? e.props.ref : e.props.ref || e.ref);
    }
    function wc(e) {
        const t = e + "CollectionProvider",
            [n, o] = di(t),
            [r, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
            a = (h) => {
                const { scope: v, children: f } = h,
                    _ = Me.useRef(null),
                    y = Me.useRef(new Map()).current;
                return m(r, { scope: v, itemMap: y, collectionRef: _, children: f });
            };
        a.displayName = t;
        const s = e + "CollectionSlot",
            c = Me.forwardRef((h, v) => {
                const { scope: f, children: _ } = h,
                    y = i(s, f),
                    g = ce(v, y.collectionRef);
                return m(Tt, { ref: g, children: _ });
            });
        c.displayName = s;
        const l = e + "CollectionItemSlot",
            d = "data-radix-collection-item",
            u = Me.forwardRef((h, v) => {
                const { scope: f, children: _, ...y } = h,
                    g = Me.useRef(null),
                    b = ce(v, g),
                    w = i(l, f);
                return Me.useEffect(() => (w.itemMap.set(g, { ref: g, ...y }), () => void w.itemMap.delete(g))), m(Tt, { [d]: "", ref: b, children: _ });
            });
        u.displayName = l;
        function p(h) {
            const v = i(e + "CollectionConsumer", h);
            return Me.useCallback(() => {
                const _ = v.collectionRef.current;
                if (!_) return [];
                const y = Array.from(_.querySelectorAll(`[${d}]`));
                return Array.from(v.itemMap.values()).sort((w, x) => y.indexOf(w.ref.current) - y.indexOf(x.ref.current));
            }, [v.collectionRef, v.itemMap]);
        }
        return [{ Provider: a, Slot: c, ItemSlot: u }, p, o];
    }
    function xc(e, t = []) {
        let n = [];
        function o(i, a) {
            const s = ue(a),
                c = n.length;
            n = [...n, a];
            const l = (u) => {
                var y;
                const { scope: p, children: h, ...v } = u,
                    f = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[c]) || s,
                    _ = K(() => v, Object.values(v));
                return m(f.Provider, { value: _, children: h });
            };
            l.displayName = i + "Provider";
            function d(u, p) {
                var f;
                const h = ((f = p == null ? void 0 : p[e]) == null ? void 0 : f[c]) || s,
                    v = Ne(h);
                if (v) return v;
                if (a !== void 0) return a;
                throw new Error(`\`${u}\` must be used within \`${i}\``);
            }
            return [l, d];
        }
        const r = () => {
            const i = n.map((a) => ue(a));
            return function (s) {
                const c = (s == null ? void 0 : s[e]) || i;
                return K(() => ({ [`__scope${e}`]: { ...s, [e]: c } }), [s, c]);
            };
        };
        return (r.scopeName = e), [o, Cc(r, ...t)];
    }
    function Cc(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = () => {
            const o = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
            return function (i) {
                const a = o.reduce((s, { useScope: c, scopeName: l }) => {
                    const u = c(i)[`__scope${l}`];
                    return { ...s, ...u };
                }, {});
                return K(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
            };
        };
        return (n.scopeName = t.scopeName), n;
    }
    var Sc = ue(void 0);
    function kc(e) {
        const t = Ne(Sc);
        return e || t || "ltr";
    }
    var Ec = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
        re = Ec.reduce((e, t) => {
            const n = D((o, r) => {
                const { asChild: i, ...a } = o,
                    s = i ? Tt : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), m(s, { ...a, ref: r });
            });
            return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
    function Pc(e, t) {
        e && zt(() => e.dispatchEvent(t));
    }
    function Le(e) {
        const t = O(e);
        return (
            I(() => {
                t.current = e;
            }),
            K(
                () => (...n) => {
                    var o;
                    return (o = t.current) == null ? void 0 : o.call(t, ...n);
                },
                []
            )
        );
    }
    function Ac(e, t = globalThis == null ? void 0 : globalThis.document) {
        const n = Le(e);
        I(() => {
            const o = (r) => {
                r.key === "Escape" && n(r);
            };
            return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
        }, [n, t]);
    }
    var Tc = "DismissableLayer",
        ro = "dismissableLayer.update",
        Ic = "dismissableLayer.pointerDownOutside",
        Oc = "dismissableLayer.focusOutside",
        pi,
        hi = ue({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
        mi = D((e, t) => {
            const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: o, onPointerDownOutside: r, onFocusOutside: i, onInteractOutside: a, onDismiss: s, ...c } = e,
                l = Ne(hi),
                [d, u] = k(null),
                p = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
                [, h] = k({}),
                v = ce(t, (S) => u(S)),
                f = Array.from(l.layers),
                [_] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
                y = f.indexOf(_),
                g = d ? f.indexOf(d) : -1,
                b = l.layersWithOutsidePointerEventsDisabled.size > 0,
                w = g >= y,
                x = Mc((S) => {
                    const A = S.target,
                        M = [...l.branches].some((F) => F.contains(A));
                    !w || M || (r == null || r(S), a == null || a(S), S.defaultPrevented || s == null || s());
                }, p),
                E = Dc((S) => {
                    const A = S.target;
                    [...l.branches].some((F) => F.contains(A)) || (i == null || i(S), a == null || a(S), S.defaultPrevented || s == null || s());
                }, p);
            return (
                Ac((S) => {
                    g === l.layers.size - 1 && (o == null || o(S), !S.defaultPrevented && s && (S.preventDefault(), s()));
                }, p),
                I(() => {
                    if (d)
                        return (
                            n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && ((pi = p.body.style.pointerEvents), (p.body.style.pointerEvents = "none")), l.layersWithOutsidePointerEventsDisabled.add(d)),
                            l.layers.add(d),
                            _i(),
                            () => {
                                n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = pi);
                            }
                        );
                }, [d, p, n, l]),
                I(
                    () => () => {
                        d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), _i());
                    },
                    [d, l]
                ),
                I(() => {
                    const S = () => h({});
                    return document.addEventListener(ro, S), () => document.removeEventListener(ro, S);
                }, []),
                m(re.div, {
                    ...c,
                    ref: v,
                    style: { pointerEvents: b ? (w ? "auto" : "none") : void 0, ...e.style },
                    onFocusCapture: oe(e.onFocusCapture, E.onFocusCapture),
                    onBlurCapture: oe(e.onBlurCapture, E.onBlurCapture),
                    onPointerDownCapture: oe(e.onPointerDownCapture, x.onPointerDownCapture),
                })
            );
        });
    mi.displayName = Tc;
    var Nc = "DismissableLayerBranch",
        Rc = D((e, t) => {
            const n = Ne(hi),
                o = O(null),
                r = ce(t, o);
            return (
                I(() => {
                    const i = o.current;
                    if (i)
                        return (
                            n.branches.add(i),
                            () => {
                                n.branches.delete(i);
                            }
                        );
                }, [n.branches]),
                m(re.div, { ...e, ref: r })
            );
        });
    Rc.displayName = Nc;
    function Mc(e, t = globalThis == null ? void 0 : globalThis.document) {
        const n = Le(e),
            o = O(!1),
            r = O(() => {});
        return (
            I(() => {
                const i = (s) => {
                        if (s.target && !o.current) {
                            let c = function () {
                                vi(Ic, n, l, { discrete: !0 });
                            };
                            const l = { originalEvent: s };
                            s.pointerType === "touch" ? (t.removeEventListener("click", r.current), (r.current = c), t.addEventListener("click", r.current, { once: !0 })) : c();
                        } else t.removeEventListener("click", r.current);
                        o.current = !1;
                    },
                    a = window.setTimeout(() => {
                        t.addEventListener("pointerdown", i);
                    }, 0);
                return () => {
                    window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current);
                };
            }, [t, n]),
            { onPointerDownCapture: () => (o.current = !0) }
        );
    }
    function Dc(e, t = globalThis == null ? void 0 : globalThis.document) {
        const n = Le(e),
            o = O(!1);
        return (
            I(() => {
                const r = (i) => {
                    i.target && !o.current && vi(Oc, n, { originalEvent: i }, { discrete: !1 });
                };
                return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
            }, [t, n]),
            { onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
        );
    }
    function _i() {
        const e = new CustomEvent(ro);
        document.dispatchEvent(e);
    }
    function vi(e, t, n, { discrete: o }) {
        const r = n.originalEvent.target,
            i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && r.addEventListener(e, t, { once: !0 }), o ? Pc(r, i) : r.dispatchEvent(i);
    }
    var io = 0;
    function Lc() {
        I(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return (
                document.body.insertAdjacentElement("afterbegin", e[0] ?? gi()),
                document.body.insertAdjacentElement("beforeend", e[1] ?? gi()),
                io++,
                () => {
                    io === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), io--;
                }
            );
        }, []);
    }
    function gi() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), (e.tabIndex = 0), (e.style.outline = "none"), (e.style.opacity = "0"), (e.style.position = "fixed"), (e.style.pointerEvents = "none"), e;
    }
    var ao = "focusScope.autoFocusOnMount",
        so = "focusScope.autoFocusOnUnmount",
        yi = { bubbles: !1, cancelable: !0 },
        $c = "FocusScope",
        bi = D((e, t) => {
            const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: i, ...a } = e,
                [s, c] = k(null),
                l = Le(r),
                d = Le(i),
                u = O(null),
                p = ce(t, (f) => c(f)),
                h = O({
                    paused: !1,
                    pause() {
                        this.paused = !0;
                    },
                    resume() {
                        this.paused = !1;
                    },
                }).current;
            I(() => {
                if (o) {
                    let f = function (b) {
                            if (h.paused || !s) return;
                            const w = b.target;
                            s.contains(w) ? (u.current = w) : He(u.current, { select: !0 });
                        },
                        _ = function (b) {
                            if (h.paused || !s) return;
                            const w = b.relatedTarget;
                            w !== null && (s.contains(w) || He(u.current, { select: !0 }));
                        },
                        y = function (b) {
                            if (document.activeElement === document.body) for (const x of b) x.removedNodes.length > 0 && He(s);
                        };
                    document.addEventListener("focusin", f), document.addEventListener("focusout", _);
                    const g = new MutationObserver(y);
                    return (
                        s && g.observe(s, { childList: !0, subtree: !0 }),
                        () => {
                            document.removeEventListener("focusin", f), document.removeEventListener("focusout", _), g.disconnect();
                        }
                    );
                }
            }, [o, s, h.paused]),
                I(() => {
                    if (s) {
                        Ci.add(h);
                        const f = document.activeElement;
                        if (!s.contains(f)) {
                            const y = new CustomEvent(ao, yi);
                            s.addEventListener(ao, l), s.dispatchEvent(y), y.defaultPrevented || (Fc(Hc(wi(s)), { select: !0 }), document.activeElement === f && He(s));
                        }
                        return () => {
                            s.removeEventListener(ao, l),
                                setTimeout(() => {
                                    const y = new CustomEvent(so, yi);
                                    s.addEventListener(so, d), s.dispatchEvent(y), y.defaultPrevented || He(f ?? document.body, { select: !0 }), s.removeEventListener(so, d), Ci.remove(h);
                                }, 0);
                        };
                    }
                }, [s, l, d, h]);
            const v = j(
                (f) => {
                    if ((!n && !o) || h.paused) return;
                    const _ = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey,
                        y = document.activeElement;
                    if (_ && y) {
                        const g = f.currentTarget,
                            [b, w] = Bc(g);
                        b && w ? (!f.shiftKey && y === w ? (f.preventDefault(), n && He(b, { select: !0 })) : f.shiftKey && y === b && (f.preventDefault(), n && He(w, { select: !0 }))) : y === g && f.preventDefault();
                    }
                },
                [n, o, h.paused]
            );
            return m(re.div, { tabIndex: -1, ...a, ref: p, onKeyDown: v });
        });
    bi.displayName = $c;
    function Fc(e, { select: t = !1 } = {}) {
        const n = document.activeElement;
        for (const o of e) if ((He(o, { select: t }), document.activeElement !== n)) return;
    }
    function Bc(e) {
        const t = wi(e),
            n = xi(t, e),
            o = xi(t.reverse(), e);
        return [n, o];
    }
    function wi(e) {
        const t = [],
            n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: (o) => {
                    const r = o.tagName === "INPUT" && o.type === "hidden";
                    return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                },
            });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
    }
    function xi(e, t) {
        for (const n of e) if (!Uc(n, { upTo: t })) return n;
    }
    function Uc(e, { upTo: t }) {
        if (getComputedStyle(e).visibility === "hidden") return !0;
        for (; e; ) {
            if (t !== void 0 && e === t) return !1;
            if (getComputedStyle(e).display === "none") return !0;
            e = e.parentElement;
        }
        return !1;
    }
    function Wc(e) {
        return e instanceof HTMLInputElement && "select" in e;
    }
    function He(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
            const n = document.activeElement;
            e.focus({ preventScroll: !0 }), e !== n && Wc(e) && t && e.select();
        }
    }
    var Ci = Vc();
    function Vc() {
        let e = [];
        return {
            add(t) {
                const n = e[0];
                t !== n && (n == null || n.pause()), (e = Si(e, t)), e.unshift(t);
            },
            remove(t) {
                var n;
                (e = Si(e, t)), (n = e[0]) == null || n.resume();
            },
        };
    }
    function Si(e, t) {
        const n = [...e],
            o = n.indexOf(t);
        return o !== -1 && n.splice(o, 1), n;
    }
    function Hc(e) {
        return e.filter((t) => t.tagName !== "A");
    }
    var _e = globalThis != null && globalThis.document ? Oe : () => {},
        zc = bs.useId || (() => {}),
        jc = 0;
    function co(e) {
        const [t, n] = k(zc());
        return (
            _e(() => {
                e || n((o) => o ?? String(jc++));
            }, [e]),
            e || (t ? `radix-${t}` : "")
        );
    }
    const qc = ["top", "right", "bottom", "left"],
        ze = Math.min,
        ve = Math.max,
        Xt = Math.round,
        Zt = Math.floor,
        je = (e) => ({ x: e, y: e }),
        Kc = { left: "right", right: "left", bottom: "top", top: "bottom" },
        Yc = { start: "end", end: "start" };
    function lo(e, t, n) {
        return ve(e, ze(t, n));
    }
    function $e(e, t) {
        return typeof e == "function" ? e(t) : e;
    }
    function Fe(e) {
        return e.split("-")[0];
    }
    function pt(e) {
        return e.split("-")[1];
    }
    function uo(e) {
        return e === "x" ? "y" : "x";
    }
    function fo(e) {
        return e === "y" ? "height" : "width";
    }
    function qe(e) {
        return ["top", "bottom"].includes(Fe(e)) ? "y" : "x";
    }
    function po(e) {
        return uo(qe(e));
    }
    function Gc(e, t, n) {
        n === void 0 && (n = !1);
        const o = pt(e),
            r = po(e),
            i = fo(r);
        let a = r === "x" ? (o === (n ? "end" : "start") ? "right" : "left") : o === "start" ? "bottom" : "top";
        return t.reference[i] > t.floating[i] && (a = Jt(a)), [a, Jt(a)];
    }
    function Xc(e) {
        const t = Jt(e);
        return [ho(e), t, ho(t)];
    }
    function ho(e) {
        return e.replace(/start|end/g, (t) => Yc[t]);
    }
    function Zc(e, t, n) {
        const o = ["left", "right"],
            r = ["right", "left"],
            i = ["top", "bottom"],
            a = ["bottom", "top"];
        switch (e) {
            case "top":
            case "bottom":
                return n ? (t ? r : o) : t ? o : r;
            case "left":
            case "right":
                return t ? i : a;
            default:
                return [];
        }
    }
    function Jc(e, t, n, o) {
        const r = pt(e);
        let i = Zc(Fe(e), n === "start", o);
        return r && ((i = i.map((a) => a + "-" + r)), t && (i = i.concat(i.map(ho)))), i;
    }
    function Jt(e) {
        return e.replace(/left|right|bottom|top/g, (t) => Kc[t]);
    }
    function Qc(e) {
        return { top: 0, right: 0, bottom: 0, left: 0, ...e };
    }
    function ki(e) {
        return typeof e != "number" ? Qc(e) : { top: e, right: e, bottom: e, left: e };
    }
    function Qt(e) {
        const { x: t, y: n, width: o, height: r } = e;
        return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n };
    }
    function Ei(e, t, n) {
        let { reference: o, floating: r } = e;
        const i = qe(t),
            a = po(t),
            s = fo(a),
            c = Fe(t),
            l = i === "y",
            d = o.x + o.width / 2 - r.width / 2,
            u = o.y + o.height / 2 - r.height / 2,
            p = o[s] / 2 - r[s] / 2;
        let h;
        switch (c) {
            case "top":
                h = { x: d, y: o.y - r.height };
                break;
            case "bottom":
                h = { x: d, y: o.y + o.height };
                break;
            case "right":
                h = { x: o.x + o.width, y: u };
                break;
            case "left":
                h = { x: o.x - r.width, y: u };
                break;
            default:
                h = { x: o.x, y: o.y };
        }
        switch (pt(t)) {
            case "start":
                h[a] -= p * (n && l ? -1 : 1);
                break;
            case "end":
                h[a] += p * (n && l ? -1 : 1);
                break;
        }
        return h;
    }
    const el = async (e, t, n) => {
        const { placement: o = "bottom", strategy: r = "absolute", middleware: i = [], platform: a } = n,
            s = i.filter(Boolean),
            c = await (a.isRTL == null ? void 0 : a.isRTL(t));
        let l = await a.getElementRects({ reference: e, floating: t, strategy: r }),
            { x: d, y: u } = Ei(l, o, c),
            p = o,
            h = {},
            v = 0;
        for (let f = 0; f < s.length; f++) {
            const { name: _, fn: y } = s[f],
                { x: g, y: b, data: w, reset: x } = await y({ x: d, y: u, initialPlacement: o, placement: p, strategy: r, middlewareData: h, rects: l, platform: a, elements: { reference: e, floating: t } });
            (d = g ?? d),
                (u = b ?? u),
                (h = { ...h, [_]: { ...h[_], ...w } }),
                x &&
                    v <= 50 &&
                    (v++,
                    typeof x == "object" && (x.placement && (p = x.placement), x.rects && (l = x.rects === !0 ? await a.getElementRects({ reference: e, floating: t, strategy: r }) : x.rects), ({ x: d, y: u } = Ei(l, p, c))),
                    (f = -1));
        }
        return { x: d, y: u, placement: p, strategy: r, middlewareData: h };
    };
    async function It(e, t) {
        var n;
        t === void 0 && (t = {});
        const { x: o, y: r, platform: i, rects: a, elements: s, strategy: c } = e,
            { boundary: l = "clippingAncestors", rootBoundary: d = "viewport", elementContext: u = "floating", altBoundary: p = !1, padding: h = 0 } = $e(t, e),
            v = ki(h),
            _ = s[p ? (u === "floating" ? "reference" : "floating") : u],
            y = Qt(
                await i.getClippingRect({
                    element: (n = await (i.isElement == null ? void 0 : i.isElement(_))) == null || n ? _ : _.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating))),
                    boundary: l,
                    rootBoundary: d,
                    strategy: c,
                })
            ),
            g = u === "floating" ? { x: o, y: r, width: a.floating.width, height: a.floating.height } : a.reference,
            b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)),
            w = (await (i.isElement == null ? void 0 : i.isElement(b))) ? (await (i.getScale == null ? void 0 : i.getScale(b))) || { x: 1, y: 1 } : { x: 1, y: 1 },
            x = Qt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: s, rect: g, offsetParent: b, strategy: c }) : g);
        return { top: (y.top - x.top + v.top) / w.y, bottom: (x.bottom - y.bottom + v.bottom) / w.y, left: (y.left - x.left + v.left) / w.x, right: (x.right - y.right + v.right) / w.x };
    }
    const tl = (e) => ({
            name: "arrow",
            options: e,
            async fn(t) {
                const { x: n, y: o, placement: r, rects: i, platform: a, elements: s, middlewareData: c } = t,
                    { element: l, padding: d = 0 } = $e(e, t) || {};
                if (l == null) return {};
                const u = ki(d),
                    p = { x: n, y: o },
                    h = po(r),
                    v = fo(h),
                    f = await a.getDimensions(l),
                    _ = h === "y",
                    y = _ ? "top" : "left",
                    g = _ ? "bottom" : "right",
                    b = _ ? "clientHeight" : "clientWidth",
                    w = i.reference[v] + i.reference[h] - p[h] - i.floating[v],
                    x = p[h] - i.reference[h],
                    E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
                let S = E ? E[b] : 0;
                (!S || !(await (a.isElement == null ? void 0 : a.isElement(E)))) && (S = s.floating[b] || i.floating[v]);
                const A = w / 2 - x / 2,
                    M = S / 2 - f[v] / 2 - 1,
                    F = ze(u[y], M),
                    L = ze(u[g], M),
                    W = F,
                    z = S - f[v] - L,
                    V = S / 2 - f[v] / 2 + A,
                    J = lo(W, V, z),
                    B = !c.arrow && pt(r) != null && V !== J && i.reference[v] / 2 - (V < W ? F : L) - f[v] / 2 < 0,
                    $ = B ? (V < W ? V - W : V - z) : 0;
                return { [h]: p[h] + $, data: { [h]: J, centerOffset: V - J - $, ...(B && { alignmentOffset: $ }) }, reset: B };
            },
        }),
        nl = function (e) {
            return (
                e === void 0 && (e = {}),
                {
                    name: "flip",
                    options: e,
                    async fn(t) {
                        var n, o;
                        const { placement: r, middlewareData: i, rects: a, initialPlacement: s, platform: c, elements: l } = t,
                            { mainAxis: d = !0, crossAxis: u = !0, fallbackPlacements: p, fallbackStrategy: h = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: f = !0, ..._ } = $e(e, t);
                        if ((n = i.arrow) != null && n.alignmentOffset) return {};
                        const y = Fe(r),
                            g = qe(s),
                            b = Fe(s) === s,
                            w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
                            x = p || (b || !f ? [Jt(s)] : Xc(s)),
                            E = v !== "none";
                        !p && E && x.push(...Jc(s, f, v, w));
                        const S = [s, ...x],
                            A = await It(t, _),
                            M = [];
                        let F = ((o = i.flip) == null ? void 0 : o.overflows) || [];
                        if ((d && M.push(A[y]), u)) {
                            const V = Gc(r, a, w);
                            M.push(A[V[0]], A[V[1]]);
                        }
                        if (((F = [...F, { placement: r, overflows: M }]), !M.every((V) => V <= 0))) {
                            var L, W;
                            const V = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1,
                                J = S[V];
                            if (J) return { data: { index: V, overflows: F }, reset: { placement: J } };
                            let B = (W = F.filter(($) => $.overflows[0] <= 0).sort(($, R) => $.overflows[1] - R.overflows[1])[0]) == null ? void 0 : W.placement;
                            if (!B)
                                switch (h) {
                                    case "bestFit": {
                                        var z;
                                        const $ =
                                            (z = F.filter((R) => {
                                                if (E) {
                                                    const q = qe(R.placement);
                                                    return q === g || q === "y";
                                                }
                                                return !0;
                                            })
                                                .map((R) => [R.placement, R.overflows.filter((q) => q > 0).reduce((q, ae) => q + ae, 0)])
                                                .sort((R, q) => R[1] - q[1])[0]) == null
                                                ? void 0
                                                : z[0];
                                        $ && (B = $);
                                        break;
                                    }
                                    case "initialPlacement":
                                        B = s;
                                        break;
                                }
                            if (r !== B) return { reset: { placement: B } };
                        }
                        return {};
                    },
                }
            );
        };
    function Pi(e, t) {
        return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
    }
    function Ai(e) {
        return qc.some((t) => e[t] >= 0);
    }
    const ol = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    const { rects: n } = t,
                        { strategy: o = "referenceHidden", ...r } = $e(e, t);
                    switch (o) {
                        case "referenceHidden": {
                            const i = await It(t, { ...r, elementContext: "reference" }),
                                a = Pi(i, n.reference);
                            return { data: { referenceHiddenOffsets: a, referenceHidden: Ai(a) } };
                        }
                        case "escaped": {
                            const i = await It(t, { ...r, altBoundary: !0 }),
                                a = Pi(i, n.floating);
                            return { data: { escapedOffsets: a, escaped: Ai(a) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    };
    async function rl(e, t) {
        const { placement: n, platform: o, elements: r } = e,
            i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
            a = Fe(n),
            s = pt(n),
            c = qe(n) === "y",
            l = ["left", "top"].includes(a) ? -1 : 1,
            d = i && c ? -1 : 1,
            u = $e(t, e);
        let { mainAxis: p, crossAxis: h, alignmentAxis: v } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
        return s && typeof v == "number" && (h = s === "end" ? v * -1 : v), c ? { x: h * d, y: p * l } : { x: p * l, y: h * d };
    }
    const il = function (e) {
            return (
                e === void 0 && (e = 0),
                {
                    name: "offset",
                    options: e,
                    async fn(t) {
                        var n, o;
                        const { x: r, y: i, placement: a, middlewareData: s } = t,
                            c = await rl(t, e);
                        return a === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : { x: r + c.x, y: i + c.y, data: { ...c, placement: a } };
                    },
                }
            );
        },
        al = function (e) {
            return (
                e === void 0 && (e = {}),
                {
                    name: "shift",
                    options: e,
                    async fn(t) {
                        const { x: n, y: o, placement: r } = t,
                            {
                                mainAxis: i = !0,
                                crossAxis: a = !1,
                                limiter: s = {
                                    fn: (_) => {
                                        let { x: y, y: g } = _;
                                        return { x: y, y: g };
                                    },
                                },
                                ...c
                            } = $e(e, t),
                            l = { x: n, y: o },
                            d = await It(t, c),
                            u = qe(Fe(r)),
                            p = uo(u);
                        let h = l[p],
                            v = l[u];
                        if (i) {
                            const _ = p === "y" ? "top" : "left",
                                y = p === "y" ? "bottom" : "right",
                                g = h + d[_],
                                b = h - d[y];
                            h = lo(g, h, b);
                        }
                        if (a) {
                            const _ = u === "y" ? "top" : "left",
                                y = u === "y" ? "bottom" : "right",
                                g = v + d[_],
                                b = v - d[y];
                            v = lo(g, v, b);
                        }
                        const f = s.fn({ ...t, [p]: h, [u]: v });
                        return { ...f, data: { x: f.x - n, y: f.y - o, enabled: { [p]: i, [u]: a } } };
                    },
                }
            );
        },
        sl = function (e) {
            return (
                e === void 0 && (e = {}),
                {
                    options: e,
                    fn(t) {
                        const { x: n, y: o, placement: r, rects: i, middlewareData: a } = t,
                            { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = $e(e, t),
                            d = { x: n, y: o },
                            u = qe(r),
                            p = uo(u);
                        let h = d[p],
                            v = d[u];
                        const f = $e(s, t),
                            _ = typeof f == "number" ? { mainAxis: f, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...f };
                        if (c) {
                            const b = p === "y" ? "height" : "width",
                                w = i.reference[p] - i.floating[b] + _.mainAxis,
                                x = i.reference[p] + i.reference[b] - _.mainAxis;
                            h < w ? (h = w) : h > x && (h = x);
                        }
                        if (l) {
                            var y, g;
                            const b = p === "y" ? "width" : "height",
                                w = ["top", "left"].includes(Fe(r)),
                                x = i.reference[u] - i.floating[b] + ((w && ((y = a.offset) == null ? void 0 : y[u])) || 0) + (w ? 0 : _.crossAxis),
                                E = i.reference[u] + i.reference[b] + (w ? 0 : ((g = a.offset) == null ? void 0 : g[u]) || 0) - (w ? _.crossAxis : 0);
                            v < x ? (v = x) : v > E && (v = E);
                        }
                        return { [p]: h, [u]: v };
                    },
                }
            );
        },
        cl = function (e) {
            return (
                e === void 0 && (e = {}),
                {
                    name: "size",
                    options: e,
                    async fn(t) {
                        var n, o;
                        const { placement: r, rects: i, platform: a, elements: s } = t,
                            { apply: c = () => {}, ...l } = $e(e, t),
                            d = await It(t, l),
                            u = Fe(r),
                            p = pt(r),
                            h = qe(r) === "y",
                            { width: v, height: f } = i.floating;
                        let _, y;
                        u === "top" || u === "bottom" ? ((_ = u), (y = p === ((await (a.isRTL == null ? void 0 : a.isRTL(s.floating))) ? "start" : "end") ? "left" : "right")) : ((y = u), (_ = p === "end" ? "top" : "bottom"));
                        const g = f - d.top - d.bottom,
                            b = v - d.left - d.right,
                            w = ze(f - d[_], g),
                            x = ze(v - d[y], b),
                            E = !t.middlewareData.shift;
                        let S = w,
                            A = x;
                        if (((n = t.middlewareData.shift) != null && n.enabled.x && (A = b), (o = t.middlewareData.shift) != null && o.enabled.y && (S = g), E && !p)) {
                            const F = ve(d.left, 0),
                                L = ve(d.right, 0),
                                W = ve(d.top, 0),
                                z = ve(d.bottom, 0);
                            h ? (A = v - 2 * (F !== 0 || L !== 0 ? F + L : ve(d.left, d.right))) : (S = f - 2 * (W !== 0 || z !== 0 ? W + z : ve(d.top, d.bottom)));
                        }
                        await c({ ...t, availableWidth: A, availableHeight: S });
                        const M = await a.getDimensions(s.floating);
                        return v !== M.width || f !== M.height ? { reset: { rects: !0 } } : {};
                    },
                }
            );
        };
    function en() {
        return typeof window < "u";
    }
    function ht(e) {
        return Ti(e) ? (e.nodeName || "").toLowerCase() : "#document";
    }
    function ge(e) {
        var t;
        return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
    }
    function ke(e) {
        var t;
        return (t = (Ti(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
    }
    function Ti(e) {
        return en() ? e instanceof Node || e instanceof ge(e).Node : !1;
    }
    function be(e) {
        return en() ? e instanceof Element || e instanceof ge(e).Element : !1;
    }
    function Ee(e) {
        return en() ? e instanceof HTMLElement || e instanceof ge(e).HTMLElement : !1;
    }
    function Ii(e) {
        return !en() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ge(e).ShadowRoot;
    }
    function Ot(e) {
        const { overflow: t, overflowX: n, overflowY: o, display: r } = we(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
    }
    function ll(e) {
        return ["table", "td", "th"].includes(ht(e));
    }
    function tn(e) {
        return [":popover-open", ":modal"].some((t) => {
            try {
                return e.matches(t);
            } catch {
                return !1;
            }
        });
    }
    function mo(e) {
        const t = _o(),
            n = be(e) ? we(e) : e;
        return (
            n.transform !== "none" ||
            n.perspective !== "none" ||
            (n.containerType ? n.containerType !== "normal" : !1) ||
            (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
            (!t && (n.filter ? n.filter !== "none" : !1)) ||
            ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) ||
            ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o))
        );
    }
    function ul(e) {
        let t = Ke(e);
        for (; Ee(t) && !mt(t); ) {
            if (mo(t)) return t;
            if (tn(t)) return null;
            t = Ke(t);
        }
        return null;
    }
    function _o() {
        return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
    }
    function mt(e) {
        return ["html", "body", "#document"].includes(ht(e));
    }
    function we(e) {
        return ge(e).getComputedStyle(e);
    }
    function nn(e) {
        return be(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
    }
    function Ke(e) {
        if (ht(e) === "html") return e;
        const t = e.assignedSlot || e.parentNode || (Ii(e) && e.host) || ke(e);
        return Ii(t) ? t.host : t;
    }
    function Oi(e) {
        const t = Ke(e);
        return mt(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Ee(t) && Ot(t) ? t : Oi(t);
    }
    function Nt(e, t, n) {
        var o;
        t === void 0 && (t = []), n === void 0 && (n = !0);
        const r = Oi(e),
            i = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
            a = ge(r);
        if (i) {
            const s = vo(a);
            return t.concat(a, a.visualViewport || [], Ot(r) ? r : [], s && n ? Nt(s) : []);
        }
        return t.concat(r, Nt(r, [], n));
    }
    function vo(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
    }
    function Ni(e) {
        const t = we(e);
        let n = parseFloat(t.width) || 0,
            o = parseFloat(t.height) || 0;
        const r = Ee(e),
            i = r ? e.offsetWidth : n,
            a = r ? e.offsetHeight : o,
            s = Xt(n) !== i || Xt(o) !== a;
        return s && ((n = i), (o = a)), { width: n, height: o, $: s };
    }
    function go(e) {
        return be(e) ? e : e.contextElement;
    }
    function _t(e) {
        const t = go(e);
        if (!Ee(t)) return je(1);
        const n = t.getBoundingClientRect(),
            { width: o, height: r, $: i } = Ni(t);
        let a = (i ? Xt(n.width) : n.width) / o,
            s = (i ? Xt(n.height) : n.height) / r;
        return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), { x: a, y: s };
    }
    const dl = je(0);
    function Ri(e) {
        const t = ge(e);
        return !_o() || !t.visualViewport ? dl : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
    }
    function fl(e, t, n) {
        return t === void 0 && (t = !1), !n || (t && n !== ge(e)) ? !1 : t;
    }
    function rt(e, t, n, o) {
        t === void 0 && (t = !1), n === void 0 && (n = !1);
        const r = e.getBoundingClientRect(),
            i = go(e);
        let a = je(1);
        t && (o ? be(o) && (a = _t(o)) : (a = _t(e)));
        const s = fl(i, n, o) ? Ri(i) : je(0);
        let c = (r.left + s.x) / a.x,
            l = (r.top + s.y) / a.y,
            d = r.width / a.x,
            u = r.height / a.y;
        if (i) {
            const p = ge(i),
                h = o && be(o) ? ge(o) : o;
            let v = p,
                f = vo(v);
            for (; f && o && h !== v; ) {
                const _ = _t(f),
                    y = f.getBoundingClientRect(),
                    g = we(f),
                    b = y.left + (f.clientLeft + parseFloat(g.paddingLeft)) * _.x,
                    w = y.top + (f.clientTop + parseFloat(g.paddingTop)) * _.y;
                (c *= _.x), (l *= _.y), (d *= _.x), (u *= _.y), (c += b), (l += w), (v = ge(f)), (f = vo(v));
            }
        }
        return Qt({ width: d, height: u, x: c, y: l });
    }
    function pl(e) {
        let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
        const i = r === "fixed",
            a = ke(o),
            s = t ? tn(t.floating) : !1;
        if (o === a || (s && i)) return n;
        let c = { scrollLeft: 0, scrollTop: 0 },
            l = je(1);
        const d = je(0),
            u = Ee(o);
        if ((u || (!u && !i)) && ((ht(o) !== "body" || Ot(a)) && (c = nn(o)), Ee(o))) {
            const p = rt(o);
            (l = _t(o)), (d.x = p.x + o.clientLeft), (d.y = p.y + o.clientTop);
        }
        return { width: n.width * l.x, height: n.height * l.y, x: n.x * l.x - c.scrollLeft * l.x + d.x, y: n.y * l.y - c.scrollTop * l.y + d.y };
    }
    function hl(e) {
        return Array.from(e.getClientRects());
    }
    function yo(e, t) {
        const n = nn(e).scrollLeft;
        return t ? t.left + n : rt(ke(e)).left + n;
    }
    function ml(e) {
        const t = ke(e),
            n = nn(e),
            o = e.ownerDocument.body,
            r = ve(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
            i = ve(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
        let a = -n.scrollLeft + yo(e);
        const s = -n.scrollTop;
        return we(o).direction === "rtl" && (a += ve(t.clientWidth, o.clientWidth) - r), { width: r, height: i, x: a, y: s };
    }
    function _l(e, t) {
        const n = ge(e),
            o = ke(e),
            r = n.visualViewport;
        let i = o.clientWidth,
            a = o.clientHeight,
            s = 0,
            c = 0;
        if (r) {
            (i = r.width), (a = r.height);
            const l = _o();
            (!l || (l && t === "fixed")) && ((s = r.offsetLeft), (c = r.offsetTop));
        }
        return { width: i, height: a, x: s, y: c };
    }
    function vl(e, t) {
        const n = rt(e, !0, t === "fixed"),
            o = n.top + e.clientTop,
            r = n.left + e.clientLeft,
            i = Ee(e) ? _t(e) : je(1),
            a = e.clientWidth * i.x,
            s = e.clientHeight * i.y,
            c = r * i.x,
            l = o * i.y;
        return { width: a, height: s, x: c, y: l };
    }
    function Mi(e, t, n) {
        let o;
        if (t === "viewport") o = _l(e, n);
        else if (t === "document") o = ml(ke(e));
        else if (be(t)) o = vl(t, n);
        else {
            const r = Ri(e);
            o = { ...t, x: t.x - r.x, y: t.y - r.y };
        }
        return Qt(o);
    }
    function Di(e, t) {
        const n = Ke(e);
        return n === t || !be(n) || mt(n) ? !1 : we(n).position === "fixed" || Di(n, t);
    }
    function gl(e, t) {
        const n = t.get(e);
        if (n) return n;
        let o = Nt(e, [], !1).filter((s) => be(s) && ht(s) !== "body"),
            r = null;
        const i = we(e).position === "fixed";
        let a = i ? Ke(e) : e;
        for (; be(a) && !mt(a); ) {
            const s = we(a),
                c = mo(a);
            !c && s.position === "fixed" && (r = null),
                (i ? !c && !r : (!c && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position)) || (Ot(a) && !c && Di(e, a))) ? (o = o.filter((d) => d !== a)) : (r = s),
                (a = Ke(a));
        }
        return t.set(e, o), o;
    }
    function yl(e) {
        let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
        const a = [...(n === "clippingAncestors" ? (tn(t) ? [] : gl(t, this._c)) : [].concat(n)), o],
            s = a[0],
            c = a.reduce((l, d) => {
                const u = Mi(t, d, r);
                return (l.top = ve(u.top, l.top)), (l.right = ze(u.right, l.right)), (l.bottom = ze(u.bottom, l.bottom)), (l.left = ve(u.left, l.left)), l;
            }, Mi(t, s, r));
        return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
    }
    function bl(e) {
        const { width: t, height: n } = Ni(e);
        return { width: t, height: n };
    }
    function wl(e, t, n) {
        const o = Ee(t),
            r = ke(t),
            i = n === "fixed",
            a = rt(e, !0, i, t);
        let s = { scrollLeft: 0, scrollTop: 0 };
        const c = je(0);
        if (o || (!o && !i))
            if (((ht(t) !== "body" || Ot(r)) && (s = nn(t)), o)) {
                const h = rt(t, !0, i, t);
                (c.x = h.x + t.clientLeft), (c.y = h.y + t.clientTop);
            } else r && (c.x = yo(r));
        let l = 0,
            d = 0;
        if (r && !o && !i) {
            const h = r.getBoundingClientRect();
            (d = h.top + s.scrollTop), (l = h.left + s.scrollLeft - yo(r, h));
        }
        const u = a.left + s.scrollLeft - c.x - l,
            p = a.top + s.scrollTop - c.y - d;
        return { x: u, y: p, width: a.width, height: a.height };
    }
    function bo(e) {
        return we(e).position === "static";
    }
    function Li(e, t) {
        if (!Ee(e) || we(e).position === "fixed") return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return ke(e) === n && (n = n.ownerDocument.body), n;
    }
    function $i(e, t) {
        const n = ge(e);
        if (tn(e)) return n;
        if (!Ee(e)) {
            let r = Ke(e);
            for (; r && !mt(r); ) {
                if (be(r) && !bo(r)) return r;
                r = Ke(r);
            }
            return n;
        }
        let o = Li(e, t);
        for (; o && ll(o) && bo(o); ) o = Li(o, t);
        return o && mt(o) && bo(o) && !mo(o) ? n : o || ul(e) || n;
    }
    const xl = async function (e) {
        const t = this.getOffsetParent || $i,
            n = this.getDimensions,
            o = await n(e.floating);
        return { reference: wl(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
    };
    function Cl(e) {
        return we(e).direction === "rtl";
    }
    const Sl = {
        convertOffsetParentRelativeRectToViewportRelativeRect: pl,
        getDocumentElement: ke,
        getClippingRect: yl,
        getOffsetParent: $i,
        getElementRects: xl,
        getClientRects: hl,
        getDimensions: bl,
        getScale: _t,
        isElement: be,
        isRTL: Cl,
    };
    function kl(e, t) {
        let n = null,
            o;
        const r = ke(e);
        function i() {
            var s;
            clearTimeout(o), (s = n) == null || s.disconnect(), (n = null);
        }
        function a(s, c) {
            s === void 0 && (s = !1), c === void 0 && (c = 1), i();
            const { left: l, top: d, width: u, height: p } = e.getBoundingClientRect();
            if ((s || t(), !u || !p)) return;
            const h = Zt(d),
                v = Zt(r.clientWidth - (l + u)),
                f = Zt(r.clientHeight - (d + p)),
                _ = Zt(l),
                g = { rootMargin: -h + "px " + -v + "px " + -f + "px " + -_ + "px", threshold: ve(0, ze(1, c)) || 1 };
            let b = !0;
            function w(x) {
                const E = x[0].intersectionRatio;
                if (E !== c) {
                    if (!b) return a();
                    E
                        ? a(!1, E)
                        : (o = setTimeout(() => {
                              a(!1, 1e-7);
                          }, 1e3));
                }
                b = !1;
            }
            try {
                n = new IntersectionObserver(w, { ...g, root: r.ownerDocument });
            } catch {
                n = new IntersectionObserver(w, g);
            }
            n.observe(e);
        }
        return a(!0), i;
    }
    function El(e, t, n, o) {
        o === void 0 && (o = {});
        const { ancestorScroll: r = !0, ancestorResize: i = !0, elementResize: a = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = o,
            l = go(e),
            d = r || i ? [...(l ? Nt(l) : []), ...Nt(t)] : [];
        d.forEach((y) => {
            r && y.addEventListener("scroll", n, { passive: !0 }), i && y.addEventListener("resize", n);
        });
        const u = l && s ? kl(l, n) : null;
        let p = -1,
            h = null;
        a &&
            ((h = new ResizeObserver((y) => {
                let [g] = y;
                g &&
                    g.target === l &&
                    h &&
                    (h.unobserve(t),
                    cancelAnimationFrame(p),
                    (p = requestAnimationFrame(() => {
                        var b;
                        (b = h) == null || b.observe(t);
                    }))),
                    n();
            })),
            l && !c && h.observe(l),
            h.observe(t));
        let v,
            f = c ? rt(e) : null;
        c && _();
        function _() {
            const y = rt(e);
            f && (y.x !== f.x || y.y !== f.y || y.width !== f.width || y.height !== f.height) && n(), (f = y), (v = requestAnimationFrame(_));
        }
        return (
            n(),
            () => {
                var y;
                d.forEach((g) => {
                    r && g.removeEventListener("scroll", n), i && g.removeEventListener("resize", n);
                }),
                    u == null || u(),
                    (y = h) == null || y.disconnect(),
                    (h = null),
                    c && cancelAnimationFrame(v);
            }
        );
    }
    const Pl = il,
        Al = al,
        Tl = nl,
        Il = cl,
        Ol = ol,
        Fi = tl,
        Nl = sl,
        Rl = (e, t, n) => {
            const o = new Map(),
                r = { platform: Sl, ...n },
                i = { ...r.platform, _c: o };
            return el(e, t, { ...r, platform: i });
        };
    var on = typeof document < "u" ? Oe : I;
    function rn(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if (typeof e == "function" && e.toString() === t.toString()) return !0;
        let n, o, r;
        if (e && t && typeof e == "object") {
            if (Array.isArray(e)) {
                if (((n = e.length), n !== t.length)) return !1;
                for (o = n; o-- !== 0; ) if (!rn(e[o], t[o])) return !1;
                return !0;
            }
            if (((r = Object.keys(e)), (n = r.length), n !== Object.keys(t).length)) return !1;
            for (o = n; o-- !== 0; ) if (!{}.hasOwnProperty.call(t, r[o])) return !1;
            for (o = n; o-- !== 0; ) {
                const i = r[o];
                if (!(i === "_owner" && e.$$typeof) && !rn(e[i], t[i])) return !1;
            }
            return !0;
        }
        return e !== e && t !== t;
    }
    function Bi(e) {
        return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
    }
    function Ui(e, t) {
        const n = Bi(e);
        return Math.round(t * n) / n;
    }
    function wo(e) {
        const t = O(e);
        return (
            on(() => {
                t.current = e;
            }),
            t
        );
    }
    function Ml(e) {
        e === void 0 && (e = {});
        const { placement: t = "bottom", strategy: n = "absolute", middleware: o = [], platform: r, elements: { reference: i, floating: a } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e,
            [d, u] = k({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
            [p, h] = k(o);
        rn(p, o) || h(o);
        const [v, f] = k(null),
            [_, y] = k(null),
            g = j((R) => {
                R !== E.current && ((E.current = R), f(R));
            }, []),
            b = j((R) => {
                R !== S.current && ((S.current = R), y(R));
            }, []),
            w = i || v,
            x = a || _,
            E = O(null),
            S = O(null),
            A = O(d),
            M = c != null,
            F = wo(c),
            L = wo(r),
            W = wo(l),
            z = j(() => {
                if (!E.current || !S.current) return;
                const R = { placement: t, strategy: n, middleware: p };
                L.current && (R.platform = L.current),
                    Rl(E.current, S.current, R).then((q) => {
                        const ae = { ...q, isPositioned: W.current !== !1 };
                        V.current &&
                            !rn(A.current, ae) &&
                            ((A.current = ae),
                            zt(() => {
                                u(ae);
                            }));
                    });
            }, [p, t, n, L, W]);
        on(() => {
            l === !1 && A.current.isPositioned && ((A.current.isPositioned = !1), u((R) => ({ ...R, isPositioned: !1 })));
        }, [l]);
        const V = O(!1);
        on(
            () => (
                (V.current = !0),
                () => {
                    V.current = !1;
                }
            ),
            []
        ),
            on(() => {
                if ((w && (E.current = w), x && (S.current = x), w && x)) {
                    if (F.current) return F.current(w, x, z);
                    z();
                }
            }, [w, x, z, F, M]);
        const J = K(() => ({ reference: E, floating: S, setReference: g, setFloating: b }), [g, b]),
            B = K(() => ({ reference: w, floating: x }), [w, x]),
            $ = K(() => {
                const R = { position: n, left: 0, top: 0 };
                if (!B.floating) return R;
                const q = Ui(B.floating, d.x),
                    ae = Ui(B.floating, d.y);
                return s ? { ...R, transform: "translate(" + q + "px, " + ae + "px)", ...(Bi(B.floating) >= 1.5 && { willChange: "transform" }) } : { position: n, left: q, top: ae };
            }, [n, s, B.floating, d.x, d.y]);
        return K(() => ({ ...d, update: z, refs: J, elements: B, floatingStyles: $ }), [d, z, J, B, $]);
    }
    const Dl = (e) => {
            function t(n) {
                return {}.hasOwnProperty.call(n, "current");
            }
            return {
                name: "arrow",
                options: e,
                fn(n) {
                    const { element: o, padding: r } = typeof e == "function" ? e(n) : e;
                    return o && t(o) ? (o.current != null ? Fi({ element: o.current, padding: r }).fn(n) : {}) : o ? Fi({ element: o, padding: r }).fn(n) : {};
                },
            };
        },
        Ll = (e, t) => ({ ...Pl(e), options: [e, t] }),
        $l = (e, t) => ({ ...Al(e), options: [e, t] }),
        Fl = (e, t) => ({ ...Nl(e), options: [e, t] }),
        Bl = (e, t) => ({ ...Tl(e), options: [e, t] }),
        Ul = (e, t) => ({ ...Il(e), options: [e, t] }),
        Wl = (e, t) => ({ ...Ol(e), options: [e, t] }),
        Vl = (e, t) => ({ ...Dl(e), options: [e, t] });
    var Hl = "Arrow",
        Wi = D((e, t) => {
            const { children: n, width: o = 10, height: r = 5, ...i } = e;
            return m(re.svg, { ...i, ref: t, width: o, height: r, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : m("polygon", { points: "0,0 30,0 15,10" }) });
        });
    Wi.displayName = Hl;
    var zl = Wi;
    function jl(e) {
        const [t, n] = k(void 0);
        return (
            _e(() => {
                if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    const o = new ResizeObserver((r) => {
                        if (!Array.isArray(r) || !r.length) return;
                        const i = r[0];
                        let a, s;
                        if ("borderBoxSize" in i) {
                            const c = i.borderBoxSize,
                                l = Array.isArray(c) ? c[0] : c;
                            (a = l.inlineSize), (s = l.blockSize);
                        } else (a = e.offsetWidth), (s = e.offsetHeight);
                        n({ width: a, height: s });
                    });
                    return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
                } else n(void 0);
            }, [e]),
            t
        );
    }
    var xo = "Popper",
        [Vi, Hi] = di(xo),
        [ql, zi] = Vi(xo),
        ji = (e) => {
            const { __scopePopper: t, children: n } = e,
                [o, r] = k(null);
            return m(ql, { scope: t, anchor: o, onAnchorChange: r, children: n });
        };
    ji.displayName = xo;
    var qi = "PopperAnchor",
        Ki = D((e, t) => {
            const { __scopePopper: n, virtualRef: o, ...r } = e,
                i = zi(qi, n),
                a = O(null),
                s = ce(t, a);
            return (
                I(() => {
                    i.onAnchorChange((o == null ? void 0 : o.current) || a.current);
                }),
                o ? null : m(re.div, { ...r, ref: s })
            );
        });
    Ki.displayName = qi;
    var Co = "PopperContent",
        [Kl, Yl] = Vi(Co),
        Yi = D((e, t) => {
            var T, Z, ne, Y, N, U;
            const {
                    __scopePopper: n,
                    side: o = "bottom",
                    sideOffset: r = 0,
                    align: i = "center",
                    alignOffset: a = 0,
                    arrowPadding: s = 0,
                    avoidCollisions: c = !0,
                    collisionBoundary: l = [],
                    collisionPadding: d = 0,
                    sticky: u = "partial",
                    hideWhenDetached: p = !1,
                    updatePositionStrategy: h = "optimized",
                    onPlaced: v,
                    ...f
                } = e,
                _ = zi(Co, n),
                [y, g] = k(null),
                b = ce(t, (ee) => g(ee)),
                [w, x] = k(null),
                E = jl(w),
                S = (E == null ? void 0 : E.width) ?? 0,
                A = (E == null ? void 0 : E.height) ?? 0,
                M = o + (i !== "center" ? "-" + i : ""),
                F = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
                L = Array.isArray(l) ? l : [l],
                W = L.length > 0,
                z = { padding: F, boundary: L.filter(Xl), altBoundary: W },
                { refs: V, floatingStyles: J, placement: B, isPositioned: $, middlewareData: R } = Ml({
                    strategy: "fixed",
                    placement: M,
                    whileElementsMounted: (...ee) => El(...ee, { animationFrame: h === "always" }),
                    elements: { reference: _.anchor },
                    middleware: [
                        Ll({ mainAxis: r + A, alignmentAxis: a }),
                        c && $l({ mainAxis: !0, crossAxis: !1, limiter: u === "partial" ? Fl() : void 0, ...z }),
                        c && Bl({ ...z }),
                        Ul({
                            ...z,
                            apply: ({ elements: ee, rects: te, availableWidth: Je, availableHeight: Dt }) => {
                                const { width: Lt, height: Gd } = te.reference,
                                    gn = ee.floating.style;
                                gn.setProperty("--radix-popper-available-width", `${Je}px`),
                                    gn.setProperty("--radix-popper-available-height", `${Dt}px`),
                                    gn.setProperty("--radix-popper-anchor-width", `${Lt}px`),
                                    gn.setProperty("--radix-popper-anchor-height", `${Gd}px`);
                            },
                        }),
                        w && Vl({ element: w, padding: s }),
                        Zl({ arrowWidth: S, arrowHeight: A }),
                        p && Wl({ strategy: "referenceHidden", ...z }),
                    ],
                }),
                [q, ae] = Zi(B),
                le = Le(v);
            _e(() => {
                $ && (le == null || le());
            }, [$, le]);
            const Ae = (T = R.arrow) == null ? void 0 : T.x,
                de = (Z = R.arrow) == null ? void 0 : Z.y,
                Ce = ((ne = R.arrow) == null ? void 0 : ne.centerOffset) !== 0,
                [Ze, pe] = k();
            return (
                _e(() => {
                    y && pe(window.getComputedStyle(y).zIndex);
                }, [y]),
                m("div", {
                    ref: V.setFloating,
                    "data-radix-popper-content-wrapper": "",
                    style: {
                        ...J,
                        transform: $ ? J.transform : "translate(0, -200%)",
                        minWidth: "max-content",
                        zIndex: Ze,
                        "--radix-popper-transform-origin": [(Y = R.transformOrigin) == null ? void 0 : Y.x, (N = R.transformOrigin) == null ? void 0 : N.y].join(" "),
                        ...(((U = R.hide) == null ? void 0 : U.referenceHidden) && { visibility: "hidden", pointerEvents: "none" }),
                    },
                    dir: e.dir,
                    children: m(Kl, {
                        scope: n,
                        placedSide: q,
                        onArrowChange: x,
                        arrowX: Ae,
                        arrowY: de,
                        shouldHideArrow: Ce,
                        children: m(re.div, { "data-side": q, "data-align": ae, ...f, ref: b, style: { ...f.style, animation: $ ? void 0 : "none" } }),
                    }),
                })
            );
        });
    Yi.displayName = Co;
    var Gi = "PopperArrow",
        Gl = { top: "bottom", right: "left", bottom: "top", left: "right" },
        Xi = D(function (t, n) {
            const { __scopePopper: o, ...r } = t,
                i = Yl(Gi, o),
                a = Gl[i.placedSide];
            return m("span", {
                ref: i.onArrowChange,
                style: {
                    position: "absolute",
                    left: i.arrowX,
                    top: i.arrowY,
                    [a]: 0,
                    transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide],
                    transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide],
                    visibility: i.shouldHideArrow ? "hidden" : void 0,
                },
                children: m(zl, { ...r, ref: n, style: { ...r.style, display: "block" } }),
            });
        });
    Xi.displayName = Gi;
    function Xl(e) {
        return e !== null;
    }
    var Zl = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
            var _, y, g;
            const { placement: n, rects: o, middlewareData: r } = t,
                a = ((_ = r.arrow) == null ? void 0 : _.centerOffset) !== 0,
                s = a ? 0 : e.arrowWidth,
                c = a ? 0 : e.arrowHeight,
                [l, d] = Zi(n),
                u = { start: "0%", center: "50%", end: "100%" }[d],
                p = (((y = r.arrow) == null ? void 0 : y.x) ?? 0) + s / 2,
                h = (((g = r.arrow) == null ? void 0 : g.y) ?? 0) + c / 2;
            let v = "",
                f = "";
            return (
                l === "bottom"
                    ? ((v = a ? u : `${p}px`), (f = `${-c}px`))
                    : l === "top"
                    ? ((v = a ? u : `${p}px`), (f = `${o.floating.height + c}px`))
                    : l === "right"
                    ? ((v = `${-c}px`), (f = a ? u : `${h}px`))
                    : l === "left" && ((v = `${o.floating.width + c}px`), (f = a ? u : `${h}px`)),
                { data: { x: v, y: f } }
            );
        },
    });
    function Zi(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n];
    }
    var Jl = ji,
        Ql = Ki,
        eu = Yi,
        tu = Xi,
        nu = "Portal",
        Ji = D((e, t) => {
            var s;
            const { container: n, ...o } = e,
                [r, i] = k(!1);
            _e(() => i(!0), []);
            const a = n || (r && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body));
            return a ? Me.createPortal(m(re.div, { ...o, ref: t }), a) : null;
        });
    Ji.displayName = nu;
    function Qi({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        const [o, r] = ou({ defaultProp: t, onChange: n }),
            i = e !== void 0,
            a = i ? e : o,
            s = Le(n),
            c = j(
                (l) => {
                    if (i) {
                        const u = typeof l == "function" ? l(e) : l;
                        u !== e && s(u);
                    } else r(l);
                },
                [i, e, r, s]
            );
        return [a, c];
    }
    function ou({ defaultProp: e, onChange: t }) {
        const n = k(e),
            [o] = n,
            r = O(o),
            i = Le(t);
        return (
            I(() => {
                r.current !== o && (i(o), (r.current = o));
            }, [o, r, i]),
            n
        );
    }
    function ru(e) {
        const t = O({ value: e, previous: e });
        return K(() => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous), [e]);
    }
    var iu = "VisuallyHidden",
        ea = D((e, t) =>
            m(re.span, { ...e, ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e.style } })
        );
    ea.displayName = iu;
    var au = function (e) {
            if (typeof document > "u") return null;
            var t = Array.isArray(e) ? e[0] : e;
            return t.ownerDocument.body;
        },
        vt = new WeakMap(),
        an = new WeakMap(),
        sn = {},
        So = 0,
        ta = function (e) {
            return e && (e.host || ta(e.parentNode));
        },
        su = function (e, t) {
            return t
                .map(function (n) {
                    if (e.contains(n)) return n;
                    var o = ta(n);
                    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
                })
                .filter(function (n) {
                    return !!n;
                });
        },
        cu = function (e, t, n, o) {
            var r = su(t, Array.isArray(e) ? e : [e]);
            sn[n] || (sn[n] = new WeakMap());
            var i = sn[n],
                a = [],
                s = new Set(),
                c = new Set(r),
                l = function (u) {
                    !u || s.has(u) || (s.add(u), l(u.parentNode));
                };
            r.forEach(l);
            var d = function (u) {
                !u ||
                    c.has(u) ||
                    Array.prototype.forEach.call(u.children, function (p) {
                        if (s.has(p)) d(p);
                        else {
                            var h = p.getAttribute(o),
                                v = h !== null && h !== "false",
                                f = (vt.get(p) || 0) + 1,
                                _ = (i.get(p) || 0) + 1;
                            vt.set(p, f), i.set(p, _), a.push(p), f === 1 && v && an.set(p, !0), _ === 1 && p.setAttribute(n, "true"), v || p.setAttribute(o, "true");
                        }
                    });
            };
            return (
                d(t),
                s.clear(),
                So++,
                function () {
                    a.forEach(function (u) {
                        var p = vt.get(u) - 1,
                            h = i.get(u) - 1;
                        vt.set(u, p), i.set(u, h), p || (an.has(u) || u.removeAttribute(o), an.delete(u)), h || u.removeAttribute(n);
                    }),
                        So--,
                        So || ((vt = new WeakMap()), (vt = new WeakMap()), (an = new WeakMap()), (sn = {}));
                }
            );
        },
        lu = function (e, t, n) {
            n === void 0 && (n = "data-aria-hidden");
            var o = Array.from(Array.isArray(e) ? e : [e]),
                r = au(e);
            return r
                ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), cu(o, r, n, "aria-hidden"))
                : function () {
                      return null;
                  };
        },
        Ye = function () {
            return (
                (Ye =
                    Object.assign ||
                    function (t) {
                        for (var n, o = 1, r = arguments.length; o < r; o++) {
                            n = arguments[o];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                        }
                        return t;
                    }),
                Ye.apply(this, arguments)
            );
        };
    function uu(e, t) {
        var n = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        return n;
    }
    function du(e, t, n) {
        if (n || arguments.length === 2) for (var o = 0, r = t.length, i; o < r; o++) (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), (i[o] = t[o]));
        return e.concat(i || Array.prototype.slice.call(t));
    }
    typeof SuppressedError == "function" && SuppressedError;
    var cn = "right-scroll-bar-position",
        ln = "width-before-scroll-bar",
        fu = "with-scroll-bars-hidden",
        pu = "--removed-body-scroll-bar-size";
    function ko(e, t) {
        return typeof e == "function" ? e(t) : e && (e.current = t), e;
    }
    function hu(e, t) {
        var n = k(function () {
            return {
                value: e,
                callback: t,
                facade: {
                    get current() {
                        return n.value;
                    },
                    set current(o) {
                        var r = n.value;
                        r !== o && ((n.value = o), n.callback(o, r));
                    },
                },
            };
        })[0];
        return (n.callback = t), n.facade;
    }
    var na = new WeakMap();
    function mu(e, t) {
        var n = hu(null, function (o) {
            return e.forEach(function (r) {
                return ko(r, o);
            });
        });
        return (
            Oe(
                function () {
                    var o = na.get(n);
                    if (o) {
                        var r = new Set(o),
                            i = new Set(e),
                            a = n.current;
                        r.forEach(function (s) {
                            i.has(s) || ko(s, null);
                        }),
                            i.forEach(function (s) {
                                r.has(s) || ko(s, a);
                            });
                    }
                    na.set(n, e);
                },
                [e]
            ),
            n
        );
    }
    var un = function () {
        return (
            (un =
                Object.assign ||
                function (t) {
                    for (var n, o = 1, r = arguments.length; o < r; o++) {
                        n = arguments[o];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                    }
                    return t;
                }),
            un.apply(this, arguments)
        );
    };
    function _u(e, t) {
        var n = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        return n;
    }
    typeof SuppressedError == "function" && SuppressedError;
    function vu(e) {
        return e;
    }
    function gu(e, t) {
        t === void 0 && (t = vu);
        var n = [],
            o = !1,
            r = {
                read: function () {
                    if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                    return n.length ? n[n.length - 1] : e;
                },
                useMedium: function (i) {
                    var a = t(i, o);
                    return (
                        n.push(a),
                        function () {
                            n = n.filter(function (s) {
                                return s !== a;
                            });
                        }
                    );
                },
                assignSyncMedium: function (i) {
                    for (o = !0; n.length; ) {
                        var a = n;
                        (n = []), a.forEach(i);
                    }
                    n = {
                        push: function (s) {
                            return i(s);
                        },
                        filter: function () {
                            return n;
                        },
                    };
                },
                assignMedium: function (i) {
                    o = !0;
                    var a = [];
                    if (n.length) {
                        var s = n;
                        (n = []), s.forEach(i), (a = n);
                    }
                    var c = function () {
                            var d = a;
                            (a = []), d.forEach(i);
                        },
                        l = function () {
                            return Promise.resolve().then(c);
                        };
                    l(),
                        (n = {
                            push: function (d) {
                                a.push(d), l();
                            },
                            filter: function (d) {
                                return (a = a.filter(d)), n;
                            },
                        });
                },
            };
        return r;
    }
    function yu(e) {
        e === void 0 && (e = {});
        var t = gu(null);
        return (t.options = un({ async: !0, ssr: !1 }, e)), t;
    }
    var oa = function (e) {
        var t = e.sideCar,
            n = _u(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var o = t.read();
        if (!o) throw new Error("Sidecar medium not found");
        return H(o, un({}, n));
    };
    oa.isSideCarExport = !0;
    function bu(e, t) {
        return e.useMedium(t), oa;
    }
    var ra = yu(),
        Eo = function () {},
        dn = D(function (e, t) {
            var n = O(null),
                o = k({ onScrollCapture: Eo, onWheelCapture: Eo, onTouchMoveCapture: Eo }),
                r = o[0],
                i = o[1],
                a = e.forwardProps,
                s = e.children,
                c = e.className,
                l = e.removeScrollBar,
                d = e.enabled,
                u = e.shards,
                p = e.sideCar,
                h = e.noIsolation,
                v = e.inert,
                f = e.allowPinchZoom,
                _ = e.as,
                y = _ === void 0 ? "div" : _,
                g = e.gapMode,
                b = uu(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                w = p,
                x = mu([n, t]),
                E = Ye(Ye({}, b), r);
            return H(
                ie,
                null,
                d && H(w, { sideCar: ra, removeScrollBar: l, shards: u, noIsolation: h, inert: v, setCallbacks: i, allowPinchZoom: !!f, lockRef: n, gapMode: g }),
                a ? Et(We.only(s), Ye(Ye({}, E), { ref: x })) : H(y, Ye({}, E, { className: c, ref: x }), s)
            );
        });
    (dn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (dn.classNames = { fullWidth: ln, zeroRight: cn });
    var wu = function () {
        if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
    };
    function xu() {
        if (!document) return null;
        var e = document.createElement("style");
        e.type = "text/css";
        var t = wu();
        return t && e.setAttribute("nonce", t), e;
    }
    function Cu(e, t) {
        e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
    }
    function Su(e) {
        var t = document.head || document.getElementsByTagName("head")[0];
        t.appendChild(e);
    }
    var ku = function () {
            var e = 0,
                t = null;
            return {
                add: function (n) {
                    e == 0 && (t = xu()) && (Cu(t, n), Su(t)), e++;
                },
                remove: function () {
                    e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
                },
            };
        },
        Eu = function () {
            var e = ku();
            return function (t, n) {
                I(
                    function () {
                        return (
                            e.add(t),
                            function () {
                                e.remove();
                            }
                        );
                    },
                    [t && n]
                );
            };
        },
        ia = function () {
            var e = Eu(),
                t = function (n) {
                    var o = n.styles,
                        r = n.dynamic;
                    return e(o, r), null;
                };
            return t;
        },
        Pu = { left: 0, top: 0, right: 0, gap: 0 },
        Po = function (e) {
            return parseInt(e || "", 10) || 0;
        },
        Au = function (e) {
            var t = window.getComputedStyle(document.body),
                n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
                o = t[e === "padding" ? "paddingTop" : "marginTop"],
                r = t[e === "padding" ? "paddingRight" : "marginRight"];
            return [Po(n), Po(o), Po(r)];
        },
        Tu = function (e) {
            if ((e === void 0 && (e = "margin"), typeof window > "u")) return Pu;
            var t = Au(e),
                n = document.documentElement.clientWidth,
                o = window.innerWidth;
            return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, o - n + t[2] - t[0]) };
        },
        Iu = ia(),
        gt = "data-scroll-locked",
        Ou = function (e, t, n, o) {
            var r = e.left,
                i = e.top,
                a = e.right,
                s = e.gap;
            return (
                n === void 0 && (n = "margin"),
                `
  .`
                    .concat(
                        fu,
                        ` {
   overflow: hidden `
                    )
                    .concat(
                        o,
                        `;
   padding-right: `
                    )
                    .concat(s, "px ")
                    .concat(
                        o,
                        `;
  }
  body[`
                    )
                    .concat(
                        gt,
                        `] {
    overflow: hidden `
                    )
                    .concat(
                        o,
                        `;
    overscroll-behavior: contain;
    `
                    )
                    .concat(
                        [
                            t && "position: relative ".concat(o, ";"),
                            n === "margin" &&
                                `
    padding-left: `
                                    .concat(
                                        r,
                                        `px;
    padding-top: `
                                    )
                                    .concat(
                                        i,
                                        `px;
    padding-right: `
                                    )
                                    .concat(
                                        a,
                                        `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                                    )
                                    .concat(s, "px ")
                                    .concat(
                                        o,
                                        `;
    `
                                    ),
                            n === "padding" && "padding-right: ".concat(s, "px ").concat(o, ";"),
                        ]
                            .filter(Boolean)
                            .join(""),
                        `
  }
  
  .`
                    )
                    .concat(
                        cn,
                        ` {
    right: `
                    )
                    .concat(s, "px ")
                    .concat(
                        o,
                        `;
  }
  
  .`
                    )
                    .concat(
                        ln,
                        ` {
    margin-right: `
                    )
                    .concat(s, "px ")
                    .concat(
                        o,
                        `;
  }
  
  .`
                    )
                    .concat(cn, " .")
                    .concat(
                        cn,
                        ` {
    right: 0 `
                    )
                    .concat(
                        o,
                        `;
  }
  
  .`
                    )
                    .concat(ln, " .")
                    .concat(
                        ln,
                        ` {
    margin-right: 0 `
                    )
                    .concat(
                        o,
                        `;
  }
  
  body[`
                    )
                    .concat(
                        gt,
                        `] {
    `
                    )
                    .concat(pu, ": ")
                    .concat(
                        s,
                        `px;
  }
`
                    )
            );
        },
        aa = function () {
            var e = parseInt(document.body.getAttribute(gt) || "0", 10);
            return isFinite(e) ? e : 0;
        },
        Nu = function () {
            I(function () {
                return (
                    document.body.setAttribute(gt, (aa() + 1).toString()),
                    function () {
                        var e = aa() - 1;
                        e <= 0 ? document.body.removeAttribute(gt) : document.body.setAttribute(gt, e.toString());
                    }
                );
            }, []);
        },
        Ru = function (e) {
            var t = e.noRelative,
                n = e.noImportant,
                o = e.gapMode,
                r = o === void 0 ? "margin" : o;
            Nu();
            var i = K(
                function () {
                    return Tu(r);
                },
                [r]
            );
            return H(Iu, { styles: Ou(i, !t, r, n ? "" : "!important") });
        },
        Ao = !1;
    if (typeof window < "u")
        try {
            var fn = Object.defineProperty({}, "passive", {
                get: function () {
                    return (Ao = !0), !0;
                },
            });
            window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn);
        } catch {
            Ao = !1;
        }
    var yt = Ao ? { passive: !1 } : !1,
        Mu = function (e) {
            return e.tagName === "TEXTAREA";
        },
        sa = function (e, t) {
            if (!(e instanceof Element)) return !1;
            var n = window.getComputedStyle(e);
            return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Mu(e) && n[t] === "visible");
        },
        Du = function (e) {
            return sa(e, "overflowY");
        },
        Lu = function (e) {
            return sa(e, "overflowX");
        },
        ca = function (e, t) {
            var n = t.ownerDocument,
                o = t;
            do {
                typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
                var r = la(e, o);
                if (r) {
                    var i = ua(e, o),
                        a = i[1],
                        s = i[2];
                    if (a > s) return !0;
                }
                o = o.parentNode;
            } while (o && o !== n.body);
            return !1;
        },
        $u = function (e) {
            var t = e.scrollTop,
                n = e.scrollHeight,
                o = e.clientHeight;
            return [t, n, o];
        },
        Fu = function (e) {
            var t = e.scrollLeft,
                n = e.scrollWidth,
                o = e.clientWidth;
            return [t, n, o];
        },
        la = function (e, t) {
            return e === "v" ? Du(t) : Lu(t);
        },
        ua = function (e, t) {
            return e === "v" ? $u(t) : Fu(t);
        },
        Bu = function (e, t) {
            return e === "h" && t === "rtl" ? -1 : 1;
        },
        Uu = function (e, t, n, o, r) {
            var i = Bu(e, window.getComputedStyle(t).direction),
                a = i * o,
                s = n.target,
                c = t.contains(s),
                l = !1,
                d = a > 0,
                u = 0,
                p = 0;
            do {
                var h = ua(e, s),
                    v = h[0],
                    f = h[1],
                    _ = h[2],
                    y = f - _ - i * v;
                (v || y) && la(e, s) && ((u += y), (p += v)), s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
            } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
            return ((d && Math.abs(u) < 1) || (!d && Math.abs(p) < 1)) && (l = !0), l;
        },
        pn = function (e) {
            return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
        },
        da = function (e) {
            return [e.deltaX, e.deltaY];
        },
        fa = function (e) {
            return e && "current" in e ? e.current : e;
        },
        Wu = function (e, t) {
            return e[0] === t[0] && e[1] === t[1];
        },
        Vu = function (e) {
            return `
  .block-interactivity-`
                .concat(
                    e,
                    ` {pointer-events: none;}
  .allow-interactivity-`
                )
                .concat(
                    e,
                    ` {pointer-events: all;}
`
                );
        },
        Hu = 0,
        bt = [];
    function zu(e) {
        var t = O([]),
            n = O([0, 0]),
            o = O(),
            r = k(Hu++)[0],
            i = k(ia)[0],
            a = O(e);
        I(
            function () {
                a.current = e;
            },
            [e]
        ),
            I(
                function () {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(r));
                        var f = du([e.lockRef.current], (e.shards || []).map(fa), !0).filter(Boolean);
                        return (
                            f.forEach(function (_) {
                                return _.classList.add("allow-interactivity-".concat(r));
                            }),
                            function () {
                                document.body.classList.remove("block-interactivity-".concat(r)),
                                    f.forEach(function (_) {
                                        return _.classList.remove("allow-interactivity-".concat(r));
                                    });
                            }
                        );
                    }
                },
                [e.inert, e.lockRef.current, e.shards]
            );
        var s = j(function (f, _) {
                if (("touches" in f && f.touches.length === 2) || (f.type === "wheel" && f.ctrlKey)) return !a.current.allowPinchZoom;
                var y = pn(f),
                    g = n.current,
                    b = "deltaX" in f ? f.deltaX : g[0] - y[0],
                    w = "deltaY" in f ? f.deltaY : g[1] - y[1],
                    x,
                    E = f.target,
                    S = Math.abs(b) > Math.abs(w) ? "h" : "v";
                if ("touches" in f && S === "h" && E.type === "range") return !1;
                var A = ca(S, E);
                if (!A) return !0;
                if ((A ? (x = S) : ((x = S === "v" ? "h" : "v"), (A = ca(S, E))), !A)) return !1;
                if ((!o.current && "changedTouches" in f && (b || w) && (o.current = x), !x)) return !0;
                var M = o.current || x;
                return Uu(M, _, f, M === "h" ? b : w);
            }, []),
            c = j(function (f) {
                var _ = f;
                if (!(!bt.length || bt[bt.length - 1] !== i)) {
                    var y = "deltaY" in _ ? da(_) : pn(_),
                        g = t.current.filter(function (x) {
                            return x.name === _.type && (x.target === _.target || _.target === x.shadowParent) && Wu(x.delta, y);
                        })[0];
                    if (g && g.should) {
                        _.cancelable && _.preventDefault();
                        return;
                    }
                    if (!g) {
                        var b = (a.current.shards || [])
                                .map(fa)
                                .filter(Boolean)
                                .filter(function (x) {
                                    return x.contains(_.target);
                                }),
                            w = b.length > 0 ? s(_, b[0]) : !a.current.noIsolation;
                        w && _.cancelable && _.preventDefault();
                    }
                }
            }, []),
            l = j(function (f, _, y, g) {
                var b = { name: f, delta: _, target: y, should: g, shadowParent: ju(y) };
                t.current.push(b),
                    setTimeout(function () {
                        t.current = t.current.filter(function (w) {
                            return w !== b;
                        });
                    }, 1);
            }, []),
            d = j(function (f) {
                (n.current = pn(f)), (o.current = void 0);
            }, []),
            u = j(function (f) {
                l(f.type, da(f), f.target, s(f, e.lockRef.current));
            }, []),
            p = j(function (f) {
                l(f.type, pn(f), f.target, s(f, e.lockRef.current));
            }, []);
        I(function () {
            return (
                bt.push(i),
                e.setCallbacks({ onScrollCapture: u, onWheelCapture: u, onTouchMoveCapture: p }),
                document.addEventListener("wheel", c, yt),
                document.addEventListener("touchmove", c, yt),
                document.addEventListener("touchstart", d, yt),
                function () {
                    (bt = bt.filter(function (f) {
                        return f !== i;
                    })),
                        document.removeEventListener("wheel", c, yt),
                        document.removeEventListener("touchmove", c, yt),
                        document.removeEventListener("touchstart", d, yt);
                }
            );
        }, []);
        var h = e.removeScrollBar,
            v = e.inert;
        return H(ie, null, v ? H(i, { styles: Vu(r) }) : null, h ? H(Ru, { gapMode: e.gapMode }) : null);
    }
    function ju(e) {
        for (var t = null; e !== null; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
        return t;
    }
    const qu = bu(ra, zu);
    var pa = D(function (e, t) {
        return H(dn, Ye({}, e, { ref: t, sideCar: qu }));
    });
    pa.classNames = dn.classNames;
    var Ku = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Yu = [" ", "Enter"],
        Rt = "Select",
        [hn, mn, Gu] = wc(Rt),
        [wt, Hf] = xc(Rt, [Gu, Hi]),
        _n = Hi(),
        [Xu, Ge] = wt(Rt),
        [Zu, Ju] = wt(Rt),
        ha = (e) => {
            const { __scopeSelect: t, children: n, open: o, defaultOpen: r, onOpenChange: i, value: a, defaultValue: s, onValueChange: c, dir: l, name: d, autoComplete: u, disabled: p, required: h, form: v } = e,
                f = _n(t),
                [_, y] = k(null),
                [g, b] = k(null),
                [w, x] = k(!1),
                E = kc(l),
                [S = !1, A] = Qi({ prop: o, defaultProp: r, onChange: i }),
                [M, F] = Qi({ prop: a, defaultProp: s, onChange: c }),
                L = O(null),
                W = _ ? v || !!_.closest("form") : !0,
                [z, V] = k(new Set()),
                J = Array.from(z)
                    .map((B) => B.props.value)
                    .join(";");
            return m(Jl, {
                ...f,
                children: m(Xu, {
                    required: h,
                    scope: t,
                    trigger: _,
                    onTriggerChange: y,
                    valueNode: g,
                    onValueNodeChange: b,
                    valueNodeHasChildren: w,
                    onValueNodeHasChildrenChange: x,
                    contentId: co(),
                    value: M,
                    onValueChange: F,
                    open: S,
                    onOpenChange: A,
                    dir: E,
                    triggerPointerDownPosRef: L,
                    disabled: p,
                    children: [
                        m(hn.Provider, {
                            scope: t,
                            children: m(Zu, {
                                scope: e.__scopeSelect,
                                onNativeOptionAdd: j((B) => {
                                    V(($) => new Set($).add(B));
                                }, []),
                                onNativeOptionRemove: j((B) => {
                                    V(($) => {
                                        const R = new Set($);
                                        return R.delete(B), R;
                                    });
                                }, []),
                                children: n,
                            }),
                        }),
                        W
                            ? m(
                                  La,
                                  {
                                      "aria-hidden": !0,
                                      required: h,
                                      tabIndex: -1,
                                      name: d,
                                      autoComplete: u,
                                      value: M,
                                      onChange: (B) => F(B.target.value),
                                      disabled: p,
                                      form: v,
                                      children: [M === void 0 ? m("option", { value: "" }) : null, Array.from(z)],
                                  },
                                  J
                              )
                            : null,
                    ],
                }),
            });
        };
    ha.displayName = Rt;
    var ma = "SelectTrigger",
        _a = D((e, t) => {
            const { __scopeSelect: n, disabled: o = !1, ...r } = e,
                i = _n(n),
                a = Ge(ma, n),
                s = a.disabled || o,
                c = ce(t, a.onTriggerChange),
                l = mn(n),
                d = O("touch"),
                [u, p, h] = $a((f) => {
                    const _ = l().filter((b) => !b.disabled),
                        y = _.find((b) => b.value === a.value),
                        g = Fa(_, f, y);
                    g !== void 0 && a.onValueChange(g.value);
                }),
                v = (f) => {
                    s || (a.onOpenChange(!0), h()), f && (a.triggerPointerDownPosRef.current = { x: Math.round(f.pageX), y: Math.round(f.pageY) });
                };
            return m(Ql, {
                asChild: !0,
                ...i,
                children: m(re.button, {
                    type: "button",
                    role: "combobox",
                    "aria-controls": a.contentId,
                    "aria-expanded": a.open,
                    "aria-required": a.required,
                    "aria-autocomplete": "none",
                    dir: a.dir,
                    "data-state": a.open ? "open" : "closed",
                    disabled: s,
                    "data-disabled": s ? "" : void 0,
                    "data-placeholder": Da(a.value) ? "" : void 0,
                    ...r,
                    ref: c,
                    onClick: oe(r.onClick, (f) => {
                        f.currentTarget.focus(), d.current !== "mouse" && v(f);
                    }),
                    onPointerDown: oe(r.onPointerDown, (f) => {
                        d.current = f.pointerType;
                        const _ = f.target;
                        _.hasPointerCapture(f.pointerId) && _.releasePointerCapture(f.pointerId), f.button === 0 && f.ctrlKey === !1 && f.pointerType === "mouse" && (v(f), f.preventDefault());
                    }),
                    onKeyDown: oe(r.onKeyDown, (f) => {
                        const _ = u.current !== "";
                        !(f.ctrlKey || f.altKey || f.metaKey) && f.key.length === 1 && p(f.key), !(_ && f.key === " ") && Ku.includes(f.key) && (v(), f.preventDefault());
                    }),
                }),
            });
        });
    _a.displayName = ma;
    var va = "SelectValue",
        Qu = D((e, t) => {
            const { __scopeSelect: n, className: o, style: r, children: i, placeholder: a = "", ...s } = e,
                c = Ge(va, n),
                { onValueNodeHasChildrenChange: l } = c,
                d = i !== void 0,
                u = ce(t, c.onValueNodeChange);
            return (
                _e(() => {
                    l(d);
                }, [l, d]),
                m(re.span, { ...s, ref: u, style: { pointerEvents: "none" }, children: Da(c.value) ? m(ie, { children: a }) : i })
            );
        });
    Qu.displayName = va;
    var ed = "SelectIcon",
        ga = D((e, t) => {
            const { __scopeSelect: n, children: o, ...r } = e;
            return m(re.span, { "aria-hidden": !0, ...r, ref: t, children: o || "▼" });
        });
    ga.displayName = ed;
    var td = "SelectPortal",
        ya = (e) => m(Ji, { asChild: !0, ...e });
    ya.displayName = td;
    var it = "SelectContent",
        ba = D((e, t) => {
            const n = Ge(it, e.__scopeSelect),
                [o, r] = k();
            if (
                (_e(() => {
                    r(new DocumentFragment());
                }, []),
                !n.open)
            ) {
                const i = o;
                return i ? Ht(m(wa, { scope: e.__scopeSelect, children: m(hn.Slot, { scope: e.__scopeSelect, children: m("div", { children: e.children }) }) }), i) : null;
            }
            return m(xa, { ...e, ref: t });
        });
    ba.displayName = it;
    var xe = 10,
        [wa, Xe] = wt(it),
        nd = "SelectContentImpl",
        xa = D((e, t) => {
            const {
                    __scopeSelect: n,
                    position: o = "item-aligned",
                    onCloseAutoFocus: r,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: a,
                    side: s,
                    sideOffset: c,
                    align: l,
                    alignOffset: d,
                    arrowPadding: u,
                    collisionBoundary: p,
                    collisionPadding: h,
                    sticky: v,
                    hideWhenDetached: f,
                    avoidCollisions: _,
                    ...y
                } = e,
                g = Ge(it, n),
                [b, w] = k(null),
                [x, E] = k(null),
                S = ce(t, (T) => w(T)),
                [A, M] = k(null),
                [F, L] = k(null),
                W = mn(n),
                [z, V] = k(!1),
                J = O(!1);
            I(() => {
                if (b) return lu(b);
            }, [b]),
                Lc();
            const B = j(
                    (T) => {
                        const [Z, ...ne] = W().map((U) => U.ref.current),
                            [Y] = ne.slice(-1),
                            N = document.activeElement;
                        for (const U of T)
                            if (U === N || (U == null || U.scrollIntoView({ block: "nearest" }), U === Z && x && (x.scrollTop = 0), U === Y && x && (x.scrollTop = x.scrollHeight), U == null || U.focus(), document.activeElement !== N))
                                return;
                    },
                    [W, x]
                ),
                $ = j(() => B([A, b]), [B, A, b]);
            I(() => {
                z && $();
            }, [z, $]);
            const { onOpenChange: R, triggerPointerDownPosRef: q } = g;
            I(() => {
                if (b) {
                    let T = { x: 0, y: 0 };
                    const Z = (Y) => {
                            var N, U;
                            T = { x: Math.abs(Math.round(Y.pageX) - (((N = q.current) == null ? void 0 : N.x) ?? 0)), y: Math.abs(Math.round(Y.pageY) - (((U = q.current) == null ? void 0 : U.y) ?? 0)) };
                        },
                        ne = (Y) => {
                            T.x <= 10 && T.y <= 10 ? Y.preventDefault() : b.contains(Y.target) || R(!1), document.removeEventListener("pointermove", Z), (q.current = null);
                        };
                    return (
                        q.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", ne, { capture: !0, once: !0 })),
                        () => {
                            document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", ne, { capture: !0 });
                        }
                    );
                }
            }, [b, R, q]),
                I(() => {
                    const T = () => R(!1);
                    return (
                        window.addEventListener("blur", T),
                        window.addEventListener("resize", T),
                        () => {
                            window.removeEventListener("blur", T), window.removeEventListener("resize", T);
                        }
                    );
                }, [R]);
            const [ae, le] = $a((T) => {
                    const Z = W().filter((N) => !N.disabled),
                        ne = Z.find((N) => N.ref.current === document.activeElement),
                        Y = Fa(Z, T, ne);
                    Y && setTimeout(() => Y.ref.current.focus());
                }),
                Ae = j(
                    (T, Z, ne) => {
                        const Y = !J.current && !ne;
                        ((g.value !== void 0 && g.value === Z) || Y) && (M(T), Y && (J.current = !0));
                    },
                    [g.value]
                ),
                de = j(() => (b == null ? void 0 : b.focus()), [b]),
                Ce = j(
                    (T, Z, ne) => {
                        const Y = !J.current && !ne;
                        ((g.value !== void 0 && g.value === Z) || Y) && L(T);
                    },
                    [g.value]
                ),
                Ze = o === "popper" ? To : Ca,
                pe = Ze === To ? { side: s, sideOffset: c, align: l, alignOffset: d, arrowPadding: u, collisionBoundary: p, collisionPadding: h, sticky: v, hideWhenDetached: f, avoidCollisions: _ } : {};
            return m(wa, {
                scope: n,
                content: b,
                viewport: x,
                onViewportChange: E,
                itemRefCallback: Ae,
                selectedItem: A,
                onItemLeave: de,
                itemTextRefCallback: Ce,
                focusSelectedItem: $,
                selectedItemText: F,
                position: o,
                isPositioned: z,
                searchRef: ae,
                children: m(pa, {
                    as: Tt,
                    allowPinchZoom: !0,
                    children: m(bi, {
                        asChild: !0,
                        trapped: g.open,
                        onMountAutoFocus: (T) => {
                            T.preventDefault();
                        },
                        onUnmountAutoFocus: oe(r, (T) => {
                            var Z;
                            (Z = g.trigger) == null || Z.focus({ preventScroll: !0 }), T.preventDefault();
                        }),
                        children: m(mi, {
                            asChild: !0,
                            disableOutsidePointerEvents: !0,
                            onEscapeKeyDown: i,
                            onPointerDownOutside: a,
                            onFocusOutside: (T) => T.preventDefault(),
                            onDismiss: () => g.onOpenChange(!1),
                            children: m(Ze, {
                                role: "listbox",
                                id: g.contentId,
                                "data-state": g.open ? "open" : "closed",
                                dir: g.dir,
                                onContextMenu: (T) => T.preventDefault(),
                                ...y,
                                ...pe,
                                onPlaced: () => V(!0),
                                ref: S,
                                style: { display: "flex", flexDirection: "column", outline: "none", ...y.style },
                                onKeyDown: oe(y.onKeyDown, (T) => {
                                    const Z = T.ctrlKey || T.altKey || T.metaKey;
                                    if ((T.key === "Tab" && T.preventDefault(), !Z && T.key.length === 1 && le(T.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key))) {
                                        let Y = W()
                                            .filter((N) => !N.disabled)
                                            .map((N) => N.ref.current);
                                        if ((["ArrowUp", "End"].includes(T.key) && (Y = Y.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(T.key))) {
                                            const N = T.target,
                                                U = Y.indexOf(N);
                                            Y = Y.slice(U + 1);
                                        }
                                        setTimeout(() => B(Y)), T.preventDefault();
                                    }
                                }),
                            }),
                        }),
                    }),
                }),
            });
        });
    xa.displayName = nd;
    var od = "SelectItemAlignedPosition",
        Ca = D((e, t) => {
            const { __scopeSelect: n, onPlaced: o, ...r } = e,
                i = Ge(it, n),
                a = Xe(it, n),
                [s, c] = k(null),
                [l, d] = k(null),
                u = ce(t, (S) => d(S)),
                p = mn(n),
                h = O(!1),
                v = O(!0),
                { viewport: f, selectedItem: _, selectedItemText: y, focusSelectedItem: g } = a,
                b = j(() => {
                    if (i.trigger && i.valueNode && s && l && f && _ && y) {
                        const S = i.trigger.getBoundingClientRect(),
                            A = l.getBoundingClientRect(),
                            M = i.valueNode.getBoundingClientRect(),
                            F = y.getBoundingClientRect();
                        if (i.dir !== "rtl") {
                            const N = F.left - A.left,
                                U = M.left - N,
                                ee = S.left - U,
                                te = S.width + ee,
                                Je = Math.max(te, A.width),
                                Dt = window.innerWidth - xe,
                                Lt = ui(U, [xe, Math.max(xe, Dt - Je)]);
                            (s.style.minWidth = te + "px"), (s.style.left = Lt + "px");
                        } else {
                            const N = A.right - F.right,
                                U = window.innerWidth - M.right - N,
                                ee = window.innerWidth - S.right - U,
                                te = S.width + ee,
                                Je = Math.max(te, A.width),
                                Dt = window.innerWidth - xe,
                                Lt = ui(U, [xe, Math.max(xe, Dt - Je)]);
                            (s.style.minWidth = te + "px"), (s.style.right = Lt + "px");
                        }
                        const L = p(),
                            W = window.innerHeight - xe * 2,
                            z = f.scrollHeight,
                            V = window.getComputedStyle(l),
                            J = parseInt(V.borderTopWidth, 10),
                            B = parseInt(V.paddingTop, 10),
                            $ = parseInt(V.borderBottomWidth, 10),
                            R = parseInt(V.paddingBottom, 10),
                            q = J + B + z + R + $,
                            ae = Math.min(_.offsetHeight * 5, q),
                            le = window.getComputedStyle(f),
                            Ae = parseInt(le.paddingTop, 10),
                            de = parseInt(le.paddingBottom, 10),
                            Ce = S.top + S.height / 2 - xe,
                            Ze = W - Ce,
                            pe = _.offsetHeight / 2,
                            T = _.offsetTop + pe,
                            Z = J + B + T,
                            ne = q - Z;
                        if (Z <= Ce) {
                            const N = L.length > 0 && _ === L[L.length - 1].ref.current;
                            s.style.bottom = "0px";
                            const U = l.clientHeight - f.offsetTop - f.offsetHeight,
                                ee = Math.max(Ze, pe + (N ? de : 0) + U + $),
                                te = Z + ee;
                            s.style.height = te + "px";
                        } else {
                            const N = L.length > 0 && _ === L[0].ref.current;
                            s.style.top = "0px";
                            const ee = Math.max(Ce, J + f.offsetTop + (N ? Ae : 0) + pe) + ne;
                            (s.style.height = ee + "px"), (f.scrollTop = Z - Ce + f.offsetTop);
                        }
                        (s.style.margin = `${xe}px 0`), (s.style.minHeight = ae + "px"), (s.style.maxHeight = W + "px"), o == null || o(), requestAnimationFrame(() => (h.current = !0));
                    }
                }, [p, i.trigger, i.valueNode, s, l, f, _, y, i.dir, o]);
            _e(() => b(), [b]);
            const [w, x] = k();
            _e(() => {
                l && x(window.getComputedStyle(l).zIndex);
            }, [l]);
            const E = j(
                (S) => {
                    S && v.current === !0 && (b(), g == null || g(), (v.current = !1));
                },
                [b, g]
            );
            return m(id, {
                scope: n,
                contentWrapper: s,
                shouldExpandOnScrollRef: h,
                onScrollButtonChange: E,
                children: m("div", { ref: c, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: w }, children: m(re.div, { ...r, ref: u, style: { boxSizing: "border-box", maxHeight: "100%", ...r.style } }) }),
            });
        });
    Ca.displayName = od;
    var rd = "SelectPopperPosition",
        To = D((e, t) => {
            const { __scopeSelect: n, align: o = "start", collisionPadding: r = xe, ...i } = e,
                a = _n(n);
            return m(eu, {
                ...a,
                ...i,
                ref: t,
                align: o,
                collisionPadding: r,
                style: {
                    boxSizing: "border-box",
                    ...i.style,
                    "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
                },
            });
        });
    To.displayName = rd;
    var [id, Io] = wt(it, {}),
        Oo = "SelectViewport",
        Sa = D((e, t) => {
            const { __scopeSelect: n, nonce: o, ...r } = e,
                i = Xe(Oo, n),
                a = Io(Oo, n),
                s = ce(t, i.onViewportChange),
                c = O(0);
            return m(ie, {
                children: [
                    m("style", {
                        dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
                        nonce: o,
                    }),
                    m(hn.Slot, {
                        scope: n,
                        children: m(re.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...r,
                            ref: s,
                            style: { position: "relative", flex: 1, overflow: "hidden auto", ...r.style },
                            onScroll: oe(r.onScroll, (l) => {
                                const d = l.currentTarget,
                                    { contentWrapper: u, shouldExpandOnScrollRef: p } = a;
                                if (p != null && p.current && u) {
                                    const h = Math.abs(c.current - d.scrollTop);
                                    if (h > 0) {
                                        const v = window.innerHeight - xe * 2,
                                            f = parseFloat(u.style.minHeight),
                                            _ = parseFloat(u.style.height),
                                            y = Math.max(f, _);
                                        if (y < v) {
                                            const g = y + h,
                                                b = Math.min(v, g),
                                                w = g - b;
                                            (u.style.height = b + "px"), u.style.bottom === "0px" && ((d.scrollTop = w > 0 ? w : 0), (u.style.justifyContent = "flex-end"));
                                        }
                                    }
                                }
                                c.current = d.scrollTop;
                            }),
                        }),
                    }),
                ],
            });
        });
    Sa.displayName = Oo;
    var ka = "SelectGroup",
        [ad, sd] = wt(ka),
        cd = D((e, t) => {
            const { __scopeSelect: n, ...o } = e,
                r = co();
            return m(ad, { scope: n, id: r, children: m(re.div, { role: "group", "aria-labelledby": r, ...o, ref: t }) });
        });
    cd.displayName = ka;
    var Ea = "SelectLabel",
        ld = D((e, t) => {
            const { __scopeSelect: n, ...o } = e,
                r = sd(Ea, n);
            return m(re.div, { id: r.id, ...o, ref: t });
        });
    ld.displayName = Ea;
    var vn = "SelectItem",
        [ud, Pa] = wt(vn),
        Aa = D((e, t) => {
            const { __scopeSelect: n, value: o, disabled: r = !1, textValue: i, ...a } = e,
                s = Ge(vn, n),
                c = Xe(vn, n),
                l = s.value === o,
                [d, u] = k(i ?? ""),
                [p, h] = k(!1),
                v = ce(t, (g) => {
                    var b;
                    return (b = c.itemRefCallback) == null ? void 0 : b.call(c, g, o, r);
                }),
                f = co(),
                _ = O("touch"),
                y = () => {
                    r || (s.onValueChange(o), s.onOpenChange(!1));
                };
            if (o === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
            return m(ud, {
                scope: n,
                value: o,
                disabled: r,
                textId: f,
                isSelected: l,
                onItemTextChange: j((g) => {
                    u((b) => b || ((g == null ? void 0 : g.textContent) ?? "").trim());
                }, []),
                children: m(hn.ItemSlot, {
                    scope: n,
                    value: o,
                    disabled: r,
                    textValue: d,
                    children: m(re.div, {
                        role: "option",
                        "aria-labelledby": f,
                        "data-highlighted": p ? "" : void 0,
                        "aria-selected": l && p,
                        "data-state": l ? "checked" : "unchecked",
                        "aria-disabled": r || void 0,
                        "data-disabled": r ? "" : void 0,
                        tabIndex: r ? void 0 : -1,
                        ...a,
                        ref: v,
                        onFocus: oe(a.onFocus, () => h(!0)),
                        onBlur: oe(a.onBlur, () => h(!1)),
                        onClick: oe(a.onClick, () => {
                            _.current !== "mouse" && y();
                        }),
                        onPointerUp: oe(a.onPointerUp, () => {
                            _.current === "mouse" && y();
                        }),
                        onPointerDown: oe(a.onPointerDown, (g) => {
                            _.current = g.pointerType;
                        }),
                        onPointerMove: oe(a.onPointerMove, (g) => {
                            var b;
                            (_.current = g.pointerType), r ? (b = c.onItemLeave) == null || b.call(c) : _.current === "mouse" && g.currentTarget.focus({ preventScroll: !0 });
                        }),
                        onPointerLeave: oe(a.onPointerLeave, (g) => {
                            var b;
                            g.currentTarget === document.activeElement && ((b = c.onItemLeave) == null || b.call(c));
                        }),
                        onKeyDown: oe(a.onKeyDown, (g) => {
                            var w;
                            (((w = c.searchRef) == null ? void 0 : w.current) !== "" && g.key === " ") || (Yu.includes(g.key) && y(), g.key === " " && g.preventDefault());
                        }),
                    }),
                }),
            });
        });
    Aa.displayName = vn;
    var Mt = "SelectItemText",
        Ta = D((e, t) => {
            const { __scopeSelect: n, className: o, style: r, ...i } = e,
                a = Ge(Mt, n),
                s = Xe(Mt, n),
                c = Pa(Mt, n),
                l = Ju(Mt, n),
                [d, u] = k(null),
                p = ce(
                    t,
                    (y) => u(y),
                    c.onItemTextChange,
                    (y) => {
                        var g;
                        return (g = s.itemTextRefCallback) == null ? void 0 : g.call(s, y, c.value, c.disabled);
                    }
                ),
                h = d == null ? void 0 : d.textContent,
                v = K(() => m("option", { value: c.value, disabled: c.disabled, children: h }, c.value), [c.disabled, c.value, h]),
                { onNativeOptionAdd: f, onNativeOptionRemove: _ } = l;
            return _e(() => (f(v), () => _(v)), [f, _, v]), m(ie, { children: [m(re.span, { id: c.textId, ...i, ref: p }), c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Ht(i.children, a.valueNode) : null] });
        });
    Ta.displayName = Mt;
    var Ia = "SelectItemIndicator",
        Oa = D((e, t) => {
            const { __scopeSelect: n, ...o } = e;
            return Pa(Ia, n).isSelected ? m(re.span, { "aria-hidden": !0, ...o, ref: t }) : null;
        });
    Oa.displayName = Ia;
    var No = "SelectScrollUpButton",
        Na = D((e, t) => {
            const n = Xe(No, e.__scopeSelect),
                o = Io(No, e.__scopeSelect),
                [r, i] = k(!1),
                a = ce(t, o.onScrollButtonChange);
            return (
                _e(() => {
                    if (n.viewport && n.isPositioned) {
                        let s = function () {
                            const l = c.scrollTop > 0;
                            i(l);
                        };
                        const c = n.viewport;
                        return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
                    }
                }, [n.viewport, n.isPositioned]),
                r
                    ? m(Ma, {
                          ...e,
                          ref: a,
                          onAutoScroll: () => {
                              const { viewport: s, selectedItem: c } = n;
                              s && c && (s.scrollTop = s.scrollTop - c.offsetHeight);
                          },
                      })
                    : null
            );
        });
    Na.displayName = No;
    var Ro = "SelectScrollDownButton",
        Ra = D((e, t) => {
            const n = Xe(Ro, e.__scopeSelect),
                o = Io(Ro, e.__scopeSelect),
                [r, i] = k(!1),
                a = ce(t, o.onScrollButtonChange);
            return (
                _e(() => {
                    if (n.viewport && n.isPositioned) {
                        let s = function () {
                            const l = c.scrollHeight - c.clientHeight,
                                d = Math.ceil(c.scrollTop) < l;
                            i(d);
                        };
                        const c = n.viewport;
                        return s(), c.addEventListener("scroll", s), () => c.removeEventListener("scroll", s);
                    }
                }, [n.viewport, n.isPositioned]),
                r
                    ? m(Ma, {
                          ...e,
                          ref: a,
                          onAutoScroll: () => {
                              const { viewport: s, selectedItem: c } = n;
                              s && c && (s.scrollTop = s.scrollTop + c.offsetHeight);
                          },
                      })
                    : null
            );
        });
    Ra.displayName = Ro;
    var Ma = D((e, t) => {
            const { __scopeSelect: n, onAutoScroll: o, ...r } = e,
                i = Xe("SelectScrollButton", n),
                a = O(null),
                s = mn(n),
                c = j(() => {
                    a.current !== null && (window.clearInterval(a.current), (a.current = null));
                }, []);
            return (
                I(() => () => c(), [c]),
                _e(() => {
                    var d;
                    const l = s().find((u) => u.ref.current === document.activeElement);
                    (d = l == null ? void 0 : l.ref.current) == null || d.scrollIntoView({ block: "nearest" });
                }, [s]),
                m(re.div, {
                    "aria-hidden": !0,
                    ...r,
                    ref: t,
                    style: { flexShrink: 0, ...r.style },
                    onPointerDown: oe(r.onPointerDown, () => {
                        a.current === null && (a.current = window.setInterval(o, 50));
                    }),
                    onPointerMove: oe(r.onPointerMove, () => {
                        var l;
                        (l = i.onItemLeave) == null || l.call(i), a.current === null && (a.current = window.setInterval(o, 50));
                    }),
                    onPointerLeave: oe(r.onPointerLeave, () => {
                        c();
                    }),
                })
            );
        }),
        dd = "SelectSeparator",
        fd = D((e, t) => {
            const { __scopeSelect: n, ...o } = e;
            return m(re.div, { "aria-hidden": !0, ...o, ref: t });
        });
    fd.displayName = dd;
    var Mo = "SelectArrow",
        pd = D((e, t) => {
            const { __scopeSelect: n, ...o } = e,
                r = _n(n),
                i = Ge(Mo, n),
                a = Xe(Mo, n);
            return i.open && a.position === "popper" ? m(tu, { ...r, ...o, ref: t }) : null;
        });
    pd.displayName = Mo;
    function Da(e) {
        return e === "" || e === void 0;
    }
    var La = D((e, t) => {
        const { value: n, ...o } = e,
            r = O(null),
            i = ce(t, r),
            a = ru(n);
        return (
            I(() => {
                const s = r.current,
                    c = window.HTMLSelectElement.prototype,
                    d = Object.getOwnPropertyDescriptor(c, "value").set;
                if (a !== n && d) {
                    const u = new Event("change", { bubbles: !0 });
                    d.call(s, n), s.dispatchEvent(u);
                }
            }, [a, n]),
            m(ea, { asChild: !0, children: m("select", { ...o, ref: i, defaultValue: n }) })
        );
    });
    La.displayName = "BubbleSelect";
    function $a(e) {
        const t = Le(e),
            n = O(""),
            o = O(0),
            r = j(
                (a) => {
                    const s = n.current + a;
                    t(s),
                        (function c(l) {
                            (n.current = l), window.clearTimeout(o.current), l !== "" && (o.current = window.setTimeout(() => c(""), 1e3));
                        })(s);
                },
                [t]
            ),
            i = j(() => {
                (n.current = ""), window.clearTimeout(o.current);
            }, []);
        return I(() => () => window.clearTimeout(o.current), []), [n, r, i];
    }
    function Fa(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t,
            i = n ? e.indexOf(n) : -1;
        let a = hd(e, Math.max(i, 0));
        r.length === 1 && (a = a.filter((l) => l !== n));
        const c = a.find((l) => l.textValue.toLowerCase().startsWith(r.toLowerCase()));
        return c !== n ? c : void 0;
    }
    function hd(e, t) {
        return e.map((n, o) => e[(t + o) % e.length]);
    }
    var md = ha,
        _d = _a,
        vd = ga,
        gd = ya,
        yd = ba,
        bd = Sa,
        wd = Aa,
        xd = Ta,
        Cd = Oa,
        Sd = Na,
        kd = Ra;
    function Do(e, t) {
        if (e == null) return {};
        var n = {},
            o = Object.keys(e),
            r,
            i;
        for (i = 0; i < o.length; i++) (r = o[i]), !(t.indexOf(r) >= 0) && (n[r] = e[r]);
        return n;
    }
    var Ed = ["color"],
        Pd = D(function (e, t) {
            var n = e.color,
                o = n === void 0 ? "currentColor" : n,
                r = Do(e, Ed);
            return H(
                "svg",
                Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r, { ref: t }),
                H("path", {
                    d:
                        "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
                    fill: o,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                })
            );
        }),
        Ad = ["color"],
        Ba = D(function (e, t) {
            var n = e.color,
                o = n === void 0 ? "currentColor" : n,
                r = Do(e, Ad);
            return H(
                "svg",
                Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r, { ref: t }),
                H("path", {
                    d:
                        "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
                    fill: o,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                })
            );
        }),
        Td = ["color"],
        Id = D(function (e, t) {
            var n = e.color,
                o = n === void 0 ? "currentColor" : n,
                r = Do(e, Td);
            return H(
                "svg",
                Object.assign({ width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r, { ref: t }),
                H("path", {
                    d:
                        "M3.13523 8.84197C3.3241 9.04343 3.64052 9.05363 3.84197 8.86477L7.5 5.43536L11.158 8.86477C11.3595 9.05363 11.6759 9.04343 11.8648 8.84197C12.0536 8.64051 12.0434 8.32409 11.842 8.13523L7.84197 4.38523C7.64964 4.20492 7.35036 4.20492 7.15803 4.38523L3.15803 8.13523C2.95657 8.32409 2.94637 8.64051 3.13523 8.84197Z",
                    fill: o,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                })
            );
        });
    function Ua({ flagCode: e }) {
        return m("img", { className: C.flag, src: `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${e}.svg`, alt: `${e.toUpperCase()} flag` });
    }
    const Lo = {
            en: { name: "English", flagCode: "us", languageCode: "en" },
            zh: { name: "Chinese", flagCode: "cn", languageCode: "zh" },
            es: { name: "Spanish", flagCode: "es", languageCode: "es" },
            hi: { name: "Hindi", flagCode: "in", languageCode: "hi" },
            pt: { name: "Portuguese (Portugal)", flagCode: "pt", languageCode: "pt" },
            "pt-br": { name: "Portuguese (Brazil)", flagCode: "br", languageCode: "pt-br" },
            fr: { name: "French", flagCode: "fr", languageCode: "fr" },
            de: { name: "German", flagCode: "de", languageCode: "de" },
            ja: { name: "Japanese", flagCode: "jp", languageCode: "ja" },
            ar: { name: "Arabic", flagCode: "ae", languageCode: "ar" },
            ru: { name: "Russian", flagCode: "ru", languageCode: "ru" },
            ko: { name: "Korean", flagCode: "kr", languageCode: "ko" },
            id: { name: "Indonesian", flagCode: "id", languageCode: "id" },
            it: { name: "Italian", flagCode: "it", languageCode: "it" },
            nl: { name: "Dutch", flagCode: "nl", languageCode: "nl" },
            tr: { name: "Turkish", flagCode: "tr", languageCode: "tr" },
            pl: { name: "Polish", flagCode: "pl", languageCode: "pl" },
            sv: { name: "Swedish", flagCode: "se", languageCode: "sv" },
            fil: { name: "Filipino", flagCode: "ph", languageCode: "fi" },
            ms: { name: "Malay", flagCode: "my", languageCode: "ms" },
            ro: { name: "Romanian", flagCode: "ro", languageCode: "ro" },
            uk: { name: "Ukrainian", flagCode: "ua", languageCode: "uk" },
            el: { name: "Greek", flagCode: "gr", languageCode: "el" },
            cs: { name: "Czech", flagCode: "cz", languageCode: "cs" },
            da: { name: "Danish", flagCode: "dk", languageCode: "da" },
            fi: { name: "Finnish", flagCode: "fi", languageCode: "fi" },
            bg: { name: "Bulgarian", flagCode: "bg", languageCode: "bg" },
            hr: { name: "Croatian", flagCode: "hr", languageCode: "hr" },
            sk: { name: "Slovak", flagCode: "sk", languageCode: "sk" },
            ta: { name: "Tamil", flagCode: "in", languageCode: "ta" },
            hu: { name: "Hungarian", flagCode: "hu", languageCode: "hu" },
            no: { name: "Norwegian", flagCode: "no", languageCode: "no" },
            vi: { name: "Vietnamese", flagCode: "vn", languageCode: "vi" },
        },
        Wa = ue(null);
    function Od({ children: e }) {
        const t = ft(),
            n = he("language"),
            o = Gn(n.peek() ?? t.peek().language),
            r = nt(() => t.value.supported_language_overrides ?? []),
            i = K(
                () => ({
                    language: De(() => (r.value.includes(o.value) ? Lo[o.value] : Lo[t.value.language])),
                    setLanguage: (a) => {
                        o.value = a;
                    },
                    options: De(() =>
                        r.value
                            .map((a) => Lo[a])
                            .filter(Boolean)
                            .sort((a, s) => a.name.localeCompare(s.name))
                    ),
                }),
                []
            );
        return m(Wa.Provider, { value: i, children: e });
    }
    function $o() {
        return ot(Wa);
    }
    function Nd({ portal: e }) {
        const [t, n] = k(!1),
            { language: o, setLanguage: r, options: i } = $o();
        return i.value.length === 0
            ? null
            : m(md, {
                  open: t,
                  value: o.value.languageCode,
                  onValueChange: (a) => {
                      r(a), n(!1);
                  },
                  onOpenChange: (a) => {
                      a && n(!0);
                  },
                  children: [
                      m(_d, {
                          className: me(C.btn, C.secondary, C.select),
                          "aria-label": "Food",
                          children: [m(Ua, { flagCode: o.value.flagCode }), m("span", { className: C.selectValue, children: o.value.name }), m(vd, { className: C.selectIcon, children: m(Ba, {}) })],
                      }),
                      m(gd, {
                          container: e,
                          children: m(yd, {
                              className: C.selectContent,
                              position: "popper",
                              sideOffset: 8,
                              align: "end",
                              side: "top",
                              onPointerDownOutside: () => n(!1),
                              onCloseAutoFocus: () => n(!1),
                              onEscapeKeyDown: () => n(!1),
                              children: [
                                  m(Sd, { className: C.selectScrollButton, children: m(Id, {}) }),
                                  m(bd, {
                                      className: C.selectViewport,
                                      children: i.value.map((a) =>
                                          m(
                                              wd,
                                              {
                                                  value: a.languageCode,
                                                  className: me(C.selectItem),
                                                  children: [m(Ua, { flagCode: a.flagCode }), m(xd, { children: a.name }), m(Cd, { className: C.selectItemIndicator, children: m(Pd, {}) })],
                                              },
                                              a.languageCode
                                          )
                                      ),
                                  }),
                                  m(kd, { className: C.selectScrollButton, children: m(Ba, {}) }),
                              ],
                          }),
                      }),
                  ],
              });
    }
    function Rd({ value: e, children: t }) {
        const [n, o] = k(!1);
        return (
            I(() => {
                if (n) {
                    const r = setTimeout(() => {
                        o(!1);
                    }, 2e3);
                    return () => {
                        clearTimeout(r);
                    };
                }
            }, [n]),
            m("button", {
                className: me(C.btn, C.secondary),
                onClick: () => {
                    navigator.clipboard.writeText(e), o(!0);
                },
                children: n ? "Copied!" : t,
            })
        );
    }
    function Md(e) {
        const t = (i) => (typeof window < "u" ? window.matchMedia(i).matches : !1),
            [n, o] = k(t(e));
        function r() {
            o(t(e));
        }
        return (
            I(() => {
                const i = window.matchMedia(e);
                return (
                    r(),
                    i.addListener ? i.addListener(r) : i.addEventListener("change", r),
                    () => {
                        i.removeListener ? i.removeListener(r) : i.removeEventListener("change", r);
                    }
                );
            }, [e]),
            n
        );
    }
    const Dd = 1e3 * 30,
        Ld = 1e3 * 5,
        $d = ({ canSendFeedback: e, sendFeedback: t, isSpeaking: n, lastConversationId: o, isDisconnected: r }) => {
            const i = ft().value.feedback_mode,
                { serverUrl: a } = Xn(),
                [s, c] = k(0),
                [l, d] = k(e),
                [u, p] = k(o);
            I(() => {
                o != null && o !== u && (p(o), c(0));
            }, [o, u, p, c]),
                I(() => {
                    if (e) {
                        const f = setTimeout(() => {
                            d(!0);
                        }, Ld);
                        return () => clearTimeout(f);
                    } else d(!1);
                }, [e]);
            const [h, v] = K(
                () =>
                    r && o && (i === "end" || i === "during")
                        ? [
                              "Was the call helpful?",
                              (f) => {
                                  ec(o, f, a.peek()).catch(() => {
                                      console.error(`[ConversationalAI] Cannot send feedback for conversation ${o}`);
                                  }),
                                      c(Date.now());
                              },
                          ]
                        : Date.now() - s < Dd
                        ? []
                        : !r && l && i === "during"
                        ? [
                              "Is this response helpful?",
                              (f) => {
                                  t(f), c(Date.now());
                              },
                          ]
                        : [],
                [r, o, l, i, a, s, n]
            );
            return { lastFeedbackLabel: h ?? "", submitFeedback: v };
        },
        Fd = ({ onSubmit: e, text: t, error: n, show: o }) => m(Va, { show: o, onSubmit: e, text: t, error: n, inline: !0 }),
        Bd = ({ show: e, onSubmit: t, text: n, error: o }) => m(Va, { show: e, onSubmit: t, text: n, error: o, inline: !1 }),
        Va = Vt(({ onSubmit: e, text: t, error: n, show: o, inline: r }) =>
            m("div", {
                className: me(r ? C.inlineFeedback : C.feedback, o && !n && C.show),
                children: [
                    m("span", { className: C.feedbackText, children: t }),
                    m("button", { className: me(C.btn, !r && C.secondary, C.iconBtn), title: "Yes", onClick: () => (e == null ? void 0 : e(!0)), children: m(ic, { className: C.icon }) }),
                    m("button", { className: me(C.btn, !r && C.secondary, C.iconBtn), title: "No", onClick: () => (e == null ? void 0 : e(!1)), children: m(ac, { className: C.icon }) }),
                ],
            })
        ),
        Ha = ue(null);
    function Ud({ children: e }) {
        const t = ft(),
            n = Qr(),
            o = K(() => Object.fromEntries(Ur.map((r, i) => [r, De(() => n[Wr[i]].value ?? t.value[r] ?? Br[r])])), []);
        return m(Ha.Provider, { value: o, children: e });
    }
    function Wd() {
        return ot(Ha);
    }
    const za = ue(null);
    function Vd({ children: e }) {
        const { webSocketUrl: t } = Xn(),
            n = he("agent-id"),
            o = he("signed-url"),
            r = he("dynamic-variables"),
            { language: i } = $o(),
            a = nt(() => {
                if (r.value)
                    try {
                        return JSON.parse(r.value);
                    } catch (c) {
                        console.error(`[ConversationalAI] Cannot parse dynamic-variables: ${c == null ? void 0 : c.message}`);
                    }
            }),
            s = nt(() => {
                const c = { dynamicVariables: a.value, overrides: { agent: { language: i.value.languageCode } } };
                return n.value ? { agentId: n.value, origin: t.value, ...c } : o.value ? { signedUrl: o.value, ...c } : (console.error("[ConversationalAI] Either agent-id or signed-url is required"), null);
            });
        return s.value ? m(za.Provider, { value: s, children: e }) : null;
    }
    function Hd() {
        return ot(za);
    }
    const zd = () => !Md("(min-width: 768px)"),
        jd = ({ expandable: e, isMobile: t }) => {
            switch (e) {
                case "always":
                    return !0;
                case "mobile":
                    return t;
                case "desktop":
                    return !t;
                default:
                    return !1;
            }
        },
        qd = ({ allowExpanding: e, isOpen: t }) => (e ? t : !0),
        Kd = Vt(function () {
            const { terms_key: t, terms_html: n, expandable: o, variant: r, feedback_mode: i, disable_banner: a, show_avatar_when_collapsed: s } = ft().value,
                c = $o(),
                l = K(() => (t ? !!localStorage.getItem(t) : !1), [t]),
                d = Hd(),
                u = O(null),
                p = O(null),
                h = O(null),
                [v, f] = k(l),
                [_, y] = k(!1),
                [g, b] = k(null),
                [w, x] = k(!1),
                [E, S] = k(!1),
                [A, M] = k(null),
                F = nc({
                    onDisconnect: (N) => {
                        N.reason === "error" && (M(N.message), console.error("[ConversationalAI] Disconnected due to an error:", N.message));
                    },
                }),
                { startSession: L, endSession: W, sendFeedback: z, canSendFeedback: V, status: J, isSpeaking: B } = F,
                $ = J === "disconnected",
                R = zd(),
                q = jd({ expandable: o, isMobile: R }),
                ae = E || !q || !$,
                [le, Ae] = k(null),
                de = Wd();
            I(() => {
                if ($) {
                    const N = setTimeout(() => Ae(null), 3e5);
                    return () => clearTimeout(N);
                }
            }, [$]),
                I(() => () => W(), []),
                I(() => {
                    var N;
                    if (h.current) {
                        const U = () => {
                            let te = null;
                            for (const Je of h.current.assignedElements())
                                if (Je instanceof HTMLFormElement) {
                                    te = Je;
                                    break;
                                }
                            b(te), x((te == null ? void 0 : te.checkValidity()) ?? !1);
                        };
                        U();
                        const ee = h.current;
                        return ee.addEventListener("slotchange", U), () => ee.removeEventListener("slotchange", U);
                    } else b(p.current), x(((N = p.current) == null ? void 0 : N.checkValidity()) ?? !1);
                }, [n]),
                I(() => {
                    l || !g ? (y(!1), f(!0)) : !l && g && f(!1);
                }, [l, g]);
            async function Ce(N) {
                const U = new CustomEvent("elevenlabs-convai:call", { bubbles: !0, composed: !0, detail: { config: structuredClone(d.peek()) } });
                N.dispatchEvent(U), M(null);
                try {
                    const ee = await L(U.detail.config);
                    Ae(ee);
                } catch (ee) {
                    let te = "Could not start a conversation.";
                    ee instanceof CloseEvent ? (te = ee.reason || te) : ee instanceof Error && (te = ee.message || te), M(te);
                }
            }
            const Ze = qd({ allowExpanding: q, isOpen: ae }),
                { submitFeedback: pe, lastFeedbackLabel: T } = $d({ sendFeedback: z, canSendFeedback: V, lastConversationId: le, isDisconnected: $, isSpeaking: B }),
                Z = j(
                    (N) => {
                        pe && (pe(N), Ae(null));
                    },
                    [pe, Ae]
                ),
                ne = !!pe && i !== "none" && $ && !!le,
                Y = !ne && !!pe && i === "during" && !!le;
            return m("div", {
                ref: u,
                className: me(C.wrapper, ne ? C.compact : C[r], ae && C.open, (_ || A) && C.customContent, c.options.value.length && C.hasLanguageSelect),
                children: [
                    Ze && !a && m(hc, {}),
                    q &&
                        !ae &&
                        m("button", {
                            disabled: !$,
                            className: me(s && C.avatarButton, C.btn, C.minimize),
                            onClick: () => S(!E),
                            title: de.expand_text,
                            children: [
                                m(oc, { className: C.openContent }),
                                m("div", { className: C.closedContent, children: s ? m(ci, { ...F }) : m(ie, { children: [m(ii, { className: C.icon }), m("div", { className: C.ellipsis, children: de.expand_text })] }) }),
                            ],
                        }),
                    m("div", {
                        className: C.box,
                        children: [
                            A &&
                                m("div", {
                                    className: C.error,
                                    children: [
                                        m("h1", { children: "An error occurred" }),
                                        m("p", { children: A }),
                                        le && m("p", { children: ["Conversation ID: ", le] }),
                                        m("div", {
                                            className: C.termsFooter,
                                            children: [
                                                le && m(Rd, { value: le, children: "Copy ID" }),
                                                m("button", {
                                                    className: me(C.btn, C.secondary),
                                                    onClick: () => {
                                                        M(null);
                                                    },
                                                    children: "Close",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            m("div", {
                                className: me(C.terms, _ && !A && C.show),
                                children: [
                                    n
                                        ? m("form", {
                                              ref: p,
                                              onInput: () => {
                                                  x((g == null ? void 0 : g.checkValidity()) ?? !1);
                                              },
                                              dangerouslySetInnerHTML: { __html: n },
                                          })
                                        : m("slot", {
                                              onInput: () => {
                                                  x((g == null ? void 0 : g.checkValidity()) ?? !1);
                                              },
                                              ref: h,
                                              name: "terms",
                                          }),
                                    m("div", {
                                        class: C.termsFooter,
                                        children: [
                                            m("button", {
                                                className: me(C.btn, C.secondary),
                                                type: "button",
                                                onClick: () => {
                                                    y(!1);
                                                },
                                                children: "Cancel",
                                            }),
                                            m("button", {
                                                className: me(C.btn, !w && C.disabled),
                                                type: "button",
                                                onClick: (N) => {
                                                    g != null && g.reportValidity() && (f(!0), t && localStorage.setItem(t, "true"), y(!1), Ce(N.currentTarget));
                                                },
                                                children: "Agree",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            !_ &&
                                !A &&
                                (ne
                                    ? m(Fd, { show: ne, onSubmit: Z, text: T ?? "", error: A })
                                    : m(ie, {
                                          children: [
                                              m(ci, { ...F }),
                                              m("div", {
                                                  className: C.actions,
                                                  children: [
                                                      r !== "compact" && m("p", { className: C.status, children: $ ? de.action_text : B ? de.speaking_text : de.listening_text }),
                                                      $
                                                          ? m("div", {
                                                                className: C.actionButtons,
                                                                children: [
                                                                    m("button", {
                                                                        className: C.btn,
                                                                        title: de.start_call_text,
                                                                        onClick: (N) => {
                                                                            if (!v) {
                                                                                y(!0);
                                                                                return;
                                                                            }
                                                                            Ce(N.currentTarget);
                                                                        },
                                                                        children: [m(ii, { className: C.icon }), m("div", { className: C.ellipsis, children: de.start_call_text })],
                                                                    }),
                                                                    m(Nd, { portal: u.current ?? void 0 }),
                                                                ],
                                                            })
                                                          : m("button", {
                                                                className: me(C.btn, C.secondary),
                                                                title: de.end_call_text,
                                                                onClick: () => W(),
                                                                children: [m(rc, { className: C.icon }), m("div", { className: C.ellipsis, children: de.end_call_text })],
                                                            }),
                                                  ],
                                              }),
                                          ],
                                      })),
                        ],
                    }),
                    m(Bd, { show: Y, onSubmit: pe, text: T ?? "", error: A }),
                ],
            });
        });
    function Yd(e) {
        return m(Ls, { value: e, children: m(Ws, { children: m(Hs, { children: m(Od, { children: m(Vd, { children: m(Ud, { children: m(dc, { children: [m(js, {}), m(Kd, {})] }) }) }) }) }) }) });
    }
    ts(Yd, "elevenlabs-convai", Hn, { shadow: !0 });
});
