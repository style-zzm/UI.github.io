(function (A) {
  function e(e) {
    for (var n, a, s = e[0], i = e[1], l = e[2], c = 0, d = []; c < s.length; c++) a = s[c], Object.prototype.hasOwnProperty.call(r, a) && r[a] && d.push(r[a][0]), r[a] = 0;
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (A[n] = i[n]);
    u && u(e);
    while (d.length) d.shift()();
    return o.push.apply(o, l || []), t()
  }

  function t() {
    for (var A, e = 0; e < o.length; e++) {
      for (var t = o[e], n = !0, a = 1; a < t.length; a++) {
        var i = t[a];
        0 !== r[i] && (n = !1)
      }
      n && (o.splice(e--, 1), A = s(s.s = t[0]))
    }
    return A
  }
  var n = {},
    r = {
      index: 0
    },
    o = [];

  function a(A) {
    return s.p + "UI.github.io/js/" + ({
      about: "about"
    } [A] || A) + "." + {
      about: "64ee30e7",
      "chunk-03dcac88": "b38eb5b2",
      "chunk-04398900": "33487f80",
      "chunk-1a2eb7e7": "531f3c46",
      "chunk-22ea8de8": "1a508af3",
      "chunk-2d0f0635": "59a2c265",
      "chunk-487a7ae4": "0abcf054",
      "chunk-896df498": "d3d7f40f",
      "chunk-3ee8a244": "f817aad5",
      "chunk-8459c3e2": "47941c92",
      "chunk-8a493ce8": "b7c3f969",
      "chunk-c99f9654": "03001376",
      "chunk-f0805056": "a460f238"
    } [A] + ".js"
  }

  function s(e) {
    if (n[e]) return n[e].exports;
    var t = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return A[e].call(t.exports, t, t.exports, s), t.l = !0, t.exports
  }
  s.e = function (A) {
    var e = [],
      t = r[A];
    if (0 !== t)
      if (t) e.push(t[2]);
      else {
        var n = new Promise((function (e, n) {
          t = r[A] = [e, n]
        }));
        e.push(t[2] = n);
        var o, i = document.createElement("script");
        i.charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.src = a(A);
        var l = new Error;
        o = function (e) {
          i.onerror = i.onload = null, clearTimeout(c);
          var t = r[A];
          if (0 !== t) {
            if (t) {
              var n = e && ("load" === e.type ? "missing" : e.type),
                o = e && e.target && e.target.src;
              l.message = "Loading chunk " + A + " failed.\n(" + n + ": " + o + ")", l.name = "ChunkLoadError", l.type = n, l.request = o, t[1](l)
            }
            r[A] = void 0
          }
        };
        var c = setTimeout((function () {
          o({
            type: "timeout",
            target: i
          })
        }), 12e4);
        i.onerror = i.onload = o, document.head.appendChild(i)
      } return Promise.all(e)
  }, s.m = A, s.c = n, s.d = function (A, e, t) {
    s.o(A, e) || Object.defineProperty(A, e, {
      enumerable: !0,
      get: t
    })
  }, s.r = function (A) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(A, "__esModule", {
      value: !0
    })
  }, s.t = function (A, e) {
    if (1 & e && (A = s(A)), 8 & e) return A;
    if (4 & e && "object" === typeof A && A && A.__esModule) return A;
    var t = Object.create(null);
    if (s.r(t), Object.defineProperty(t, "default", {
        enumerable: !0,
        value: A
      }), 2 & e && "string" != typeof A)
      for (var n in A) s.d(t, n, function (e) {
        return A[e]
      }.bind(null, n));
    return t
  }, s.n = function (A) {
    var e = A && A.__esModule ? function () {
      return A["default"]
    } : function () {
      return A
    };
    return s.d(e, "a", e), e
  }, s.o = function (A, e) {
    return Object.prototype.hasOwnProperty.call(A, e)
  }, s.p = "/", s.oe = function (A) {
    throw console.error(A), A
  };
  var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = i.push.bind(i);
  i.push = e, i = i.slice();
  for (var c = 0; c < i.length; c++) e(i[c]);
  var u = l;
  o.push([0, "chunk-vendors"]), t()
})({
  0: function (A, e, t) {
    A.exports = t("c31f")
  },
  "05aa": function (A, e, t) {
    var n = t("c6ed");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("c7fc5abe", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  "102e": function (A, e, t) {
    "use strict";
    t("ee58")
  },
  "1c56": function (A, e, t) {
    "use strict";
    t("8250")
  },
  "1c74": function (A, e, t) {
    var n = t("c122");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("3a155f7d", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  2234: function (A, e, t) {
    var n = t("6935");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("741ce3a8", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  2517: function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, "#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;width:100%;height:100%;overflow:hidden}*{font-variant:normal!important}", ""]), A.exports = e
  },
  "2a8b": function (A, e, t) {
    "use strict";
    t("2234")
  },
  "2d2d": function (A, e, t) {
    "use strict";
    t.r(e);
    var n = function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("div", {
          staticClass: "sw-table",
          attrs: {
            id: A.keyid.id
          }
        }, A._l(A.list, (function (e, n) {
          return t("div", {
            key: n,
            class: A.classes(e)
          }, [t("div", {
            staticClass: "sw-tr-item"
          }, A._l(A.columns, (function (r, o) {
            return t("div", {
              key: o,
              staticClass: "sw-td",
              style: A.style(o, e)
            }, [0 === o ? t("span", {
              staticClass: "label-icon"
            }, [0 === o && A.hasChildren(e) ? t("svg", {
              staticClass: "open-icon",
              attrs: {
                viewBox: "0 0 1024 1024",
                "data-icon": "caret-down",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                "aria-hidden": "true",
                focusable: "false"
              },
              on: {
                click: function (t) {
                  return A.clickHandler(e, n)
                }
              }
            }, [t("path", {
              attrs: {
                d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
              }
            })]) : A._e()]) : A._e(), t("span", {
              staticClass: "label-name"
            }, [A._t(r.dataIndex, [A._v(" " + A._s(e[r.dataIndex]) + " ")], {
              text: e[r.dataIndex],
              record: e
            })], 2)])
          })), 0), A.hasChildren(e) ? [t("sw-table", {
            key: "item." + e[A.rank.key],
            attrs: {
              columns: A.columns,
              expandedRowKeys: A.expandedRowKeys,
              rank: A.rank,
              keyid: e
            },
            on: {
              expandedRowsChange: A.expandedRowsChange
            },
            scopedSlots: A._u([A._l(A.columns, (function (e) {
              return {
                key: e.dataIndex,
                fn: function (t) {
                  var n = t.text,
                    r = t.record;
                  return [A._t(e.dataIndex, null, {
                    text: n,
                    record: r
                  })]
                }
              }
            }))], null, !0),
            model: {
              value: e.children,
              callback: function (t) {
                A.$set(e, "children", t)
              },
              expression: "item.children"
            }
          })] : A._e()], 2)
        })), 0)
      },
      r = [],
      o = t("2ef0"),
      a = t.n(o),
      s = {
        name: "sw-table",
        components: {
          SwTable: () => Promise.resolve().then(t.bind(null, "2d2d"))
        },
        props: {
          keyid: {
            type: Object,
            default: function () {
              return {
                id: ""
              }
            }
          },
          columns: {
            type: Array,
            default () {
              return [{
                title: "资源名称",
                dataIndex: "name",
                key: "name",
                scopedSlots: {
                  customRender: "type"
                }
              }, {
                title: "资源类型",
                dataIndex: "type",
                key: "type",
                scopedSlots: {
                  customRender: "type"
                }
              }, {
                title: "资源分类",
                dataIndex: "category",
                key: "category",
                scopedSlots: {
                  customRender: "type"
                }
              }, {
                title: "资源编码",
                dataIndex: "code",
                key: "code",
                scopedSlots: {
                  customRender: "type"
                }
              }, {
                title: "操作",
                dataIndex: "operation",
                key: "operation",
                scopedSlots: {
                  customRender: "type"
                }
              }]
            }
          },
          model: {
            type: String,
            default: "normal"
          },
          rank: {
            type: Object,
            default: function () {
              return {
                length: 3,
                key: "code"
              }
            }
          },
          value: {
            type: Array,
            default: function () {
              return []
            }
          },
          expandedRowKeys: {
            type: Array,
            default: function () {
              return []
            }
          },
          parentId: {
            type: String,
            default: "parentId"
          }
        },
        data() {
          return {
            openKey: this.expandedRowKeys
          }
        },
        created() {},
        mounted() {},
        watch: {
          expandedRowKeys() {
            this.openKey = [], this.openKey = this.expandedRowKeys
          }
        },
        computed: {
          list: {
            get() {
              return this.value
            },
            set(A) {
              this.$emit("input", A)
            }
          },
          classes() {
            return function (A) {
              const e = this.mode(A[this.rank.key]),
                t = {};
              null != e && (t["level_" + e] = !0);
              const n = this;
              return {
                "sw-tr": !0,
                "border-top": e > 1,
                expand: a.a.includes(n.openKey, A.id),
                "sw-first": a.a.includes(n.openKey, A.id) && 0 === e,
                ...t
              }
            }
          },
          mode() {
            return function (A) {
              return A.length / this.rank.length - 1
            }
          },
          hasChildren(A) {
            return function ({
              id: A,
              children: e,
              childCount: t,
              name: n
            }) {
              return this.contain(A) || e && e.length > 0 || t
            }
          },
          contain() {
            return function (A) {
              return a.a.includes(this.openKey, A)
            }
          },
          style() {
            return function (A, e) {
              const t = this.mode(e[this.rank.key]),
                n = this.columns[A],
                r = {};
              return 0 === A && (r.paddingLeft = 20 * t + "px"), n.width ? r.flex = "0 1 " + n.width : r.flex = 1, r
            }
          }
        },
        methods: {
          expandedRowsChange(A, e) {
            this.$emit("expandedRowsChange", A, e)
          },
          clickHandler(A, e) {
            const t = a.a.includes(this.openKey, A.id);
            this.$emit("expandedRowsChange", !t, A)
          }
        }
      },
      i = s,
      l = (t("794f"), t("2877")),
      c = Object(l["a"])(i, n, r, !1, null, null, null);
    e["default"] = c.exports
  },
  "2eb7": function (A, e, t) {
    "use strict";
    t("1c74")
  },
  "3bd5": function (A, e, t) {
    "use strict";
    t("05aa")
  },
  "3f4d": function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, ".columns[data-v-f0798572]{display:flex;align-items:center;margin-bottom:20px}.columns .bar[data-v-f0798572]{width:5px;height:24px;background:#1492ff;border-radius:3px}.columns .title[data-v-f0798572]{font-size:24px;font-family:Microsoft YaHei;font-weight:700;color:#333;margin-left:17px}.columns[data-v-f0798572]:not(first-child){margin-top:20px}", ""]), A.exports = e
  },
  "42c6": function (A, e, t) {
    var n = t("81bd");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("7e2fc79a", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  4678: function (A, e, t) {
    var n = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea"
    };

    function r(A) {
      var e = o(A);
      return t(e)
    }

    function o(A) {
      if (!t.o(n, A)) {
        var e = new Error("Cannot find module '" + A + "'");
        throw e.code = "MODULE_NOT_FOUND", e
      }
      return n[A]
    }
    r.keys = function () {
      return Object.keys(n)
    }, r.resolve = o, A.exports = r, r.id = "4678"
  },
  "4bbf": function (A, e, t) {
    var n = t("b722");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("48f6686d", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  "4d1c": function (A, e, t) {
    "use strict";
    t("c48d")
  },
  "4f09": function (A, e, t) {
    var n = {
      "./apitable.vue": "ba34",
      "./columns.vue": "b694"
    };

    function r(A) {
      var e = o(A);
      return t(e)
    }

    function o(A) {
      if (!t.o(n, A)) {
        var e = new Error("Cannot find module '" + A + "'");
        throw e.code = "MODULE_NOT_FOUND", e
      }
      return n[A]
    }
    r.keys = function () {
      return Object.keys(n)
    }, r.resolve = o, A.exports = r, r.id = "4f09"
  },
  "4f18": function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, ".parameter[data-v-63c018d9]{color:#003a8c}.instructions[data-v-63c018d9]{color:#333}.type[data-v-63c018d9]{color:#c41d7f}", ""]), A.exports = e
  },
  6935: function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, ".sfw-home-page{width:100%;height:900px;background-position:center 0;background-size:cover;background-repeat:no-repeat;display:flex;flex-wrap:wrap;justify-content:center;overflow:hidden}@-webkit-keyframes percentAnimation{0%{width:0}}@keyframes percentAnimation{0%{width:0}}#leafContainer{position:fixed;z-index:99999;width:100%;height:100%;top:0;overflow:hidden}#leafContainer>div{position:absolute;max-width:100px;max-height:100px;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-direction:normal,normal;-webkit-animation-timing-function:linear,ease-in}#leafContainer>div>img{width:100%;z-index:99999;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:alternate;-webkit-animation-timing-function:ease-in-out;-webkit-transform-origin:50% -100%}@-webkit-keyframes fade{0%{opacity:1}95%{opacity:1}to{opacity:0}}@-webkit-keyframes drop{0%{-webkit-transform:translateY(-50px)}to{-webkit-transform:translateY(800px)}}@-webkit-keyframes clockwiseSpin{0%{-webkit-transform:rotate(-50deg)}to{-webkit-transform:rotate(50deg)}}@-webkit-keyframes counterclockwiseSpinAndFlip{0%{-webkit-transform:scaleX(-1) rotate(50deg)}to{-webkit-transform:scaleX(-1) rotate(-50deg)}}", ""]), A.exports = e
  },
  "696c": function (A, e, t) {
    "use strict";
    t("4bbf")
  },
  7048: function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, '.sw-table-tree{height:auto;width:100%;position:relative;padding:0;margin:0;display:block;overflow-y:auto}.sw-table-tree .layout-header{background:#fff}.sw-table-tree .layout-header>.sw-tr{display:flex;flex-direction:row;padding:0 20px}.sw-table-tree .layout-header>.sw-tr>.sw-th{font-size:14px;line-height:46px;font-family:微软黑体;font-weight:500;color:#272e3a;text-align:left;padding:0 10px;min-width:100px}.sw-table-tree .layout-header>.sw-tr>.sw-th:first-child{padding-left:25px}.sw-table-tree>.layout-content .ant-empty{margin-top:30px}.sw-table-tree .sw-table .sw-tr{flex:1;display:flex;flex-direction:column}.sw-table-tree .sw-table .sw-tr.border-top{position:relative}.sw-table-tree .sw-table .sw-tr.border-top:after{content:"";position:absolute;left:40px;right:40px;top:0;border-top:1px solid hsla(0,0%,90.6%,.6784313725490196)}.sw-table-tree .sw-table .sw-tr.level_0{background-color:#f1f5fd;flex:0;padding:0 20px;margin-bottom:20px}.sw-table-tree .sw-table .sw-tr.level_0>.sw-tr-item{line-height:52px}.sw-table-tree .sw-table .sw-tr.level_1{line-height:40px;background-color:#fff;margin:12px 0;margin-top:0}.sw-table-tree .sw-table .sw-tr .sw-table{-webkit-animation:up .6s cubic-bezier(.215,.61,.355,1);animation:up .6s cubic-bezier(.215,.61,.355,1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sw-table-tree .sw-table .sw-tr.sw-first>.sw-table{margin-bottom:10px}.sw-table-tree .sw-table .sw-tr.expand>.sw-table{display:unset;margin-bottom:0;-webkit-animation:down .4s cubic-bezier(.215,.61,.355,1);animation:down .4s cubic-bezier(.215,.61,.355,1)}.sw-table-tree .sw-table .sw-tr.expand>.sw-tr-item>.sw-td>.label-icon>.open-icon{transform:rotate(0deg)}.sw-table-tree .sw-table .sw-tr>.sw-tr-item{flex:1;display:flex;flex-direction:row;width:100%;overflow:hidden}.sw-table-tree .sw-table .sw-tr>.sw-tr-item>.sw-td{flex:1;display:flex;align-items:center;padding:0 10px;overflow:hidden;min-width:100px;color:#272e3a;font-weight:400}.sw-table-tree .sw-table .sw-tr>.sw-tr-item>.sw-td:first-child{flex:0;flex-basis:300px}.sw-table-tree .sw-table .sw-tr>.sw-tr-item>.sw-td>.label-icon{width:25px;height:25px;display:flex;align-items:center;cursor:pointer}.sw-table-tree .sw-table .sw-tr>.sw-tr-item>.sw-td>.label-icon>.open-icon{transform:rotate(-90deg);margin:0 5px}@-webkit-keyframes down{0%{transform:scaleY(0);transform-origin:top}to{transform:scale(1);transform-origin:top}}@keyframes down{0%{transform:scaleY(0);transform-origin:top}to{transform:scale(1);transform-origin:top}}@-webkit-keyframes up{0%{transform:scale(1);transform-origin:top}to{overflow:hidden;opacity:0;height:0;transform:scaleY(0);transform-origin:top}}@keyframes up{0%{transform:scale(1);transform-origin:top}to{overflow:hidden;opacity:0;height:0;transform:scaleY(0);transform-origin:top}}', ""]), A.exports = e
  },
  "718f": function (A) {
    A.exports = JSON.parse('[{"id":"001","code":"001","name":"管理系统","type":1,"category":1,"leaf":false,"children":[{"code":"001001","name":"用户中心","type":1,"category":1,"leaf":false,"id":"001001","children":[{"code":"001001001","name":"机构用户","type":1,"category":1,"leaf":false,"id":"001001001","children":[{"code":"001001001001","name":"机构详情","type":1,"category":1,"leaf":false,"id":"001001001001"},{"code":"001001001002","name":"机构编辑","type":1,"category":1,"leaf":false,"id":"001001001002"},{"code":"001001001003","name":"用户详情","type":1,"category":1,"leaf":false,"id":"001001001003"},{"code":"001001001004","name":"用户编辑","type":1,"category":1,"leaf":false,"id":"001001001004"}]},{"code":"001001002","name":"职务管理","type":1,"category":1,"leaf":false,"id":"001001002"},{"code":"001001003","name":"回收站","type":1,"category":1,"leaf":false,"id":"001001003"}]},{"code":"001002","name":"应用中心","type":1,"category":1,"leaf":false,"id":"001002"},{"code":"001003","name":"应用中心","type":1,"category":1,"leaf":false,"id":"001003"},{"code":"001004","name":"监控中心","type":1,"category":1,"leaf":false,"id":"001004"},{"code":"001005","name":"系统设置","type":1,"category":1,"leaf":false,"id":"001005"}]}]')
  },
  "77d4": function (A, e, t) {
    "use strict";
    t("b5fd")
  },
  "794f": function (A, e, t) {
    "use strict";
    t("8d8c")
  },
  "7e49": function (A, e, t) {
    A.exports = t.p + "img/notAudio.43b9abc8.svg"
  },
  "81bd": function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, '.sw-table-tree[data-v-34268e6a]{height:auto;width:100%;position:relative;padding:0;margin:0;display:block;overflow-y:auto}.sw-table-tree .layout-header[data-v-34268e6a]{background:#fff}.sw-table-tree .layout-header>.sw-tr[data-v-34268e6a]{display:flex;flex-direction:row;padding:0 20px}.sw-table-tree .layout-header>.sw-tr>.sw-th[data-v-34268e6a]{font-size:14px;line-height:46px;font-family:微软黑体;font-weight:500;color:#272e3a;text-align:left;padding:0 10px;min-width:100px}.sw-table-tree .layout-header>.sw-tr>.sw-th[data-v-34268e6a]:first-child{padding-left:25px}.sw-table-tree>.layout-content .ant-empty[data-v-34268e6a]{margin-top:30px}.sw-table-tree .sw-table .sw-tr[data-v-34268e6a]{flex:1;display:flex;flex-direction:column}.sw-table-tree .sw-table .sw-tr.border-top[data-v-34268e6a]{position:relative}.sw-table-tree .sw-table .sw-tr.border-top[data-v-34268e6a]:after{content:"";position:absolute;left:40px;right:40px;top:0;border-top:1px solid hsla(0,0%,90.6%,.6784313725490196)}.sw-table-tree .sw-table .sw-tr.level_0[data-v-34268e6a]{background-color:#f1f5fd;flex:0;padding:0 20px;margin-bottom:20px}.sw-table-tree .sw-table .sw-tr.level_0>.sw-tr-item[data-v-34268e6a]{line-height:52px}.sw-table-tree .sw-table .sw-tr.level_1[data-v-34268e6a]{line-height:40px;background-color:#fff;margin:12px 0;margin-top:0}.sw-table-tree .sw-table .sw-tr .sw-table[data-v-34268e6a]{-webkit-animation:up-data-v-34268e6a .6s cubic-bezier(.215,.61,.355,1);animation:up-data-v-34268e6a .6s cubic-bezier(.215,.61,.355,1);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sw-table-tree .sw-table .sw-tr.sw-first>.sw-table[data-v-34268e6a]{margin-bottom:10px}.sw-table-tree .sw-table .sw-tr.expand>.sw-table[data-v-34268e6a]{display:unset;margin-bottom:0;-webkit-animation:down-data-v-34268e6a .4s cubic-bezier(.215,.61,.355,1);animation:down-data-v-34268e6a .4s cubic-bezier(.215,.61,.355,1)}.sw-table-tree .sw-table .sw-tr.expand>.sw-tr-item>.sw-td>.label-icon>.open-icon[data-v-34268e6a]{transform:rotate(0deg)}.sw-table-tree .sw-table .sw-tr>.sw-tr-item[data-v-34268e6a]{flex:1;display:flex;flex-direction:row;width:100%;overflow:hidden}.sw-table-tree .sw-table .sw-tr>.sw-tr-item>.sw-td[data-v-34268e6a]{flex:1;display:flex;align-items:center;padding:0 10px;overflow:hidden;min-width:100px;color:#272e3a;font-weight:400}.sw-table-tree .sw-table .sw-tr>.sw-tr-item>.sw-td[data-v-34268e6a]:first-child{flex:0;flex-basis:300px}.sw-table-tree .sw-table .sw-tr>.sw-tr-item>.sw-td>.label-icon[data-v-34268e6a]{width:25px;height:25px;display:flex;align-items:center;cursor:pointer}.sw-table-tree .sw-table .sw-tr>.sw-tr-item>.sw-td>.label-icon>.open-icon[data-v-34268e6a]{transform:rotate(-90deg);margin:0 5px}@-webkit-keyframes down-data-v-34268e6a{0%{transform:scaleY(0);transform-origin:top}to{transform:scale(1);transform-origin:top}}@keyframes down-data-v-34268e6a{0%{transform:scaleY(0);transform-origin:top}to{transform:scale(1);transform-origin:top}}@-webkit-keyframes up-data-v-34268e6a{0%{transform:scale(1);transform-origin:top}to{overflow:hidden;opacity:0;height:0;transform:scaleY(0);transform-origin:top}}@keyframes up-data-v-34268e6a{0%{transform:scale(1);transform-origin:top}to{overflow:hidden;opacity:0;height:0;transform:scaleY(0);transform-origin:top}}', ""]), A.exports = e
  },
  8250: function (A, e, t) {
    var n = t("b2a6");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("14ebc1ca", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  "84ac": function (A, e, t) {
    "use strict";
    const n = [{
      path: "/display",
      name: "display",
      component: () => t.e("chunk-2d0f0635").then(t.bind(null, "9bc9")),
      children: [{
        path: "/display/tabletree",
        name: "sw-tabletree",
        component: () => t.e("chunk-8a493ce8").then(t.bind(null, "37eb"))
      }, {
        path: "/display/canvas",
        name: "zzm-canvas",
        component: () => t.e("chunk-f0805056").then(t.bind(null, "f23c"))
      }, {
        path: "/display/drawingBoard",
        name: "zzm-drawingBoard",
        component: () => t.e("chunk-22ea8de8").then(t.bind(null, "9074"))
      }, {
        path: "/display/svg",
        name: "zzm-drawingBoard",
        component: () => t.e("chunk-03dcac88").then(t.bind(null, "75ce"))
      }]
    }, {
      path: "/feedback",
      name: "feedback",
      component: () => t.e("chunk-2d0f0635").then(t.bind(null, "9bc9")),
      children: [{
        path: "/feedback/popover",
        name: "sw-popover",
        component: () => t.e("chunk-04398900").then(t.bind(null, "a09f"))
      }]
    }, {
      path: "/entry",
      name: "entry",
      component: () => t.e("chunk-2d0f0635").then(t.bind(null, "9bc9")),
      children: [{
        path: "/entry/instructions",
        name: "sw-instructions",
        component: () => t.e("chunk-487a7ae4").then(t.bind(null, "86c2"))
      }, {
        path: "/entry/verification",
        name: "sw-verification",
        component: () => t.e("chunk-c99f9654").then(t.bind(null, "54dc"))
      }, {
        path: "/entry/snowdown",
        name: "sw-snowdown",
        component: () => t.e("chunk-1a2eb7e7").then(t.bind(null, "e275"))
      }]
    }, {
      path: "/three-js",
      name: "three-js",
      component: () => t.e("chunk-2d0f0635").then(t.bind(null, "9bc9")),
      children: [{
        path: "/three-js/demo1",
        name: "style-demo1",
        component: () => Promise.all([t.e("chunk-896df498"), t.e("chunk-8459c3e2")]).then(t.bind(null, "4102"))
      }, {
        path: "/three-js/bgm",
        name: "style-bgm",
        component: () => Promise.all([t.e("chunk-896df498"), t.e("chunk-3ee8a244")]).then(t.bind(null, "a72f"))
      }]
    }];
    e["a"] = n
  },
  "8d8c": function (A, e, t) {
    var n = t("7048");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("413a246c", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  "99c8": function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, ".window-content[data-v-d05731d4]{position:fixed;z-index:100;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 4px 12px rgba(0,0,0,.15);border-radius:6px;overflow:hidden}.dark[data-v-d05731d4]{background:linear-gradient(90deg,#3e78fe,#409eff);border-radius:6px;padding:0 12px 12px 12px}.dark .header[data-v-d05731d4]{background:transparent}.dark .header>span[data-v-d05731d4]{color:#fff}.dark .body[data-v-d05731d4]{background:#fff}.dark .iconlist[data-v-d05731d4]{color:#fff!important}.dark .footer[data-v-d05731d4]{flex-direction:row;justify-content:center;box-shadow:0 -1px 7px 0 rgba(0,0,0,.15);padding-right:0;border-radius:0}.operation[data-v-d05731d4]{position:absolute;z-index:666;top:0;right:0;display:flex;justify-content:flex-end;align-items:center;padding-right:24px;width:120px;height:56px;text-align:right;line-height:56px}.operation .iconlist[data-v-d05731d4],.operation .operaList[data-v-d05731d4]{width:16px;height:16px;display:block;margin-left:16px;font-size:16px;color:#333;cursor:pointer}.operation .iconlist[data-v-d05731d4]:hover,.operation .operaList[data-v-d05731d4]:hover{color:#333}.operation .operaList[data-v-d05731d4]{transform:rotate(-90deg)}.goBack[data-v-d05731d4]{position:absolute;padding-left:24px;width:120px;height:56px;z-index:666;top:0;left:0}.goBack[data-v-d05731d4],.header[data-v-d05731d4]{display:flex;align-items:center}.header[data-v-d05731d4]{width:100%;height:54px;justify-content:center;flex-shrink:0;background:#fff;border-bottom:1px solid #e8e8e8;border-radius:6px 6px 0 0;cursor:move}.header .title[data-v-d05731d4]{font-weight:700;font-size:18px;color:rgba(0,0,0,.85);cursor:default;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body[data-v-d05731d4]{background:#f5f5f5;flex-grow:1;max-height:calc(100% - 108px);overflow-y:auto}.footer[data-v-d05731d4]{align-items:center;height:54px;padding-right:20px;background:#fff;border-top:1px solid #e8e8e8;border-radius:0 0 6px 6px;display:flex;flex-direction:row-reverse}.footer button[data-v-d05731d4]{font-weight:400;box-shadow:0 2px 0 rgba(0,0,0,.02);padding:4px 15px;border-radius:6px;border:1px solid #d9d9d9;cursor:pointer;margin-left:10px}.footer .determine[data-v-d05731d4]{background:#1890ff;color:#fff}.footer .cancel[data-v-d05731d4]{background:#fff}.mask[data-v-d05731d4]{position:absolute;top:0;left:0;cursor:not-allowed;z-index:9999}.bigMask[data-v-d05731d4]{position:fixed;top:0;left:0;z-index:10;background:rgba(0,0,0,.5);width:100vw;height:100vh}", ""]), A.exports = e
  },
  acf8: function (A, e, t) {
    "use strict";
    t("42c6")
  },
  b2a6: function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, ".audioBox[data-v-1369ec26]{width:100%}.audioBox>div[data-v-1369ec26]{width:100%;border:1px solid #d9d9d9;padding:0 10px;border-radius:4px;height:32px;background:#fff;display:flex;align-items:center;justify-content:space-between}.audioBox .play[data-v-1369ec26]{cursor:pointer}.audioBox .barBox[data-v-1369ec26]{width:75%;height:12px;position:relative;display:flex;align-items:center;cursor:pointer}.audioBox .barBox .round[data-v-1369ec26]{position:absolute;width:12px;height:12px;background:#747677;border-radius:50%;top:50%;left:0;z-index:999;transform:translateY(-50%)}.audioBox .barBox .bar[data-v-1369ec26]{width:100%;height:2px;background:#ebecec;cursor:pointer}.audioBox .closeAudio[data-v-1369ec26]{color:#fff;background:#da2626;border-radius:50%;font-weight:700;padding:3px;font-size:12px}.audioBox .closeAudio[data-v-1369ec26]:hover{background:red}", ""]), A.exports = e
  },
  b5fd: function (A, e, t) {
    var n = t("3f4d");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("05a09648", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  b694: function (A, e, t) {
    "use strict";
    t.r(e);
    var n = function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("div", {
          staticClass: "columns"
        }, [t("div", {
          staticClass: "bar"
        }), t("div", {
          staticClass: "title"
        }, [A._v(A._s(A.title))])])
      },
      r = [],
      o = {
        name: "columns",
        props: {
          title: {
            type: String,
            default: "Title"
          }
        }
      },
      a = o,
      s = (t("77d4"), t("2877")),
      i = Object(s["a"])(a, n, r, !1, null, "f0798572", null);
    e["default"] = i.exports
  },
  b722: function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, ".window-content[data-v-245e8204]{position:fixed;z-index:100;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 4px 12px rgba(0,0,0,.15);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.operation[data-v-245e8204]{position:absolute;z-index:666;top:0;right:0;display:flex;justify-content:flex-end;align-items:center;padding-right:24px;width:120px;height:56px;text-align:right;line-height:56px}.operation .iconlist[data-v-245e8204],.operation .operaList[data-v-245e8204]{width:16px;height:16px;display:block;margin-left:16px;font-size:16px;color:#333;cursor:pointer}.operation .iconlist[data-v-245e8204]:hover,.operation .operaList[data-v-245e8204]:hover{color:#333}.operation .operaList[data-v-245e8204]{transform:rotate(-90deg)}.goBack[data-v-245e8204]{position:absolute;padding-left:24px;width:120px;height:56px;z-index:666;top:0;left:0}.goBack[data-v-245e8204],.header[data-v-245e8204]{display:flex;align-items:center}.header[data-v-245e8204]{position:relative;z-index:9;width:100%;height:54px;justify-content:center;flex-shrink:0;background:#fff;border-bottom:1px solid #e8e8e8;border-radius:4px 4px 0 0;cursor:move}.header .title[data-v-245e8204]{font-weight:700;font-size:18px;color:rgba(0,0,0,.85);cursor:default;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body[data-v-245e8204]{background:#f5f5f5;flex-grow:1;max-height:calc(100% - 108px);overflow-y:auto}.footer[data-v-245e8204]{position:relative;align-items:center;height:54px;padding-right:20px;background:#fff;border-top:1px solid #e8e8e8;border-radius:0 0 4px 4px;display:flex;flex-direction:row-reverse}.footer button[data-v-245e8204]{font-weight:400;box-shadow:0 2px 0 rgba(0,0,0,.02);padding:4px 15px;border-radius:4px;border:1px solid #d9d9d9;cursor:pointer;margin-left:10px}.footer .determine[data-v-245e8204]{background:#1890ff;color:#fff}.footer .cancel[data-v-245e8204]{background:#fff}.mask[data-v-245e8204]{position:absolute;top:0;left:0;cursor:not-allowed;z-index:9999}", ""]), A.exports = e
  },
  ba34: function (A, e, t) {
    "use strict";
    t.r(e);
    var n = function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("a-table", {
          attrs: {
            columns: A.columns,
            "data-source": A.data,
            pagination: !1,
            rowKey: "parameter"
          },
          scopedSlots: A._u([{
            key: "parameter",
            fn: function (e) {
              return t("span", {
                staticClass: "parameter"
              }, [A._v(A._s(e))])
            }
          }, {
            key: "instructions",
            fn: function (e) {
              return t("span", {
                staticClass: "instructions"
              }, [A._v(A._s(e))])
            }
          }, {
            key: "type",
            fn: function (e) {
              return t("span", {
                staticClass: "type"
              }, [A._v(A._s(e))])
            }
          }])
        })
      },
      r = [],
      o = {
        name: "apiTable",
        props: {
          data: {
            type: Array
          }
        },
        data() {
          return {
            columns: [{
              title: "参数",
              dataIndex: "parameter",
              key: "parameter",
              scopedSlots: {
                customRender: "parameter"
              }
            }, {
              title: "说明",
              dataIndex: "instructions",
              key: "instructions",
              scopedSlots: {
                customRender: "instructions"
              }
            }, {
              title: "类型",
              dataIndex: "type",
              key: "type",
              scopedSlots: {
                customRender: "type"
              }
            }, {
              title: "默认值",
              dataIndex: "default",
              key: "default",
              scopedSlots: {
                customRender: "default"
              }
            }]
          }
        }
      },
      a = o,
      s = (t("102e"), t("2877")),
      i = Object(s["a"])(a, n, r, !1, null, "63c018d9", null);
    e["default"] = i.exports
  },
  c122: function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, '.innerBox[data-v-73187642]{padding-top:26px}.determine[data-v-73187642]{margin-left:10px}.cancel[data-v-73187642],.determine[data-v-73187642]{width:100px;height:32px}.recordingBox[data-v-73187642]{position:relative;top:0;margin-bottom:0}.recording[data-v-73187642]{position:absolute;top:-25px;left:50%;transform:translateX(-50%);width:50px;height:50px;background:#409eff;border-radius:50%;text-align:center;line-height:50px;color:#fff;font-size:32px!important;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}.screenshotsBox[data-v-73187642]{display:flex;flex-wrap:wrap}.screenshotsBox>div[data-v-73187642]{position:relative;margin:10px 10px 10px 0;width:240px}.screenshotsBox .preview[data-v-73187642]{width:236px;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:crisp-edges;-ms-interpolation-mode:nearest-neighbor}.screenshotsBox .closeImg[data-v-73187642]{position:absolute;top:-5px;right:-5px;color:#fff;background:#da2626;border-radius:50%;font-weight:700;padding:4px;font-size:14px;cursor:pointer}.screenshotsBox .closeImg[data-v-73187642]:hover{background:red}.error-modal[data-v-73187642]{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px 0}.error-modal .notAudio[data-v-73187642]{width:120px;margin-bottom:20px}.error-modal .maike[data-v-73187642]{color:#e6e6e6;font-size:80px}.success-modal[data-v-73187642]{display:flex;flex-direction:column;align-items:center}.success-modal .time[data-v-73187642]{margin:20px 0;font-size:24px;font-weight:700}.headerAudio[data-v-73187642]{margin-bottom:10px}.canvasBox[data-v-73187642]{width:100%;height:120px;display:flex;align-items:center;justify-content:center;margin-bottom:30px}[data-v-73187642] .ant-form-item-label{font-size:16px;color:#333;font-weight:400;font-family:Microsoft YaHei}@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_2642117_nlzuxetzsz.woff2?t=1625629682535) format("woff2"),url(//at.alicdn.com/t/font_2642117_nlzuxetzsz.woff?t=1625629682535) format("woff"),url(//at.alicdn.com/t/font_2642117_nlzuxetzsz.ttf?t=1625629682535) format("truetype")}.iconfont[data-v-73187642]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-ziyuan[data-v-73187642]:before{content:""}.icon-maikefeng[data-v-73187642]:before{content:""}', ""]), A.exports = e
  },
  c31f: function (A, e, t) {
    "use strict";
    t.r(e);
    var n = t("2b0e"),
      r = function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("div", {
          attrs: {
            id: "app"
          }
        }, [t("router-view")], 1)
      },
      o = [],
      a = (t("4d1c"), t("2877")),
      s = {},
      i = Object(a["a"])(s, r, o, !1, null, null, null),
      l = i.exports,
      c = t("8c4f"),
      u = t("84ac");
    n["a"].use(c["a"]);
    const d = [{
        path: "/",
        name: "index",
        component: () => t.e("about").then(t.bind(null, "deb8")),
        children: [...u["a"]]
      }],
      B = c["a"].prototype.push;
    c["a"].prototype.push = function (A) {
      return B.call(this, A).catch(A => A)
    }, console.log(d);
    const h = new c["a"]({
      routes: d
    });
    var w = h,
      f = t("2f62");
    n["a"].use(f["a"]);
    var g = new f["a"].Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {}
      }),
      p = function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("div", [t("input", {
          domProps: {
            value: A.value
          },
          on: {
            input: A.inputHandler
          }
        })])
      },
      Q = [],
      m = {
        name: "SwInput",
        data() {
          return {
            value: null
          }
        },
        methods: {
          inputHandler(A) {
            this.$emit("input", A.target.value)
          }
        }
      },
      U = m,
      C = Object(a["a"])(U, p, Q, !1, null, "0210124a", null),
      E = C.exports;
    console.log(E), E.install = function (A) {
      A.component(E.name, E)
    };
    var v = E,
      F = function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("div", {
          staticClass: "s-canvas"
        }, [t("canvas", {
          attrs: {
            id: "s-canvas",
            width: A.contentWidth,
            height: A.contentHeight
          }
        })])
      },
      b = [],
      H = {
        name: "SwVerification",
        props: {
          identifyCode: {
            type: String,
            default: "1234"
          },
          fontSizeMin: {
            type: Number,
            default: 16
          },
          fontSizeMax: {
            type: Number,
            default: 40
          },
          backgroundColorMin: {
            type: Number,
            default: 180
          },
          backgroundColorMax: {
            type: Number,
            default: 240
          },
          colorMin: {
            type: Number,
            default: 50
          },
          colorMax: {
            type: Number,
            default: 160
          },
          lineColorMin: {
            type: Number,
            default: 40
          },
          lineColorMax: {
            type: Number,
            default: 180
          },
          dotColorMin: {
            type: Number,
            default: 0
          },
          dotColorMax: {
            type: Number,
            default: 255
          },
          contentWidth: {
            type: Number,
            default: 112
          },
          contentHeight: {
            type: Number,
            default: 38
          }
        },
        methods: {
          randomNum(A, e) {
            return Math.floor(Math.random() * (e - A) + A)
          },
          randomColor(A, e) {
            var t = this.randomNum(A, e),
              n = this.randomNum(A, e),
              r = this.randomNum(A, e);
            return "rgb(" + t + "," + n + "," + r + ")"
          },
          drawPic() {
            var A = document.getElementById("s-canvas"),
              e = A.getContext("2d");
            e.textBaseline = "bottom", e.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax), e.fillRect(0, 0, this.contentWidth, this.contentHeight);
            for (let t = 0; t < this.identifyCode.length; t++) this.drawText(e, this.identifyCode[t], t);
            this.drawLine(e), this.drawDot(e)
          },
          drawText(A, e, t) {
            A.fillStyle = this.randomColor(this.colorMin, this.colorMax), A.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px SimHei";
            var n = (t + 1) * (this.contentWidth / (this.identifyCode.length + 1)),
              r = this.randomNum(this.fontSizeMax, this.contentHeight - 5),
              o = this.randomNum(-45, 45);
            A.translate(n, r), A.rotate(o * Math.PI / 180), A.fillText(e, 0, 0), A.rotate(-o * Math.PI / 180), A.translate(-n, -r)
          },
          drawLine(A) {
            for (let e = 0; e < 4; e++) A.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax), A.beginPath(), A.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight)), A.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight)), A.stroke()
          },
          drawDot(A) {
            for (let e = 0; e < 15; e++) A.fillStyle = this.randomColor(0, 255), A.beginPath(), A.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI), A.fill()
          }
        },
        watch: {
          identifyCode: {
            handler() {
              this.drawPic()
            },
            immediate: !1
          }
        },
        mounted() {
          this.drawPic()
        }
      },
      y = H,
      T = (t("3bd5"), Object(a["a"])(y, F, b, !1, null, "07e3786d", null)),
      I = T.exports;
    console.log(I), I.install = function (A) {
      A.component(I.name, I)
    };
    var N = I,
      x = function () {
        var A = this,
          e = A.$createElement,
          n = A._self._c || e;
        return n("div", {
          staticClass: "instructions"
        }, [n("customized-window", {
          ref: "myWindow",
          attrs: {
            visible: A.visible,
            footer: !0,
            mask: A.mask,
            operation: A.operation,
            width: A.width,
            height: A.height,
            title: "发布批示",
            documentshadow: A.documentshadow,
            left: A.left,
            top: A.top
          },
          on: {
            "on-close": A.close,
            "on-minimize": A.minimize,
            "on-fullScreen": A.fullScreen,
            "on-confirm": A.confirm,
            "on-cancel": A.cancel,
            "on-imgArr": A.getImgArr,
            "go-back": A.gotoBack
          }
        }, [
          [n("div", [A._t("default")], 2), n("a-row", [n("a-col", {
            attrs: {
              span: 18,
              offset: 4
            }
          }, [n("div", {
            staticClass: "recordingBox"
          }, A._l(A.wavUrlArr, (function (e, t) {
            return n("my-audio", {
              key: e.time,
              staticClass: "headerAudio",
              attrs: {
                item: e,
                index: t
              },
              on: {
                "on-audio-close": A.audioClose
              }
            })
          })), 1)]), n("a-col", {
            staticClass: "screenshotsBox",
            attrs: {
              span: 18,
              offset: 4
            }
          }, A._l(A.imgArr, (function (e, t) {
            return n("div", {
              key: t
            }, [n("img", {
              staticClass: "preview",
              attrs: {
                src: e,
                alt: ""
              }
            }), n("a-icon", {
              staticClass: "closeImg",
              attrs: {
                type: "close"
              },
              on: {
                click: function (e) {
                  return A.closeImg(t)
                }
              }
            })], 1)
          })), 0)], 1)], n("div", {
            attrs: {
              slot: "footer_btn"
            },
            slot: "footer_btn"
          }, [n("div", {
            staticClass: "recording iconfont icon-maikefeng",
            on: {
              click: A.recording
            }
          }), n("a-button", {
            staticClass: "cancel",
            on: {
              click: function (e) {
                return A.$refs.myWindow.cancel()
              }
            }
          }, [A._v("取消 ")]), n("a-button", {
            staticClass: "determine",
            attrs: {
              type: "primary",
              loading: A.loading_form
            },
            on: {
              click: A.okClick
            }
          }, [A._v(A._s(A.loading_form ? "提交中..." : "确认") + " ")])], 1)
        ], 2), n("a-modal", {
          attrs: {
            footer: null,
            width: "460px",
            maskClosable: !1
          },
          model: {
            value: A.error_visible,
            callback: function (e) {
              A.error_visible = e
            },
            expression: "error_visible"
          }
        }, [n("div", {
          staticClass: "error-modal"
        }, [n("img", {
          staticClass: "notAudio",
          attrs: {
            src: t("7e49"),
            alt: ""
          }
        }), n("span", [A._v("暂未检测到麦克风，请检查插孔是否插好")])])]), n("a-modal", {
          ref: "success_modal",
          attrs: {
            footer: null,
            width: "460px",
            maskClosable: !1
          },
          on: {
            cancel: A.modal_close
          },
          model: {
            value: A.success_visible,
            callback: function (e) {
              A.success_visible = e
            },
            expression: "success_visible"
          }
        }, [n("div", {
          staticClass: "success-modal"
        }, [n("span", [A._v("请对着麦克风讲话")]), n("span", {
          staticClass: "time"
        }, [A._v(A._s(A.modal_time))]), n("div", {
          staticClass: "canvasBox"
        }, [n("canvas", {
          ref: "corrugated"
        })]), n("a-button", {
          attrs: {
            type: "primary",
            loading: A.loading
          },
          on: {
            click: A.complete
          }
        }, [A._v(A._s(A.loading ? "编码中..." : "完成") + " ")])], 1)])], 1)
      },
      S = [],
      L = function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("transition", {
          attrs: {
            css: !1
          },
          on: {
            "before-enter": A.before_enter,
            enter: A.enter,
            leave: A.leave
          }
        }, [A.visible ? t("div", {
          ref: "moveWindow",
          staticClass: "window-content",
          style: {
            width: A.width,
            height: A.height,
            opacity: A.opacity
          }
        }, [A.goBack ? t("div", {
          staticClass: "goBack"
        }, [t("a-button", {
          on: {
            click: A.gotoBack
          }
        }, [A._v("返回 >>")])], 1) : A._e(), t("div", {
          staticClass: "operation"
        }, [A.operation.screenshots ? t("a-icon", {
          staticClass: "operaList",
          attrs: {
            type: "scissor"
          },
          on: {
            click: A.start
          }
        }) : A._e(), A.operation.minimize ? t("a-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !A.isFull,
            expression: "!isFull"
          }],
          staticClass: "iconlist",
          attrs: {
            type: A.isMinimize ? "fullscreen" : "minus"
          },
          on: {
            click: A.minimize
          }
        }) : A._e(), A.operation.maximize ? t("a-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !A.isMinimize,
            expression: "!isMinimize"
          }],
          staticClass: "iconlist",
          attrs: {
            type: A.isFull ? "fullscreen-exit" : "fullscreen"
          },
          on: {
            click: A.fullScreen
          }
        }) : A._e(), t("a-icon", {
          staticClass: "iconlist",
          attrs: {
            type: "close"
          },
          on: {
            click: A.close
          }
        })], 1), t("div", {
          ref: "header",
          staticClass: "header",
          style: "center" === A.txtAlign ? "" : {
            justifyContent: "flex-start",
            paddingLeft: "1.5rem"
          },
          on: {
            mousedown: A.move,
            touchstart: function (e) {
              return e.stopPropagation(), A.move(e)
            }
          }
        }, [t("span", {
          staticClass: "title"
        }, [A._v(A._s(A.title))])]), t("div", {
          ref: "bodys",
          staticClass: "body",
          on: {
            scroll: A.scroll
          }
        }, [A._t("default")], 2), A.footer ? t("div", {
          staticClass: "footer"
        }, [A._t("footer_btn", [t("button", {
          staticClass: "determine",
          on: {
            click: A.confirm
          }
        }, [A._v("确认")]), t("button", {
          staticClass: "cancel",
          on: {
            click: A.cancel
          }
        }, [A._v("取消")])])], 2) : A._e(), A.mask ? t("div", {
          staticClass: "mask",
          style: {
            width: A.width,
            height: A.height
          }
        }) : A._e()]) : A._e()])
      },
      k = [],
      K = t("589d"),
      M = t.n(K),
      _ = t("d5aa"),
      D = t.n(_),
      O = {
        name: "customizedWindow",
        props: {
          width: {
            type: String,
            default: "520px"
          },
          height: {
            type: String,
            default: "610px"
          },
          visible: {
            type: Boolean,
            default: !1
          },
          left: {
            type: Number,
            default: 0
          },
          top: {
            type: Number
          },
          footer: {
            type: Boolean,
            default: !0
          },
          title: {
            type: String,
            default: "Title"
          },
          operation: {
            type: Object,
            default: () => ({
              screenshots: !0,
              minimize: !0,
              maximize: !0
            })
          },
          goBack: {
            type: Boolean,
            default: !0
          },
          txtAlign: {
            type: String,
            default: "center"
          },
          mask: {
            type: Boolean,
            default: !1
          },
          documentshadow: {},
          rolling: {
            type: Boolean,
            default: !1
          }
        },
        data() {
          return {
            opacity: 1,
            isFull: !1,
            isMinimize: !1,
            windowDefaultStyle: {},
            canvas: "",
            img_base64: void 0,
            beLeft: 0,
            beTop: 0,
            scrollBottom: 30,
            scrollT: 0
          }
        },
        mounted() {
          this.canvas = new D.a({
            toolshow: null,
            blob: void 0,
            flag: !1,
            documentshadow: this.documentshadow,
            endCB() {
              return null
            },
            cancelCB() {
              return console.log("右键取消"), this.flag = !0, null
            },
            copyPath(A) {
              return this.blob = A, null
            }
          })
        },
        methods: {
          close() {
            this.isMinimize = !1, this.windowDefaultStyle = {}, this.isFull = !1, this.$emit("on-close", !1)
          },
          before_enter(A) {
            A.style.opacity = 0
          },
          enter(A, e) {
            this.beLeft = document.documentElement.clientWidth / 2 - A.clientWidth / 2, this.beTop = document.documentElement.clientHeight / 2 - A.clientHeight / 2, M()(A, {
              opacity: 0,
              scale: 0,
              left: this.left - A.clientWidth / 2,
              top: this.top - A.clientHeight / 2
            }, {
              duration: 0
            }), M()(A, {
              opacity: 1,
              scale: 1,
              left: this.beLeft,
              top: this.beTop
            }, {
              duration: 300
            }), M()(A, {
              complete: e
            })
          },
          leave(A, e) {
            console.log(this.$refs.bodys.offsetHeight, "operation"), M()(A, {
              opacity: 1,
              scale: 1
            }, {
              duration: 0
            }), M()(A, {
              opacity: 0,
              scale: 0,
              left: this.left - A.clientWidth / 2,
              top: this.top - A.clientHeight / 2
            }, {
              duration: 300
            }), M()(A, {
              complete: e
            })
          },
          move(A) {
            var e;
            A.preventDefault(), e = A.changedTouches ? A.changedTouches[0] : A;
            const t = this.$refs.moveWindow,
              n = e.clientX - t.offsetLeft,
              r = e.clientY - t.offsetTop;
            A.changedTouches ? (document.addEventListener("touchmove", A => {
              const e = A.changedTouches[0];
              let o = e.clientX - n,
                a = e.clientY - r;
              const s = document.documentElement.clientHeight - t.clientHeight,
                i = document.documentElement.clientWidth - t.clientWidth;
              o <= 0 && (o = 0), o >= i && (o = i), a <= 0 && (a = 0), a >= s && (a = s), t.style.left = o + "px", t.style.top = a + "px", this.windowDefaultStyle.left = o, this.windowDefaultStyle.top = a
            }, !1), document.ontouchend = () => {
              document.ontouchmove = null, document.touchend = null
            }) : (document.onmousemove = A => {
              let e = A.clientX - n,
                o = A.clientY - r;
              const a = document.documentElement.clientHeight - t.clientHeight,
                s = document.documentElement.clientWidth - t.clientWidth;
              e <= 0 && (e = 0), e >= s && (e = s), o <= 0 && (o = 0), o >= a && (o = a), t.style.left = e + "px", t.style.top = o + "px", this.windowDefaultStyle.left = e, this.windowDefaultStyle.top = o
            }, document.onmouseup = () => {
              document.onmousemove = null, document.onmouseup = null
            })
          },
          fullScreen() {
            const A = this.$refs.moveWindow;
            this.isFull ? (A.style.width = this.windowDefaultStyle.width + "px", A.style.minHeight = "0px", A.style.top = this.windowDefaultStyle.top + "px", A.style.left = this.windowDefaultStyle.left + "px", this.isFull = !this.isFull, this.$emit("on-fullScreen", !1)) : (this.windowDefaultStyle.width = A.offsetWidth, this.windowDefaultStyle.height = A.offsetHeight, this.windowDefaultStyle.left = A.offsetLeft, this.windowDefaultStyle.top = A.offsetTop, A.style.width = "100vw", A.style.minHeight = "100vh", A.style.top = "0", A.style.left = "0", this.isFull = !this.isFull, this.$emit("on-fullScreen", !0))
          },
          minimize() {
            const A = this.$refs.moveWindow;
            this.windowDefaultStyle.left = A.offsetLeft, this.windowDefaultStyle.top = A.offsetTop, this.isMinimize ? (M()(A, {
              left: this.windowDefaultStyle.left,
              top: this.windowDefaultStyle.top,
              height: 54,
              width: 240
            }, {
              duration: 0
            }), M()(A, {
              left: this.beLeft,
              top: this.beTop,
              height: this.windowDefaultStyle.height,
              width: this.windowDefaultStyle.width
            }, {
              duration: 150
            }), this.isMinimize = !this.isMinimize, this.$emit("on-minimize", !1)) : (this.windowDefaultStyle.width = A.offsetWidth, this.windowDefaultStyle.height = A.offsetHeight, M()(A, {
              left: 0,
              top: document.documentElement.offsetHeight - this.$refs.header.offsetHeight,
              height: this.$refs.header.offsetHeight,
              width: 365
            }, {
              duration: 150
            }), this.isMinimize = !this.isMinimize, this.$emit("on-minimize", !0))
          },
          confirm() {
            this.$emit("on-confirm"), this.isMinimize = !1, this.windowDefaultStyle = {}, this.isFull = !1
          },
          cancel() {
            this.$emit("on-cancel"), this.close()
          },
          start() {
            const A = this.$refs.moveWindow;
            A.style.opacity = 0, this.opacity = 0, this.canvas.flag = !1, this.flag = !1, this.canvas.startScreenShot()
          },
          gotoBack() {
            this.$emit("go-back")
          },
          scroll(A) {
            if (this.scrollT = A.target.scrollTop, !this.rolling) return;
            const e = A.target.scrollTop + A.target.offsetHeight > A.target.scrollHeight - this.scrollBottom;
            e && this.$emit("on-scroll")
          },
          getScrollT() {
            return this.scrollT
          },
          toScroll(A) {
            this.$nextTick(() => {
              this.$refs.bodys.scrollTop = A
            })
          }
        },
        watch: {
          visible() {
            this.canvas = new D.a({
              toolshow: null,
              blob: void 0,
              flag: !1,
              documentshadow: this.documentshadow,
              endCB() {
                return null
              },
              cancelCB() {
                return console.log("右键取消"), this.flag = !0, null
              },
              copyPath(A) {
                return this.blob = A, null
              }
            })
          },
          canvas: {
            handler(A) {
              A.blob ? this.img_base64 = A.blob : A.flag && (this.opacity = 1, this.$refs.moveWindow.style.opacity = 1)
            },
            deep: !0
          },
          img_base64(A) {
            if (console.log(A, "val"), A) {
              const e = this.$refs.moveWindow;
              e.style.opacity = 1, this.$emit("on-imgArr", A)
            }
          }
        }
      },
      R = O,
      P = (t("696c"), Object(a["a"])(R, L, k, !1, null, "245e8204", null)),
      z = P.exports,
      X = function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("div", {
          staticClass: "audioBox"
        }, [t("div", [t("a-icon", {
          staticClass: "play",
          attrs: {
            type: A.playState ? "pause" : "caret-right"
          },
          on: {
            click: A.play
          }
        }), t("div", {
          staticClass: "barBox",
          style: A.clear ? "" : {
            width: "83%"
          },
          on: {
            click: A.goBar
          }
        }, [t("div", {
          staticClass: "round",
          style: {
            left: A.left + "%"
          },
          on: {
            click: function (A) {
              A.stopPropagation()
            }
          }
        }), t("div", {
          staticClass: "bar"
        })]), t("div", {
          staticClass: "time"
        }, [A._v(A._s(A.pageTime))]), A.clear ? t("a-icon", {
          staticClass: "closeAudio",
          style: {
            fontSize: "12px"
          },
          attrs: {
            type: "close"
          },
          on: {
            click: function (e) {
              return A.closeAudio(A.index)
            }
          }
        }) : A._e()], 1), t("audio", {
          ref: "audio" + A.index,
          attrs: {
            src: A.item.url,
            preload: "auto"
          }
        })])
      },
      V = [],
      Y = {
        name: "myAudio",
        props: {
          item: {
            type: Object
          },
          index: {
            type: Number
          },
          clear: {
            type: Boolean,
            default: !0
          }
        },
        data() {
          return {
            audio: void 0,
            time: this.item.time || void 0,
            playState: !1,
            timer: null,
            left: 0,
            pageTime: "加载中..."
          }
        },
        methods: {
          comeGo() {
            console.log(this.time), this.audio = this.$refs["audio" + this.index];
            let A = setInterval(() => {
              this.time ? (this.pageTime = this.lookTime(), clearInterval(A), A = null) : (this.time = this.audio.duration, console.log(this.time))
            }, 100)
          },
          play() {
            if (this.playState) this.audio.pause(), clearInterval(this.timer), this.timer = null;
            else {
              this.left >= 100 && (this.left = 0), this.audio.play();
              const A = 100 / this.time / 40;
              !this.timer && this.left < 100 && (this.timer = setInterval(() => {
                this.left += A, this.left > 100 && (clearInterval(this.timer), this.timer = null, this.playState = !1)
              }, 25))
            }
            this.playState = !this.playState
          },
          goBar(A) {
            const e = A => {
                var t = A.offsetLeft;
                return null !== A.offsetParent && (t += e(A.offsetParent)), t
              },
              t = (A.clientX - e(A.target)) / A.target.offsetWidth * 100;
            this.left = t, this.audio.currentTime = this.time * t / 100
          },
          closeAudio(A) {
            this.$emit("on-audio-close", A)
          },
          lookTime() {
            const A = Math.floor(this.time);
            let e = Math.floor(A / 60),
              t = A % 60;
            return e += "", t += "", e = 1 === e.length ? "0" + e : e, t = 1 === t.length ? "0" + t : t, e + ":" + t
          }
        },
        mounted() {
          this.comeGo()
        }
      },
      W = Y,
      G = (t("1c56"), Object(a["a"])(W, X, V, !1, null, "1369ec26", null)),
      J = G.exports,
      j = t("da43"),
      q = t.n(j),
      Z = t("c0e9"),
      $ = t.n(Z);
    const AA = new q.a({
      sampleBits: 16,
      sampleRate: 48e3,
      numChannels: 2
    });
    var eA = {
        name: "SwInstructions",
        components: {
          customizedWindow: z,
          myAudio: J
        },
        props: {
          documentshadow: {},
          height: {
            type: String,
            default: "38rem"
          },
          width: {
            type: String,
            default: "48rem"
          }
        },
        data() {
          return {
            visible: !1,
            flag: !1,
            left: 0,
            top: 0,
            operation: {
              screenshots: !0,
              minimize: !0,
              maximize: !0
            },
            loading_form: !1,
            imgArr: [],
            wavBlobArr: [],
            wavUrlArr: [],
            error_visible: !1,
            success_visible: !1,
            modal_time_h: 0,
            modal_time_s: 0,
            modal_timer: null,
            loading: !1,
            mask: !1,
            drawRecordId: null,
            oCanvas: null,
            ctx: null,
            audioState: !1,
            temporaryForm: {},
            orgoptions: []
          }
        },
        methods: {
          openWindow(A, e) {
            this.flag || (this.flag = !0, e ? this.canvasToImage(e).then(e => {
              this.imgArr.push(e), this.initialize(A)
            }) : this.initialize(A))
          },
          pending() {
            this.mask = !0, this.loading_form = !0
          },
          resetStatus() {
            this.mask = !1, this.loading_form = !1
          },
          closede() {
            this.mask = !0, this.loading_form = !1, this.imgArr = [], this.wavBlobArr = [], this.wavUrlArr = [], this.$refs.myWindow.cancel()
          },
          initialize(A) {
            this.left = A.clientX, this.top = A.clientY, this.visible = !0, this.$emit("InitializeSuccess")
          },
          close() {
            console.log("关闭窗口事件触发"), this.flag = !1, this.mask = !1, this.visible = !1
          },
          fullScreen(A) {
            A ? console.log("窗口最大化") : console.log("窗口恢复")
          },
          minimize(A) {
            A ? console.log("窗口最小化") : console.log("窗口恢复")
          },
          confirm() {
            console.log("确认按钮触发"), this.temporaryForm = {}, this.flag = !1, this.visible = !1
          },
          cancel() {
            console.log("取消按钮已按下")
          },
          clearNoScript() {
            const A = document.getElementsByTagName("noscript")[0];
            A && document.body.removeChild(A)
          },
          getImgArr(A) {
            this.imgArr.push(A)
          },
          closeImg(A) {
            this.imgArr.splice(A, 1)
          },
          recording() {
            AA.start().then(() => {
              this.audioState = !0, this.success_visible = !0, setTimeout(() => {
                this.oCanvas = this.$refs.corrugated, this.ctx = this.oCanvas.getContext("2d"), this.drawRecord(), this.modal_timer || (this.modal_timer = setInterval(() => {
                  this.modal_time_s++, this.modal_time_s >= 60 && (this.modal_time_h++, this.modal_time_s = 0)
                }, 1e3))
              }, 100)
            }).catch(A => {
              this.error_visible = !0, console.log(`${A.name} : ${A.message}`)
            })
          },
          modal_close() {
            AA.stop(), AA.destroy(), clearInterval(this.modal_timer), this.modal_timer = null, this.modal_time_s = 0, this.modal_time_h = 0
          },
          complete() {
            if (!this.loading) {
              this.loading = !0, this.mask = !0, clearInterval(this.modal_timer), this.modal_timer = null;
              const A = AA.getWAVBlob();
              let e;
              this.wavBlobArr.push(A), this.blobToDataURL(A, A => {
                e = A
              }), setTimeout(() => {
                this.wavUrlArr.push({
                  url: e,
                  time: AA.duration
                }), console.log(this.wavUrlArr), this.modal_time_s = 0, this.modal_time_h = 0, this.mask = !1, this.success_visible = !1, this.loading = !1, this.audioState = !1
              }, 1e3)
            }
          },
          audioClose(A) {
            this.wavBlobArr.splice(A, 1), this.wavUrlArr.splice(A, 1)
          },
          okClick() {
            const A = [];
            for (const t of this.imgArr) A.push(this.dataURLtoBlob(t));
            const e = {
              imgBlobArr: A,
              wavBlobArr: this.wavBlobArr
            };
            this.$emit("comfirm", e)
          },
          canvasToImage(A, e = {}) {
            const t = window.devicePixelRatio,
              n = A.offsetWidth,
              r = A.offsetHeight,
              o = A.scrollWidth,
              a = A.scrollHeight,
              s = {
                scale: t,
                width: n,
                height: r,
                useCORS: !0,
                allowTaint: !0,
                windowWidth: o,
                windowHeight: a,
                ...e
              };
            return $()(A, s).then(A => A.toDataURL("image/png"))
          },
          dataURLtoBlob(A) {
            var e = A.split(","),
              t = e[1].substring(0, e[1].length - 2),
              n = e[0].match(/:(.*?)/)[1],
              r = atob(t),
              o = r.length,
              a = new Uint8Array(o);
            while (o--) a[o] = r.charCodeAt(o);
            return new Blob([a], {
              type: n
            })
          },
          blobToDataURL(A, e) {
            const t = new FileReader;
            t.onload = A => {
              e(A.target.result)
            }, t.readAsDataURL(A)
          },
          drawRecord() {
            this.audioState && (this.drawRecordId = requestAnimationFrame(this.drawRecord));
            const A = AA.getRecordAnalyseData(),
              e = A.length;
            this.ctx.fillStyle = "rgb(255, 255, 255)", this.ctx.fillRect(0, 0, this.oCanvas.width, this.oCanvas.height);
            const t = this.ctx.createLinearGradient(0, 0, this.oCanvas.width, 0);
            t.addColorStop(0, "#95ebf1"), t.addColorStop(1, "#f83ffe"), this.ctx.lineWidth = 2, this.ctx.strokeStyle = t, this.ctx.beginPath();
            const n = 1 * this.oCanvas.width / e;
            let r = 0;
            for (let o = 0; o < e; o++) {
              const e = A[o] / 128,
                t = e * this.oCanvas.height / 2;
              0 === o ? this.ctx.moveTo(r, t) : this.ctx.lineTo(r, t), r += n
            }
            this.ctx.lineTo(this.oCanvas.width, this.oCanvas.height / 2), this.ctx.stroke()
          },
          filterOption(A, e) {
            return e.componentOptions.children[0].text.toLowerCase().indexOf(A.toLowerCase()) >= 0
          },
          getHolder() {},
          gotoBack() {
            this.flag = !1, this.visible = !1, this.$emit("go-back")
          }
        },
        computed: {
          modal_time() {
            let A = this.modal_time_h + "",
              e = this.modal_time_s + "";
            return A = A.length >= 2 ? A : "0" + A, e = e.length >= 2 ? e : "0" + e, `${A}:${e}`
          }
        },
        mounted() {
          this.clearNoScript()
        }
      },
      tA = eA,
      nA = (t("2eb7"), Object(a["a"])(tA, x, S, !1, null, "73187642", null)),
      rA = nA.exports;
    console.log(rA), rA.install = function (A) {
      A.component(rA.name, rA)
    };
    var oA = rA,
      aA = function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("transition-group", {
          class: !1,
          on: {
            "before-enter": A.before_enter,
            enter: A.enter,
            leave: A.leave
          }
        }, [A.visible ? t("div", {
          key: "content",
          ref: "moveWindow",
          staticClass: "window-content",
          class: "dark" === A.WindowStyle ? "dark " + A.customClassName : " " + A.customClassName,
          style: {
            width: A.width,
            height: A.height,
            opacity: A.opacity
          }
        }, [A.goBack ? t("div", {
          staticClass: "goBack"
        }, [t("a-button", {
          on: {
            click: A.gotoBack
          }
        }, [A._v("返回 >>")])], 1) : A._e(), t("div", {
          staticClass: "operation"
        }, [A.operation.minimize ? t("a-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !A.isFull,
            expression: "!isFull"
          }],
          staticClass: "iconlist",
          attrs: {
            type: A.isMinimize ? "fullscreen" : "minus"
          },
          on: {
            click: A.minimize
          }
        }) : A._e(), A.operation.maximize ? t("a-icon", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: !A.isMinimize,
            expression: "!isMinimize"
          }],
          staticClass: "iconlist",
          attrs: {
            type: A.isFull ? "fullscreen-exit" : "fullscreen"
          },
          on: {
            click: A.fullScreen
          }
        }) : A._e(), t("a-icon", {
          staticClass: "iconlist",
          attrs: {
            type: "close"
          },
          on: {
            click: A.close
          }
        })], 1), t("div", {
          ref: "header",
          staticClass: "header",
          style: "center" === A.txtAlign ? "" : {
            justifyContent: "flex-start",
            paddingLeft: "1.5rem"
          },
          on: {
            mousedown: A.move,
            touchstart: function (e) {
              return e.stopPropagation(), A.move(e)
            }
          }
        }, [t("span", {
          staticClass: "title"
        }, [A._v(A._s(A.title))])]), t("div", {
          ref: "bodys",
          staticClass: "body",
          style: {
            maxHeight: A.footerHeight ? "calc(100% - 54px - " + A.footerHeight + ")" : ""
          },
          on: {
            scroll: A.scroll
          }
        }, [A._t("default")], 2), A.footer ? t("div", {
          staticClass: "footer",
          style: {
            height: A.footerHeight ? A.footerHeight : "",
            overflow: A.footerOverFlow
          }
        }, [A._t("footer_btn", [t("a-button", {
          on: {
            click: A.cancel
          }
        }, [A._v("取消")]), t("a-button", {
          attrs: {
            type: "primary"
          },
          on: {
            click: A.confirm
          }
        }, [A._v("确认")])])], 2) : A._e(), A.mask ? t("div", {
          staticClass: "mask",
          style: {
            width: A.width,
            height: A.height
          }
        }) : A._e()]) : A._e(), A.visible && A.bigMask ? t("div", {
          key: "bigMask",
          ref: "bigMask",
          staticClass: "bigMask"
        }) : A._e()])
      },
      sA = [],
      iA = {
        name: "SwPopover",
        props: {
          width: {
            type: String,
            default: "520px"
          },
          height: {
            type: String,
            default: "500px"
          },
          show: {
            type: Boolean,
            default: !1
          },
          left: {
            type: Number
          },
          top: {
            type: Number
          },
          footer: {
            type: Boolean,
            default: !0
          },
          title: {
            type: String,
            default: "Title"
          },
          operation: {
            type: Object,
            default: () => ({
              screenshots: !0,
              minimize: !0,
              maximize: !0
            })
          },
          goBack: {
            type: Boolean,
            default: !1
          },
          txtAlign: {
            type: String,
            default: "left"
          },
          mask: {
            type: Boolean,
            default: !1
          },
          documentshadow: {},
          customClassName: {
            type: String
          },
          rolling: {
            type: Boolean,
            default: !1
          },
          WindowStyle: {
            type: String,
            default: "normal"
          },
          bigMask: {
            type: Boolean,
            default: !1
          },
          footerHeight: {
            type: String
          }
        },
        computed: {
          visible: {
            get() {
              return this.show
            },
            set(A) {
              this.$emit("update:show", A)
            }
          }
        },
        data() {
          return {
            opacity: 1,
            isFull: !1,
            isMinimize: !1,
            windowDefaultStyle: {},
            beLeft: 0,
            beTop: 0,
            scrollBottom: 30,
            scrollT: 0,
            emptyLeft: this.left || void 0,
            emptyTop: this.top || void 0,
            footerOverFlow: "visible"
          }
        },
        mounted() {},
        methods: {
          close() {
            this.isMinimize = !1, this.windowDefaultStyle = {}, this.isFull = !1, this.$emit("on-close", !1), this.visible = !1, this.footerOverFlow = "visible", this.bigMask && (this.$refs.bigMask.style.display = "none")
          },
          before_enter(A) {
            if (-1 !== A.className.indexOf("window-content") && !this.emptyLeft && !this.emptyTop) {
              var e = A.target,
                t = e || window.event,
                n = document.documentElement.scrollLeft || document.body.scrollLeft,
                r = document.documentElement.scrollTop || document.body.scrollTop;
              this.emptyLeft = t.pageX || t.clientX + n, this.emptyTop = t.pageY || t.clientY + r
            }
          },
          enter(A, e) {
            -1 !== A.className.indexOf("window-content") && (this.beLeft = document.documentElement.clientWidth / 2 - A.clientWidth / 2, this.beTop = document.documentElement.clientHeight / 2 - A.clientHeight / 2, M()(A, {
              opacity: 0,
              scale: 0,
              left: this.emptyLeft - A.clientWidth / 2,
              top: this.emptyTop - A.clientHeight / 2
            }, {
              duration: 0
            }), M()(A, {
              opacity: 1,
              scale: 1,
              left: this.beLeft,
              top: this.beTop
            }, {
              duration: 300
            }), M()(A, {
              complete: e
            }))
          },
          leave(A, e) {
            -1 !== A.className.indexOf("window-content") && (M()(A, {
              opacity: 1,
              scale: 1
            }, {
              duration: 0
            }), M()(A, {
              opacity: 0,
              scale: 0,
              left: this.emptyLeft - A.clientWidth / 2,
              top: this.emptyTop - A.clientHeight / 2
            }, {
              duration: 300
            }), this.emptyLeft = void 0, this.emptyTop = void 0, M()(A, {
              complete: e
            }))
          },
          move(A) {
            var e;
            A.preventDefault(), e = A.changedTouches ? A.changedTouches[0] : A;
            const t = this.$refs.moveWindow,
              n = e.clientX - t.offsetLeft,
              r = e.clientY - t.offsetTop;
            A.changedTouches ? (document.addEventListener("touchmove", A => {
              const e = A.changedTouches[0];
              let o = e.clientX - n,
                a = e.clientY - r;
              const s = document.documentElement.clientHeight - t.clientHeight,
                i = document.documentElement.clientWidth - t.clientWidth;
              o <= 0 && (o = 0), o >= i && (o = i), a <= 0 && (a = 0), a >= s && (a = s), t.style.left = o + "px", t.style.top = a + "px", this.windowDefaultStyle.left = o, this.windowDefaultStyle.top = a
            }, !1), document.ontouchend = () => {
              document.ontouchmove = null, document.touchend = null
            }) : (document.onmousemove = A => {
              console.log(document.documentElement.clientHeight);
              let e = A.clientX - n,
                o = A.clientY - r;
              const a = document.documentElement.clientHeight - t.clientHeight,
                s = document.documentElement.clientWidth - t.clientWidth;
              e <= 0 && (e = 0), e >= s && (e = s), o <= 0 && (o = 0), o >= a && (o = a), t.style.left = e + "px", t.style.top = o + "px", this.windowDefaultStyle.left = e, this.windowDefaultStyle.top = o
            }, document.onmouseup = () => {
              document.onmousemove = null, document.onmouseup = null
            })
          },
          fullScreen() {
            const A = this.$refs.moveWindow;
            this.footerOverFlow = "visible", this.isFull ? (A.style.width = this.windowDefaultStyle.width + "px", A.style.minHeight = "0px", A.style.top = this.windowDefaultStyle.top + "px", A.style.left = this.windowDefaultStyle.left + "px", this.isFull = !this.isFull, this.$emit("on-fullScreen", !1)) : (this.windowDefaultStyle.width = A.offsetWidth, this.windowDefaultStyle.height = A.offsetHeight, this.windowDefaultStyle.left = A.offsetLeft, this.windowDefaultStyle.top = A.offsetTop, A.style.width = "100vw", A.style.minHeight = "100vh", A.style.top = "0", A.style.left = "0", this.isFull = !this.isFull, this.$emit("on-fullScreen", !0))
          },
          minimize() {
            const A = this.$refs.moveWindow;
            this.windowDefaultStyle.left = A.offsetLeft, this.windowDefaultStyle.top = A.offsetTop, this.isMinimize ? (M()(A, {
              left: this.windowDefaultStyle.left,
              top: this.windowDefaultStyle.top,
              height: 54,
              width: 240
            }, {
              duration: 0
            }), M()(A, {
              left: this.beLeft,
              top: this.beTop,
              height: this.windowDefaultStyle.height,
              width: this.windowDefaultStyle.width
            }, {
              duration: 150
            }), this.isMinimize = !this.isMinimize, this.footerOverFlow = "visible", this.$emit("on-minimize", !1)) : (this.windowDefaultStyle.width = A.offsetWidth, this.windowDefaultStyle.height = A.offsetHeight, M()(A, {
              left: 0,
              top: document.documentElement.offsetHeight - this.$refs.header.offsetHeight,
              height: this.$refs.header.offsetHeight - ("dark" === this.WindowStyle ? 3 : 0),
              width: 365
            }, {
              duration: 150
            }), this.isMinimize = !this.isMinimize, this.footerOverFlow = "hidden", this.$emit("on-minimize", !0))
          },
          confirm() {
            this.$emit("on-confirm"), this.isMinimize = !1, this.windowDefaultStyle = {}, this.isFull = !1
          },
          cancel() {
            console.log("取消"), this.$emit("on-cancel"), this.close()
          },
          gotoBack() {
            console.log("返回"), this.$emit("go-back")
          },
          scroll(A) {
            if (this.scrollT = A.target.scrollTop, !this.rolling) return;
            const e = A.target.scrollTop + A.target.offsetHeight > A.target.scrollHeight - this.scrollBottom;
            e && this.$emit("on-scroll")
          },
          getScrollT() {
            return this.scrollT
          },
          toScroll(A) {
            this.$nextTick(() => {
              this.$refs.bodys.scrollTop = A
            })
          },
          appendDomToRoot(A, e) {
            var t;
            e && (t = document.querySelector(e)), t || (t = document.body), t.appendChild(A)
          }
        },
        watch: {
          visible() {
            this.visible && (console.log(this.customClassName), this.$nextTick(() => {
              this.appendDomToRoot(this.$refs.moveWindow, this.documentshadow)
            }))
          }
        }
      },
      lA = iA,
      cA = (t("fa7c"), Object(a["a"])(lA, aA, sA, !1, null, "d05731d4", null)),
      uA = cA.exports;
    console.log(uA), uA.install = function (A) {
      A.component(uA.name, uA)
    };
    var dA = uA,
      BA = function () {
        var A = this,
          e = A.$createElement;
        A._self._c;
        return A._m(0)
      },
      hA = [function () {
        var A = this,
          e = A.$createElement,
          t = A._self._c || e;
        return t("div", {
          staticClass: "sfw-home-page"
        }, [t("div", {
          attrs: {
            id: "leafContainer"
          }
        })])
      }],
      wA = {
        name: "SwSnowdown",
        props: {
          avatar: {
            type: String,
            default: "./"
          },
          imgWidth: {
            type: Number
          }
        },
        data() {
          return {
            isnewyear: !0,
            imageWidth: this.imgWidth || void 0
          }
        },
        mounted() {
          console.log(123), this.init()
        },
        methods: {
          randomInteger(A, e) {
            return A + Math.floor(Math.random() * (e - A))
          },
          pixelValue(A) {
            return A + "px"
          },
          durationValue(A) {
            return A + "s"
          },
          randomFloat(A, e) {
            return A + Math.random() * (e - A)
          },
          createALeaf() {
            var A = document.getElementsByClassName("sfw-home-page")[0].clientWidth,
              e = document.createElement("div"),
              t = document.createElement("img");
            t.src = this.avatar, this.imageWidth || (this.imageWidth = t.width), t.style.width = Math.floor(Math.random() * this.imageWidth) + "px", e.style.top = "-40px", e.style.left = this.pixelValue(this.randomInteger(0, A));
            var n = Math.random() < .5 ? "clockwiseSpin" : "counterclockwiseSpinAndFlip";
            e.style.webkitAnimationName = "fade, drop", t.style.webkitAnimationName = n;
            var r = this.durationValue(this.randomFloat(5, 11)),
              o = this.durationValue(this.randomFloat(4, 8));
            e.style.webkitAnimationDuration = r + ", " + r;
            var a = this.durationValue(this.randomFloat(0, 5));
            return e.style.webkitAnimationDelay = a + ", " + a, t.style.webkitAnimationDuration = o, e.appendChild(t), e
          },
          init() {
            const A = document.getElementById("leafContainer");
            for (var e = 0; e < 30; e++) A.appendChild(this.createALeaf());
            console.log(A)
          }
        }
      },
      fA = wA,
      gA = (t("2a8b"), Object(a["a"])(fA, BA, hA, !1, null, null, null)),
      pA = gA.exports;
    console.log(pA), pA.install = function (A) {
      A.component(pA.name, pA)
    };
    var QA = pA,
      mA = function () {
        var A = this,
          e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", {
          ref: "swtabletree",
          staticClass: "sw-table-tree"
        }, [n("a-affix", {
          attrs: {
            target: function () {
              return A.$refs.swtabletree
            },
            "offset-top": 0
          }
        }, [n("div", {
          staticClass: "layout-header"
        }, [n("div", {
          staticClass: "sw-tr",
          attrs: {
            "flex-box": "dir:left"
          }
        }, e._l(e.columns, (function (A) {
          return n("div", {
            key: "title_" + A.dataIndex,
            staticClass: "sw-th",
            style: "flex:" + (A.width ? "0 1 " + A.width : " 1 1 0 ")
          }, [e._v(" " + e._s(A.title) + " ")])
        })), 0)])]), n("div", {
          staticClass: "layout-content"
        }, [n("sw-table", e._b({
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 0 !== e.list.length,
            expression: "list.length !== 0"
          }],
          ref: "swtableref",
          attrs: {
            expandedRowKeys: e.expandedRowKeys
          },
          on: {
            expandedRowsChange: e.expandedRowsChange
          },
          scopedSlots: e._u([e._l(e.columns, (function (A) {
            return {
              key: A.dataIndex,
              fn: function (t) {
                var n = t.text,
                  r = t.record;
                return [e._t(A.dataIndex, null, {
                  text: n,
                  record: r
                })]
              }
            }
          }))], null, !0),
          model: {
            value: e.list,
            callback: function (A) {
              e.list = A
            },
            expression: "list"
          }
        }, "sw-table", e.$props, !1)), n("a-empty", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: 0 === e.list.length,
            expression: "list.length === 0"
          }]
        })], 1)], 1)
      },
      UA = [],
      CA = t("2d2d"),
      EA = {
        name: "table-tree",
        components: {
          SwTable: CA["default"]
        },
        props: {
          columns: {
            type: Array,
            default () {
              return [{
                title: "资源名称",
                dataIndex: "name",
                key: "name",
                with: "300px",
                scopedSlots: {
                  customRender: "type"
                }
              }, {
                title: "资源类型",
                dataIndex: "type",
                key: "type",
                with: "100px",
                scopedSlots: {
                  customRender: "type"
                }
              }, {
                title: "资源分类",
                dataIndex: "category",
                key: "category",
                with: "100px",
                scopedSlots: {
                  customRender: "type"
                }
              }, {
                title: "资源编码",
                dataIndex: "code",
                key: "code",
                with: "100px",
                scopedSlots: {
                  customRender: "type"
                }
              }, {
                title: "操作",
                dataIndex: "operation",
                key: "operation",
                scopedSlots: {
                  customRender: "type"
                }
              }]
            }
          },
          model: {
            type: String,
            default: "normal"
          },
          rank: {
            type: Object,
            default: function () {
              return {
                length: 3,
                key: "code"
              }
            }
          },
          value: {
            type: Array,
            default: function () {
              return [...t("718f")]
            }
          },
          expandedRowKeys: {
            type: Array,
            default: function () {
              return []
            }
          },
          parentId: {
            type: String,
            default: "parentId"
          },
          pagination: {
            pageSize: 8,
            total: 1,
            current: 1
          }
        },
        mounted() {
          console.log(this.value)
        },
        watch: {
          value() {
            this.$nextTick(() => {})
          }
        },
        methods: {
          expandedRowsChange(A, e) {
            this.$emit("expandedRowsChange", A, e)
          }
        },
        computed: {
          list: {
            get() {
              return this.value
            },
            set(A) {
              this.$emit("input", A)
            }
          }
        }
      },
      vA = EA,
      FA = (t("acf8"), Object(a["a"])(vA, mA, UA, !1, null, "34268e6a", null)),
      bA = FA.exports;
    bA.install = function (A) {
      A.component(bA.name, bA)
    };
    var HA = bA,
      yA = t("f23d");
    t("202f");
    n["a"].use(yA["a"]);
    const TA = [v, N, oA, dA, QA, HA],
      IA = function (A) {
        IA.installed || (IA.installed = !0, TA.map(e => A.component(e.name, e)))
      };
    "undefined" !== typeof window && window.Vue && IA(window.Vue);
    var NA = {
      install: IA,
      ...TA
    };
    const xA = t("4f09");

    function SA(A) {
      return A.replace(/\b(\w)(\w*)/g, (function (A, e, t) {
        return e.toUpperCase() + t.toLowerCase()
      })).replace(/-/g, "")
    }
    xA.keys().forEach(A => {
      const e = xA(A),
        t = e.default.name,
        r = SA(t);
      n["a"].component(r, e.default || e)
    }), n["a"].config.productionTip = !1, n["a"].use(NA), new n["a"]({
      router: w,
      store: g,
      render: A => A(l)
    }).$mount("#app")
  },
  c48d: function (A, e, t) {
    var n = t("2517");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("e329d56e", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  c6ed: function (A, e, t) {
    var n = t("24fb");
    e = n(!1), e.push([A.i, ".s-canvas[data-v-07e3786d]{cursor:pointer}", ""]), A.exports = e
  },
  cfef: function (A, e, t) {
    var n = t("99c8");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("9df63278", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  d5aa: function (A, e, t) {
    ! function (e, t) {
      A.exports = t()
    }(window, (function () {
      return function (A) {
        var e = {};

        function t(n) {
          if (e[n]) return e[n].exports;
          var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
          };
          return A[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        return t.m = A, t.c = e, t.d = function (A, e, n) {
          t.o(A, e) || Object.defineProperty(A, e, {
            enumerable: !0,
            get: n
          })
        }, t.r = function (A) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(A, "__esModule", {
            value: !0
          })
        }, t.t = function (A, e) {
          if (1 & e && (A = t(A)), 8 & e) return A;
          if (4 & e && "object" == typeof A && A && A.__esModule) return A;
          var n = Object.create(null);
          if (t.r(n), Object.defineProperty(n, "default", {
              enumerable: !0,
              value: A
            }), 2 & e && "string" != typeof A)
            for (var r in A) t.d(n, r, function (e) {
              return A[e]
            }.bind(null, r));
          return n
        }, t.n = function (A) {
          var e = A && A.__esModule ? function () {
            return A.default
          } : function () {
            return A
          };
          return t.d(e, "a", e), e
        }, t.o = function (A, e) {
          return Object.prototype.hasOwnProperty.call(A, e)
        }, t.p = "./", t(t.s = 11)
      }([function (A, e, t) {
        "use strict";

        function n(A, e) {
          return A.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
        }
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.css = function (A, e) {
          for (var t in e) A.style[t] = e[t]
        }, e.remove = function (A) {
          A instanceof HTMLElement ? A.parentNode.removeChild(A) : A instanceof HTMLCollection && Array.prototype.forEach.call(A, (function (A) {
            A.parentNode.removeChild(A)
          }))
        }, e.domType = function (A) {
          return Object.prototype.toString.call(A)
        }, e.hasClass = n, e.addClass = function (A, e) {
          n(A, e) || (A.className += " " + e)
        }, e.removeClass = function (A, e) {
          if (n(A, e)) {
            var t = new RegExp("(\\s|^)" + e + "(\\s|$)");
            A.className = A.className.replace(t, " ")
          }
        }, e.computed = function (A, e, t, n) {
          Object.defineProperty(A, e, {
            set: function (e) {
              t.forEach((function (r, o) {
                n[o](A, e, t[o])
              }))
            }
          })
        }, e.typeChecking = function (A) {
          return Object.prototype.toString.call(A)
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.getElementsByClassName("kssToolbarItemBT");
          Array.prototype.forEach.call(e, (function (A) {
            (0, n.removeClass)(A, "kssToolbarActiveItemBT")
          })), A ? ((0, n.addClass)(A, "kssToolbarActiveItemBT"), document.getElementById("kssRectangleCanvas").style.cursor = "crosshair") : document.getElementById("kssRectangleCanvas").style.cursor = "move"
        };
        var n = t(0)
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A, e) {
          "textLayer" === e ? ((0, n.css)(A.kssTextLayer, {
            "z-index": 99
          }), (0, n.css)(A.rectangleCanvas, {
            "z-index": 98
          })) : "canvasLayer" === e && ((0, n.css)(A.rectangleCanvas, {
            "z-index": 99
          }), (0, n.css)(A.kssTextLayer, {
            "z-index": 98
          }))
        };
        var n = t(0)
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          A.rectangleCanvas.getContext("2d").drawImage(A.rectangleCanvas, 0, 0, A.width * A.scale, A.height * A.scale, 0, 0, A.width * A.scale, A.height * A.scale);
          var e = A.rectangleCanvas.toDataURL("image/png");
          A.snapshootList.push(e), A.currentImgDom.src = e
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          A.rectangleCanvas.width = A.width * A.scale, A.rectangleCanvas.height = A.height * A.scale, A.rectangleCanvas.getContext("2d").drawImage(A.kss, A.startX * A.scale, (A.startY + A.scrollTop) * A.scale, A.width * A.scale, A.height * A.scale, 0, 0, A.width * A.scale, A.height * A.scale);
          var e = A.rectangleCanvas.toDataURL("image/png");
          A.imgBase64 = e, A.snapshootList[0] = e, A.currentImgDom.src = A.imgBase64
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          A.rectangleCanvas.getContext("2d").drawImage(A.currentImgDom, 0, 0, A.width * A.scale, A.height * A.scale, 0, 0, A.width * A.scale, A.height * A.scale)
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A, e, t, r, o, a) {
          console.log("toolbarPosition");
          var s = document.documentElement.clientHeight,
            i = A.toolbarWidth - e - o;
          i > 0 ? (0, n.css)(a, {
            right: "-" + i + "px"
          }) : (0, n.css)(a, {
            right: "0px"
          }), s - r - t - A.toolbarMarginTop - A.toolbarHeight < 0 ? r >= 35 ? (0, n.css)(a, {
            top: "-" + (A.toolbarHeight + A.toolbarMarginTop) + "px"
          }) : (0, n.css)(a, {
            top: A.toolbarMarginTop + "px"
          }) : (0, n.css)(a, {
            top: t + A.toolbarMarginTop + "px"
          })
        };
        var n = t(0)
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          (0, n.removeClass)(document.body, "kssBody"), A.kss && (0, n.remove)(A.kss), A.kssScreenShotWrapper && (0, n.remove)(A.kssScreenShotWrapper), A.style && (0, n.remove)(A.style), A.kss = null, A.rectangleCanvas = null, A.kssTextLayer = null, A.kssScreenShotWrapper = null, A.drawingStatus = null, A.toolbar = null, A.currentToolType = null, A.snapshootList = [], A.isScreenshot = !1, A.isEdit = !1, A.toolmousedown = null, A.toolmousemove = null, A.toolmouseup = null, document.removeEventListener("keydown", A.endScreenShot), setTimeout((function () {
            document.removeEventListener("contextmenu", A.preventContextMenu)
          }), 0), document.removeEventListener("keydown", A.endScreenShot), document.removeEventListener("mouseup", A.cancelDrawingStatus)
        };
        var n = t(0)
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          A.rectangleCanvas.width = A.width * A.scale, A.rectangleCanvas.height = A.height * A.scale, A.rectangleCanvas.getContext("2d").clearRect(0, 0, A.width, A.height)
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.documentElement.clientHeight,
            t = document.documentElement.clientWidth,
            n = A.clientX,
            r = A.clientY;
          return n < 0 && (n = 0), n > t && (n = t), r < 0 && (r = 0), r > e && (r = e), [n, r]
        }
      }, function (A, e) {
        A.exports = "data:image/vnd.microsoft.icon;base64,AAABAAQAICAAAAEACACoCAAARgAAABAQAAABAAgAaAUAAO4IAAAgIAAAAQAgAKgQAABWDgAAEBAAAAEAIABoBAAA/h4AACgAAAAgAAAAQAAAAAEACAAAAAAAAAQAAAAAAAAAAAAAAAEAAAABAAAAAAAAAFX/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wEBAQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8BAf//AQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wEB//8BAf8AAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD/AQH//wEB/wAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AP8BAf//AQH/AAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD//wEB//8BAf8AAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/////////AAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/////////////////////////////////////////////////////////////////////////////////////8P///+B////AP///wD///MA///xAP//8AD///AB///wB///8A////Af///wP///8H////D////x////8/////KAAAABAAAAAgAAAAAQAIAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAEAAAAAAAAAVf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAD/////AAAAAAAAAAAAAAD/AQEBAf8AAAAAAAAAAAD/AQH//wEB/wAAAAAAAAAA/wEB//8BAf8AAAAA//8AAP8BAf//AQH/AAAAAP8A/wD/AQH//wEB/wAAAAD/AAD//wEB//8BAf8AAAAA/wAAAP////////8AAAAAAP8AAAAAAAAA/wAAAAAAAAD/AAAAAAAA/wAAAAAAAAAA/wAAAAAA/wAAAAAAAAAAAP8AAAAA/wAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAA/wAA/wAAAAAAAAAAAAAAAP8A/wAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAA/D8AAPgfAADwDwAA8A8AADAPAAAQDwAAAA8AAAAfAAAAfwAAAP8AAAH/AAAD/wAAB/8AAA//AAAf/wAAP/8AACgAAAAgAAAAQAAAAAEAIAAAAAAAgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AFX//wBV//8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AFX//wBV/////////////wBV//8AVf///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAP////8AVf//AFX/////////////AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA////////////AFX//wBV/////////////wBV//8AVf///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA//////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////w////4H///8A////AP//8wD///EA///wAP//8AH///AH///wD///8B////A////wf///8P////H////z////8oAAAAEAAAACAAAAABACAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wBV//8AVf//AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AVf//AFX/////////////AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAP//////////AAAAAAAAAAD/////AFX//wBV/////////////wBV//8AVf///////wAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAA/////wBV//8AVf////////////8AVf//AFX///////8AAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD///////////8AVf//AFX/////////////AFX//wBV////////AAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP//////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA/wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAP8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAD/AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAA//////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPw/AAD4HwAA8A8AAPAPAAAwDwAAEA8AAAAPAAAAHwAAAH8AAAD/AAAB/wAAA/8AAAf/AAAP/wAAH/8AAD//AAA="
      }, function (A, e, t) {
        A.exports = t(12)
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
        var n = d(t(13)),
          r = t(0),
          o = d(t(15)),
          a = d(t(16)),
          s = d(t(4)),
          i = d(t(8)),
          l = d(t(7)),
          c = d(t(9)),
          u = d(t(6));

        function d(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
        d(t(10)), t(40);
        var B = function () {
          var A = void 0,
            e = function (e) {
              var t, n = this;
              return A || (this.kss = null, this.style = null, this.kssScreenShotWrapper = null, this.kssTextLayer = null, this.rectangleCanvas = null, this.toolbar = null, this.scale = window.devicePixelRatio || 1, this.currentImgDom = null, this.isScreenshot = !1, this.snapshootList = [], this.drawingStatus = null, this.currentToolType = null, this.imgBase64 = null, this.isEdit = !1, this.startX = null, this.startY = null, this.width = null, this.height = null, this.dotSize = 6, this.lineSize = 2, this.toolShow = e.toolShow, this.toolbarWidth = null, this.toolbarHeight = 30, this.toolbarMarginTop = 5, this.toolbarColor = "#fb3838", this.toolbarLineWidth = "[object Object]" === (0, r.typeChecking)(e.toolShow) ? (t = e.toolShow.drawLine, isNaN(t) || t > 10 ? 10 : t < 1 ? 1 : t) : 10, this.toolmousedown = null, this.toolmousemove = null, this.toolmouseup = null, this.copyPath = e.copyPath, this.needDownload = e.needDownload, this.endCB = e.endCB, this.cancelCB = e.cancelCB, this.startDrawDown = function (A) {
                var e;
                e = A.touches ? A.touches[0] : A;
                var t = n;
                if (document.addEventListener("mouseup", t.cancelDrawingStatus), document.addEventListener("touchend", t.cancelDrawingStatus), document.addEventListener("contextmenu", t.preventContextMenu), (0 === e.button || A.touches) && (null === t.drawingStatus || A.touches)) {
                  t.drawingStatus = 1, t.startX = e.clientX, t.startY = e.clientY, (0, r.remove)(document.getElementById("kssScreenShotWrapper"));
                  var o = document.createElement("div");
                  o.id = "kssScreenShotWrapper", t.kssScreenShotWrapper = o;
                  var a = document.createElement("div");
                  a.id = "kssTextLayer", t.kssTextLayer = a, o.appendChild(a), document.body.appendChild(o), document.addEventListener("mousemove", t.drawing), document.addEventListener("touchmove", t.drawing), document.addEventListener("mouseup", t.endDraw), document.addEventListener("touchend", t.endDraw)
                }
              }, this.drawing = function (A) {
                var e;
                e = A.touches ? A.touches[0] : A;
                var t = n;
                t.drawingStatus = 2;
                var o = (0, c.default)(e),
                  a = o[0],
                  s = o[1];
                (0, r.css)(t.kssScreenShotWrapper, {
                  height: Math.abs(s - t.startY) + "px",
                  width: Math.abs(a - t.startX) + "px",
                  top: Math.min(t.startY, s) + "px",
                  left: Math.min(t.startX, a) + "px"
                })
              }, this.endDraw = function (A) {
                var e;
                if (0 === (e = A.changedTouches ? A.changedTouches[0] : A).button || A.touches) {
                  var t = n;
                  if (t.drawingStatus = 3, t.startX === e.clientX && t.startY === e.clientY) {
                    var l = document.documentElement.clientHeight,
                      d = document.documentElement.clientWidth;
                    t.startX = 2, t.startY = 2, t.height = l - 4, t.width = d - 4, (0, r.css)(t.kssScreenShotWrapper, {
                      height: t.height + "px",
                      width: t.width + "px",
                      top: t.startY + "px",
                      left: t.startX + "px"
                    })
                  } else {
                    var B = (0, c.default)(e),
                      h = B[0],
                      w = B[1];
                    t.width = Math.abs(h - t.startX), t.height = Math.abs(w - t.startY), t.startX = Math.min(t.startX, h), t.startY = Math.min(t.startY, w)
                  }
                  document.removeEventListener("mousemove", t.drawing), document.removeEventListener("touchmove", t.drawing);
                  var f = document.createElement("canvas");
                  f.id = "kssRectangleCanvas", t.kssScreenShotWrapper.appendChild(f), t.rectangleCanvas = f, f.addEventListener("mousedown", (function (A) {
                    if (!t.isEdit && 2 !== A.button) {
                      (0, i.default)(t);
                      var e = A.clientX,
                        n = A.clientY;
                      document.addEventListener("mousemove", l), document.addEventListener("touchmove", l), document.addEventListener("mouseup", c), document.addEventListener("touchend", c);
                      var o = void 0,
                        a = void 0
                    }

                    function l(A) {
                      var s;
                      s = A.touches ? A.touches[0] : A;
                      var i = document.documentElement.clientHeight,
                        l = document.documentElement.clientWidth;
                      o = t.startY + s.clientY - n, t.startY + s.clientY - n + t.height > i && (o = i - t.height), t.startY + s.clientY - n < 0 && (o = 0), a = t.startX + s.clientX - e, t.startX + s.clientX - e + t.width > l && (a = l - t.width), t.startX + s.clientX - e < 0 && (a = 0), (0, r.css)(t.kssScreenShotWrapper, {
                        top: o + "px",
                        left: a + "px"
                      }), (0, u.default)(t, t.width, t.height, o, a, t.toolbar)
                    }

                    function c(A) {
                      void 0 === o && (o = t.startY), void 0 === a && (a = t.startX), t.startY = o, t.startX = a, document.removeEventListener("mousemove", l), document.removeEventListener("touchmove", l), document.removeEventListener("mouseup", c), document.removeEventListener("touchend", c), (0, s.default)(t)
                    }
                  })), f.addEventListener("touchstart", (function (A) {
                    var e = A.changedTouches[0];
                    if (!t.isEdit) {
                      (0, i.default)(t);
                      var n = e.clientX,
                        o = e.clientY;
                      document.addEventListener("mousemove", c), document.addEventListener("touchmove", c), document.addEventListener("mouseup", d), document.addEventListener("touchend", d);
                      var a = void 0,
                        l = void 0
                    }

                    function c(A) {
                      var e;
                      e = A.changedTouches ? A.changedTouches[0] : A;
                      var s = document.documentElement.clientHeight,
                        i = document.documentElement.clientWidth;
                      a = t.startY + e.clientY - o, t.startY + e.clientY - o + t.height > s && (a = s - t.height), t.startY + e.clientY - o < 0 && (a = 0), l = t.startX + e.clientX - n, t.startX + e.clientX - n + t.width > i && (l = i - t.width), t.startX + e.clientX - n < 0 && (l = 0), (0, r.css)(t.kssScreenShotWrapper, {
                        top: a + "px",
                        left: l + "px"
                      }), (0, u.default)(t, t.width, t.height, a, l, t.toolbar)
                    }

                    function d(A) {
                      void 0 === a && (a = t.startY), void 0 === l && (l = t.startX), t.startY = a, t.startX = l, document.removeEventListener("mousemove", c), document.removeEventListener("touchmove", c), document.removeEventListener("mouseup", d), document.removeEventListener("touchend", d), (0, s.default)(t)
                    }
                  })), t.kss.removeEventListener("mousedown", t.startDrawDown), t.kss.removeEventListener("touchstart", t.startDrawDown), document.removeEventListener("mouseup", t.endDraw), document.removeEventListener("touchend", t.endDraw), (0, o.default)(t.kssScreenShotWrapper, t.dotSize, t.lineSize, t);
                  var g = document.createElement("img");
                  g.id = "kssCurrentImgDom", t.kssScreenShotWrapper.appendChild(g), t.currentImgDom = g, (0, s.default)(t), t.toolbar = (0, a.default)(t)
                }
              }, this.preventContextMenu = function (A) {
                A.preventDefault()
              }, this.cancelDrawingStatus = function (A) {
                var e;
                e = A.changedTouches ? A.changedTouches[0] : A;
                var t = n;
                if (2 === e.button && !A.touches) {
                  if (null === t.drawingStatus) return document.removeEventListener("mouseup", t.cancelDrawingStatus), document.removeEventListener("touchend", t.cancelDrawingStatus), setTimeout((function () {
                    document.removeEventListener("contextmenu", t.preventContextMenu)
                  }), 0), (0, l.default)(t), void t.cancelCB();
                  (0, r.remove)(t.kssScreenShotWrapper), t.kssScreenShotWrapper = null, t.kssTextLayer = null, t.rectangleCanvas = null, t.drawingStatus = null, t.isEdit = !1, t.snapshootList = [], t.currentToolType = null, t.toolmousedown = null, t.toolmousemove = null, t.toolmouseup = null, t.kss.addEventListener("mousedown", t.startDrawDown), t.kss.addEventListener("touchstart", t.startDrawDown)
                }
              }, this.startScreenShot = function () {
                n.start()
              }, this.endScreenShot = function () {
                (0, l.default)(n)
              }, this.init(e.key, e.immediately), A = this)
            };
          return e.prototype.init = function (A, e) {
            var t = this;
            if (!0 === e && (t.start(), t.end()), void 0 === A) A = 65;
            else if (null === A) return;
            document.addEventListener("keydown", function (A, e) {
              e.keyCode === A && e.shiftKey && !t.isScreenshot && (t.start(), t.end())
            }.bind(null, A))
          }, e.prototype.start = function () {
            var A = this;
            A.isScreenshot || (A.isScreenshot = !0, (0, n.default)(document.body, {
              useCORS: !0,
              scrollY: 200
            }).then((function (e) {
              A.kss = e, A.scrollTop = document.documentElement.scrollTop, e.id = "kss", document.body.appendChild(e), (0, r.addClass)(document.body, "kssBody"), (0, r.css)(e, {
                top: "-" + A.scrollTop + "px"
              }), e.addEventListener("mousedown", A.startDrawDown), e.addEventListener("touchstart", A.startDrawDown)
            })))
          }, e.prototype.end = function () {
            var A = this;
            A.endScreenShot = function (e) {
              27 === e.keyCode && ((0, l.default)(A), A.cancelCB())
            }, document.addEventListener("keydown", A.endScreenShot)
          }, e
        }();
        e.default = B
      }, function (A, e, t) {
        "use strict";
        (function (A) {
          var t, n, r, o, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (A) {
            return typeof A
          } : function (A) {
            return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
          };
          o = function () {
            return function (A) {
              var e = {};

              function t(n) {
                if (e[n]) return e[n].exports;
                var r = e[n] = {
                  i: n,
                  l: !1,
                  exports: {}
                };
                return A[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
              }
              return t.m = A, t.c = e, t.d = function (A, e, n) {
                t.o(A, e) || Object.defineProperty(A, e, {
                  configurable: !1,
                  enumerable: !0,
                  get: n
                })
              }, t.n = function (A) {
                var e = A && A.__esModule ? function () {
                  return A.default
                } : function () {
                  return A
                };
                return t.d(e, "a", e), e
              }, t.o = function (A, e) {
                return Object.prototype.hasOwnProperty.call(A, e)
              }, t.p = "", t(t.s = 27)
            }([function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = function (A, e) {
                  if (Array.isArray(A)) return A;
                  if (Symbol.iterator in Object(A)) return function (A, e) {
                    var t = [],
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (var a, s = A[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !e || t.length !== e); n = !0);
                    } catch (A) {
                      r = !0, o = A
                    } finally {
                      try {
                        !n && s.return && s.return()
                      } finally {
                        if (r) throw o
                      }
                    }
                    return t
                  }(A, e);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                r = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                o = /^#([a-f0-9]{3})$/i,
                a = function (A) {
                  var e = A.match(o);
                  return !!e && [parseInt(e[1][0] + e[1][0], 16), parseInt(e[1][1] + e[1][1], 16), parseInt(e[1][2] + e[1][2], 16), null]
                },
                s = /^#([a-f0-9]{6})$/i,
                i = function (A) {
                  var e = A.match(s);
                  return !!e && [parseInt(e[1].substring(0, 2), 16), parseInt(e[1].substring(2, 4), 16), parseInt(e[1].substring(4, 6), 16), null]
                },
                l = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
                c = function (A) {
                  var e = A.match(l);
                  return !!e && [Number(e[1]), Number(e[2]), Number(e[3]), null]
                },
                u = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/,
                d = function (A) {
                  var e = A.match(u);
                  return !!(e && e.length > 4) && [Number(e[1]), Number(e[2]), Number(e[3]), Number(e[4])]
                },
                B = function () {
                  function A(e) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A);
                    var t = Array.isArray(e) ? function (A) {
                        return [Math.min(A[0], 255), Math.min(A[1], 255), Math.min(A[2], 255), A.length > 3 ? A[3] : null]
                      }(e) : a(e) || c(e) || d(e) || function (A) {
                        return h[A.toLowerCase()] || !1
                      }(e) || i(e) || [0, 0, 0, null],
                      r = n(t, 4),
                      o = r[0],
                      s = r[1],
                      l = r[2],
                      u = r[3];
                    this.r = o, this.g = s, this.b = l, this.a = u
                  }
                  return r(A, [{
                    key: "isTransparent",
                    value: function () {
                      return 0 === this.a
                    }
                  }, {
                    key: "toString",
                    value: function () {
                      return null !== this.a && 1 !== this.a ? "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")" : "rgb(" + this.r + "," + this.g + "," + this.b + ")"
                    }
                  }]), A
                }();
              e.default = B;
              var h = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, null],
                antiquewhite: [250, 235, 215, null],
                aqua: [0, 255, 255, null],
                aquamarine: [127, 255, 212, null],
                azure: [240, 255, 255, null],
                beige: [245, 245, 220, null],
                bisque: [255, 228, 196, null],
                black: [0, 0, 0, null],
                blanchedalmond: [255, 235, 205, null],
                blue: [0, 0, 255, null],
                blueviolet: [138, 43, 226, null],
                brown: [165, 42, 42, null],
                burlywood: [222, 184, 135, null],
                cadetblue: [95, 158, 160, null],
                chartreuse: [127, 255, 0, null],
                chocolate: [210, 105, 30, null],
                coral: [255, 127, 80, null],
                cornflowerblue: [100, 149, 237, null],
                cornsilk: [255, 248, 220, null],
                crimson: [220, 20, 60, null],
                cyan: [0, 255, 255, null],
                darkblue: [0, 0, 139, null],
                darkcyan: [0, 139, 139, null],
                darkgoldenrod: [184, 134, 11, null],
                darkgray: [169, 169, 169, null],
                darkgreen: [0, 100, 0, null],
                darkgrey: [169, 169, 169, null],
                darkkhaki: [189, 183, 107, null],
                darkmagenta: [139, 0, 139, null],
                darkolivegreen: [85, 107, 47, null],
                darkorange: [255, 140, 0, null],
                darkorchid: [153, 50, 204, null],
                darkred: [139, 0, 0, null],
                darksalmon: [233, 150, 122, null],
                darkseagreen: [143, 188, 143, null],
                darkslateblue: [72, 61, 139, null],
                darkslategray: [47, 79, 79, null],
                darkslategrey: [47, 79, 79, null],
                darkturquoise: [0, 206, 209, null],
                darkviolet: [148, 0, 211, null],
                deeppink: [255, 20, 147, null],
                deepskyblue: [0, 191, 255, null],
                dimgray: [105, 105, 105, null],
                dimgrey: [105, 105, 105, null],
                dodgerblue: [30, 144, 255, null],
                firebrick: [178, 34, 34, null],
                floralwhite: [255, 250, 240, null],
                forestgreen: [34, 139, 34, null],
                fuchsia: [255, 0, 255, null],
                gainsboro: [220, 220, 220, null],
                ghostwhite: [248, 248, 255, null],
                gold: [255, 215, 0, null],
                goldenrod: [218, 165, 32, null],
                gray: [128, 128, 128, null],
                green: [0, 128, 0, null],
                greenyellow: [173, 255, 47, null],
                grey: [128, 128, 128, null],
                honeydew: [240, 255, 240, null],
                hotpink: [255, 105, 180, null],
                indianred: [205, 92, 92, null],
                indigo: [75, 0, 130, null],
                ivory: [255, 255, 240, null],
                khaki: [240, 230, 140, null],
                lavender: [230, 230, 250, null],
                lavenderblush: [255, 240, 245, null],
                lawngreen: [124, 252, 0, null],
                lemonchiffon: [255, 250, 205, null],
                lightblue: [173, 216, 230, null],
                lightcoral: [240, 128, 128, null],
                lightcyan: [224, 255, 255, null],
                lightgoldenrodyellow: [250, 250, 210, null],
                lightgray: [211, 211, 211, null],
                lightgreen: [144, 238, 144, null],
                lightgrey: [211, 211, 211, null],
                lightpink: [255, 182, 193, null],
                lightsalmon: [255, 160, 122, null],
                lightseagreen: [32, 178, 170, null],
                lightskyblue: [135, 206, 250, null],
                lightslategray: [119, 136, 153, null],
                lightslategrey: [119, 136, 153, null],
                lightsteelblue: [176, 196, 222, null],
                lightyellow: [255, 255, 224, null],
                lime: [0, 255, 0, null],
                limegreen: [50, 205, 50, null],
                linen: [250, 240, 230, null],
                magenta: [255, 0, 255, null],
                maroon: [128, 0, 0, null],
                mediumaquamarine: [102, 205, 170, null],
                mediumblue: [0, 0, 205, null],
                mediumorchid: [186, 85, 211, null],
                mediumpurple: [147, 112, 219, null],
                mediumseagreen: [60, 179, 113, null],
                mediumslateblue: [123, 104, 238, null],
                mediumspringgreen: [0, 250, 154, null],
                mediumturquoise: [72, 209, 204, null],
                mediumvioletred: [199, 21, 133, null],
                midnightblue: [25, 25, 112, null],
                mintcream: [245, 255, 250, null],
                mistyrose: [255, 228, 225, null],
                moccasin: [255, 228, 181, null],
                navajowhite: [255, 222, 173, null],
                navy: [0, 0, 128, null],
                oldlace: [253, 245, 230, null],
                olive: [128, 128, 0, null],
                olivedrab: [107, 142, 35, null],
                orange: [255, 165, 0, null],
                orangered: [255, 69, 0, null],
                orchid: [218, 112, 214, null],
                palegoldenrod: [238, 232, 170, null],
                palegreen: [152, 251, 152, null],
                paleturquoise: [175, 238, 238, null],
                palevioletred: [219, 112, 147, null],
                papayawhip: [255, 239, 213, null],
                peachpuff: [255, 218, 185, null],
                peru: [205, 133, 63, null],
                pink: [255, 192, 203, null],
                plum: [221, 160, 221, null],
                powderblue: [176, 224, 230, null],
                purple: [128, 0, 128, null],
                rebeccapurple: [102, 51, 153, null],
                red: [255, 0, 0, null],
                rosybrown: [188, 143, 143, null],
                royalblue: [65, 105, 225, null],
                saddlebrown: [139, 69, 19, null],
                salmon: [250, 128, 114, null],
                sandybrown: [244, 164, 96, null],
                seagreen: [46, 139, 87, null],
                seashell: [255, 245, 238, null],
                sienna: [160, 82, 45, null],
                silver: [192, 192, 192, null],
                skyblue: [135, 206, 235, null],
                slateblue: [106, 90, 205, null],
                slategray: [112, 128, 144, null],
                slategrey: [112, 128, 144, null],
                snow: [255, 250, 250, null],
                springgreen: [0, 255, 127, null],
                steelblue: [70, 130, 180, null],
                tan: [210, 180, 140, null],
                teal: [0, 128, 128, null],
                thistle: [216, 191, 216, null],
                tomato: [255, 99, 71, null],
                turquoise: [64, 224, 208, null],
                violet: [238, 130, 238, null],
                wheat: [245, 222, 179, null],
                white: [255, 255, 255, null],
                whitesmoke: [245, 245, 245, null],
                yellow: [255, 255, 0, null],
                yellowgreen: [154, 205, 50, null]
              };
              e.TRANSPARENT = new B([0, 0, 0, 0])
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.calculateLengthFromValueWithUnit = e.LENGTH_TYPE = void 0;
              var n, r = function () {
                function A(A, e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                  }
                }
                return function (e, t, n) {
                  return t && A(e.prototype, t), n && A(e, n), e
                }
              }();
              (n = t(3)) && n.__esModule;
              var o = e.LENGTH_TYPE = {
                  PX: 0,
                  PERCENTAGE: 1
                },
                a = function () {
                  function A(e) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.type = "%" === e.substr(e.length - 1) ? o.PERCENTAGE : o.PX;
                    var t = parseFloat(e);
                    this.value = isNaN(t) ? 0 : t
                  }
                  return r(A, [{
                    key: "isPercentage",
                    value: function () {
                      return this.type === o.PERCENTAGE
                    }
                  }, {
                    key: "getAbsoluteValue",
                    value: function (A) {
                      return this.isPercentage() ? A * (this.value / 100) : this.value
                    }
                  }], [{
                    key: "create",
                    value: function (e) {
                      return new A(e)
                    }
                  }]), A
                }();
              e.default = a, e.calculateLengthFromValueWithUnit = function (A, e, t) {
                switch (t) {
                  case "px":
                  case "%":
                    return new a(e + t);
                  case "em":
                  case "rem":
                    var n = new a(e);
                    return n.value *= "em" === t ? parseFloat(A.style.font.fontSize) : function A(e) {
                      var t = e.parent;
                      return t ? A(t) : parseFloat(e.style.font.fontSize)
                    }(A), n;
                  default:
                    return new a("0")
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseBoundCurves = e.calculatePaddingBoxPath = e.calculateBorderBoxPath = e.parsePathForBorder = e.parseDocumentSize = e.calculateContentBox = e.calculatePaddingBox = e.parseBounds = e.Bounds = void 0;
              var n = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                r = a(t(7)),
                o = a(t(32));

              function a(A) {
                return A && A.__esModule ? A : {
                  default: A
                }
              }
              var s = e.Bounds = function () {
                  function A(e, t, n, r) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.left = e, this.top = t, this.width = n, this.height = r
                  }
                  return n(A, null, [{
                    key: "fromClientRect",
                    value: function (e, t, n) {
                      return new A(e.left + t, e.top + n, e.width, e.height)
                    }
                  }]), A
                }(),
                i = (e.parseBounds = function (A, e, t) {
                  return s.fromClientRect(A.getBoundingClientRect(), e, t)
                }, e.calculatePaddingBox = function (A, e) {
                  return new s(A.left + e[3].borderWidth, A.top + e[0].borderWidth, A.width - (e[1].borderWidth + e[3].borderWidth), A.height - (e[0].borderWidth + e[2].borderWidth))
                }, e.calculateContentBox = function (A, e, t) {
                  var n = e[0].value,
                    r = e[1].value,
                    o = e[2].value,
                    a = e[3].value;
                  return new s(A.left + a + t[3].borderWidth, A.top + n + t[0].borderWidth, A.width - (t[1].borderWidth + t[3].borderWidth + a + r), A.height - (t[0].borderWidth + t[2].borderWidth + n + o))
                }, e.parseDocumentSize = function (A) {
                  var e = A.body,
                    t = A.documentElement;
                  if (!e || !t) throw new Error("");
                  var n = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)),
                    r = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
                  return new s(0, 0, n, r)
                }, e.parsePathForBorder = function (A, e) {
                  switch (e) {
                    case 0:
                      return i(A.topLeftOuter, A.topLeftInner, A.topRightOuter, A.topRightInner);
                    case 1:
                      return i(A.topRightOuter, A.topRightInner, A.bottomRightOuter, A.bottomRightInner);
                    case 2:
                      return i(A.bottomRightOuter, A.bottomRightInner, A.bottomLeftOuter, A.bottomLeftInner);
                    case 3:
                    default:
                      return i(A.bottomLeftOuter, A.bottomLeftInner, A.topLeftOuter, A.topLeftInner)
                  }
                }, function (A, e, t, n) {
                  var r = [];
                  return A instanceof o.default ? r.push(A.subdivide(.5, !1)) : r.push(A), t instanceof o.default ? r.push(t.subdivide(.5, !0)) : r.push(t), n instanceof o.default ? r.push(n.subdivide(.5, !0).reverse()) : r.push(n), e instanceof o.default ? r.push(e.subdivide(.5, !1).reverse()) : r.push(e), r
                }),
                l = (e.calculateBorderBoxPath = function (A) {
                  return [A.topLeftOuter, A.topRightOuter, A.bottomRightOuter, A.bottomLeftOuter]
                }, e.calculatePaddingBoxPath = function (A) {
                  return [A.topLeftInner, A.topRightInner, A.bottomRightInner, A.bottomLeftInner]
                }, e.parseBoundCurves = function (A, e, t) {
                  var n = t[l.TOP_LEFT][0].getAbsoluteValue(A.width),
                    o = t[l.TOP_LEFT][1].getAbsoluteValue(A.height),
                    a = t[l.TOP_RIGHT][0].getAbsoluteValue(A.width),
                    s = t[l.TOP_RIGHT][1].getAbsoluteValue(A.height),
                    i = t[l.BOTTOM_RIGHT][0].getAbsoluteValue(A.width),
                    u = t[l.BOTTOM_RIGHT][1].getAbsoluteValue(A.height),
                    d = t[l.BOTTOM_LEFT][0].getAbsoluteValue(A.width),
                    B = t[l.BOTTOM_LEFT][1].getAbsoluteValue(A.height),
                    h = [];
                  h.push((n + a) / A.width), h.push((d + i) / A.width), h.push((o + B) / A.height), h.push((s + u) / A.height);
                  var w = Math.max.apply(Math, h);
                  w > 1 && (n /= w, o /= w, a /= w, s /= w, i /= w, u /= w, d /= w, B /= w);
                  var f = A.width - a,
                    g = A.height - u,
                    p = A.width - i,
                    Q = A.height - B;
                  return {
                    topLeftOuter: n > 0 || o > 0 ? c(A.left, A.top, n, o, l.TOP_LEFT) : new r.default(A.left, A.top),
                    topLeftInner: n > 0 || o > 0 ? c(A.left + e[3].borderWidth, A.top + e[0].borderWidth, Math.max(0, n - e[3].borderWidth), Math.max(0, o - e[0].borderWidth), l.TOP_LEFT) : new r.default(A.left + e[3].borderWidth, A.top + e[0].borderWidth),
                    topRightOuter: a > 0 || s > 0 ? c(A.left + f, A.top, a, s, l.TOP_RIGHT) : new r.default(A.left + A.width, A.top),
                    topRightInner: a > 0 || s > 0 ? c(A.left + Math.min(f, A.width + e[3].borderWidth), A.top + e[0].borderWidth, f > A.width + e[3].borderWidth ? 0 : a - e[3].borderWidth, s - e[0].borderWidth, l.TOP_RIGHT) : new r.default(A.left + A.width - e[1].borderWidth, A.top + e[0].borderWidth),
                    bottomRightOuter: i > 0 || u > 0 ? c(A.left + p, A.top + g, i, u, l.BOTTOM_RIGHT) : new r.default(A.left + A.width, A.top + A.height),
                    bottomRightInner: i > 0 || u > 0 ? c(A.left + Math.min(p, A.width - e[3].borderWidth), A.top + Math.min(g, A.height + e[0].borderWidth), Math.max(0, i - e[1].borderWidth), u - e[2].borderWidth, l.BOTTOM_RIGHT) : new r.default(A.left + A.width - e[1].borderWidth, A.top + A.height - e[2].borderWidth),
                    bottomLeftOuter: d > 0 || B > 0 ? c(A.left, A.top + Q, d, B, l.BOTTOM_LEFT) : new r.default(A.left, A.top + A.height),
                    bottomLeftInner: d > 0 || B > 0 ? c(A.left + e[3].borderWidth, A.top + Q, Math.max(0, d - e[3].borderWidth), B - e[2].borderWidth, l.BOTTOM_LEFT) : new r.default(A.left + e[3].borderWidth, A.top + A.height - e[2].borderWidth)
                  }
                }, {
                  TOP_LEFT: 0,
                  TOP_RIGHT: 1,
                  BOTTOM_RIGHT: 2,
                  BOTTOM_LEFT: 3
                }),
                c = function (A, e, t, n, a) {
                  var s = (Math.sqrt(2) - 1) / 3 * 4,
                    i = t * s,
                    c = n * s,
                    u = A + t,
                    d = e + n;
                  switch (a) {
                    case l.TOP_LEFT:
                      return new o.default(new r.default(A, d), new r.default(A, d - c), new r.default(u - i, e), new r.default(u, e));
                    case l.TOP_RIGHT:
                      return new o.default(new r.default(A, e), new r.default(A + i, e), new r.default(u, d - c), new r.default(u, d));
                    case l.BOTTOM_RIGHT:
                      return new o.default(new r.default(u, e), new r.default(u, e + c), new r.default(A + i, d), new r.default(A, d));
                    case l.BOTTOM_LEFT:
                    default:
                      return new o.default(new r.default(u, d), new r.default(u - i, d), new r.default(A, e + c), new r.default(A, e))
                  }
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n, r = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                o = (n = t(0)) && n.__esModule ? n : {
                  default: n
                },
                a = t(4),
                s = t(5),
                i = t(12),
                l = t(33),
                c = t(34),
                u = t(35),
                d = t(36),
                B = t(37),
                h = t(38),
                w = t(8),
                f = t(39),
                g = t(40),
                p = t(18),
                Q = t(17),
                m = t(19),
                U = t(11),
                C = t(41),
                E = t(20),
                v = t(42),
                F = t(43),
                b = t(44),
                H = t(45),
                y = t(2),
                T = t(21),
                I = t(14),
                N = ["INPUT", "TEXTAREA", "SELECT"],
                x = function () {
                  function A(e, t, n, r) {
                    var a = this;
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.parent = t, this.tagName = e.tagName, this.index = r, this.childNodes = [], this.listItems = [], "number" == typeof e.start && (this.listStart = e.start);
                    var x = e.ownerDocument.defaultView,
                      L = x.pageXOffset,
                      k = x.pageYOffset,
                      K = x.getComputedStyle(e, null),
                      M = (0, c.parseDisplay)(K.display),
                      _ = "radio" === e.type || "checkbox" === e.type,
                      D = (0, m.parsePosition)(K.position);
                    if (this.style = {
                        background: _ ? T.INPUT_BACKGROUND : (0, s.parseBackground)(K, n),
                        border: _ ? T.INPUT_BORDERS : (0, i.parseBorder)(K),
                        borderRadius: (e instanceof x.HTMLInputElement || e instanceof HTMLInputElement) && _ ? (0, T.getInputBorderRadius)(e) : (0, l.parseBorderRadius)(K),
                        color: _ ? T.INPUT_COLOR : new o.default(K.color),
                        display: M,
                        float: (0, u.parseCSSFloat)(K.float),
                        font: (0, d.parseFont)(K),
                        letterSpacing: (0, B.parseLetterSpacing)(K.letterSpacing),
                        listStyle: M === c.DISPLAY.LIST_ITEM ? (0, w.parseListStyle)(K) : null,
                        lineBreak: (0, h.parseLineBreak)(K.lineBreak),
                        margin: (0, f.parseMargin)(K),
                        opacity: parseFloat(K.opacity),
                        overflow: -1 === N.indexOf(e.tagName) ? (0, g.parseOverflow)(K.overflow) : g.OVERFLOW.HIDDEN,
                        overflowWrap: (0, p.parseOverflowWrap)(K.overflowWrap ? K.overflowWrap : K.wordWrap),
                        padding: (0, Q.parsePadding)(K),
                        position: D,
                        textDecoration: (0, U.parseTextDecoration)(K),
                        textShadow: (0, C.parseTextShadow)(K.textShadow),
                        textTransform: (0, E.parseTextTransform)(K.textTransform),
                        transform: (0, v.parseTransform)(K),
                        visibility: (0, F.parseVisibility)(K.visibility),
                        wordBreak: (0, b.parseWordBreak)(K.wordBreak),
                        zIndex: (0, H.parseZIndex)(D !== m.POSITION.STATIC ? K.zIndex : "auto")
                      }, this.isTransformed() && (e.style.transform = "matrix(1,0,0,1,0,0)"), M === c.DISPLAY.LIST_ITEM) {
                      var O = (0, I.getListOwner)(this);
                      if (O) {
                        var R = O.listItems.length;
                        O.listItems.push(this), this.listIndex = e.hasAttribute("value") && "number" == typeof e.value ? e.value : 0 === R ? "number" == typeof O.listStart ? O.listStart : 1 : O.listItems[R - 1].listIndex + 1
                      }
                    }
                    "IMG" === e.tagName && e.addEventListener("load", (function () {
                      a.bounds = (0, y.parseBounds)(e, L, k), a.curvedBounds = (0, y.parseBoundCurves)(a.bounds, a.style.border, a.style.borderRadius)
                    })), this.image = S(e, n), this.bounds = _ ? (0, T.reformatInputBounds)((0, y.parseBounds)(e, L, k)) : (0, y.parseBounds)(e, L, k), this.curvedBounds = (0, y.parseBoundCurves)(this.bounds, this.style.border, this.style.borderRadius)
                  }
                  return r(A, [{
                    key: "getClipPaths",
                    value: function () {
                      var A = this.parent ? this.parent.getClipPaths() : [];
                      return this.style.overflow !== g.OVERFLOW.VISIBLE ? A.concat([(0, y.calculatePaddingBoxPath)(this.curvedBounds)]) : A
                    }
                  }, {
                    key: "isInFlow",
                    value: function () {
                      return this.isRootElement() && !this.isFloating() && !this.isAbsolutelyPositioned()
                    }
                  }, {
                    key: "isVisible",
                    value: function () {
                      return !(0, a.contains)(this.style.display, c.DISPLAY.NONE) && this.style.opacity > 0 && this.style.visibility === F.VISIBILITY.VISIBLE
                    }
                  }, {
                    key: "isAbsolutelyPositioned",
                    value: function () {
                      return this.style.position !== m.POSITION.STATIC && this.style.position !== m.POSITION.RELATIVE
                    }
                  }, {
                    key: "isPositioned",
                    value: function () {
                      return this.style.position !== m.POSITION.STATIC
                    }
                  }, {
                    key: "isFloating",
                    value: function () {
                      return this.style.float !== u.FLOAT.NONE
                    }
                  }, {
                    key: "isRootElement",
                    value: function () {
                      return null === this.parent
                    }
                  }, {
                    key: "isTransformed",
                    value: function () {
                      return null !== this.style.transform
                    }
                  }, {
                    key: "isPositionedWithZIndex",
                    value: function () {
                      return this.isPositioned() && !this.style.zIndex.auto
                    }
                  }, {
                    key: "isInlineLevel",
                    value: function () {
                      return (0, a.contains)(this.style.display, c.DISPLAY.INLINE) || (0, a.contains)(this.style.display, c.DISPLAY.INLINE_BLOCK) || (0, a.contains)(this.style.display, c.DISPLAY.INLINE_FLEX) || (0, a.contains)(this.style.display, c.DISPLAY.INLINE_GRID) || (0, a.contains)(this.style.display, c.DISPLAY.INLINE_LIST_ITEM) || (0, a.contains)(this.style.display, c.DISPLAY.INLINE_TABLE)
                    }
                  }, {
                    key: "isInlineBlockOrInlineTable",
                    value: function () {
                      return (0, a.contains)(this.style.display, c.DISPLAY.INLINE_BLOCK) || (0, a.contains)(this.style.display, c.DISPLAY.INLINE_TABLE)
                    }
                  }]), A
                }();
              e.default = x;
              var S = function (A, e) {
                if (A instanceof A.ownerDocument.defaultView.SVGSVGElement || A instanceof SVGSVGElement) {
                  var t = new XMLSerializer;
                  return e.loadImage("data:image/svg+xml," + encodeURIComponent(t.serializeToString(A)))
                }
                switch (A.tagName) {
                  case "IMG":
                    var n = A;
                    return e.loadImage(n.currentSrc || n.src);
                  case "CANVAS":
                    var r = A;
                    return e.loadCanvas(r);
                  case "IFRAME":
                    var o = A.getAttribute("data-html2canvas-internal-iframe-key");
                    if (o) return o
                }
                return null
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.contains = function (A, e) {
                return 0 != (A & e)
              }, e.distance = function (A, e) {
                return Math.sqrt(A * A + e * e)
              }, e.copyCSSStyles = function (A, e) {
                for (var t = A.length - 1; t >= 0; t--) {
                  var n = A.item(t);
                  "content" !== n && e.style.setProperty(n, A.getPropertyValue(n))
                }
                return e
              }, e.SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseBackgroundImage = e.parseBackground = e.calculateBackgroundRepeatPath = e.calculateBackgroundPosition = e.calculateBackgroungPositioningArea = e.calculateBackgroungPaintingArea = e.calculateGradientBackgroundSize = e.calculateBackgroundSize = e.BACKGROUND_ORIGIN = e.BACKGROUND_CLIP = e.BACKGROUND_SIZE = e.BACKGROUND_REPEAT = void 0;
              var n = l(t(0)),
                r = l(t(1)),
                o = l(t(31)),
                a = l(t(7)),
                s = t(2),
                i = t(17);

              function l(A) {
                return A && A.__esModule ? A : {
                  default: A
                }
              }
              var c = e.BACKGROUND_REPEAT = {
                  REPEAT: 0,
                  NO_REPEAT: 1,
                  REPEAT_X: 2,
                  REPEAT_Y: 3
                },
                u = e.BACKGROUND_SIZE = {
                  AUTO: 0,
                  CONTAIN: 1,
                  COVER: 2,
                  LENGTH: 3
                },
                d = e.BACKGROUND_CLIP = {
                  BORDER_BOX: 0,
                  PADDING_BOX: 1,
                  CONTENT_BOX: 2
                },
                B = e.BACKGROUND_ORIGIN = d,
                h = function A(e) {
                  switch (function (A, e) {
                    if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                  }(this, A), e) {
                    case "contain":
                      this.size = u.CONTAIN;
                      break;
                    case "cover":
                      this.size = u.COVER;
                      break;
                    case "auto":
                      this.size = u.AUTO;
                      break;
                    default:
                      this.value = new r.default(e)
                  }
                },
                w = (e.calculateBackgroundSize = function (A, e, t) {
                  var n = 0,
                    r = 0,
                    a = A.size;
                  if (a[0].size === u.CONTAIN || a[0].size === u.COVER) {
                    var s = t.width / t.height,
                      i = e.width / e.height;
                    return s < i != (a[0].size === u.COVER) ? new o.default(t.width, t.width / i) : new o.default(t.height * i, t.height)
                  }
                  return a[0].value && (n = a[0].value.getAbsoluteValue(t.width)), a[0].size === u.AUTO && a[1].size === u.AUTO ? r = e.height : a[1].size === u.AUTO ? r = n / e.width * e.height : a[1].value && (r = a[1].value.getAbsoluteValue(t.height)), a[0].size === u.AUTO && (n = r / e.height * e.width), new o.default(n, r)
                }, e.calculateGradientBackgroundSize = function (A, e) {
                  var t = A.size,
                    n = t[0].value ? t[0].value.getAbsoluteValue(e.width) : e.width,
                    r = t[1].value ? t[1].value.getAbsoluteValue(e.height) : t[0].value ? n : e.height;
                  return new o.default(n, r)
                }, new h("auto")),
                f = (e.calculateBackgroungPaintingArea = function (A, e) {
                  switch (e) {
                    case d.BORDER_BOX:
                      return (0, s.calculateBorderBoxPath)(A);
                    case d.PADDING_BOX:
                    default:
                      return (0, s.calculatePaddingBoxPath)(A)
                  }
                }, e.calculateBackgroungPositioningArea = function (A, e, t, n) {
                  var r = (0, s.calculatePaddingBox)(e, n);
                  switch (A) {
                    case B.BORDER_BOX:
                      return e;
                    case B.CONTENT_BOX:
                      var o = t[i.PADDING_SIDES.LEFT].getAbsoluteValue(e.width),
                        a = t[i.PADDING_SIDES.RIGHT].getAbsoluteValue(e.width),
                        l = t[i.PADDING_SIDES.TOP].getAbsoluteValue(e.width),
                        c = t[i.PADDING_SIDES.BOTTOM].getAbsoluteValue(e.width);
                      return new s.Bounds(r.left + o, r.top + l, r.width - o - a, r.height - l - c);
                    case B.PADDING_BOX:
                    default:
                      return r
                  }
                }, e.calculateBackgroundPosition = function (A, e, t) {
                  return new a.default(A[0].getAbsoluteValue(t.width - e.width), A[1].getAbsoluteValue(t.height - e.height))
                }, e.calculateBackgroundRepeatPath = function (A, e, t, n, r) {
                  switch (A.repeat) {
                    case c.REPEAT_X:
                      return [new a.default(Math.round(r.left), Math.round(n.top + e.y)), new a.default(Math.round(r.left + r.width), Math.round(n.top + e.y)), new a.default(Math.round(r.left + r.width), Math.round(t.height + n.top + e.y)), new a.default(Math.round(r.left), Math.round(t.height + n.top + e.y))];
                    case c.REPEAT_Y:
                      return [new a.default(Math.round(n.left + e.x), Math.round(r.top)), new a.default(Math.round(n.left + e.x + t.width), Math.round(r.top)), new a.default(Math.round(n.left + e.x + t.width), Math.round(r.height + r.top)), new a.default(Math.round(n.left + e.x), Math.round(r.height + r.top))];
                    case c.NO_REPEAT:
                      return [new a.default(Math.round(n.left + e.x), Math.round(n.top + e.y)), new a.default(Math.round(n.left + e.x + t.width), Math.round(n.top + e.y)), new a.default(Math.round(n.left + e.x + t.width), Math.round(n.top + e.y + t.height)), new a.default(Math.round(n.left + e.x), Math.round(n.top + e.y + t.height))];
                    default:
                      return [new a.default(Math.round(r.left), Math.round(r.top)), new a.default(Math.round(r.left + r.width), Math.round(r.top)), new a.default(Math.round(r.left + r.width), Math.round(r.height + r.top)), new a.default(Math.round(r.left), Math.round(r.height + r.top))]
                  }
                }, e.parseBackground = function (A, e) {
                  return {
                    backgroundColor: new n.default(A.backgroundColor),
                    backgroundImage: p(A, e),
                    backgroundClip: f(A.backgroundClip),
                    backgroundOrigin: g(A.backgroundOrigin)
                  }
                }, function (A) {
                  switch (A) {
                    case "padding-box":
                      return d.PADDING_BOX;
                    case "content-box":
                      return d.CONTENT_BOX
                  }
                  return d.BORDER_BOX
                }),
                g = function (A) {
                  switch (A) {
                    case "padding-box":
                      return B.PADDING_BOX;
                    case "content-box":
                      return B.CONTENT_BOX
                  }
                  return B.BORDER_BOX
                },
                p = function (A, e) {
                  var t = U(A.backgroundImage).map((function (A) {
                      if ("url" === A.method) {
                        var t = e.loadImage(A.args[0]);
                        A.args = t ? [t] : []
                      }
                      return A
                    })),
                    n = A.backgroundPosition.split(","),
                    r = A.backgroundRepeat.split(","),
                    o = A.backgroundSize.split(",");
                  return t.map((function (A, e) {
                    var t = (o[e] || "auto").trim().split(" ").map(Q),
                      a = (n[e] || "auto").trim().split(" ").map(m);
                    return {
                      source: A,
                      repeat: function (A) {
                        switch (A.trim()) {
                          case "no-repeat":
                            return c.NO_REPEAT;
                          case "repeat-x":
                          case "repeat no-repeat":
                            return c.REPEAT_X;
                          case "repeat-y":
                          case "no-repeat repeat":
                            return c.REPEAT_Y;
                          case "repeat":
                            return c.REPEAT
                        }
                        return c.REPEAT
                      }("string" == typeof r[e] ? r[e] : r[0]),
                      size: t.length < 2 ? [t[0], w] : [t[0], t[1]],
                      position: a.length < 2 ? [a[0], a[0]] : [a[0], a[1]]
                    }
                  }))
                },
                Q = function (A) {
                  return "auto" === A ? w : new h(A)
                },
                m = function (A) {
                  switch (A) {
                    case "bottom":
                    case "right":
                      return new r.default("100%");
                    case "left":
                    case "top":
                      return new r.default("0%");
                    case "auto":
                      return new r.default("0")
                  }
                  return new r.default(A)
                },
                U = e.parseBackgroundImage = function (A) {
                  var e = /^\s$/,
                    t = [],
                    n = [],
                    r = "",
                    o = null,
                    a = "",
                    s = 0,
                    i = 0,
                    l = function () {
                      var A = "";
                      if (r) {
                        '"' === a.substr(0, 1) && (a = a.substr(1, a.length - 2)), a && n.push(a.trim());
                        var e = r.indexOf("-", 1) + 1;
                        "-" === r.substr(0, 1) && e > 0 && (A = r.substr(0, e).toLowerCase(), r = r.substr(e)), "none" !== (r = r.toLowerCase()) && t.push({
                          prefix: A,
                          method: r,
                          args: n
                        })
                      }
                      n = [], r = a = ""
                    };
                  return A.split("").forEach((function (A) {
                    if (0 !== s || !e.test(A)) {
                      switch (A) {
                        case '"':
                          o ? o === A && (o = null) : o = A;
                          break;
                        case "(":
                          if (o) break;
                          if (0 === s) return void(s = 1);
                          i++;
                          break;
                        case ")":
                          if (o) break;
                          if (1 === s) {
                            if (0 === i) return s = 0, void l();
                            i--
                          }
                          break;
                        case ",":
                          if (o) break;
                          if (0 === s) return void l();
                          if (1 === s && 0 === i && !r.match(/^url$/i)) return n.push(a.trim()), void(a = "")
                      }
                      0 === s ? r += A : a += A
                    }
                  })), l(), t
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.PATH = {
                VECTOR: 0,
                BEZIER_CURVE: 1,
                CIRCLE: 2
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = t(6);
              e.default = function A(e, t) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.type = n.PATH.VECTOR, this.x = e, this.y = t
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseListStyle = e.parseListStyleType = e.LIST_STYLE_TYPE = e.LIST_STYLE_POSITION = void 0;
              var n = t(5),
                r = e.LIST_STYLE_POSITION = {
                  INSIDE: 0,
                  OUTSIDE: 1
                },
                o = e.LIST_STYLE_TYPE = {
                  NONE: -1,
                  DISC: 0,
                  CIRCLE: 1,
                  SQUARE: 2,
                  DECIMAL: 3,
                  CJK_DECIMAL: 4,
                  DECIMAL_LEADING_ZERO: 5,
                  LOWER_ROMAN: 6,
                  UPPER_ROMAN: 7,
                  LOWER_GREEK: 8,
                  LOWER_ALPHA: 9,
                  UPPER_ALPHA: 10,
                  ARABIC_INDIC: 11,
                  ARMENIAN: 12,
                  BENGALI: 13,
                  CAMBODIAN: 14,
                  CJK_EARTHLY_BRANCH: 15,
                  CJK_HEAVENLY_STEM: 16,
                  CJK_IDEOGRAPHIC: 17,
                  DEVANAGARI: 18,
                  ETHIOPIC_NUMERIC: 19,
                  GEORGIAN: 20,
                  GUJARATI: 21,
                  GURMUKHI: 22,
                  HEBREW: 22,
                  HIRAGANA: 23,
                  HIRAGANA_IROHA: 24,
                  JAPANESE_FORMAL: 25,
                  JAPANESE_INFORMAL: 26,
                  KANNADA: 27,
                  KATAKANA: 28,
                  KATAKANA_IROHA: 29,
                  KHMER: 30,
                  KOREAN_HANGUL_FORMAL: 31,
                  KOREAN_HANJA_FORMAL: 32,
                  KOREAN_HANJA_INFORMAL: 33,
                  LAO: 34,
                  LOWER_ARMENIAN: 35,
                  MALAYALAM: 36,
                  MONGOLIAN: 37,
                  MYANMAR: 38,
                  ORIYA: 39,
                  PERSIAN: 40,
                  SIMP_CHINESE_FORMAL: 41,
                  SIMP_CHINESE_INFORMAL: 42,
                  TAMIL: 43,
                  TELUGU: 44,
                  THAI: 45,
                  TIBETAN: 46,
                  TRAD_CHINESE_FORMAL: 47,
                  TRAD_CHINESE_INFORMAL: 48,
                  UPPER_ARMENIAN: 49,
                  DISCLOSURE_OPEN: 50,
                  DISCLOSURE_CLOSED: 51
                },
                a = e.parseListStyleType = function (A) {
                  switch (A) {
                    case "disc":
                      return o.DISC;
                    case "circle":
                      return o.CIRCLE;
                    case "square":
                      return o.SQUARE;
                    case "decimal":
                      return o.DECIMAL;
                    case "cjk-decimal":
                      return o.CJK_DECIMAL;
                    case "decimal-leading-zero":
                      return o.DECIMAL_LEADING_ZERO;
                    case "lower-roman":
                      return o.LOWER_ROMAN;
                    case "upper-roman":
                      return o.UPPER_ROMAN;
                    case "lower-greek":
                      return o.LOWER_GREEK;
                    case "lower-alpha":
                      return o.LOWER_ALPHA;
                    case "upper-alpha":
                      return o.UPPER_ALPHA;
                    case "arabic-indic":
                      return o.ARABIC_INDIC;
                    case "armenian":
                      return o.ARMENIAN;
                    case "bengali":
                      return o.BENGALI;
                    case "cambodian":
                      return o.CAMBODIAN;
                    case "cjk-earthly-branch":
                      return o.CJK_EARTHLY_BRANCH;
                    case "cjk-heavenly-stem":
                      return o.CJK_HEAVENLY_STEM;
                    case "cjk-ideographic":
                      return o.CJK_IDEOGRAPHIC;
                    case "devanagari":
                      return o.DEVANAGARI;
                    case "ethiopic-numeric":
                      return o.ETHIOPIC_NUMERIC;
                    case "georgian":
                      return o.GEORGIAN;
                    case "gujarati":
                      return o.GUJARATI;
                    case "gurmukhi":
                      return o.GURMUKHI;
                    case "hebrew":
                      return o.HEBREW;
                    case "hiragana":
                      return o.HIRAGANA;
                    case "hiragana-iroha":
                      return o.HIRAGANA_IROHA;
                    case "japanese-formal":
                      return o.JAPANESE_FORMAL;
                    case "japanese-informal":
                      return o.JAPANESE_INFORMAL;
                    case "kannada":
                      return o.KANNADA;
                    case "katakana":
                      return o.KATAKANA;
                    case "katakana-iroha":
                      return o.KATAKANA_IROHA;
                    case "khmer":
                      return o.KHMER;
                    case "korean-hangul-formal":
                      return o.KOREAN_HANGUL_FORMAL;
                    case "korean-hanja-formal":
                      return o.KOREAN_HANJA_FORMAL;
                    case "korean-hanja-informal":
                      return o.KOREAN_HANJA_INFORMAL;
                    case "lao":
                      return o.LAO;
                    case "lower-armenian":
                      return o.LOWER_ARMENIAN;
                    case "malayalam":
                      return o.MALAYALAM;
                    case "mongolian":
                      return o.MONGOLIAN;
                    case "myanmar":
                      return o.MYANMAR;
                    case "oriya":
                      return o.ORIYA;
                    case "persian":
                      return o.PERSIAN;
                    case "simp-chinese-formal":
                      return o.SIMP_CHINESE_FORMAL;
                    case "simp-chinese-informal":
                      return o.SIMP_CHINESE_INFORMAL;
                    case "tamil":
                      return o.TAMIL;
                    case "telugu":
                      return o.TELUGU;
                    case "thai":
                      return o.THAI;
                    case "tibetan":
                      return o.TIBETAN;
                    case "trad-chinese-formal":
                      return o.TRAD_CHINESE_FORMAL;
                    case "trad-chinese-informal":
                      return o.TRAD_CHINESE_INFORMAL;
                    case "upper-armenian":
                      return o.UPPER_ARMENIAN;
                    case "disclosure-open":
                      return o.DISCLOSURE_OPEN;
                    case "disclosure-closed":
                      return o.DISCLOSURE_CLOSED;
                    case "none":
                    default:
                      return o.NONE
                  }
                },
                s = (e.parseListStyle = function (A) {
                  var e = (0, n.parseBackgroundImage)(A.getPropertyValue("list-style-image"));
                  return {
                    listStyleType: a(A.getPropertyValue("list-style-type")),
                    listStyleImage: e.length ? e[0] : null,
                    listStylePosition: s(A.getPropertyValue("list-style-position"))
                  }
                }, function (A) {
                  switch (A) {
                    case "inside":
                      return r.INSIDE;
                    case "outside":
                    default:
                      return r.OUTSIDE
                  }
                })
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                r = t(20),
                o = t(22),
                a = function () {
                  function A(e, t, n) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.text = e, this.parent = t, this.bounds = n
                  }
                  return n(A, null, [{
                    key: "fromTextNode",
                    value: function (e, t) {
                      var n = i(e.data, t.style.textTransform);
                      return new A(n, t, (0, o.parseTextBounds)(n, t, e))
                    }
                  }]), A
                }();
              e.default = a;
              var s = /(^|\s|:|-|\(|\))([a-z])/g,
                i = function (A, e) {
                  switch (e) {
                    case r.TEXT_TRANSFORM.LOWERCASE:
                      return A.toLowerCase();
                    case r.TEXT_TRANSFORM.CAPITALIZE:
                      return A.replace(s, l);
                    case r.TEXT_TRANSFORM.UPPERCASE:
                      return A.toUpperCase();
                    default:
                      return A
                  }
                };

              function l(A, e, t) {
                return A.length > 0 ? e + t.toUpperCase() : A
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = t(23),
                r = function (A) {
                  return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
                },
                o = {
                  get SUPPORT_RANGE_BOUNDS() {
                    var A = function (A) {
                      if (A.createRange) {
                        var e = A.createRange();
                        if (e.getBoundingClientRect) {
                          var t = A.createElement("boundtest");
                          t.style.height = "123px", t.style.display = "block", A.body.appendChild(t), e.selectNode(t);
                          var n = e.getBoundingClientRect(),
                            r = Math.round(n.height);
                          if (A.body.removeChild(t), 123 === r) return !0
                        }
                      }
                      return !1
                    }(document);
                    return Object.defineProperty(o, "SUPPORT_RANGE_BOUNDS", {
                      value: A
                    }), A
                  },
                  get SUPPORT_SVG_DRAWING() {
                    var A = function (A) {
                      var e = new Image,
                        t = A.createElement("canvas"),
                        n = t.getContext("2d");
                      e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                      try {
                        n.drawImage(e, 0, 0), t.toDataURL()
                      } catch (A) {
                        return !1
                      }
                      return !0
                    }(document);
                    return Object.defineProperty(o, "SUPPORT_SVG_DRAWING", {
                      value: A
                    }), A
                  },
                  get SUPPORT_BASE64_DRAWING() {
                    return function (A) {
                      var e = function (A, e) {
                        var t = new Image,
                          n = A.createElement("canvas"),
                          r = n.getContext("2d");
                        return new Promise((function (A) {
                          t.src = e;
                          var o = function () {
                            try {
                              r.drawImage(t, 0, 0), n.toDataURL()
                            } catch (e) {
                              return A(!1)
                            }
                            return A(!0)
                          };
                          t.onload = o, t.onerror = function () {
                            return A(!1)
                          }, !0 === t.complete && setTimeout((function () {
                            o()
                          }), 500)
                        }))
                      }(document, A);
                      return Object.defineProperty(o, "SUPPORT_BASE64_DRAWING", {
                        value: function () {
                          return e
                        }
                      }), e
                    }
                  },
                  get SUPPORT_FOREIGNOBJECT_DRAWING() {
                    var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function (A) {
                      var e = A.createElement("canvas");
                      e.width = 100, e.height = 100;
                      var t = e.getContext("2d");
                      t.fillStyle = "rgb(0, 255, 0)", t.fillRect(0, 0, 100, 100);
                      var o = new Image,
                        a = e.toDataURL();
                      o.src = a;
                      var s = (0, n.createForeignObjectSVG)(100, 100, 0, 0, o);
                      return t.fillStyle = "red", t.fillRect(0, 0, 100, 100), (0, n.loadSerializedSVG)(s).then((function (e) {
                        t.drawImage(e, 0, 0);
                        var o = t.getImageData(0, 0, 100, 100).data;
                        t.fillStyle = "red", t.fillRect(0, 0, 100, 100);
                        var s = A.createElement("div");
                        return s.style.backgroundImage = "url(" + a + ")", s.style.height = "100px", r(o) ? (0, n.loadSerializedSVG)((0, n.createForeignObjectSVG)(100, 100, 0, 0, s)) : Promise.reject(!1)
                      })).then((function (A) {
                        return t.drawImage(A, 0, 0), r(t.getImageData(0, 0, 100, 100).data)
                      })).catch((function (A) {
                        return !1
                      }))
                    }(document) : Promise.resolve(!1);
                    return Object.defineProperty(o, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                      value: A
                    }), A
                  },
                  get SUPPORT_CORS_IMAGES() {
                    var A = void 0 !== (new Image).crossOrigin;
                    return Object.defineProperty(o, "SUPPORT_CORS_IMAGES", {
                      value: A
                    }), A
                  },
                  get SUPPORT_RESPONSE_TYPE() {
                    var A = "string" == typeof (new XMLHttpRequest).responseType;
                    return Object.defineProperty(o, "SUPPORT_RESPONSE_TYPE", {
                      value: A
                    }), A
                  },
                  get SUPPORT_CORS_XHR() {
                    var A = "withCredentials" in new XMLHttpRequest;
                    return Object.defineProperty(o, "SUPPORT_CORS_XHR", {
                      value: A
                    }), A
                  }
                };
              e.default = o
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseTextDecoration = e.TEXT_DECORATION_LINE = e.TEXT_DECORATION = e.TEXT_DECORATION_STYLE = void 0;
              var n, r = (n = t(0)) && n.__esModule ? n : {
                  default: n
                },
                o = e.TEXT_DECORATION_STYLE = {
                  SOLID: 0,
                  DOUBLE: 1,
                  DOTTED: 2,
                  DASHED: 3,
                  WAVY: 4
                },
                a = e.TEXT_DECORATION = {
                  NONE: null
                },
                s = e.TEXT_DECORATION_LINE = {
                  UNDERLINE: 1,
                  OVERLINE: 2,
                  LINE_THROUGH: 3,
                  BLINK: 4
                },
                i = function (A) {
                  switch (A) {
                    case "underline":
                      return s.UNDERLINE;
                    case "overline":
                      return s.OVERLINE;
                    case "line-through":
                      return s.LINE_THROUGH
                  }
                  return s.BLINK
                };
              e.parseTextDecoration = function (A) {
                var e, t = "none" === (e = A.textDecorationLine ? A.textDecorationLine : A.textDecoration) ? null : e.split(" ").map(i);
                return null === t ? a.NONE : {
                  textDecorationLine: t,
                  textDecorationColor: A.textDecorationColor ? new r.default(A.textDecorationColor) : null,
                  textDecorationStyle: function (A) {
                    switch (A) {
                      case "double":
                        return o.DOUBLE;
                      case "dotted":
                        return o.DOTTED;
                      case "dashed":
                        return o.DASHED;
                      case "wavy":
                        return o.WAVY
                    }
                    return o.SOLID
                  }(A.textDecorationStyle)
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseBorder = e.BORDER_SIDES = e.BORDER_STYLE = void 0;
              var n, r = (n = t(0)) && n.__esModule ? n : {
                  default: n
                },
                o = e.BORDER_STYLE = {
                  NONE: 0,
                  SOLID: 1
                },
                a = e.BORDER_SIDES = {
                  TOP: 0,
                  RIGHT: 1,
                  BOTTOM: 2,
                  LEFT: 3
                },
                s = Object.keys(a).map((function (A) {
                  return A.toLowerCase()
                }));
              e.parseBorder = function (A) {
                return s.map((function (e) {
                  var t = new r.default(A.getPropertyValue("border-" + e + "-color")),
                    n = function (A) {
                      switch (A) {
                        case "none":
                          return o.NONE
                      }
                      return o.SOLID
                    }(A.getPropertyValue("border-" + e + "-style")),
                    a = parseFloat(A.getPropertyValue("border-" + e + "-width"));
                  return {
                    borderColor: t,
                    borderStyle: n,
                    borderWidth: isNaN(a) ? 0 : a
                  }
                }))
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.toCodePoints = function (A) {
                for (var e = [], t = 0, n = A.length; t < n;) {
                  var r = A.charCodeAt(t++);
                  if (r >= 55296 && r <= 56319 && t < n) {
                    var o = A.charCodeAt(t++);
                    56320 == (64512 & o) ? e.push(((1023 & r) << 10) + (1023 & o) + 65536) : (e.push(r), t--)
                  } else e.push(r)
                }
                return e
              }, e.fromCodePoint = function () {
                if (String.fromCodePoint) return String.fromCodePoint.apply(String, arguments);
                var A = arguments.length;
                if (!A) return "";
                for (var e = [], t = -1, n = ""; ++t < A;) {
                  var r = arguments.length <= t ? void 0 : arguments[t];
                  r <= 65535 ? e.push(r) : (r -= 65536, e.push(55296 + (r >> 10), r % 1024 + 56320)), (t + 1 === A || e.length > 16384) && (n += String.fromCharCode.apply(String, e), e.length = 0)
                }
                return n
              };
              for (var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), o = 0; o < n.length; o++) r[n.charCodeAt(o)] = o;
              e.decode = function (A) {
                var e = .75 * A.length,
                  t = A.length,
                  n = void 0,
                  o = 0,
                  a = void 0,
                  s = void 0,
                  i = void 0,
                  l = void 0;
                "=" === A[A.length - 1] && (e--, "=" === A[A.length - 2] && e--);
                var c = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(e) : new Array(e),
                  u = Array.isArray(c) ? c : new Uint8Array(c);
                for (n = 0; n < t; n += 4) a = r[A.charCodeAt(n)], s = r[A.charCodeAt(n + 1)], i = r[A.charCodeAt(n + 2)], l = r[A.charCodeAt(n + 3)], u[o++] = a << 2 | s >> 4, u[o++] = (15 & s) << 4 | i >> 2, u[o++] = (3 & i) << 6 | 63 & l;
                return c
              }, e.polyUint16Array = function (A) {
                for (var e = A.length, t = [], n = 0; n < e; n += 2) t.push(A[n + 1] << 8 | A[n]);
                return t
              }, e.polyUint32Array = function (A) {
                for (var e = A.length, t = [], n = 0; n < e; n += 4) t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
                return t
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.createCounterText = e.inlineListItemElement = e.getListOwner = void 0;
              var n = t(4),
                r = i(t(3)),
                o = i(t(9)),
                a = t(8),
                s = t(24);

              function i(A) {
                return A && A.__esModule ? A : {
                  default: A
                }
              }
              var l = ["OL", "UL", "MENU"],
                c = (e.getListOwner = function (A) {
                  var e = A.parent;
                  if (!e) return null;
                  do {
                    if (-1 !== l.indexOf(e.tagName)) return e;
                    e = e.parent
                  } while (e);
                  return A.parent
                }, e.inlineListItemElement = function (A, e, t) {
                  var s = e.style.listStyle;
                  if (s) {
                    var i = A.ownerDocument.defaultView.getComputedStyle(A, null),
                      l = A.ownerDocument.createElement("html2canvaswrapper");
                    switch ((0, n.copyCSSStyles)(i, l), l.style.position = "absolute", l.style.bottom = "auto", l.style.display = "block", l.style.letterSpacing = "normal", s.listStylePosition) {
                      case a.LIST_STYLE_POSITION.OUTSIDE:
                        l.style.left = "auto", l.style.right = A.ownerDocument.defaultView.innerWidth - e.bounds.left - e.style.margin[1].getAbsoluteValue(e.bounds.width) + 7 + "px", l.style.textAlign = "right";
                        break;
                      case a.LIST_STYLE_POSITION.INSIDE:
                        l.style.left = e.bounds.left - e.style.margin[3].getAbsoluteValue(e.bounds.width) + "px", l.style.right = "auto", l.style.textAlign = "left"
                    }
                    var c = void 0,
                      u = e.style.margin[0].getAbsoluteValue(e.bounds.width),
                      d = s.listStyleImage;
                    if (d)
                      if ("url" === d.method) {
                        var B = A.ownerDocument.createElement("img");
                        B.src = d.args[0], l.style.top = e.bounds.top - u + "px", l.style.width = "auto", l.style.height = "auto", l.appendChild(B)
                      } else {
                        var h = .5 * parseFloat(e.style.font.fontSize);
                        l.style.top = e.bounds.top - u + e.bounds.height - 1.5 * h + "px", l.style.width = h + "px", l.style.height = h + "px", l.style.backgroundImage = i.listStyleImage
                      }
                    else "number" == typeof e.listIndex && (c = A.ownerDocument.createTextNode(Q(e.listIndex, s.listStyleType, !0)), l.appendChild(c), l.style.top = e.bounds.top - u + "px");
                    var w = A.ownerDocument.body;
                    w.appendChild(l), c ? (e.childNodes.push(o.default.fromTextNode(c, e)), w.removeChild(l)) : e.childNodes.push(new r.default(l, e, t, 0))
                  }
                }, {
                  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
                }),
                u = {
                  integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                  values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
                },
                d = {
                  integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                  values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
                },
                B = {
                  integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                  values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
                },
                h = function (A, e, t, n, r, o) {
                  return A < e || A > t ? Q(A, r, o.length > 0) : n.integers.reduce((function (e, t, r) {
                    for (; A >= t;) A -= t, e += n.values[r];
                    return e
                  }), "") + o
                },
                w = function (A, e, t, n) {
                  var r = "";
                  do {
                    t || A--, r = n(A) + r, A /= e
                  } while (A * e >= e);
                  return r
                },
                f = function (A, e, t, n, r) {
                  var o = t - e + 1;
                  return (A < 0 ? "-" : "") + (w(Math.abs(A), o, n, (function (A) {
                    return (0, s.fromCodePoint)(Math.floor(A % o) + e)
                  })) + r)
                },
                g = function (A, e) {
                  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ". ",
                    n = e.length;
                  return w(Math.abs(A), n, !1, (function (A) {
                    return e[Math.floor(A % n)]
                  })) + t
                },
                p = function (A, e, t, r, o, s) {
                  if (A < -9999 || A > 9999) return Q(A, a.LIST_STYLE_TYPE.CJK_DECIMAL, o.length > 0);
                  var i = Math.abs(A),
                    l = o;
                  if (0 === i) return e[0] + l;
                  for (var c = 0; i > 0 && c <= 4; c++) {
                    var u = i % 10;
                    0 === u && (0, n.contains)(s, 1) && "" !== l ? l = e[u] + l : u > 1 || 1 === u && 0 === c || 1 === u && 1 === c && (0, n.contains)(s, 2) || 1 === u && 1 === c && (0, n.contains)(s, 4) && A > 100 || 1 === u && c > 1 && (0, n.contains)(s, 8) ? l = e[u] + (c > 0 ? t[c - 1] : "") + l : 1 === u && c > 0 && (l = t[c - 1] + l), i = Math.floor(i / 10)
                  }
                  return (A < 0 ? r : "") + l
                },
                Q = e.createCounterText = function (A, e, t) {
                  var n = t ? ". " : "",
                    r = t ? "、" : "",
                    o = t ? ", " : "";
                  switch (e) {
                    case a.LIST_STYLE_TYPE.DISC:
                      return "•";
                    case a.LIST_STYLE_TYPE.CIRCLE:
                      return "◦";
                    case a.LIST_STYLE_TYPE.SQUARE:
                      return "◾";
                    case a.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:
                      var s = f(A, 48, 57, !0, n);
                      return s.length < 4 ? "0" + s : s;
                    case a.LIST_STYLE_TYPE.CJK_DECIMAL:
                      return g(A, "〇一二三四五六七八九", r);
                    case a.LIST_STYLE_TYPE.LOWER_ROMAN:
                      return h(A, 1, 3999, c, a.LIST_STYLE_TYPE.DECIMAL, n).toLowerCase();
                    case a.LIST_STYLE_TYPE.UPPER_ROMAN:
                      return h(A, 1, 3999, c, a.LIST_STYLE_TYPE.DECIMAL, n);
                    case a.LIST_STYLE_TYPE.LOWER_GREEK:
                      return f(A, 945, 969, !1, n);
                    case a.LIST_STYLE_TYPE.LOWER_ALPHA:
                      return f(A, 97, 122, !1, n);
                    case a.LIST_STYLE_TYPE.UPPER_ALPHA:
                      return f(A, 65, 90, !1, n);
                    case a.LIST_STYLE_TYPE.ARABIC_INDIC:
                      return f(A, 1632, 1641, !0, n);
                    case a.LIST_STYLE_TYPE.ARMENIAN:
                    case a.LIST_STYLE_TYPE.UPPER_ARMENIAN:
                      return h(A, 1, 9999, u, a.LIST_STYLE_TYPE.DECIMAL, n);
                    case a.LIST_STYLE_TYPE.LOWER_ARMENIAN:
                      return h(A, 1, 9999, u, a.LIST_STYLE_TYPE.DECIMAL, n).toLowerCase();
                    case a.LIST_STYLE_TYPE.BENGALI:
                      return f(A, 2534, 2543, !0, n);
                    case a.LIST_STYLE_TYPE.CAMBODIAN:
                    case a.LIST_STYLE_TYPE.KHMER:
                      return f(A, 6112, 6121, !0, n);
                    case a.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:
                      return g(A, "子丑寅卯辰巳午未申酉戌亥", r);
                    case a.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:
                      return g(A, "甲乙丙丁戊己庚辛壬癸", r);
                    case a.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:
                    case a.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:
                      return p(A, "零一二三四五六七八九", "十百千萬", "負", r, 14);
                    case a.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:
                      return p(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", r, 15);
                    case a.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:
                      return p(A, "零一二三四五六七八九", "十百千萬", "负", r, 14);
                    case a.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:
                      return p(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", r, 15);
                    case a.LIST_STYLE_TYPE.JAPANESE_INFORMAL:
                      return p(A, "〇一二三四五六七八九", "十百千万", "マイナス", r, 0);
                    case a.LIST_STYLE_TYPE.JAPANESE_FORMAL:
                      return p(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", r, 7);
                    case a.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:
                      return p(A, "영일이삼사오육칠팔구", "십백천만", "마이너스 ", o, 7);
                    case a.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:
                      return p(A, "零一二三四五六七八九", "十百千萬", "마이너스 ", o, 0);
                    case a.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:
                      return p(A, "零壹貳參四五六七八九", "拾百千", "마이너스 ", o, 7);
                    case a.LIST_STYLE_TYPE.DEVANAGARI:
                      return f(A, 2406, 2415, !0, n);
                    case a.LIST_STYLE_TYPE.GEORGIAN:
                      return h(A, 1, 19999, B, a.LIST_STYLE_TYPE.DECIMAL, n);
                    case a.LIST_STYLE_TYPE.GUJARATI:
                      return f(A, 2790, 2799, !0, n);
                    case a.LIST_STYLE_TYPE.GURMUKHI:
                      return f(A, 2662, 2671, !0, n);
                    case a.LIST_STYLE_TYPE.HEBREW:
                      return h(A, 1, 10999, d, a.LIST_STYLE_TYPE.DECIMAL, n);
                    case a.LIST_STYLE_TYPE.HIRAGANA:
                      return g(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                    case a.LIST_STYLE_TYPE.HIRAGANA_IROHA:
                      return g(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                    case a.LIST_STYLE_TYPE.KANNADA:
                      return f(A, 3302, 3311, !0, n);
                    case a.LIST_STYLE_TYPE.KATAKANA:
                      return g(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
                    case a.LIST_STYLE_TYPE.KATAKANA_IROHA:
                      return g(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
                    case a.LIST_STYLE_TYPE.LAO:
                      return f(A, 3792, 3801, !0, n);
                    case a.LIST_STYLE_TYPE.MONGOLIAN:
                      return f(A, 6160, 6169, !0, n);
                    case a.LIST_STYLE_TYPE.MYANMAR:
                      return f(A, 4160, 4169, !0, n);
                    case a.LIST_STYLE_TYPE.ORIYA:
                      return f(A, 2918, 2927, !0, n);
                    case a.LIST_STYLE_TYPE.PERSIAN:
                      return f(A, 1776, 1785, !0, n);
                    case a.LIST_STYLE_TYPE.TAMIL:
                      return f(A, 3046, 3055, !0, n);
                    case a.LIST_STYLE_TYPE.TELUGU:
                      return f(A, 3174, 3183, !0, n);
                    case a.LIST_STYLE_TYPE.THAI:
                      return f(A, 3664, 3673, !0, n);
                    case a.LIST_STYLE_TYPE.TIBETAN:
                      return f(A, 3872, 3881, !0, n);
                    case a.LIST_STYLE_TYPE.DECIMAL:
                    default:
                      return f(A, 48, 57, !0, n)
                  }
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                r = t(6),
                o = t(11),
                a = function (A, e) {
                  var t = Math.max.apply(null, A.colorStops.map((function (A) {
                      return A.stop
                    }))),
                    n = 1 / Math.max(1, t);
                  A.colorStops.forEach((function (A) {
                    e.addColorStop(n * A.stop, A.color.toString())
                  }))
                },
                s = function () {
                  function A(e) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.canvas = e || document.createElement("canvas")
                  }
                  return n(A, [{
                    key: "render",
                    value: function (A) {
                      this.ctx = this.canvas.getContext("2d"), this.options = A, this.canvas.width = Math.floor(A.width * A.scale), this.canvas.height = Math.floor(A.height * A.scale), this.canvas.style.width = A.width + "px", this.canvas.style.height = A.height + "px", this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-A.x, -A.y), this.ctx.textBaseline = "bottom", A.logger.log("Canvas renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + this.options.scale)
                    }
                  }, {
                    key: "clip",
                    value: function (A, e) {
                      var t = this;
                      A.length && (this.ctx.save(), A.forEach((function (A) {
                        t.path(A), t.ctx.clip()
                      }))), e(), A.length && this.ctx.restore()
                    }
                  }, {
                    key: "drawImage",
                    value: function (A, e, t) {
                      this.ctx.drawImage(A, e.left, e.top, e.width, e.height, t.left, t.top, t.width, t.height)
                    }
                  }, {
                    key: "drawShape",
                    value: function (A, e) {
                      this.path(A), this.ctx.fillStyle = e.toString(), this.ctx.fill()
                    }
                  }, {
                    key: "fill",
                    value: function (A) {
                      this.ctx.fillStyle = A.toString(), this.ctx.fill()
                    }
                  }, {
                    key: "getTarget",
                    value: function () {
                      return this.canvas.getContext("2d").setTransform(1, 0, 0, 1, 0, 0), Promise.resolve(this.canvas)
                    }
                  }, {
                    key: "path",
                    value: function (A) {
                      var e = this;
                      this.ctx.beginPath(), Array.isArray(A) ? A.forEach((function (A, t) {
                        var n = A.type === r.PATH.VECTOR ? A : A.start;
                        0 === t ? e.ctx.moveTo(n.x, n.y) : e.ctx.lineTo(n.x, n.y), A.type === r.PATH.BEZIER_CURVE && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
                      })) : this.ctx.arc(A.x + A.radius, A.y + A.radius, A.radius, 0, 2 * Math.PI, !0), this.ctx.closePath()
                    }
                  }, {
                    key: "rectangle",
                    value: function (A, e, t, n, r) {
                      this.ctx.fillStyle = r.toString(), this.ctx.fillRect(A, e, t, n)
                    }
                  }, {
                    key: "renderLinearGradient",
                    value: function (A, e) {
                      var t = this.ctx.createLinearGradient(A.left + e.direction.x1, A.top + e.direction.y1, A.left + e.direction.x0, A.top + e.direction.y0);
                      a(e, t), this.ctx.fillStyle = t, this.ctx.fillRect(A.left, A.top, A.width, A.height)
                    }
                  }, {
                    key: "renderRadialGradient",
                    value: function (A, e) {
                      var t = this,
                        n = A.left + e.center.x,
                        r = A.top + e.center.y,
                        o = this.ctx.createRadialGradient(n, r, 0, n, r, e.radius.x);
                      if (o)
                        if (a(e, o), this.ctx.fillStyle = o, e.radius.x !== e.radius.y) {
                          var s = A.left + .5 * A.width,
                            i = A.top + .5 * A.height,
                            l = e.radius.y / e.radius.x,
                            c = 1 / l;
                          this.transform(s, i, [1, 0, 0, l, 0, 0], (function () {
                            return t.ctx.fillRect(A.left, c * (A.top - i) + i, A.width, A.height * c)
                          }))
                        } else this.ctx.fillRect(A.left, A.top, A.width, A.height)
                    }
                  }, {
                    key: "renderRepeat",
                    value: function (A, e, t, n, r) {
                      this.path(A), this.ctx.fillStyle = this.ctx.createPattern(this.resizeImage(e, t), "repeat"), this.ctx.translate(n, r), this.ctx.fill(), this.ctx.translate(-n, -r)
                    }
                  }, {
                    key: "renderTextNode",
                    value: function (A, e, t, n, r) {
                      var a = this;
                      this.ctx.font = [t.fontStyle, t.fontVariant, t.fontWeight, t.fontSize, t.fontFamily].join(" "), A.forEach((function (A) {
                        if (a.ctx.fillStyle = e.toString(), r && A.text.trim().length ? r.slice(0).reverse().forEach((function (e) {
                            a.ctx.shadowColor = e.color.toString(), a.ctx.shadowOffsetX = e.offsetX * a.options.scale, a.ctx.shadowOffsetY = e.offsetY * a.options.scale, a.ctx.shadowBlur = e.blur, a.ctx.fillText(A.text, A.bounds.left, A.bounds.top + A.bounds.height)
                          })) : a.ctx.fillText(A.text, A.bounds.left, A.bounds.top + A.bounds.height), null !== n) {
                          var s = n.textDecorationColor || e;
                          n.textDecorationLine.forEach((function (e) {
                            switch (e) {
                              case o.TEXT_DECORATION_LINE.UNDERLINE:
                                var n = a.options.fontMetrics.getMetrics(t).baseline;
                                a.rectangle(A.bounds.left, Math.round(A.bounds.top + n), A.bounds.width, 1, s);
                                break;
                              case o.TEXT_DECORATION_LINE.OVERLINE:
                                a.rectangle(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1, s);
                                break;
                              case o.TEXT_DECORATION_LINE.LINE_THROUGH:
                                var r = a.options.fontMetrics.getMetrics(t).middle;
                                a.rectangle(A.bounds.left, Math.ceil(A.bounds.top + r), A.bounds.width, 1, s)
                            }
                          }))
                        }
                      }))
                    }
                  }, {
                    key: "resizeImage",
                    value: function (A, e) {
                      if (A.width === e.width && A.height === e.height) return A;
                      var t = this.canvas.ownerDocument.createElement("canvas");
                      return t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e.width, e.height), t
                    }
                  }, {
                    key: "setOpacity",
                    value: function (A) {
                      this.ctx.globalAlpha = A
                    }
                  }, {
                    key: "transform",
                    value: function (A, e, t, n) {
                      this.ctx.save(), this.ctx.translate(A, e), this.ctx.transform(t[0], t[1], t[2], t[3], t[4], t[5]), this.ctx.translate(-A, -e), n(), this.ctx.restore()
                    }
                  }]), A
                }();
              e.default = s
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                r = function () {
                  function A(e, t, n) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.enabled = "undefined" != typeof window && e, this.start = n || Date.now(), this.id = t
                  }
                  return n(A, [{
                    key: "child",
                    value: function (e) {
                      return new A(this.enabled, e, this.start)
                    }
                  }, {
                    key: "log",
                    value: function () {
                      if (this.enabled && window.console && window.console.log) {
                        for (var A = arguments.length, e = Array(A), t = 0; t < A; t++) e[t] = arguments[t];
                        Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - this.start + "ms", this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"].concat([].slice.call(e, 0)))
                      }
                    }
                  }, {
                    key: "error",
                    value: function () {
                      if (this.enabled && window.console && window.console.error) {
                        for (var A = arguments.length, e = Array(A), t = 0; t < A; t++) e[t] = arguments[t];
                        Function.prototype.bind.call(window.console.error, window.console).apply(window.console, [Date.now() - this.start + "ms", this.id ? "html2canvas (" + this.id + "):" : "html2canvas:"].concat([].slice.call(e, 0)))
                      }
                    }
                  }]), A
                }();
              e.default = r
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parsePadding = e.PADDING_SIDES = void 0;
              var n, r = (n = t(1)) && n.__esModule ? n : {
                default: n
              };
              e.PADDING_SIDES = {
                TOP: 0,
                RIGHT: 1,
                BOTTOM: 2,
                LEFT: 3
              };
              var o = ["top", "right", "bottom", "left"];
              e.parsePadding = function (A) {
                return o.map((function (e) {
                  return new r.default(A.getPropertyValue("padding-" + e))
                }))
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = e.OVERFLOW_WRAP = {
                NORMAL: 0,
                BREAK_WORD: 1
              };
              e.parseOverflowWrap = function (A) {
                switch (A) {
                  case "break-word":
                    return n.BREAK_WORD;
                  case "normal":
                  default:
                    return n.NORMAL
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = e.POSITION = {
                STATIC: 0,
                RELATIVE: 1,
                ABSOLUTE: 2,
                FIXED: 3,
                STICKY: 4
              };
              e.parsePosition = function (A) {
                switch (A) {
                  case "relative":
                    return n.RELATIVE;
                  case "absolute":
                    return n.ABSOLUTE;
                  case "fixed":
                    return n.FIXED;
                  case "sticky":
                    return n.STICKY
                }
                return n.STATIC
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = e.TEXT_TRANSFORM = {
                NONE: 0,
                LOWERCASE: 1,
                UPPERCASE: 2,
                CAPITALIZE: 3
              };
              e.parseTextTransform = function (A) {
                switch (A) {
                  case "uppercase":
                    return n.UPPERCASE;
                  case "lowercase":
                    return n.LOWERCASE;
                  case "capitalize":
                    return n.CAPITALIZE
                }
                return n.NONE
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.reformatInputBounds = e.inlineSelectElement = e.inlineTextAreaElement = e.inlineInputElement = e.getInputBorderRadius = e.INPUT_BACKGROUND = e.INPUT_BORDERS = e.INPUT_COLOR = void 0;
              var n = u(t(9)),
                r = t(5),
                o = t(12),
                a = u(t(50)),
                s = u(t(7)),
                i = u(t(0)),
                l = u(t(1)),
                c = (t(2), t(22), t(4));

              function u(A) {
                return A && A.__esModule ? A : {
                  default: A
                }
              }
              e.INPUT_COLOR = new i.default([42, 42, 42]);
              var d = new i.default([165, 165, 165]),
                B = new i.default([222, 222, 222]),
                h = {
                  borderWidth: 1,
                  borderColor: d,
                  borderStyle: o.BORDER_STYLE.SOLID
                },
                w = (e.INPUT_BORDERS = [h, h, h, h], e.INPUT_BACKGROUND = {
                  backgroundColor: B,
                  backgroundImage: [],
                  backgroundClip: r.BACKGROUND_CLIP.PADDING_BOX,
                  backgroundOrigin: r.BACKGROUND_ORIGIN.PADDING_BOX
                }, new l.default("50%")),
                f = [w, w],
                g = [f, f, f, f],
                p = new l.default("3px"),
                Q = [p, p],
                m = [Q, Q, Q, Q],
                U = (e.getInputBorderRadius = function (A) {
                  return "radio" === A.type ? g : m
                }, e.inlineInputElement = function (A, e) {
                  if ("radio" === A.type || "checkbox" === A.type) {
                    if (A.checked) {
                      var t = Math.min(e.bounds.width, e.bounds.height);
                      e.childNodes.push("checkbox" === A.type ? [new s.default(e.bounds.left + .39363 * t, e.bounds.top + .79 * t), new s.default(e.bounds.left + .16 * t, e.bounds.top + .5549 * t), new s.default(e.bounds.left + .27347 * t, e.bounds.top + .44071 * t), new s.default(e.bounds.left + .39694 * t, e.bounds.top + .5649 * t), new s.default(e.bounds.left + .72983 * t, e.bounds.top + .23 * t), new s.default(e.bounds.left + .84 * t, e.bounds.top + .34085 * t), new s.default(e.bounds.left + .39363 * t, e.bounds.top + .79 * t)] : new a.default(e.bounds.left + t / 4, e.bounds.top + t / 4, t / 4))
                    }
                  } else U(C(A), A, e, !1)
                }, e.inlineTextAreaElement = function (A, e) {
                  U(A.value, A, e, !0)
                }, e.inlineSelectElement = function (A, e) {
                  var t = A.options[A.selectedIndex || 0];
                  U(t && t.text || "", A, e, !1)
                }, e.reformatInputBounds = function (A) {
                  return A.width > A.height ? (A.left += (A.width - A.height) / 2, A.width = A.height) : A.width < A.height && (A.top += (A.height - A.width) / 2, A.height = A.width), A
                }, function (A, e, t, r) {
                  var o = e.ownerDocument.body;
                  if (A.length > 0 && o) {
                    var a = e.ownerDocument.createElement("html2canvaswrapper");
                    (0, c.copyCSSStyles)(e.ownerDocument.defaultView.getComputedStyle(e, null), a), a.style.position = "absolute", a.style.left = t.bounds.left + "px", a.style.top = t.bounds.top + "px", r || (a.style.whiteSpace = "nowrap");
                    var s = e.ownerDocument.createTextNode(A);
                    a.appendChild(s), o.appendChild(a), t.childNodes.push(n.default.fromTextNode(s, t)), o.removeChild(a)
                  }
                }),
                C = function (A) {
                  var e = "password" === A.type ? new Array(A.value.length + 1).join("•") : A.value;
                  return 0 === e.length ? A.placeholder || "" : e
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseTextBounds = e.TextBounds = void 0;
              var n, r = t(2),
                o = t(11),
                a = (n = t(10)) && n.__esModule ? n : {
                  default: n
                },
                s = t(24),
                i = e.TextBounds = function A(e, t) {
                  ! function (A, e) {
                    if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                  }(this, A), this.text = e, this.bounds = t
                },
                l = (e.parseTextBounds = function (A, e, t) {
                  for (var n = 0 !== e.style.letterSpacing ? (0, s.toCodePoints)(A).map((function (A) {
                      return (0, s.fromCodePoint)(A)
                    })) : (0, s.breakWords)(A, e), r = n.length, u = t.parentNode ? t.parentNode.ownerDocument.defaultView : null, d = u ? u.pageXOffset : 0, B = u ? u.pageYOffset : 0, h = [], w = 0, f = 0; f < r; f++) {
                    var g = n[f];
                    if (e.style.textDecoration !== o.TEXT_DECORATION.NONE || g.trim().length > 0)
                      if (a.default.SUPPORT_RANGE_BOUNDS) h.push(new i(g, c(t, w, g.length, d, B)));
                      else {
                        var p = t.splitText(g.length);
                        h.push(new i(g, l(t, d, B))), t = p
                      }
                    else a.default.SUPPORT_RANGE_BOUNDS || (t = t.splitText(g.length));
                    w += g.length
                  }
                  return h
                }, function (A, e, t) {
                  var n = A.ownerDocument.createElement("html2canvaswrapper");
                  n.appendChild(A.cloneNode(!0));
                  var o = A.parentNode;
                  if (o) {
                    o.replaceChild(n, A);
                    var a = (0, r.parseBounds)(n, e, t);
                    return n.firstChild && o.replaceChild(n.firstChild, n), a
                  }
                  return new r.Bounds(0, 0, 0, 0)
                }),
                c = function (A, e, t, n, o) {
                  var a = A.ownerDocument.createRange();
                  return a.setStart(A, e), a.setEnd(A, e + t), r.Bounds.fromClientRect(a.getBoundingClientRect(), n, o)
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                r = function () {
                  function A(e) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.element = e
                  }
                  return n(A, [{
                    key: "render",
                    value: function (A) {
                      var e = this;
                      this.options = A, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.canvas.width = Math.floor(A.width) * A.scale, this.canvas.height = Math.floor(A.height) * A.scale, this.canvas.style.width = A.width + "px", this.canvas.style.height = A.height + "px", A.logger.log("ForeignObject renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale);
                      var t = o(Math.max(A.windowWidth, A.width) * A.scale, Math.max(A.windowHeight, A.height) * A.scale, A.scrollX * A.scale, A.scrollY * A.scale, this.element);
                      return a(t).then((function (t) {
                        return A.backgroundColor && (e.ctx.fillStyle = A.backgroundColor.toString(), e.ctx.fillRect(0, 0, A.width * A.scale, A.height * A.scale)), e.ctx.drawImage(t, -A.x * A.scale, -A.y * A.scale), e.canvas
                      }))
                    }
                  }]), A
                }();
              e.default = r;
              var o = e.createForeignObjectSVG = function (A, e, t, n, r) {
                  var o = "http://www.w3.org/2000/svg",
                    a = document.createElementNS(o, "svg"),
                    s = document.createElementNS(o, "foreignObject");
                  return a.setAttributeNS(null, "width", A), a.setAttributeNS(null, "height", e), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", t), s.setAttributeNS(null, "y", n), s.setAttributeNS(null, "externalResourcesRequired", "true"), a.appendChild(s), s.appendChild(r), a
                },
                a = e.loadSerializedSVG = function (A) {
                  return new Promise((function (e, t) {
                    var n = new Image;
                    n.onload = function () {
                      return e(n)
                    }, n.onerror = t, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
                  }))
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.breakWords = e.fromCodePoint = e.toCodePoints = void 0;
              var n = t(46);
              Object.defineProperty(e, "toCodePoints", {
                enumerable: !0,
                get: function () {
                  return n.toCodePoints
                }
              }), Object.defineProperty(e, "fromCodePoint", {
                enumerable: !0,
                get: function () {
                  return n.fromCodePoint
                }
              });
              var r, o = ((r = t(3)) && r.__esModule, t(18));
              e.breakWords = function (A, e) {
                for (var t = (0, n.LineBreaker)(A, {
                    lineBreak: e.style.lineBreak,
                    wordBreak: e.style.overflowWrap === o.OVERFLOW_WRAP.BREAK_WORD ? "break-word" : e.style.wordBreak
                  }), r = [], a = void 0; !(a = t.next()).done;) r.push(a.value.slice());
                return r
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.FontMetrics = void 0;
              var n = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                r = t(4);
              e.FontMetrics = function () {
                function A(e) {
                  ! function (A, e) {
                    if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                  }(this, A), this._data = {}, this._document = e
                }
                return n(A, [{
                  key: "_parseMetrics",
                  value: function (A) {
                    var e = this._document.createElement("div"),
                      t = this._document.createElement("img"),
                      n = this._document.createElement("span"),
                      o = this._document.body;
                    if (!o) throw new Error("");
                    e.style.visibility = "hidden", e.style.fontFamily = A.fontFamily, e.style.fontSize = A.fontSize, e.style.margin = "0", e.style.padding = "0", o.appendChild(e), t.src = r.SMALL_IMAGE, t.width = 1, t.height = 1, t.style.margin = "0", t.style.padding = "0", t.style.verticalAlign = "baseline", n.style.fontFamily = A.fontFamily, n.style.fontSize = A.fontSize, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode("Hidden Text")), e.appendChild(n), e.appendChild(t);
                    var a = t.offsetTop - n.offsetTop + 2;
                    e.removeChild(n), e.appendChild(this._document.createTextNode("Hidden Text")), e.style.lineHeight = "normal", t.style.verticalAlign = "super";
                    var s = t.offsetTop - e.offsetTop + 2;
                    return o.removeChild(e), {
                      baseline: a,
                      middle: s
                    }
                  }
                }, {
                  key: "getMetrics",
                  value: function (A) {
                    var e = A.fontFamily + " " + A.fontSize;
                    return void 0 === this._data[e] && (this._data[e] = this._parseMetrics(A)), this._data[e]
                  }
                }]), A
              }()
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.Proxy = void 0;
              var n, r = (n = t(10)) && n.__esModule ? n : {
                default: n
              };
              e.Proxy = function (A, e) {
                if (!e.proxy) return Promise.reject(null);
                var t = e.proxy;
                return new Promise((function (n, o) {
                  var a = r.default.SUPPORT_CORS_XHR && r.default.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
                    s = r.default.SUPPORT_CORS_XHR ? new XMLHttpRequest : new XDomainRequest;
                  if (s.onload = function () {
                      if (s instanceof XMLHttpRequest)
                        if (200 === s.status)
                          if ("text" === a) n(s.response);
                          else {
                            var A = new FileReader;
                            A.addEventListener("load", (function () {
                              return n(A.result)
                            }), !1), A.addEventListener("error", (function (A) {
                              return o(A)
                            }), !1), A.readAsDataURL(s.response)
                          }
                      else o("");
                      else n(s.responseText)
                    }, s.onerror = o, s.open("GET", t + "?url=" + encodeURIComponent(A) + "&responseType=" + a), "text" !== a && s instanceof XMLHttpRequest && (s.responseType = a), e.imageTimeout) {
                    var i = e.imageTimeout;
                    s.timeout = i, s.ontimeout = function () {
                      return o("")
                    }
                  }
                  s.send()
                }))
              }
            }, function (A, e, t) {
              var n = Object.assign || function (A) {
                  for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (A[n] = t[n])
                  }
                  return A
                },
                r = s(t(15)),
                o = s(t(16)),
                a = t(28);

              function s(A) {
                return A && A.__esModule ? A : {
                  default: A
                }
              }
              var i = function (A, e) {
                var t = e || {},
                  s = new o.default("boolean" != typeof t.logging || t.logging);
                s.log("html2canvas 1.0.0-alpha.11");
                var i = A.ownerDocument;
                if (!i) return Promise.reject("Provided element is not within a Document");
                var l = i.defaultView,
                  c = {
                    async: !0,
                    allowTaint: !1,
                    backgroundColor: "#ffffff",
                    imageTimeout: 15e3,
                    logging: !0,
                    proxy: null,
                    removeContainer: !0,
                    foreignObjectRendering: !1,
                    scale: l.devicePixelRatio || 1,
                    target: new r.default(t.canvas),
                    useCORS: !1,
                    windowWidth: l.innerWidth,
                    windowHeight: l.innerHeight,
                    scrollX: l.pageXOffset,
                    scrollY: l.pageYOffset
                  };
                return (0, a.renderElement)(A, n({}, c, t), s)
              };
              i.CanvasRenderer = r.default, A.exports = i
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.renderElement = void 0;
              var n = function (A, e) {
                  if (Array.isArray(A)) return A;
                  if (Symbol.iterator in Object(A)) return function (A, e) {
                    var t = [],
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (var a, s = A[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !e || t.length !== e); n = !0);
                    } catch (A) {
                      r = !0, o = A
                    } finally {
                      try {
                        !n && s.return && s.return()
                      } finally {
                        if (r) throw o
                      }
                    }
                    return t
                  }(A, e);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                r = (B(t(16)), t(29)),
                o = B(t(51)),
                a = B(t(23)),
                s = B(t(10)),
                i = t(2),
                l = t(54),
                c = t(25),
                u = t(0),
                d = B(u);

              function B(A) {
                return A && A.__esModule ? A : {
                  default: A
                }
              }
              e.renderElement = function A(e, t, B) {
                var h = e.ownerDocument,
                  w = new i.Bounds(t.scrollX, t.scrollY, t.windowWidth, t.windowHeight),
                  f = h.documentElement ? new d.default(getComputedStyle(h.documentElement).backgroundColor) : u.TRANSPARENT,
                  g = h.body ? new d.default(getComputedStyle(h.body).backgroundColor) : u.TRANSPARENT,
                  p = e === h.documentElement ? f.isTransparent() ? g.isTransparent() ? t.backgroundColor ? new d.default(t.backgroundColor) : null : g : f : t.backgroundColor ? new d.default(t.backgroundColor) : null;
                return (t.foreignObjectRendering ? s.default.SUPPORT_FOREIGNOBJECT_DRAWING : Promise.resolve(!1)).then((function (s) {
                  return s ? (d = new l.DocumentCloner(e, t, B, !0, A)).inlineFonts(h).then((function () {
                    return d.resourceLoader.ready()
                  })).then((function () {
                    var A = new a.default(d.documentElement),
                      n = h.defaultView,
                      r = n.pageXOffset,
                      o = n.pageYOffset,
                      s = "HTML" === e.tagName || "BODY" === e.tagName ? (0, i.parseDocumentSize)(h) : (0, i.parseBounds)(e, r, o),
                      l = s.width,
                      c = s.height,
                      u = s.left,
                      w = s.top;
                    return A.render({
                      backgroundColor: p,
                      logger: B,
                      scale: t.scale,
                      x: "number" == typeof t.x ? t.x : u,
                      y: "number" == typeof t.y ? t.y : w,
                      width: "number" == typeof t.width ? t.width : Math.ceil(l),
                      height: "number" == typeof t.height ? t.height : Math.ceil(c),
                      windowWidth: t.windowWidth,
                      windowHeight: t.windowHeight,
                      scrollX: t.scrollX,
                      scrollY: t.scrollY
                    })
                  })) : (0, l.cloneWindow)(h, w, e, t, B, A).then((function (A) {
                    var e = n(A, 3),
                      a = e[0],
                      s = e[1],
                      l = e[2],
                      d = (0, r.NodeParser)(s, l, B),
                      w = s.ownerDocument;
                    return p === d.container.style.background.backgroundColor && (d.container.style.background.backgroundColor = u.TRANSPARENT), l.ready().then((function (A) {
                      var e = new c.FontMetrics(w),
                        n = w.defaultView,
                        r = n.pageXOffset,
                        l = n.pageYOffset,
                        u = "HTML" === s.tagName || "BODY" === s.tagName ? (0, i.parseDocumentSize)(h) : (0, i.parseBounds)(s, r, l),
                        f = u.width,
                        g = u.height,
                        Q = u.left,
                        m = u.top,
                        U = {
                          backgroundColor: p,
                          fontMetrics: e,
                          imageStore: A,
                          logger: B,
                          scale: t.scale,
                          x: "number" == typeof t.x ? t.x : Q,
                          y: "number" == typeof t.y ? t.y : m,
                          width: "number" == typeof t.width ? t.width : Math.ceil(f),
                          height: "number" == typeof t.height ? t.height : Math.ceil(g)
                        };
                      if (Array.isArray(t.target)) return Promise.all(t.target.map((function (A) {
                        return new o.default(A, U).render(d)
                      })));
                      var C = new o.default(t.target, U).render(d);
                      return !0 === t.removeContainer && a.parentNode && a.parentNode.removeChild(a), C
                    }))
                  }));
                  var d
                }))
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.NodeParser = void 0;
              var n = l(t(30)),
                r = l(t(3)),
                o = l(t(9)),
                a = t(21),
                s = t(14),
                i = t(8);

              function l(A) {
                return A && A.__esModule ? A : {
                  default: A
                }
              }
              e.NodeParser = function (A, e, t) {
                var o = 0,
                  a = new r.default(A, null, e, o++),
                  s = new n.default(a, null, !0);
                return u(A, a, s, e, 1), s
              };
              var c = ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"],
                u = function A(e, t, l, u, h) {
                  for (var w, f = e.firstChild; f; f = w) {
                    w = f.nextSibling;
                    var g = f.ownerDocument.defaultView;
                    if (f instanceof g.Text || f instanceof Text || g.parent && f instanceof g.parent.Text) f.data.trim().length > 0 && t.childNodes.push(o.default.fromTextNode(f, t));
                    else if (f instanceof g.HTMLElement || f instanceof HTMLElement || g.parent && f instanceof g.parent.HTMLElement) {
                      if (-1 === c.indexOf(f.nodeName)) {
                        var p = new r.default(f, t, u, h++);
                        if (p.isVisible()) {
                          "INPUT" === f.tagName ? (0, a.inlineInputElement)(f, p) : "TEXTAREA" === f.tagName ? (0, a.inlineTextAreaElement)(f, p) : "SELECT" === f.tagName ? (0, a.inlineSelectElement)(f, p) : p.style.listStyle && p.style.listStyle.listStyleType !== i.LIST_STYLE_TYPE.NONE && (0, s.inlineListItemElement)(f, p, u);
                          var Q = "TEXTAREA" !== f.tagName,
                            m = d(p, f);
                          if (m || B(p)) {
                            var U = m || p.isPositioned() ? l.getRealParentStackingContext() : l,
                              C = new n.default(p, U, m);
                            U.contexts.push(C), Q && A(f, p, C, u, h)
                          } else l.children.push(p), Q && A(f, p, l, u, h)
                        }
                      }
                    } else if (f instanceof g.SVGSVGElement || f instanceof SVGSVGElement || g.parent && f instanceof g.parent.SVGSVGElement) {
                      var E = new r.default(f, t, u, h++),
                        v = d(E, f);
                      if (v || B(E)) {
                        var F = v || E.isPositioned() ? l.getRealParentStackingContext() : l,
                          b = new n.default(E, F, v);
                        F.contexts.push(b)
                      } else l.children.push(E)
                    }
                  }
                },
                d = function (A, e) {
                  return A.isRootElement() || A.isPositionedWithZIndex() || A.style.opacity < 1 || A.isTransformed() || h(A, e)
                },
                B = function (A) {
                  return A.isPositioned() || A.isFloating()
                },
                h = function (A, e) {
                  return "BODY" === e.nodeName && A.parent instanceof r.default && A.parent.style.background.backgroundColor.isTransparent()
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n, r = function () {
                function A(A, e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                  }
                }
                return function (e, t, n) {
                  return t && A(e.prototype, t), n && A(e, n), e
                }
              }();
              (n = t(3)) && n.__esModule, t(19);
              var o = function () {
                function A(e, t, n) {
                  ! function (A, e) {
                    if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                  }(this, A), this.container = e, this.parent = t, this.contexts = [], this.children = [], this.treatAsRealStackingContext = n
                }
                return r(A, [{
                  key: "getOpacity",
                  value: function () {
                    return this.parent ? this.container.style.opacity * this.parent.getOpacity() : this.container.style.opacity
                  }
                }, {
                  key: "getRealParentStackingContext",
                  value: function () {
                    return !this.parent || this.treatAsRealStackingContext ? this : this.parent.getRealParentStackingContext()
                  }
                }]), A
              }();
              e.default = o
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.default = function A(e, t) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.width = e, this.height = t
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n, r = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                o = t(6),
                a = (n = t(7)) && n.__esModule ? n : {
                  default: n
                },
                s = function (A, e, t) {
                  return new a.default(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t)
                },
                i = function () {
                  function A(e, t, n, r) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.type = o.PATH.BEZIER_CURVE, this.start = e, this.startControl = t, this.endControl = n, this.end = r
                  }
                  return r(A, [{
                    key: "subdivide",
                    value: function (e, t) {
                      var n = s(this.start, this.startControl, e),
                        r = s(this.startControl, this.endControl, e),
                        o = s(this.endControl, this.end, e),
                        a = s(n, r, e),
                        i = s(r, o, e),
                        l = s(a, i, e);
                      return t ? new A(this.start, n, a, l) : new A(l, i, o, this.end)
                    }
                  }, {
                    key: "reverse",
                    value: function () {
                      return new A(this.end, this.endControl, this.startControl, this.start)
                    }
                  }]), A
                }();
              e.default = i
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseBorderRadius = void 0;
              var n, r = function (A, e) {
                  if (Array.isArray(A)) return A;
                  if (Symbol.iterator in Object(A)) return function (A, e) {
                    var t = [],
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (var a, s = A[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !e || t.length !== e); n = !0);
                    } catch (A) {
                      r = !0, o = A
                    } finally {
                      try {
                        !n && s.return && s.return()
                      } finally {
                        if (r) throw o
                      }
                    }
                    return t
                  }(A, e);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                o = (n = t(1)) && n.__esModule ? n : {
                  default: n
                },
                a = ["top-left", "top-right", "bottom-right", "bottom-left"];
              e.parseBorderRadius = function (A) {
                return a.map((function (e) {
                  var t = A.getPropertyValue("border-" + e + "-radius").split(" ").map(o.default.create),
                    n = r(t, 2),
                    a = n[0],
                    s = n[1];
                  return void 0 === s ? [a, a] : [a, s]
                }))
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = e.DISPLAY = {
                  NONE: 1,
                  BLOCK: 2,
                  INLINE: 4,
                  RUN_IN: 8,
                  FLOW: 16,
                  FLOW_ROOT: 32,
                  TABLE: 64,
                  FLEX: 128,
                  GRID: 256,
                  RUBY: 512,
                  SUBGRID: 1024,
                  LIST_ITEM: 2048,
                  TABLE_ROW_GROUP: 4096,
                  TABLE_HEADER_GROUP: 8192,
                  TABLE_FOOTER_GROUP: 16384,
                  TABLE_ROW: 32768,
                  TABLE_CELL: 65536,
                  TABLE_COLUMN_GROUP: 1 << 17,
                  TABLE_COLUMN: 1 << 18,
                  TABLE_CAPTION: 1 << 19,
                  RUBY_BASE: 1 << 20,
                  RUBY_TEXT: 1 << 21,
                  RUBY_BASE_CONTAINER: 1 << 22,
                  RUBY_TEXT_CONTAINER: 1 << 23,
                  CONTENTS: 1 << 24,
                  INLINE_BLOCK: 1 << 25,
                  INLINE_LIST_ITEM: 1 << 26,
                  INLINE_TABLE: 1 << 27,
                  INLINE_FLEX: 1 << 28,
                  INLINE_GRID: 1 << 29
                },
                r = function (A, e) {
                  return A | function (A) {
                    switch (A) {
                      case "block":
                        return n.BLOCK;
                      case "inline":
                        return n.INLINE;
                      case "run-in":
                        return n.RUN_IN;
                      case "flow":
                        return n.FLOW;
                      case "flow-root":
                        return n.FLOW_ROOT;
                      case "table":
                        return n.TABLE;
                      case "flex":
                        return n.FLEX;
                      case "grid":
                        return n.GRID;
                      case "ruby":
                        return n.RUBY;
                      case "subgrid":
                        return n.SUBGRID;
                      case "list-item":
                        return n.LIST_ITEM;
                      case "table-row-group":
                        return n.TABLE_ROW_GROUP;
                      case "table-header-group":
                        return n.TABLE_HEADER_GROUP;
                      case "table-footer-group":
                        return n.TABLE_FOOTER_GROUP;
                      case "table-row":
                        return n.TABLE_ROW;
                      case "table-cell":
                        return n.TABLE_CELL;
                      case "table-column-group":
                        return n.TABLE_COLUMN_GROUP;
                      case "table-column":
                        return n.TABLE_COLUMN;
                      case "table-caption":
                        return n.TABLE_CAPTION;
                      case "ruby-base":
                        return n.RUBY_BASE;
                      case "ruby-text":
                        return n.RUBY_TEXT;
                      case "ruby-base-container":
                        return n.RUBY_BASE_CONTAINER;
                      case "ruby-text-container":
                        return n.RUBY_TEXT_CONTAINER;
                      case "contents":
                        return n.CONTENTS;
                      case "inline-block":
                        return n.INLINE_BLOCK;
                      case "inline-list-item":
                        return n.INLINE_LIST_ITEM;
                      case "inline-table":
                        return n.INLINE_TABLE;
                      case "inline-flex":
                        return n.INLINE_FLEX;
                      case "inline-grid":
                        return n.INLINE_GRID
                    }
                    return n.NONE
                  }(e)
                };
              e.parseDisplay = function (A) {
                return A.split(" ").reduce(r, 0)
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = e.FLOAT = {
                NONE: 0,
                LEFT: 1,
                RIGHT: 2,
                INLINE_START: 3,
                INLINE_END: 4
              };
              e.parseCSSFloat = function (A) {
                switch (A) {
                  case "left":
                    return n.LEFT;
                  case "right":
                    return n.RIGHT;
                  case "inline-start":
                    return n.INLINE_START;
                  case "inline-end":
                    return n.INLINE_END
                }
                return n.NONE
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseFont = function (A) {
                return {
                  fontFamily: A.fontFamily,
                  fontSize: A.fontSize,
                  fontStyle: A.fontStyle,
                  fontVariant: A.fontVariant,
                  fontWeight: function (A) {
                    switch (A) {
                      case "normal":
                        return 400;
                      case "bold":
                        return 700
                    }
                    var e = parseInt(A, 10);
                    return isNaN(e) ? 400 : e
                  }(A.fontWeight)
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseLetterSpacing = function (A) {
                if ("normal" === A) return 0;
                var e = parseFloat(A);
                return isNaN(e) ? 0 : e
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = e.LINE_BREAK = {
                NORMAL: "normal",
                STRICT: "strict"
              };
              e.parseLineBreak = function (A) {
                switch (A) {
                  case "strict":
                    return n.STRICT;
                  case "normal":
                  default:
                    return n.NORMAL
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseMargin = void 0;
              var n, r = (n = t(1)) && n.__esModule ? n : {
                  default: n
                },
                o = ["top", "right", "bottom", "left"];
              e.parseMargin = function (A) {
                return o.map((function (e) {
                  return new r.default(A.getPropertyValue("margin-" + e))
                }))
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = e.OVERFLOW = {
                VISIBLE: 0,
                HIDDEN: 1,
                SCROLL: 2,
                AUTO: 3
              };
              e.parseOverflow = function (A) {
                switch (A) {
                  case "hidden":
                    return n.HIDDEN;
                  case "scroll":
                    return n.SCROLL;
                  case "auto":
                    return n.AUTO;
                  case "visible":
                  default:
                    return n.VISIBLE
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseTextShadow = void 0;
              var n, r = (n = t(0)) && n.__esModule ? n : {
                  default: n
                },
                o = /^([+-]|\d|\.)$/i;
              e.parseTextShadow = function (A) {
                if ("none" === A || "string" != typeof A) return null;
                for (var e = "", t = !1, n = [], a = [], s = 0, i = null, l = function () {
                    e.length && (t ? n.push(parseFloat(e)) : i = new r.default(e)), t = !1, e = ""
                  }, c = function () {
                    n.length && null !== i && a.push({
                      color: i,
                      offsetX: n[0] || 0,
                      offsetY: n[1] || 0,
                      blur: n[2] || 0
                    }), n.splice(0, n.length), i = null
                  }, u = 0; u < A.length; u++) {
                  var d = A[u];
                  switch (d) {
                    case "(":
                      e += d, s++;
                      break;
                    case ")":
                      e += d, s--;
                      break;
                    case ",":
                      0 === s ? (l(), c()) : e += d;
                      break;
                    case " ":
                      0 === s ? l() : e += d;
                      break;
                    default:
                      0 === e.length && o.test(d) && (t = !0), e += d
                  }
                }
                return l(), c(), 0 === a.length ? null : a
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseTransform = void 0;
              var n, r = (n = t(1)) && n.__esModule ? n : {
                  default: n
                },
                o = function (A) {
                  return parseFloat(A.trim())
                },
                a = /(matrix|matrix3d)\((.+)\)/,
                s = (e.parseTransform = function (A) {
                  var e = i(A.transform || A.webkitTransform || A.mozTransform || A.msTransform || A.oTransform);
                  return null === e ? null : {
                    transform: e,
                    transformOrigin: s(A.transformOrigin || A.webkitTransformOrigin || A.mozTransformOrigin || A.msTransformOrigin || A.oTransformOrigin)
                  }
                }, function (A) {
                  if ("string" != typeof A) {
                    var e = new r.default("0");
                    return [e, e]
                  }
                  var t = A.split(" ").map(r.default.create);
                  return [t[0], t[1]]
                }),
                i = function (A) {
                  if ("none" === A || "string" != typeof A) return null;
                  var e = A.match(a);
                  if (e) {
                    if ("matrix" === e[1]) {
                      var t = e[2].split(",").map(o);
                      return [t[0], t[1], t[2], t[3], t[4], t[5]]
                    }
                    var n = e[2].split(",").map(o);
                    return [n[0], n[1], n[4], n[5], n[12], n[13]]
                  }
                  return null
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = e.VISIBILITY = {
                VISIBLE: 0,
                HIDDEN: 1,
                COLLAPSE: 2
              };
              e.parseVisibility = function (A) {
                switch (A) {
                  case "hidden":
                    return n.HIDDEN;
                  case "collapse":
                    return n.COLLAPSE;
                  case "visible":
                  default:
                    return n.VISIBLE
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = e.WORD_BREAK = {
                NORMAL: "normal",
                BREAK_ALL: "break-all",
                KEEP_ALL: "keep-all"
              };
              e.parseWordBreak = function (A) {
                switch (A) {
                  case "break-all":
                    return n.BREAK_ALL;
                  case "keep-all":
                    return n.KEEP_ALL;
                  case "normal":
                  default:
                    return n.NORMAL
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseZIndex = function (A) {
                var e = "auto" === A;
                return {
                  auto: e,
                  order: e ? 0 : parseInt(A, 10)
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = t(13);
              Object.defineProperty(e, "toCodePoints", {
                enumerable: !0,
                get: function () {
                  return n.toCodePoints
                }
              }), Object.defineProperty(e, "fromCodePoint", {
                enumerable: !0,
                get: function () {
                  return n.fromCodePoint
                }
              });
              var r = t(47);
              Object.defineProperty(e, "LineBreaker", {
                enumerable: !0,
                get: function () {
                  return r.LineBreaker
                }
              })
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.LineBreaker = e.inlineBreakOpportunities = e.lineBreakAtIndex = e.codePointsToCharacterClasses = e.UnicodeTrie = e.BREAK_ALLOWED = e.BREAK_NOT_ALLOWED = e.BREAK_MANDATORY = e.classes = e.LETTER_NUMBER_MODIFIER = void 0;
              var n, r = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                o = function (A, e) {
                  if (Array.isArray(A)) return A;
                  if (Symbol.iterator in Object(A)) return function (A, e) {
                    var t = [],
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (var a, s = A[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !e || t.length !== e); n = !0);
                    } catch (A) {
                      r = !0, o = A
                    } finally {
                      try {
                        !n && s.return && s.return()
                      } finally {
                        if (r) throw o
                      }
                    }
                    return t
                  }(A, e);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                a = t(48),
                s = (n = t(49)) && n.__esModule ? n : {
                  default: n
                },
                i = t(13),
                l = e.LETTER_NUMBER_MODIFIER = 50,
                c = 10,
                u = 13,
                d = 15,
                B = 17,
                h = 18,
                w = 19,
                f = 20,
                g = 21,
                p = 22,
                Q = 24,
                m = 25,
                U = 26,
                C = 27,
                E = 28,
                v = 30,
                F = 32,
                b = 33,
                H = 34,
                y = 35,
                T = 37,
                I = 38,
                N = 39,
                x = 40,
                S = 42,
                L = (e.classes = {
                  BK: 1,
                  CR: 2,
                  LF: 3,
                  CM: 4,
                  NL: 5,
                  SG: 6,
                  WJ: 7,
                  ZW: 8,
                  GL: 9,
                  SP: c,
                  ZWJ: 11,
                  B2: 12,
                  BA: u,
                  BB: 14,
                  HY: d,
                  CB: 16,
                  CL: B,
                  CP: h,
                  EX: w,
                  IN: f,
                  NS: g,
                  OP: p,
                  QU: 23,
                  IS: Q,
                  NU: m,
                  PO: U,
                  PR: C,
                  SY: E,
                  AI: 29,
                  AL: v,
                  CJ: 31,
                  EB: F,
                  EM: b,
                  H2: H,
                  H3: y,
                  HL: 36,
                  ID: T,
                  JL: I,
                  JV: N,
                  JT: x,
                  RI: 41,
                  SA: S,
                  XX: 43
                }, e.BREAK_MANDATORY = "!"),
                k = e.BREAK_NOT_ALLOWED = "×",
                K = e.BREAK_ALLOWED = "÷",
                M = e.UnicodeTrie = (0, a.createTrieFromBase64)(s.default),
                _ = [v, 36],
                D = [1, 2, 3, 5],
                O = [c, 8],
                R = [C, U],
                P = D.concat(O),
                z = [I, N, x, H, y],
                X = [d, u],
                V = e.codePointsToCharacterClasses = function (A) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "strict",
                    t = [],
                    n = [],
                    r = [];
                  return A.forEach((function (A, o) {
                    var a = M.get(A);
                    if (a > l ? (r.push(!0), a -= l) : r.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return n.push(o), t.push(16);
                    if (4 === a || 11 === a) {
                      if (0 === o) return n.push(o), t.push(v);
                      var s = t[o - 1];
                      return -1 === P.indexOf(s) ? (n.push(n[o - 1]), t.push(s)) : (n.push(o), t.push(v))
                    }
                    return n.push(o), 31 === a ? t.push("strict" === e ? g : T) : a === S || 29 === a ? t.push(v) : 43 === a ? A >= 131072 && A <= 196605 || A >= 196608 && A <= 262141 ? t.push(T) : t.push(v) : void t.push(a)
                  })), [n, t, r]
                },
                Y = function (A, e, t, n) {
                  var r = n[t];
                  if (Array.isArray(A) ? -1 !== A.indexOf(r) : A === r)
                    for (var o = t; o <= n.length;) {
                      var a = n[++o];
                      if (a === e) return !0;
                      if (a !== c) break
                    }
                  if (r === c)
                    for (var s = t; s > 0;) {
                      var i = n[--s];
                      if (Array.isArray(A) ? -1 !== A.indexOf(i) : A === i)
                        for (var l = t; l <= n.length;) {
                          var u = n[++l];
                          if (u === e) return !0;
                          if (u !== c) break
                        }
                      if (i !== c) break
                    }
                  return !1
                },
                W = function (A, e) {
                  for (var t = A; t >= 0;) {
                    var n = e[t];
                    if (n !== c) return n;
                    t--
                  }
                  return 0
                },
                G = function (A, e, t, n, r) {
                  if (0 === t[n]) return k;
                  var o = n - 1;
                  if (Array.isArray(r) && !0 === r[o]) return k;
                  var a = o - 1,
                    s = o + 1,
                    i = e[o],
                    l = a >= 0 ? e[a] : 0,
                    v = e[s];
                  if (2 === i && 3 === v) return k;
                  if (-1 !== D.indexOf(i)) return L;
                  if (-1 !== D.indexOf(v)) return k;
                  if (-1 !== O.indexOf(v)) return k;
                  if (8 === W(o, e)) return K;
                  if (11 === M.get(A[o]) && (v === T || v === F || v === b)) return k;
                  if (7 === i || 7 === v) return k;
                  if (9 === i) return k;
                  if (-1 === [c, u, d].indexOf(i) && 9 === v) return k;
                  if (-1 !== [B, h, w, Q, E].indexOf(v)) return k;
                  if (W(o, e) === p) return k;
                  if (Y(23, p, o, e)) return k;
                  if (Y([B, h], g, o, e)) return k;
                  if (Y(12, 12, o, e)) return k;
                  if (i === c) return K;
                  if (23 === i || 23 === v) return k;
                  if (16 === v || 16 === i) return K;
                  if (-1 !== [u, d, g].indexOf(v) || 14 === i) return k;
                  if (36 === l && -1 !== X.indexOf(i)) return k;
                  if (i === E && 36 === v) return k;
                  if (v === f && -1 !== _.concat(f, w, m, T, F, b).indexOf(i)) return k;
                  if (-1 !== _.indexOf(v) && i === m || -1 !== _.indexOf(i) && v === m) return k;
                  if (i === C && -1 !== [T, F, b].indexOf(v) || -1 !== [T, F, b].indexOf(i) && v === U) return k;
                  if (-1 !== _.indexOf(i) && -1 !== R.indexOf(v) || -1 !== R.indexOf(i) && -1 !== _.indexOf(v)) return k;
                  if (-1 !== [C, U].indexOf(i) && (v === m || -1 !== [p, d].indexOf(v) && e[s + 1] === m) || -1 !== [p, d].indexOf(i) && v === m || i === m && -1 !== [m, E, Q].indexOf(v)) return k;
                  if (-1 !== [m, E, Q, B, h].indexOf(v))
                    for (var S = o; S >= 0;) {
                      var P = e[S];
                      if (P === m) return k;
                      if (-1 === [E, Q].indexOf(P)) break;
                      S--
                    }
                  if (-1 !== [C, U].indexOf(v))
                    for (var V = -1 !== [B, h].indexOf(i) ? a : o; V >= 0;) {
                      var G = e[V];
                      if (G === m) return k;
                      if (-1 === [E, Q].indexOf(G)) break;
                      V--
                    }
                  if (I === i && -1 !== [I, N, H, y].indexOf(v) || -1 !== [N, H].indexOf(i) && -1 !== [N, x].indexOf(v) || -1 !== [x, y].indexOf(i) && v === x) return k;
                  if (-1 !== z.indexOf(i) && -1 !== [f, U].indexOf(v) || -1 !== z.indexOf(v) && i === C) return k;
                  if (-1 !== _.indexOf(i) && -1 !== _.indexOf(v)) return k;
                  if (i === Q && -1 !== _.indexOf(v)) return k;
                  if (-1 !== _.concat(m).indexOf(i) && v === p || -1 !== _.concat(m).indexOf(v) && i === h) return k;
                  if (41 === i && 41 === v) {
                    for (var J = t[o], j = 1; J > 0 && 41 === e[--J];) j++;
                    if (j % 2 != 0) return k
                  }
                  return i === F && v === b ? k : K
                },
                J = (e.lineBreakAtIndex = function (A, e) {
                  if (0 === e) return k;
                  if (e >= A.length) return L;
                  var t = V(A),
                    n = o(t, 2),
                    r = n[0],
                    a = n[1];
                  return G(A, a, r, e)
                }, function (A, e) {
                  e || (e = {
                    lineBreak: "normal",
                    wordBreak: "normal"
                  });
                  var t = V(A, e.lineBreak),
                    n = o(t, 3),
                    r = n[0],
                    a = n[1],
                    s = n[2];
                  return "break-all" !== e.wordBreak && "break-word" !== e.wordBreak || (a = a.map((function (A) {
                    return -1 !== [m, v, S].indexOf(A) ? T : A
                  }))), [r, a, "keep-all" === e.wordBreak ? s.map((function (e, t) {
                    return e && A[t] >= 19968 && A[t] <= 40959
                  })) : null]
                }),
                j = (e.inlineBreakOpportunities = function (A, e) {
                  var t = (0, i.toCodePoints)(A),
                    n = k,
                    r = J(t, e),
                    a = o(r, 3),
                    s = a[0],
                    l = a[1],
                    c = a[2];
                  return t.forEach((function (A, e) {
                    n += (0, i.fromCodePoint)(A) + (e >= t.length - 1 ? L : G(t, l, s, e + 1, c))
                  })), n
                }, function () {
                  function A(e, t, n, r) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this._codePoints = e, this.required = t === L, this.start = n, this.end = r
                  }
                  return r(A, [{
                    key: "slice",
                    value: function () {
                      return i.fromCodePoint.apply(void 0, function (A) {
                        if (Array.isArray(A)) {
                          for (var e = 0, t = Array(A.length); e < A.length; e++) t[e] = A[e];
                          return t
                        }
                        return Array.from(A)
                      }(this._codePoints.slice(this.start, this.end)))
                    }
                  }]), A
                }());
              e.LineBreaker = function (A, e) {
                var t = (0, i.toCodePoints)(A),
                  n = J(t, e),
                  r = o(n, 3),
                  a = r[0],
                  s = r[1],
                  l = r[2],
                  c = t.length,
                  u = 0,
                  d = 0;
                return {
                  next: function () {
                    if (d >= c) return {
                      done: !0
                    };
                    for (var A = k; d < c && (A = G(t, s, a, ++d, l)) === k;);
                    if (A !== k || d === c) {
                      var e = new j(t, A, u, d);
                      return u = d, {
                        value: e,
                        done: !1
                      }
                    }
                    return {
                      done: !0
                    }
                  }
                }
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.Trie = e.createTrieFromBase64 = e.UTRIE2_INDEX_2_MASK = e.UTRIE2_INDEX_2_BLOCK_LENGTH = e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = e.UTRIE2_INDEX_1_OFFSET = e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = e.UTRIE2_INDEX_2_BMP_LENGTH = e.UTRIE2_LSCP_INDEX_2_LENGTH = e.UTRIE2_DATA_MASK = e.UTRIE2_DATA_BLOCK_LENGTH = e.UTRIE2_LSCP_INDEX_2_OFFSET = e.UTRIE2_SHIFT_1_2 = e.UTRIE2_INDEX_SHIFT = e.UTRIE2_SHIFT_1 = e.UTRIE2_SHIFT_2 = void 0;
              var n = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                r = t(13),
                o = e.UTRIE2_SHIFT_2 = 5,
                a = e.UTRIE2_SHIFT_1 = 11,
                s = e.UTRIE2_INDEX_SHIFT = 2,
                i = e.UTRIE2_SHIFT_1_2 = a - o,
                l = e.UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> o,
                c = e.UTRIE2_DATA_BLOCK_LENGTH = 1 << o,
                u = e.UTRIE2_DATA_MASK = c - 1,
                d = e.UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> o,
                B = e.UTRIE2_INDEX_2_BMP_LENGTH = l + d,
                h = e.UTRIE2_UTF8_2B_INDEX_2_OFFSET = B,
                w = e.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32,
                f = e.UTRIE2_INDEX_1_OFFSET = h + w,
                g = e.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> a,
                p = e.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << i,
                Q = e.UTRIE2_INDEX_2_MASK = p - 1,
                m = (e.createTrieFromBase64 = function (A) {
                  var e = (0, r.decode)(A),
                    t = Array.isArray(e) ? (0, r.polyUint32Array)(e) : new Uint32Array(e),
                    n = Array.isArray(e) ? (0, r.polyUint16Array)(e) : new Uint16Array(e),
                    o = n.slice(12, t[4] / 2),
                    a = 2 === t[5] ? n.slice((24 + t[4]) / 2) : t.slice(Math.ceil((24 + t[4]) / 4));
                  return new m(t[0], t[1], t[2], t[3], o, a)
                }, e.Trie = function () {
                  function A(e, t, n, r, o, a) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.initialValue = e, this.errorValue = t, this.highStart = n, this.highValueIndex = r, this.index = o, this.data = a
                  }
                  return n(A, [{
                    key: "get",
                    value: function (A) {
                      var e = void 0;
                      if (A >= 0) {
                        if (A < 55296 || A > 56319 && A <= 65535) return e = ((e = this.index[A >> o]) << s) + (A & u), this.data[e];
                        if (A <= 65535) return e = ((e = this.index[l + (A - 55296 >> o)]) << s) + (A & u), this.data[e];
                        if (A < this.highStart) return e = f - g + (A >> a), e = this.index[e], e += A >> o & Q, e = ((e = this.index[e]) << s) + (A & u), this.data[e];
                        if (A <= 1114111) return this.data[this.highValueIndex]
                      }
                      return this.errorValue
                    }
                  }]), A
                }())
            }, function (A, e, t) {
              A.exports = "KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = t(6);
              e.default = function A(e, t, r) {
                ! function (A, e) {
                  if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, A), this.type = n.PATH.CIRCLE, this.x = e, this.y = t, this.radius = r
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n, r = function (A, e) {
                  if (Array.isArray(A)) return A;
                  if (Symbol.iterator in Object(A)) return function (A, e) {
                    var t = [],
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (var a, s = A[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !e || t.length !== e); n = !0);
                    } catch (A) {
                      r = !0, o = A
                    } finally {
                      try {
                        !n && s.return && s.return()
                      } finally {
                        if (r) throw o
                      }
                    }
                    return t
                  }(A, e);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                o = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                a = t(2),
                s = (t(25), t(52)),
                i = (n = t(9)) && n.__esModule ? n : {
                  default: n
                },
                l = t(5),
                c = t(12),
                u = function () {
                  function A(e, t) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.target = e, this.options = t, e.render(t)
                  }
                  return o(A, [{
                    key: "renderNode",
                    value: function (A) {
                      A.isVisible() && (this.renderNodeBackgroundAndBorders(A), this.renderNodeContent(A))
                    }
                  }, {
                    key: "renderNodeContent",
                    value: function (A) {
                      var e = this,
                        t = function () {
                          if (A.childNodes.length && A.childNodes.forEach((function (t) {
                              if (t instanceof i.default) {
                                var n = t.parent.style;
                                e.target.renderTextNode(t.bounds, n.color, n.font, n.textDecoration, n.textShadow)
                              } else e.target.drawShape(t, A.style.color)
                            })), A.image) {
                            var t = e.options.imageStore.get(A.image);
                            if (t) {
                              var n = (0, a.calculateContentBox)(A.bounds, A.style.padding, A.style.border),
                                r = "number" == typeof t.width && t.width > 0 ? t.width : n.width,
                                o = "number" == typeof t.height && t.height > 0 ? t.height : n.height;
                              r > 0 && o > 0 && e.target.clip([(0, a.calculatePaddingBoxPath)(A.curvedBounds)], (function () {
                                e.target.drawImage(t, new a.Bounds(0, 0, r, o), n)
                              }))
                            }
                          }
                        },
                        n = A.getClipPaths();
                      n.length ? this.target.clip(n, t) : t()
                    }
                  }, {
                    key: "renderNodeBackgroundAndBorders",
                    value: function (A) {
                      var e = this,
                        t = !A.style.background.backgroundColor.isTransparent() || A.style.background.backgroundImage.length,
                        n = A.style.border.some((function (A) {
                          return A.borderStyle !== c.BORDER_STYLE.NONE && !A.borderColor.isTransparent()
                        })),
                        r = function () {
                          var n = (0, l.calculateBackgroungPaintingArea)(A.curvedBounds, A.style.background.backgroundClip);
                          t && e.target.clip([n], (function () {
                            A.style.background.backgroundColor.isTransparent() || e.target.fill(A.style.background.backgroundColor), e.renderBackgroundImage(A)
                          })), A.style.border.forEach((function (t, n) {
                            t.borderStyle === c.BORDER_STYLE.NONE || t.borderColor.isTransparent() || e.renderBorder(t, n, A.curvedBounds)
                          }))
                        };
                      if (t || n) {
                        var o = A.parent ? A.parent.getClipPaths() : [];
                        o.length ? this.target.clip(o, r) : r()
                      }
                    }
                  }, {
                    key: "renderBackgroundImage",
                    value: function (A) {
                      var e = this;
                      A.style.background.backgroundImage.slice(0).reverse().forEach((function (t) {
                        "url" === t.source.method && t.source.args.length ? e.renderBackgroundRepeat(A, t) : /gradient/i.test(t.source.method) && e.renderBackgroundGradient(A, t)
                      }))
                    }
                  }, {
                    key: "renderBackgroundRepeat",
                    value: function (A, e) {
                      var t = this.options.imageStore.get(e.source.args[0]);
                      if (t) {
                        var n = (0, l.calculateBackgroungPositioningArea)(A.style.background.backgroundOrigin, A.bounds, A.style.padding, A.style.border),
                          r = (0, l.calculateBackgroundSize)(e, t, n),
                          o = (0, l.calculateBackgroundPosition)(e.position, r, n),
                          a = (0, l.calculateBackgroundRepeatPath)(e, o, r, n, A.bounds),
                          s = Math.round(n.left + o.x),
                          i = Math.round(n.top + o.y);
                        this.target.renderRepeat(a, t, r, s, i)
                      }
                    }
                  }, {
                    key: "renderBackgroundGradient",
                    value: function (A, e) {
                      var t = (0, l.calculateBackgroungPositioningArea)(A.style.background.backgroundOrigin, A.bounds, A.style.padding, A.style.border),
                        n = (0, l.calculateGradientBackgroundSize)(e, t),
                        r = (0, l.calculateBackgroundPosition)(e.position, n, t),
                        o = new a.Bounds(Math.round(t.left + r.x), Math.round(t.top + r.y), n.width, n.height),
                        i = (0, s.parseGradient)(A, e.source, o);
                      if (i) switch (i.type) {
                        case s.GRADIENT_TYPE.LINEAR_GRADIENT:
                          this.target.renderLinearGradient(o, i);
                          break;
                        case s.GRADIENT_TYPE.RADIAL_GRADIENT:
                          this.target.renderRadialGradient(o, i)
                      }
                    }
                  }, {
                    key: "renderBorder",
                    value: function (A, e, t) {
                      this.target.drawShape((0, a.parsePathForBorder)(t, e), A.borderColor)
                    }
                  }, {
                    key: "renderStack",
                    value: function (A) {
                      var e = this;
                      if (A.container.isVisible()) {
                        var t = A.getOpacity();
                        t !== this._opacity && (this.target.setOpacity(A.getOpacity()), this._opacity = t);
                        var n = A.container.style.transform;
                        null !== n ? this.target.transform(A.container.bounds.left + n.transformOrigin[0].value, A.container.bounds.top + n.transformOrigin[1].value, n.transform, (function () {
                          return e.renderStackContent(A)
                        })) : this.renderStackContent(A)
                      }
                    }
                  }, {
                    key: "renderStackContent",
                    value: function (A) {
                      var e = B(A),
                        t = r(e, 5),
                        n = t[0],
                        o = t[1],
                        a = t[2],
                        s = t[3],
                        i = t[4],
                        l = d(A),
                        c = r(l, 2),
                        u = c[0],
                        w = c[1];
                      this.renderNodeBackgroundAndBorders(A.container), n.sort(h).forEach(this.renderStack, this), this.renderNodeContent(A.container), w.forEach(this.renderNode, this), s.forEach(this.renderStack, this), i.forEach(this.renderStack, this), u.forEach(this.renderNode, this), o.forEach(this.renderStack, this), a.sort(h).forEach(this.renderStack, this)
                    }
                  }, {
                    key: "render",
                    value: function (A) {
                      return this.options.backgroundColor && this.target.rectangle(this.options.x, this.options.y, this.options.width, this.options.height, this.options.backgroundColor), this.renderStack(A), this.target.getTarget()
                    }
                  }]), A
                }();
              e.default = u;
              var d = function (A) {
                  for (var e = [], t = [], n = A.children.length, r = 0; r < n; r++) {
                    var o = A.children[r];
                    o.isInlineLevel() ? e.push(o) : t.push(o)
                  }
                  return [e, t]
                },
                B = function (A) {
                  for (var e = [], t = [], n = [], r = [], o = [], a = A.contexts.length, s = 0; s < a; s++) {
                    var i = A.contexts[s];
                    i.container.isPositioned() || i.container.style.opacity < 1 || i.container.isTransformed() ? i.container.style.zIndex.order < 0 ? e.push(i) : i.container.style.zIndex.order > 0 ? n.push(i) : t.push(i) : i.container.isFloating() ? r.push(i) : o.push(i)
                  }
                  return [e, t, n, r, o]
                },
                h = function (A, e) {
                  return A.container.style.zIndex.order > e.container.style.zIndex.order ? 1 : A.container.style.zIndex.order < e.container.style.zIndex.order ? -1 : A.container.index > e.container.index ? 1 : -1
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.transformWebkitRadialGradientArgs = e.parseGradient = e.RadialGradient = e.LinearGradient = e.RADIAL_GRADIENT_SHAPE = e.GRADIENT_TYPE = void 0;
              var n = function (A, e) {
                  if (Array.isArray(A)) return A;
                  if (Symbol.iterator in Object(A)) return function (A, e) {
                    var t = [],
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (var a, s = A[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !e || t.length !== e); n = !0);
                    } catch (A) {
                      r = !0, o = A
                    } finally {
                      try {
                        !n && s.return && s.return()
                      } finally {
                        if (r) throw o
                      }
                    }
                    return t
                  }(A, e);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                r = (l(t(3)), t(53)),
                o = l(t(0)),
                a = t(1),
                s = l(a),
                i = t(4);

              function l(A) {
                return A && A.__esModule ? A : {
                  default: A
                }
              }

              function c(A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
              }
              var u = /^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i,
                d = /^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i,
                B = /(px)|%|( 0)$/i,
                h = /^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i,
                w = /^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i,
                f = e.GRADIENT_TYPE = {
                  LINEAR_GRADIENT: 0,
                  RADIAL_GRADIENT: 1
                },
                g = e.RADIAL_GRADIENT_SHAPE = {
                  CIRCLE: 0,
                  ELLIPSE: 1
                },
                p = {
                  left: new s.default("0%"),
                  top: new s.default("0%"),
                  center: new s.default("50%"),
                  right: new s.default("100%"),
                  bottom: new s.default("100%")
                },
                Q = e.LinearGradient = function A(e, t) {
                  c(this, A), this.type = f.LINEAR_GRADIENT, this.colorStops = e, this.direction = t
                },
                m = e.RadialGradient = function A(e, t, n, r) {
                  c(this, A), this.type = f.RADIAL_GRADIENT, this.colorStops = e, this.shape = t, this.center = n, this.radius = r
                },
                U = (e.parseGradient = function (A, e, t) {
                  var n = e.args,
                    r = e.method,
                    o = e.prefix;
                  return "linear-gradient" === r ? C(n, t, !!o) : "gradient" === r && "linear" === n[0] ? C(["to bottom"].concat(N(n.slice(3))), t, !!o) : "radial-gradient" === r ? E(A, "-webkit-" === o ? I(n) : n, t) : "gradient" === r && "radial" === n[0] ? E(A, N(I(n.slice(1))), t) : void 0
                }, function (A, e, t) {
                  for (var n = [], r = e; r < A.length; r++) {
                    var a = A[r],
                      i = B.test(a),
                      l = a.lastIndexOf(" "),
                      c = new o.default(i ? a.substring(0, l) : a),
                      u = i ? new s.default(a.substring(l + 1)) : r === e ? new s.default("0%") : r === A.length - 1 ? new s.default("100%") : null;
                    n.push({
                      color: c,
                      stop: u
                    })
                  }
                  for (var d = n.map((function (A) {
                      var e = A.color,
                        n = A.stop;
                      return {
                        color: e,
                        stop: 0 === t ? 0 : n ? n.getAbsoluteValue(t) / t : null
                      }
                    })), h = d[0].stop, w = 0; w < d.length; w++)
                    if (null !== h) {
                      var f = d[w].stop;
                      if (null === f) {
                        for (var g = w; null === d[g].stop;) g++;
                        for (var p = g - w + 1, Q = (d[g].stop - h) / p; w < g; w++) h = d[w].stop = h + Q
                      } else h = f
                    } return d
                }),
                C = function (A, e, t) {
                  var n = (0, r.parseAngle)(A[0]),
                    o = u.test(A[0]),
                    a = o || null !== n || d.test(A[0]),
                    s = a ? null !== n ? v(t ? n - .5 * Math.PI : n, e) : o ? b(A[0], e) : H(A[0], e) : v(Math.PI, e),
                    l = a ? 1 : 0,
                    c = Math.min((0, i.distance)(Math.abs(s.x0) + Math.abs(s.x1), Math.abs(s.y0) + Math.abs(s.y1)), 2 * e.width, 2 * e.height);
                  return new Q(U(A, l, c), s)
                },
                E = function (A, e, t) {
                  var n = e[0].match(w),
                    r = n && ("circle" === n[1] || void 0 !== n[3] && void 0 === n[5]) ? g.CIRCLE : g.ELLIPSE,
                    o = {},
                    s = {};
                  n && (void 0 !== n[3] && (o.x = (0, a.calculateLengthFromValueWithUnit)(A, n[3], n[4]).getAbsoluteValue(t.width)), void 0 !== n[5] && (o.y = (0, a.calculateLengthFromValueWithUnit)(A, n[5], n[6]).getAbsoluteValue(t.height)), n[7] ? s.x = p[n[7].toLowerCase()] : void 0 !== n[8] && (s.x = (0, a.calculateLengthFromValueWithUnit)(A, n[8], n[9])), n[10] ? s.y = p[n[10].toLowerCase()] : void 0 !== n[11] && (s.y = (0, a.calculateLengthFromValueWithUnit)(A, n[11], n[12])));
                  var i = {
                      x: void 0 === s.x ? t.width / 2 : s.x.getAbsoluteValue(t.width),
                      y: void 0 === s.y ? t.height / 2 : s.y.getAbsoluteValue(t.height)
                    },
                    l = T(n && n[2] || "farthest-corner", r, i, o, t);
                  return new m(U(e, n ? 1 : 0, Math.min(l.x, l.y)), r, i, l)
                },
                v = function (A, e) {
                  var t = e.width,
                    n = e.height,
                    r = .5 * t,
                    o = .5 * n,
                    a = (Math.abs(t * Math.sin(A)) + Math.abs(n * Math.cos(A))) / 2,
                    s = r + Math.sin(A) * a,
                    i = o - Math.cos(A) * a;
                  return {
                    x0: s,
                    x1: t - s,
                    y0: i,
                    y1: n - i
                  }
                },
                F = function (A) {
                  return Math.acos(A.width / 2 / ((0, i.distance)(A.width, A.height) / 2))
                },
                b = function (A, e) {
                  switch (A) {
                    case "bottom":
                    case "to top":
                      return v(0, e);
                    case "left":
                    case "to right":
                      return v(Math.PI / 2, e);
                    case "right":
                    case "to left":
                      return v(3 * Math.PI / 2, e);
                    case "top right":
                    case "right top":
                    case "to bottom left":
                    case "to left bottom":
                      return v(Math.PI + F(e), e);
                    case "top left":
                    case "left top":
                    case "to bottom right":
                    case "to right bottom":
                      return v(Math.PI - F(e), e);
                    case "bottom left":
                    case "left bottom":
                    case "to top right":
                    case "to right top":
                      return v(F(e), e);
                    case "bottom right":
                    case "right bottom":
                    case "to top left":
                    case "to left top":
                      return v(2 * Math.PI - F(e), e);
                    case "top":
                    case "to bottom":
                    default:
                      return v(Math.PI, e)
                  }
                },
                H = function (A, e) {
                  var t = A.split(" ").map(parseFloat),
                    r = n(t, 2),
                    o = r[0],
                    a = r[1],
                    s = o / 100 * e.width / (a / 100 * e.height);
                  return v(Math.atan(isNaN(s) ? 1 : s) + Math.PI / 2, e)
                },
                y = function (A, e, t, n) {
                  return [{
                    x: 0,
                    y: 0
                  }, {
                    x: 0,
                    y: A.height
                  }, {
                    x: A.width,
                    y: 0
                  }, {
                    x: A.width,
                    y: A.height
                  }].reduce((function (A, r) {
                    var o = (0, i.distance)(e - r.x, t - r.y);
                    return (n ? o < A.optimumDistance : o > A.optimumDistance) ? {
                      optimumCorner: r,
                      optimumDistance: o
                    } : A
                  }), {
                    optimumDistance: n ? 1 / 0 : -1 / 0,
                    optimumCorner: null
                  }).optimumCorner
                },
                T = function (A, e, t, n, r) {
                  var o = t.x,
                    a = t.y,
                    s = 0,
                    l = 0;
                  switch (A) {
                    case "closest-side":
                      e === g.CIRCLE ? s = l = Math.min(Math.abs(o), Math.abs(o - r.width), Math.abs(a), Math.abs(a - r.height)) : e === g.ELLIPSE && (s = Math.min(Math.abs(o), Math.abs(o - r.width)), l = Math.min(Math.abs(a), Math.abs(a - r.height)));
                      break;
                    case "closest-corner":
                      if (e === g.CIRCLE) s = l = Math.min((0, i.distance)(o, a), (0, i.distance)(o, a - r.height), (0, i.distance)(o - r.width, a), (0, i.distance)(o - r.width, a - r.height));
                      else if (e === g.ELLIPSE) {
                        var c = Math.min(Math.abs(a), Math.abs(a - r.height)) / Math.min(Math.abs(o), Math.abs(o - r.width)),
                          u = y(r, o, a, !0);
                        l = c * (s = (0, i.distance)(u.x - o, (u.y - a) / c))
                      }
                      break;
                    case "farthest-side":
                      e === g.CIRCLE ? s = l = Math.max(Math.abs(o), Math.abs(o - r.width), Math.abs(a), Math.abs(a - r.height)) : e === g.ELLIPSE && (s = Math.max(Math.abs(o), Math.abs(o - r.width)), l = Math.max(Math.abs(a), Math.abs(a - r.height)));
                      break;
                    case "farthest-corner":
                      if (e === g.CIRCLE) s = l = Math.max((0, i.distance)(o, a), (0, i.distance)(o, a - r.height), (0, i.distance)(o - r.width, a), (0, i.distance)(o - r.width, a - r.height));
                      else if (e === g.ELLIPSE) {
                        var d = Math.max(Math.abs(a), Math.abs(a - r.height)) / Math.max(Math.abs(o), Math.abs(o - r.width)),
                          B = y(r, o, a, !1);
                        l = d * (s = (0, i.distance)(B.x - o, (B.y - a) / d))
                      }
                      break;
                    default:
                      s = n.x || 0, l = void 0 !== n.y ? n.y : s
                  }
                  return {
                    x: s,
                    y: l
                  }
                },
                I = e.transformWebkitRadialGradientArgs = function (A) {
                  var e = "",
                    t = "",
                    n = "",
                    r = "",
                    o = 0,
                    a = /^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i,
                    s = /^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i,
                    i = A[o].match(a);
                  i && o++;
                  var l = A[o].match(/^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i);
                  l && (e = l[1] || "", "contain" === (n = l[2] || "") ? n = "closest-side" : "cover" === n && (n = "farthest-corner"), o++);
                  var c = A[o].match(s);
                  c && o++;
                  var u = A[o].match(a);
                  u && o++;
                  var d = A[o].match(s);
                  d && o++;
                  var B = u || i;
                  B && B[1] && (r = B[1] + (/^\d+$/.test(B[1]) ? "px" : ""), B[2] && (r += " " + B[2] + (/^\d+$/.test(B[2]) ? "px" : "")));
                  var h = d || c;
                  return h && (t = h[0], h[1] || (t += "px")), !r || e || t || n || (t = r, r = ""), r && (r = "at " + r), [
                    [e, n, t, r].filter((function (A) {
                      return !!A
                    })).join(" ")
                  ].concat(A.slice(o))
                },
                N = function (A) {
                  return A.map((function (A) {
                    return A.match(h)
                  })).map((function (e, t) {
                    if (!e) return A[t];
                    switch (e[1]) {
                      case "from":
                        return e[4] + " 0%";
                      case "to":
                        return e[4] + " 100%";
                      case "color-stop":
                        return "%" === e[3] ? e[4] + " " + e[2] : e[4] + " " + 100 * parseFloat(e[2]) + "%"
                    }
                  }))
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              });
              var n = /([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;
              e.parseAngle = function (A) {
                var e = A.match(n);
                if (e) {
                  var t = parseFloat(e[1]);
                  switch (e[2].toLowerCase()) {
                    case "deg":
                      return Math.PI * t / 180;
                    case "grad":
                      return Math.PI / 200 * t;
                    case "rad":
                      return t;
                    case "turn":
                      return 2 * Math.PI * t
                  }
                }
                return null
              }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.cloneWindow = e.DocumentCloner = void 0;
              var n = function (A, e) {
                  if (Array.isArray(A)) return A;
                  if (Symbol.iterator in Object(A)) return function (A, e) {
                    var t = [],
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (var a, s = A[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !e || t.length !== e); n = !0);
                    } catch (A) {
                      r = !0, o = A
                    } finally {
                      try {
                        !n && s.return && s.return()
                      } finally {
                        if (r) throw o
                      }
                    }
                    return t
                  }(A, e);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                r = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                o = t(2),
                a = t(26),
                s = d(t(55)),
                i = t(4),
                l = t(5),
                c = d(t(15)),
                u = t(56);

              function d(A) {
                return A && A.__esModule ? A : {
                  default: A
                }
              }
              var B = e.DocumentCloner = function () {
                  function A(e, t, n, r, o) {
                    ! function (A, e) {
                      if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, A), this.referenceElement = e, this.scrolledElements = [], this.copyStyles = r, this.inlineImages = r, this.logger = n, this.options = t, this.renderer = o, this.resourceLoader = new s.default(t, n, window), this.pseudoContentData = {
                      counters: {},
                      quoteDepth: 0
                    }, this.documentElement = this.cloneNode(e.ownerDocument.documentElement)
                  }
                  return r(A, [{
                    key: "inlineAllImages",
                    value: function (A) {
                      var e = this;
                      if (this.inlineImages && A) {
                        var t = A.style;
                        Promise.all((0, l.parseBackgroundImage)(t.backgroundImage).map((function (A) {
                          return "url" === A.method ? e.resourceLoader.inlineImage(A.args[0]).then((function (A) {
                            return A && "string" == typeof A.src ? 'url("' + A.src + '")' : "none"
                          })).catch((function (A) {})) : Promise.resolve("" + A.prefix + A.method + "(" + A.args.join(",") + ")")
                        }))).then((function (A) {
                          A.length > 1 && (t.backgroundColor = ""), t.backgroundImage = A.join(",")
                        })), A instanceof HTMLImageElement && this.resourceLoader.inlineImage(A.src).then((function (e) {
                          if (e && A instanceof HTMLImageElement && A.parentNode) {
                            var t = A.parentNode,
                              n = (0, i.copyCSSStyles)(A.style, e.cloneNode(!1));
                            t.replaceChild(n, A)
                          }
                        })).catch((function (A) {}))
                      }
                    }
                  }, {
                    key: "inlineFonts",
                    value: function (A) {
                      var e = this;
                      return Promise.all(Array.from(A.styleSheets).map((function (e) {
                        return e.href ? fetch(e.href).then((function (A) {
                          return A.text()
                        })).then((function (A) {
                          return w(A, e.href)
                        })).catch((function (A) {
                          return []
                        })) : h(e, A)
                      }))).then((function (A) {
                        return A.reduce((function (A, e) {
                          return A.concat(e)
                        }), [])
                      })).then((function (A) {
                        return Promise.all(A.map((function (A) {
                          return fetch(A.formats[0].src).then((function (A) {
                            return A.blob()
                          })).then((function (A) {
                            return new Promise((function (e, t) {
                              var n = new FileReader;
                              n.onerror = t, n.onload = function () {
                                var A = n.result;
                                e(A)
                              }, n.readAsDataURL(A)
                            }))
                          })).then((function (e) {
                            return A.fontFace.setProperty("src", 'url("' + e + '")'), "@font-face {" + A.fontFace.cssText + " "
                          }))
                        })))
                      })).then((function (t) {
                        var n = A.createElement("style");
                        n.textContent = t.join("\n"), e.documentElement.appendChild(n)
                      }))
                    }
                  }, {
                    key: "createElementClone",
                    value: function (A) {
                      var e = this;
                      if (this.copyStyles && A instanceof HTMLCanvasElement) {
                        var t = A.ownerDocument.createElement("img");
                        try {
                          return t.src = A.toDataURL(), t
                        } catch (A) {}
                      }
                      if (A instanceof HTMLIFrameElement) {
                        var n = A.cloneNode(!1),
                          r = F();
                        n.setAttribute("data-html2canvas-internal-iframe-key", r);
                        var a = (0, o.parseBounds)(A, 0, 0),
                          s = a.width,
                          l = a.height;
                        return this.resourceLoader.cache[r] = H(A, this.options).then((function (A) {
                          return e.renderer(A, {
                            async: e.options.async,
                            allowTaint: e.options.allowTaint,
                            backgroundColor: "#ffffff",
                            canvas: null,
                            imageTimeout: e.options.imageTimeout,
                            logging: e.options.logging,
                            proxy: e.options.proxy,
                            removeContainer: e.options.removeContainer,
                            scale: e.options.scale,
                            foreignObjectRendering: e.options.foreignObjectRendering,
                            useCORS: e.options.useCORS,
                            target: new c.default,
                            width: s,
                            height: l,
                            x: 0,
                            y: 0,
                            windowWidth: A.ownerDocument.defaultView.innerWidth,
                            windowHeight: A.ownerDocument.defaultView.innerHeight,
                            scrollX: A.ownerDocument.defaultView.pageXOffset,
                            scrollY: A.ownerDocument.defaultView.pageYOffset
                          }, e.logger.child(r))
                        })).then((function (e) {
                          return new Promise((function (t, r) {
                            var o = document.createElement("img");
                            o.onload = function () {
                              return t(e)
                            }, o.onerror = r, o.src = e.toDataURL(), n.parentNode && n.parentNode.replaceChild((0, i.copyCSSStyles)(A.ownerDocument.defaultView.getComputedStyle(A), o), n)
                          }))
                        })), n
                      }
                      if (A instanceof HTMLStyleElement && A.sheet && A.sheet.cssRules) {
                        var u = [].slice.call(A.sheet.cssRules, 0).reduce((function (A, t) {
                            try {
                              return t && t.cssText ? A + t.cssText : A
                            } catch (n) {
                              return e.logger.log("Unable to access cssText property", t.name), A
                            }
                          }), ""),
                          d = A.cloneNode(!1);
                        return d.textContent = u, d
                      }
                      return A.cloneNode(!1)
                    }
                  }, {
                    key: "cloneNode",
                    value: function (A) {
                      var e = A.nodeType === Node.TEXT_NODE ? document.createTextNode(A.nodeValue) : this.createElementClone(A),
                        t = A.ownerDocument.defaultView,
                        n = A instanceof t.HTMLElement ? t.getComputedStyle(A) : null,
                        r = A instanceof t.HTMLElement ? t.getComputedStyle(A, ":before") : null,
                        o = A instanceof t.HTMLElement ? t.getComputedStyle(A, ":after") : null;
                      this.referenceElement === A && e instanceof t.HTMLElement && (this.clonedReferenceElement = e), e instanceof t.HTMLBodyElement && C(e);
                      for (var a = (0, u.parseCounterReset)(n, this.pseudoContentData), s = (0, u.resolvePseudoContent)(A, r, this.pseudoContentData), l = A.firstChild; l; l = l.nextSibling) l.nodeType === Node.ELEMENT_NODE && ("SCRIPT" === l.nodeName || l.hasAttribute("data-html2canvas-ignore") || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(l)) || this.copyStyles && "STYLE" === l.nodeName || e.appendChild(this.cloneNode(l));
                      var c = (0, u.resolvePseudoContent)(A, o, this.pseudoContentData);
                      if ((0, u.popCounters)(a, this.pseudoContentData), A instanceof t.HTMLElement && e instanceof t.HTMLElement) switch (r && this.inlineAllImages(g(A, e, r, s, p)), o && this.inlineAllImages(g(A, e, o, c, Q)), !n || !this.copyStyles || A instanceof HTMLIFrameElement || (0, i.copyCSSStyles)(n, e), this.inlineAllImages(e), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([e, A.scrollLeft, A.scrollTop]), A.nodeName) {
                        case "CANVAS":
                          this.copyStyles || f(A, e);
                          break;
                        case "TEXTAREA":
                        case "SELECT":
                          e.value = A.value
                      }
                      return e
                    }
                  }]), A
                }(),
                h = function (A, e) {
                  return (A.cssRules ? Array.from(A.cssRules) : []).filter((function (A) {
                    return A.type === CSSRule.FONT_FACE_RULE
                  })).map((function (A) {
                    for (var t = (0, l.parseBackgroundImage)(A.style.getPropertyValue("src")), n = [], r = 0; r < t.length; r++)
                      if ("url" === t[r].method && t[r + 1] && "format" === t[r + 1].method) {
                        var o = e.createElement("a");
                        o.href = t[r].args[0], e.body && e.body.appendChild(o);
                        var a = {
                          src: o.href,
                          format: t[r + 1].args[0]
                        };
                        n.push(a)
                      } return {
                      formats: n.filter((function (A) {
                        return /^woff/i.test(A.format)
                      })),
                      fontFace: A.style
                    }
                  })).filter((function (A) {
                    return A.formats.length
                  }))
                },
                w = function (A, e) {
                  var t = document.implementation.createHTMLDocument(""),
                    n = document.createElement("base");
                  n.href = e;
                  var r = document.createElement("style");
                  return r.textContent = A, t.head && t.head.appendChild(n), t.body && t.body.appendChild(r), r.sheet ? h(r.sheet, t) : []
                },
                f = function (A, e) {
                  try {
                    if (e) {
                      e.width = A.width, e.height = A.height;
                      var t = A.getContext("2d"),
                        n = e.getContext("2d");
                      t ? n.putImageData(t.getImageData(0, 0, A.width, A.height), 0, 0) : n.drawImage(A, 0, 0)
                    }
                  } catch (A) {}
                },
                g = function (A, e, t, n, r) {
                  if (t && t.content && "none" !== t.content && "-moz-alt-content" !== t.content && "none" !== t.display) {
                    var o = e.ownerDocument.createElement("html2canvaspseudoelement");
                    if ((0, i.copyCSSStyles)(t, o), n)
                      for (var a = n.length, s = 0; s < a; s++) {
                        var c = n[s];
                        switch (c.type) {
                          case u.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:
                            var d = e.ownerDocument.createElement("img");
                            d.src = (0, l.parseBackgroundImage)("url(" + c.value + ")")[0].args[0], d.style.opacity = "1", o.appendChild(d);
                            break;
                          case u.PSEUDO_CONTENT_ITEM_TYPE.TEXT:
                            o.appendChild(e.ownerDocument.createTextNode(c.value))
                        }
                      }
                    return o.className = m + " " + U, e.className += r === p ? " " + m : " " + U, r === p ? e.insertBefore(o, e.firstChild) : e.appendChild(o), o
                  }
                },
                p = ":before",
                Q = ":after",
                m = "___html2canvas___pseudoelement_before",
                U = "___html2canvas___pseudoelement_after",
                C = function (A) {
                  E(A, "." + m + p + '{\n    content: "" !important;\n    display: none !important;\n}\n         .' + U + Q + '{\n    content: "" !important;\n    display: none !important;\n}')
                },
                E = function (A, e) {
                  var t = A.ownerDocument.createElement("style");
                  t.innerHTML = e, A.appendChild(t)
                },
                v = function (A) {
                  var e = n(A, 3),
                    t = e[0],
                    r = e[1],
                    o = e[2];
                  t.scrollLeft = r, t.scrollTop = o
                },
                F = function () {
                  return Math.ceil(Date.now() + 1e7 * Math.random()).toString(16)
                },
                b = /^data:text\/(.+);(base64)?,(.*)$/i,
                H = function (A, e) {
                  try {
                    return Promise.resolve(A.contentWindow.document.documentElement)
                  } catch (t) {
                    return e.proxy ? (0, a.Proxy)(A.src, e).then((function (A) {
                      var e = A.match(b);
                      return e ? "base64" === e[2] ? window.atob(decodeURIComponent(e[3])) : decodeURIComponent(e[3]) : Promise.reject()
                    })).then((function (e) {
                      return y(A.ownerDocument, (0, o.parseBounds)(A, 0, 0)).then((function (A) {
                        var t = A.contentWindow.document;
                        t.open(), t.write(e);
                        var n = T(A).then((function () {
                          return t.documentElement
                        }));
                        return t.close(), n
                      }))
                    })) : Promise.reject()
                  }
                },
                y = function (A, e) {
                  var t = A.createElement("iframe");
                  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute("data-html2canvas-ignore", "true"), A.body ? (A.body.appendChild(t), Promise.resolve(t)) : Promise.reject("")
                },
                T = function (A) {
                  var e = A.contentWindow,
                    t = e.document;
                  return new Promise((function (n, r) {
                    e.onload = A.onload = t.onreadystatechange = function () {
                      var e = setInterval((function () {
                        t.body.childNodes.length > 0 && "complete" === t.readyState && (clearInterval(e), n(A))
                      }), 50)
                    }
                  }))
                },
                I = (e.cloneWindow = function (A, e, t, n, r, o) {
                  var a = new B(t, n, r, !1, o),
                    s = A.defaultView.pageXOffset,
                    i = A.defaultView.pageYOffset;
                  return y(A, e).then((function (r) {
                    var o = r.contentWindow,
                      l = o.document,
                      c = T(r).then((function () {
                        a.scrolledElements.forEach(v), o.scrollTo(e.left, e.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || o.scrollY === e.top && o.scrollX === e.left || (l.documentElement.style.top = -e.top + "px", l.documentElement.style.left = -e.left + "px", l.documentElement.style.position = "absolute");
                        var t = Promise.resolve([r, a.clonedReferenceElement, a.resourceLoader]),
                          s = n.onclone;
                        return a.clonedReferenceElement instanceof o.HTMLElement || a.clonedReferenceElement instanceof A.defaultView.HTMLElement || a.clonedReferenceElement instanceof HTMLElement ? "function" == typeof s ? Promise.resolve().then((function () {
                          return s(l)
                        })).then((function () {
                          return t
                        })) : t : Promise.reject("")
                      }));
                    return l.open(), l.write(I(document.doctype) + "<html></html>"),
                      function (A, e, t) {
                        !A.defaultView || e === A.defaultView.pageXOffset && t === A.defaultView.pageYOffset || A.defaultView.scrollTo(e, t)
                      }(t.ownerDocument, s, i), l.replaceChild(l.adoptNode(a.documentElement), l.documentElement), l.close(), c
                  }))
                }, function (A) {
                  var e = "";
                  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e
                })
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.ResourceStore = void 0;
              var n, r = function () {
                  function A(A, e) {
                    for (var t = 0; t < e.length; t++) {
                      var n = e[t];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(A, n.key, n)
                    }
                  }
                  return function (e, t, n) {
                    return t && A(e.prototype, t), n && A(e, n), e
                  }
                }(),
                o = (n = t(10)) && n.__esModule ? n : {
                  default: n
                },
                a = t(26);

              function s(A, e) {
                if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
              }
              var i = function () {
                function A(e, t, n) {
                  s(this, A), this.options = e, this._window = n, this.origin = this.getOrigin(n.location.href), this.cache = {}, this.logger = t, this._index = 0
                }
                return r(A, [{
                  key: "loadImage",
                  value: function (A) {
                    var e = this;
                    if (this.hasResourceInCache(A)) return A;
                    if (w(A)) return this.cache[A] = g(A, this.options.imageTimeout || 0), A;
                    if (!f(A) || o.default.SUPPORT_SVG_DRAWING) {
                      if (!0 === this.options.allowTaint || B(A) || this.isSameOrigin(A)) return this.addImage(A, A, !1);
                      if (!this.isSameOrigin(A)) {
                        if ("string" == typeof this.options.proxy) return this.cache[A] = (0, a.Proxy)(A, this.options).then((function (A) {
                          return g(A, e.options.imageTimeout || 0)
                        })), A;
                        if (!0 === this.options.useCORS && o.default.SUPPORT_CORS_IMAGES) return this.addImage(A, A, !0)
                      }
                    }
                  }
                }, {
                  key: "inlineImage",
                  value: function (A) {
                    var e = this;
                    return B(A) ? g(A, this.options.imageTimeout || 0) : this.hasResourceInCache(A) ? this.cache[A] : this.isSameOrigin(A) || "string" != typeof this.options.proxy ? this.xhrImage(A) : this.cache[A] = (0, a.Proxy)(A, this.options).then((function (A) {
                      return g(A, e.options.imageTimeout || 0)
                    }))
                  }
                }, {
                  key: "xhrImage",
                  value: function (A) {
                    var e = this;
                    return this.cache[A] = new Promise((function (t, n) {
                      var r = new XMLHttpRequest;
                      if (r.onreadystatechange = function () {
                          if (4 === r.readyState)
                            if (200 !== r.status) n("Failed to fetch image " + A.substring(0, 256) + " with status code " + r.status);
                            else {
                              var e = new FileReader;
                              e.addEventListener("load", (function () {
                                var A = e.result;
                                t(A)
                              }), !1), e.addEventListener("error", (function (A) {
                                return n(A)
                              }), !1), e.readAsDataURL(r.response)
                            }
                        }, r.responseType = "blob", e.options.imageTimeout) {
                        var o = e.options.imageTimeout;
                        r.timeout = o, r.ontimeout = function () {
                          return n("")
                        }
                      }
                      r.open("GET", A, !0), r.send()
                    })).then((function (A) {
                      return g(A, e.options.imageTimeout || 0)
                    })), this.cache[A]
                  }
                }, {
                  key: "loadCanvas",
                  value: function (A) {
                    var e = String(this._index++);
                    return this.cache[e] = Promise.resolve(A), e
                  }
                }, {
                  key: "hasResourceInCache",
                  value: function (A) {
                    return void 0 !== this.cache[A]
                  }
                }, {
                  key: "addImage",
                  value: function (A, e, t) {
                    var n = this,
                      r = function (A) {
                        return new Promise((function (r, o) {
                          var a = new Image;
                          if (a.onload = function () {
                              return r(a)
                            }, A && !t || (a.crossOrigin = "anonymous"), a.onerror = o, a.src = e, !0 === a.complete && setTimeout((function () {
                              r(a)
                            }), 500), n.options.imageTimeout) {
                            var s = n.options.imageTimeout;
                            setTimeout((function () {
                              return o("")
                            }), s)
                          }
                        }))
                      };
                    return this.cache[A] = h(e) && !f(e) ? o.default.SUPPORT_BASE64_DRAWING(e).then(r) : r(!0), A
                  }
                }, {
                  key: "isSameOrigin",
                  value: function (A) {
                    return this.getOrigin(A) === this.origin
                  }
                }, {
                  key: "getOrigin",
                  value: function (A) {
                    var e = this._link || (this._link = this._window.document.createElement("a"));
                    return e.href = A, e.href = e.href, e.protocol + e.hostname + e.port
                  }
                }, {
                  key: "ready",
                  value: function () {
                    var A = this,
                      e = Object.keys(this.cache),
                      t = e.map((function (e) {
                        return A.cache[e].catch((function (A) {
                          return null
                        }))
                      }));
                    return Promise.all(t).then((function (A) {
                      return new l(e, A)
                    }))
                  }
                }]), A
              }();
              e.default = i;
              var l = e.ResourceStore = function () {
                  function A(e, t) {
                    s(this, A), this._keys = e, this._resources = t
                  }
                  return r(A, [{
                    key: "get",
                    value: function (A) {
                      var e = this._keys.indexOf(A);
                      return -1 === e ? null : this._resources[e]
                    }
                  }]), A
                }(),
                c = /^data:image\/svg\+xml/i,
                u = /^data:image\/.*;base64,/i,
                d = /^data:image\/.*/i,
                B = function (A) {
                  return d.test(A)
                },
                h = function (A) {
                  return u.test(A)
                },
                w = function (A) {
                  return "blob" === A.substr(0, 4)
                },
                f = function (A) {
                  return "svg" === A.substr(-3).toLowerCase() || c.test(A)
                },
                g = function (A, e) {
                  return new Promise((function (t, n) {
                    var r = new Image;
                    r.onload = function () {
                      return t(r)
                    }, r.onerror = n, r.src = A, !0 === r.complete && setTimeout((function () {
                      t(r)
                    }), 500), e && setTimeout((function () {
                      return n("")
                    }), e)
                  }))
                }
            }, function (A, e, t) {
              Object.defineProperty(e, "__esModule", {
                value: !0
              }), e.parseContent = e.resolvePseudoContent = e.popCounters = e.parseCounterReset = e.TOKEN_TYPE = e.PSEUDO_CONTENT_ITEM_TYPE = void 0;
              var n = function (A, e) {
                  if (Array.isArray(A)) return A;
                  if (Symbol.iterator in Object(A)) return function (A, e) {
                    var t = [],
                      n = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (var a, s = A[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !e || t.length !== e); n = !0);
                    } catch (A) {
                      r = !0, o = A
                    } finally {
                      try {
                        !n && s.return && s.return()
                      } finally {
                        if (r) throw o
                      }
                    }
                    return t
                  }(A, e);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                r = t(14),
                o = t(8),
                a = e.PSEUDO_CONTENT_ITEM_TYPE = {
                  TEXT: 0,
                  IMAGE: 1
                },
                s = e.TOKEN_TYPE = {
                  STRING: 0,
                  ATTRIBUTE: 1,
                  URL: 2,
                  COUNTER: 3,
                  COUNTERS: 4,
                  OPENQUOTE: 5,
                  CLOSEQUOTE: 6
                },
                i = (e.parseCounterReset = function (A, e) {
                  if (!A || !A.counterReset || "none" === A.counterReset) return [];
                  for (var t = [], r = A.counterReset.split(/\s*,\s*/), o = r.length, a = 0; a < o; a++) {
                    var s = r[a].split(/\s+/),
                      i = n(s, 2),
                      l = i[0],
                      c = i[1];
                    t.push(l);
                    var u = e.counters[l];
                    u || (u = e.counters[l] = []), u.push(parseInt(c || 0, 10))
                  }
                  return t
                }, e.popCounters = function (A, e) {
                  for (var t = A.length, n = 0; n < t; n++) e.counters[A[n]].pop()
                }, e.resolvePseudoContent = function (A, e, t) {
                  if (!e || !e.content || "none" === e.content || "-moz-alt-content" === e.content || "none" === e.display) return null;
                  var r = i(e.content),
                    o = r.length,
                    l = [],
                    d = "",
                    B = e.counterIncrement;
                  if (B && "none" !== B) {
                    var h = B.split(/\s+/),
                      w = n(h, 2),
                      f = w[0],
                      g = w[1],
                      p = t.counters[f];
                    p && (p[p.length - 1] += void 0 === g ? 1 : parseInt(g, 10))
                  }
                  for (var Q = 0; Q < o; Q++) {
                    var m = r[Q];
                    switch (m.type) {
                      case s.STRING:
                        d += m.value || "";
                        break;
                      case s.ATTRIBUTE:
                        A instanceof HTMLElement && m.value && (d += A.getAttribute(m.value) || "");
                        break;
                      case s.COUNTER:
                        var U = t.counters[m.name || ""];
                        U && (d += u([U[U.length - 1]], "", m.format));
                        break;
                      case s.COUNTERS:
                        var C = t.counters[m.name || ""];
                        C && (d += u(C, m.glue, m.format));
                        break;
                      case s.OPENQUOTE:
                        d += c(e, !0, t.quoteDepth), t.quoteDepth++;
                        break;
                      case s.CLOSEQUOTE:
                        t.quoteDepth--, d += c(e, !1, t.quoteDepth);
                        break;
                      case s.URL:
                        d && (l.push({
                          type: a.TEXT,
                          value: d
                        }), d = ""), l.push({
                          type: a.IMAGE,
                          value: m.value || ""
                        })
                    }
                  }
                  return d && l.push({
                    type: a.TEXT,
                    value: d
                  }), l
                }, e.parseContent = function (A, e) {
                  if (e && e[A]) return e[A];
                  for (var t = [], n = A.length, r = !1, o = !1, a = !1, i = "", c = "", u = [], d = 0; d < n; d++) {
                    var B = A.charAt(d);
                    switch (B) {
                      case "'":
                      case '"':
                        o ? i += B : (r = !r, a || r || (t.push({
                          type: s.STRING,
                          value: i
                        }), i = ""));
                        break;
                      case "\\":
                        o ? (i += B, o = !1) : o = !0;
                        break;
                      case "(":
                        r ? i += B : (a = !0, c = i, i = "", u = []);
                        break;
                      case ")":
                        if (r) i += B;
                        else if (a) {
                          switch (i && u.push(i), c) {
                            case "attr":
                              u.length > 0 && t.push({
                                type: s.ATTRIBUTE,
                                value: u[0]
                              });
                              break;
                            case "counter":
                              if (u.length > 0) {
                                var h = {
                                  type: s.COUNTER,
                                  name: u[0]
                                };
                                u.length > 1 && (h.format = u[1]), t.push(h)
                              }
                              break;
                            case "counters":
                              if (u.length > 0) {
                                var w = {
                                  type: s.COUNTERS,
                                  name: u[0]
                                };
                                u.length > 1 && (w.glue = u[1]), u.length > 2 && (w.format = u[2]), t.push(w)
                              }
                              break;
                            case "url":
                              u.length > 0 && t.push({
                                type: s.URL,
                                value: u[0]
                              })
                          }
                          a = !1, i = ""
                        }
                        break;
                      case ",":
                        r ? i += B : a && (u.push(i), i = "");
                        break;
                      case " ":
                      case "\t":
                        r ? i += B : i && (l(t, i), i = "");
                        break;
                      default:
                        i += B
                    }
                    "\\" !== B && (o = !1)
                  }
                  return i && l(t, i), e && (e[A] = t), t
                }),
                l = function (A, e) {
                  switch (e) {
                    case "open-quote":
                      A.push({
                        type: s.OPENQUOTE
                      });
                      break;
                    case "close-quote":
                      A.push({
                        type: s.CLOSEQUOTE
                      })
                  }
                },
                c = function (A, e, t) {
                  var n = A.quotes ? A.quotes.split(/\s+/) : ["'\"'", "'\"'"],
                    r = 2 * t;
                  return r >= n.length && (r = n.length - 2), e || ++r, n[r].replace(/^["']|["']$/g, "")
                },
                u = function (A, e, t) {
                  for (var n = A.length, a = "", s = 0; s < n; s++) s > 0 && (a += e || ""), a += (0, r.createCounterText)(A[s], (0, o.parseListStyleType)(t || "decimal"), !1);
                  return a
                }
            }])
          }, "object" == a(e) && "object" == a(A) ? A.exports = o() : (n = [], void 0 === (r = "function" == typeof (t = o) ? t.apply(e, n) : t) || (A.exports = r))
        }).call(this, t(14)(A))
      }, function (A, e) {
        A.exports = function (A) {
          return A.webpackPolyfill || (A.deprecate = function () {}, A.paths = [], A.children || (A.children = []), Object.defineProperty(A, "loaded", {
            enumerable: !0,
            get: function () {
              return A.l
            }
          }), Object.defineProperty(A, "id", {
            enumerable: !0,
            get: function () {
              return A.i
            }
          }), A.webpackPolyfill = 1), A
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A, e, t, r) {
          [{
            name: "n",
            style: {
              top: "-" + t / 2 + "px",
              left: 0,
              width: "100%",
              height: t / 2 + "px"
            }
          }, {
            name: "s",
            style: {
              bottom: "-" + t / 2 + "px",
              left: 0,
              width: "100%",
              height: t / 2 + "px"
            }
          }, {
            name: "w",
            style: {
              top: 0,
              left: "-" + t / 2 + "px",
              width: t / 2 + "px",
              height: "100%"
            }
          }, {
            name: "e",
            style: {
              top: 0,
              right: "-" + t / 2 + "px",
              width: t / 2 + "px",
              height: "100%"
            }
          }].forEach((function (e) {
            A.appendChild(function (A, e, t) {
              var r = document.createElement("div");
              return r.id = A + "kssLine", r.className = "kssLine", (0, n.css)(r, {
                cursor: A + "-resize"
              }), (0, n.css)(r, e), r
            }(e.name, e.style))
          })), [{
            name: "nw",
            style: {
              top: "-" + e / 2 + "px",
              left: "-" + e / 2 + "px"
            }
          }, {
            name: "ne",
            style: {
              top: "-" + e / 2 + "px",
              right: "-" + e / 2 + "px"
            }
          }, {
            name: "se",
            style: {
              bottom: "-" + e / 2 + "px",
              right: "-" + e / 2 + "px"
            }
          }, {
            name: "e",
            style: {
              top: "calc(50% - " + e / 2 + "px)",
              right: "-" + e / 2 + "px"
            }
          }, {
            name: "w",
            style: {
              top: "calc(50% - " + e / 2 + "px)",
              left: "-" + e / 2 + "px"
            }
          }, {
            name: "n",
            style: {
              top: "-" + e / 2 + "px",
              left: "calc(50% - " + e / 2 + "px)"
            }
          }, {
            name: "s",
            style: {
              bottom: "-" + e / 2 + "px",
              left: "calc(50% - " + e / 2 + "px)"
            }
          }, {
            name: "sw",
            style: {
              bottom: "-" + e / 2 + "px",
              left: "-" + e / 2 + "px"
            }
          }].forEach((function (t) {
            A.appendChild(function (A, e, t) {
              var r = document.createElement("div");
              return r.id = A + "kssDot", r.className = "kssDot", (0, n.css)(r, {
                width: t + "px",
                height: t + "px",
                cursor: A + "-resize"
              }), (0, n.css)(r, e), r
            }(t.name, t.style, e, t.id))
          })), l("swkssDot", A, r), l("sekssDot", A, r), l("nwkssDot", A, r), l("nekssDot", A, r), c("horizontal", "ekssDot", A, r), c("horizontal", "wkssDot", A, r), c("horizontal", "ekssLine", A, r), c("horizontal", "wkssLine", A, r), c("vertical", "nkssDot", A, r), c("vertical", "skssDot", A, r), c("vertical", "nkssLine", A, r), c("vertical", "skssLine", A, r)
        };
        var n = t(0),
          r = i(t(4)),
          o = i(t(8)),
          a = i(t(9)),
          s = i(t(6));

        function i(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }

        function l(A, e, t) {
          document.getElementById(A).addEventListener("mousedown", (function (A) {
            if (!t.isEdit) {
              (0, o.default)(t), document.addEventListener("mousemove", c), document.addEventListener("touchmove", c);
              var i = u(t.startX, t.width, A.clientX),
                l = u(t.startY, t.height, A.clientY);
              t.startX = 2 * (t.startX + t.width / 2) - i, t.startY = 2 * (t.startY + t.height / 2) - l, A.clientX, A.clientY, document.addEventListener("mouseup", d), document.addEventListener("touchend", d)
            }

            function c(A) {
              var r;
              r = A.changedTouches ? A.changedTouches[0] : A;
              var o = (0, a.default)(r),
                i = o[0],
                l = o[1],
                c = Math.abs(l - t.startY),
                u = Math.abs(i - t.startX),
                d = Math.min(t.startY, l),
                B = Math.min(t.startX, i),
                h = {
                  height: c + "px",
                  width: u + "px",
                  top: d + "px",
                  left: B + "px"
                };
              (0, n.css)(e, h), (0, s.default)(t, u, c, d, B, t.toolbar)
            }

            function d(A) {
              var e;
              e = A.changedTouches ? A.changedTouches[0] : A;
              var n = (0, a.default)(e),
                o = n[0],
                s = n[1];
              t.width = Math.abs(o - t.startX), t.height = Math.abs(s - t.startY), t.startX = Math.min(o, t.startX), t.startY = Math.min(t.startY, s), document.removeEventListener("mousemove", c), document.removeEventListener("touchmove", c), document.removeEventListener("mouseup", d), document.removeEventListener("touchend", d), (0, r.default)(t)
            }
          })), document.getElementById(A).addEventListener("touchstart", (function (A) {
            var i;
            if (i = A.changedTouches ? A.changedTouches[0] : A, !t.isEdit) {
              (0, o.default)(t), document.addEventListener("mousemove", d), document.addEventListener("touchmove", d);
              var l = u(t.startX, t.width, i.clientX),
                c = u(t.startY, t.height, i.clientY);
              t.startX = 2 * (t.startX + t.width / 2) - l, t.startY = 2 * (t.startY + t.height / 2) - c, i.clientX, i.clientY, document.addEventListener("mouseup", B), document.addEventListener("touchend", B)
            }

            function d(A) {
              var r;
              r = A.changedTouches ? A.changedTouches[0] : A;
              var o = (0, a.default)(r),
                i = o[0],
                l = o[1],
                c = Math.abs(l - t.startY),
                u = Math.abs(i - t.startX),
                d = Math.min(t.startY, l),
                B = Math.min(t.startX, i),
                h = {
                  height: c + "px",
                  width: u + "px",
                  top: d + "px",
                  left: B + "px"
                };
              (0, n.css)(e, h), (0, s.default)(t, u, c, d, B, t.toolbar)
            }

            function B(A) {
              var e;
              e = A.changedTouches ? A.changedTouches[0] : A;
              var n = (0, a.default)(e),
                o = n[0],
                s = n[1];
              t.width = Math.abs(o - t.startX), t.height = Math.abs(s - t.startY), t.startX = Math.min(o, t.startX), t.startY = Math.min(t.startY, s), document.removeEventListener("mousemove", d), document.removeEventListener("touchmove", d), document.removeEventListener("mouseup", B), document.removeEventListener("touchend", B), (0, r.default)(t)
            }
          }))
        }

        function c(A, e, t, i) {
          document.getElementById(e).addEventListener("mousedown", (function (e) {
            if (!i.isEdit) {
              (0, o.default)(i), document.addEventListener("mousemove", d), document.addEventListener("touchmove", d);
              var l = u(i.startX, i.width, e.clientX),
                c = u(i.startY, i.height, e.clientY);
              "horizontal" === A ? i.startX = 2 * (i.startX + i.width / 2) - l : "vertical" === A && (i.startY = 2 * (i.startY + i.height / 2) - c), e.clientX, e.clientY, document.addEventListener("mouseup", B), document.addEventListener("touchend", B)
            }

            function d(e) {
              var r;
              r = e.changedTouches ? e.changedTouches[0] : e;
              var o = (0, a.default)(r),
                l = o[0],
                c = o[1],
                u = Math.abs(c - i.startY),
                d = Math.abs(l - i.startX),
                B = Math.min(i.startY, c),
                h = Math.min(i.startX, l),
                w = void 0;
              "horizontal" === A ? w = {
                width: d + "px",
                left: h + "px"
              } : "vertical" === A && (w = {
                height: u + "px",
                top: B + "px"
              }), (0, n.css)(t, w), (0, s.default)(i, d, u, B, h, i.toolbar), "horizontal" === A ? (0, s.default)(i, d, i.height, i.startY, h, i.toolbar) : "vertical" === A && (0, s.default)(i, i.width, u, B, i.left, i.toolbar)
            }

            function B(e) {
              var t;
              t = e.changedTouches ? e.changedTouches[0] : e;
              var n = (0, a.default)(t),
                o = n[0],
                s = n[1];
              "horizontal" === A ? (i.width = Math.abs(o - i.startX), i.startX = Math.min(o, i.startX)) : "vertical" === A && (i.height = Math.abs(s - i.startY), i.startY = Math.min(i.startY, s)), document.removeEventListener("mousemove", d), document.removeEventListener("touchmove", d), document.removeEventListener("mouseup", B), document.removeEventListener("touchend", B), (0, r.default)(i)
            }
          })), document.getElementById(e).addEventListener("touchstart", (function (A) {
            var e;
            if (e = A.changedTouches ? A.changedTouches[0] : A, !i.isEdit) {
              (0, o.default)(i), document.addEventListener("mousemove", d), document.addEventListener("touchmove", d);
              var l = u(i.startX, i.width, e.clientX),
                c = u(i.startY, i.height, e.clientY);
              i.startX = 2 * (i.startX + i.width / 2) - l, i.startY = 2 * (i.startY + i.height / 2) - c, e.clientX, e.clientY, document.addEventListener("mouseup", B), document.addEventListener("touchend", B)
            }

            function d(A) {
              var e;
              e = A.changedTouches ? A.changedTouches[0] : A;
              var r = (0, a.default)(e),
                o = r[0],
                l = r[1],
                c = Math.abs(l - i.startY),
                u = Math.abs(o - i.startX),
                d = Math.min(i.startY, l),
                B = Math.min(i.startX, o),
                h = {
                  height: c + "px",
                  width: u + "px",
                  top: d + "px",
                  left: B + "px"
                };
              (0, n.css)(t, h), (0, s.default)(i, u, c, d, B, i.toolbar)
            }

            function B(A) {
              var e;
              e = A.changedTouches ? A.changedTouches[0] : A;
              var t = (0, a.default)(e),
                n = t[0],
                o = t[1];
              i.width = Math.abs(n - i.startX), i.height = Math.abs(o - i.startY), i.startX = Math.min(n, i.startX), i.startY = Math.min(i.startY, o), document.removeEventListener("mousemove", d), document.removeEventListener("touchmove", d), document.removeEventListener("mouseup", B), document.removeEventListener("touchend", B), (0, r.default)(i)
            }
          }))
        }

        function u(A, e, t) {
          return Math.abs(t - A) >= Math.abs(t - A - e) ? A + e : A
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("div");
          e.id = "kssToolbar", "[object Object]" !== (0, n.typeChecking)(A.toolShow) && (A.toolShow = {});
          var t = 0;
          return f.forEach((function (n) {
            !1 !== A.toolShow[n.show] && (e.appendChild(n.component(A)), t += n.width)
          })), t += 10, A.toolbarWidth = t, (0, n.css)(e, {
            top: A.height + A.toolbarMarginTop + "px",
            width: t + "px",
            height: A.toolbarHeight + "px"
          }), (0, h.default)(A, A.width, A.height, A.startY, A.startX, e), e.appendChild((0, B.default)(A)), A.kssScreenShotWrapper.appendChild(e), e
        };
        var n = t(0),
          r = w(t(17)),
          o = w(t(20)),
          a = w(t(22)),
          s = w(t(25)),
          i = w(t(27)),
          l = w(t(29)),
          c = w(t(31)),
          u = w(t(33)),
          d = w(t(35)),
          B = w(t(37)),
          h = w(t(6));

        function w(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
        var f = [{
          component: r.default,
          show: "complete",
          width: 40
        }, {
          component: o.default,
          show: "quit",
          width: 30
        }, {
          component: s.default,
          show: "back",
          width: 30
        }, {
          component: a.default,
          show: "arrow",
          width: 30
        }, {
          component: i.default,
          show: "drawLine",
          width: 30
        }, {
          component: l.default,
          show: "rect",
          width: 30
        }, {
          component: c.default,
          show: "ellipse",
          width: 30
        }, {
          component: d.default,
          show: "text",
          width: 30
        }, {
          component: u.default,
          show: "color",
          width: 30
        }]
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          return e.id = "kssCompleteBT", e.className = "kssToolbarItemBT", e.innerHTML = "完成", e.title = "完成截图", (0, n.css)(e, {
            width: "40px",
            "line-height": "28px"
          }), e.addEventListener("click", (async function () {
            A.isEdit = !0;
            var e = A.snapshootList[A.snapshootList.length - 1];
            (0, r.default)(A, e), !0 === A.needDownload && await (0, o.default)(A), "[object Function]" === (0, n.typeChecking)(A.endCB) && A.endCB(e), (0, a.default)(A)
          })), e
        };
        var n = t(0),
          r = (s(t(4)), s(t(18))),
          o = s(t(19)),
          a = s(t(7));

        function s(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A, e) {
          var t = document.createElement("span");
          (0, n.css)(t, {
            opacity: "0"
          });
          var r = document.createElement("img"),
            o = void 0;
          o = "[object Function]" === (0, n.typeChecking)(A.copyPath) ? A.copyPath(e) : null, null !== o && (r.src = o, t.appendChild(r), document.body.appendChild(t), setTimeout((function () {
            (0, n.css)(r, {
              width: r.width / A.scale + "px",
              height: r.height / A.scale + "px"
            });
            var e = window.getSelection(),
              o = document.createRange();
            o.selectNodeContents(t), e.removeAllRanges(), e.addRange(o), document.execCommand("Copy"), (0, n.remove)(t)
          }), 0))
        };
        var n = t(0)
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          return new Promise((function (e) {
            var t = A.snapshootList[A.snapshootList.length - 1],
              n = document.createElement("a");
            if ("download" in n) {
              n.href = t, n.download = "kss" + (new Date).getTime() + ".png";
              var r = document.createEvent("MouseEvents");
              r.initEvent("click", !1, !1), n.dispatchEvent(r)
            } else {
              var o = t.replace("image/png", "image/octet-stream");
              window.location.href = o
            }
            e()
          }))
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssQuitBT", e.className = "kssToolbarItemBT", e.title = "退出截图";
          var t = document.createElement("img");
          return t.className = "kssToolbarItemImg", t.src = n.default, A.quitBT = t, e.appendChild(t), e.addEventListener("click", (function () {
            A.isEdit = !0, (0, r.default)(A), A.cancelCB()
          })), e
        }, t(0), o(t(4));
        var n = o(t(21)),
          r = o(t(7));

        function o(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
      }, function (A, e) {
        A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkElEQVRYR+2Wv07CcBDHf1eaaNq+haMv4Ao9dk18BZhAF1iITsQ4QFxgEZ7B6EyO2Vdw8iloownhTKsltemfX69DGfitvbvvp9+73x9QNS+oWV8dAQ7Tge9m83xrmk/AvLCIXqrMie+6NzvDuDCZ706JPpO1Uh3wEF8VwGUQDMx9i2gugfARewwwC3OZ32yiKz2AdnuklHqIgiUQ/8QD/d1u5KzXj1oAQZCHuFAAHQlEUlwxL22ibpqLuUMogdggDgBgshfLEQ9bXNTbJAQzDx2iaVpeivjcJurnaRQC/LVjpgB6UaE0CIm4lgORqIeYCSEVLwWQ5URYJNZzZp46RMOi1u6HWzcwy4l4flnx0g7kQUjExQAbxAkADKr+vQggOYxVIbS2Yab1zPfhN4Bx7OAp3PtxaG2AWrehzmkoPQsKHdARjyyVQBzmZcRKgY/4XNt17NX9IIk/yRRz1yZalj2yg3jxk+yr1TrbNhpjg/ndIvp90wmX77rXbBgdE+D2ZLX6SJYp3AVCXe20I8DRgR/EvCcwIlPjxgAAAABJRU5ErkJggg=="
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssArrowBT", e.className = "kssToolbarItemBT", e.title = "箭头工具";
          var t = document.createElement("img");
          return t.className = "kssToolbarItemImg", t.src = a.default, A.arrowBT = e, e.appendChild(t), e.addEventListener("click", (function () {
            function t(e) {
              var t;
              if (2 !== (t = e.changedTouches ? e.changedTouches[0] : e).button) {
                var a = t.clientX,
                  s = t.clientY;
                document.addEventListener("mousemove", l), document.addEventListener("touchmove", l), document.addEventListener("mouseup", c), document.addEventListener("touchend", c), A.toolmousemove = l, A.toolmouseup = c;
                var i = {
                  distance: null,
                  twoSide: null,
                  bottomSide: null,
                  crossWidth: null
                }
              }

              function l(e) {
                var t;
                t = e.changedTouches ? e.changedTouches[0] : e, (0, r.default)(A);
                var o = t.clientX,
                  l = t.clientY;
                o < A.startX ? o = A.startX : o > A.startX + A.width && (o = A.startX + A.width), l < A.startY ? l = A.startY : l > A.startY + A.height && (l = A.startY + A.height), (0, n.default)({
                  x: a - A.startX,
                  y: s - A.startY
                }, {
                  x: o - A.startX,
                  y: l - A.startY
                }, i, A)
              }

              function c(e) {
                var t, n = (t = e.changedTouches ? e.changedTouches[0] : e).clientX,
                  r = t.clientY;
                if (a === n && s === r) return document.removeEventListener("mousemove", l), document.removeEventListener("touchmove", l), document.removeEventListener("mouseup", c), void document.removeEventListener("touchend", c);
                document.removeEventListener("mousemove", l), document.removeEventListener("touchmove", l), document.removeEventListener("mouseup", c), document.removeEventListener("touchend", c), (0, o.default)(A)
              }
            }
            A.isEdit = !0, "arrow" !== A.currentToolType && (A.currentToolType = "arrow", (0, s.default)(e), (0, i.default)(A, "canvasLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup)), A.rectangleCanvas.addEventListener("mousedown", t), A.rectangleCanvas.addEventListener("touchstart", t), A.toolmousedown = t)
          })), e
        }, t(0);
        var n = l(t(23)),
          r = l(t(5)),
          o = l(t(3)),
          a = l(t(24)),
          s = l(t(1)),
          i = l(t(2));

        function l(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A, e, t, r) {
          var o = A.x * r.scale,
            a = A.y * r.scale,
            s = e.x * r.scale,
            i = e.y * r.scale;
          (0, n.computed)(t, "distance", ["twoSide", "bottomSide", "crossWidth"], [function (A, e, t) {
            A[t] = e / 2 * 1.1 <= 20 ? e / 2 * 1.1 : 20
          }, function (A, e, t) {
            A[t] = e / 2 * 1.1 <= 20 ? e / 2 * 1.1 * .8 : 16
          }, function (A, e, t) {
            A[t] = e / 2 * 1.1 <= 20 ? e / 2 * 1.1 * .4 : 8
          }]);
          var l = Math.sqrt(Math.pow(o - s, 2) + Math.pow(a - i, 2));
          t.distance = l;
          var c = Math.sqrt(Math.pow(t.twoSide, 2) - Math.pow(t.bottomSide / 2, 2)),
            u = Math.sqrt(Math.pow(c, 2) + Math.pow(t.crossWidth / 2, 2)),
            d = 180 * Math.atan(t.bottomSide / 2 / c) / Math.PI,
            B = 180 * Math.atan(t.crossWidth / 2 / c) / Math.PI,
            h = void 0,
            w = void 0,
            f = void 0,
            g = void 0,
            p = void 0,
            Q = void 0,
            m = void 0,
            U = void 0;
          if (o > s && a > i || o < s && a < i) {
            var C = 180 * Math.atan(Math.abs(o - s) / Math.abs(a - i)) / Math.PI,
              E = Math.cos(2 * (B + C) * Math.PI / 360) * u,
              v = Math.sin(2 * (B + C) * Math.PI / 360) * u,
              F = 1;
            o < s && a < i && (F = -1), h = s + v * F, w = i + E * F;
            var b = Math.cos(2 * (d + C) * Math.PI / 360) * t.twoSide,
              H = Math.sin(2 * (d + C) * Math.PI / 360) * t.twoSide;
            f = s + H * F, g = i + b * F;
            var y = Math.cos(2 * C * Math.PI / 360) * c,
              T = Math.sin(2 * C * Math.PI / 360) * c,
              I = s + T * F,
              N = i + y * F;
            m = 2 * I - h, U = 2 * N - w, p = 2 * I - f, Q = 2 * N - g
          } else if (o < s && a > i || o > s && a < i) {
            var x = 180 * Math.atan(Math.abs(a - i) / Math.abs(o - s)) / Math.PI,
              S = Math.cos(2 * (B + x) * Math.PI / 360) * u,
              L = Math.sin(2 * (B + x) * Math.PI / 360) * u,
              k = 1;
            o < s && a > i && (k = -1), h = s + S * k, w = i - L * k;
            var K = Math.cos(2 * (d + x) * Math.PI / 360) * t.twoSide,
              M = Math.sin(2 * (d + x) * Math.PI / 360) * t.twoSide;
            f = s + K * k, g = i - M * k;
            var _ = Math.cos(2 * x * Math.PI / 360) * c,
              D = Math.sin(2 * x * Math.PI / 360) * c,
              O = s + _ * k,
              R = i - D * k;
            m = 2 * O - h, U = 2 * R - w, p = 2 * O - f, Q = 2 * R - g
          } else if (o === s) {
            var P = 1;
            a < i && (P = -1);
            var z = s,
              X = i + c * P;
            h = z + t.crossWidth / 2 * P, w = X, f = z + t.bottomSide / 2 * P, g = X, m = z - t.crossWidth / 2 * P, U = X, p = z - t.bottomSide / 2 * P, Q = X
          } else if (a === i) {
            var V = 1;
            o < s && (V = -1);
            var Y = s + c * V,
              W = i;
            h = Y, w = W + t.crossWidth / 2 * V, f = Y, g = W + t.bottomSide / 2 * V, m = Y, U = W - t.crossWidth / 2 * V, p = Y, Q = W - t.bottomSide / 2 * V
          }
          var G = r.rectangleCanvas.getContext("2d");
          G.beginPath(), G.lineWidth = 1, G.moveTo(o, a), G.lineTo(h, w), G.lineTo(f, g), G.lineTo(s, i), G.lineTo(p, Q), G.lineTo(m, U), G.lineTo(o, a), G.fillStyle = r.toolbarColor, G.fill(), G.closePath()
        };
        var n = t(0)
      }, function (A, e) {
        A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABvElEQVRIS+XWvUrDUBQH8P+51qZ+0C6u4uwoRQenCsXG78kX8AHEVsFRxw7aFDdBH0A3QUojIk6KID6BoELB3YKStM2RoNXaJjVpbxUxU4Z78jvn3nPvDeGXHvolF38HntrhMMrlESZvSTNXCnoqdFs/s74qTmSMBSIcAFB8LREjl08pM7UxvmBVM44AzPtC3wczKKongzfVWF9wQjPSBKy3AgNiIp/sPm8JXjzkrmLBWAZRxAlnRpQIs86JtQE3q1TNmqNgPgUQ/jHYRpn5jIB+9+QkV+yCGgBfAhT7TEQi7I4KFbBsdEM63Ay1u1fVjE3p8HeoXaV02AsqHfaKSoUnt0vjJCy9bssYgFBrT6RqM0mZahsVZJ2C0FOzT11Re8ykZi4J8L79zkAJCA7pSXr0fGQ6oowXkJh2qrT6Yft4fSoYWYAGWfDeyUro2PPt5IZaLOInq90XrV0Wb1Gut1MnUVe406gj/BNoAxzb4gFFmPdE6PtYP8aLjDWt74cva5zImGNEfNVptKHiuV3uNZ/NawKGwShaLNR2u9et8xu6Op7mSEApj4hK4C63Rg/tbJlmsb5+9mQm8f/gVxWf/x9Ysb+OAAAAAElFTkSuQmCC"
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssbackeBT", e.className = "kssToolbarItemBT", e.title = "后退";
          var t = document.createElement("img");

          function s() {
            A.isEdit = !1, A.currentToolType = null, A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), A.rectangleCanvas.removeEventListener("touchstart", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("touchmove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup), document.removeEventListener("touchend", A.toolmouseup), (0, o.default)(null)
          }
          return t.className = "kssToolbarItemImg", t.src = r.default, A.backBT = e, e.appendChild(t), e.addEventListener("click", (function () {
            A.snapshootList.length > 1 ? (2 === A.snapshootList.length && ((0, a.default)(A, "canvasLayer"), s()), A.snapshootList.pop()) : 1 === A.snapshootList.length && ((0, a.default)(A, "canvasLayer"), s()), A.currentImgDom.src = A.snapshootList[A.snapshootList.length - 1], setTimeout((function () {
              (0, n.default)(A)
            }), 0)
          })), e
        }, t(0);
        var n = s(t(5)),
          r = s(t(26)),
          o = s(t(1)),
          a = s(t(2));

        function s(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
      }, function (A, e) {
        A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEfElEQVRIS8WWa4hUZRjH//8zXtKFFArybs05wUISUULqB9E9R7vQBT8YIblSGVgWVu6MVpSTZLt7xkzQbhSpGXSTEhGzPGeWgqhPiYZCcs7squgSUX0xNzfn/GNGZ52ZHecSgufT8M7zPL/neZ/L+xBX6eNV4qJxsMAO35plEAsFTQEwieB5Sf0g+6Tcvo1O7+FGA6kLfmafNfqa0UoAXEXg+pqGhayMaEN6fnYbCNWSrQlOeuZ8EdsITocUgfQjRtuRM07njRrUeADTQMyQMI/kzRdhhxhFS7sXZH+5HPyy4KRnrgbggjQA7DmvKLHJyR6rFUWyJz5TkbGVwJ2CBiA8mnbCz6rpVAUnPOtVEq9I+JsGlrhtwZ5Gc5eXS3hmkkBn3ulIWLrRCT6u1B8G7vCsRwxiJ6SzNKI53W29h5qBFmUT/k0LgdheSPkbuy/thPtL7ZSB1xyIj4tonCBxLZRb7Dq9uyqhiz9H7Mbr4g+l7ewn9RxKZMx2ijsknWyZGFqpWzBY1CkDJ33zNYAvSdibdoL7q0PNLwguGqHchNed3t/qwZOe9SOIWUD0nGtnNw8HC0z61u+CxsdiaO2aHwalRi9EegGaPx8c+e+kzXOP99cFZ+I2ZHiAfnXtsHUYeI1vzhH4g4Dv0nYwrxa0GXBeNumZp0FOFGCl7SDMnw1dddK31gFIUVjd7QSbiuDKSEscOiOoD2IfoKMRuOMNJzha7QaSvrkF4NNA9KRrZ98tB3vmdpDLJN1TrMAa0GH2BQnCzhH45/lO59QfpQJJz3oKxFtQ1Ok62RfLwAnPPEDSIXO3FVso4ZvvE1xeL4+l/ws4FdPg3C7nRLZ43uGbiwzwSwDbXDt4rCpYwB1pO/i5kBs/vgIw3mkGXJAVDrpOcPsQOGM9aAi7BX2QtsMnKsE7SLZDWuQ64e6iUtKPPwsYbzYLF3J3pe3eb0sDkLA+7QT5WiorrhSAdQK60nbwQlmO/ge8FJLwzc0EV4nR4+m27Idl4GI7QTrhOuH0yggrIx877mxLaubps6kejDhjTJ+K3MhbGWkFybsv6Gqna4ft+V8J3+wnOAG5c5PdhScLL9ulyVUYIOZfIMdFkL3RDjO14EVwpUyHb7ZR/ArQ12knfDh5aYAcce1wRlG+fGRmzJchrofwk+sEs6vlNeFbayltGBjk2C33Bueq9m2PNSWWGxjotE/9mchYRwm0QljpOsHbVcH5bWPMKB0DOa1ykJQC1nrT4qXtcrnCS2TiWyljZd1HIm+gw7NmG8T3gmKGsKTbCT9ttqILeR1605Wr+ywOtVDGTEB0C9OIWl6sxEYcyD+tMoyPADyQl294ERiCe+ZqAd0kYxB2iVhbHPDVHOj45oYWxlqWg0wRHC/hHKBlTa0+JfCyZU/gYRA9FAIZUR8jjhIxFcJMEIsJjrnYSkcEthcnYDVHm1hvsbLQizU+QccBdbe0Zd9LEVEt2brgIeWLCz0RLQA5lcBkgech9dNgn5HD/q4FwcFG6qB8gDSqcYXkGo/4CgGLZv4D60EPPWzjB68AAAAASUVORK5CYII="
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssDrawLineBT", e.className = "kssToolbarItemBT", e.title = "画刷工具";
          var t = document.createElement("img");
          return t.className = "kssToolbarItemImg", t.src = o.default, A.drawLineBT = e, e.appendChild(t), e.addEventListener("click", (function () {
            A.isEdit = !0;
            var t = document.getElementById("kssSetLineWidth");

            function o(e) {
              var t;
              if (2 !== (t = e.changedTouches ? e.changedTouches[0] : e).button) {
                var n = A.rectangleCanvas.getContext("2d");
                n.beginPath(), n.moveTo((t.clientX - A.startX) * A.scale, (t.clientY - A.startY) * A.scale), n.strokeStyle = A.toolbarColor, document.addEventListener("mousemove", o), document.addEventListener("touchmove", o), document.addEventListener("mouseup", a), document.addEventListener("touchend", a), A.toolmousemove = o, A.toolmouseup = a
              }

              function o(e) {
                var t;
                t = e.changedTouches ? e.changedTouches[0] : e, n.lineWidth = A.toolbarLineWidth, n.lineTo((t.clientX - A.startX) * A.scale, (t.clientY - A.startY) * A.scale), n.stroke()
              }

              function a(e) {
                e.changedTouches && e.changedTouches[0], n.closePath(), document.removeEventListener("mousemove", o), document.removeEventListener("touchmove", o), document.removeEventListener("mouseup", a), document.removeEventListener("touchend", a), (0, r.default)(A)
              }
            }
            document.documentElement.clientHeight - A.startY - A.height - A.toolbarMarginTop - A.toolbarHeight < 0 ? (0, n.css)(t, {
              top: "30px"
            }) : (0, n.css)(t, {
              top: "-40px"
            }), t.style.display = "block", t.focus(), "drawLine" !== A.currentToolType && (A.currentToolType = "drawLine", (0, a.default)(e), (0, s.default)(A, "canvasLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), A.rectangleCanvas.removeEventListener("touchstart", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("touchmove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup), document.removeEventListener("touchend", A.toolmouseup)), A.rectangleCanvas.addEventListener("mousedown", o), A.rectangleCanvas.addEventListener("touchstart", o), A.toolmousedown = o)
          })), e
        };
        var n = t(0),
          r = i(t(3)),
          o = i(t(28)),
          a = i(t(1)),
          s = i(t(2));

        function i(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
      }, function (A, e) {
        A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACM0lEQVRIS+3UO2hTYRgG4PftyR+Q9CqCEkgGJc2pRWgRBCkIVtChIDrYQR1EHFx0cnJROqh066IEFHRz00UXg9R08AJaXDRBRcwpQXBw0dj85/JJYkOjPWlzOTFLM2XI+Z687/efn+jSh11ysQn/t+YDr/rDVvS7veohwIMAchA9aVoo/JsoUHgFfQZwrAqJ4PqIpS93DPZDK5gn58wl+05H4C9xDP2CelqbdAV6nMzrowTcwOEyWhS1QHK0driIPDEte4qA7Xdi29pxXRR4ZOb18Xpo+Y+0DG+AHiPgrPdutgTnotjmGWp+bb14YFp6eiO0pcR/DlL4OYDk3zutoCf8DlIgO/48iMFSn8qA3LP6rsp907JPN4o2lfjrdkS+h9XtkItZV9sfsUWlQe4TqaAnCUgz921DOy6nXO5XaYJ7ReQnKUcinvOmSHV22LJvNouum7hSaa+6CmJCgDGSodVEUjIc7E8U7MVmUtb+1jexAKFsTC0S2CGQGxC8JnumQFwqPywiLwZc+1C0gGKg8PuYOgMiFQLHE3n9rjo8G1Ovyt/dZXty9Bt+tIr6Vv1pCAO6L/wWwL2RvL5SOzwbV2l6kkkuOTPtoGvgbDw0AeEtkBEjr3cngFKlWoC5uLoAcI7iHUhazkLAcHgaIncBvCSYgrgloTEO4hSAnRBJmZZ9vl3Ut+psFEkY6qKAhwnZBUJDON8D79qw5WSCQJu6QIICq3MaukCCRjcTd6LRujO7tuPfh7/TH020z8AAAAAASUVORK5CYII="
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssRectBT", e.className = "kssToolbarItemBT", e.title = "方形工具";
          var t = document.createElement("img");
          return t.className = "kssToolbarItemImg", t.src = o.default, A.rectBT = e, e.appendChild(t), e.addEventListener("click", (function () {
            function t(e) {
              var t;
              if (2 !== (t = e.changedTouches ? e.changedTouches[0] : e).button) {
                var o = t.clientX - A.startX,
                  a = t.clientY - A.startY;
                document.addEventListener("mousemove", s), document.addEventListener("touchmove", s), document.addEventListener("mouseup", i), document.addEventListener("touchend", i), A.toolmousemove = s, A.toolmouseup = i
              }

              function s(e) {
                var t;
                t = e.changedTouches ? e.changedTouches[0] : e, (0, n.default)(A);
                var r = A.rectangleCanvas.getContext("2d"),
                  s = t.clientX,
                  i = t.clientY;
                s < A.startX ? s = A.startX : s > A.startX + A.width && (s = A.startX + A.width), s -= A.startX, i < A.startY ? i = A.startY : i > A.startY + A.height && (i = A.startY + A.height), i -= A.startY, r.beginPath(), r.moveTo(Math.min(o, s) * A.scale, Math.min(a, i) * A.scale), r.lineTo(Math.max(o, s) * A.scale, Math.min(a, i) * A.scale), r.lineTo(Math.max(o, s) * A.scale, Math.max(a, i) * A.scale), r.lineTo(Math.min(o, s) * A.scale, Math.max(a, i) * A.scale), r.lineTo(Math.min(o, s) * A.scale, Math.min(a, i) * A.scale), r.lineWidth = 1, r.strokeStyle = A.toolbarColor, r.stroke(), r.closePath()
              }

              function i(e) {
                e.changedTouches && e.changedTouches[0], document.removeEventListener("mousemove", s), document.removeEventListener("touchmove", s), document.removeEventListener("mouseup", i), document.removeEventListener("touchend", i), (0, r.default)(A)
              }
            }
            A.isEdit = !0, "rect" !== A.currentToolType && (A.currentToolType = "rect", (0, a.default)(e), (0, s.default)(A, "canvasLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), A.rectangleCanvas.removeEventListener("touchstart", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("touchmove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup), document.removeEventListener("touchend", A.toolmouseup)), A.rectangleCanvas.addEventListener("mousedown", t), A.rectangleCanvas.addEventListener("touchstart", t), A.toolmousedown = t)
          })), e
        }, t(0);
        var n = i(t(5)),
          r = i(t(3)),
          o = i(t(30)),
          a = i(t(1)),
          s = i(t(2));

        function i(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
      }, function (A, e) {
        A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA5klEQVRIS2NkGCDAOED2MoxaDA75ouWfUhkYGKWpEQ2MjIzveW9wT25oYPyHbB5GUBct/5TEyMA4lxqWIsz4X90byddGwOLPDYwMDPX/GRg2MjAwXKDEAYz/GVQYGBmi//9nmNkXxZtBpMWMiX2RPAsosbhw2RcPJsb/20ctBoUilsQFi+PRoCY9mY0mrtF8jJJqipaPZifSsxFMx2h2GvTZqZOJ4f8O8mOYgeH///9mDIyMnUTVx8XLPpWBFFNiIaZeIpo+oav+M8v9+5rz//9/QWpYTnRjjxqWEWPGaIOemFCiihoAPCwYLhqAkIYAAAAASUVORK5CYII="
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssArrowBT", e.className = "kssToolbarItemBT", e.title = "椭圆工具";
          var t = document.createElement("img");
          return t.className = "kssToolbarItemImg", t.src = o.default, A.ellipseBT = e, e.appendChild(t), e.addEventListener("click", (function () {
            function t(e) {
              var t;
              if (2 !== (t = e.changedTouches ? e.changedTouches[0] : e).button) {
                var o = t.clientX - A.startX,
                  a = t.clientY - A.startY;
                document.addEventListener("mousemove", s), document.addEventListener("touchmove", s), document.addEventListener("mouseup", i), document.addEventListener("touchend", i), A.toolmousemove = s, A.toolmouseup = i
              }

              function s(e) {
                var t;
                t = e.changedTouches ? e.changedTouches[0] : e, (0, n.default)(A);
                var r = A.rectangleCanvas.getContext("2d"),
                  s = t.clientX,
                  i = t.clientY;
                s < A.startX ? s = A.startX : s > A.startX + A.width && (s = A.startX + A.width), s -= A.startX, i < A.startY ? i = A.startY : i > A.startY + A.height && (i = A.startY + A.height), i -= A.startY;
                var l = (o + s) / 2,
                  c = (a + i) / 2,
                  u = Math.abs(s - o) / 2,
                  d = Math.abs(i - a) / 2,
                  B = .5522848,
                  h = u * B,
                  w = d * B;
                r.beginPath(), r.lineWidth = 1, r.strokeStyle = A.toolbarColor, r.moveTo((l - u) * A.scale, c * A.scale), r.bezierCurveTo((l - u) * A.scale, (c - w) * A.scale, (l - h) * A.scale, (c - d) * A.scale, l * A.scale, (c - d) * A.scale), r.bezierCurveTo((l + h) * A.scale, (c - d) * A.scale, (l + u) * A.scale, (c - w) * A.scale, (l + u) * A.scale, c * A.scale), r.bezierCurveTo((l + u) * A.scale, (c + w) * A.scale, (l + h) * A.scale, (c + d) * A.scale, l * A.scale, (c + d) * A.scale), r.bezierCurveTo((l - h) * A.scale, (c + d) * A.scale, (l - u) * A.scale, (c + w) * A.scale, (l - u) * A.scale, c * A.scale), r.stroke(), r.closePath()
              }

              function i(e) {
                e.changedTouches && e.changedTouches[0], document.removeEventListener("mousemove", s), document.removeEventListener("touchmove", s), document.removeEventListener("mouseup", i), document.removeEventListener("touchend", i), (0, r.default)(A)
              }
            }
            A.isEdit = !0, "ellipse" !== A.currentToolType && (A.currentToolType = "ellipse", (0, a.default)(e), (0, s.default)(A, "canvasLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), A.rectangleCanvas.removeEventListener("touchstart", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("touchmove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup), document.removeEventListener("touchend", A.toolmouseup)), A.rectangleCanvas.addEventListener("mousedown", t), A.rectangleCanvas.addEventListener("touchstart", t), A.toolmousedown = t)
          })), e
        }, t(0);
        var n = i(t(5)),
          r = i(t(3)),
          o = i(t(32)),
          a = i(t(1)),
          s = i(t(2));

        function i(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
      }, function (A, e) {
        A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADQElEQVRIS9WWT2gUZxjGn3dmIsbsrOhF8E+1hXpKQKtUD56sxaZFPKjb3Un00IqFQquZXXMUr0p2llAoVApVSWbWzUWkBGlpexQV06LisbZWhV4s3dl1Q3dmHhllIerszmQ1hM5xvvd9ft/7fR/v+wgW6ZNF4uL/AR6pcKXi1zIgBiBcT8AXyn0CN6mlpkoZeZT0BBNVPOLUtyr0T0BkEIAG8F9Q7lIgAm4AZDkAj+A0oJ60cn2/xm2gI7hwnn3sqZ0FsB/AbZDjAZf8XBpa+vtc4ZHJ2bdE+e89gXwJoJ/A1Kya+uTrjNTabaAt+Gil8YbmNX8AsJqCvJXVv4UIO1ZCill2DwtRBOSBp2m7xzO996JyIsFfTDDdo7o3AGkqqvbRWKb3btzRzV0vVBpv0vOmKdSavr7lq2GpvpgfCc7b7o8UbPQp744bqb/nA23FHnMaG1Q2bwJytWjo78eCC3Z9DxFcDDTZVMqkbnUDbeUUbDdDwQWKssfK9n0/V+ulik3HnRHwdjGXPvQq0Fau6VSvA6JaOf2dtuBRp77aR/AgCNRtpaFl114HOF+uD4LBtOqr604PL7vf0nyuYtN2PxPhqWJWXxH7ghPu6kCF6jrPfQTIqGXo30SC83Z1jCKbrJy+K6FuorC87f5E4YyVSx+PrthxJ4Vg0dCHEykmDDIjdJ876rztToRaCwEGGVhG+mCbO66GHWezZeg7ExaTKCzvuL+AvFE00oXoOy67RxBw7J6mr5jKiJ9INS6IlHzZ/Qcio8WsfiYSPDrxeK2v+n8FlMGSkbocp5lk3Sw/3i70r6hQ1pzO9T2MBIc/TSfs0WxYufSOJMJxMaZdPQeRfiunb+nYuZ62TAkuCfHxmKFX4oQ7rY9UagOKx9+oKHtjW2Yo9GxIcLsEPf3Fod4/u4EftWurNOEMiDuJhkQIaY1FIXzRegbnOxaPT86+HUjz0rzH4tOqJxvrId5lgGsoOGZl9e9i22j4gh33UwBWaARA7YN2J9bR+nxeYWqpVzsrgn3ztD4XZtXU4a6sz9x7NZ36ZsA/KZAPW2aPkD/CmAUxey8+qtDeilc7AMFACFxwe9vNq47LSeSr40S6WV808BNkBHIuAp7D7gAAAABJRU5ErkJggg=="
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssColorBT", e.className = "kssToolbarItemBT", e.title = "颜色工具";
          var t = document.createElement("img");
          return t.className = "kssToolbarItemImg", t.src = a.default, A.colorBT = e, e.appendChild(t), e.addEventListener("click", (function () {
            var e = document.documentElement.clientHeight,
              t = document.getElementById("kssColorBoard");
            e - A.startY - A.height - A.toolbarMarginTop - A.toolbarHeight < 0 ? (0, r.css)(t, {
              top: "30px"
            }) : (0, r.css)(t, {
              top: "-40px"
            }), t.style.display = "block", t.focus()
          })), e
        };
        var n, r = t(0),
          o = t(34),
          a = (n = o) && n.__esModule ? n : {
            default: n
          }
      }, function (A, e) {
        A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEUElEQVRIS+2VXWwUZRSG3/ebbUuhf7Oh1QtR2+4umAbTBONP/Enw5wLxQhLDBRilQFi7w4+aYDDRpIlCg6ka2842jVAMMQRMBLzQVKMJJMRIVBLQAO5sqVgUhWRmtxCK7c4cM1vAtdLdLSb0xrmazHfmPOd9v3O+j5imh9PExf/gm+b8jVndJqqi1pobULzFr5Siucy4g/b68JliKy8aHOy2mkRxLSHNEJkP4oyAv4+DRBGcC0i5gN/DVeuddY0/5CuiMLhNAnpd8hUINpLodJUc0kZ52F4fHs5NrPcO3H6JmDFzzF0IYgsEW53z4Q600bteAXnB1fFEgwL2Ahhmhst8K3XTWp5NDAx6Glalo+GBoJnYAXKFiGQAbhDRPiUzH5I4YMcir08N7CutTR4RyPaUEXnv6s9B0xoCcVvWYGCrU1H5hn7xQpqAlv0mOOIY4QVV24aCgdGRHz0VWJR6oeHoRPikivW4tRki9Y7LlmqFpvSswHG01F/WzcRBko+MJ2LUPte4Ta+z/iA4+wr4E8cIP+2/6/HkIor3tl071oylTaO58OuCq+PJBZrIfrhogiYfgFwiIp85RmRxRU+yrsSTNwEec2obe7CUbo2ZaCbYDkrKQ1ksHbvDuQrR44lBIVtSreEDBcF63NopRJ8fHIwnDgO8VyBHnVikudhx+Rts7QO5x2kN7S4IDpqJL20j8njWrq6B+dS8JzylfXV1r6q7fq5X2ugmt7T81eHVc+x8xehmcisgpx0jHM8PfmeoXC8b6fcUOpXwWVfUlmGj8dvcn6q6E/cFFL8B5NeMaEsmrv9jzExrjwdsTxvhL/KCq3uSjypPngcwh8RCgXQ4scjGiaqCZmKvv/cQOWkbkbsmUx00E8cvB0ofuxS982xesN498CSUtxxkHJ68hoCKOtHGXyYmruz9abbmqnYFrPaIVanWcN+/4L1Somess44RyXZ8fsXxRIMmPGgHQg2IcqxQM+k9Vis8dAvYkjJCO3Pja3qslUow346FXyoIzjaUae0nxHOpNqe1xmOFCsjCBaYIV1yDbz9ZGbysfWfPcO/BqnkXigKj0yqrCcgyCp4BcT+gPnJioVa0iaqpGzAo8hDBHbYR6r82NlfgFEZtI/R+jWl1gDydioW6ruda4UvCPFehM93vUntZEzcC4KnREm1D6Vjma6e8pMk/zXLhFMRFuE4owdTs0Gb/gLkx8Lj17STOC3iCIitHFY1SkUN2eeDuXLAPqIlbLyrgXR/uGKHuyXqksOLsmXvqYYj78Z9Qi0vpPUjBA1Tos1vDn/uJZ5mDt5Yws4bAcxSu9SjzfDiEG20j1HHDirNKzMQGEm8BOAEwNZ5MdABVEA6S3G1L1S4YdRdzlU8GL0rxtYp7f5tZlRlpUsqbBfFvQBlKxyKnJrNTN61NJNohXOM3XN45LjS3U12/4tR5JxbZdVPB/6m5pqqymPip7XExGYuMmTbwX5NFzi48sixUAAAAAElFTkSuQmCC"
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssTextBT", e.className = "kssToolbarItemBT", e.title = "字体工具";
          var t = document.createElement("img");
          return t.className = "kssToolbarItemImg", t.src = s.default, A.textBT = e, e.appendChild(t), e.addEventListener("click", (function () {
            if (A.isEdit = !0, "text" !== A.currentToolType) {
              A.currentToolType = "text", (0, o.default)(e), (0, a.default)(A, "textLayer"), A.toolmousedown && (A.rectangleCanvas.removeEventListener("mousedown", A.toolmousedown), document.removeEventListener("mousemove", A.toolmousemove), document.removeEventListener("mouseup", A.toolmouseup));
              var t = !1;
              A.textClickEvent || (A.textClickEvent = function (e) {
                if (!t) {
                  var o = e.clientX - A.startX,
                    a = e.clientY - A.startY,
                    s = document.createElement("div");
                  s.className = "kssTextarea", s.contentEditable = !0, s.tabIndex = -1;
                  var i = 0,
                    l = 0;
                  A.width - o < 60 ? i = 60 - (A.width - o) : (0, n.css)(s, {
                    "min-width": "60px"
                  }), A.height - a < 36 ? l = 36 - (A.height - a) : (0, n.css)(s, {
                    "min-height": "36px"
                  }), (0, n.css)(s, {
                    position: "absolute",
                    top: a - l + "px",
                    left: o - i + "px",
                    "max-width": A.width - o + "px",
                    "max-height": A.height - a + "px"
                  }), A.kssTextLayer.appendChild(s), s.addEventListener("focus", (function () {
                    t = !0, (0, n.css)(s, {
                      color: A.toolbarColor
                    })
                  })), s.addEventListener("blur", (function (e) {
                    if (t = !1, "" !== s.innerHTML) {
                      var c = A.rectangleCanvas.getContext("2d");
                      c.font = 16 * A.scale + "px 宋体";
                      var u = s.innerHTML.split("<div>"),
                        d = [];
                      u.forEach((function (e, t) {
                        var n = e;
                        t > 0 && (n = e.replace("</div>", "")), n = n.replace(/&nbsp;|\<br\>/g, "  ");
                        var r = A.width - o > 60 ? A.width - o : 60,
                          a = 0,
                          s = "";
                        Array.prototype.forEach.call(n, (function (A, e) {
                          (a += c.measureText(A).width) >= r ? (a = c.measureText(A).width, d.push(s), s = A) : s += A
                        })), d.push(s)
                      })), c.fillStyle = A.toolbarColor, d.forEach((function (e, t) {
                        c.fillText(e, (o - i) * A.scale, (a - l + 15 + 18 * t) * A.scale)
                      })), (0, r.default)(A), (0, n.remove)(s)
                    } else(0, n.remove)(s)
                  })), setTimeout((function () {
                    s.focus()
                  }), 0)
                }
              }), A.kssTextLayer.removeEventListener("mousedown", A.textClickEvent), A.kssTextLayer.addEventListener("mousedown", A.textClickEvent)
            }
          })), e
        };
        var n = t(0),
          r = i(t(3)),
          o = i(t(1)),
          a = i(t(2)),
          s = i(t(36));

        function i(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
      }, function (A, e) {
        A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAApUlEQVRIS2NkGCDAOED2MoxaTLeQxxnUHn0/DjAwMtpT5pL/B3YUcjhiM4PWFu/bUcjhTJrF/b8SGBj+K2D18X8GBQZGhnio3AIGBoaH2NT9Z2S8t7OAbRFJFuMLYvfe346MTP/2gdQw/mdy2F7EepDUKCErO41aPBrUxCS00cRFTCgxjGan0exETEIZzU7EhNIIzE5EBQsBRWQlrlGLyQmBAQtqAM8ijR/H6NfmAAAAAElFTkSuQmCC"
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          document.documentElement.clientHeight;
          var e = document.createElement("span");
          return e.id = "kssToolbarMiddleArea", e.appendChild((0, n.default)(A)), e.appendChild((0, r.default)(A)), e
        }, t(0);
        var n = o(t(38)),
          r = o(t(39));

        function o(A) {
          return A && A.__esModule ? A : {
            default: A
          }
        }
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssColorBoard", e.title = "颜色板", e.tabIndex = "-1";
          var t = document.createElement("span");
          t.id = "kssCurrentColor", (0, n.css)(t, {
            background: A.toolbarColor
          }), e.appendChild(t);
          var o = document.createElement("div");
          return o.id = "kssColorItemWrapper", r.forEach((function (e, a) {
            var s = document.createElement("span");
            s.className = "kssColorItem kss" + e, s.dataset.color = e, (0, n.css)(s, {
              background: e
            }), a <= r.length / 2 - 1 && (0, n.css)(s, {
              "margin-bottom": "2px"
            }), s.addEventListener("click", (function (e) {
              var n = e.currentTarget.dataset.color;
              A.toolbarColor = n, t.style.background = n
            })), o.appendChild(s)
          })), e.appendChild(o), e.addEventListener("focus", (function (A) {
            A.currentTarget.style.display = "block"
          })), e.addEventListener("blur", (function (A) {
            A.currentTarget.style.display = "none"
          })), e
        };
        var n = t(0),
          r = ["#000", "#808080", "#800000", "#f7883a", "#308430", "#385ad3", "#800080", "#009999", "#fff", "#c0c0c0", "#fb3838", "#ffff00", "#99cc00", "#3894e4", "#f31af3", "#16dcdc"]
      }, function (A, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = function (A) {
          var e = document.createElement("span");
          e.id = "kssSetLineWidth", e.tabIndex = "-1";
          var t = document.createElement("div");
          t.id = "kssNumInputWrapper";
          var r = document.createElement("input");
          r.id = "kssNumInput", r.value = A.toolbarLineWidth, t.appendChild(r), r.addEventListener("input", (function (e) {
            var t = parseInt(e.currentTarget.value);
            t > 20 ? t = 20 : t <= 0 && (t = 1), r.value = t, A.toolbarLineWidth = t, (0, n.css)(l, {
              width: A.toolbarLineWidth + "px"
            })
          }));
          var o = document.createElement("span");
          o.id = "kssArrowNumWrapper";
          var a = document.createElement("div");
          a.id = "kssUpNum", a.innerHTML = "▲";
          var s = document.createElement("div");
          s.id = "kssDownNum", s.innerHTML = "▼", a.addEventListener("click", (function () {
            r.value < 20 && (r.value = parseInt(r.value) + 1, A.toolbarLineWidth = r.value, (0, n.css)(l, {
              width: A.toolbarLineWidth + "px"
            }))
          })), s.addEventListener("click", (function () {
            r.value > 1 && (r.value = parseInt(r.value) - 1, A.toolbarLineWidth = r.value, (0, n.css)(l, {
              width: A.toolbarLineWidth + "px"
            }))
          })), o.appendChild(a), o.appendChild(s), t.appendChild(o), e.appendChild(t);
          var i = document.createElement("div");
          i.id = "kssShowLineWidthWrapper";
          var l = document.createElement("span");
          return l.id = "kssShowLineWidth", (0, n.css)(l, {
            width: A.toolbarLineWidth + "px",
            background: "#fb3838"
          }), i.appendChild(l), e.appendChild(i), e.addEventListener("focus", (function (A) {
            A.currentTarget.style.display = "block"
          })), e.addEventListener("blur", (function () {
            setTimeout((function () {
              r !== document.activeElement && (e.style.display = "none")
            }), 0)
          })), r.addEventListener("blur", (function () {
            setTimeout((function () {
              e !== document.activeElement && (e.style.display = "none")
            }), 0)
          })), e
        };
        var n = t(0)
      }, function (A, e, t) {
        var n = t(41);
        "string" == typeof n && (n = [
          [A.i, n, ""]
        ]);
        var r = {
          hmr: !0,
          transform: void 0,
          insertInto: void 0
        };
        t(44)(n, r), n.locals && (A.exports = n.locals)
      }, function (A, e, t) {
        var n = t(42);
        (A.exports = t(43)(!1)).push([A.i, ".kssBody{cursor:url(" + n(t(10)) + "),auto;user-select:none}.kssBody #kss{position:fixed;top:0;left:0;z-index:10000}.kssBody #kssScreenShotWrapper{position:fixed;background:transparent;box-shadow:0 0 0 9999px rgba(0,0,0,0.3);z-index:10001}.kssBody #kssScreenShotWrapper #kssTextLayer{position:absolute;top:0;left:0;width:100%;height:100%;z-index:98;cursor:crosshair}.kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea{background:transparent;resize:none;min-width:60px;min-height:36px;box-sizing:border-box;border-color:transparent;overflow:hidden;font-family:宋体}.kssBody #kssScreenShotWrapper #kssTextLayer .kssTextarea:hover{cursor:text;outline:#488ff9 solid 1px}.kssBody #kssScreenShotWrapper #kssRectangleCanvas{height:100%;width:100%;top:0;left:0;cursor:move;position:absolute;z-index:99}.kssBody #kssScreenShotWrapper .kssDot,.kssBody #kssScreenShotWrapper .kssLine{position:absolute;background:#488ff9;z-index:100}.kssBody #kssScreenShotWrapper #kssCurrentImgDom{width:100%;height:100%;position:absolute;top:0;left:0;display:none}.kssBody #kssScreenShotWrapper #kssToolbar{position:absolute;right:0;background:#f1f1f1;font-size:14px;border:1px solid #dedede;border-radius:4px;box-sizing:border-box;z-index:100}.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT{display:inline-block;width:30px;height:28px;text-align:center;float:right;cursor:pointer}.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT:hover{background:#dedede}.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarItemBT .kssToolbarItemImg{width:20px;height:20px;margin-top:5px}.kssBody #kssScreenShotWrapper #kssToolbar .kssToolbarActiveItemBT{background:#dedede}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard{position:absolute;width:180px;height:40px;right:0;background:#fff;border:1px solid #bbb;border-radius:4px;display:none;outline:none;cursor:default;z-index:100}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssCurrentColor{display:inline-block;width:30px;height:30px;margin:5px 8px 0 8px;box-sizing:border-box;border:1px solid #333}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper{display:inline-block;vertical-align:top;width:130px;margin-top:5px;font-size:0}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssColorBoard #kssColorItemWrapper .kssColorItem{display:inline-block;width:14px;height:14px;margin-right:2px;box-sizing:border-box;border:1px solid #333;cursor:pointer}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth{position:absolute;width:155px;height:40px;right:0;background:#fff;border:1px solid #bbb;border-radius:4px;display:none;outline:none;cursor:default;z-index:100}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper{margin:7px 0 0 8px;position:relative;display:inline-block}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssNumInput{width:40px;height:24px;border:1px solid #bbb;border-radius:4px;padding:0 15px 0 8px}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper{position:absolute;right:0;top:1px;border-radius:0 4px 4px 0;font-size:0;line-height:12px}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum,.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum{height:12px;font-size:12px;cursor:pointer}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssUpNum:hover,.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssNumInputWrapper #kssArrowNumWrapper #kssDownNum:hover{background:#dedede}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper{display:inline-block;height:40px;line-height:40px;vertical-align:top;width:80px;text-align:center}.kssBody #kssScreenShotWrapper #kssToolbar #kssToolbarMiddleArea #kssSetLineWidth #kssShowLineWidthWrapper #kssShowLineWidth{height:20px;display:inline-block;vertical-align:middle}\n", ""])
      }, function (A, e) {
        A.exports = function (A) {
          return "string" != typeof A ? A : (/^['"].*['"]$/.test(A) && (A = A.slice(1, -1)), /["'() \t\n]/.test(A) ? '"' + A.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : A)
        }
      }, function (A, e) {
        A.exports = function (A) {
          var e = [];
          return e.toString = function () {
            return this.map((function (e) {
              var t = function (A, e) {
                var t, n = A[1] || "",
                  r = A[3];
                if (!r) return n;
                if (e && "function" == typeof btoa) {
                  var o = (t = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"),
                    a = r.sources.map((function (A) {
                      return "/*# sourceURL=" + r.sourceRoot + A + " */"
                    }));
                  return [n].concat(a).concat([o]).join("\n")
                }
                return [n].join("\n")
              }(e, A);
              return e[2] ? "@media " + e[2] + "{" + t + "}" : t
            })).join("")
          }, e.i = function (A, t) {
            "string" == typeof A && (A = [
              [null, A, ""]
            ]);
            for (var n = {}, r = 0; r < this.length; r++) {
              var o = this[r][0];
              "number" == typeof o && (n[o] = !0)
            }
            for (r = 0; r < A.length; r++) {
              var a = A[r];
              "number" == typeof a[0] && n[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), e.push(a))
            }
          }, e
        }
      }, function (A, e, t) {
        var n, r, o = {},
          a = (n = function () {
            return window && document && document.all && !window.atob
          }, function () {
            return void 0 === r && (r = n.apply(this, arguments)), r
          }),
          s = function (A) {
            return document.querySelector(A)
          },
          i = function (A) {
            var e = {};
            return function (A) {
              if ("function" == typeof A) return A();
              if (void 0 === e[A]) {
                var t = s.call(this, A);
                if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                  t = t.contentDocument.head
                } catch (A) {
                  t = null
                }
                e[A] = t
              }
              return e[A]
            }
          }(),
          l = null,
          c = 0,
          u = [],
          d = t(45);

        function B(A, e) {
          for (var t = 0; t < A.length; t++) {
            var n = A[t],
              r = o[n.id];
            if (r) {
              r.refs++;
              for (var a = 0; a < r.parts.length; a++) r.parts[a](n.parts[a]);
              for (; a < n.parts.length; a++) r.parts.push(Q(n.parts[a], e))
            } else {
              var s = [];
              for (a = 0; a < n.parts.length; a++) s.push(Q(n.parts[a], e));
              o[n.id] = {
                id: n.id,
                refs: 1,
                parts: s
              }
            }
          }
        }

        function h(A, e) {
          for (var t = [], n = {}, r = 0; r < A.length; r++) {
            var o = A[r],
              a = e.base ? o[0] + e.base : o[0],
              s = {
                css: o[1],
                media: o[2],
                sourceMap: o[3]
              };
            n[a] ? n[a].parts.push(s) : t.push(n[a] = {
              id: a,
              parts: [s]
            })
          }
          return t
        }

        function w(A, e) {
          var t = i(A.insertInto);
          if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          var n = u[u.length - 1];
          if ("top" === A.insertAt) n ? n.nextSibling ? t.insertBefore(e, n.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), u.push(e);
          else if ("bottom" === A.insertAt) t.appendChild(e);
          else {
            if ("object" != typeof A.insertAt || !A.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = i(A.insertInto + " " + A.insertAt.before);
            t.insertBefore(e, r)
          }
        }

        function f(A) {
          if (null === A.parentNode) return !1;
          A.parentNode.removeChild(A);
          var e = u.indexOf(A);
          e >= 0 && u.splice(e, 1)
        }

        function g(A) {
          var e = document.createElement("style");
          return void 0 === A.attrs.type && (A.attrs.type = "text/css"), p(e, A.attrs), w(A, e), e
        }

        function p(A, e) {
          Object.keys(e).forEach((function (t) {
            A.setAttribute(t, e[t])
          }))
        }

        function Q(A, e) {
          var t, n, r, o;
          if (e.transform && A.css) {
            if (!(o = e.transform(A.css))) return function () {};
            A.css = o
          }
          if (e.singleton) {
            var a = c++;
            t = l || (l = g(e)), n = C.bind(null, t, a, !1), r = C.bind(null, t, a, !0)
          } else A.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function (A) {
            var e = document.createElement("link");
            return void 0 === A.attrs.type && (A.attrs.type = "text/css"), A.attrs.rel = "stylesheet", p(e, A.attrs), w(A, e), e
          }(e), n = v.bind(null, t, e), r = function () {
            f(t), t.href && URL.revokeObjectURL(t.href)
          }) : (t = g(e), n = E.bind(null, t), r = function () {
            f(t)
          });
          return n(A),
            function (e) {
              if (e) {
                if (e.css === A.css && e.media === A.media && e.sourceMap === A.sourceMap) return;
                n(A = e)
              } else r()
            }
        }
        A.exports = function (A, e) {
          if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
          (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
          var t = h(A, e);
          return B(t, e),
            function (A) {
              for (var n = [], r = 0; r < t.length; r++) {
                var a = t[r];
                (s = o[a.id]).refs--, n.push(s)
              }
              for (A && B(h(A, e), e), r = 0; r < n.length; r++) {
                var s;
                if (0 === (s = n[r]).refs) {
                  for (var i = 0; i < s.parts.length; i++) s.parts[i]();
                  delete o[s.id]
                }
              }
            }
        };
        var m, U = (m = [], function (A, e) {
          return m[A] = e, m.filter(Boolean).join("\n")
        });

        function C(A, e, t, n) {
          var r = t ? "" : n.css;
          if (A.styleSheet) A.styleSheet.cssText = U(e, r);
          else {
            var o = document.createTextNode(r),
              a = A.childNodes;
            a[e] && A.removeChild(a[e]), a.length ? A.insertBefore(o, a[e]) : A.appendChild(o)
          }
        }

        function E(A, e) {
          var t = e.css,
            n = e.media;
          if (n && A.setAttribute("media", n), A.styleSheet) A.styleSheet.cssText = t;
          else {
            for (; A.firstChild;) A.removeChild(A.firstChild);
            A.appendChild(document.createTextNode(t))
          }
        }

        function v(A, e, t) {
          var n = t.css,
            r = t.sourceMap,
            o = void 0 === e.convertToAbsoluteUrls && r;
          (e.convertToAbsoluteUrls || o) && (n = d(n)), r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
          var a = new Blob([n], {
              type: "text/css"
            }),
            s = A.href;
          A.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }
      }, function (A, e) {
        A.exports = function (A) {
          var e = "undefined" != typeof window && window.location;
          if (!e) throw new Error("fixUrls requires window.location");
          if (!A || "string" != typeof A) return A;
          var t = e.protocol + "//" + e.host,
            n = t + e.pathname.replace(/\/[^\/]*$/, "/");
          return A.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (A, e) {
            var r, o = e.trim().replace(/^"(.*)"$/, (function (A, e) {
              return e
            })).replace(/^'(.*)'$/, (function (A, e) {
              return e
            }));
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? A : (r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? t + o : n + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
          }))
        }
      }]).default
    }))
  },
  ee58: function (A, e, t) {
    var n = t("4f18");
    "string" === typeof n && (n = [
      [A.i, n, ""]
    ]), n.locals && (A.exports = n.locals);
    var r = t("499e").default;
    r("d028e3b0", n, !0, {
      sourceMap: !1,
      shadowMode: !1
    })
  },
  fa7c: function (A, e, t) {
    "use strict";
    t("cfef")
  }
});