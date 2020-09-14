(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
//
//
//
//
//
//
//
//
//
//
//
//
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
    isLetter: {
      type: Boolean,
      "default": false
    },
    isDocument: {
      type: Boolean,
      "default": false
    },
    letterType: {
      "default": null
    },
    documentType: {
      "default": null
    },
    copyTransmitted: {
      type: Array
    },
    forPerson: {
      type: String
    },
    establishment: {
      type: String
    },
    object: {
      type: String
    },
    confidentiality: {
      type: String
    },
    status: {
      type: String
    },
    editorData: {
      type: String
    },
    themeLogo: {
      type: String
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    dateString: function dateString() {
      var d = new Date();
      var datestring = ("0" + d.getDate()).slice(-2) + " / " + ("0" + (d.getMonth() + 1)).slice(-2) + " / " + d.getFullYear();
      return datestring;
    },
    dateHoursString: function dateHoursString() {
      var d = new Date();
      var datestring = ("0" + d.getDate()).slice(-2) + " / " + ("0" + (d.getMonth() + 1)).slice(-2) + " / " + d.getFullYear() + " à " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
      return datestring;
    },
    getThemeLogo: function getThemeLogo() {
      return this.themeLogo ? this.themeLogo : "https://upload.wikimedia.org/wikipedia/commons/1/1b/Coat_of_arms_of_the_Democratic_Republic_of_the_Congo.svg";
    }
  },
  methods: {
    launchPrint: function launchPrint() {
      print_js__WEBPACK_IMPORTED_MODULE_0___default()({
        printable: "printable",
        type: "html",
        maxWidth: 900,
        targetStyles: ["*"]
      });
    }
  },
  mounted: function mounted() {}
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
      autocomplete: {
        "for": ["Mr le ministre", "Adjoit ministre", "Secretaire"],
        establishment: ["Ministère des Finances", "Ministères de L'Urbanisme", "Ministère de l'économie politique"],
        object: ["Test demo", "Interaction d'interet", "Mise en place du nouveau régime"]
      },
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
    },
    personsCopyTransmited: function personsCopyTransmited() {
      var persons = [];

      for (var i = 0; i <= 13; i++) {
        persons.push("Person Exemple ".concat(i));
      }

      return persons;
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
    selectAllPerson: function selectAllPerson() {
      this.steper.first.chosenDatas.letter.copyTransmitted = this.personsCopyTransmited;
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
          constraints.object = {
            presence: {
              allowEmpty: false
            }
          };
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
        this.setDone(null, id);
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
        this.setDone(null, id);
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
      if (this.firstStepCheck(false) && this.secondStepCheck(false) && this.thirdStepCheck(false)) {
        this.$refs.demoPrintable.launchPrint();
      }

      this.printeredData.dialogPreview = false;
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/printables/Demo.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/printables/Demo.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#printable {\n\theight: 100%;\n\twidth: 100%;\n}\n#printable * {\n\tcolor: #171717;\n\tfont-family: serif;\n}\n#printable .background-theme {\n\topacity: 0.1;\n\tposition: absolute;\n\tz-index: 0;\n\tmargin: auto;\n\tmargin-top: 35vh;\n\twidth: 100%;\n}\n#printable .content-text {\n\tposition: relative;\n\tz-index: 10;\n\twidth: 100%;\n}\n#printable .header-left-side {\n\tposition: relative;\n}\n#printable .header-left-side > .header-title {\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-size: 0.95em;\n}\n#printable .header-left-side > .container-header-logo {\n}\n#printable .header-left-side > .container-header-logo > .header-logo {\n\tz-index: -1;\n\theight: 92px;\n}\n#printable .header-right-side {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tfont-size: 1em;\n}\n#printable .simple-letter-section > .title-section {\n\tpadding-bottom: 5px;\n\tborder-bottom: 4px solid;\n}\n#printable .copy-transmited-section > .title-section {\n\ttext-transform: uppercase;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-weight: 700;\n}\n#printable .copy-transmited-section > .subtitle-section {\n\tfont-weight: 700;\n}\n#printable .list-group-person {\n\tfont-size: 1.25em;\n\tmargin-left: 20px;\n\tpadding: 0 0 20px;\n\tborder-bottom: 2px dashed;\n}\n#printable .list-group-person > .list-item-person {\n\tpadding-left: 20px;\n}\n#printable .title_document h2 {\n\tfont-size: 1.8em;\n\ttext-transform: uppercase;\n\ttext-align: center;\n\tpadding-bottom: 5px;\n\tborder-bottom: 4px solid;\n\tdisplay: inline-block;\n\tmargin-bottom: 20px;\n}\n#printable .object-title,\n#printable .for-person {\n\tvertical-align: text-top;\n}\n#printable .editor-datas {\n\tfont-size: 1.5em;\n\tline-height: 35px;\n\ttext-align: justify;\n}\n#printable .editor-datas p,\n#printable .editor-datas a,\n#printable .editor-datas li {\n\tfont-size: inherit;\n}\n#printable .end-page {\n\topacity: 1;\n\tmargin-top: 80px;\n\ttext-transform: uppercase;\n\tword-spacing: 0.3vw;\n}\n", ""]);

// exports


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/printables/Demo.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/printables/Demo.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/printables/Demo.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
    _c(
      "main",
      {
        staticClass: "position-relative m-0 p-0 pt-2",
        attrs: { id: "printable" }
      },
      [
        _c("img", {
          staticClass: "background-theme",
          attrs: { src: _vm.getThemeLogo, alt: "theme", width: "1200" }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-text" },
          [
            _c("header", [
              _c(
                "div",
                { staticClass: "header-left-side d-inline-block text-center" },
                [
                  _c("div", { staticClass: "header-title m-0 p-0 pb-1" }, [
                    _c("div", [_vm._v("République démocratique du congo")]),
                    _vm._v(" "),
                    _c("div", [_vm._v(_vm._s(_vm.establishment))])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "container-header-logo py-2" }, [
                    _c("img", {
                      staticClass: "header-logo",
                      attrs: { src: _vm.getThemeLogo, alt: "logo header" }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "header-right-side" }, [
                _c("div", [
                  _vm._v("Kinshasa le " + _vm._s(_vm.dateHoursString))
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("b", [
                    _vm._v(
                      "This document is " +
                        _vm._s(_vm.status) +
                        " & " +
                        _vm._s(_vm.confidentiality)
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.isLetter
              ? [
                  _vm.letterType != null
                    ? [
                        _vm.letterType != "Copy Transmitted"
                          ? [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "simple-letter-section text-center mb-4"
                                },
                                [
                                  _c(
                                    "h2",
                                    {
                                      staticClass:
                                        "title-section text-uppercase d-inline-block"
                                    },
                                    [
                                      _vm._v(
                                        "Lettre ouvert à " +
                                          _vm._s(_vm.forPerson)
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          : [
                              _c("div", { staticClass: "row mb-4" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "offset-6 col-6 copy-transmited-section"
                                  },
                                  [
                                    _c("h4", { staticClass: "title-section" }, [
                                      _c("b", [
                                        _vm._v(
                                          "N° CAB/MIN-UH/ " +
                                            _vm._s(_vm.dateString)
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(0),
                                    _vm._v(" "),
                                    _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "list-group-person list-group"
                                      },
                                      _vm._l(_vm.copyTransmitted, function(
                                        item,
                                        index
                                      ) {
                                        return _c(
                                          "li",
                                          {
                                            key: index,
                                            staticClass:
                                              "list-item-person ml-0 mb-2"
                                          },
                                          [
                                            _vm._v(
                                              "Son exelance " + _vm._s(item)
                                            )
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row mb-4" }, [
                                _c("div", { staticClass: "col-6" }, [
                                  _c("h4", { staticClass: "object-title" }, [
                                    _vm._v("Objet : " + _vm._s(_vm.object))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-uppercase" },
                                  [
                                    _c("h4", { staticClass: "for-person" }, [
                                      _vm._v("à " + _vm._s(_vm.forPerson))
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(1)
                                  ]
                                )
                              ])
                            ]
                      ]
                    : _vm._e()
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.isDocument
              ? [
                  _vm.documentType != "Official press release"
                    ? _c("div", { staticClass: "text-center title_document" }, [
                        _c("h2", [_vm._v("Communiqué officiel N°36 DGI/DG/CO")])
                      ])
                    : _c("div", { staticClass: "text-center title_document" }, [
                        _c("h2", [
                          _vm._v(
                            "Rapport officiel destiné au " +
                              _vm._s(_vm.forPerson)
                          )
                        ])
                      ])
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "editor-datas" }, [
              _vm.isLetter
                ? _c("p", { staticClass: "pb-0 mb-0" }, [
                    _vm._v(_vm._s(_vm.forPerson))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("p", { domProps: { innerHTML: _vm._s(_vm.editorData) } })
            ]),
            _vm._v(" "),
            _c("footer", [
              _vm.isLetter
                ? _c("h4", { staticClass: "text-right end-page" }, [
                    _c("b", [
                      _vm._v(
                        _vm._s(_vm.isLetter ? "Lettre" : "Documment") +
                          " adressé à " +
                          _vm._s(_vm.forPerson)
                      )
                    ]),
                    _vm._v(" "),
                    _c("br")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isDocument
                ? _c("h4", { staticClass: "text-right end-page" }, [
                    _vm._v(
                      "\n\t\t\t\t\tFais à kinshasa le " +
                        _vm._s(_vm.dateString) +
                        "\n\t\t\t\t\t"
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticStyle: { "margin-top": "20px" } }, [
                      _vm._v(_vm._s(_vm.forPerson))
                    ])
                  ])
                : _vm._e()
            ])
          ],
          2
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "subtitle-section p-0 m-0 pb-2" }, [
      _c("b", [
        _c("u", [_vm._v("Transmis")]),
        _vm._v(" copie pour information à :\n\t\t\t\t\t\t\t\t\t")
      ])
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
                                    [_vm._v("Documents")]
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
                                            "md-options":
                                              _vm.autocomplete.object
                                          },
                                          model: {
                                            value:
                                              _vm.steper.first.chosenDatas
                                                .object,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.steper.first.chosenDatas,
                                                "object",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "steper.first.chosenDatas.object"
                                          }
                                        },
                                        [_c("label", [_vm._v("Object")])]
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
                                            _vm._l(
                                              _vm.personsCopyTransmited,
                                              function(item) {
                                                return _c(
                                                  "md-option",
                                                  {
                                                    key: item,
                                                    attrs: { value: item }
                                                  },
                                                  [_vm._v(_vm._s(item))]
                                                )
                                              }
                                            ),
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "md-helper-text" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "md-simple text-dark",
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.selectAllPerson()
                                                    }
                                                  }
                                                },
                                                [_vm._v("Select All")]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
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
                                      [_vm._v("Model of document")]
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
                          "md-autocomplete",
                          {
                            attrs: { "md-options": _vm.autocomplete.for },
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
                          },
                          [
                            _c(
                              "label",
                              [
                                _c("md-icon", [_vm._v("account_box")]),
                                _vm._v(" For")
                              ],
                              1
                            )
                          ]
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
                          "md-autocomplete",
                          {
                            attrs: {
                              "md-options": _vm.autocomplete.establishment
                            },
                            model: {
                              value: _vm.steper.first.chosenDatas.establishment,
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
                          },
                          [
                            _c(
                              "label",
                              [
                                _c("md-icon", [_vm._v("corporate_fare")]),
                                _vm._v(" Establishment")
                              ],
                              1
                            )
                          ]
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
                      _c("div", { staticClass: "md-size-100 mb-3" }, [
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
                                  _vm._s(_vm.steper.first.chosenDatas.chosen) +
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
                        _c(
                          "div",
                          { staticClass: "md-layout" },
                          _vm._l(
                            _vm.steper.first.chosenDatas.letter.copyTransmitted,
                            function(item, index) {
                              return _c(
                                "span",
                                {
                                  key: index,
                                  staticClass: "mb-2 mr-2 p-2 bg-light"
                                },
                                [_vm._v(_vm._s(item))]
                              )
                            }
                          ),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "md-size-100 mb-3" }, [
                        _c(
                          "legend",
                          { staticClass: "md-subheading mb-0 pb-2" },
                          [
                            _vm._v("\n\t\t\t\t\t\t\tObject :\n\t\t\t\t\t\t\t"),
                            _c("span", { staticClass: "bg-light p-2" }, [
                              _vm._v(
                                _vm._s(_vm.steper.first.chosenDatas.object)
                              )
                            ])
                          ]
                        )
                      ])
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
                      _vm._v("For :\n\t\t\t\t\t\t"),
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
                      _vm._v("Establishment :\n\t\t\t\t\t\t"),
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
                  _c(
                    "legend",
                    { staticClass: "md-subheading mb-0 pb-2" },
                    [
                      _c("md-icon", [_vm._v("security")]),
                      _vm._v("Confidentiality :\n\t\t\t\t\t\t"),
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
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "md-button",
                {
                  staticClass: "md-primary",
                  on: {
                    click: function($event) {
                      return _vm.launchPrint()
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
      _c("demo-printable", {
        ref: "demoPrintable",
        attrs: {
          isLetter: _vm.isLetter,
          isDocument: _vm.isDocument,
          letterType: _vm.steper.first.chosenDatas.letter.letterType,
          documentType: _vm.steper.first.chosenDatas.document.documentType,
          copyTransmitted: _vm.steper.first.chosenDatas.letter.copyTransmitted,
          forPerson: _vm.steper.first.chosenDatas.for,
          establishment: _vm.steper.first.chosenDatas.establishment,
          object: _vm.steper.first.chosenDatas.object,
          confidentiality: _vm.steper.first.chosenDatas.confidentiality,
          status: _vm.steper.first.chosenDatas.status,
          editorData: _vm.steper.second.editorData,
          themeLogo: _vm.steper.third.themeSelected
        }
      })
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
/* empty/unused harmony star reexport *//* harmony import */ var _Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Demo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/printables/Demo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/printables/Demo.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/printables/Demo.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/printables/Demo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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