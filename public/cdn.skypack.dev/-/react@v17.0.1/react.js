import j from "../object-assign@v4.1.1/object-assign.js";

function B(h, t, s) {
    return s = {
        path: t,
        exports: {},
        require: function(E, m) {
            return G(E, m == null ? s.path : m)
        }
    }, h(s, s.exports), s.exports
}

function G() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
}
var J = B(function(h, t) {
        var s = 60103,
            E = 60106;
        t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
        var m = 60109,
            P = 60110,
            w = 60112;
        t.Suspense = 60113;
        var I = 60115,
            L = 60116;
        if (typeof Symbol == "function" && Symbol.for) {
            var p = Symbol.for;
            s = p("react.element"), E = p("react.portal"), t.Fragment = p("react.fragment"), t.StrictMode = p("react.strict_mode"), t.Profiler = p("react.profiler"), m = p("react.provider"), P = p("react.context"), w = p("react.forward_ref"), t.Suspense = p("react.suspense"), I = p("react.memo"), L = p("react.lazy")
        }
        var F = typeof Symbol == "function" && Symbol.iterator;

        function z(e) {
            return e === null || typeof e != "object" ? null : (e = F && e[F] || e["@@iterator"], typeof e == "function" ? e : null)
        }

        function _(e) {
            for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) r += "&args[]=" + encodeURIComponent(arguments[n]);
            return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        var A = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            D = {};

        function d(e, r, n) {
            this.props = e, this.context = r, this.refs = D, this.updater = n || A
        }
        d.prototype.isReactComponent = {}, d.prototype.setState = function(e, r) {
            if (typeof e != "object" && typeof e != "function" && e != null) throw Error(_(85));
            this.updater.enqueueSetState(this, e, r, "setState")
        }, d.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        };

        function M() {}
        M.prototype = d.prototype;

        function S(e, r, n) {
            this.props = e, this.context = r, this.refs = D, this.updater = n || A
        }
        var g = S.prototype = new M;
        g.constructor = S, j(g, d.prototype), g.isPureReactComponent = !0;
        var k = {
                current: null
            },
            U = Object.prototype.hasOwnProperty,
            N = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };

        function T(e, r, n) {
            var i, o = {},
                f = null,
                a = null;
            if (r != null)
                for (i in r.ref !== void 0 && (a = r.ref), r.key !== void 0 && (f = "" + r.key), r) U.call(r, i) && !N.hasOwnProperty(i) && (o[i] = r[i]);
            var l = arguments.length - 2;
            if (l === 1) o.children = n;
            else if (1 < l) {
                for (var c = Array(l), y = 0; y < l; y++) c[y] = arguments[y + 2];
                o.children = c
            }
            if (e && e.defaultProps)
                for (i in l = e.defaultProps, l) o[i] === void 0 && (o[i] = l[i]);
            return {
                $$typeof: s,
                type: e,
                key: f,
                ref: a,
                props: o,
                _owner: k.current
            }
        }

        function H(e, r) {
            return {
                $$typeof: s,
                type: e.type,
                key: r,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }

        function $(e) {
            return typeof e == "object" && e !== null && e.$$typeof === s
        }

        function W(e) {
            var r = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, function(n) {
                return r[n]
            })
        }
        var q = /\/+/g;

        function O(e, r) {
            return typeof e == "object" && e !== null && e.key != null ? W("" + e.key) : r.toString(36)
        }

        function C(e, r, n, i, o) {
            var f = typeof e;
            (f === "undefined" || f === "boolean") && (e = null);
            var a = !1;
            if (e === null) a = !0;
            else switch (f) {
                case "string":
                case "number":
                    a = !0;
                    break;
                case "object":
                    switch (e.$$typeof) {
                        case s:
                        case E:
                            a = !0
                    }
            }
            if (a) return a = e, o = o(a), e = i === "" ? "." + O(a, 0) : i, Array.isArray(o) ? (n = "", e != null && (n = e.replace(q, "$&/") + "/"), C(o, r, n, "", function(y) {
                return y
            })) : o != null && ($(o) && (o = H(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(q, "$&/") + "/") + e)), r.push(o)), 1;
            if (a = 0, i = i === "" ? "." : i + ":", Array.isArray(e))
                for (var l = 0; l < e.length; l++) {
                    f = e[l];
                    var c = i + O(f, l);
                    a += C(f, r, n, c, o)
                } else if (c = z(e), typeof c == "function")
                    for (e = c.call(e), l = 0; !(f = e.next()).done;) f = f.value, c = i + O(f, l++), a += C(f, r, n, c, o);
                else if (f === "object") throw r = "" + e, Error(_(31, r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r));
            return a
        }

        function R(e, r, n) {
            if (e == null) return e;
            var i = [],
                o = 0;
            return C(e, i, "", "", function(f) {
                return r.call(n, f, o++)
            }), i
        }

        function Y(e) {
            if (e._status === -1) {
                var r = e._result;
                r = r(), e._status = 0, e._result = r, r.then(function(n) {
                    e._status === 0 && (n = n.default, e._status = 1, e._result = n)
                }, function(n) {
                    e._status === 0 && (e._status = 2, e._result = n)
                })
            }
            if (e._status === 1) return e._result;
            throw e._result
        }
        var V = {
            current: null
        };

        function v() {
            var e = V.current;
            if (e === null) throw Error(_(321));
            return e
        }
        var b = {
            ReactCurrentDispatcher: V,
            ReactCurrentBatchConfig: {
                transition: 0
            },
            ReactCurrentOwner: k,
            IsSomeRendererActing: {
                current: !1
            },
            assign: j
        };
        t.Children = {
            map: R,
            forEach: function(e, r, n) {
                R(e, function() {
                    r.apply(this, arguments)
                }, n)
            },
            count: function(e) {
                var r = 0;
                return R(e, function() {
                    r++
                }), r
            },
            toArray: function(e) {
                return R(e, function(r) {
                    return r
                }) || []
            },
            only: function(e) {
                if (!$(e)) throw Error(_(143));
                return e
            }
        }, t.Component = d, t.PureComponent = S, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b, t.cloneElement = function(e, r, n) {
            if (e == null) throw Error(_(267, e));
            var i = j({}, e.props),
                o = e.key,
                f = e.ref,
                a = e._owner;
            if (r != null) {
                if (r.ref !== void 0 && (f = r.ref, a = k.current), r.key !== void 0 && (o = "" + r.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                for (c in r) U.call(r, c) && !N.hasOwnProperty(c) && (i[c] = r[c] === void 0 && l !== void 0 ? l[c] : r[c])
            }
            var c = arguments.length - 2;
            if (c === 1) i.children = n;
            else if (1 < c) {
                l = Array(c);
                for (var y = 0; y < c; y++) l[y] = arguments[y + 2];
                i.children = l
            }
            return {
                $$typeof: s,
                type: e.type,
                key: o,
                ref: f,
                props: i,
                _owner: a
            }
        }, t.createContext = function(e, r) {
            return r === void 0 && (r = null), e = {
                $$typeof: P,
                _calculateChangedBits: r,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, e.Provider = {
                $$typeof: m,
                _context: e
            }, e.Consumer = e
        }, t.createElement = T, t.createFactory = function(e) {
            var r = T.bind(null, e);
            return r.type = e, r
        }, t.createRef = function() {
            return {
                current: null
            }
        }, t.forwardRef = function(e) {
            return {
                $$typeof: w,
                render: e
            }
        }, t.isValidElement = $, t.lazy = function(e) {
            return {
                $$typeof: L,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: Y
            }
        }, t.memo = function(e, r) {
            return {
                $$typeof: I,
                type: e,
                compare: r === void 0 ? null : r
            }
        }, t.useCallback = function(e, r) {
            return v().useCallback(e, r)
        }, t.useContext = function(e, r) {
            return v().useContext(e, r)
        }, t.useDebugValue = function() {}, t.useEffect = function(e, r) {
            return v().useEffect(e, r)
        }, t.useImperativeHandle = function(e, r, n) {
            return v().useImperativeHandle(e, r, n)
        }, t.useLayoutEffect = function(e, r) {
            return v().useLayoutEffect(e, r)
        }, t.useMemo = function(e, r) {
            return v().useMemo(e, r)
        }, t.useReducer = function(e, r, n) {
            return v().useReducer(e, r, n)
        }, t.useRef = function(e) {
            return v().useRef(e)
        }, t.useState = function(e) {
            return v().useState(e)
        }, t.version = "17.0.1"
    }),
    u = B(function(h) {
        h.exports = J
    }),
    K = u.Children,
    Q = u.Component,
    X = u.Fragment,
    Z = u.Profiler,
    x = u.PureComponent,
    ee = u.StrictMode,
    re = u.Suspense,
    te = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ne = u.cloneElement,
    ue = u.createContext,
    oe = u.createElement,
    ie = u.createFactory,
    ce = u.createRef;
export default u;
var fe = u.forwardRef,
    le = u.isValidElement,
    ae = u.lazy,
    se = u.memo,
    pe = u.useCallback,
    ye = u.useContext,
    ve = u.useDebugValue,
    me = u.useEffect,
    de = u.useImperativeHandle,
    _e = u.useLayoutEffect,
    he = u.useMemo,
    Ee = u.useReducer,
    Ce = u.useRef,
    Re = u.useState,
    Se = u.version;
export {
    K as Children, Q as Component, X as Fragment, Z as Profiler, x as PureComponent, ee as StrictMode, re as Suspense, te as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, u as __moduleExports, ne as cloneElement, ue as createContext, oe as createElement, ie as createFactory, ce as createRef, fe as forwardRef, le as isValidElement, ae as lazy, se as memo, pe as useCallback, ye as useContext, ve as useDebugValue, me as useEffect, de as useImperativeHandle, _e as useLayoutEffect, he as useMemo, Ee as useReducer, Ce as useRef, Re as useState, Se as version
};