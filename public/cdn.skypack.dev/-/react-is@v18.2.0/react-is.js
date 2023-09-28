function M(e, s, o) {
    return o = {
        path: s,
        exports: {},
        require: function(C, y) {
            return P(C, y == null ? o.path : y)
        }
    }, e(o, o.exports), o.exports
}

function P() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d = Symbol.for("react.element"),
    $ = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    x = Symbol.for("react.server_context"),
    f = Symbol.for("react.forward_ref"),
    l = Symbol.for("react.suspense"),
    v = Symbol.for("react.suspense_list"),
    m = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    F = Symbol.for("react.offscreen"),
    S;
S = Symbol.for("react.module.reference");

function t(e) {
    if (typeof e == "object" && e !== null) {
        var s = e.$$typeof;
        switch (s) {
            case d:
                switch (e = e.type, e) {
                    case n:
                    case a:
                    case i:
                    case l:
                    case v:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case x:
                            case c:
                            case f:
                            case p:
                            case m:
                            case u:
                                return e;
                            default:
                                return s
                        }
                }
            case $:
                return s
        }
    }
}
var L = c,
    b = u,
    E = d,
    w = f,
    g = n,
    z = p,
    R = m,
    _ = $,
    h = a,
    j = i,
    A = l,
    O = v,
    T = function() {
        return !1
    },
    V = function() {
        return !1
    },
    q = function(e) {
        return t(e) === c
    },
    I = function(e) {
        return t(e) === u
    },
    k = function(e) {
        return typeof e == "object" && e !== null && e.$$typeof === d
    },
    D = function(e) {
        return t(e) === f
    },
    B = function(e) {
        return t(e) === n
    },
    G = function(e) {
        return t(e) === p
    },
    H = function(e) {
        return t(e) === m
    },
    J = function(e) {
        return t(e) === $
    },
    K = function(e) {
        return t(e) === a
    },
    N = function(e) {
        return t(e) === i
    },
    Q = function(e) {
        return t(e) === l
    },
    U = function(e) {
        return t(e) === v
    },
    W = function(e) {
        return typeof e == "string" || typeof e == "function" || e === n || e === a || e === i || e === l || e === v || e === F || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === m || e.$$typeof === u || e.$$typeof === c || e.$$typeof === f || e.$$typeof === S || e.getModuleId !== void 0)
    },
    X = t,
    Y = {
        ContextConsumer: L,
        ContextProvider: b,
        Element: E,
        ForwardRef: w,
        Fragment: g,
        Lazy: z,
        Memo: R,
        Portal: _,
        Profiler: h,
        StrictMode: j,
        Suspense: A,
        SuspenseList: O,
        isAsyncMode: T,
        isConcurrentMode: V,
        isContextConsumer: q,
        isContextProvider: I,
        isElement: k,
        isForwardRef: D,
        isFragment: B,
        isLazy: G,
        isMemo: H,
        isPortal: J,
        isProfiler: K,
        isStrictMode: N,
        isSuspense: Q,
        isSuspenseList: U,
        isValidElementType: W,
        typeOf: X
    },
    r = M(function(e) {
        e.exports = Y
    }),
    Z = r.ContextConsumer,
    ee = r.ContextProvider,
    re = r.Element,
    te = r.ForwardRef,
    se = r.Fragment,
    oe = r.Lazy,
    ne = r.Memo,
    ie = r.Portal,
    ae = r.Profiler,
    ue = r.StrictMode,
    ce = r.Suspense,
    fe = r.SuspenseList;
export default r;
var le = r.isAsyncMode,
    ve = r.isConcurrentMode,
    me = r.isContextConsumer,
    pe = r.isContextProvider,
    ye = r.isElement,
    de = r.isForwardRef,
    $e = r.isFragment,
    Se = r.isLazy,
    Ce = r.isMemo,
    Me = r.isPortal,
    Pe = r.isProfiler,
    xe = r.isStrictMode,
    Fe = r.isSuspense,
    Le = r.isSuspenseList,
    be = r.isValidElementType,
    Ee = r.typeOf;
export {
    Z as ContextConsumer, ee as ContextProvider, re as Element, te as ForwardRef, se as Fragment, oe as Lazy, ne as Memo, ie as Portal, ae as Profiler, ue as StrictMode, ce as Suspense, fe as SuspenseList, r as __moduleExports, le as isAsyncMode, ve as isConcurrentMode, me as isContextConsumer, pe as isContextProvider, ye as isElement, de as isForwardRef, $e as isFragment, Se as isLazy, Ce as isMemo, Me as isPortal, Pe as isProfiler, xe as isStrictMode, Fe as isSuspense, Le as isSuspenseList, be as isValidElementType, Ee as typeOf
};