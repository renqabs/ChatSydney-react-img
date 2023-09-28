import {
    bail as E
} from "../bail@v2.0.2/bail.js";
import M from "../is-buffer@v2.0.5/is-buffer.js";
import b from "../extend@v3.0.2/extend.js";
import h from "../is-plain-obj@v4.0.0/is-plain-obj.js";
import {
    trough as U
} from "../trough@v2.1.0/trough.js";
import {
    VFile as B
} from "../vfile@v5.3.2/vfile.js";
const K = P().freeze(),
    x = {}.hasOwnProperty;

function P() {
    const t = U(),
        s = [];
    let l = {},
        y, g = -1;
    return n.data = I, n.Parser = void 0, n.Compiler = void 0, n.freeze = F, n.attachers = s, n.use = O, n.parse = V, n.stringify = X, n.run = G, n.runSync = N, n.process = J, n.processSync = L, n;

    function n() {
        const e = P();
        let r = -1;
        for (; ++r < s.length;) e.use(...s[r]);
        return e.data(b(!0, {}, l)), e
    }

    function I(e, r) {
        return typeof e == "string" ? arguments.length === 2 ? (j("data", y), l[e] = r, n) : x.call(l, e) && l[e] || null : e ? (j("data", y), l = e, n) : l
    }

    function F() {
        if (y) return n;
        for (; ++g < s.length;) {
            const [e, ...r] = s[g];
            if (r[0] === !1) continue;
            r[0] === !0 && (r[0] = void 0);
            const i = e.call(n, ...r);
            typeof i == "function" && t.use(i)
        }
        return y = !0, g = Number.POSITIVE_INFINITY, n
    }

    function O(e, ...r) {
        let i;
        if (j("use", y), !(e == null))
            if (typeof e == "function") m(e, ...r);
            else if (typeof e == "object") Array.isArray(e) ? a(e) : p(e);
        else throw new TypeError("Expected usable value, not `" + e + "`");
        return i && (l.settings = Object.assign(l.settings || {}, i)), n;

        function u(o) {
            if (typeof o == "function") m(o);
            else if (typeof o == "object")
                if (Array.isArray(o)) {
                    const [f, ...c] = o;
                    m(f, ...c)
                } else p(o);
            else throw new TypeError("Expected usable value, not `" + o + "`")
        }

        function p(o) {
            a(o.plugins), o.settings && (i = Object.assign(i || {}, o.settings))
        }

        function a(o) {
            let f = -1;
            if (!(o == null))
                if (Array.isArray(o))
                    for (; ++f < o.length;) {
                        const c = o[f];
                        u(c)
                    } else throw new TypeError("Expected a list of plugins, not `" + o + "`")
        }

        function m(o, f) {
            let c = -1,
                d;
            for (; ++c < s.length;)
                if (s[c][0] === o) {
                    d = s[c];
                    break
                }
            d ? (h(d[1]) && h(f) && (f = b(!0, d[1], f)), d[1] = f) : s.push([...arguments])
        }
    }

    function V(e) {
        n.freeze();
        const r = w(e),
            i = n.Parser;
        return z("parse", i), A(i, "parse") ? new i(String(r), r).parse() : i(String(r), r)
    }

    function X(e, r) {
        n.freeze();
        const i = w(r),
            u = n.Compiler;
        return S("stringify", u), C(e), A(u, "compile") ? new u(e, i).compile() : u(e, i)
    }

    function G(e, r, i) {
        if (C(e), n.freeze(), !i && typeof r == "function" && (i = r, r = void 0), !i) return new Promise(u);
        u(null, i);

        function u(p, a) {
            t.run(e, w(r), m);

            function m(o, f, c) {
                f = f || e, o ? a(o) : p ? p(f) : i(null, f, c)
            }
        }
    }

    function N(e, r) {
        let i, u;
        return n.run(e, r, p), T("runSync", "run", u), i;

        function p(a, m) {
            E(a), i = m, u = !0
        }
    }

    function J(e, r) {
        if (n.freeze(), z("process", n.Parser), S("process", n.Compiler), !r) return new Promise(i);
        i(null, r);

        function i(u, p) {
            const a = w(e);
            n.run(n.parse(a), a, (o, f, c) => {
                if (o || !f || !c) m(o);
                else {
                    const d = n.stringify(f, c);
                    d == null || (q(d) ? c.value = d : c.result = d), m(o, c)
                }
            });

            function m(o, f) {
                o || !f ? p(o) : u ? u(f) : r(null, f)
            }
        }
    }

    function L(e) {
        let r;
        n.freeze(), z("processSync", n.Parser), S("processSync", n.Compiler);
        const i = w(e);
        return n.process(i, u), T("processSync", "process", r), i;

        function u(p) {
            r = !0, E(p)
        }
    }
}

function A(t, s) {
    return typeof t == "function" && t.prototype && (Q(t.prototype) || s in t.prototype)
}

function Q(t) {
    let s;
    for (s in t)
        if (x.call(t, s)) return !0;
    return !1
}

function z(t, s) {
    if (typeof s != "function") throw new TypeError("Cannot `" + t + "` without `Parser`")
}

function S(t, s) {
    if (typeof s != "function") throw new TypeError("Cannot `" + t + "` without `Compiler`")
}

function j(t, s) {
    if (s) throw new Error("Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function C(t) {
    if (!h(t) || typeof t.type != "string") throw new TypeError("Expected node, got `" + t + "`")
}

function T(t, s, l) {
    if (!l) throw new Error("`" + t + "` finished async. Use `" + s + "` instead")
}

function w(t) {
    return Y(t) ? t : new B(t)
}

function Y(t) {
    return Boolean(t && typeof t == "object" && "message" in t && "messages" in t)
}

function q(t) {
    return typeof t == "string" || M(t)
}
export {
    K as unified
};
export default null;