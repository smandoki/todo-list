/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* global style */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    --accent-color: #ff8200;\r\n    --aside-background-color: #f7f7f7;\r\n    --dark-grey: #757575;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 60px 1fr;\r\n    font-weight: 500;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 20px;\r\n    gap: 10px;\r\n    background: linear-gradient(90deg, rgba(255,130,0,1) 0%, rgba(231,176,0,1) 50%, rgba(255,224,0,1) 100%);\r\n    color: white;\r\n    grid-column: 1 / 3;\r\n}\r\n\r\nheader i {\r\n    font-size: 2rem;\r\n}\r\n\r\nnav {\r\n    background-color: var(--aside-background-color);\r\n    padding: 40px 20px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\n.button {\r\n    border-radius: 5px;\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nnav .button {\r\n    background-color: white;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    border: 1px solid transparent;\r\n    padding-right: 0;\r\n}\r\n\r\nnav .button:hover {\r\n    border: 1px solid var(--accent-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.add-item-heading {\r\n    margin-top: 60px;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px 15px;\r\n    border-bottom: 1px solid var(--dark-grey);\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.add-item-heading i {\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.add-item-heading i:hover {\r\n    color: var(--accent-color);\r\n}\r\n\r\nnav .active {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\nnav .button i {\r\n    margin-right: 10px;\r\n}\r\n\r\n.task-list-container {\r\n    width: clamp(600px, 80%, 1000px);\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 0 20px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.edit, .delete {\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.edit:hover, .delete:hover {\r\n    color: var(--accent-color);\r\n}\r\n\r\n.active .edit:hover, .active .delete:hover {\r\n    color: var(--dark-grey);\r\n}\r\n\r\n#task-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.task-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--aside-background-color);\r\n    padding: 16px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-left {\r\n    display: flex;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-right {\r\n    display: flex;\r\n    gap: 30px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-right div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.task-item button {\r\n    background-color: var(--aside-background-color);\r\n    padding: 5px 10px;\r\n    border: 1px solid var(--accent-color);\r\n    color: var(--accent-color);\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.task-item button:hover {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\n.low {\r\n    border-left: 4px solid green;\r\n}\r\n\r\n.medium {\r\n    border-left: 4px solid orange;\r\n}\r\n\r\n.high {\r\n    border-left: 4px solid red;\r\n}\r\n\r\n.modal {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    top: 200px;\r\n    width: 400px;\r\n    border: none;\r\n    box-shadow: 0 0 4px 0 var(--dark-grey);\r\n    border-radius: 5px;\r\n}\r\n\r\n.modal-header {\r\n    background: linear-gradient(90deg, rgba(255,130,0,1) 0%, rgba(231,176,0,1) 50%, rgba(255,224,0,1) 100%);\r\n    display: flex;\r\n    color: white;\r\n    padding: 16px;\r\n    align-items: center;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.modal-header i {\r\n    font-size: 1.2rem;\r\n}\r\n\r\ni:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.modal form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 16px;\r\n    color: var(--dark-grey);\r\n    gap: 4px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.modal form input {\r\n    padding: 10px 8px;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    outline: none;\r\n    color: var(--dark-grey);\r\n    font-size: 1.05rem;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.modal form input:focus {\r\n    border-color: var(--accent-color);\r\n}\r\n\r\n.form-buttons {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 10px;\r\n}\r\n\r\n.form-buttons button {\r\n    padding: 10px 12px;\r\n    background-color: white;\r\n    border: 1px solid lightgray;\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.form-buttons button:hover, .task-item {\r\n    cursor: pointer;\r\n}\r\n\r\n.cancel-button {\r\n    color: var(--dark-grey)\r\n}\r\n\r\n.cancel-button:hover {\r\n    border-color: var(--accent-color);\r\n    color: var(--accent-color);\r\n}\r\n\r\n.form-buttons .submit-button {\r\n    border-color: var(--accent-color);\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\n.form-buttons .submit-button:hover {\r\n    background-color: #e97100;\r\n    border-color: #e97100;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* global style */\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css\");\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    --accent-color: #ff8200;\r\n    --aside-background-color: #f7f7f7;\r\n    --dark-grey: #757575;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 60px 1fr;\r\n    font-weight: 500;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 20px;\r\n    gap: 10px;\r\n    background: linear-gradient(90deg, rgba(255,130,0,1) 0%, rgba(231,176,0,1) 50%, rgba(255,224,0,1) 100%);\r\n    color: white;\r\n    grid-column: 1 / 3;\r\n}\r\n\r\nheader i {\r\n    font-size: 2rem;\r\n}\r\n\r\nnav {\r\n    background-color: var(--aside-background-color);\r\n    padding: 40px 20px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\n.button {\r\n    border-radius: 5px;\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nnav .button {\r\n    background-color: white;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    border: 1px solid transparent;\r\n    padding-right: 0;\r\n}\r\n\r\nnav .button:hover {\r\n    border: 1px solid var(--accent-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.add-item-heading {\r\n    margin-top: 60px;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px 15px;\r\n    border-bottom: 1px solid var(--dark-grey);\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.add-item-heading i {\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.add-item-heading i:hover {\r\n    color: var(--accent-color);\r\n}\r\n\r\nnav .active {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\nnav .button i {\r\n    margin-right: 10px;\r\n}\r\n\r\n.task-list-container {\r\n    width: clamp(600px, 80%, 1000px);\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 0 20px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.edit, .delete {\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.edit:hover, .delete:hover {\r\n    color: var(--accent-color);\r\n}\r\n\r\n.active .edit:hover, .active .delete:hover {\r\n    color: var(--dark-grey);\r\n}\r\n\r\n#task-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n}\r\n\r\n.task-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--aside-background-color);\r\n    padding: 16px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-left {\r\n    display: flex;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-right {\r\n    display: flex;\r\n    gap: 30px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-right div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.task-item button {\r\n    background-color: var(--aside-background-color);\r\n    padding: 5px 10px;\r\n    border: 1px solid var(--accent-color);\r\n    color: var(--accent-color);\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.task-item button:hover {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\n.low {\r\n    border-left: 4px solid green;\r\n}\r\n\r\n.medium {\r\n    border-left: 4px solid orange;\r\n}\r\n\r\n.high {\r\n    border-left: 4px solid red;\r\n}\r\n\r\n.modal {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    top: 200px;\r\n    width: 400px;\r\n    border: none;\r\n    box-shadow: 0 0 4px 0 var(--dark-grey);\r\n    border-radius: 5px;\r\n}\r\n\r\n.modal-header {\r\n    background: linear-gradient(90deg, rgba(255,130,0,1) 0%, rgba(231,176,0,1) 50%, rgba(255,224,0,1) 100%);\r\n    display: flex;\r\n    color: white;\r\n    padding: 16px;\r\n    align-items: center;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.modal-header i {\r\n    font-size: 1.2rem;\r\n}\r\n\r\ni:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.modal form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 16px;\r\n    color: var(--dark-grey);\r\n    gap: 4px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.modal form input {\r\n    padding: 10px 8px;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    outline: none;\r\n    color: var(--dark-grey);\r\n    font-size: 1.05rem;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.modal form input:focus {\r\n    border-color: var(--accent-color);\r\n}\r\n\r\n.form-buttons {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 10px;\r\n}\r\n\r\n.form-buttons button {\r\n    padding: 10px 12px;\r\n    background-color: white;\r\n    border: 1px solid lightgray;\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.form-buttons button:hover, .task-item {\r\n    cursor: pointer;\r\n}\r\n\r\n.cancel-button {\r\n    color: var(--dark-grey)\r\n}\r\n\r\n.cancel-button:hover {\r\n    border-color: var(--accent-color);\r\n    color: var(--accent-color);\r\n}\r\n\r\n.form-buttons .submit-button {\r\n    border-color: var(--accent-color);\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\n.form-buttons .submit-button:hover {\r\n    background-color: #e97100;\r\n    border-color: #e97100;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
    static getProjects() {
        if ('projects' in localStorage) {
            return JSON.parse(localStorage.getItem('projects'));
        }

        return [];
    }

    static getTasks() {
        if ('tasks' in localStorage) {
            return JSON.parse(localStorage.getItem('tasks'));
        }

        return [];
    }

    static getProjectTasks(id) {
        return this.getTasks().filter(task => task.projectId === id);
    }

    static addProject(project) {
        const projects = this.getProjects();
        projects.push(project);

        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static deleteProject(id) {
        const projects = this.getProjects().filter(project => project.projectId != id);
        localStorage.setItem('projects', JSON.stringify(projects));

        const tasks = this.getTasks().filter(task => task.projectId != id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static addTask(task) {
        const tasks = this.getTasks();
        tasks.push(task);
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static deleteTask(id) {
        const tasks = this.getTasks().filter(task => task.taskId != id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");
/* harmony import */ var _types_Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/Project */ "./src/types/Project.js");
/* harmony import */ var _types_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/Task */ "./src/types/Task.js");




const View = (() => {

    const buttons = Array.from(document.querySelectorAll('nav .button'));
    const addTaskButton = document.querySelector('#add-task-button');
    const projectList = document.querySelector('#project-list');
    const taskList = document.querySelector('#task-list');
    const viewAllButton = document.querySelector('#view-all-button');

    //Allow nav buttons to set active status onclick
    //and make main nav buttons hide add-task button
    buttons.forEach(button => button.addEventListener('click', () => {
        setActive(button);
        addTaskButton.classList.add('hidden')
    }));

    function setActive(button) {
        buttons.forEach(button => button.classList.remove('active'));
        button.classList.add('active');
    }


    //Add new project to DOM
    function addProject(project) {
        const button = document.createElement('div');
        button.setAttribute('class', 'project button');

        button.innerHTML = (
            `${project.title}
            <div>
                <i class="bi bi-pencil-square edit"></i>
                <i class="bi bi-trash delete"></i>
            </div>`
        );

        button.addEventListener('click', () => {
            setActive(button);
            addTaskButton.classList.remove('hidden');
        });

        const editButton = button.querySelector('.edit');
        const deleteButton = button.querySelector('.delete');

        //TODO: attach modals to edit and delete buttons here
        deleteButton.addEventListener('click', (e) => {
            _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(project.projectId);
            button.parentElement.removeChild(button);
            e.stopPropagation();
            viewAllButton.click();
        });

        buttons.push(button);
        projectList.appendChild(button);
    }

    //Add new task to DOM
    function addTask(task) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.classList.add(task.priority);

        taskItem.innerHTML = (
            `<div class="task-item-left">
                <input type="checkbox" disabled>
                ${task.title}
            </div>
            <div class="task-item-right">
                <button>Details</button>
                ${task.dueDate}
                <div>
                    <i class="bi bi-pencil-square edit"></i>
                    <i class="bi bi-trash delete"></i>
                </div>
            </div>`
        );

        const checkbox = taskItem.querySelector('input');
        checkbox.checked = task.completed;
        
        const detailsButton = taskItem.querySelector('button');
        const editButton = taskItem.querySelector('.edit');
        const deleteButton = taskItem.querySelector('.delete');

        //TODO: attach modals to details, edit and delete buttons here

        taskList.appendChild(taskItem);
    }

    
    //handle opening and closing of add-project modal
    const addProjectModal = document.querySelector('#add-project-modal');
    const addProjectButton = document.querySelector('#add-project-button');
    const cancelButton = addProjectModal.querySelector('.cancel-button');

    cancelButton.addEventListener('click', () => addProjectModal.close());

    addProjectButton.addEventListener('click', () => {
        addProjectModal.showModal();
    });

    addProjectModal.addEventListener('click', e => {
        closeModal(e, addProjectModal);
    });

    //handle add-project modal event
    const addProjectForm = document.querySelector('#add-project-form');
    addProjectForm.addEventListener('submit', () => {
        const project = new _types_Project__WEBPACK_IMPORTED_MODULE_1__["default"](addProjectForm.title.value);

        _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(project);
        View.addProject(project);

        addProjectForm.reset();
    });

    function closeModal(e, modal) {
        if (e.target === modal) {
            modal.close();
        }
    }

    return {
        addProject,
        addTask,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ }),

/***/ "./src/types/Project.js":
/*!******************************!*\
  !*** ./src/types/Project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Project {
    constructor(title) {
        this.projectId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.title = title;
    }
}

/***/ }),

/***/ "./src/types/Task.js":
/*!***************************!*\
  !*** ./src/types/Task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


class Task {
    constructor(projectId, title, desc, priority, dueDate) {
        this.taskId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.projectId = projectId;
        this.title = title;
        this.desc = desc;
        this.priority = priority;
        this.dueDate = dueDate;
        this.completed = false;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ "./src/View.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");




//load projects and tasks from storage on startup
function init() {
    const tasks = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTasks();
    tasks.forEach(task => _View__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(task));

    const projects = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
    projects.forEach(project => _View__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(project));
}

init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsNklBQTZJLDhFQUE4RSxJQUFJLElBQUksbUJB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QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNsSWlCO0FBQ3BDO0FBQ2U7QUFDZjtBQUNBLHlCQUF5QixnREFBTTtBQUMvQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BvQztBQUNwQztBQUNlO0FBQ2Y7QUFDQSxzQkFBc0IsZ0RBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0s7QUFDTTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQWdCO0FBQ2xDLDBCQUEwQixxREFBWTtBQUN0QztBQUNBLHFCQUFxQiw0REFBbUI7QUFDeEMsZ0NBQWdDLHdEQUFlO0FBQy9DO0FBQ0E7QUFDQSxPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9WaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90eXBlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90eXBlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcC1pY29uc0AxLjkuMS9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MpO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGdsb2JhbCBzdHlsZSAqL1xcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tYWNjZW50LWNvbG9yOiAjZmY4MjAwO1xcclxcbiAgICAtLWFzaWRlLWJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxyXFxuICAgIC0tZGFyay1ncmV5OiAjNzU3NTc1O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggMWZyO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwxMzAsMCwxKSAwJSwgcmdiYSgyMzEsMTc2LDAsMSkgNTAlLCByZ2JhKDI1NSwyMjQsMCwxKSAxMDAlKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbm5hdiAuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWl0ZW0taGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtaXRlbS1oZWFkaW5nIGkge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pdGVtLWhlYWRpbmcgaTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5idXR0b24gaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogY2xhbXAoNjAwcHgsIDgwJSwgMTAwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5lZGl0LCAuZGVsZXRlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5lZGl0OmhvdmVyLCAuZGVsZXRlOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUgLmVkaXQ6aG92ZXIsIC5hY3RpdmUgLmRlbGV0ZTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbS1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtLXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtLXJpZ2h0IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdyB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW0ge1xcclxcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2gge1xcclxcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIHRvcDogMjAwcHg7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IDAgdmFyKC0tZGFyay1ncmV5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwxMzAsMCwxKSAwJSwgcmdiYSgyMzEsMTc2LDAsMSkgNTAlLCByZ2JhKDI1NSwyMjQsMCwxKSAxMDAlKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1oZWFkZXIgaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5pOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbiAgICBnYXA6IDRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgZm9ybSBpbnB1dCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBmb3JtIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLCAudGFzay1pdGVtIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpXFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyAuc3VibWl0LWJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zIC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5NzEwMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTk3MTAwO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjs7QUFJakI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsdUdBQXVHO0lBQ3ZHLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksK0NBQStDO0lBQy9DLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVHQUF1RztJQUN2RyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBnbG9iYWwgc3R5bGUgKi9cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtaWNvbnNAMS45LjEvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzXFxcIik7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLWFjY2VudC1jb2xvcjogI2ZmODIwMDtcXHJcXG4gICAgLS1hc2lkZS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICAtLWRhcmstZ3JleTogIzc1NzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsMTMwLDAsMSkgMCUsIHJnYmEoMjMxLDE3NiwwLDEpIDUwJSwgcmdiYSgyNTUsMjI0LDAsMSkgMTAwJSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXNpZGUtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxyXFxufVxcclxcblxcclxcbm5hdiAuYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pdGVtLWhlYWRpbmcge1xcclxcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWl0ZW0taGVhZGluZyBpIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaXRlbS1oZWFkaW5nIGk6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbm5hdiAuYnV0dG9uIGkge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWxpc3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDYwMHB4LCA4MCUsIDEwMDBweCk7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdCwgLmRlbGV0ZSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdDpob3ZlciwgLmRlbGV0ZTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIC5lZGl0OmhvdmVyLCAuYWN0aXZlIC5kZWxldGU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2stbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXNpZGUtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0tbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbS1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbS1yaWdodCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0gYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXNpZGUtYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5sb3cge1xcclxcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5oaWdoIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICB0b3A6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAwIHZhcigtLWRhcmstZ3JleSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsMTMwLDAsMSkgMCUsIHJnYmEoMjMxLDE3NiwwLDEpIDUwJSwgcmdiYSgyNTUsMjI0LDAsMSkgMTAwJSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIGkge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG4gICAgZ2FwOiA0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGZvcm0gaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbiAgICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgZm9ybSBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zIGJ1dHRvbjpob3ZlciwgLnRhc2staXRlbSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idXR0b24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KVxcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgLnN1Ym1pdC1idXR0b24ge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyAuc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTcxMDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2U5NzEwMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0cygpIHtcclxuICAgICAgICBpZiAoJ3Byb2plY3RzJyBpbiBsb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRUYXNrcygpIHtcclxuICAgICAgICBpZiAoJ3Rhc2tzJyBpbiBsb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0VGFza3MoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYXNrcygpLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdElkID09PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QoaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHMoKS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3RJZCAhPSBpZCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzKCkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0SWQgIT0gaWQpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFRhc2sodGFzaykge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xyXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVsZXRlVGFzayhpZCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpLmZpbHRlcih0YXNrID0+IHRhc2sudGFza0lkICE9IGlkKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9TdG9yYWdlJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi90eXBlcy9Qcm9qZWN0JztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90eXBlcy9UYXNrJztcclxuXHJcbmNvbnN0IFZpZXcgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiAuYnV0dG9uJykpO1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idXR0b24nKTtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XHJcbiAgICBjb25zdCB2aWV3QWxsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXctYWxsLWJ1dHRvbicpO1xyXG5cclxuICAgIC8vQWxsb3cgbmF2IGJ1dHRvbnMgdG8gc2V0IGFjdGl2ZSBzdGF0dXMgb25jbGlja1xyXG4gICAgLy9hbmQgbWFrZSBtYWluIG5hdiBidXR0b25zIGhpZGUgYWRkLXRhc2sgYnV0dG9uXHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoYnV0dG9uKTtcclxuICAgICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbiAgICB9KSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlKGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vQWRkIG5ldyBwcm9qZWN0IHRvIERPTVxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCBidXR0b24nKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IChcclxuICAgICAgICAgICAgYCR7cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGVuY2lsLXNxdWFyZSBlZGl0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10cmFzaCBkZWxldGVcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZShidXR0b24pO1xyXG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiBhdHRhY2ggbW9kYWxzIHRvIGVkaXQgYW5kIGRlbGV0ZSBidXR0b25zIGhlcmVcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdC5wcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICBidXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChidXR0b24pO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB2aWV3QWxsQnV0dG9uLmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xyXG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BZGQgbmV3IHRhc2sgdG8gRE9NXHJcbiAgICBmdW5jdGlvbiBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eSk7XHJcblxyXG4gICAgICAgIHRhc2tJdGVtLmlubmVySFRNTCA9IChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YXNrLWl0ZW0tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgJHt0YXNrLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staXRlbS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5EZXRhaWxzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAke3Rhc2suZHVlRGF0ZX1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1wZW5jaWwtc3F1YXJlIGVkaXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10cmFzaCBkZWxldGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcclxuXHJcbiAgICAgICAgLy9UT0RPOiBhdHRhY2ggbW9kYWxzIHRvIGRldGFpbHMsIGVkaXQgYW5kIGRlbGV0ZSBidXR0b25zIGhlcmVcclxuXHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy9oYW5kbGUgb3BlbmluZyBhbmQgY2xvc2luZyBvZiBhZGQtcHJvamVjdCBtb2RhbFxyXG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LW1vZGFsJyk7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gYWRkUHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnV0dG9uJyk7XHJcblxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkUHJvamVjdE1vZGFsLmNsb3NlKCkpO1xyXG5cclxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgY2xvc2VNb2RhbChlLCBhZGRQcm9qZWN0TW9kYWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9oYW5kbGUgYWRkLXByb2plY3QgbW9kYWwgZXZlbnRcclxuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWZvcm0nKTtcclxuICAgIGFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoYWRkUHJvamVjdEZvcm0udGl0bGUudmFsdWUpO1xyXG5cclxuICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgVmlldy5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG5cclxuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbChlLCBtb2RhbCkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIHtcclxuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRQcm9qZWN0LFxyXG4gICAgICAgIGFkZFRhc2ssXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlldzsiLCJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RJZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0SWQsIHRpdGxlLCBkZXNjLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMudGFza0lkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcnO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xyXG5cclxuLy9sb2FkIHByb2plY3RzIGFuZCB0YXNrcyBmcm9tIHN0b3JhZ2Ugb24gc3RhcnR1cFxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBTdG9yYWdlLmdldFRhc2tzKCk7XHJcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gVmlldy5hZGRUYXNrKHRhc2spKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IFN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcclxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBWaWV3LmFkZFByb2plY3QocHJvamVjdCkpO1xyXG59XHJcblxyXG5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9