!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var s = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) ||
                Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r,
                });
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 3));
})([
    function (e, t) {
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var n = (function (e, t) {
                            var n = e[1] || "",
                                r = e[3];
                            if (!r) return n;
                            if (t && "function" == typeof btoa) {
                                var s =
                                        ((i = r),
                                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(i)
                                                    )
                                                )
                                            ) +
                                            " */"),
                                    o = r.sources.map(function (e) {
                                        return (
                                            "/*# sourceURL=" +
                                            r.sourceRoot +
                                            e +
                                            " */"
                                        );
                                    });
                                return [n].concat(o).concat([s]).join("\n");
                            }
                            var i;
                            return [n].join("\n");
                        })(t, e);
                        return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                    }).join("");
                }),
                (t.i = function (e, n) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var r = {}, s = 0; s < this.length; s++) {
                        var o = this[s][0];
                        "number" == typeof o && (r[o] = !0);
                    }
                    for (s = 0; s < e.length; s++) {
                        var i = e[s];
                        ("number" == typeof i[0] && r[i[0]]) ||
                            (n && !i[2]
                                ? (i[2] = n)
                                : n &&
                                  (i[2] = "(" + i[2] + ") and (" + n + ")"),
                            t.push(i));
                    }
                }),
                t
            );
        };
    },
    function (e, t, n) {
        var r = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !r)
            throw new Error(
                "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
            );
        var s = n(8),
            o = {},
            i =
                r &&
                (document.head || document.getElementsByTagName("head")[0]),
            a = null,
            u = 0,
            c = !1,
            l = function () {},
            p = null,
            f = "data-vue-ssr-id",
            d =
                "undefined" != typeof navigator &&
                /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function v(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t],
                    r = o[n.id];
                if (r) {
                    r.refs++;
                    for (var s = 0; s < r.parts.length; s++)
                        r.parts[s](n.parts[s]);
                    for (; s < n.parts.length; s++) r.parts.push(m(n.parts[s]));
                    r.parts.length > n.parts.length &&
                        (r.parts.length = n.parts.length);
                } else {
                    var i = [];
                    for (s = 0; s < n.parts.length; s++) i.push(m(n.parts[s]));
                    o[n.id] = { id: n.id, refs: 1, parts: i };
                }
            }
        }
        function h() {
            var e = document.createElement("style");
            return (e.type = "text/css"), i.appendChild(e), e;
        }
        function m(e) {
            var t,
                n,
                r = document.querySelector("style[" + f + '~="' + e.id + '"]');
            if (r) {
                if (c) return l;
                r.parentNode.removeChild(r);
            }
            if (d) {
                var s = u++;
                (r = a || (a = h())),
                    (t = b.bind(null, r, s, !1)),
                    (n = b.bind(null, r, s, !0));
            } else
                (r = h()),
                    (t = function (e, t) {
                        var n = t.css,
                            r = t.media,
                            s = t.sourceMap;
                        r && e.setAttribute("media", r);
                        p.ssrId && e.setAttribute(f, t.id);
                        s &&
                            ((n += "\n/*# sourceURL=" + s.sources[0] + " */"),
                            (n +=
                                "\n/*# sourceMappingURL=data:application/json;base64," +
                                btoa(
                                    unescape(
                                        encodeURIComponent(JSON.stringify(s))
                                    )
                                ) +
                                " */"));
                        if (e.styleSheet) e.styleSheet.cssText = n;
                        else {
                            for (; e.firstChild; ) e.removeChild(e.firstChild);
                            e.appendChild(document.createTextNode(n));
                        }
                    }.bind(null, r)),
                    (n = function () {
                        r.parentNode.removeChild(r);
                    });
            return (
                t(e),
                function (r) {
                    if (r) {
                        if (
                            r.css === e.css &&
                            r.media === e.media &&
                            r.sourceMap === e.sourceMap
                        )
                            return;
                        t((e = r));
                    } else n();
                }
            );
        }
        e.exports = function (e, t, n, r) {
            (c = n), (p = r || {});
            var i = s(e, t);
            return (
                v(i),
                function (t) {
                    for (var n = [], r = 0; r < i.length; r++) {
                        var a = i[r];
                        (u = o[a.id]).refs--, n.push(u);
                    }
                    t ? v((i = s(e, t))) : (i = []);
                    for (r = 0; r < n.length; r++) {
                        var u;
                        if (0 === (u = n[r]).refs) {
                            for (var c = 0; c < u.parts.length; c++)
                                u.parts[c]();
                            delete o[u.id];
                        }
                    }
                }
            );
        };
        var _,
            g =
                ((_ = []),
                function (e, t) {
                    return (_[e] = t), _.filter(Boolean).join("\n");
                });
        function b(e, t, n, r) {
            var s = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = g(t, s);
            else {
                var o = document.createTextNode(s),
                    i = e.childNodes;
                i[t] && e.removeChild(i[t]),
                    i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
            }
        }
    },
    function (e, t) {
        e.exports = function (e, t, n, r, s, o) {
            var i,
                a = (e = e || {}),
                u = typeof e.default;
            ("object" !== u && "function" !== u) || ((i = e), (a = e.default));
            var c,
                l = "function" == typeof a ? a.options : a;
            if (
                (t &&
                    ((l.render = t.render),
                    (l.staticRenderFns = t.staticRenderFns),
                    (l._compiled = !0)),
                n && (l.functional = !0),
                s && (l._scopeId = s),
                o
                    ? ((c = function (e) {
                          (e =
                              e ||
                              (this.$vnode && this.$vnode.ssrContext) ||
                              (this.parent &&
                                  this.parent.$vnode &&
                                  this.parent.$vnode.ssrContext)) ||
                              "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                              (e = __VUE_SSR_CONTEXT__),
                              r && r.call(this, e),
                              e &&
                                  e._registeredComponents &&
                                  e._registeredComponents.add(o);
                      }),
                      (l._ssrRegister = c))
                    : r && (c = r),
                c)
            ) {
                var p = l.functional,
                    f = p ? l.render : l.beforeCreate;
                p
                    ? ((l._injectStyles = c),
                      (l.render = function (e, t) {
                          return c.call(t), f(e, t);
                      }))
                    : (l.beforeCreate = f ? [].concat(f, c) : [c]);
            }
            return { esModule: i, exports: a, options: l };
        };
    },
    function (e, t, n) {
        e.exports = n(4);
    },
    function (e, t, n) {
        Nova.booting(function (e, t, r) {
            t.addRoutes([
                { name: "csv-import", path: "/csv-import", component: n(5) },
                {
                    name: "csv-import-preview",
                    path: "/csv-import/preview/:file",
                    component: n(11),
                    props: function (e) {
                        return { file: e.params.file };
                    },
                },
                {
                    name: "csv-import-review",
                    path: "/csv-import/review/:file",
                    component: n(16),
                    props: function (e) {
                        return { file: e.params.file };
                    },
                },
            ]);
        });
    },
    function (e, t, n) {
        var r = n(2)(
            n(9),
            n(10),
            !1,
            function (e) {
                n(6);
            },
            null,
            null
        );
        e.exports = r.exports;
    },
    function (e, t, n) {
        var r = n(7);
        "string" == typeof r && (r = [[e.i, r, ""]]),
            r.locals && (e.exports = r.locals);
        n(1)("70e75a02", r, !0, {});
    },
    function (e, t, n) {
        (e.exports = n(0)(!1)).push([e.i, "", ""]);
    },
    function (e, t) {
        e.exports = function (e, t) {
            for (var n = [], r = {}, s = 0; s < t.length; s++) {
                var o = t[s],
                    i = o[0],
                    a = {
                        id: e + ":" + s,
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3],
                    };
                r[i]
                    ? r[i].parts.push(a)
                    : n.push((r[i] = { id: i, parts: [a] }));
            }
            return n;
        };
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = {
                mounted: function () {},
                data: function () {
                    return { file: "" };
                },
                methods: {
                    handleFile: function (e) {
                        this.file = this.$refs.file.files[0];
                    },
                    upload: function (e) {
                        var t = new FormData();
                        t.append("file", this.file);
                        var n = this;
                        Nova.request()
                            .post(
                                "/nova-vendor/laravel-nova-csv-import/upload",
                                t,
                                {
                                    headers: {
                                        "Content-Type": "multipart/form-data",
                                    },
                                }
                            )
                            .then(function (e) {
                                n.$router.push({
                                    name: "csv-import-preview",
                                    params: { file: e.data.file },
                                });
                            })
                            .catch(function (e) {
                                n.$toasted.show(e.response.data.message, {
                                    type: "error",
                                });
                            });
                    },
                },
            });
    },
    function (e, t) {
        e.exports = {
            render: function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t(
                    "div",
                    [
                        t("heading", { staticClass: "mb-6" }, [
                            this._v("CSV Import"),
                        ]),
                        this._v(" "),
                        t(
                            "card",
                            {
                                staticClass:
                                    "flex flex-col items-center justify-center",
                                staticStyle: { "min-height": "300px" },
                            },
                            [
                                t("input", {
                                    ref: "file",
                                    attrs: { type: "file", name: "file" },
                                    on: { change: this.handleFile },
                                }),
                                this._v(" "),
                                t(
                                    "button",
                                    {
                                        staticClass:
                                            "btn btn-default btn-primary",
                                        attrs: { type: "submit" },
                                        on: { click: this.upload },
                                    },
                                    [this._v("Import")]
                                ),
                            ]
                        ),
                    ],
                    1
                );
            },
            staticRenderFns: [],
        };
    },
    function (e, t, n) {
        var r = n(2)(
            n(14),
            n(15),
            !1,
            function (e) {
                n(12);
            },
            null,
            null
        );
        e.exports = r.exports;
    },
    function (e, t, n) {
        var r = n(13);
        "string" == typeof r && (r = [[e.i, r, ""]]),
            r.locals && (e.exports = r.locals);
        n(1)("fa58209c", r, !0, {});
    },
    function (e, t, n) {
        (e.exports = n(0)(!1)).push([e.i, "", ""]);
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = {
                mounted: function () {
                    var e = this;
                    Nova.request()
                        .get(
                            "/nova-vendor/laravel-nova-csv-import/preview/" +
                                this.file
                        )
                        .then(function (t) {
                            (e.headings = t.data.headings),
                                (e.rows = t.data.sample),
                                (e.resources = t.data.resources),
                                (e.total_rows = t.data.total_rows),
                                (e.fields = t.data.fields),
                                e.headings.forEach(function (t) {
                                    e.$set(e.mappings, t, "");
                                });
                        });
                },
                data: function () {
                    return {
                        headings: [],
                        rows: [],
                        resources: [],
                        fields: [],
                        resource: "",
                        mappings: {},
                    };
                },
                props: ["file"],
                watch: {
                    resource: function (e) {
                        var t = this;
                        this.headings.forEach(function (e) {
                            t.$set(t.mappings, e, "");
                        }),
                            "" !== e &&
                                this.fields[e].forEach(function (e) {
                                    var n = e.attribute,
                                        r = t.headings.indexOf(n);
                                    if (!(r < 0)) {
                                        var s = t.headings[r];
                                        s === n && t.$set(t.mappings, s, n);
                                    }
                                });
                    },
                },
                methods: {
                    runImport: function () {
                        var e = this;
                        if (this.hasValidConfiguration()) {
                            var t = document.getElementById("run-import");
                            (t.innerHTML = "Importing..."),
                                t.setAttribute("disabled", "disabled");
                            var n = {
                                resource: this.resource,
                                mappings: this.mappings,
                            };
                            Nova.request()
                                .post(this.url("import/" + this.file), n)
                                .then(function (n) {
                                    "success" === n.data.result
                                        ? (e.$toasted.show(
                                              "All data imported!",
                                              { type: "success" }
                                          ),
                                          e.$router.push({
                                              name: "csv-import-review",
                                              params: {
                                                  file: e.file,
                                                  resource: e.resource,
                                              },
                                          }))
                                        : ((t.innerHTML =
                                              "Import &rightarrow;"),
                                          t.removeAttribute("disabled"),
                                          e.$toasted.show(
                                              //"There were problems importing some of your data" +
                                                  n.data.errors[0].errorInfo[2],
                                              { type: "error" }
                                          ),
                                          console.log(n.data));
                                });
                        }
                    },
                    hasValidConfiguration: function () {
                        var e = [],
                            t = this.mappings;
                        return (
                            Object.keys(t).forEach(function (n) {
                                "" !== t[n] && e.push(n);
                            }),
                            "" !== this.resource && e.length > 0
                        );
                    },
                    url: function (e) {
                        return "/nova-vendor/laravel-nova-csv-import/" + e;
                    },
                },
                computed: {
                    disabledImport: function () {
                        return !this.hasValidConfiguration();
                    },
                },
            });
    },
    function (e, t) {
        e.exports = {
            render: function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "div",
                    [
                        n("heading", { staticClass: "mb-6" }, [
                            e._v("CSV Import"),
                        ]),
                        e._v(" "),
                        n(
                            "card",
                            {
                                staticClass: "flex flex-col",
                                staticStyle: { "min-height": "300px" },
                            },
                            [
                                n("div", { staticClass: "p-8" }, [
                                    n("h2", { staticClass: "pb-4" }, [
                                        e._v("Preview"),
                                    ]),
                                    e._v(" "),
                                    n("p", { staticClass: "pb-4" }, [
                                        e._v(
                                            "\n                We were able to discover "
                                        ),
                                        n("b", [e._v(e._s(e.headings.length))]),
                                        e._v(" column(s) and "),
                                        n("b", [e._v(e._s(e.total_rows))]),
                                        e._v(
                                            "\n                row(s) in your data.\n            "
                                        ),
                                    ]),
                                    e._v(" "),
                                    n("p", { staticClass: "pb-4" }, [
                                        e._v(
                                            "\n                Choose a resource to import them into and match up the headings from the CSV to the\n                appropriate fields of the resource.\n            "
                                        ),
                                    ]),
                                    e._v(" "),
                                    n("h2", { staticClass: "py-4" }, [
                                        e._v("Resource"),
                                    ]),
                                    e._v(" "),
                                    n("p", { staticClass: "pb-4" }, [
                                        e._v(
                                            "Choose which resource to import your data into:"
                                        ),
                                    ]),
                                    e._v(" "),
                                    n("div", [
                                        n(
                                            "select",
                                            {
                                                directives: [
                                                    {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: e.resource,
                                                        expression: "resource",
                                                    },
                                                ],
                                                staticClass:
                                                    "block form-control form-select",
                                                attrs: { name: "resource" },
                                                on: {
                                                    change: function (t) {
                                                        var n =
                                                            Array.prototype.filter
                                                                .call(
                                                                    t.target
                                                                        .options,
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return e.selected;
                                                                    }
                                                                )
                                                                .map(function (
                                                                    e
                                                                ) {
                                                                    return "_value" in
                                                                        e
                                                                        ? e._value
                                                                        : e.value;
                                                                });
                                                        e.resource = t.target
                                                            .multiple
                                                            ? n
                                                            : n[0];
                                                    },
                                                },
                                            },
                                            [
                                                n(
                                                    "option",
                                                    { attrs: { value: "" } },
                                                    [
                                                        e._v(
                                                            "- Select a resource -"
                                                        ),
                                                    ]
                                                ),
                                                e._v(" "),
                                                e._l(
                                                    e.resources,
                                                    function (t, r) {
                                                        return n(
                                                            "option",
                                                            {
                                                                domProps: {
                                                                    value: r,
                                                                },
                                                            },
                                                            [e._v(e._s(t))]
                                                        );
                                                    }
                                                ),
                                            ],
                                            2
                                        ),
                                    ]),
                                ]),
                                e._v(" "),
                                n("table", { staticClass: "table w-full" }, [
                                    n("thead", [
                                        n(
                                            "tr",
                                            e._l(e.headings, function (t) {
                                                return n("th", [e._v(e._s(t))]);
                                            }),
                                            0
                                        ),
                                    ]),
                                    e._v(" "),
                                    n(
                                        "tbody",
                                        [
                                            n(
                                                "tr",
                                                e._l(e.headings, function (t) {
                                                    return n(
                                                        "td",
                                                        {
                                                            staticClass:
                                                                "text-center",
                                                        },
                                                        [
                                                            n(
                                                                "select",
                                                                {
                                                                    directives:
                                                                        [
                                                                            {
                                                                                name: "model",
                                                                                rawName:
                                                                                    "v-model",
                                                                                value: e
                                                                                    .mappings[
                                                                                    t
                                                                                ],
                                                                                expression:
                                                                                    "mappings[heading]",
                                                                            },
                                                                        ],
                                                                    staticClass:
                                                                        "w-full form-control form-select",
                                                                    on: {
                                                                        change: function (
                                                                            n
                                                                        ) {
                                                                            var r =
                                                                                Array.prototype.filter
                                                                                    .call(
                                                                                        n
                                                                                            .target
                                                                                            .options,
                                                                                        function (
                                                                                            e
                                                                                        ) {
                                                                                            return e.selected;
                                                                                        }
                                                                                    )
                                                                                    .map(
                                                                                        function (
                                                                                            e
                                                                                        ) {
                                                                                            return "_value" in
                                                                                                e
                                                                                                ? e._value
                                                                                                : e.value;
                                                                                        }
                                                                                    );
                                                                            e.$set(
                                                                                e.mappings,
                                                                                t,
                                                                                n
                                                                                    .target
                                                                                    .multiple
                                                                                    ? r
                                                                                    : r[0]
                                                                            );
                                                                        },
                                                                    },
                                                                },
                                                                [
                                                                    n(
                                                                        "option",
                                                                        {
                                                                            attrs: {
                                                                                value: "",
                                                                            },
                                                                        },
                                                                        [
                                                                            e._v(
                                                                                "- Ignore this column -"
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    e._v(" "),
                                                                    e._l(
                                                                        e
                                                                            .fields[
                                                                            e
                                                                                .resource
                                                                        ],
                                                                        function (
                                                                            t
                                                                        ) {
                                                                            return n(
                                                                                "option",
                                                                                {
                                                                                    domProps:
                                                                                        {
                                                                                            value: t.attribute,
                                                                                        },
                                                                                },
                                                                                [
                                                                                    e._v(
                                                                                        e._s(
                                                                                            t.name
                                                                                        )
                                                                                    ),
                                                                                ]
                                                                            );
                                                                        }
                                                                    ),
                                                                ],
                                                                2
                                                            ),
                                                        ]
                                                    );
                                                }),
                                                0
                                            ),
                                            e._v(" "),
                                            e._l(e.rows, function (t) {
                                                return n(
                                                    "tr",
                                                    e._l(t, function (t) {
                                                        return n("td", [
                                                            e._v(e._s(t)),
                                                        ]);
                                                    }),
                                                    0
                                                );
                                            }),
                                        ],
                                        2
                                    ),
                                ]),
                                e._v(" "),
                                n(
                                    "div",
                                    { staticClass: "bg-30 flex px-8 py-4" },
                                    [
                                        n(
                                            "button",
                                            {
                                                staticClass:
                                                    "btn btn-default btn-primary",
                                                attrs: {
                                                    disabled: e.disabledImport,
                                                    id: "run-import",
                                                },
                                                on: { click: e.runImport },
                                            },
                                            [e._v("Import → ")]
                                        ),
                                    ]
                                ),
                            ]
                        ),
                    ],
                    1
                );
            },
            staticRenderFns: [],
        };
    },
    function (e, t, n) {
        var r = n(2)(
            n(19),
            n(20),
            !1,
            function (e) {
                n(17);
            },
            null,
            null
        );
        e.exports = r.exports;
    },
    function (e, t, n) {
        var r = n(18);
        "string" == typeof r && (r = [[e.i, r, ""]]),
            r.locals && (e.exports = r.locals);
        n(1)("d59be518", r, !0, {});
    },
    function (e, t, n) {
        (e.exports = n(0)(!1)).push([e.i, "", ""]);
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = {
                mounted: function () {},
                data: function () {
                    return { imported: "" };
                },
                methods: {},
            });
    },
    function (e, t) {
        e.exports = {
            render: function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t(
                    "div",
                    [
                        t("heading", { staticClass: "mb-6" }, [
                            this._v("CSV Import"),
                        ]),
                        this._v(" "),
                        t(
                            "card",
                            {
                                staticClass:
                                    "flex flex-col items-center justify-center",
                                staticStyle: { "min-height": "300px" },
                            },
                            [
                                t("h1", { staticClass: "pb-4" }, [
                                    this._v("Done!"),
                                ]),
                                this._v(" "),
                                t("p", { staticClass: "pb-4" }, [
                                    this._v(
                                        "All your data was successfully imported."
                                    ),
                                ]),
                                this._v(" "),
                                t(
                                    "a",
                                    { attrs: { href: "/nova/csv-import/" } },
                                    [this._v("Upload more")]
                                ),
                            ]
                        ),
                    ],
                    1
                );
            },
            staticRenderFns: [],
        };
    },
]);
