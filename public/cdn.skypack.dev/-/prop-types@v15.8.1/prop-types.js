function y(r, n, t) {
    return t = {
        path: n,
        exports: {},
        require: function(o, a) {
            return u(o, a == null ? t.path : a)
        }
    }, r(t, t.exports), t.exports
}

function u() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
}
var f = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    v = f;

function c() {}

function i() {}
i.resetWarningCache = c;
var m = function() {
        function r(o, a, D, L, U, s) {
            if (s === v) return;
            var p = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw p.name = "Invariant Violation", p
        }
        r.isRequired = r;

        function n() {
            return r
        }
        var t = {
            array: r,
            bigint: r,
            bool: r,
            func: r,
            number: r,
            object: r,
            string: r,
            symbol: r,
            any: r,
            arrayOf: n,
            element: r,
            elementType: r,
            instanceOf: n,
            node: r,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: i,
            resetWarningCache: c
        };
        return t.PropTypes = t, t
    },
    e = y(function(r) {
        r.exports = m()
    }),
    l = e.PropTypes,
    h = e.any,
    T = e.array,
    b = e.arrayOf,
    O = e.bigint,
    g = e.bool,
    P = e.checkPropTypes;
export default e;
var _ = e.element,
    d = e.elementType,
    x = e.exact,
    R = e.func,
    j = e.instanceOf,
    S = e.node,
    C = e.number,
    E = e.object,
    W = e.objectOf,
    k = e.oneOf,
    w = e.oneOfType,
    q = e.resetWarningCache,
    F = e.shape,
    I = e.string,
    N = e.symbol;
export {
    l as PropTypes, e as __moduleExports, h as any, T as array, b as arrayOf, O as bigint, g as bool, P as checkPropTypes, _ as element, d as elementType, x as exact, R as func, j as instanceOf, S as node, C as number, E as object, W as objectOf, k as oneOf, w as oneOfType, q as resetWarningCache, F as shape, I as string, N as symbol
};