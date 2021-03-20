(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/users/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var toLower = function toLower(text) {
  return text.toString().toLowerCase();
};

var searchByName = function searchByName(items, term) {
  if (term) {
    return items.filter(function (item) {
      return toLower(item.name).includes(toLower(term));
    });
  }

  return items;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TableSearch",
  data: function data() {
    return {
      search: null,
      searched: [],
      users: [{
        id: 1,
        name: "Shawna Dubbin",
        email: "sdubbin0@geocities.com",
        gender: "Male",
        title: "Assistant Media Planner"
      }, {
        id: 2,
        name: "Odette Demageard",
        email: "odemageard1@spotify.com",
        gender: "Female",
        title: "Account Coordinator"
      }, {
        id: 3,
        name: "Vera Taleworth",
        email: "vtaleworth2@google.ca",
        gender: "Male",
        title: "Community Outreach Specialist"
      }, {
        id: 4,
        name: "Lonnie Izkovitz",
        email: "lizkovitz3@youtu.be",
        gender: "Female",
        title: "Operator"
      }, {
        id: 5,
        name: "Thatcher Stave",
        email: "tstave4@reference.com",
        gender: "Male",
        title: "Software Test Engineer III"
      }, {
        id: 6,
        name: "Karim Chipping",
        email: "kchipping5@scribd.com",
        gender: "Female",
        title: "Safety Technician II"
      }, {
        id: 7,
        name: "Helge Holyard",
        email: "hholyard6@howstuffworks.com",
        gender: "Female",
        title: "Internal Auditor"
      }, {
        id: 8,
        name: "Rod Titterton",
        email: "rtitterton7@nydailynews.com",
        gender: "Male",
        title: "Technical Writer"
      }, {
        id: 9,
        name: "Gawen Applewhite",
        email: "gapplewhite8@reverbnation.com",
        gender: "Female",
        title: "GIS Technical Architect"
      }, {
        id: 10,
        name: "Nero Mulgrew",
        email: "nmulgrew9@plala.or.jp",
        gender: "Female",
        title: "Staff Scientist"
      }, {
        id: 11,
        name: "Cybill Rimington",
        email: "crimingtona@usnews.com",
        gender: "Female",
        title: "Assistant Professor"
      }, {
        id: 12,
        name: "Maureene Eggleson",
        email: "megglesonb@elpais.com",
        gender: "Male",
        title: "Recruiting Manager"
      }, {
        id: 13,
        name: "Cortney Caulket",
        email: "ccaulketc@cbsnews.com",
        gender: "Male",
        title: "Safety Technician IV"
      }, {
        id: 14,
        name: "Selig Swynfen",
        email: "sswynfend@cpanel.net",
        gender: "Female",
        title: "Environmental Specialist"
      }, {
        id: 15,
        name: "Ingar Raggles",
        email: "iragglese@cbc.ca",
        gender: "Female",
        title: "VP Sales"
      }, {
        id: 16,
        name: "Karmen Mines",
        email: "kminesf@topsy.com",
        gender: "Male",
        title: "Administrative Officer"
      }, {
        id: 17,
        name: "Salome Judron",
        email: "sjudrong@jigsy.com",
        gender: "Male",
        title: "Staff Scientist"
      }, {
        id: 18,
        name: "Clarinda Marieton",
        email: "cmarietonh@theatlantic.com",
        gender: "Male",
        title: "Paralegal"
      }, {
        id: 19,
        name: "Paxon Lotterington",
        email: "plotteringtoni@netvibes.com",
        gender: "Female",
        title: "Marketing Assistant"
      }, {
        id: 20,
        name: "Maura Thoms",
        email: "mthomsj@webeden.co.uk",
        gender: "Male",
        title: "Actuary"
      }]
    };
  },
  methods: {
    newUser: function newUser() {
      window.alert("Noop");
    },
    searchOnTable: function searchOnTable() {
      this.searched = searchByName(this.users, this.search);
    }
  },
  created: function created() {
    this.searched = this.users;
  },
  mounted: function mounted() {
    axios.get("/api/users").then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      console.warn(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/users/index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-field[data-v-076fcba1] {\n  max-width: 300px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/users/index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/index.vue?vue&type=template&id=076fcba1&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/users/index.vue?vue&type=template&id=076fcba1&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "md-table",
        {
          attrs: {
            "md-sort": "name",
            "md-sort-order": "asc",
            "md-card": "",
            "md-fixed-header": ""
          },
          scopedSlots: _vm._u([
            {
              key: "md-table-row",
              fn: function(ref) {
                var item = ref.item
                return _c(
                  "md-table-row",
                  {},
                  [
                    _c(
                      "md-table-cell",
                      {
                        attrs: {
                          "md-label": "ID",
                          "md-sort-by": "id",
                          "md-numeric": ""
                        }
                      },
                      [_vm._v(_vm._s(item.id))]
                    ),
                    _vm._v(" "),
                    _c(
                      "md-table-cell",
                      { attrs: { "md-label": "Name", "md-sort-by": "name" } },
                      [_vm._v(_vm._s(item.name))]
                    ),
                    _vm._v(" "),
                    _c(
                      "md-table-cell",
                      { attrs: { "md-label": "Email", "md-sort-by": "email" } },
                      [_vm._v(_vm._s(item.email))]
                    ),
                    _vm._v(" "),
                    _c(
                      "md-table-cell",
                      {
                        attrs: { "md-label": "Gender", "md-sort-by": "gender" }
                      },
                      [_vm._v(_vm._s(item.gender))]
                    ),
                    _vm._v(" "),
                    _c(
                      "md-table-cell",
                      {
                        attrs: {
                          "md-label": "Job Title",
                          "md-sort-by": "title"
                        }
                      },
                      [_vm._v(_vm._s(item.title))]
                    )
                  ],
                  1
                )
              }
            }
          ]),
          model: {
            value: _vm.searched,
            callback: function($$v) {
              _vm.searched = $$v
            },
            expression: "searched"
          }
        },
        [
          _c(
            "md-table-toolbar",
            [
              _c("div", { staticClass: "md-toolbar-section-start" }, [
                _c("h1", { staticClass: "md-title" }, [_vm._v("Users")])
              ]),
              _vm._v(" "),
              _c(
                "md-field",
                {
                  staticClass: "md-toolbar-section-end",
                  attrs: { "md-clearable": "" }
                },
                [
                  _c("md-input", {
                    attrs: { placeholder: "Search by name..." },
                    on: { input: _vm.searchOnTable },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
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
            "md-table-empty-state",
            {
              attrs: {
                "md-label": "No users found",
                "md-description":
                  "No user found for this '" +
                  _vm.search +
                  "' query. Try a different search term or create a new user."
              }
            },
            [
              _c(
                "md-button",
                {
                  staticClass: "md-primary md-raised",
                  on: { click: _vm.newUser }
                },
                [_vm._v("Create New User")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/dashboard/users/index.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/dashboard/users/index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_076fcba1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=076fcba1&scoped=true& */ "./resources/js/views/dashboard/users/index.vue?vue&type=template&id=076fcba1&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_076fcba1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true& */ "./resources/js/views/dashboard/users/index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_076fcba1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_076fcba1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "076fcba1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/users/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/dashboard/users/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/users/index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/users/index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_076fcba1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/index.vue?vue&type=style&index=0&id=076fcba1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_076fcba1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_076fcba1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_076fcba1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_076fcba1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_076fcba1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/dashboard/users/index.vue?vue&type=template&id=076fcba1&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/users/index.vue?vue&type=template&id=076fcba1&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_076fcba1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=076fcba1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/users/index.vue?vue&type=template&id=076fcba1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_076fcba1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_076fcba1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);