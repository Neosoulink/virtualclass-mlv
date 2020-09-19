(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Content.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/Content.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    container: {
      type: Boolean,
      "default": true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNavbar.vue */ "./resources/js/views/dashboard/Layout/TopNavbar.vue");
/* harmony import */ var _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentFooter.vue */ "./resources/js/views/dashboard/Layout/ContentFooter.vue");
/* harmony import */ var _Content_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.vue */ "./resources/js/views/dashboard/Layout/Content.vue");
/* harmony import */ var _MobileMenu_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MobileMenu.vue */ "./resources/js/views/dashboard/Layout/MobileMenu.vue");
/* harmony import */ var _Extra_FixedPlugin_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Extra/FixedPlugin.vue */ "./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    TopNavbar: _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardContent: _Content_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContentFooter: _ContentFooter_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    MobileMenu: _MobileMenu_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    FixedPlugin: _Extra_FixedPlugin_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: __webpack_require__(/*! ../../../assets/img/vc_logo_0.jpg */ "./resources/js/assets/img/vc_logo_0.jpg")
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_github_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-github-buttons */ "./node_modules/vue-github-buttons/dist/vue-github-buttons.es.js");
/* harmony import */ var vue_github_buttons_dist_vue_github_buttons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-github-buttons/dist/vue-github-buttons.css */ "./node_modules/vue-github-buttons/dist/vue-github-buttons.css");
/* harmony import */ var vue_github_buttons_dist_vue_github_buttons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_github_buttons_dist_vue_github_buttons_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_github_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
  useCache: true
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      documentationLink: "https://creativetimofficial.github.io/vue-material-dashboard/documentation",
      shareUrl: "https://www.creative-tim.com/product/vue-material-dashboard",
      buyUrl: "",
      freeUrl: "https://www.creative-tim.com/product/vue-material-dashboard",
      isOpen: false,
      sidebarColors: [{
        color: "purple",
        active: false
      }, {
        color: "blue",
        active: false
      }, {
        color: "green",
        active: true
      }, {
        color: "orange",
        active: false
      }, {
        color: "red",
        active: false
      }],
      sidebarImages: [{
        image: __webpack_require__(/*! ../../../../assets/img/sidebar-1.jpg */ "./resources/js/assets/img/sidebar-1.jpg"),
        active: false
      }, {
        image: __webpack_require__(/*! ../../../../assets/img/sidebar-2.jpg */ "./resources/js/assets/img/sidebar-2.jpg"),
        active: true
      }, {
        image: __webpack_require__(/*! ../../../../assets/img/sidebar-3.jpg */ "./resources/js/assets/img/sidebar-3.jpg"),
        active: false
      }, {
        image: __webpack_require__(/*! ../../../../assets/img/sidebar-4.jpg */ "./resources/js/assets/img/sidebar-4.jpg"),
        active: false
      }]
    };
  },
  methods: {
    toggleDropDown: function toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown: function closeDropDown() {
      this.isOpen = false;
    },
    toggleList: function toggleList(list, itemToActivate) {
      list.forEach(function (listItem) {
        listItem.active = false;
      });
      itemToActivate.active = true;
    },
    updateValue: function updateValue(name, val) {
      console.log(name);
      this.$emit("update:".concat(name), val);
    },
    changeSidebarBackground: function changeSidebarBackground(item) {
      this.$emit("update:color", item.color);
      this.toggleList(this.sidebarColors, item);
    },
    changeSidebarImage: function changeSidebarImage(item) {
      this.$emit("update:image", item.image);
      this.toggleList(this.sidebarImages, item);
    },
    logout: function logout() {
      this.$store.commit("user/LOGOUT");
      this.$router.push("/login");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: ["Jim Halpert", "Dwight Schrute", "Michael Scott", "Pam Beesly", "Angela Martin", "Kelly Kapoor", "Ryan Howard", "Kevin Malone"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      selectedEmployee: null,
      employees: ["Jim Halpert", "Dwight Schrute", "Michael Scott", "Pam Beesly", "Angela Martin", "Kelly Kapoor", "Ryan Howard", "Kevin Malone"]
    };
  },
  methods: {
    toggleSidebar: function toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters['user/currentUser'];
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Content.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/Content.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.1s;\n}\n.fade-enter,\n  .fade-leave-to\n    /* .fade-leave-active in <2.1.8 */\n\n {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.centered-row {\r\n\tdisplay: flex;\r\n\theight: 100%;\r\n\talign-items: center;\n}\n.button-container .btn {\r\n\tmargin-right: 10px;\n}\n.centered-buttons {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Content.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/Content.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Content.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FixedPlugin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Content.vue?vue&type=template&id=f1435424&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/Content.vue?vue&type=template&id=f1435424& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "transition",
    { attrs: { name: "fade", mode: "out-in" } },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=template&id=42f36cae&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=template&id=42f36cae& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("footer", { staticClass: "footer" }, [
    _c(
      "div",
      {
        class: _vm.container
          ? "container"
          : "d-flex align-content-between justify-content-between px-4"
      },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "copyright text-center" }, [
          _vm._v("\n      © " + _vm._s(new Date().getFullYear()) + "\n      "),
          _c("a", { attrs: { href: "javascript:void(0)", target: "_blank" } }, [
            _vm._v("VirtualClass")
          ]),
          _vm._v(", your secure virtual classor "),
          _c("i", { staticClass: "fa fa-star star" })
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("ul", [
        _c("li", [
          _c("a", { attrs: { href: "https://github.com/Neosoulink" } }, [
            _vm._v("\n            About\n          ")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=template&id=023e4cd3&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=template&id=023e4cd3& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrapper", class: { "nav-open": _vm.$sidebar.showSidebar } },
    [
      _c("notifications"),
      _vm._v(" "),
      _c(
        "side-bar",
        {
          attrs: {
            "sidebar-item-color": _vm.sidebarBackground,
            "sidebar-background-image": _vm.sidebarBackgroundImage,
            title: "VirtualClass",
            icon: _vm.sidebarBackgroundImage
          }
        },
        [
          _c("mobile-menu", { attrs: { slot: "content" }, slot: "content" }),
          _vm._v(" "),
          _c(
            "sidebar-link",
            { attrs: { to: { name: "dashboard" } } },
            [
              _c("md-icon", [_vm._v("dashboard")]),
              _vm._v(" "),
              _c("p", [_vm._v("Dashboard")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "sidebar-link",
            { attrs: { to: { name: "dashboard-creation" } } },
            [
              _c("md-icon", [_vm._v("create_new_folder")]),
              _vm._v(" "),
              _c("p", [_vm._v("Creation")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "sidebar-link",
            { attrs: { to: "chart" } },
            [
              _c("md-icon", [_vm._v("pie_chart")]),
              _vm._v(" "),
              _c("p", [_vm._v("Management")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "sidebar-link",
            { attrs: { to: "user" } },
            [
              _c("md-icon", [_vm._v("person")]),
              _vm._v(" "),
              _c("p", [_vm._v("My Profile")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "sidebar-link",
            { attrs: { to: { name: "dashboard-demo" } } },
            [
              _c("md-icon", [_vm._v("star")]),
              _vm._v(" "),
              _c("p", [_vm._v("Demo")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "sidebar-link",
            { attrs: { to: { name: "home" } } },
            [
              _c("md-icon", [_vm._v("arrow_back")]),
              _vm._v(" "),
              _c("p", [_vm._v("Go Home")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-panel" },
        [
          _c("top-navbar"),
          _vm._v(" "),
          _c("fixed-plugin", {
            attrs: {
              color: _vm.sidebarBackground,
              image: _vm.sidebarBackgroundImage
            },
            on: {
              "update:color": function($event) {
                _vm.sidebarBackground = $event
              },
              "update:image": function($event) {
                _vm.sidebarBackgroundImage = $event
              }
            }
          }),
          _vm._v(" "),
          _c("dashboard-content"),
          _vm._v(" "),
          !_vm.$route.meta.hideFooter ? _c("content-footer") : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=template&id=c7268446&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=template&id=c7268446& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.closeDropDown,
          expression: "closeDropDown"
        }
      ],
      staticClass: "fixed-plugin"
    },
    [
      _c(
        "div",
        { staticClass: "dropdown show-dropdown", class: { show: _vm.isOpen } },
        [
          _c("a", { attrs: { "data-toggle": "dropdown" } }, [
            _c("i", {
              staticClass: "fa fa-cog fa-2x",
              on: { click: _vm.toggleDropDown }
            })
          ]),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "dropdown-menu", class: { show: _vm.isOpen } },
            [
              _c("li", { staticClass: "header-title" }, [
                _vm._v("Sidebar Filters")
              ]),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "adjustments-line text-center" },
                _vm._l(_vm.sidebarColors, function(item) {
                  return _c("span", {
                    key: item.color,
                    staticClass: "badge filter",
                    class: ["badge-" + item.color, { active: item.active }],
                    attrs: { "data-color": item.color },
                    on: {
                      click: function($event) {
                        return _vm.changeSidebarBackground(item)
                      }
                    }
                  })
                }),
                0
              ),
              _vm._v(" "),
              _c("li", { staticClass: "header-title" }, [_vm._v("Images")]),
              _vm._v(" "),
              _vm._l(_vm.sidebarImages, function(item) {
                return _c(
                  "li",
                  {
                    key: item.image,
                    class: { active: item.active },
                    on: {
                      click: function($event) {
                        return _vm.changeSidebarImage(item)
                      }
                    }
                  },
                  [
                    _c("a", { staticClass: "img-holder switch-trigger" }, [
                      _c("img", { attrs: { src: item.image, alt: "" } })
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "text-center w-100" },
                [
                  _c(
                    "md-button",
                    { staticClass: "md-info", on: { click: _vm.logout } },
                    [_vm._v("Logout "), _c("md-icon", [_vm._v("logout")])],
                    1
                  )
                ],
                1
              )
            ],
            2
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=template&id=010d7288&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=template&id=010d7288& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("ul", { staticClass: "nav nav-mobile-menu" }, [
    _c(
      "li",
      [
        _c(
          "md-field",
          [
            _c("label", [_vm._v("Search")]),
            _vm._v(" "),
            _c("md-input", {
              attrs: { type: "text" },
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "li",
      [
        _c("drop-down", [
          _c(
            "a",
            {
              staticClass: "dropdown-toggle",
              attrs: { slot: "title", "data-toggle": "dropdown" },
              slot: "title"
            },
            [
              _c("i", { staticClass: "material-icons" }, [
                _vm._v("notifications")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "notification" }, [_vm._v("5")]),
              _vm._v(" "),
              _c("p", [_vm._v("Notifications")])
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-menu-right" }, [
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v("Mike John responded to your email")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v("You have 5 new tasks")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v("You're now friend with Andrew")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [
                _vm._v("Another Notification")
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [_vm._v("Another One")])
            ])
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "dropdown-toggle",
          attrs: { href: "#", "data-toggle": "dropdown" }
        },
        [
          _c("i", { staticClass: "material-icons" }, [_vm._v("dashboard")]),
          _vm._v(" "),
          _c("p", [_vm._v("Dashboard")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "dropdown-toggle",
          attrs: { href: "#", "data-toggle": "dropdown" }
        },
        [
          _c("i", { staticClass: "material-icons" }, [_vm._v("person")]),
          _vm._v(" "),
          _c("p", [_vm._v("Profile")])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=template&id=732cedfa&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=template&id=732cedfa& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "md-toolbar",
    { staticClass: "md-transparent", attrs: { "md-elevation": "0" } },
    [
      _c("div", { staticClass: "md-toolbar-row" }, [
        _c("div", { staticClass: "md-toolbar-section-start" }, [
          _c("h3", { staticClass: "md-title" }, [
            _vm._v(_vm._s(_vm.$route.name))
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "md-toolbar-section-end" },
          [
            _c(
              "md-button",
              {
                staticClass: "md-just-icon md-simple md-toolbar-toggle",
                class: { toggled: _vm.$sidebar.showSidebar },
                on: { click: _vm.toggleSidebar }
              },
              [
                _c("span", { staticClass: "icon-bar" }),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" }),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "md-collapse" },
              [
                _c(
                  "div",
                  { staticClass: "md-autocomplete" },
                  [
                    _c(
                      "md-autocomplete",
                      {
                        staticClass: "search",
                        attrs: { "md-options": _vm.employees },
                        model: {
                          value: _vm.selectedEmployee,
                          callback: function($$v) {
                            _vm.selectedEmployee = $$v
                          },
                          expression: "selectedEmployee"
                        }
                      },
                      [_c("label", [_vm._v("Search...")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "md-list",
                  [
                    _c("md-list-item", { attrs: { href: "#" } }, [
                      _c("i", { staticClass: "material-icons" }, [
                        _vm._v("dashboard")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "hidden-lg hidden-md" }, [
                        _vm._v("Dashboard")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("li", { staticClass: "md-list-item" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "md-list-item-router md-list-item-container md-button-clean dropdown",
                          attrs: { href: "#notifications" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "md-list-item-content" },
                            [
                              _c(
                                "drop-down",
                                [
                                  _c(
                                    "md-button",
                                    {
                                      staticClass:
                                        "md-button md-just-icon md-simple",
                                      attrs: {
                                        slot: "title",
                                        "data-toggle": "dropdown"
                                      },
                                      slot: "title"
                                    },
                                    [
                                      _c("md-icon", [_vm._v("notifications")]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        { staticClass: "notification" },
                                        [_vm._v("5")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        { staticClass: "hidden-lg hidden-md" },
                                        [_vm._v("Notifications")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    {
                                      staticClass:
                                        "dropdown-menu dropdown-menu-right"
                                    },
                                    [
                                      _c("li", [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v(
                                            "Mike John responded to your email"
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v("You have 5 new tasks")
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v(
                                            "You're now friend with Andrew"
                                          )
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v("Another Notification")
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _c("a", { attrs: { href: "#" } }, [
                                          _vm._v("Another One")
                                        ])
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.currentUser
                      ? _c("md-list-item", { attrs: { href: "#user" } }, [
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("person")
                          ]),
                          _vm._v(
                            " " + _vm._s(_vm.currentUser.email) + "\n          "
                          )
                        ])
                      : _vm._e()
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
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/img/sidebar-1.jpg":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/sidebar-1.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sidebar-1.jpg?23832d313db62da22b084cd4429ca606";

/***/ }),

/***/ "./resources/js/assets/img/sidebar-3.jpg":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/sidebar-3.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sidebar-3.jpg?3a54f53350195596fe1531495fcc65b8";

/***/ }),

/***/ "./resources/js/assets/img/sidebar-4.jpg":
/*!***********************************************!*\
  !*** ./resources/js/assets/img/sidebar-4.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sidebar-4.jpg?3b7e38ed4b9098a9ebcf977acec342eb";

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/Content.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/Content.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content_vue_vue_type_template_id_f1435424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=f1435424& */ "./resources/js/views/dashboard/Layout/Content.vue?vue&type=template&id=f1435424&");
/* harmony import */ var _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Layout/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/dashboard/Layout/Content.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Content_vue_vue_type_template_id_f1435424___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Content_vue_vue_type_template_id_f1435424___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Layout/Content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/Content.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/Content.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/Content.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/Content.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Content.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/Content.vue?vue&type=template&id=f1435424&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/Content.vue?vue&type=template&id=f1435424& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_f1435424___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=template&id=f1435424& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Content.vue?vue&type=template&id=f1435424&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_f1435424___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_f1435424___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/Layout/ContentFooter.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/ContentFooter.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentFooter_vue_vue_type_template_id_42f36cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentFooter.vue?vue&type=template&id=42f36cae& */ "./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=template&id=42f36cae&");
/* harmony import */ var _ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentFooter.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentFooter_vue_vue_type_template_id_42f36cae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContentFooter_vue_vue_type_template_id_42f36cae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Layout/ContentFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=template&id=42f36cae&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=template&id=42f36cae& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_42f36cae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFooter.vue?vue&type=template&id=42f36cae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/ContentFooter.vue?vue&type=template&id=42f36cae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_42f36cae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFooter_vue_vue_type_template_id_42f36cae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/Layout/DashboardLayout.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/DashboardLayout.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardLayout_vue_vue_type_template_id_023e4cd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=template&id=023e4cd3& */ "./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=template&id=023e4cd3&");
/* harmony import */ var _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashboardLayout_vue_vue_type_template_id_023e4cd3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashboardLayout_vue_vue_type_template_id_023e4cd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Layout/DashboardLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=template&id=023e4cd3&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=template&id=023e4cd3& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_023e4cd3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DashboardLayout.vue?vue&type=template&id=023e4cd3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/DashboardLayout.vue?vue&type=template&id=023e4cd3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_023e4cd3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_023e4cd3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FixedPlugin_vue_vue_type_template_id_c7268446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FixedPlugin.vue?vue&type=template&id=c7268446& */ "./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=template&id=c7268446&");
/* harmony import */ var _FixedPlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FixedPlugin.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FixedPlugin.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FixedPlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FixedPlugin_vue_vue_type_template_id_c7268446___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FixedPlugin_vue_vue_type_template_id_c7268446___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FixedPlugin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FixedPlugin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=template&id=c7268446&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=template&id=c7268446& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_template_id_c7268446___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FixedPlugin.vue?vue&type=template&id=c7268446& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/Extra/FixedPlugin.vue?vue&type=template&id=c7268446&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_template_id_c7268446___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_template_id_c7268446___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/Layout/MobileMenu.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/MobileMenu.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileMenu_vue_vue_type_template_id_010d7288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileMenu.vue?vue&type=template&id=010d7288& */ "./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=template&id=010d7288&");
/* harmony import */ var _MobileMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileMenu.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MobileMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileMenu_vue_vue_type_template_id_010d7288___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileMenu_vue_vue_type_template_id_010d7288___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Layout/MobileMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=template&id=010d7288&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=template&id=010d7288& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_template_id_010d7288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileMenu.vue?vue&type=template&id=010d7288& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/MobileMenu.vue?vue&type=template&id=010d7288&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_template_id_010d7288___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenu_vue_vue_type_template_id_010d7288___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/dashboard/Layout/TopNavbar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/TopNavbar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNavbar_vue_vue_type_template_id_732cedfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=template&id=732cedfa& */ "./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=template&id=732cedfa&");
/* harmony import */ var _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNavbar_vue_vue_type_template_id_732cedfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNavbar_vue_vue_type_template_id_732cedfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/Layout/TopNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=template&id=732cedfa&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=template&id=732cedfa& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_732cedfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNavbar.vue?vue&type=template&id=732cedfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/Layout/TopNavbar.vue?vue&type=template&id=732cedfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_732cedfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_732cedfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);