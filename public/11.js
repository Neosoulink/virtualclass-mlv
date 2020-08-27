(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/printables/Demo.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/printables/Demo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! print-js */ "./node_modules/print-js/dist/print.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DemoPrintable",
  props: {
    documentType: {
      type: Object,
      //required: true,
      "default": function _default() {
        return {};
      }
    },
    forPerson: {
      type: String,
      //required: true,
      "default": "Demo field 2"
    },
    establishment: {
      type: String,
      //required: true,
      "default": "Demo field 3"
    },
    object: {
      type: String,
      //required: true,
      "default": "Demo field 4"
    },
    confidentiality: {
      type: String,
      //required: true,
      "default": "Demo field 5"
    },
    status: {
      type: String,
      //required: true,
      "default": "Demo field 6"
    }
  },
  mounted: function mounted() {
    setTimeout(function () {
      print_js__WEBPACK_IMPORTED_MODULE_0___default()({
        printable: "printable",
        type: "html",
        style: "#printable{height: 100%; width: 100%;}.content-text{position: relative;padding: 2vh 3vw 0 3vw; display: inline-block;z-index: 10;width: 100%}.header-left-side{width: 40.2vw; text-align: center;position: relative;}.header-left-side>.header-title{text-transform: uppercase;font-weight: 700;font-size: 0.95em}.item-person{ padding-left: 20px }"
      });
    }, 2000);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Demo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/demo/Demo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_printables_Demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/printables/Demo */ "./resources/js/components/printables/Demo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    DemoPrintable: _components_printables_Demo__WEBPACK_IMPORTED_MODULE_2__["default"]
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
          chosenDatas: {
            chosen: null,
            letter: {
              letterType: null,
              copyTransmitted: null
            },
            document: {
              documentType: null
            },
            "for": null,
            establishment: null,
            object: null,
            confidentiality: null,
            status: null
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
          },
          logoThemes: [],
          themeSelected: null
        }
      },
      printeredData: {
        dialogPreview: false,
        content: ""
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
    unactiveStepers: function unactiveStepers() {
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
    activeStepers: function activeStepers() {
      var steper = this.steper;

      for (var key in steper) {
        if (steper.hasOwnProperty(key)) {
          var element = steper[key];

          if (Object(validate_js__WEBPACK_IMPORTED_MODULE_1__["isObject"])(element)) {
            element.active = true;
          }
        }
      }

      return;
    },
    firstStepCheck: function firstStepCheck() {
      var setDone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // Check formulary of first step
      var id = "first",
          index = "second";
      this.steper[id].error.content = null;
      this.steper[id].error.header = null;
      var datas = this.steper[id].chosenDatas;
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
        datas.letterType = this.steper[id].chosenDatas.letter.letterType;
        constraints.letterType = {
          presence: {
            allowEmpty: false
          }
        };

        if (this.$data.steper[id].chosenDatas.letter.letterType == "Copy Transmitted") {
          datas.copyTransmitted = this.steper[id].chosenDatas.letter.copyTransmitted;
          constraints.copyTransmitted = {
            presence: {
              allowEmpty: false
            }
          };
        }
      } else if (this.isDocument) {
        datas.documentType = this.steper[id].chosenDatas.document.documentType;
        constraints.documentType = {
          presence: {
            allowEmpty: false
          }
        };
      }

      if (!this.setError(id, validate_js__WEBPACK_IMPORTED_MODULE_1___default()(datas, constraints))) {
        this.unactiveStepers();
        return false;
      }

      if (setDone) {
        this.setDone(id, index);
      } else return true;
    },
    secondStepCheck: function secondStepCheck() {
      var _this = this;

      var setDone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // Check formulary of second step
      var id = "second",
          index = "third";
      this.steper[id].error.content = null;
      this.steper[id].error.header = null;
      var data = {
        editorData: this.steper[id].editorData
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
        this.unactiveStepers();
        return false;
      }

      if (setDone) {
        this.setDone(id, index);

        if (!this.steper.third.logoThemes.length) {
          axios.get("/api/demo/logo-themes").then(function (res) {
            _this.steper.third.logoThemes = res.data;
          })["catch"](function (err) {
            console.error(err);
          });
        }
      } else return true;
    },
    thirdStepCheck: function thirdStepCheck() {
      var setDone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var id = "third";
      this.steper[id].error.content = null;
      this.steper[id].error.header = null;
      var data = {
        themeSelected: this.steper[id].themeSelected
      };
      var constraints = {
        themeSelected: {
          presence: {
            allowEmpty: false
          },
          url: {
            allowLocal: true
          }
        }
      };

      if (!this.setError(id, validate_js__WEBPACK_IMPORTED_MODULE_1___default()(data, constraints))) {
        this.unactiveStepers();
        return false;
      }

      if (setDone) {
        this.printeredData.dialogPreview = true;
        this.activeStepers();
      } else return true;
    },
    launchPrint: function launchPrint() {
      Print('printJS-form', 'html');
    }
  },
  computed: {
    isLetter: function isLetter() {
      return this.steper.first.chosenDatas.chosen == "letter";
    },
    isDocument: function isDocument() {
      return this.steper.first.chosenDatas.chosen == "document";
    },
    editorDataEscaped: function editorDataEscaped() {
      var dataEscaped = this.steper.second.editorData.replace(/<[^>]*>/gi, " ").trim();
      return dataEscaped;
    }
  },
  watch: {//'steper.first.chosenDatas.letter.for': function (newSteper, oldSteper) {
    //	this.firstStepCheck();
    //	//console.log("qsq");
    //},
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Demo.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/demo/Demo.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.md-select-menu > .md-menu-content-container > .md-list .md-list-item {\n\tpadding-left: -5px;\n\tmargin-left: -5px;\n}\n.md-select-menu > .md-menu-content-container > .md-list .md-list-item-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\tpadding-left: 15px;\n}\n.md-select-menu\n\t> .md-menu-content-container\n\t> .md-list\n\t.md-list-item-content\n\t> .md-checkbox {\n\tmargin: 0;\n\tdisplay: inline;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Demo.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/demo/Demo.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Demo.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/printables/Demo.vue?vue&type=template&id=a245482a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/printables/Demo.vue?vue&type=template&id=a245482a& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "d-none" }, [
    _c("main", { attrs: { id: "printable" } }, [
      _c("div", { staticClass: "content-text" }, [
        _c("header", [
          _c("div", { staticClass: "header-left-side" }, [
            _c("p", { staticClass: "header-title" }, [
              _c("span", [_vm._v("République démocratique du congo")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.status))])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "header-right-side" }, [
            _c("div", [_vm._v("Kinshasa le 20/13/41>")]),
            _vm._v(" "),
            _c("div", [_c("b", [_vm._v("Document " + _vm._s(_vm.forPerson))])])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticStyle: {
                  "font-size": "1.2em",
                  "margin-left": "20px",
                  "border-bottom": "2px dashed",
                  "padding-bottom": "20px"
                }
              },
              [
                _c("li", { staticClass: "item-person" }, [
                  _vm._v("Son exelance " + _vm._s(_vm.establishment))
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "item-person" }, [
                  _vm._v("Son exelance " + _vm._s(_vm.establishment))
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "item-person" }, [
                  _vm._v("Son exelance " + _vm._s(_vm.establishment))
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "item-person" }, [
                  _vm._v("Son exelance " + _vm._s(_vm.establishment))
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "col-4" }, [
            _c("h4", [_vm._v(_vm._s(_vm.object))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c("h4", { staticStyle: { "text-transform": "uppercase" } }, [
              _vm._v("à " + _vm._s(_vm.object))
            ]),
            _vm._v(" "),
            _vm._m(3)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "treu-content" }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticStyle: {
              padding: "0",
              "font-size": "1.5em",
              "line-height": "35px",
              "text-align": "justify"
            },
            attrs: { id: "object_doc" }
          },
          [
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [_vm._v(_vm._s(_vm.object))])
            ]),
            _vm._v("\n\t\t\t\t" + _vm._s(_vm.object) + "\n\t\t\t")
          ]
        ),
        _vm._v(" "),
        _c("footer", [
          _c(
            "h4",
            {
              staticClass: "text-right",
              staticStyle: {
                opacity: "1",
                "margin-top": "100px",
                "text-transform": "uppercase",
                "word-spacing": "0.3vw"
              }
            },
            [
              _c("b", [_vm._v("Lettre adressé à " + _vm._s(_vm.object))]),
              _vm._v(" "),
              _c("br")
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [_c("b", [_vm._v("N° CAB/MIN-UH/ here")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _c("b", [
        _c("u", [_vm._v("Transmis")]),
        _vm._v(" copie pour information à :\n\t\t\t\t\t\t")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2 text-right" }, [
      _c("h4", [_c("b", [_vm._v("Objet :")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("b", [_vm._v("KINSAHSA/GOMBE")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Demo.vue?vue&type=template&id=120c05c5&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/demo/Demo.vue?vue&type=template&id=120c05c5& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "content" },
    [
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
                                    value: _vm.steper.first.chosenDatas.chosen,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.steper.first.chosenDatas,
                                        "chosen",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "steper.first.chosenDatas.chosen"
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
                                            _vm.steper.first.chosenDatas.letter
                                              .letterType,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.steper.first.chosenDatas
                                                .letter,
                                              "letterType",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "steper.first.chosenDatas.letter.letterType"
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
                            _vm.steper.first.chosenDatas.letter.letterType ==
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
                                            attrs: {
                                              required: "",
                                              multiple: ""
                                            },
                                            model: {
                                              value:
                                                _vm.steper.first.chosenDatas
                                                  .letter.copyTransmitted,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.steper.first.chosenDatas
                                                    .letter,
                                                  "copyTransmitted",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "steper.first.chosenDatas.letter.copyTransmitted"
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
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isDocument
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
                                            _vm.steper.first.chosenDatas
                                              .document.documentType,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.steper.first.chosenDatas
                                                .document,
                                              "documentType",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "steper.first.chosenDatas.document.documentType"
                                        }
                                      },
                                      [
                                        _c(
                                          "md-option",
                                          {
                                            attrs: {
                                              value: "Official press release"
                                            }
                                          },
                                          [_vm._v("Official press release")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "md-option",
                                          {
                                            attrs: { value: "Official Report" }
                                          },
                                          [_vm._v("Official Report")]
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
                                value: _vm.steper.first.chosenDatas.for,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.steper.first.chosenDatas,
                                    "for",
                                    $$v
                                  )
                                },
                                expression: "steper.first.chosenDatas.for"
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
                                  _vm.steper.first.chosenDatas.establishment,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.steper.first.chosenDatas,
                                    "establishment",
                                    $$v
                                  )
                                },
                                expression:
                                  "steper.first.chosenDatas.establishment"
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
                                value: _vm.steper.first.chosenDatas.object,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.steper.first.chosenDatas,
                                    "object",
                                    $$v
                                  )
                                },
                                expression: "steper.first.chosenDatas.object"
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
                                  value: _vm.steper.first.chosenDatas.status,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.steper.first.chosenDatas,
                                      "status",
                                      $$v
                                    )
                                  },
                                  expression: "steper.first.chosenDatas.status"
                                }
                              },
                              [
                                _c(
                                  "md-option",
                                  { attrs: { value: "Urgent" } },
                                  [_vm._v("Urgent")]
                                ),
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
                                    _vm.steper.first.chosenDatas
                                      .confidentiality,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.steper.first.chosenDatas,
                                      "confidentiality",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "steper.first.chosenDatas.confidentiality"
                                }
                              },
                              [
                                _c(
                                  "md-option",
                                  { attrs: { value: "Private" } },
                                  [_vm._v("Private")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "md-option",
                                  { attrs: { value: "Public" } },
                                  [_vm._v("Public")]
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
                  ]),
                  _vm._v(" "),
                  _c(
                    "md-button",
                    {
                      staticClass: "md-raised md-success",
                      on: {
                        click: function($event) {
                          return _vm.firstStepCheck()
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
                          return _vm.secondStepCheck()
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
                    "md-label": "Theme",
                    "md-error": _vm.steper.third.error.header,
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
                  _vm.steper.third.logoThemes
                    ? _c(
                        "div",
                        { staticClass: "md-layout" },
                        _vm._l(_vm.steper.third.logoThemes, function(
                          logoTheme
                        ) {
                          return _c(
                            "div",
                            {
                              key: logoTheme,
                              staticClass:
                                "md-layout-item md-xsmall-size-100 md-size-25"
                            },
                            [
                              _c(
                                "md-card",
                                [
                                  _c(
                                    "md-card-media-cover",
                                    { attrs: { "md-text-scrim": "" } },
                                    [
                                      _c(
                                        "md-button",
                                        {
                                          staticClass:
                                            "md-success md-just-icon position-absolute",
                                          class:
                                            logoTheme ==
                                            _vm.steper.third.themeSelected
                                              ? "show"
                                              : "d-none",
                                          staticStyle: {
                                            right: "0",
                                            top: "0",
                                            "z-index": "10"
                                          }
                                        },
                                        [_c("md-icon", [_vm._v("check")])],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "md-card-media",
                                        { attrs: { "md-ratio": "4:3" } },
                                        [
                                          _c("img", {
                                            attrs: { src: logoTheme }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "md-card-expand",
                                    [
                                      _c(
                                        "md-button",
                                        {
                                          staticClass: "md-primary md-round",
                                          on: {
                                            click: function($event) {
                                              _vm.steper.third.themeSelected = logoTheme
                                            }
                                          }
                                        },
                                        [_vm._v("Select theme")]
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
                        }),
                        0
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "md-button",
                    {
                      staticClass: "md-raised md-success",
                      on: {
                        click: function($event) {
                          return _vm.thirdStepCheck()
                        }
                      }
                    },
                    [_vm._v("Launch preview")]
                  ),
                  _vm._v(" "),
                  _vm.steper.third.error.content
                    ? _c(
                        "div",
                        _vm._l(_vm.steper.third.error.content, function(
                          error,
                          index
                        ) {
                          return _c(
                            "div",
                            { key: index, staticClass: "text-danger" },
                            [
                              _c("strong", { staticClass: "text-uppercase" }, [
                                _vm._v(_vm._s(index) + ":")
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
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-dialog",
        {
          staticClass: "md-size-100",
          attrs: { "md-active": _vm.printeredData.dialogPreview },
          on: {
            "update:mdActive": function($event) {
              return _vm.$set(_vm.printeredData, "dialogPreview", $event)
            },
            "update:md-active": function($event) {
              return _vm.$set(_vm.printeredData, "dialogPreview", $event)
            }
          }
        },
        [
          _c("md-dialog-title", [_vm._v("Preview")]),
          _vm._v(" "),
          _c("md-dialog-content", { staticClass: "md-layout" }, [
            _c(
              "div",
              { staticClass: "md-layout-item md-xsmall-size-100 md-size-25" },
              [
                _vm.steper.third.themeSelected
                  ? _c("div", { staticClass: "md-size-100 mb-3" }, [
                      _c("legend", { staticClass: "md-subheading" }, [
                        _vm._v("Theme :")
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        attrs: { src: _vm.steper.third.themeSelected, alt: "" }
                      })
                    ])
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "md-layout-item md-xsmall-size-100 md-size-75" },
              [
                _vm.editorDataEscaped
                  ? _c("div", { staticClass: "md-size-100 mb-3" }, [
                      _c("legend", { staticClass: "md-subheading mb-0 pb-2" }, [
                        _vm._v("Content :")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "bg-light p-2" }, [
                        _vm._v(_vm._s(_vm.editorDataEscaped))
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.steper.first.chosenDatas.chosen
                  ? _c("div", { staticClass: "md-size-100 mb-3" }, [
                      _c("legend", { staticClass: "md-subheading mb-0 pb-2" }, [
                        _vm._v("\n\t\t\t\t\t\tDocument type :\n\t\t\t\t\t\t"),
                        _c(
                          "span",
                          { staticClass: "bg-light text-uppercase p-2" },
                          [_vm._v(_vm._s(_vm.steper.first.chosenDatas.chosen))]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.isLetter
                  ? [
                      _c(
                        "div",
                        { staticClass: "md-size-100 mb-3" },
                        [
                          _c(
                            "legend",
                            { staticClass: "md-subheading mb-0 pb-2" },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\tLetter type :\n\t\t\t\t\t\t\t"
                              ),
                              _c(
                                "span",
                                { staticClass: "bg-light text-uppercase p-2" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.steper.first.chosenDatas.chosen
                                    ) +
                                      " / " +
                                      _vm._s(
                                        _vm.steper.first.chosenDatas.letter
                                          .letterType
                                      )
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.steper.first.chosenDatas.letter.letterType ==
                          "Copy Transmitted"
                            ? _c(
                                "md-list",
                                { staticClass: "md-dense" },
                                _vm._l(
                                  _vm.steper.first.chosenDatas.letter
                                    .copyTransmitted,
                                  function(item, index) {
                                    return _c(
                                      "md-list-item",
                                      { key: index, staticClass: "mb-2" },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "md-list-item-text p-2 bg-light"
                                          },
                                          [_vm._v(" " + _vm._s(item))]
                                        )
                                      ]
                                    )
                                  }
                                ),
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.isDocument
                  ? [
                      _c("div", { staticClass: "md-size-100 mb-3" }, [
                        _c(
                          "legend",
                          { staticClass: "md-subheading mb-0 pb-2" },
                          [
                            _vm._v("\n\t\t\t\t\t\t\tModel :\n\t\t\t\t\t\t\t"),
                            _c(
                              "span",
                              { staticClass: "bg-light text-uppercase p-2" },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.steper.first.chosenDatas.document
                                      .documentType
                                  )
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "md-size-100 mb-3" }, [
                  _c(
                    "legend",
                    { staticClass: "md-subheading mb-0 pb-2" },
                    [
                      _c("md-icon", [_vm._v("account_box")]),
                      _vm._v(" For :\n\t\t\t\t\t\t"),
                      _c("span", { staticClass: "bg-light p-2" }, [
                        _vm._v(_vm._s(_vm.steper.first.chosenDatas.for))
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "md-size-100 mb-3" }, [
                  _c(
                    "legend",
                    { staticClass: "md-subheading mb-0 pb-2" },
                    [
                      _c("md-icon", [_vm._v("corporate_fare")]),
                      _vm._v(" Establishment :\n\t\t\t\t\t\t"),
                      _c("span", { staticClass: "bg-light p-2" }, [
                        _vm._v(
                          _vm._s(_vm.steper.first.chosenDatas.establishment)
                        )
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "md-size-100 mb-3" }, [
                  _c("legend", { staticClass: "md-subheading mb-0 pb-2" }, [
                    _vm._v("\n\t\t\t\t\t\tObject :\n\t\t\t\t\t\t"),
                    _c("span", { staticClass: "bg-light p-2" }, [
                      _vm._v(_vm._s(_vm.steper.first.chosenDatas.object))
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "md-size-100 mb-3" }, [
                  _c(
                    "legend",
                    { staticClass: "md-subheading mb-0 pb-2" },
                    [
                      _c("md-icon", [_vm._v("security")]),
                      _vm._v(" Confidentiality :\n\t\t\t\t\t\t"),
                      _c("span", { staticClass: "bg-light p-2" }, [
                        _vm._v(
                          _vm._s(_vm.steper.first.chosenDatas.confidentiality)
                        )
                      ])
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "md-size-100 mb-3" }, [
                  _c("legend", { staticClass: "md-subheading mb-0 pb-2" }, [
                    _vm._v("\n\t\t\t\t\t\tStatus :\n\t\t\t\t\t\t"),
                    _c("span", { staticClass: "bg-light p-2" }, [
                      _vm._v(_vm._s(_vm.steper.first.chosenDatas.status))
                    ])
                  ])
                ])
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "md-dialog-actions",
            [
              _c(
                "md-button",
                {
                  staticClass: "md-primary",
                  on: {
                    click: function($event) {
                      _vm.printeredData.dialogPreview = false
                    }
                  }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "md-button",
                {
                  staticClass: "md-primary",
                  on: {
                    click: function($event) {
                      _vm.printeredData.dialogPreview = false
                    }
                  }
                },
                [
                  _c("md-icon", { staticClass: "md-primary" }, [
                    _vm._v("print")
                  ]),
                  _vm._v("Print\n\t\t\t")
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
      _c("demo-printable")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/printables/Demo.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/printables/Demo.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Demo_vue_vue_type_template_id_a245482a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demo.vue?vue&type=template&id=a245482a& */ "./resources/js/components/printables/Demo.vue?vue&type=template&id=a245482a&");
/* harmony import */ var _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo.vue?vue&type=script&lang=js& */ "./resources/js/components/printables/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Demo_vue_vue_type_template_id_a245482a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Demo_vue_vue_type_template_id_a245482a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/printables/Demo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/printables/Demo.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/printables/Demo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/printables/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/printables/Demo.vue?vue&type=template&id=a245482a&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/printables/Demo.vue?vue&type=template&id=a245482a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_a245482a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=template&id=a245482a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/printables/Demo.vue?vue&type=template&id=a245482a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_a245482a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_a245482a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/demo/Demo.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/dashboard/demo/Demo.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Demo_vue_vue_type_template_id_120c05c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demo.vue?vue&type=template&id=120c05c5& */ "./resources/js/views/dashboard/demo/Demo.vue?vue&type=template&id=120c05c5&");
/* harmony import */ var _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/demo/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Demo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/dashboard/demo/Demo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Demo_vue_vue_type_template_id_120c05c5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Demo_vue_vue_type_template_id_120c05c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/demo/Demo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/demo/Demo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/dashboard/demo/Demo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/demo/Demo.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard/demo/Demo.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Demo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/dashboard/demo/Demo.vue?vue&type=template&id=120c05c5&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/dashboard/demo/Demo.vue?vue&type=template&id=120c05c5& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_120c05c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=template&id=120c05c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/demo/Demo.vue?vue&type=template&id=120c05c5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_120c05c5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_120c05c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);