(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/creation/New.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/creation/New.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components */ "./resources/js/components/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DashboardCreationNew",
  components: {
    Paper: _components__WEBPACK_IMPORTED_MODULE_1__["Paper"]
  },
  data: function data() {
    return {
      steper: {
        active: "first",
        first: {
          // First step
          active: false,
          error: {
            header: null,
            content: null
          },
          editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
          editorConfig: {}
        },
        second: {
          // Second step
          active: false,
          error: {
            header: null,
            content: null
          },
          personsCC: [],
          bgImage: {
            fileRecords: [],
            fileRecordsForUpload: [],
            confirmModal: null,
            confirmModalFileRecord: null
          },
          headerLogo: {
            fileRecords: [],
            fileRecordsForUpload: [],
            confirmModal: null,
            confirmModalFileRecord: null
          }
        }
      },
      docConfig: {
        body: {},
        header: {
          leftSide: {
            title: null,
            subTitle: null
          },
          rightSide: {}
        },
        footer: {
          rightSide: {}
        }
      }
    };
  },
  computed: {
    getDates: function getDates() {
      return [moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY HH:mm:ss"), moment__WEBPACK_IMPORTED_MODULE_2___default()().format("DD/MM/YYYY")];
    }
  },
  methods: {
    setDone: function setDone(id, index) {
      if (id) {
        this.steper[id].active = true;
      }

      if (index) {
        this.steper.active = index;
      }
    },
    setError: function setError(id, validator) {
      if (this.steper[id].error.content = validator) {
        this.steper[id].error.header = "You've some errors";
        return false;
      }

      return true;
    },
    unactiveStepers: function unactiveStepers() {
      var steper = this.steper;

      for (var key in steper) {
        if (steper.hasOwnProperty(key)) {
          var element = steper[key];

          if (isObject(element)) {
            element.active = false;
          }
        }
      }

      return;
    },
    activeStepers: function activeStepers() {
      var steper = this.steper;

      for (var key in steper) {
        if (steper.hasOwnProperty(key)) {
          var element = steper[key];

          if (isObject(element)) {
            element.active = true;
          }
        }
      }

      return;
    },
    setNewDocConfig: function setNewDocConfig(config) {
      this.docConfig.config = config;
    },
    filesSelected: function filesSelected(fileRecordsNewlySelected, dataFile) {
      var validFileRecords = fileRecordsNewlySelected.filter(function (fileRecord) {
        return !fileRecord.error;
      });
      dataFile.fileRecordsForUpload = dataFile.fileRecordsForUpload.concat(validFileRecords);
    },
    onBeforeDelete: function onBeforeDelete(fileRecord, dataFile) {
      var i = dataFile.fileRecordsForUpload.indexOf(fileRecord);

      if (i !== -1) {
        dataFile.fileRecordsForUpload.splice(i, 1);
      } else {
        dataFile.confirmModal = true;
      }
    },
    fileDeleted: function fileDeleted(fileRecord, dataFile) {
      var i = dataFile.fileRecordsForUpload.indexOf(fileRecord);

      if (i !== -1) {
        dataFile.fileRecordsForUpload.splice(i, 1);
      } else {//this.deleteUploadedFile(fileRecord);
      }
    },
    launchPreview: function launchPreview() {
      this.setDone("second");
      this.$router.push({
        name: "dashboard-creation-new-preview"
      });
    }
  },
  mounted: function mounted() {
    var selectedDoc = JSON.parse(JSON.stringify(this.$store.getters["document/getSelectedDoc"]));
    this.docConfig = selectedDoc.config;
    if (this.docConfig && this.docConfig.body && this.docConfig.body.cc) this.steper.second.personsCC = JSON.parse(JSON.stringify(this.docConfig.body.cc.persons));
  },
  watch: {
    docConfig: {
      handler: function handler(val) {
        this.setNewDocConfig(val);
      },
      deep: true,
      immediate: false
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/creation/New.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/creation/New.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#new-creation-section > .left-side {\n  overflow: auto;\n  min-height: 100%;\n  max-height: calc(100vh - 123px);\n}\n#new-creation-section > .left-side > :first-child {\n  overflow: auto;\n  height: 100%;\n}\n#new-creation-section > .left-side > :first-child .list-group {\n  overflow: auto;\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/creation/New.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/creation/New.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/creation/New.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/creation/New.vue?vue&type=template&id=0fc35fac&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/creation/New.vue?vue&type=template&id=0fc35fac& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content", attrs: { id: "new-creation-section" } },
    [
      _c(
        "div",
        { staticClass: "row content-side" },
        [
          _c(
            "md-steppers",
            {
              staticClass: "col-md-7 left-side",
              attrs: { "md-active-step": _vm.steper.active, "md-linear": "" },
              on: {
                "update:mdActiveStep": function($event) {
                  return _vm.$set(_vm.steper, "active", $event)
                },
                "update:md-active-step": function($event) {
                  return _vm.$set(_vm.steper, "active", $event)
                }
              }
            },
            [
              _c(
                "md-step",
                {
                  attrs: {
                    id: "first",
                    "md-label": "Content",
                    "md-error": _vm.steper.first.error.header,
                    "md-done": _vm.steper.first.active
                  },
                  on: {
                    "update:mdDone": function($event) {
                      return _vm.$set(_vm.steper.first, "active", $event)
                    },
                    "update:md-done": function($event) {
                      return _vm.$set(_vm.steper.first, "active", $event)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    [
                      _c("ckeditor", {
                        attrs: {
                          editor: _vm.steper.first.editor,
                          config: _vm.steper.first.editorConfig
                        },
                        model: {
                          value: _vm.docConfig.body.content,
                          callback: function($$v) {
                            _vm.$set(_vm.docConfig.body, "content", $$v)
                          },
                          expression: "docConfig.body.content"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "md-button",
                    {
                      staticClass: "md-raised md-primary",
                      on: {
                        click: function($event) {
                          return _vm.$router.go(-1)
                        }
                      }
                    },
                    [_vm._v("Go back")]
                  ),
                  _vm._v(" "),
                  _c(
                    "md-button",
                    {
                      staticClass: "md-raised md-primary",
                      on: {
                        click: function($event) {
                          return _vm.setDone("first", "second")
                        }
                      }
                    },
                    [_vm._v("Next")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-step",
                {
                  attrs: {
                    id: "second",
                    "md-label": "Config",
                    "md-error": _vm.steper.second.error.header,
                    "md-done": _vm.steper.second.active
                  },
                  on: {
                    "update:mdDone": function($event) {
                      return _vm.$set(_vm.steper.second, "active", $event)
                    },
                    "update:md-done": function($event) {
                      return _vm.$set(_vm.steper.second, "active", $event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "md-subheading" }, [
                    _vm._v("Header")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "md-layout mb-3" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-xsmall-size-100 md-size-50"
                      },
                      [
                        _c(
                          "md-autocomplete",
                          {
                            attrs: {
                              "md-options": ["République Démocratique du Congo"]
                            },
                            model: {
                              value: _vm.docConfig.header.leftSide.title,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.docConfig.header.leftSide,
                                  "title",
                                  $$v
                                )
                              },
                              expression: "docConfig.header.leftSide.title"
                            }
                          },
                          [_c("label", [_vm._v(" Title ")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-xsmall-size-100 md-size-50"
                      },
                      [
                        _c(
                          "md-autocomplete",
                          {
                            attrs: {
                              "md-options": ["Ministère de l'Urbanisme"]
                            },
                            model: {
                              value: _vm.docConfig.header.leftSide.subTitle,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.docConfig.header.leftSide,
                                  "subTitle",
                                  $$v
                                )
                              },
                              expression: "docConfig.header.leftSide.subTitle"
                            }
                          },
                          [_c("label", [_vm._v(" Subtitle ")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-xsmall-size-100 md-size-50"
                      },
                      [
                        _c(
                          "md-autocomplete",
                          {
                            attrs: { "md-options": _vm.getDates },
                            model: {
                              value: _vm.docConfig.header.rightSide.date,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.docConfig.header.rightSide,
                                  "date",
                                  $$v
                                )
                              },
                              expression: "docConfig.header.rightSide.date"
                            }
                          },
                          [_c("label", [_vm._v(" Date ")])]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-xsmall-size-100 md-size-50"
                      },
                      [
                        _c(
                          "md-autocomplete",
                          {
                            attrs: {
                              "md-options": ["Urgent", "Important", "Minor"]
                            },
                            model: {
                              value: _vm.docConfig.header.rightSide.subTitle,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.docConfig.header.rightSide,
                                  "subTitle",
                                  $$v
                                )
                              },
                              expression: "docConfig.header.rightSide.subTitle"
                            }
                          },
                          [_c("label", [_vm._v(" Subtitle ")])]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "md-subheading" }, [_vm._v("Body")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "md-layout mb-3" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-xsmall-size-100 md-size-50"
                      },
                      [
                        _c(
                          "md-autocomplete",
                          {
                            attrs: { "md-options": ["New letter exemple"] },
                            model: {
                              value: _vm.docConfig.body.title,
                              callback: function($$v) {
                                _vm.$set(_vm.docConfig.body, "title", $$v)
                              },
                              expression: "docConfig.body.title"
                            }
                          },
                          [_c("label", [_vm._v(" Title ")])]
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _vm.docConfig.body.cc
                    ? _c(
                        "div",
                        { staticClass: "md-layout mb-3" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "md-layout-item md-xsmall-size-100 md-size-50"
                            },
                            [
                              _c(
                                "md-field",
                                [
                                  _c("label", { attrs: { for: "" } }, [
                                    _vm._v("Select some persons")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "md-select",
                                    {
                                      attrs: { multiple: "" },
                                      model: {
                                        value: _vm.docConfig.body.cc.persons,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.docConfig.body.cc,
                                            "persons",
                                            $$v
                                          )
                                        },
                                        expression: "docConfig.body.cc.persons"
                                      }
                                    },
                                    _vm._l(
                                      _vm.steper.second.personsCC,
                                      function(item) {
                                        return _c(
                                          "md-option",
                                          { key: item, attrs: { value: item } },
                                          [_vm._v(_vm._s(item))]
                                        )
                                      }
                                    ),
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.docConfig.body.cc.persons
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "md-layout-item md-xsmall-size-100 md-size-25"
                                  },
                                  [
                                    _c(
                                      "md-autocomplete",
                                      {
                                        attrs: {
                                          "md-options": ["Son exelance"]
                                        },
                                        model: {
                                          value:
                                            _vm.docConfig.body.cc.prePerson,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.docConfig.body.cc,
                                              "prePerson",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "docConfig.body.cc.prePerson"
                                        }
                                      },
                                      [_c("label", [_vm._v(" Prefix ")])]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "md-layout-item md-xsmall-size-100 md-size-50"
                                  },
                                  [
                                    _c(
                                      "md-autocomplete",
                                      {
                                        attrs: {
                                          "md-options": [
                                            "N° CAB/MIN-UH/ " + _vm.getDates[1]
                                          ]
                                        },
                                        model: {
                                          value: _vm.docConfig.body.cc.title,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.docConfig.body.cc,
                                              "title",
                                              $$v
                                            )
                                          },
                                          expression: "docConfig.body.cc.title"
                                        }
                                      },
                                      [_c("label", [_vm._v(" Title ")])]
                                    )
                                  ],
                                  1
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.docConfig.body.for != undefined
                    ? _c("div", { staticClass: "md-layout mb-3" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "md-layout-item md-xsmall-size-100 md-size-50"
                          },
                          [
                            _c(
                              "md-autocomplete",
                              {
                                attrs: { "md-options": ["Mr Someone"] },
                                model: {
                                  value: _vm.docConfig.body.for,
                                  callback: function($$v) {
                                    _vm.$set(_vm.docConfig.body, "for", $$v)
                                  },
                                  expression: "docConfig.body.for"
                                }
                              },
                              [_c("label", [_vm._v(" For ")])]
                            )
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "md-subheading" }, [
                    _vm._v("Footer")
                  ]),
                  _vm._v(" "),
                  _vm.docConfig.footer.rightSide != undefined
                    ? _c("div", { staticClass: "md-layout mb-3" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "md-layout-item md-xsmall-size-100 md-size-50"
                          },
                          [
                            _c(
                              "md-autocomplete",
                              {
                                attrs: {
                                  "md-options": ["" + _vm.docConfig.body.for]
                                },
                                model: {
                                  value: _vm.docConfig.footer.rightSide.title,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.docConfig.footer.rightSide,
                                      "title",
                                      $$v
                                    )
                                  },
                                  expression: "docConfig.footer.rightSide.title"
                                }
                              },
                              [_c("label", [_vm._v(" Title ")])]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "md-layout-item md-xsmall-size-100 md-size-50"
                          },
                          [
                            _c(
                              "md-autocomplete",
                              {
                                attrs: {
                                  "md-options": [
                                    "Fais à kinshasa le " + _vm.getDates[1]
                                  ]
                                },
                                model: {
                                  value:
                                    _vm.docConfig.footer.rightSide.subTitle,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.docConfig.footer.rightSide,
                                      "subTitle",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "docConfig.footer.rightSide.subTitle"
                                }
                              },
                              [_c("label", [_vm._v(" Subtitle ")])]
                            )
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "md-layout mb-3" },
                    [
                      _vm.docConfig.image
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "md-layout-item md-xsmall-size-100 md-size-50"
                            },
                            [
                              _c("label", [_vm._v(" Background image ")]),
                              _vm._v(" "),
                              _vm.docConfig.image.show
                                ? _c("VueFileAgent", {
                                    ref: "vueFileAgent",
                                    attrs: {
                                      multiple: false,
                                      deletable: true,
                                      meta: true,
                                      accept: "image/*",
                                      maxSize: "10MB",
                                      maxFiles: 1,
                                      helpText: "Choose only images",
                                      errorText: {
                                        type:
                                          "Invalid file type. Only images Allowed",
                                        size:
                                          "Files should not exceed 10MB in size"
                                      }
                                    },
                                    on: {
                                      select: function($event) {
                                        return _vm.filesSelected(
                                          $event,
                                          _vm.steper.second.bgImage
                                        )
                                      },
                                      beforedelete: function($event) {
                                        return _vm.onBeforeDelete(
                                          $event,
                                          _vm.steper.second.bgImage
                                        )
                                      },
                                      delete: function($event) {
                                        return _vm.fileDeleted(
                                          $event,
                                          _vm.steper.second.bgImage
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.docConfig.image.data,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.docConfig.image,
                                          "data",
                                          $$v
                                        )
                                      },
                                      expression: "docConfig.image.data"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("md-dialog-confirm", {
                                attrs: {
                                  "md-active":
                                    _vm.steper.second.bgImage.confirmModal,
                                  "md-title": "Confirmation",
                                  "md-content":
                                    "'Are you sure you want to delete?'",
                                  "md-confirm-text": "Agree",
                                  "md-cancel-text": "Disagree"
                                },
                                on: {
                                  "update:mdActive": function($event) {
                                    return _vm.$set(
                                      _vm.steper.second.bgImage,
                                      "confirmModal",
                                      $event
                                    )
                                  },
                                  "update:md-active": function($event) {
                                    return _vm.$set(
                                      _vm.steper.second.bgImage,
                                      "confirmModal",
                                      $event
                                    )
                                  },
                                  "md-cancel": function($event) {
                                    _vm.steper.second.bgImage.confirmModal = null
                                  },
                                  "md-confirm": function() {
                                    _vm.steper.second.bgImage.confirmModal = true
                                    _vm.$refs.vueFileAgent.deleteFileRecord(
                                      _vm.steper.second.bgImage
                                        .confirmModalFileRecord
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "md-switch",
                                {
                                  model: {
                                    value: _vm.docConfig.image.show,
                                    callback: function($$v) {
                                      _vm.$set(_vm.docConfig.image, "show", $$v)
                                    },
                                    expression: "docConfig.image.show"
                                  }
                                },
                                [_vm._v("Show background image ?")]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.docConfig.header.leftSide.logo
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "md-layout-item md-xsmall-size-100 md-size-50"
                            },
                            [
                              _c("label", [_vm._v(" Heasder logo ")]),
                              _vm._v(" "),
                              _vm.docConfig.header.leftSide.logo.show
                                ? _c("VueFileAgent", {
                                    ref: "vueFileAgent",
                                    attrs: {
                                      multiple: false,
                                      deletable: true,
                                      meta: true,
                                      accept: "image/*",
                                      maxSize: "10MB",
                                      maxFiles: 1,
                                      helpText: "Choose only images",
                                      errorText: {
                                        type:
                                          "Invalid file type. Only images Allowed",
                                        size:
                                          "Files should not exceed 10MB in size"
                                      }
                                    },
                                    on: {
                                      select: function($event) {
                                        return _vm.filesSelected(
                                          $event,
                                          _vm.steper.second.headerLogo
                                        )
                                      },
                                      beforedelete: function($event) {
                                        return _vm.onBeforeDelete(
                                          $event,
                                          _vm.steper.second.headerLogo
                                        )
                                      },
                                      delete: function($event) {
                                        return _vm.fileDeleted(
                                          $event,
                                          _vm.steper.second.headerLogo
                                        )
                                      }
                                    },
                                    model: {
                                      value:
                                        _vm.docConfig.header.leftSide.logo.data,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.docConfig.header.leftSide.logo,
                                          "data",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "docConfig.header.leftSide.logo.data"
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "md-switch",
                                {
                                  model: {
                                    value:
                                      _vm.docConfig.header.leftSide.logo.show,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.docConfig.header.leftSide.logo,
                                        "show",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "docConfig.header.leftSide.logo.show"
                                  }
                                },
                                [_vm._v("Show background image ?")]
                              )
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("md-dialog-confirm", {
                        attrs: {
                          "md-active":
                            _vm.steper.second.headerLogo.confirmModal,
                          "md-title": "Confirmation",
                          "md-content": "'Are you sure you want to delete?'",
                          "md-confirm-text": "Agree",
                          "md-cancel-text": "Disagree"
                        },
                        on: {
                          "update:mdActive": function($event) {
                            return _vm.$set(
                              _vm.steper.second.headerLogo,
                              "confirmModal",
                              $event
                            )
                          },
                          "update:md-active": function($event) {
                            return _vm.$set(
                              _vm.steper.second.headerLogo,
                              "confirmModal",
                              $event
                            )
                          },
                          "md-cancel": function($event) {
                            _vm.steper.second.headerLogo.confirmModal = null
                          },
                          "md-confirm": function() {
                            _vm.steper.second.headerLogo.confirmModal = true
                            _vm.$refs.vueFileAgent.deleteFileRecord(
                              _vm.steper.second.headerLogo
                                .confirmModalFileRecord
                            )
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "md-button",
                    {
                      staticClass: "md-raised md-primary",
                      on: {
                        click: function($event) {
                          return _vm.setDone("first", "first")
                        }
                      }
                    },
                    [_vm._v("\n\t\t\t\t\tBack\n\t\t\t\t")]
                  ),
                  _vm._v(" "),
                  _c(
                    "md-button",
                    {
                      staticClass: "md-raised md-primary",
                      on: {
                        click: function($event) {
                          return _vm.launchPreview()
                        }
                      }
                    },
                    [_vm._v("\n\t\t\t\t\tLaunch preview\n\t\t\t\t")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("router-view"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "right-side col-md-5 d-flex align-items-start justify-content-center"
            },
            [_c("Paper", { attrs: { config: _vm.docConfig } })],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/dashboard/creation/New.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/dashboard/creation/New.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_0fc35fac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=0fc35fac& */ "./resources/js/views/dashboard/creation/New.vue?vue&type=template&id=0fc35fac&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/creation/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _New_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./New.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/dashboard/creation/New.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_0fc35fac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_0fc35fac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/creation/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/creation/New.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/dashboard/creation/New.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/creation/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/creation/New.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/creation/New.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/creation/New.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/dashboard/creation/New.vue?vue&type=template&id=0fc35fac&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/dashboard/creation/New.vue?vue&type=template&id=0fc35fac& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_0fc35fac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=0fc35fac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/creation/New.vue?vue&type=template&id=0fc35fac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_0fc35fac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_0fc35fac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);