import w from "../is-buffer@v2.0.5/is-buffer.js";
import {
    VFileMessage as p
} from "../vfile-message@v3.1.2/vfile-message.js";
const h = {
    basename: b,
    dirname: y,
    extname: A,
    join: E,
    sep: "/"
};

function b(i, e) {
    if (e !== void 0 && typeof e != "string") throw new TypeError('"ext" argument must be a string');
    f(i);
    let t = 0,
        r = -1,
        n = i.length,
        s;
    if (e === void 0 || e.length === 0 || e.length > i.length) {
        for (; n--;)
            if (i.charCodeAt(n) === 47) {
                if (s) {
                    t = n + 1;
                    break
                }
            } else r < 0 && (s = !0, r = n + 1);
        return r < 0 ? "" : i.slice(t, r)
    }
    if (e === i) return "";
    let o = -1,
        l = e.length - 1;
    for (; n--;)
        if (i.charCodeAt(n) === 47) {
            if (s) {
                t = n + 1;
                break
            }
        } else o < 0 && (s = !0, o = n + 1), l > -1 && (i.charCodeAt(n) === e.charCodeAt(l--) ? l < 0 && (r = n) : (l = -1, r = o));
    return t === r ? r = o : r < 0 && (r = i.length), i.slice(t, r)
}

function y(i) {
    if (f(i), i.length === 0) return ".";
    let e = -1,
        t = i.length,
        r;
    for (; --t;)
        if (i.charCodeAt(t) === 47) {
            if (r) {
                e = t;
                break
            }
        } else r || (r = !0);
    return e < 0 ? i.charCodeAt(0) === 47 ? "/" : "." : e === 1 && i.charCodeAt(0) === 47 ? "//" : i.slice(0, e)
}

function A(i) {
    f(i);
    let e = i.length,
        t = -1,
        r = 0,
        n = -1,
        s = 0,
        o;
    for (; e--;) {
        const l = i.charCodeAt(e);
        if (l === 47) {
            if (o) {
                r = e + 1;
                break
            }
            continue
        }
        t < 0 && (o = !0, t = e + 1), l === 46 ? n < 0 ? n = e : s !== 1 && (s = 1) : n > -1 && (s = -1)
    }
    return n < 0 || t < 0 || s === 0 || s === 1 && n === t - 1 && n === r + 1 ? "" : i.slice(n, t)
}

function E(...i) {
    let e = -1,
        t;
    for (; ++e < i.length;) f(i[e]), i[e] && (t = t === void 0 ? i[e] : t + "/" + i[e]);
    return t === void 0 ? "." : C(t)
}

function C(i) {
    f(i);
    const e = i.charCodeAt(0) === 47;
    let t = R(i, !e);
    return t.length === 0 && !e && (t = "."), t.length > 0 && i.charCodeAt(i.length - 1) === 47 && (t += "/"), e ? "/" + t : t
}

function R(i, e) {
    let t = "",
        r = 0,
        n = -1,
        s = 0,
        o = -1,
        l, a;
    for (; ++o <= i.length;) {
        if (o < i.length) l = i.charCodeAt(o);
        else {
            if (l === 47) break;
            l = 47
        }
        if (l === 47) {
            if (!(n === o - 1 || s === 1))
                if (n !== o - 1 && s === 2) {
                    if (t.length < 2 || r !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                        if (t.length > 2) {
                            if (a = t.lastIndexOf("/"), a !== t.length - 1) {
                                a < 0 ? (t = "", r = 0) : (t = t.slice(0, a), r = t.length - 1 - t.lastIndexOf("/")), n = o, s = 0;
                                continue
                            }
                        } else if (t.length > 0) {
                            t = "", r = 0, n = o, s = 0;
                            continue
                        }
                    }
                    e && (t = t.length > 0 ? t + "/.." : "..", r = 2)
                } else t.length > 0 ? t += "/" + i.slice(n + 1, o) : t = i.slice(n + 1, o), r = o - n - 1;
            n = o, s = 0
        } else l === 46 && s > -1 ? s++ : s = -1
    }
    return t
}

