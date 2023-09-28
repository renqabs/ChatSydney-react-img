import {
    containerPhrasing as x
} from "../mdast-util-to-markdown@v1.2.6/lib/util/container-phrasing.js";
import {
    inlineCode as k
} from "../mdast-util-to-markdown@v1.2.6/lib/handle/inline-code.js";
import {
    markdownTable as v
} from "../markdown-table@v3.0.2/markdown-table.js";
const D = {
    enter: {
        table: R,
        tableData: m,
        tableHeader: m,
        tableRow: B
    },
    exit: {
        codeText: q,
        table: y,
        tableData: c,
        tableHeader: c,
        tableRow: c
    }
};

function R(e) {
    const l = e._align;
    this.enter({
        type: "table",
        align: l,
        children: []
    }, e), this.setData("inTable", !0)
}

function y(e) {
    this.exit(e), this.setData("inTable")
}

function B(e) {
    this.enter({
        type: "tableRow",
        children: []
    }, e)
}

function c(e) {
    this.exit(e)
}

function m(e) {
    this.enter({
        type: "tableCell",
        children: []
    }, e)
}

function q(e) {
    let l = this.resume();
    this.getData("inTable") && (l = l.replace(/\\([\\|])/g, z));
    const s = this.stack[this.stack.length - 1];
    s.value = l, this.exit(e)
}

function z(e, l) {
    return l === "|" ? l : e
}

function _(e) {
    const l = e || {},
        s = l.tableCellPadding,
        f = l.tablePipeAlign,
        g = l.stringLength,
        u = s ? " " : "|";
    return {
        unsafe: [{
            character: "\r",
            inConstruct: "tableCell"
        }, {
            character: `
`,
            inConstruct: "tableCell"
        }, {
            atBreak: !0,
            character: "|",
            after: "[	 :-]"
        }, {
            character: "|",
            inConstruct: "tableCell"
        }, {
            atBreak: !0,
            character: ":",
            after: "-"
        }, {
            atBreak: !0,
            character: "-",
            after: "[:|-]"
        }],
        handlers: {
            table: p,
            tableRow: w,
            tableCell: d,
            inlineCode: C
        }
    };

    function p(n, i, t) {
        return b(T(n, t), n.align)
    }

    function w(n, i, t) {
        const a = h(n, t),
            r = b([a]);
        return r.slice(0, r.indexOf(`
`))
    }

    function d(n, i, t) {
        const a = t.enter("tableCell"),
            r = t.enter("phrasing"),
            o = x(n, t, {
                before: u,
                after: u
            });
        return r(), a(), o
    }

    function b(n, i) {
        return v(n, {
            align: i,
            alignDelimiters: f,
            padding: s,
            stringLength: g
        })
    }

    function T(n, i) {
        const t = n.children;
        let a = -1;
        const r = [],
            o = i.enter("table");
        for (; ++a < t.length;) r[a] = h(t[a], i);
        return o(), r
    }

    function h(n, i) {
        const t = n.children;
        let a = -1;
        const r = [],
            o = i.enter("tableRow");
        for (; ++a < t.length;) r[a] = d(t[a], n, i);
        return o(), r
    }

    function C(n, i, t) {
        let a = k(n, i, t);
        return t.stack.includes("tableCell") && (a = a.replace(/\|/g, "\\$&")), a
    }
}
export {
    D as gfmTableFromMarkdown, _ as gfmTableToMarkdown
};
export default null;