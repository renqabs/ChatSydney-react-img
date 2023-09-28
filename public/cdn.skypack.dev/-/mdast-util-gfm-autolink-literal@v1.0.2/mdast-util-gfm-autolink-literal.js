import {
    ccount as f
} from "../ccount@v2.0.1/ccount.js";
import {
    findAndReplace as h
} from "../mdast-util-find-and-replace@v2.1.0/mdast-util-find-and-replace.js";
import {
    unicodeWhitespace as p,
    unicodePunctuation as m
} from "../micromark-util-character@v1.1.0/micromark-util-character.js";
const a = "phrasing",
    s = ["autolink", "link", "image", "label"],
    k = {
        transforms: [E],
        enter: {
            literalAutolink: g,
            literalAutolinkEmail: c,
            literalAutolinkHttp: c,
            literalAutolinkWww: c
        },
        exit: {
            literalAutolink: v,
            literalAutolinkEmail: L,
            literalAutolinkHttp: w,
            literalAutolinkWww: A
        }
    },
    x = {
        unsafe: [{
            character: "@",
            before: "[+\\-.\\w]",
            after: "[\\-.\\w]",
            inConstruct: a,
            notInConstruct: s
        }, {
            character: ".",
            before: "[Ww]",
            after: "[\\-.\\w]",
            inConstruct: a,
            notInConstruct: s
        }, {
            character: ":",
            before: "[ps]",
            after: "\\/",
            inConstruct: a,
            notInConstruct: s
        }]
    };

function g(t) {
    this.enter({
        type: "link",
        title: null,
        url: "",
        children: []
    }, t)
}

function c(t) {
    this.config.enter.autolinkProtocol.call(this, t)
}

function w(t) {
    this.config.exit.autolinkProtocol.call(this, t)
}

function A(t) {
    this.config.exit.data.call(this, t);
    const i = this.stack[this.stack.length - 1];
    i.url = "http://" + this.sliceSerialize(t)
}

function L(t) {
    this.config.exit.autolinkEmail.call(this, t)
}

function v(t) {
    this.exit(t)
}

function E(t) {
    h(t, [
        [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, z],
        [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, P]
    ], {
        ignore: ["link", "linkReference"]
    })
}

function z(t, i, e, l, r) {
    let n = "";
    if (!d(r)) return !1;
    if (/^w/i.test(i) && (e = i + e, i = "", n = "http://"), !W(e)) return !1;
    const o = y(e + l);
    if (!o[0]) return !1;
    const u = {
        type: "link",
        title: null,
        url: n + i + o[0],
        children: [{
            type: "text",
            value: i + o[0]
        }]
    };
    return o[1] ? [u, {
        type: "text",
        value: o[1]
    }] : u
}

function P(t, i, e, l) {
    return !d(l, !0) || /[_-\d]$/.test(e) ? !1 : {
        type: "link",
        title: null,
        url: "mailto:" + i + "@" + e,
        children: [{
            type: "text",
            value: i + "@" + e
        }]
    }
}

function W(t) {
    const i = t.split(".");
    return !(i.length < 2 || i[i.length - 1] && (/_/.test(i[i.length - 1]) || !/[a-zA-Z\d]/.test(i[i.length - 1])) || i[i.length - 2] && (/_/.test(i[i.length - 2]) || !/[a-zA-Z\d]/.test(i[i.length - 2])))
}

function y(t) {
    const i = /[!"&'),.:;<>?\]}]+$/.exec(t);
    let e, l, r, n;
    if (i)
        for (t = t.slice(0, i.index), n = i[0], e = n.indexOf(")"), l = f(t, "("), r = f(t, ")"); e !== -1 && l > r;) t += n.slice(0, e + 1), n = n.slice(e + 1), e = n.indexOf(")"), r++;
    return [t, n]
}

function d(t, i) {
    const e = t.input.charCodeAt(t.index - 1);
    return (t.index === 0 || p(e) || m(e)) && (!i || e !== 47)
}
export {
    k as gfmAutolinkLiteralFromMarkdown, x as gfmAutolinkLiteralToMarkdown
};
export default null;