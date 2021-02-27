(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/ChartCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards/ChartCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "chart-card",
  props: {
    footerText: {
      type: String,
      "default": ""
    },
    headerTitle: {
      type: String,
      "default": "Chart title"
    },
    chartType: {
      type: String,
      "default": "Line" // Line | Pie | Bar

    },
    chartOptions: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    chartResponsiveOptions: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    chartData: {
      type: Object,
      "default": function _default() {
        return {
          labels: [],
          series: []
        };
      }
    },
    dataBackgroundColor: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      chartId: "no-id"
    };
  },
  methods: {
    /***
     * Initializes the chart by merging the chart options sent via props and the default chart options
     */
    initChart: function initChart(Chartist) {
      var chartIdQuery = "#".concat(this.chartId);
      Chartist[this.chartType](chartIdQuery, this.chartData, this.chartOptions);
    },

    /***
     * Assigns a random id to the chart
     */
    updateChartId: function updateChartId() {
      var currentTime = new Date().getTime().toString();
      var randomInt = this.getRandomInt(0, currentTime);
      this.chartId = "div_".concat(randomInt);
    },
    getRandomInt: function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.updateChartId();
    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! chartist */ "./node_modules/chartist/dist/chartist.js", 7)).then(function (Chartist) {
      var ChartistLib = Chartist["default"] || Chartist;

      _this.$nextTick(function () {
        _this.initChart(ChartistLib);
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/NavTabsCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards/NavTabsCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "nav-tabs-card"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/StatsCard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards/StatsCard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "stats-card",
  props: {
    dataBackgroundColor: {
      type: String,
      "default": ""
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/NavTabsTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tables/NavTabsTable.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
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
  name: "nav-tabs-table",
  data: function data() {
    return {
      selected: [],
      users: [{
        name: 'Sign contract for "What are conference organizers afraid of?"'
      }, {
        name: "Lines From Great Russian Literature? Or E-mails From My Boss?"
      }, {
        name: "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"
      }]
    };
  },
  methods: {
    onSelect: function onSelect(items) {
      this.selected = items;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/OrderedTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tables/OrderedTable.vue?vue&type=script&lang=js& ***!
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
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      selected: [],
      users: [{
        id: 1,
        name: "Dakota Rice",
        salary: "$36,738",
        country: "Niger",
        city: "Oud-Turnhout"
      }, {
        id: 2,
        name: "Minerva Hooper",
        salary: "$23,738",
        country: "Curaçao",
        city: "Sinaai-Waas"
      }, {
        id: 3,
        name: "Sage Rodriguez",
        salary: "$56,142",
        country: "Netherlands",
        city: "Overland Park"
      }, {
        id: 4,
        name: "Philip Chaney",
        salary: "$38,735",
        country: "Korea, South",
        city: "Gloucester"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/SimpleTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tables/SimpleTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      selected: [],
      users: [{
        name: "Dakota Rice",
        salary: "$36,738",
        country: "Niger",
        city: "Oud-Turnhout"
      }, {
        name: "Minerva Hooper",
        salary: "$23,738",
        country: "Curaçao",
        city: "Sinaai-Waas"
      }, {
        name: "Sage Rodriguez",
        salary: "$56,142",
        country: "Netherlands",
        city: "Overland Park"
      }, {
        name: "Philip Chaney",
        salary: "$38,735",
        country: "Korea, South",
        city: "Gloucester"
      }, {
        name: "Doris Greene",
        salary: "$63,542",
        country: "Malawi",
        city: "Feldkirchen in Kārnten"
      }, {
        name: "Mason Porter",
        salary: "$78,615",
        country: "Chile",
        city: "Gloucester"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Demo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/Demo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Paper.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/Paper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! print-js */ "./node_modules/print-js/dist/print.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
/* harmony import */ var _helpers_Functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/Functions */ "./resources/js/helpers/Functions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Paper",
  props: {
    config: {
      type: Object,
      "default": Object
    },
    width: {
      type: Number,
      "default": 320
    }
  },
  computed: {
    getConfig: function getConfig() {
      return !this.isEmpty(this.config) ? this.config : {};
    },
    getSizes: function getSizes() {
      //Longeur = Largeur * 1.414
      var width = this.width;
      var height = width * 1.414;
      var ratio = height / this.width;
      var modulo = height % this.width;
      var marginHorizontal = width * 4 / 100;
      var marginVertical = height * 3 / 100;
      var font = width * 2.56 / 100;
      var lineHeight = width * 3.51 / 100;
      return {
        height: height,
        width: width,
        ratio: ratio,
        modulo: modulo,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
        font: font,
        lineHeight: lineHeight
      };
    }
  },
  methods: {
    isEmpty: function isEmpty(data) {
      return Object(_helpers_Functions__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(data);
    },
    launchPrint: function launchPrint() {
      print_js__WEBPACK_IMPORTED_MODULE_0___default()({
        printable: "paper-item",
        type: "html",
        maxWidth: 900,
        targetStyles: ["*"]
      });
    },
    exportToWord: function exportToWord() {
      var paperItem = document.getElementById("paper-item").innerHTML,
          word = "<html\n\t\t\t\t\txmlns:o='urn:schemas-microsoft-com:office:office xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>\n\t\t\t\t\t<head>\n\t\t\t\t\t\t<meta charset='utf-8'>\n\t\t\t\t\t\t<title>VirtualClass Document</title>\n\t\t\t\t\t</head>\n\t\t\t\t\t<body>".concat(paperItem, "</body>\n\t\t\t\t</html>");
      var source = "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(word);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = "vr_doc.doc";
      fileDownload.click();
      document.body.removeChild(fileDownload);
    },
    exportToPDF: function exportToPDF() {
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["jsPDF"]();
      var paperItem = document.getElementById("paper-item");
      doc.html(paperItem, {
        callback: function callback(doc) {
          doc.save();
        },
        x: 1,
        y: 1
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Paper.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/Paper.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#paper-item {\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\";\n  height: auto;\n  max-height: auto;\n}\n#paper-item * {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n#paper-item h1,\n#paper-item h2,\n#paper-item h3,\n#paper-item h4,\n#paper-item h5,\n#paper-item h6 {\n  margin: 0;\n  padding: 0;\n}\n#paper-item h1 {\n  font-size: 200%;\n}\n#paper-item h2 {\n  font-size: 180%;\n}\n#paper-item h3 {\n  font-size: 150%;\n}\n#paper-item h4 {\n  font-size: 120%;\n}\n#paper-item h5 {\n  font-size: 100%;\n}\n#paper-item h6 {\n  font-size: 80%;\n}\n#paper-item .marker {\n  background-color: yellow;\n}\n#paper-item .overlay {\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  font-weight: 900;\n  background-color: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  color: white;\n}\n#paper-item .overlay > * {\n  line-height: 150%;\n}\n#paper-item > .PI-container-background-logo {\n  z-index: 1;\n  opacity: 0.03;\n}\n#paper-item > .PI-container-text {\n  z-index: 2;\n  background: transparent !important;\n  padding: 0.5vw;\n}\n#paper-item > .PI-container-text > .PI-header {\n  margin-bottom: 3%;\n}\n#paper-item > .PI-container-text > .PI-header > .left-side {\n  font-weight: 800;\n}\n#paper-item > .PI-container-text > .PI-header > .left-side > * {\n  width: auto;\n  text-align: center;\n}\n#paper-item > .PI-container-text > .PI-header > .left-side > .title {\n  font-size: 70%;\n}\n#paper-item > .PI-container-text > .PI-header > .left-side > .sub-title {\n  font-size: 70%;\n}\n#paper-item > .PI-container-text > .PI-header > .left-side > .container-logo {\n  margin: 4% auto;\n}\n#paper-item > .PI-container-text > .PI-header > .left-side > .container-logo > .logo {\n  width: 35%;\n}\n#paper-item > .PI-container-text > .PI-header > .right-side {\n  text-align: right;\n  font-size: 80%;\n  line-height: 150%;\n}\n#paper-item > .PI-container-text > .PI-header > .right-side > .sub-title {\n  font-weight: 800;\n}\n#paper-item > .PI-container-text > .PI-body {\n  width: 100%;\n  line-height: 200%;\n}\n#paper-item > .PI-container-text > .PI-body .container-cc > .title,\n#paper-item > .PI-container-text > .PI-body .container-cc > .sub-title {\n  font-size: 80%;\n  font-weight: 700;\n  line-height: 150%;\n}\n#paper-item > .PI-container-text > .PI-body .container-cc > .list-persons {\n  margin-left: 0;\n  padding: 0;\n  margin: 0;\n  border-bottom-style: dashed;\n  line-height: 0;\n}\n#paper-item > .PI-container-text > .PI-body .container-cc > .list-persons > .list-item-person {\n  font-size: 80%;\n  padding-left: 0px;\n}\n#paper-item > .PI-container-text > .PI-body > .for,\n#paper-item > .PI-container-text > .PI-body .content p {\n  padding: 0;\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Demo.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/Demo.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#printable {\n\theight: 100%;\n\twidth: 100%;\n}\n#printable * {\n\tcolor: #171717;\n\tfont-family: Calibri, sans-serif;\n}\n#printable > .background-theme {\n\topacity: 0.1;\n\tposition: absolute;\n\tz-index: 0;\n\tmargin: auto;\n\tmargin-top: 35vh;\n\twidth: 100%;\n}\n#printable > .content-text {\n\tposition: relative;\n\tz-index: 10;\n\twidth: 100%;\n}\n#printable .header-left-side {\n\tposition: relative;\n}\n#printable .header-left-side > .header-title {\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tfont-size: 0.95em;\n}\n#printable .header-left-side > .container-header-logo {\n}\n#printable .header-left-side > .container-header-logo > .header-logo {\n\tz-index: -1;\n\theight: 92px;\n}\n#printable .header-right-side {\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\tfont-size: 1em;\n}\n#printable .simple-letter-section > .title-section {\n\tpadding-bottom: 5px;\n\tborder-bottom: 4px solid;\n}\n#printable .copy-transmited-section > .title-section {\n\ttext-transform: uppercase;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-weight: 700;\n}\n#printable .copy-transmited-section > .subtitle-section {\n\tfont-weight: 700;\n}\n#printable .list-group-person {\n\tfont-size: 1.25em;\n\tmargin-left: 20px;\n\tpadding: 0 0 20px;\n\tborder-bottom: 2px dashed;\n}\n#printable .list-group-person > .list-item-person {\n\tpadding-left: 20px;\n}\n#printable .title_document h2 {\n\tfont-size: 1.8em;\n\ttext-transform: uppercase;\n\ttext-align: center;\n\tpadding-bottom: 5px;\n\tborder-bottom: 4px solid;\n\tdisplay: inline-block;\n\tmargin-bottom: 20px;\n}\n#printable .object-title,\n#printable .for-person {\n\tvertical-align: text-top;\n}\n#printable .editor-datas {\n\tfont-size: 1.5em;\n\tline-height: 35px;\n\ttext-align: justify;\n}\n#printable .editor-datas p,\n#printable .editor-datas a,\n#printable .editor-datas li {\n\tfont-size: inherit;\n}\n#printable .end-page {\n\topacity: 1;\n\tmargin-top: 80px;\n\ttext-transform: uppercase;\n\tword-spacing: 0.3vw;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Paper.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/Paper.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paper.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Paper.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Demo.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/Demo.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Demo.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/ChartCard.vue?vue&type=template&id=f89020b2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards/ChartCard.vue?vue&type=template&id=f89020b2& ***!
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
  return _c(
    "md-card",
    [
      _c(
        "md-card-header",
        {
          staticClass: "card-chart",
          attrs: { "data-background-color": _vm.dataBackgroundColor }
        },
        [_c("div", { staticClass: "ct-chart", attrs: { id: _vm.chartId } })]
      ),
      _vm._v(" "),
      _c("md-card-content", [_vm._t("content")], 2),
      _vm._v(" "),
      _c(
        "md-card-actions",
        { attrs: { "md-alignment": "left" } },
        [_vm._t("footer")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/NavTabsCard.vue?vue&type=template&id=f539e06c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards/NavTabsCard.vue?vue&type=template&id=f539e06c& ***!
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
    "md-card",
    { staticClass: "md-card-nav-tabs" },
    [_c("md-card-content", [_vm._t("content")], 2)],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/StatsCard.vue?vue&type=template&id=1c8a8b68&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards/StatsCard.vue?vue&type=template&id=1c8a8b68& ***!
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
  return _c(
    "md-card",
    { staticClass: "md-card-stats" },
    [
      _c(
        "md-card-header",
        { attrs: { "data-background-color": _vm.dataBackgroundColor } },
        [_vm._t("header")],
        2
      ),
      _vm._v(" "),
      _c("md-card-content", [_vm._t("content")], 2),
      _vm._v(" "),
      _c(
        "md-card-actions",
        { attrs: { "md-alignment": "left" } },
        [_vm._t("footer")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/NavTabsTable.vue?vue&type=template&id=f2331a08&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tables/NavTabsTable.vue?vue&type=template&id=f2331a08& ***!
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
    "div",
    [
      _c("md-table", {
        on: { "md-selected": _vm.onSelect },
        scopedSlots: _vm._u([
          {
            key: "md-table-row",
            fn: function(ref) {
              var item = ref.item
              return _c(
                "md-table-row",
                {
                  attrs: { "md-selectable": "multiple", "md-auto-select": "" }
                },
                [
                  _c("md-table-cell", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _c(
                    "md-table-cell",
                    [
                      _c(
                        "md-button",
                        { staticClass: "md-just-icon md-simple md-primary" },
                        [
                          _c("md-icon", [_vm._v("edit")]),
                          _vm._v(" "),
                          _c(
                            "md-tooltip",
                            { attrs: { "md-direction": "top" } },
                            [_vm._v("Edit")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "md-button",
                        { staticClass: "md-just-icon md-simple md-danger" },
                        [
                          _c("md-icon", [_vm._v("close")]),
                          _vm._v(" "),
                          _c(
                            "md-tooltip",
                            { attrs: { "md-direction": "top" } },
                            [_vm._v("Close")]
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
          }
        ]),
        model: {
          value: _vm.users,
          callback: function($$v) {
            _vm.users = $$v
          },
          expression: "users"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/OrderedTable.vue?vue&type=template&id=46521350&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tables/OrderedTable.vue?vue&type=template&id=46521350& ***!
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
    "div",
    [
      _c("md-table", {
        attrs: { "table-header-color": _vm.tableHeaderColor },
        scopedSlots: _vm._u([
          {
            key: "md-table-row",
            fn: function(ref) {
              var item = ref.item
              return _c(
                "md-table-row",
                {},
                [
                  _c("md-table-cell", { attrs: { "md-label": "ID" } }, [
                    _vm._v(_vm._s(item.id))
                  ]),
                  _vm._v(" "),
                  _c("md-table-cell", { attrs: { "md-label": "Name" } }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _vm._v(" "),
                  _c("md-table-cell", { attrs: { "md-label": "Salary" } }, [
                    _vm._v(_vm._s(item.salary))
                  ]),
                  _vm._v(" "),
                  _c("md-table-cell", { attrs: { "md-label": "Country" } }, [
                    _vm._v(_vm._s(item.country))
                  ]),
                  _vm._v(" "),
                  _c("md-table-cell", { attrs: { "md-label": "City" } }, [
                    _vm._v(_vm._s(item.city))
                  ])
                ],
                1
              )
            }
          }
        ]),
        model: {
          value: _vm.users,
          callback: function($$v) {
            _vm.users = $$v
          },
          expression: "users"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/SimpleTable.vue?vue&type=template&id=5dbce5c6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tables/SimpleTable.vue?vue&type=template&id=5dbce5c6& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
      _c("md-table", {
        attrs: { "table-header-color": _vm.tableHeaderColor },
        scopedSlots: _vm._u([
          {
            key: "md-table-row",
            fn: function(ref) {
              var item = ref.item
              return _c(
                "md-table-row",
                {},
                [
                  _c("md-table-cell", { attrs: { "md-label": "Name" } }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _vm._v(" "),
                  _c("md-table-cell", { attrs: { "md-label": "Country" } }, [
                    _vm._v(_vm._s(item.country))
                  ]),
                  _vm._v(" "),
                  _c("md-table-cell", { attrs: { "md-label": "City" } }, [
                    _vm._v(_vm._s(item.city))
                  ]),
                  _vm._v(" "),
                  _c("md-table-cell", { attrs: { "md-label": "Salary" } }, [
                    _vm._v(_vm._s(item.salary))
                  ])
                ],
                1
              )
            }
          }
        ]),
        model: {
          value: _vm.users,
          callback: function($$v) {
            _vm.users = $$v
          },
          expression: "users"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Demo.vue?vue&type=template&id=306e7fa0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/Demo.vue?vue&type=template&id=306e7fa0& ***!
  \**************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Paper.vue?vue&type=template&id=1380e8e2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/Paper.vue?vue&type=template&id=1380e8e2& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      staticClass: "bg-white position-relative text-dark",
      style: {
        minHeight: _vm.getSizes.height + "px",
        width: _vm.getSizes.width + "px",
        fontSize: _vm.getSizes.font + "px",
        lineHeight: _vm.getSizes.lineHeight + "px"
      },
      attrs: { id: "paper-item" }
    },
    [
      !_vm.isEmpty(_vm.config)
        ? [
            _vm.config.image && _vm.config.image.show
              ? _c(
                  "div",
                  {
                    staticClass:
                      "PI-container-background-logo position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
                  },
                  [
                    _vm.config.image.data
                      ? _c("img", {
                          staticClass: "PI-background-logo w-100",
                          attrs: { src: _vm.config.image.data.urlResized }
                        })
                      : _c("img", {
                          staticClass: "PI-background-logo w-100",
                          attrs: {
                            src: __webpack_require__(/*! ../../assets/img/vc_logo_0.jpg */ "./resources/js/assets/img/vc_logo_0.jpg")
                          }
                        })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "PI-container-text position-relative w-100 h-100 border",
                style: {
                  padding:
                    _vm.getSizes.marginVertical +
                    "px " +
                    _vm.getSizes.marginHorizontal +
                    "px",
                  minHeight: _vm.getSizes.height + "px"
                }
              },
              [
                _vm.config.header
                  ? _c("div", { staticClass: "PI-header row" }, [
                      _vm.config.header.leftSide
                        ? _c(
                            "div",
                            { staticClass: "left-side col" },
                            [
                              _vm.config.header.leftSide.title
                                ? _c(
                                    "div",
                                    { staticClass: "title text-uppercase" },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.config.header.leftSide.title
                                          ) +
                                          "\n\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.config.header.leftSide.subTitle
                                ? _c(
                                    "div",
                                    { staticClass: "sub-title text-uppercase" },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.config.header.leftSide.subTitle
                                          ) +
                                          "\n\t\t\t\t\t"
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.config.header.leftSide.logo &&
                              _vm.config.header.leftSide.logo.show
                                ? [
                                    _vm.config.header.leftSide.logo.data
                                      ? _c(
                                          "div",
                                          { staticClass: "container-logo" },
                                          [
                                            _c("img", {
                                              staticClass: "logo",
                                              attrs: {
                                                src:
                                                  _vm.config.header.leftSide
                                                    .logo.data.urlResized
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "div",
                                          { staticClass: "container-logo" },
                                          [
                                            _c("img", {
                                              staticClass: "logo",
                                              attrs: {
                                                src: __webpack_require__(/*! ../../assets/img/vc_logo_0.jpg */ "./resources/js/assets/img/vc_logo_0.jpg")
                                              }
                                            })
                                          ]
                                        )
                                  ]
                                : _vm._e()
                            ],
                            2
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.config.header.rightSide
                        ? _c("div", { staticClass: "right-side col" }, [
                            _vm.config.header.rightSide.date
                              ? _c("div", { staticClass: "date" }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t" +
                                      _vm._s(_vm.config.header.rightSide.date) +
                                      "\n\t\t\t\t\t"
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.config.header.rightSide.title
                              ? _c("div", { staticClass: "title" }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.config.header.rightSide.title
                                      ) +
                                      "\n\t\t\t\t\t"
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.config.header.rightSide.subTitle
                              ? _c("div", { staticClass: "sub-title" }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.config.header.rightSide.subTitle
                                      ) +
                                      "\n\t\t\t\t\t"
                                  )
                                ])
                              : _vm._e()
                          ])
                        : _vm._e()
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.config.body
                  ? _c(
                      "div",
                      {
                        staticClass: "PI-body",
                        style: {
                          minHeight: (_vm.getSizes.height * 70) / 100 + "px"
                        }
                      },
                      [
                        _vm.config.body.title
                          ? _c("div", { staticClass: "container-title" }, [
                              _c("h3", {
                                staticClass: "title text-center w-100",
                                style: {
                                  paddingBottom:
                                    (_vm.getSizes.width * 3.5) / 100 + "px"
                                },
                                domProps: {
                                  innerHTML: _vm._s(_vm.config.body.title)
                                }
                              })
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.config.body.cc
                          ? _c("div", { staticClass: "row mb-4" }, [
                              _c(
                                "div",
                                { staticClass: "offset-6 col-6 container-cc" },
                                [
                                  _c("h5", { staticClass: "title p-0 m-0" }, [
                                    _c("b", [
                                      _vm._v(_vm._s(_vm.config.body.cc.title))
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "h5",
                                    {
                                      staticClass: "sub-title",
                                      style: {
                                        paddingBottom:
                                          (_vm.getSizes.width * 2.5) / 100 +
                                          "px"
                                      }
                                    },
                                    [_vm._m(0)]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    {
                                      staticClass: "list-persons",
                                      style: {
                                        marginLeft:
                                          (_vm.getSizes.width * 1.5) / 100 +
                                          "px",
                                        paddingLeft:
                                          (_vm.getSizes.width * 1.5) / 100 +
                                          "px",
                                        borderBottomWidth:
                                          (_vm.getSizes.width * 0.4) / 100 +
                                          "px"
                                      }
                                    },
                                    _vm._l(_vm.config.body.cc.persons, function(
                                      item,
                                      index
                                    ) {
                                      return _c(
                                        "li",
                                        {
                                          key: index,
                                          staticClass: "list-item-person ml-0",
                                          style: {
                                            paddingLeft:
                                              (_vm.getSizes.width * 1.5) / 100 +
                                              "px",
                                            paddingBottom:
                                              (_vm.getSizes.width * 3.5) / 100 +
                                              "px"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t" +
                                              _vm._s(
                                                _vm.config.body.cc.prePerson +
                                                  " " +
                                                  item
                                              ) +
                                              "\n\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.config.body.for
                          ? _c("p", {
                              staticClass: "for w-100 text-justify",
                              domProps: {
                                innerHTML: _vm._s(_vm.config.body.for)
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.config.body.content
                          ? _c("div", {
                              staticClass: "content w-100 text-justify",
                              domProps: {
                                innerHTML: _vm._s(_vm.config.body.content)
                              }
                            })
                          : _vm._e()
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.config.footer
                  ? _c("div", { staticClass: "PI-footer row" }, [
                      _vm.config.footer.leftSide
                        ? _c("div", { staticClass: "left-side col" })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.config.footer.rightSide
                        ? _c("div", { staticClass: "right-side col" }, [
                            _vm.config.footer.rightSide.title
                              ? _c("div", { staticClass: "title" }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.config.footer.rightSide.title
                                      ) +
                                      "\n\t\t\t\t\t"
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.config.footer.rightSide.subTitle
                              ? _c("div", { staticClass: "sub-title" }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.config.footer.rightSide.subTitle
                                      ) +
                                      "\n\t\t\t\t\t"
                                  )
                                ])
                              : _vm._e()
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]
            )
          ]
        : _c(
            "div",
            {
              staticClass:
                "overlay d-flex align-items-center justify-content-center p-4 text-center"
            },
            [
              _c("h1", [
                _vm._v("Nothing selected ! Please select a document for begin")
              ])
            ]
          )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("b", [
      _c("u", [_vm._v("Transmis")]),
      _vm._v(" copie pour information à : ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Cards/ChartCard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Cards/ChartCard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartCard_vue_vue_type_template_id_f89020b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartCard.vue?vue&type=template&id=f89020b2& */ "./resources/js/components/Cards/ChartCard.vue?vue&type=template&id=f89020b2&");
/* harmony import */ var _ChartCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartCard.vue?vue&type=script&lang=js& */ "./resources/js/components/Cards/ChartCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartCard_vue_vue_type_template_id_f89020b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartCard_vue_vue_type_template_id_f89020b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Cards/ChartCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Cards/ChartCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Cards/ChartCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/ChartCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Cards/ChartCard.vue?vue&type=template&id=f89020b2&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Cards/ChartCard.vue?vue&type=template&id=f89020b2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_template_id_f89020b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartCard.vue?vue&type=template&id=f89020b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/ChartCard.vue?vue&type=template&id=f89020b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_template_id_f89020b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartCard_vue_vue_type_template_id_f89020b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Cards/NavTabsCard.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Cards/NavTabsCard.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavTabsCard_vue_vue_type_template_id_f539e06c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavTabsCard.vue?vue&type=template&id=f539e06c& */ "./resources/js/components/Cards/NavTabsCard.vue?vue&type=template&id=f539e06c&");
/* harmony import */ var _NavTabsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavTabsCard.vue?vue&type=script&lang=js& */ "./resources/js/components/Cards/NavTabsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavTabsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavTabsCard_vue_vue_type_template_id_f539e06c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavTabsCard_vue_vue_type_template_id_f539e06c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Cards/NavTabsCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Cards/NavTabsCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Cards/NavTabsCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavTabsCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/NavTabsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Cards/NavTabsCard.vue?vue&type=template&id=f539e06c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Cards/NavTabsCard.vue?vue&type=template&id=f539e06c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsCard_vue_vue_type_template_id_f539e06c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavTabsCard.vue?vue&type=template&id=f539e06c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/NavTabsCard.vue?vue&type=template&id=f539e06c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsCard_vue_vue_type_template_id_f539e06c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsCard_vue_vue_type_template_id_f539e06c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Cards/StatsCard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Cards/StatsCard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatsCard_vue_vue_type_template_id_1c8a8b68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatsCard.vue?vue&type=template&id=1c8a8b68& */ "./resources/js/components/Cards/StatsCard.vue?vue&type=template&id=1c8a8b68&");
/* harmony import */ var _StatsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatsCard.vue?vue&type=script&lang=js& */ "./resources/js/components/Cards/StatsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatsCard_vue_vue_type_template_id_1c8a8b68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatsCard_vue_vue_type_template_id_1c8a8b68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Cards/StatsCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Cards/StatsCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Cards/StatsCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./StatsCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/StatsCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Cards/StatsCard.vue?vue&type=template&id=1c8a8b68&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Cards/StatsCard.vue?vue&type=template&id=1c8a8b68& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCard_vue_vue_type_template_id_1c8a8b68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./StatsCard.vue?vue&type=template&id=1c8a8b68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards/StatsCard.vue?vue&type=template&id=1c8a8b68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCard_vue_vue_type_template_id_1c8a8b68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatsCard_vue_vue_type_template_id_1c8a8b68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tables/NavTabsTable.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Tables/NavTabsTable.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavTabsTable_vue_vue_type_template_id_f2331a08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavTabsTable.vue?vue&type=template&id=f2331a08& */ "./resources/js/components/Tables/NavTabsTable.vue?vue&type=template&id=f2331a08&");
/* harmony import */ var _NavTabsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavTabsTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Tables/NavTabsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavTabsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavTabsTable_vue_vue_type_template_id_f2331a08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavTabsTable_vue_vue_type_template_id_f2331a08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tables/NavTabsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tables/NavTabsTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Tables/NavTabsTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavTabsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/NavTabsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tables/NavTabsTable.vue?vue&type=template&id=f2331a08&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Tables/NavTabsTable.vue?vue&type=template&id=f2331a08& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsTable_vue_vue_type_template_id_f2331a08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavTabsTable.vue?vue&type=template&id=f2331a08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/NavTabsTable.vue?vue&type=template&id=f2331a08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsTable_vue_vue_type_template_id_f2331a08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTabsTable_vue_vue_type_template_id_f2331a08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tables/OrderedTable.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Tables/OrderedTable.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderedTable_vue_vue_type_template_id_46521350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderedTable.vue?vue&type=template&id=46521350& */ "./resources/js/components/Tables/OrderedTable.vue?vue&type=template&id=46521350&");
/* harmony import */ var _OrderedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderedTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Tables/OrderedTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OrderedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderedTable_vue_vue_type_template_id_46521350___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderedTable_vue_vue_type_template_id_46521350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tables/OrderedTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tables/OrderedTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Tables/OrderedTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderedTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/OrderedTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderedTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tables/OrderedTable.vue?vue&type=template&id=46521350&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Tables/OrderedTable.vue?vue&type=template&id=46521350& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderedTable_vue_vue_type_template_id_46521350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderedTable.vue?vue&type=template&id=46521350& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/OrderedTable.vue?vue&type=template&id=46521350&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderedTable_vue_vue_type_template_id_46521350___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderedTable_vue_vue_type_template_id_46521350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tables/SimpleTable.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Tables/SimpleTable.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimpleTable_vue_vue_type_template_id_5dbce5c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleTable.vue?vue&type=template&id=5dbce5c6& */ "./resources/js/components/Tables/SimpleTable.vue?vue&type=template&id=5dbce5c6&");
/* harmony import */ var _SimpleTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Tables/SimpleTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SimpleTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimpleTable_vue_vue_type_template_id_5dbce5c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SimpleTable_vue_vue_type_template_id_5dbce5c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tables/SimpleTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tables/SimpleTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Tables/SimpleTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/SimpleTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tables/SimpleTable.vue?vue&type=template&id=5dbce5c6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Tables/SimpleTable.vue?vue&type=template&id=5dbce5c6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTable_vue_vue_type_template_id_5dbce5c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SimpleTable.vue?vue&type=template&id=5dbce5c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tables/SimpleTable.vue?vue&type=template&id=5dbce5c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTable_vue_vue_type_template_id_5dbce5c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleTable_vue_vue_type_template_id_5dbce5c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/index.js":
/*!******************************************!*\
  !*** ./resources/js/components/index.js ***!
  \******************************************/
/*! exports provided: ChartCard, NavTabsCard, StatsCard, NavTabsTable, OrderedTable, SimpleTable, Paper, PaperDemoPrintable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards_ChartCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards/ChartCard.vue */ "./resources/js/components/Cards/ChartCard.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartCard", function() { return _Cards_ChartCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Cards_NavTabsCard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards/NavTabsCard.vue */ "./resources/js/components/Cards/NavTabsCard.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavTabsCard", function() { return _Cards_NavTabsCard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Cards_StatsCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards/StatsCard.vue */ "./resources/js/components/Cards/StatsCard.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatsCard", function() { return _Cards_StatsCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Tables_NavTabsTable_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tables/NavTabsTable.vue */ "./resources/js/components/Tables/NavTabsTable.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavTabsTable", function() { return _Tables_NavTabsTable_vue__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Tables_OrderedTable_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tables/OrderedTable.vue */ "./resources/js/components/Tables/OrderedTable.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderedTable", function() { return _Tables_OrderedTable_vue__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Tables_SimpleTable_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tables/SimpleTable.vue */ "./resources/js/components/Tables/SimpleTable.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleTable", function() { return _Tables_SimpleTable_vue__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _papers_Paper_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./papers/Paper.vue */ "./resources/js/components/papers/Paper.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return _papers_Paper_vue__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _papers_Demo_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./papers/Demo.vue */ "./resources/js/components/papers/Demo.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperDemoPrintable", function() { return _papers_Demo_vue__WEBPACK_IMPORTED_MODULE_7__["default"]; });

// Cards


 // Tables



 //Papers





/***/ }),

/***/ "./resources/js/components/papers/Demo.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/papers/Demo.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Demo_vue_vue_type_template_id_306e7fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Demo.vue?vue&type=template&id=306e7fa0& */ "./resources/js/components/papers/Demo.vue?vue&type=template&id=306e7fa0&");
/* harmony import */ var _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Demo.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Demo.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/papers/Demo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Demo_vue_vue_type_template_id_306e7fa0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Demo_vue_vue_type_template_id_306e7fa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/Demo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/Demo.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/papers/Demo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Demo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/Demo.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/papers/Demo.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Demo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/papers/Demo.vue?vue&type=template&id=306e7fa0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/papers/Demo.vue?vue&type=template&id=306e7fa0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_306e7fa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Demo.vue?vue&type=template&id=306e7fa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Demo.vue?vue&type=template&id=306e7fa0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_306e7fa0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Demo_vue_vue_type_template_id_306e7fa0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/Paper.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/papers/Paper.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paper_vue_vue_type_template_id_1380e8e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paper.vue?vue&type=template&id=1380e8e2& */ "./resources/js/components/papers/Paper.vue?vue&type=template&id=1380e8e2&");
/* harmony import */ var _Paper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paper.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/Paper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Paper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paper.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/papers/Paper.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Paper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paper_vue_vue_type_template_id_1380e8e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Paper_vue_vue_type_template_id_1380e8e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/Paper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/Paper.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/papers/Paper.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Paper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/Paper.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/papers/Paper.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paper.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Paper.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/papers/Paper.vue?vue&type=template&id=1380e8e2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/papers/Paper.vue?vue&type=template&id=1380e8e2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_template_id_1380e8e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Paper.vue?vue&type=template&id=1380e8e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/Paper.vue?vue&type=template&id=1380e8e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_template_id_1380e8e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paper_vue_vue_type_template_id_1380e8e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);