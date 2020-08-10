(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Choice.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/demo/Choice.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
//import NicolaCkeditor from '@nicolabello/ckeditor5-build-decoupled-document';


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DashboardChoice",
  components: {},
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
          chosenType: {
            chosen: null,
            letter: {
              "for": null,
              establishment: null,
              letterType: null,
              copyTransmitted: null,
              object: null,
              confidentiality: null,
              status: null
            },
            document: {}
          }
        },
        second: {
          // Second step
          active: false,
          error: {
            header: null,
            content: null
          },
          // CKeditor
          editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default.a,
          editorData: "<p>Content of the editor.</p>",
          editorConfig: {// The configuration of the editor.
          }
        },
        third: {
          active: false,
          error: {
            header: null,
            content: null
          }
        }
      }
    };
  },
  methods: {
    setDone: function setDone(id, index) {
      this.steper[id].active = true;

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
    unActiveStepers: function unActiveStepers() {
      var steper = this.steper;

      for (var key in steper) {
        if (steper.hasOwnProperty(key)) {
          var element = steper[key];

          if (Object(validate_js__WEBPACK_IMPORTED_MODULE_1__["isObject"])(element)) {
            element.active = false;
          }
        }
      }

      return;
    },
    firstStepeCheck: function firstStepeCheck() {
      var setDone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // Check formulary of first step
      var id = "first",
          index = "second";
      this.steper.first.error.content = null;
      this.steper.first.error.header = null;
      var constraints = {
        chosen: {
          presence: {
            allowEmpty: false
          }
        },
        "for": {
          presence: {
            allowEmpty: false
          }
        },
        establishment: {
          presence: {
            allowEmpty: false
          }
        },
        object: {
          presence: {
            allowEmpty: false
          }
        },
        confidentiality: {
          presence: {
            allowEmpty: false
          }
        },
        status: {
          presence: {
            allowEmpty: false
          }
        }
      };

      if (this.isLetter) {
        constraints.letterType = {
          presence: {
            allowEmpty: false
          }
        };

        if (this.$data.steper.first.chosenType.letter.letterType == "Copy Transmitted") {
          constraints.copyTransmitted = {
            presence: {
              allowEmpty: false
            }
          };
        }
      } else if (this.isDocument) {}

      var datas = this.steper.first.chosenType.letter;
      datas.chosen = this.steper.first.chosenType.chosen;

      if (!this.setError(id, validate_js__WEBPACK_IMPORTED_MODULE_1___default()(datas, constraints))) {
        this.unActiveStepers();
        return false;
      }

      if (setDone) {
        this.setDone(id, index);
      } else return true;
    },
    secondStepeCheck: function secondStepeCheck() {
      var setDone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // Check formulary of second step
      var id = "first",
          index = "second";
      this.steper.second.error.content = null;
      this.steper.second.error.header = null;
      var data = {
        editorData: this.steper.second.editorData
      };
      var constraints = {
        editorData: {
          presence: {
            allowEmpty: false
          },
          length: {
            minimum: 10
          }
        }
      };

      if (!this.setError(id, validate_js__WEBPACK_IMPORTED_MODULE_1___default()(data, constraints))) {
        this.unActiveStepers();
        return false;
      }

      if (setDone) {
        this.setDone(id, index);
      } else return true;
    }
  },
  computed: {
    isLetter: function isLetter() {
      return this.steper.first.chosenType.chosen == "letter";
    },
    isDocument: function isDocument() {
      return this.steper.first.chosenType.chosen == "document";
    }
  },
  watch: {//'steper.first.chosenType.letter.for': function (newSteper, oldSteper) {
    //	this.firstStepeCheck();
    //	//console.log("qsq");
    //},
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Choice.vue?vue&type=template&id=7363cc03&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/demo/Choice.vue?vue&type=template&id=7363cc03& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "md-layout" },
      [
        _c(
          "md-steppers",
          {
            staticClass: "w-100",
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
                  "md-label": "Configurations",
                  "md-description": "Model choice",
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
                _c("div", { staticClass: "md-subheading" }, [
                  _vm._v("Génerale")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "md-layout mb-3" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "md-layout-item md-xsmall-size-100 md-size-25"
                      },
                      [
                        _c(
                          "md-field",
                          [
                            _c("label", { attrs: { for: "chosen_type" } }, [
                              _vm._v("Type of Document")
                            ]),
                            _vm._v(" "),
                            _c(
                              "md-select",
                              {
                                attrs: {
                                  name: "chosen_type",
                                  id: "chosen_type",
                                  required: ""
                                },
                                model: {
                                  value: _vm.steper.first.chosenType.chosen,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.steper.first.chosenType,
                                      "chosen",
                                      $$v
                                    )
                                  },
                                  expression: "steper.first.chosenType.chosen"
                                }
                              },
                              [
                                _c(
                                  "md-option",
                                  { attrs: { value: "letter" } },
                                  [_vm._v("Letter")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "md-option",
                                  { attrs: { value: "document" } },
                                  [_vm._v("Other Documents")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "md-helper-text" }, [
                              _vm._v("Select type of your demo document")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "md-error" })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.isLetter
                      ? [
                          _c(
                            "div",
                            {
                              staticClass:
                                "md-layout-item md-xsmall-size-100 md-size-25"
                            },
                            [
                              _c(
                                "md-field",
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "letter_type" } },
                                    [_vm._v("Type of Letter")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "md-select",
                                    {
                                      attrs: { required: "" },
                                      model: {
                                        value:
                                          _vm.steper.first.chosenType.letter
                                            .letterType,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.steper.first.chosenType.letter,
                                            "letterType",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "steper.first.chosenType.letter.letterType"
                                      }
                                    },
                                    [
                                      _c(
                                        "md-option",
                                        { attrs: { value: "Simple" } },
                                        [_vm._v("Simple")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "md-option",
                                        {
                                          attrs: { value: "Copy Transmitted" }
                                        },
                                        [_vm._v("Copy Transmitted")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.steper.first.chosenType.letter.letterType ==
                          "Copy Transmitted"
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "md-layout-item md-xsmall-size-100 md-size-25"
                                },
                                [
                                  _c(
                                    "md-field",
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "movies" } },
                                        [_vm._v("Select some persones")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "md-select",
                                        {
                                          attrs: { required: "", multiple: "" },
                                          model: {
                                            value:
                                              _vm.steper.first.chosenType.letter
                                                .copyTransmitted,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.steper.first.chosenType
                                                  .letter,
                                                "copyTransmitted",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "steper.first.chosenType.letter.copyTransmitted"
                                          }
                                        },
                                        _vm._l(13, function(id) {
                                          return _c(
                                            "md-option",
                                            {
                                              key: id,
                                              attrs: {
                                                value: "Person Exemple " + id
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s("Person Exemple " + id)
                                              )
                                            ]
                                          )
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "md-subheading" }, [
                  _vm._v("References")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "md-layout" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "md-layout-item md-xsmall-size-100 md-size-25"
                    },
                    [
                      _c(
                        "md-field",
                        [
                          _c("md-icon", [_vm._v("account_box")]),
                          _vm._v(" "),
                          _c("label", [_vm._v("For")]),
                          _vm._v(" "),
                          _c("md-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.steper.first.chosenType.letter.for,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.steper.first.chosenType.letter,
                                  "for",
                                  $$v
                                )
                              },
                              expression: "steper.first.chosenType.letter.for"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "md-layout-item md-xsmall-size-100 md-size-25"
                    },
                    [
                      _c(
                        "md-field",
                        [
                          _c("md-icon", [_vm._v("corporate_fare")]),
                          _vm._v(" "),
                          _c("label", [_vm._v("Establishment")]),
                          _vm._v(" "),
                          _c("md-input", {
                            attrs: { required: "" },
                            model: {
                              value:
                                _vm.steper.first.chosenType.letter
                                  .establishment,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.steper.first.chosenType.letter,
                                  "establishment",
                                  $$v
                                )
                              },
                              expression:
                                "steper.first.chosenType.letter.establishment"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "md-layout-item md-xsmall-size-100 md-size-25"
                    },
                    [
                      _c(
                        "md-field",
                        [
                          _c("label", [_vm._v("Object")]),
                          _vm._v(" "),
                          _c("md-textarea", {
                            attrs: { required: "", "md-autogrow": "" },
                            model: {
                              value: _vm.steper.first.chosenType.letter.object,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.steper.first.chosenType.letter,
                                  "object",
                                  $$v
                                )
                              },
                              expression:
                                "steper.first.chosenType.letter.object"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "md-subheading" }, [
                  _vm._v("Security")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "md-layout" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "md-layout-item md-xsmall-size-100 md-size-25"
                    },
                    [
                      _c(
                        "md-field",
                        [
                          _c("label", { attrs: { for: "movies" } }, [
                            _vm._v("Status")
                          ]),
                          _vm._v(" "),
                          _c(
                            "md-select",
                            {
                              attrs: { required: "" },
                              model: {
                                value:
                                  _vm.steper.first.chosenType.letter.status,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.steper.first.chosenType.letter,
                                    "status",
                                    $$v
                                  )
                                },
                                expression:
                                  "steper.first.chosenType.letter.status"
                              }
                            },
                            [
                              _c("md-option", { attrs: { value: "Urgent" } }, [
                                _vm._v("Urgent")
                              ]),
                              _vm._v(" "),
                              _c(
                                "md-option",
                                { attrs: { value: "Important" } },
                                [_vm._v("Important")]
                              ),
                              _vm._v(" "),
                              _c("md-option", { attrs: { value: "Minor" } }, [
                                _vm._v("Minor")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "md-layout-item md-xsmall-size-100 md-size-25"
                    },
                    [
                      _c(
                        "md-field",
                        [
                          _c("label", { attrs: { for: "movies" } }, [
                            _vm._v("Confidentiality")
                          ]),
                          _vm._v(" "),
                          _c(
                            "md-select",
                            {
                              attrs: { required: "" },
                              model: {
                                value:
                                  _vm.steper.first.chosenType.letter
                                    .confidentiality,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.steper.first.chosenType.letter,
                                    "confidentiality",
                                    $$v
                                  )
                                },
                                expression:
                                  "steper.first.chosenType.letter.confidentiality"
                              }
                            },
                            [
                              _c("md-option", { attrs: { value: "Private" } }, [
                                _vm._v("Private")
                              ]),
                              _vm._v(" "),
                              _c("md-option", { attrs: { value: "Public" } }, [
                                _vm._v("Public")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "md-button",
                  {
                    staticClass: "md-raised md-success",
                    on: {
                      click: function($event) {
                        return _vm.setDone("first", "second")
                      }
                    }
                  },
                  [_vm._v("Continue")]
                ),
                _vm._v(" "),
                _vm.steper.first.error.content
                  ? _c(
                      "div",
                      _vm._l(_vm.steper.first.error.content, function(
                        error,
                        index
                      ) {
                        return _c(
                          "div",
                          { key: index, staticClass: "text-danger" },
                          [
                            _c("strong", { staticClass: "text-uppercase" }, [
                              _vm._v(_vm._s(index) + " Field:")
                            ]),
                            _vm._v(
                              "\n\t\t\t\t\t\t" +
                                _vm._s(error.join(",\n")) +
                                "\n\t\t\t\t\t"
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "md-step",
              {
                attrs: {
                  id: "second",
                  "md-label": "Content",
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
                _c(
                  "div",
                  {},
                  [
                    _c("ckeditor", {
                      attrs: {
                        editor: _vm.steper.second.editor,
                        config: _vm.steper.second.editorConfig
                      },
                      model: {
                        value: _vm.steper.second.editorData,
                        callback: function($$v) {
                          _vm.$set(_vm.steper.second, "editorData", $$v)
                        },
                        expression: "steper.second.editorData"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "md-button",
                  {
                    staticClass: "md-raised md-success",
                    on: {
                      click: function($event) {
                        return _vm.setDone("second", "third")
                      }
                    }
                  },
                  [_vm._v("Continue")]
                ),
                _vm._v(" "),
                _vm.steper.second.error.content
                  ? _c(
                      "div",
                      _vm._l(_vm.steper.second.error.content, function(
                        error,
                        index
                      ) {
                        return _c(
                          "div",
                          { key: index, staticClass: "text-danger" },
                          [
                            _c("strong", { staticClass: "text-uppercase" }, [
                              _vm._v(_vm._s(index) + " Field:")
                            ]),
                            _vm._v(
                              "\n\t\t\t\t\t\t" +
                                _vm._s(error.join(",\n")) +
                                "\n\t\t\t\t\t"
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "md-step",
              {
                attrs: {
                  id: "third",
                  "md-label": "Third Step",
                  "md-done": _vm.steper.third.active
                },
                on: {
                  "update:mdDone": function($event) {
                    return _vm.$set(_vm.steper.third, "active", $event)
                  },
                  "update:md-done": function($event) {
                    return _vm.$set(_vm.steper.third, "active", $event)
                  }
                }
              },
              [
                _c(
                  "md-button",
                  {
                    staticClass: "md-raised md-success",
                    on: {
                      click: function($event) {
                        return _vm.setDone("third")
                      }
                    }
                  },
                  [_vm._v("Done")]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/dashboard/demo/Choice.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/dashboard/demo/Choice.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Choice_vue_vue_type_template_id_7363cc03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Choice.vue?vue&type=template&id=7363cc03& */ "./resources/js/views/dashboard/demo/Choice.vue?vue&type=template&id=7363cc03&");
/* harmony import */ var _Choice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choice.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/demo/Choice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Choice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Choice_vue_vue_type_template_id_7363cc03___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Choice_vue_vue_type_template_id_7363cc03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/demo/Choice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/demo/Choice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/dashboard/demo/Choice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Choice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Choice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/demo/Choice.vue?vue&type=template&id=7363cc03&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard/demo/Choice.vue?vue&type=template&id=7363cc03& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choice_vue_vue_type_template_id_7363cc03___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Choice.vue?vue&type=template&id=7363cc03& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Choice.vue?vue&type=template&id=7363cc03&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choice_vue_vue_type_template_id_7363cc03___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choice_vue_vue_type_template_id_7363cc03___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);