import {
    factorySpace as z
} from "../micromark-factory-space@v1.0.0/micromark-factory-space.js";
import {
    markdownLineEnding as w,
    markdownSpace as C,
    markdownLineEndingOrSpace as N
} from "../micromark-util-character@v1.1.0/micromark-util-character.js";
const S = {
        none: "",
        left: ' align="left"',
        right: ' align="right"',
        center: ' align="center"'
    },
    G = {
        enter: {
            table(e) {
                const n = e._align;
                this.lineEndingIfNeeded(), this.tag("<table>"), this.setData("tableAlign", n)
            },
            tableBody() {
                this.setData("slurpOneLineEnding"), this.tag("<tbody>")
            },
            tableData() {
                const e = this.getData("tableAlign"),
                    n = this.getData("tableColumn"),
                    i = S[e[n]];
                i === void 0 ? this.buffer() : (this.lineEndingIfNeeded(), this.tag("<td" + i + ">"))
            },
            tableHead() {
                this.lineEndingIfNeeded(), this.tag("<thead>")
            },
            tableHeader() {
                const e = this.getData("tableAlign"),
                    n = this.getData("tableColumn"),
                    i = S[e[n]];
                this.lineEndingIfNeeded(), this.tag("<th" + i + ">")
            },
            tableRow() {
                this.setData("tableColumn", 0), this.lineEndingIfNeeded(), this.tag("<tr>")
            }
        },
        exit: {
            codeTextData(e) {
                let n = this.sliceSerialize(e);
                this.getData("tableAlign") && (n = n.replace(/\\([\\|])/g, M)), this.raw(this.encode(n))
            },
            table() {
                this.setData("tableAlign"), this.setData("slurpAllLineEndings"), this.lineEndingIfNeeded(), this.tag("</table>")
            },
            tableBody() {
                this.lineEndingIfNeeded(), this.tag("</tbody>")
            },
            tableData() {
                const e = this.getData("tableAlign"),
                    n = this.getData("tableColumn");
                n in e ? (this.tag("</td>"), this.setData("tableColumn", n + 1)) : this.resume()
            },
            tableHead() {
                this.lineEndingIfNeeded(), this.tag("</thead>"), this.setData("slurpOneLineEnding", !0)
            },
            tableHeader() {
                const e = this.getData("tableColumn");
                this.tag("</th>"), this.setData("tableColumn", e + 1)
            },
            tableRow() {
                const e = this.getData("tableAlign");
                let n = this.getData("tableColumn");
                for (; n < e.length;) this.lineEndingIfNeeded(), this.tag("<td" + S[e[n]] + "></td>"), n++;
                this.setData("tableColumn", n), this.lineEndingIfNeeded(), this.tag("</tr>")
            }
        }
    };

function M(e, n) {
    return n === "|" ? n : e
}
const U = {
        flow: {
            null: {
                tokenize: Z,
                resolve: Y
            }
        }
    },
    _ = {
        tokenize: $,
        partial: !0
    };

function Y(e, n) {
    let i = -1,
        l, a, m, r, b, o, g;
    for (; ++i < e.length;) {
        const u = e[i][1];
        if (m && (u.type === "temporaryTableCellContent" && (r = r || i, b = i), (u.type === "tableCellDivider" || u.type === "tableRow") && b)) {
            const s = {
                    type: "tableContent",
                    start: e[r][1].start,
                    end: e[b][1].end
                },
                h = {
                    type: "chunkText",
                    start: s.start,
                    end: s.end,
                    contentType: "text"
                };
            e.splice(r, b - r + 1, ["enter", s, n], ["enter", h, n], ["exit", h, n], ["exit", s, n]), i -= b - r - 3, r = void 0, b = void 0
        }
        if (e[i][0] === "exit" && o !== void 0 && o + (g ? 0 : 1) < i && (u.type === "tableCellDivider" || u.type === "tableRow" && (o + 3 < i || e[o][1].type !== "whitespace"))) {
            const s = {
                type: a ? "tableDelimiter" : l ? "tableHeader" : "tableData",
                start: e[o][1].start,
                end: e[i][1].end
            };
            e.splice(i + (u.type === "tableCellDivider" ? 1 : 0), 0, ["exit", s, n]), e.splice(o, 0, ["enter", s, n]), i += 2, o = i + 1, g = !0
        }
        u.type === "tableRow" && (m = e[i][0] === "enter", m && (o = i + 1, g = !1)), u.type === "tableDelimiterRow" && (a = e[i][0] === "enter", a && (o = i + 1, g = !1)), u.type === "tableHead" && (l = e[i][0] === "enter")
    }
    return e
}

