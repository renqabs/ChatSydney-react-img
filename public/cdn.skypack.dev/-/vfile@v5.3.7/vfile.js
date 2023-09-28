import w from "../is-buffer@v2.0.5/is-buffer.js";
import {
    VFileMessage as p
} from "../vfile-message@v3.1.4/vfile-message.js";
const f = {
    basename: b,
    dirname: y,
    extname: A,
    join: E,
    sep: "/"
};

function b(n, e) {
    if (e !== void 0 && typeof e != "string") throw new TypeError('"ext" argument must be a string');
    h(n);
    let t = 0,
        s = -1,
        i = n.length,
        r;
    if (e === void 0 || e.length === 0 || e.length > n.length) {
        for (; i--;)
            if (n.charCodeAt(i) === 47) {
                if (r) {
                    t = i + 1;
                    break
                }
            } else s < 0 && (r = !0, s = i + 1);
        return s < 0 ? "" : n.slice(t, s)
    }
    if (e === n) return "";
    let o = -1,
        l = e.length - 1;
    for (; i--;)
        if (n.charCodeAt(i) === 47) {
            if (r) {
                t = i + 1;
                break
            }
        } else o < 0 && (r = !0, o = i + 1), l > -1 && (n.charCodeAt(i) === e.charCodeAt(l--) ? l < 0 && (s = i) : (l = -1, s = o));
    return t === s ? s = o : s < 0 && (s = n.length), n.slice(t, s)
}

function y(n) {
    if (h(n), n.length === 0) return ".";
    let e = -1,
        t = n.length,
        s;
    for (; --t;)
        if (n.charCodeAt(t) === 47) {
            if (s) {
                e = t;
                break
            }
        } else s || (s = !0);
    return e < 0 ? n.charCodeAt(0) === 47 ? "/" : "." : e === 1 && n.charCodeAt(0) === 47 ? "//" : n.slice(0, e)
}

function A(n) {
    h(n);
    let e = n.length,
        t = -1,
        s = 0,
        i = -1,
        r = 0,
        o;
    for (; e--;) {
        const l = n.charCodeAt(e);
        if (l === 47) {
            if (o) {
                s = e + 1;
                break
            }
            continue
        }
        t < 0 && (o = !0, t = e + 1), l === 46 ? i < 0 ? i = e : r !== 1 && (r = 1) : i > -1 && (r = -1)
    }
    return i < 0 || t < 0 || r === 0 || r === 1 && i === t - 1 && i === s + 1 ? "" : n.slice(i, t)
}

function E(...n) {
    let e = -1,
        t;
    for (; ++e < n.length;) h(n[e]), n[e] && (t = t === void 0 ? n[e] : t + "/" + n[e]);
    return t === void 0 ? "." : R(t)
}

function R(n) {
    h(n);
    const e = n.charCodeAt(0) === 47;
    let t = C(n, !e);
    return t.length === 0 && !e && (t = "."), t.length > 0 && n.charCodeAt(n.length - 1) === 47 && (t += "/"), e ? "/" + t : t
}

function C(n, e) {
    let t = "",
        s = 0,
        i = -1,
        r = 0,
        o = -1,
        l, a;
    for (; ++o <= n.length;) {
        if (o < n.length) l = n.charCodeAt(o);
        else {
            if (l === 47) break;
            l = 47
        }
        if (l === 47) {
            if (!(i === o - 1 || r === 1))
                if (i !== o - 1 && r === 2) {
                    if (t.length < 2 || s !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                        if (t.length > 2) {
                            if (a = t.lastIndexOf("/"), a !== t.length - 1) {
                                a < 0 ? (t = "", s = 0) : (t = t.slice(0, a), s = t.length - 1 - t.lastIndexOf("/")), i = o, r = 0;
                                continue
                            }
                        } else if (t.length > 0) {
                            t = "", s = 0, i = o, r = 0;
                            continue
                        }
                    }
                    e && (t = t.length > 0 ? t + "/.." : "..", s = 2)
                } else t.length > 0 ? t += "/" + n.slice(i + 1, o) : t = n.slice(i + 1, o), s = o - i - 1;
            i = o, r = 0
        } else l === 46 && r > -1 ? r++ : r = -1
    }
    return t
}

