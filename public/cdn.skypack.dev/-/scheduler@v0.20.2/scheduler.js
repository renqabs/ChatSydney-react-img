function J(P, l, o) {
    return o = {
        path: l,
        exports: {},
        require: function(v, b) {
            return X(v, b == null ? o.path : b)
        }
    }, P(o, o.exports), o.exports
}

function X() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
}
var Z = J(function(P, l) {
        var o, v, b, E;
        if (typeof performance == "object" && typeof performance.now == "function") {
            var K = performance;
            l.unstable_now = function() {
                return K.now()
            }
        } else {
            var Y = Date,
                O = Y.now();
            l.unstable_now = function() {
                return Y.now() - O
            }
        }
        if (typeof window == "undefined" || typeof MessageChannel != "function") {
            var h = null,
                U = null,
                W = function() {
                    if (h !== null) try {
                        var n = l.unstable_now();
                        h(!0, n), h = null
                    } catch (e) {
                        throw setTimeout(W, 0), e
                    }
                };
            o = function(n) {
                h !== null ? setTimeout(o, 0, n) : (h = n, setTimeout(W, 0))
            }, v = function(n, e) {
                U = setTimeout(n, e)
            }, b = function() {
                clearTimeout(U)
            }, l.unstable_shouldYield = function() {
                return !1
            }, E = l.unstable_forceFrameRate = function() {}
        } else {
            var Q = window.setTimeout,
                S = window.clearTimeout;
            if (typeof console != "undefined") {
                var V = window.cancelAnimationFrame;
                typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof V != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
            }
            var g = !1,
                T = null,
                M = -1,
                A = 5,
                D = 0;
            l.unstable_shouldYield = function() {
                return l.unstable_now() >= D
            }, E = function() {}, l.unstable_forceFrameRate = function(n) {
                0 > n || 125 < n ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < n ? Math.floor(1e3 / n) : 5
            };
            var H = new MessageChannel,
                L = H.port2;
            H.port1.onmessage = function() {
                if (T !== null) {
                    var n = l.unstable_now();
                    D = n + A;
                    try {
                        T(!0, n) ? L.postMessage(null) : (g = !1, T = null)
                    } catch (e) {
                        throw L.postMessage(null), e
                    }
                } else g = !1
            }, o = function(n) {
                T = n, g || (g = !0, L.postMessage(null))
            }, v = function(n, e) {
                M = Q(function() {
                    n(l.unstable_now())
                }, e)
            }, b = function() {
                S(M), M = -1
            }
        }

        function q(n, e) {
            var t = n.length;
            n.push(e);
            n: for (;;) {
                var r = t - 1 >>> 1,
                    i = n[r];
                if (i !== void 0 && 0 < I(i, e)) n[r] = e, n[t] = i, t = r;
                else break n
            }
        }

        function c(n) {
            return n = n[0], n === void 0 ? null : n
        }

        function C(n) {
            var e = n[0];
            if (e !== void 0) {
                var t = n.pop();
                if (t !== e) {
                    n[0] = t;
                    n: for (var r = 0, i = n.length; r < i;) {
                        var y = 2 * (r + 1) - 1,
                            m = n[y],
                            p = y + 1,
                            w = n[p];
                        if (m !== void 0 && 0 > I(m, t)) w !== void 0 && 0 > I(w, m) ? (n[r] = w, n[p] = t, r = p) : (n[r] = m, n[y] = t, r = y);
                        else if (w !== void 0 && 0 > I(w, t)) n[r] = w, n[p] = t, r = p;
                        else break n
                    }
                }
                return e
            }
            return null
        }

        function I(n, e) {
            var t = n.sortIndex - e.sortIndex;
            return t !== 0 ? t : n.id - e.id
        }
        var f = [],
            _ = [],
            z = 1,
            s = null,
            u = 3,
            F = !1,
            d = !1,
            k = !1;

        function j(n) {
            for (var e = c(_); e !== null;) {
                if (e.callback === null) C(_);
                else if (e.startTime <= n) C(_), e.sortIndex = e.expirationTime, q(f, e);
                else break;
                e = c(_)
            }
        }

        function N(n) {
            if (k = !1, j(n), !d)
                if (c(f) !== null) d = !0, o(R);
                else {
                    var e = c(_);
                    e !== null && v(N, e.startTime - n)
                }
        }

        function R(n, e) {
            d = !1, k && (k = !1, b()), F = !0;
            var t = u;
            try {
                for (j(e), s = c(f); s !== null && (!(s.expirationTime > e) || n && !l.unstable_shouldYield());) {
                    var r = s.callback;
                    if (typeof r == "function") {
                        s.callback = null, u = s.priorityLevel;
                        var i = r(s.expirationTime <= e);
                        e = l.unstable_now(), typeof i == "function" ? s.callback = i : s === c(f) && C(f), j(e)
                    } else C(f);
                    s = c(f)
                }
                if (s !== null) var y = !0;
                else {
                    var m = c(_);
                    m !== null && v(N, m.startTime - e), y = !1
                }
                return y
            } finally {
                s = null, u = t, F = !1
            }
        }
        var B = E;
        l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(n) {
            n.callback = null
        }, l.unstable_continueExecution = function() {
            d || F || (d = !0, o(R))
        }, l.unstable_getCurrentPriorityLevel = function() {
            return u
        }, l.unstable_getFirstCallbackNode = function() {
            return c(f)
        }, l.unstable_next = function(n) {
            switch (u) {
                case 1:
                case 2:
                case 3:
                    var e = 3;
                    break;
                default:
                    e = u
            }
            var t = u;
            u = e;
            try {
                return n()
            } finally {
                u = t
            }
        }, l.unstable_pauseExecution = function() {}, l.unstable_requestPaint = B, l.unstable_runWithPriority = function(n, e) {
            switch (n) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    n = 3
            }
            var t = u;
            u = n;
            try {
                return e()
            } finally {
                u = t
            }
        }, l.unstable_scheduleCallback = function(n, e, t) {
            var r = l.unstable_now();
            typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? r + t : r) : t = r;
            switch (n) {
                case 1:
                    var i = -1;
                    break;
                case 2:
                    i = 250;
                    break;
                case 5:
                    i = 1073741823;
                    break;
                case 4:
                    i = 1e4;
                    break;
                default:
                    i = 5e3
            }
            return i = t + i, n = {
                id: z++,
                callback: e,
                priorityLevel: n,
                startTime: t,
                expirationTime: i,
                sortIndex: -1
            }, t > r ? (n.sortIndex = t, q(_, n), c(f) === null && n === c(_) && (k ? b() : k = !0, v(N, t - r))) : (n.sortIndex = i, q(f, n), d || F || (d = !0, o(R))), n
        }, l.unstable_wrapCallback = function(n) {
            var e = u;
            return function() {
                var t = u;
                u = e;
                try {
                    return n.apply(this, arguments)
                } finally {
                    u = t
                }
            }
        }
    }),
    a = J(function(P) {
        P.exports = Z
    });
