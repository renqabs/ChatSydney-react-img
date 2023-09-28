function A(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f
}

function F(f, b, p) {
    return p = {
        path: b,
        exports: {},
        require: function(j, v) {
            return I(j, v == null ? p.path : v)
        }
    }, f(p, p.exports), p.exports
}

function I() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
}
var O = F(function(f) {
        (() => {
            var b = {
                    d: (r, h) => {
                        for (var u in h) b.o(h, u) && !b.o(r, u) && Object.defineProperty(r, u, {
                            enumerable: !0,
                            get: h[u]
                        })
                    },
                    o: (r, h) => Object.prototype.hasOwnProperty.call(r, h),
                    r: r => {
                        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(r, "__esModule", {
                            value: !0
                        })
                    }
                },
                p = {};

            function j(r, h) {
                for (var u = 0; u < h.length; u++) {
                    var e = h[u];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, e.key, e)
                }
            }
            b.r(p), b.d(p, {
                default: () => S
            });
            var v = function() {
                function r() {
                    ! function(e, n) {
                        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, r)
                }
                var h, u;
                return h = r, u = [{
                    key: "changeHeightWidth",
                    value: function(e, n, t, o, i, g) {
                        return t > o && (e = Math.round(e * o / t), t = o), e > n && (t = Math.round(t * n / e), e = n), i && t < i && (e = Math.round(e * i / t), t = i), g && e < g && (t = Math.round(t * g / e), e = g), {
                            height: e,
                            width: t
                        }
                    }
                }, {
                    key: "resizeAndRotateImage",
                    value: function(e, n, t, o, i) {
                        var g = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "jpeg",
                            c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 100,
                            a = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 0,
                            w = c / 100,
                            s = document.createElement("canvas"),
                            y = e.width,
                            m = e.height,
                            d = this.changeHeightWidth(m, t, y, n, o, i);
                        !a || a !== 90 && a !== 270 ? (s.width = d.width, s.height = d.height) : (s.width = d.height, s.height = d.width), y = d.width, m = d.height;
                        var l = s.getContext("2d");
                        return l.fillStyle = "rgba(0, 0, 0, 0)", l.fillRect(0, 0, y, m), l.imageSmoothingEnabled && l.imageSmoothingQuality && (l.imageSmoothingQuality = "high"), a && (l.rotate(a * Math.PI / 180), a === 90 ? l.translate(0, -s.width) : a === 180 ? l.translate(-s.width, -s.height) : a === 270 ? l.translate(-s.height, 0) : a !== 0 && a !== 360 || l.translate(0, 0)), l.drawImage(e, 0, 0, y, m), s.toDataURL("image/".concat(g), w)
                    }
                }, {
                    key: "b64toByteArrays",
                    value: function(e, n) {
                        for (var t = atob(e.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, "")), o = [], i = 0; i < t.length; i += 512) {
                            for (var g = t.slice(i, i + 512), c = new Array(g.length), a = 0; a < g.length; a++) c[a] = g.charCodeAt(a);
                            var w = new Uint8Array(c);
                            o.push(w)
                        }
                        return o
                    }
                }, {
                    key: "b64toBlob",
                    value: function(e, n) {
                        var t = this.b64toByteArrays(e, n);
                        return new Blob(t, {
                            type: n,
                            lastModified: new Date
                        })
                    }
                }, {
                    key: "b64toFile",
                    value: function(e, n, t) {
                        var o = this.b64toByteArrays(e, t);
                        return new File(o, n, {
                            type: t,
                            lastModified: new Date
                        })
                    }
                }, {
                    key: "createResizedImage",
                    value: function(e, n, t, o, i, g, c) {
                        var a = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "base64",
                            w = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null,
                            s = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : null,
                            y = new FileReader;
                        if (!e) throw Error("File Not Found!");
                        if (e.type && !e.type.includes("image")) throw Error("File Is NOT Image!");
                        y.readAsDataURL(e), y.onload = function() {
                            var m = new Image;
                            m.src = y.result, m.onload = function() {
                                var d = r.resizeAndRotateImage(m, n, t, w, s, o, i, g),
                                    l = "image/".concat(o);
                                switch (a) {
                                    case "blob":
                                        var M = r.b64toBlob(d, l);
                                        c(M);
                                        break;
                                    case "base64":
                                        c(d);
                                        break;
                                    case "file":
                                        var k = e.name.toString().replace(/(png|jpeg|jpg|webp)$/i, "").concat(o.toString()),
                                            R = r.b64toFile(d, k, l);
                                        c(R);
                                        break;
                                    default:
                                        c(d)
                                }
                            }
                        }, y.onerror = function(m) {
                            throw Error(m)
                        }
                    }
                }], u && j(h, u), r
            }();
            const S = {
                imageFileResizer: function(r, h, u, e, n, t, o, i, g, c) {
                    return v.createResizedImage(r, h, u, e, n, t, o, i, g, c)
                }
            };
            f.exports = p
        })()
    }),
    E = A(O);
export default E;