function h(n) {
    if (typeof n != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(n))
}
const L = {
    cwd: x
};

function x() {
    return "/"
}

function d(n) {
    return n !== null && typeof n == "object" && n.href && n.origin
}

function I(n) {
    if (typeof n == "string") n = new URL(n);
    else if (!d(n)) {
        const e = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + n + "`");
        throw e.code = "ERR_INVALID_ARG_TYPE", e
    }
    if (n.protocol !== "file:") {
        const e = new TypeError("The URL must be of scheme file");
        throw e.code = "ERR_INVALID_URL_SCHEME", e
    }
    return S(n)
}

function S(n) {
    if (n.hostname !== "") {
        const s = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw s.code = "ERR_INVALID_FILE_URL_HOST", s
    }
    const e = n.pathname;
    let t = -1;
    for (; ++t < e.length;)
        if (e.charCodeAt(t) === 37 && e.charCodeAt(t + 1) === 50) {
            const s = e.charCodeAt(t + 2);
            if (s === 70 || s === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                throw i.code = "ERR_INVALID_FILE_URL_PATH", i
            }
        }
    return decodeURIComponent(e)
}
const c = ["history", "path", "basename", "stem", "extname", "dirname"];
class _ {
    constructor(e) {
        let t;
        e ? typeof e == "string" || T(e) ? t = {
            value: e
        } : d(e) ? t = {
            path: e
        } : t = e : t = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = L.cwd(), this.value, this.stored, this.result, this.map;
        let s = -1;
        for (; ++s < c.length;) {
            const r = c[s];
            r in t && t[r] !== void 0 && t[r] !== null && (this[r] = r === "history" ? [...t[r]] : t[r])
        }
        let i;
        for (i in t) c.includes(i) || (this[i] = t[i])
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(e) {
        d(e) && (e = I(e)), m(e, "path"), this.path !== e && this.history.push(e)
    }
    get dirname() {
        return typeof this.path == "string" ? f.dirname(this.path) : void 0
    }
    set dirname(e) {
        g(this.basename, "dirname"), this.path = f.join(e || "", this.basename)
    }
    get basename() {
        return typeof this.path == "string" ? f.basename(this.path) : void 0
    }
    set basename(e) {
        m(e, "basename"), u(e, "basename"), this.path = f.join(this.dirname || "", e)
    }
    get extname() {
        return typeof this.path == "string" ? f.extname(this.path) : void 0
    }
    set extname(e) {
        if (u(e, "extname"), g(this.dirname, "extname"), e) {
            if (e.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = f.join(this.dirname, this.stem + (e || ""))
    }
    get stem() {
        return typeof this.path == "string" ? f.basename(this.path, this.extname) : void 0
    }
    set stem(e) {
        m(e, "stem"), u(e, "stem"), this.path = f.join(this.dirname || "", e + (this.extname || ""))
    }
    toString(e) {
        return (this.value || "").toString(e || void 0)
    }
    message(e, t, s) {
        const i = new p(e, t, s);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
    }
    info(e, t, s) {
        const i = this.message(e, t, s);
        return i.fatal = null, i
    }
    fail(e, t, s) {
        const i = this.message(e, t, s);
        throw i.fatal = !0, i
    }
}

function u(n, e) {
    if (n && n.includes(f.sep)) throw new Error("`" + e + "` cannot be a path: did not expect `" + f.sep + "`")
}

function m(n, e) {
    if (!n) throw new Error("`" + e + "` cannot be empty")
}

function g(n, e) {
    if (!n) throw new Error("Setting `" + e + "` requires `path` to be set too")
}

function T(n) {
    return w(n)
}
export {
    _ as VFile
};
export default null;