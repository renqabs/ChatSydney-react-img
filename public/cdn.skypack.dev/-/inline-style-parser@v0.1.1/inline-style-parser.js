var p = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    N = /\n/g,
    O = /^\s*/,
    d = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    G = /^:\s*/,
    I = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    P = /^[;\s]*/,
    S = /^\s+|\s+$/g,
    X = `
`,
    R = "/",
    A = "*",
    i = "",
    L = "comment",
    M = "declaration",
    C = function(e, c) {
        if (typeof e != "string") throw new TypeError("First argument must be a string");
        if (!e) return [];
        c = c || {};
        var o = 1,
            t = 1;

        function v(n) {
            var r = n.match(N);
            r && (o += r.length);
            var a = n.lastIndexOf(X);
            t = ~a ? n.length - a : t + n.length
        }

        function E() {
            var n = {
                line: o,
                column: t
            };
            return function(r) {
                return r.position = new f(n), m(), r
            }
        }

        function f(n) {
            this.start = n, this.end = {
                line: o,
                column: t
            }, this.source = c.source
        }
        f.prototype.content = e;

        function h(n) {
            var r = new Error(c.source + ":" + o + ":" + t + ": " + n);
            if (r.reason = n, r.filename = c.source, r.line = o, r.column = t, r.source = e, !c.silent) throw r
        }

        function u(n) {
            var r = n.exec(e);
            if (!r) return;
            var a = r[0];
            return v(a), e = e.slice(a.length), r
        }

        function m() {
            u(O)
        }

        function s(n) {
            var r;
            for (n = n || []; r = l();) r !== !1 && n.push(r);
            return n
        }

        function l() {
            var n = E();
            if (R != e.charAt(0) || A != e.charAt(1)) return;
            for (var r = 2; i != e.charAt(r) && (A != e.charAt(r) || R != e.charAt(r + 1));) ++r;
            if (r += 2, i === e.charAt(r - 1)) return h("End of comment missing");
            var a = e.slice(2, r - 2);
            return t += 2, v(a), e = e.slice(r), t += 2, n({
                type: L,
                comment: a
            })
        }

        function T() {
            var n = E(),
                r = u(d);
            if (!r) return;
            if (l(), !u(G)) return h("property missing ':'");
            var a = u(I),
                w = n({
                    type: M,
                    property: _(r[0].replace(p, i)),
                    value: a ? _(a[0].replace(p, i)) : i
                });
            return u(P), w
        }

        function g() {
            var n = [];
            s(n);
            for (var r; r = T();) r !== !1 && (n.push(r), s(n));
            return n
        }
        return m(), g()
    };

function _(e) {
    return e ? e.replace(S, i) : i
}
export default C;