function f(i) {
    if (typeof i != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(i))
}
const x = {
    cwd: I
};

function I() {
    return "/"
}

function d(i) {
    return i !== null && typeof i == "object" && i.href && i.origin
}

function S(i) {
    if (typeof i == "string") i = new URL(i);
    else if (!d(i)) {
        const e = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + i + "`");
        throw e.code = "ERR_INVALID_ARG_TYPE", e
    }
    if (i.protocol !== "file:") {
        const e = new TypeError("The URL must be of scheme file");
        throw e.code = "ERR_INVALID_URL_SCHEME", e
    }
    return T(i)
}

function T(i) {
    if (i.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw r.code = "ERR_INVALID_FILE_URL_HOST", r
    }
    const e = i.pathname;
    let t = -1;
    for (; ++t < e.length;)
        if (e.charCodeAt(t) === 37 && e.charCodeAt(t + 1) === 50) {
            const r = e.charCodeAt(t + 2);
            if (r === 70 || r === 102) {
                const n = new TypeError("File URL path must not include encoded / characters");
                throw n.code = "ERR_INVALID_FILE_URL_PATH", n
            }
        }
    return decodeURIComponent(e)
}
const c = ["history", "path", "basename", "stem", "extname", "dirname"];
class _ {
    constructor(e) {
        let t;
        e ? typeof e == "string" || w(e) ? t = {
            value: e
        } : d(e) ? t = {
            path: e
        } : t = e : t = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = x.cwd(), this.value, this.stored, this.result, this.map;
        let r = -1;
        for (; ++r < c.length;) {
            const s = c[r];
            s in t && t[s] !== void 0 && (this[s] = s === "history" ? [...t[s]] : t[s])
        }
        let n;
        for (n in t) c.includes(n) || (this[n] = t[n])
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(e) {
        d(e) && (e = S(e)), m(e, "path"), this.path !== e && this.history.push(e)
    }
    get dirname() {
        return typeof this.path == "string" ? h.dirname(this.path) : void 0
    }
    set dirname(e) {
        g(this.basename, "dirname"), this.path = h.join(e || "", this.basename)
    }
    get basename() {
        return typeof this.path == "string" ? h.basename(this.path) : void 0
    }
    set basename(e) {
        m(e, "basename"), u(e, "basename"), this.path = h.join(this.dirname || "", e)
    }
    get extname() {
        return typeof this.path == "string" ? h.extname(this.path) : void 0
    }
    set extname(e) {
        if (u(e, "extname"), g(this.dirname, "extname"), e) {
            if (e.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (e.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = h.join(this.dirname, this.stem + (e || ""))
    }
    get stem() {
        return typeof this.path == "string" ? h.basename(this.path, this.extname) : void 0
    }
    set stem(e) {
        m(e, "stem"), u(e, "stem"), this.path = h.join(this.dirname || "", e + (this.extname || ""))
    }
    toString(e) {
        return (this.value || "").toString(e)
    }
    message(e, t, r) {
        const n = new p(e, t, r);
        return this.path && (n.name = this.path + ":" + n.name, n.file = this.path), n.fatal = !1, this.messages.push(n), n
    }
    info(e, t, r) {
        const n = this.message(e, t, r);
        return n.fatal = null, n
    }
    fail(e, t, r) {
        const n = this.message(e, t, r);
        throw n.fatal = !0, n
    }
}

function u(i, e) {
    if (i && i.includes(h.sep)) throw new Error("`" + e + "` cannot be a path: did not expect `" + h.sep + "`")
}

function m(i, e) {
    if (!i) throw new Error("`" + e + "` cannot be empty")
}

function g(i, e) {
    if (!i) throw new Error("Setting `" + e + "` requires `path` to be set too")
}
export {
    _ as VFile
};
export default null;