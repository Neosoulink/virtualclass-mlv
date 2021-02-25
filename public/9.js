(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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
        body: {}
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
    this.docConfig = JSON.parse(JSON.stringify(this.$store.getters["document/getDocSelected"].config));

    if (this.docConfig.body.cc != undefined) {
      this.steper.second.personsCC = JSON.parse(JSON.stringify(this.docConfig.body.cc.persons));
    }
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

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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
                  _vm.docConfig.body.content
                    ? _c(
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
                      )
                    : _vm._e(),
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