export default a;
var $ = a.unstable_IdlePriority,
    x = a.unstable_ImmediatePriority,
    G = a.unstable_LowPriority,
    nn = a.unstable_NormalPriority,
    en = a.unstable_Profiling,
    tn = a.unstable_UserBlockingPriority,
    ln = a.unstable_cancelCallback,
    rn = a.unstable_continueExecution,
    an = a.unstable_forceFrameRate,
    un = a.unstable_getCurrentPriorityLevel,
    on = a.unstable_getFirstCallbackNode,
    sn = a.unstable_next,
    cn = a.unstable_now,
    fn = a.unstable_pauseExecution,
    bn = a.unstable_requestPaint,
    _n = a.unstable_runWithPriority,
    vn = a.unstable_scheduleCallback,
    dn = a.unstable_shouldYield,
    yn = a.unstable_wrapCallback;
export {
    a as __moduleExports, $ as unstable_IdlePriority, x as unstable_ImmediatePriority, G as unstable_LowPriority, nn as unstable_NormalPriority, en as unstable_Profiling, tn as unstable_UserBlockingPriority, ln as unstable_cancelCallback, rn as unstable_continueExecution, an as unstable_forceFrameRate, un as unstable_getCurrentPriorityLevel, on as unstable_getFirstCallbackNode, sn as unstable_next, cn as unstable_now, fn as unstable_pauseExecution, bn as unstable_requestPaint, _n as unstable_runWithPriority, vn as unstable_scheduleCallback, dn as unstable_shouldYield, yn as unstable_wrapCallback
};