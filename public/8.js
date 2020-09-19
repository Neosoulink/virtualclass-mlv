(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Signup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/auth */ "./resources/js/helpers/auth.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_progess_SuccessCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/progess/SuccessCheck */ "./resources/js/components/progess/SuccessCheck.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  name: "Signup",
  components: {
    SuccessCheck: _components_progess_SuccessCheck__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      loading: false,
      form: {
        email: "",
        username: "",
        password: "",
        password_confirmation: ""
      },
      error: null
    };
  },
  computed: {},
  methods: {
    newUser: function newUser() {
      var _this = this;

      this.loading = true;
      var data = this.form;
      var constraint = {
        email: {
          presence: {
            allowEmpty: false
          }
        },
        username: {
          presence: {
            allowEmpty: false
          },
          length: {
            minimum: 5
          }
        },
        password: {
          presence: {
            allowEmpty: false
          },
          length: {
            minimum: 8
          }
        },
        password_confirmation: {
          equality: "password"
        }
      };
      var validation = validate_js__WEBPACK_IMPORTED_MODULE_1___default()(data, constraint);

      if (!validation) {
        Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_0__["signup"])(this.$data.form).then(function (res) {
          _this.$store.commit("user/LOGIN_SUCCESS", res);

          setTimeout(function () {
            _this.$router.push({
              path: "/dashboard"
            });
          }, 2000);
          console.log(res);
        })["catch"](function (error) {
          _this.$store.commit("user/LOGIN_FAILED", {
            error: error
          });

          _this.loading = false;
          console.log(error);
        });
      } else {
        console.log(validation);
        this.loading = false;
      }
    }
  }
}, "computed", {
  authError: function authError() {
    return this.$store.getters["user/authError"];
  },
  isLoggedIn: function isLoggedIn() {
    return this.$store.getters["user/isLoggedIn"];
  }
}));

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Signup.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centered-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  min-height: 100vh;\n}\n.centered-container .title {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.centered-container .title img {\n  margin-bottom: 16px;\n  max-width: 80px;\n}\n.centered-container .actions .md-button {\n  margin: 0;\n}\n.centered-container .form {\n  margin-bottom: 60px;\n}\n.centered-container .background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 0;\n}\n.centered-container .md-content {\n  z-index: 1;\n  padding: 40px;\n  width: 100%;\n  max-width: 400px;\n  position: relative;\n}\n.centered-container .loading-overlay {\n  z-index: 10;\n  top: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Signup.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=template&id=cfe84212&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Signup.vue?vue&type=template&id=cfe84212& ***!
  \****************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "centered-container",
      attrs: { method: "post" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.newUser($event)
        }
      }
    },
    [
      _c("md-content", { staticClass: "md-elevation-3" }, [
        _c("div", { staticClass: "title" }, [
          _c("div", { staticClass: "md-title" }, [_vm._v("Sign up")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form" },
          [
            _c(
              "md-field",
              [
                _c("label", [_vm._v("E-mail")]),
                _vm._v(" "),
                _c("md-input", {
                  attrs: {
                    type: "email",
                    name: "email",
                    autocomplete: "email",
                    autofocus: ""
                  },
                  model: {
                    value: _vm.form.email,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "email", $$v)
                    },
                    expression: "form.email"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "md-field",
              [
                _c("label", [_vm._v("Username")]),
                _vm._v(" "),
                _c("md-input", {
                  attrs: {
                    name: "name",
                    autocomplete: "username",
                    autofocus: ""
                  },
                  model: {
                    value: _vm.form.username,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "username", $$v)
                    },
                    expression: "form.username"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "md-field",
              { attrs: { "md-has-password": "" } },
              [
                _c("label", [_vm._v("Password")]),
                _vm._v(" "),
                _c("md-input", {
                  attrs: { autocomplete: "current-password", type: "password" },
                  model: {
                    value: _vm.form.password,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "password", $$v)
                    },
                    expression: "form.password"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "md-field",
              { attrs: { "md-has-password": "" } },
              [
                _c("label", [_vm._v("confirm-Password")]),
                _vm._v(" "),
                _c("md-input", {
                  attrs: { autocomplete: "current-password", type: "password" },
                  model: {
                    value: _vm.form.password_confirmation,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "password_confirmation", $$v)
                    },
                    expression: "form.password_confirmation"
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
            staticClass: "actions md-layout md-alignment-center-space-between"
          },
          [
            _c(
              "md-button",
              { staticClass: "md-link", attrs: { to: "/" } },
              [
                _c("md-icon", [_vm._v("arrow_back")]),
                _vm._v("Go home\n\t\t\t")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "md-button",
              {
                staticClass: "md-raised md-primary",
                attrs: { type: "submit" }
              },
              [_vm._v("Sign up")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "md-layout mt-4" }, [
          _c(
            "p",
            [
              _vm._v("\n\t\t\t\tAlredy have an account ?\n\t\t\t\t"),
              _c("router-link", { attrs: { to: "/login" } }, [
                _vm._v("Login now !")
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _vm.authError
          ? _c(
              "div",
              { staticClass: "text-danger pt-3", attrs: { role: "alert" } },
              [_c("strong", [_vm._v(_vm._s(_vm.authError))])]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.loading
          ? _c(
              "div",
              { staticClass: "loading-overlay" },
              [
                _vm.isLoggedIn
                  ? _c("success-check")
                  : _c("md-progress-spinner", {
                      attrs: { "md-mode": "indeterminate", "md-stroke": 2 }
                    })
              ],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "background" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Signup.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Signup.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.vue?vue&type=template&id=cfe84212& */ "./resources/js/views/Signup.vue?vue&type=template&id=cfe84212&");
/* harmony import */ var _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.vue?vue&type=script&lang=js& */ "./resources/js/views/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Signup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Signup.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Signup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Signup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Signup.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Signup.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Signup.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Signup.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Signup.vue?vue&type=template&id=cfe84212&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Signup.vue?vue&type=template&id=cfe84212& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=template&id=cfe84212& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=template&id=cfe84212&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);