function Z(e, n, i) {
    const l = this,
        a = [];
    let m = 0,
        r, b;
    return o;

    function o(t) {
        return e.enter("table")._align = a, e.enter("tableHead"), e.enter("tableRow"), t === 124 ? g(t) : (m++, e.enter("temporaryTableCellContent"), h(t))
    }

    function g(t) {
        return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, u
    }

    function u(t) {
        return t === null || w(t) ? W(t) : C(t) ? (e.enter("whitespace"), e.consume(t), s) : (r && (r = void 0, m++), t === 124 ? g(t) : (e.enter("temporaryTableCellContent"), h(t)))
    }

    function s(t) {
        return C(t) ? (e.consume(t), s) : (e.exit("whitespace"), u(t))
    }

    function h(t) {
        return t === null || t === 124 || N(t) ? (e.exit("temporaryTableCellContent"), u(t)) : (e.consume(t), t === 92 ? F : h)
    }

    function F(t) {
        return t === 92 || t === 124 ? (e.consume(t), h) : h(t)
    }

    function W(t) {
        if (t === null) return i(t);
        e.exit("tableRow"), e.exit("tableHead");
        const E = l.interrupt;
        return l.interrupt = !0, e.attempt({
            tokenize: I,
            partial: !0
        }, function(p) {
            return l.interrupt = E, e.enter("tableDelimiterRow"), d(p)
        }, function(p) {
            return l.interrupt = E, i(p)
        })(t)
    }

    function d(t) {
        return t === null || w(t) ? v(t) : C(t) ? (e.enter("whitespace"), e.consume(t), H) : t === 45 ? (e.enter("tableDelimiterFiller"), e.consume(t), b = !0, a.push("none"), R) : t === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), a.push("left"), j) : t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), d) : i(t)
    }

    function H(t) {
        return C(t) ? (e.consume(t), H) : (e.exit("whitespace"), d(t))
    }

    function R(t) {
        return t === 45 ? (e.consume(t), R) : (e.exit("tableDelimiterFiller"), t === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), a[a.length - 1] = a[a.length - 1] === "left" ? "center" : "right", J) : d(t))
    }

    function j(t) {
        return t === 45 ? (e.enter("tableDelimiterFiller"), e.consume(t), b = !0, R) : i(t)
    }

    function J(t) {
        return t === null || w(t) ? v(t) : C(t) ? (e.enter("whitespace"), e.consume(t), H) : t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), d) : i(t)
    }

    function v(t) {
        return e.exit("tableDelimiterRow"), !b || m !== a.length ? i(t) : t === null ? x(t) : e.check(_, x, e.attempt({
            tokenize: I,
            partial: !0
        }, z(e, Q, "linePrefix", 4), x))(t)
    }

    function x(t) {
        return e.exit("table"), n(t)
    }

    function Q(t) {
        return e.enter("tableBody"), L(t)
    }

    function L(t) {
        return e.enter("tableRow"), t === 124 ? O(t) : (e.enter("temporaryTableCellContent"), y(t))
    }

    function O(t) {
        return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), A
    }

    function A(t) {
        return t === null || w(t) ? X(t) : C(t) ? (e.enter("whitespace"), e.consume(t), P) : t === 124 ? O(t) : (e.enter("temporaryTableCellContent"), y(t))
    }

    function P(t) {
        return C(t) ? (e.consume(t), P) : (e.exit("whitespace"), A(t))
    }

    function y(t) {
        return t === null || t === 124 || N(t) ? (e.exit("temporaryTableCellContent"), A(t)) : (e.consume(t), t === 92 ? V : y)
    }

    function V(t) {
        return t === 92 || t === 124 ? (e.consume(t), y) : y(t)
    }

    function X(t) {
        return e.exit("tableRow"), t === null ? B(t) : e.check(_, B, e.attempt({
            tokenize: I,
            partial: !0
        }, z(e, L, "linePrefix", 4), B))(t)
    }

    function B(t) {
        return e.exit("tableBody"), x(t)
    }

    function I(t, E, p) {
        return K;

        function K(D) {
            return t.enter("lineEnding"), t.consume(D), t.exit("lineEnding"), z(t, q, "linePrefix")
        }

        function q(D) {
            if (l.parser.lazy[l.now().line] || D === null || w(D)) return p(D);
            const k = l.events[l.events.length - 1];
            return !l.parser.constructs.disable.null.includes("codeIndented") && k && k[1].type === "linePrefix" && k[2].sliceSerialize(k[1], !0).length >= 4 ? p(D) : (l._gfmTableDynamicInterruptHack = !0, t.check(l.parser.constructs.flow, function(T) {
                return l._gfmTableDynamicInterruptHack = !1, p(T)
            }, function(T) {
                return l._gfmTableDynamicInterruptHack = !1, E(T)
            })(D))
        }
    }
}

function $(e, n, i) {
    let l = 0;
    return a;

    function a(r) {
        return e.enter("check"), e.consume(r), m
    }

    function m(r) {
        return r === -1 || r === 32 ? (e.consume(r), l++, l === 4 ? n : m) : r === null || N(r) ? n(r) : i(r)
    }
}
export {
    U as gfmTable, G as gfmTableHtml
};
export default null;