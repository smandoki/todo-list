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
___CSS_LOADER_EXPORT___.push([module.id, "/* global style */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    --accent-color: #ff8200;\r\n    --aside-background-color: #f7f7f7;\r\n    --dark-grey: #757575;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 60px 1fr;\r\n    font-weight: 500;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 20px;\r\n    gap: 10px;\r\n    background: linear-gradient(90deg, rgba(255,130,0,1) 0%, rgba(231,176,0,1) 50%, rgba(255,224,0,1) 100%);\r\n    color: white;\r\n    grid-column: 1 / 3;\r\n}\r\n\r\nheader i {\r\n    font-size: 2rem;\r\n}\r\n\r\n.checkbox {\r\n    pointer-events: none;\r\n}\r\n\r\nnav {\r\n    background-color: var(--aside-background-color);\r\n    padding: 40px 20px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\n.button {\r\n    border-radius: 5px;\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nnav .button {\r\n    background-color: white;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    border: 1px solid transparent;\r\n    padding-right: 0;\r\n}\r\n\r\nnav .button:hover {\r\n    border: 1px solid var(--accent-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.add-item-heading {\r\n    margin-top: 60px;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px 15px;\r\n    border-bottom: 1px solid var(--dark-grey);\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.add-item-heading i {\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.add-item-heading i:hover {\r\n    color: var(--accent-color);\r\n}\r\n\r\nnav .active {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\nnav .button i {\r\n    margin-right: 10px;\r\n}\r\n\r\n.task-list-container {\r\n    width: clamp(600px, 80%, 1000px);\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 0 20px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.edit, .delete {\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.edit:hover, .delete:hover {\r\n    color: var(--accent-color);\r\n}\r\n\r\n.active .edit:hover, .active .delete:hover {\r\n    color: var(--dark-grey);\r\n}\r\n\r\n#task-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n\r\n.task-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--aside-background-color);\r\n    padding: 12px 16px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item:hover {\r\n    background-color: #eeeded;\r\n}\r\n\r\n.task-item:active {\r\n    background-color: #ebe9e9;\r\n}\r\n\r\n.strike {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.task-item-left {\r\n    display: flex;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-right {\r\n    display: flex;\r\n    gap: 30px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-right div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.task-item-right .date {\r\n    width: 80px;\r\n}\r\n\r\n.task-item button {\r\n    background-color: var(--aside-background-color);\r\n    padding: 5px 10px;\r\n    border: 1px solid var(--accent-color);\r\n    color: var(--accent-color);\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.task-item button:hover {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\n.low {\r\n    border-left: 5px solid lightgreen;\r\n}\r\n\r\n.medium {\r\n    border-left: 5px solid lightsalmon;\r\n}\r\n\r\n.high {\r\n    border-left: 5px solid lightcoral;\r\n}\r\n\r\n.modal {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    top: 200px;\r\n    width: 400px;\r\n    border: none;\r\n    box-shadow: 0 0 4px 0 var(--dark-grey);\r\n    border-radius: 5px;\r\n}\r\n\r\n.modal-header {\r\n    background: linear-gradient(90deg, rgba(255,130,0,1) 0%, rgba(231,176,0,1) 50%, rgba(255,224,0,1) 100%);\r\n    display: flex;\r\n    color: white;\r\n    padding: 16px;\r\n    align-items: center;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.modal-header i {\r\n    font-size: 1.2rem;\r\n}\r\n\r\ni:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.modal form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 16px;\r\n    color: var(--dark-grey);\r\n    gap: 4px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.modal form input {\r\n    padding: 10px 8px;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    outline: none;\r\n    color: var(--dark-grey);\r\n    font-size: 1.05rem;\r\n    transition: all 0.2s ease-in-out;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.modal form input:focus {\r\n    border-color: var(--accent-color);\r\n}\r\n\r\n.form-buttons {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 10px;\r\n}\r\n\r\n.form-buttons button {\r\n    padding: 10px 12px;\r\n    background-color: white;\r\n    border: 1px solid lightgray;\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n    outline: none;\r\n}\r\n\r\n.form-buttons button:hover, .task-item {\r\n    cursor: pointer;\r\n}\r\n\r\n.cancel-button {\r\n    color: var(--dark-grey)\r\n}\r\n\r\n.cancel-button:hover {\r\n    border-color: var(--accent-color);\r\n    color: var(--accent-color);\r\n}\r\n\r\n.form-buttons .submit-button {\r\n    border-color: var(--accent-color);\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\n.form-buttons .submit-button:hover {\r\n    background-color: #e97100;\r\n    border-color: #e97100;\r\n}\r\n\r\n.delete-modal-header {\r\n    background: linear-gradient(90deg, rgba(191,0,0,1) 0%, rgba(253,29,29,1) 50%, rgba(255,83,34,1) 100%); \r\n}\r\n\r\n.form-buttons .delete-submit-button {\r\n    background-color: #d00808;\r\n    border-color: #d00808;\r\n    color: white;\r\n}\r\n\r\n.form-buttons .delete-submit-button:hover {\r\n    background-color: #bb0606;\r\n    border-color: #bb0606;\r\n}\r\n\r\n.delete-cancel-button {\r\n    color: var(--dark-grey)\r\n}\r\n\r\n.delete-cancel-button:hover {\r\n    border-color: black;\r\n}\r\n\r\ntextarea {\r\n    outline: none;\r\n    border: 1px solid lightgray;\r\n    padding: 4px;\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n    margin-bottom: 10px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\ntextarea:focus {\r\n    border-color: var(--accent-color);\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n    background-color: white;\r\n    padding: 10px 8px;\r\n    border: 1px solid lightgray;\r\n    border-radius: 5px;\r\n    color: var(--dark-grey);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* global style */\r\n@import url(\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css\");\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    --accent-color: #ff8200;\r\n    --aside-background-color: #f7f7f7;\r\n    --dark-grey: #757575;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-rows: 60px 1fr;\r\n    font-weight: 500;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 20px;\r\n    gap: 10px;\r\n    background: linear-gradient(90deg, rgba(255,130,0,1) 0%, rgba(231,176,0,1) 50%, rgba(255,224,0,1) 100%);\r\n    color: white;\r\n    grid-column: 1 / 3;\r\n}\r\n\r\nheader i {\r\n    font-size: 2rem;\r\n}\r\n\r\n.checkbox {\r\n    pointer-events: none;\r\n}\r\n\r\nnav {\r\n    background-color: var(--aside-background-color);\r\n    padding: 40px 20px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\n.button {\r\n    border-radius: 5px;\r\n    transition: ease-in-out 0.3s;\r\n}\r\n\r\nnav .button {\r\n    background-color: white;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    border: 1px solid transparent;\r\n    padding-right: 0;\r\n}\r\n\r\nnav .button:hover {\r\n    border: 1px solid var(--accent-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.add-item-heading {\r\n    margin-top: 60px;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px 15px;\r\n    border-bottom: 1px solid var(--dark-grey);\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.add-item-heading i {\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.add-item-heading i:hover {\r\n    color: var(--accent-color);\r\n}\r\n\r\nnav .active {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\nnav .button i {\r\n    margin-right: 10px;\r\n}\r\n\r\n.task-list-container {\r\n    width: clamp(600px, 80%, 1000px);\r\n}\r\n\r\nmain {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 0 20px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.edit, .delete {\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.edit:hover, .delete:hover {\r\n    color: var(--accent-color);\r\n}\r\n\r\n.active .edit:hover, .active .delete:hover {\r\n    color: var(--dark-grey);\r\n}\r\n\r\n#task-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n\r\n.task-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    background-color: var(--aside-background-color);\r\n    padding: 12px 16px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item:hover {\r\n    background-color: #eeeded;\r\n}\r\n\r\n.task-item:active {\r\n    background-color: #ebe9e9;\r\n}\r\n\r\n.strike {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.task-item-left {\r\n    display: flex;\r\n    gap: 10px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-right {\r\n    display: flex;\r\n    gap: 30px;\r\n    align-items: center;\r\n}\r\n\r\n.task-item-right div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.task-item-right .date {\r\n    width: 80px;\r\n}\r\n\r\n.task-item button {\r\n    background-color: var(--aside-background-color);\r\n    padding: 5px 10px;\r\n    border: 1px solid var(--accent-color);\r\n    color: var(--accent-color);\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.task-item button:hover {\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\n.low {\r\n    border-left: 5px solid lightgreen;\r\n}\r\n\r\n.medium {\r\n    border-left: 5px solid lightsalmon;\r\n}\r\n\r\n.high {\r\n    border-left: 5px solid lightcoral;\r\n}\r\n\r\n.modal {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    top: 200px;\r\n    width: 400px;\r\n    border: none;\r\n    box-shadow: 0 0 4px 0 var(--dark-grey);\r\n    border-radius: 5px;\r\n}\r\n\r\n.modal-header {\r\n    background: linear-gradient(90deg, rgba(255,130,0,1) 0%, rgba(231,176,0,1) 50%, rgba(255,224,0,1) 100%);\r\n    display: flex;\r\n    color: white;\r\n    padding: 16px;\r\n    align-items: center;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.modal-header i {\r\n    font-size: 1.2rem;\r\n}\r\n\r\ni:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.modal form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 16px;\r\n    color: var(--dark-grey);\r\n    gap: 4px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.modal form input {\r\n    padding: 10px 8px;\r\n    border-radius: 5px;\r\n    border: 1px solid lightgray;\r\n    outline: none;\r\n    color: var(--dark-grey);\r\n    font-size: 1.05rem;\r\n    transition: all 0.2s ease-in-out;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.modal form input:focus {\r\n    border-color: var(--accent-color);\r\n}\r\n\r\n.form-buttons {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 10px;\r\n}\r\n\r\n.form-buttons button {\r\n    padding: 10px 12px;\r\n    background-color: white;\r\n    border: 1px solid lightgray;\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n    outline: none;\r\n}\r\n\r\n.form-buttons button:hover, .task-item {\r\n    cursor: pointer;\r\n}\r\n\r\n.cancel-button {\r\n    color: var(--dark-grey)\r\n}\r\n\r\n.cancel-button:hover {\r\n    border-color: var(--accent-color);\r\n    color: var(--accent-color);\r\n}\r\n\r\n.form-buttons .submit-button {\r\n    border-color: var(--accent-color);\r\n    background-color: var(--accent-color);\r\n    color: white;\r\n}\r\n\r\n.form-buttons .submit-button:hover {\r\n    background-color: #e97100;\r\n    border-color: #e97100;\r\n}\r\n\r\n.delete-modal-header {\r\n    background: linear-gradient(90deg, rgba(191,0,0,1) 0%, rgba(253,29,29,1) 50%, rgba(255,83,34,1) 100%); \r\n}\r\n\r\n.form-buttons .delete-submit-button {\r\n    background-color: #d00808;\r\n    border-color: #d00808;\r\n    color: white;\r\n}\r\n\r\n.form-buttons .delete-submit-button:hover {\r\n    background-color: #bb0606;\r\n    border-color: #bb0606;\r\n}\r\n\r\n.delete-cancel-button {\r\n    color: var(--dark-grey)\r\n}\r\n\r\n.delete-cancel-button:hover {\r\n    border-color: black;\r\n}\r\n\r\ntextarea {\r\n    outline: none;\r\n    border: 1px solid lightgray;\r\n    padding: 4px;\r\n    border-radius: 5px;\r\n    transition: all 0.2s ease-in-out;\r\n    margin-bottom: 10px;\r\n    color: var(--dark-grey);\r\n}\r\n\r\ntextarea:focus {\r\n    border-color: var(--accent-color);\r\n}\r\n\r\nselect {\r\n    margin-bottom: 10px;\r\n    background-color: white;\r\n    padding: 10px 8px;\r\n    border: 1px solid lightgray;\r\n    border-radius: 5px;\r\n    color: var(--dark-grey);\r\n}"],"sourceRoot":""}]);
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

    static editProject(id, title) {
        const projects = this.getProjects();
        const index = projects.findIndex(project => project.projectId === id);

        projects[index].title = title;
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    static editTask(id, title, desc, priority, dueDate) {
        const tasks = this.getTasks();
        const index = tasks.findIndex(task => task.taskId === id);
        const task = tasks[index];

        task.title = title;
        task.desc = desc;
        task.priority = priority;
        task.dueDate = dueDate;

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static setComplete(id, completed) {
        const tasks = this.getTasks();
        const index = tasks.findIndex(task => task.taskId === id);
        const task = tasks[index];
        task.completed = completed;

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
    const editProjectModal = document.querySelector('#edit-project-modal');
    const editProjectForm = document.querySelector('#edit-project-form');
    const deleteProjectForm = document.querySelector('#delete-project-form');
    const deleteProjectModal = document.querySelector('#delete-project-modal');
    const addTaskForm = document.querySelector('#add-task-form');
    const taskDetailsModal = document.querySelector('#task-details-modal');
    const taskDetailsForm = document.querySelector('#task-details-form');
    const editTaskModal = document.querySelector('#edit-task-modal');
    const editTaskForm = document.querySelector('#edit-task-form');
    const deleteTaskModal = document.querySelector('#delete-task-modal');
    const deleteTaskForm = document.querySelector('#delete-task-form');
    const viewTodayButton = document.querySelector('#view-today-button');
    const viewWeekButton = document.querySelector('#view-week-button');

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
    function addProject(project, click) {
        const button = document.createElement('div');
        button.setAttribute('class', 'project button');
        button.setAttribute('id', project.projectId);

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
            addTaskForm.projectId.value = project.projectId;

            const tasks = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectTasks(project.projectId);
            taskList.innerHTML = '';
            tasks.forEach(task => addTask(task));
        });

        const editButton = button.querySelector('.edit');
        const deleteButton = button.querySelector('.delete');

        editButton.addEventListener('click', (e) => {
            e.stopPropagation();

            editProjectForm.projectId.value = project.projectId;
            editProjectForm.title.value = project.title;

            editProjectModal.showModal();
        });
        
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();

            deleteProjectForm.projectId.value = project.projectId;
            const message = deleteProjectForm.querySelector('.delete-message');
            message.innerText = `Are you sure you want to delete ${project.title}?`;

            deleteProjectModal.showModal();
        });

        buttons.push(button);
        projectList.appendChild(button);
        if (click) button.click();
    }

    //Add new task to DOM
    function addTask(task) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.classList.add(task.priority);
        taskItem.setAttribute('id', task.taskId);

        taskItem.innerHTML = (
            `<div class="task-item-left">
                <input type="checkbox" class="checkbox" disabled>
                <div class="title">${task.title}</div>
            </div>
            <div class="task-item-right">
                <button>Details</button>
                <div class="date">${task.dueDate}</div>
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
        const title = taskItem.querySelector('.title');

        if (checkbox.checked) {
            title.classList.add('strike');
        }

        detailsButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            taskDetailsForm.title.value = task.title;
            taskDetailsForm.desc.value = task.desc;
            taskDetailsForm.priority.value = task.priority;
            taskDetailsForm.dueDate.value = task.dueDate;

            taskDetailsModal.showModal();
        });

        editButton.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();

            editTaskForm.taskId.value = task.taskId;
            editTaskForm.title.value = task.title;
            editTaskForm.desc.value = task.desc;
            editTaskForm.priority.value = task.priority;
            editTaskForm.dueDate.value = task.dueDate;

            editTaskModal.showModal();
        });

        deleteButton.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();

            const message = deleteTaskModal.querySelector('.delete-message');
            message.innerText = `Are you sure you want to delete ${task.title}`;
            deleteTaskForm.taskId.value = task.taskId;

            deleteTaskModal.showModal();
        });

        taskItem.addEventListener('click', () => {
            const checkbox = taskItem.querySelector('.checkbox');
            checkbox.checked = !checkbox.checked;

            title.classList.toggle('strike');

            _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].setComplete(task.taskId, checkbox.checked);
        });

        taskList.appendChild(taskItem);
    }

    
    //handle opening and closing of add-project modal
    const addProjectModal = document.querySelector('#add-project-modal');
    const addProjectButton = document.querySelector('#add-project-button');

    const addProjectCancel = addProjectModal.querySelector('.cancel-button');
    addProjectCancel.addEventListener('click', (e) => {
        addProjectModal.close();
        e.preventDefault();
    });

    addProjectButton.addEventListener('click', () => {
        addProjectForm.reset();
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
        View.addProject(project, true);
    });

    //edit-project modal
    const editProjectCancel = editProjectModal.querySelector('.cancel-button');
    editProjectCancel.addEventListener('click', (e) => {
        editProjectModal.close();
        e.preventDefault();
    });

    editProjectModal.addEventListener('click', e => {
        closeModal(e, editProjectModal);
    });

    editProjectForm.addEventListener('submit', () => {
        const projectId = editProjectForm.projectId.value;
        const title = editProjectForm.title.value;
        
        _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(projectId, title);

        projectList.innerHTML = '';
        const projects = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
        projects.forEach(project => addProject(project, true));
    });

    //delete-project modal
    deleteProjectModal.addEventListener('click', e => {
        closeModal(e, deleteProjectModal);
    });

    deleteProjectForm.addEventListener('submit', () => {
        const projectId = deleteProjectForm.projectId.value;
        const project = document.getElementById(projectId);

        _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(projectId);
        project.parentElement.removeChild(project);

        viewAllButton.click();
    });

    const cancelProjectDelete = deleteProjectModal.querySelector('.delete-cancel-button');
    cancelProjectDelete.addEventListener('click', (e) => {
        deleteProjectModal.close();
        e.preventDefault();
    });

    function closeModal(e, modal) {
        if (e.target === modal) {
            modal.close();
        }
    }

    //HANDLE ADD TASK MODALS BELOW
    const addTaskModal = document.querySelector('#add-task-modal');
    const cancelAddTask = addTaskModal.querySelector('.cancel-button');

    addTaskModal.addEventListener('click', (e) => {
        closeModal(e, addTaskModal);
    });

    addTaskButton.addEventListener('click', () => addTaskModal.showModal());
    cancelAddTask.addEventListener('click', (e) => {
        e.preventDefault();
        addTaskModal.close();
    });

    addTaskForm.addEventListener('submit', () => {
        const projectId = addTaskForm.projectId.value;
        const title = addTaskForm.title.value;
        const desc = addTaskForm.desc.value;
        const priority = addTaskForm.priority.value;
        const dueDate = addTaskForm.dueDate.value;

        const task = new _types_Task__WEBPACK_IMPORTED_MODULE_2__["default"](
            projectId,
            title,
            desc,
            priority,
            dueDate
        );

        _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(task);
        addTask(task);

        addTaskForm.reset();
        addTaskForm.projectId.value = projectId;
    });

    //task details modal
    taskDetailsModal.addEventListener('click', e => {
        closeModal(e, taskDetailsModal);
    });

    //edit task modal
    editTaskModal.addEventListener('click', e => {
        closeModal(e, editTaskModal);
    });

    editTaskForm.addEventListener('submit', () => {
        const taskId = editTaskForm.taskId.value;
        const title = editTaskForm.title.value;
        const desc = editTaskForm.desc.value;
        const priority = editTaskForm.priority.value;
        const dueDate = editTaskForm.dueDate.value;

        _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(
            taskId,
            title,
            desc,
            priority,
            dueDate
        );

        const taskItem = document.getElementById(taskId);
        const taskTitle = taskItem.querySelector('.title');
        const taskDueDate = taskItem.querySelector('.date');
        taskTitle.innerText = title;
        taskDueDate.innerText = dueDate;

        taskItem.classList.remove('low');
        taskItem.classList.remove('medium');
        taskItem.classList.remove('high');
        taskItem.classList.add(priority);
    });

    const cancelEditTask = editTaskModal.querySelector('.cancel-button');
    cancelEditTask.addEventListener('click', e => {
        e.preventDefault();
        editTaskModal.close();
    });

    //delete task modal
    deleteTaskModal.addEventListener('click', e => {
        closeModal(e, deleteTaskModal);
    })

    const cancelTaskDelete = deleteTaskModal.querySelector('.delete-cancel-button');
    cancelTaskDelete.addEventListener('click', e => {
        e.preventDefault();
        deleteTaskModal.close();
    });

    deleteTaskForm.addEventListener('submit', () => {
        const taskId = deleteTaskForm.taskId.value;
        const taskItem = document.getElementById(taskId);

        taskItem.parentElement.removeChild(taskItem);
        _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(taskId);
    });

    //functionality of default nav buttons
    viewAllButton.addEventListener('click', () => {
        taskList.innerHTML = '';

        const tasks = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
        tasks.forEach(task => addTask(task));
    });

    viewTodayButton.addEventListener('click', () => {
        const today = new Date();
        const tasks = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks().filter(task => {
            const date = new Date(task.dueDate);

            return (
                today.getDate() === date.getDate() &&
                today.getMonth() === date.getMonth() &&
                today.getFullYear() === date.getFullYear()
            );
        });

        taskList.innerHTML = '';
        tasks.forEach(task => addTask(task));
    });

    viewWeekButton.addEventListener('click', () => {
        const currentDate = new Date();

        const tasks = _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks().filter(task => {
            const date = new Date(task.dueDate);

            return date.getTime() < currentDate.getTime() + (7 * 24 * 60 * 60 * 1000);
        });

        taskList.innerHTML = '';
        tasks.forEach(task => addTask(task));
    });

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
    projects.forEach(project => _View__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(project, false));
}

init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQzVCYzs7QUFFL0I7QUFDQSxxQ0FBcUMsc0RBQVU7QUFDL0M7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNOUjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VnQztBQUNNO0FBQ047QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBdUI7QUFDakQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxjQUFjO0FBQ2pGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsV0FBVztBQUM5RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFtQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNEQUFPO0FBQ25DO0FBQ0EsUUFBUSwyREFBa0I7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBbUI7QUFDM0I7QUFDQTtBQUNBLHlCQUF5Qiw0REFBbUI7QUFDNUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWtCO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFnQjtBQUN0QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseURBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix5REFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDdFlpQjtBQUNwQztBQUNlO0FBQ2Y7QUFDQSx5QkFBeUIsZ0RBQU07QUFDL0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQb0M7QUFDcEM7QUFDZTtBQUNmO0FBQ0Esc0JBQXNCLGdEQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLO0FBQ007QUFDaEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUFnQjtBQUNsQywwQkFBMEIscURBQVk7QUFDdEM7QUFDQSxxQkFBcUIsNERBQW1CO0FBQ3hDLGdDQUFnQyx3REFBZTtBQUMvQztBQUNBO0FBQ0EsTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdHlwZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdHlwZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXAtaWNvbnNAMS45LjEvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBnbG9iYWwgc3R5bGUgKi9cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLWFjY2VudC1jb2xvcjogI2ZmODIwMDtcXHJcXG4gICAgLS1hc2lkZS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcclxcbiAgICAtLWRhcmstZ3JleTogIzc1NzU3NTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IDFmcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsMTMwLDAsMSkgMCUsIHJnYmEoMjMxLDE3NiwwLDEpIDUwJSwgcmdiYSgyNTUsMjI0LDAsMSkgMTAwJSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFzaWRlLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5idXR0b246aG92ZXIge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaXRlbS1oZWFkaW5nIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pdGVtLWhlYWRpbmcgaSB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWl0ZW0taGVhZGluZyBpOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbm5hdiAuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmJ1dHRvbiBpIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0LWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg2MDBweCwgODAlLCAxMDAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQsIC5kZWxldGUge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQ6aG92ZXIsIC5kZWxldGU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSAuZWRpdDpob3ZlciwgLmFjdGl2ZSAuZGVsZXRlOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFzaWRlLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZGVkO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmU5ZTk7XFxyXFxufVxcclxcblxcclxcbi5zdHJpa2Uge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbS1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtLXJpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtLXJpZ2h0IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbS1yaWdodCAuZGF0ZSB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIGJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFzaWRlLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG93IHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBsaWdodGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBsaWdodHNhbG1vbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2gge1xcclxcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgICB0b3A6IDIwMHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAwIHZhcigtLWRhcmstZ3JleSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsMTMwLDAsMSkgMCUsIHJnYmEoMjMxLDE3NiwwLDEpIDUwJSwgcmdiYSgyNTUsMjI0LDAsMSkgMTAwJSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIGkge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG4gICAgZ2FwOiA0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGZvcm0gaW5wdXQge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbiAgICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgZm9ybSBpbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zIGJ1dHRvbjpob3ZlciwgLnRhc2staXRlbSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idXR0b24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KVxcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgLnN1Ym1pdC1idXR0b24ge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyAuc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTcxMDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2U5NzEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1tb2RhbC1oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTkxLDAsMCwxKSAwJSwgcmdiYSgyNTMsMjksMjksMSkgNTAlLCByZ2JhKDI1NSw4MywzNCwxKSAxMDAlKTsgXFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgLmRlbGV0ZS1zdWJtaXQtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwMDgwODtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZDAwODA4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgLmRlbGV0ZS1zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiMDYwNjtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYmIwNjA2O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWNhbmNlbC1idXR0b24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KVxcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWNhbmNlbC1idXR0b246aG92ZXIge1xcclxcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjs7QUFJakI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJ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Q2hCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFHQUFxRztBQUN6Rzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogZ2xvYmFsIHN0eWxlICovXFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuOS4xL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzc1xcXCIpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1hY2NlbnQtY29sb3I6ICNmZjgyMDA7XFxyXFxuICAgIC0tYXNpZGUtYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXHJcXG4gICAgLS1kYXJrLWdyZXk6ICM3NTc1NzU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCAxZnI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDEzMCwwLDEpIDAlLCByZ2JhKDIzMSwxNzYsMCwxKSA1MCUsIHJnYmEoMjU1LDIyNCwwLDEpIDEwMCUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGkge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbm5hdiAuYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWl0ZW0taGVhZGluZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtaXRlbS1oZWFkaW5nIGkge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pdGVtLWhlYWRpbmcgaTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5idXR0b24gaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogY2xhbXAoNjAwcHgsIDgwJSwgMTAwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5lZGl0LCAuZGVsZXRlIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5lZGl0OmhvdmVyLCAuZGVsZXRlOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUgLmVkaXQ6aG92ZXIsIC5hY3RpdmUgLmRlbGV0ZTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbTphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlOWU5O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RyaWtlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0tbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbS1yaWdodCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbS1yaWdodCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW0tcmlnaHQgLmRhdGUge1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbSBidXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hc2lkZS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdyB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgbGlnaHRncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bSB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgbGlnaHRzYWxtb247XFxyXFxufVxcclxcblxcclxcbi5oaWdoIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBsaWdodGNvcmFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgdG9wOiAyMDBweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMCB2YXIoLS1kYXJrLWdyZXkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDEzMCwwLDEpIDAlLCByZ2JhKDIzMSwxNzYsMCwxKSA1MCUsIHJnYmEoMjU1LDIyNCwwLDEpIDEwMCUpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDE2cHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWhlYWRlciBpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBmb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxyXFxuICAgIGdhcDogNHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBmb3JtIGlucHV0IHtcXHJcXG4gICAgcGFkZGluZzogMTBweCA4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnV0dG9ucyBidXR0b246aG92ZXIsIC50YXNrLWl0ZW0ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JleSlcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbC1idXR0b246aG92ZXIge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zIC5zdWJtaXQtYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ1dHRvbnMgLnN1Ym1pdC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk3MTAwO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNlOTcxMDA7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtbW9kYWwtaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE5MSwwLDAsMSkgMCUsIHJnYmEoMjUzLDI5LDI5LDEpIDUwJSwgcmdiYSgyNTUsODMsMzQsMSkgMTAwJSk7IFxcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zIC5kZWxldGUtc3VibWl0LWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMDA4MDg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2QwMDgwODtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idXR0b25zIC5kZWxldGUtc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYjA2MDY7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2JiMDYwNjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1jYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JleSlcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1jYW5jZWwtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTBweCA4cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0cygpIHtcclxuICAgICAgICBpZiAoJ3Byb2plY3RzJyBpbiBsb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRUYXNrcygpIHtcclxuICAgICAgICBpZiAoJ3Rhc2tzJyBpbiBsb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRQcm9qZWN0VGFza3MoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYXNrcygpLmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdElkID09PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QoaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHMoKS5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3RJZCAhPSBpZCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzKCkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0SWQgIT0gaWQpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFkZFRhc2sodGFzaykge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGhpcy5nZXRUYXNrcygpO1xyXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZVRhc2soaWQpIHtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IHRoaXMuZ2V0VGFza3MoKS5maWx0ZXIodGFzayA9PiB0YXNrLnRhc2tJZCAhPSBpZCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWRpdFByb2plY3QoaWQsIHRpdGxlKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3RJZCA9PT0gaWQpO1xyXG5cclxuICAgICAgICBwcm9qZWN0c1tpbmRleF0udGl0bGUgPSB0aXRsZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBlZGl0VGFzayhpZCwgdGl0bGUsIGRlc2MsIHByaW9yaXR5LCBkdWVEYXRlKSB7XHJcbiAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLnRhc2tJZCA9PT0gaWQpO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrc1tpbmRleF07XHJcblxyXG4gICAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0YXNrLmRlc2MgPSBkZXNjO1xyXG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0YXNrLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRDb21wbGV0ZShpZCwgY29tcGxldGVkKSB7XHJcbiAgICAgICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLnRhc2tJZCA9PT0gaWQpO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrc1tpbmRleF07XHJcbiAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgU3RvcmFnZSBmcm9tICcuL1N0b3JhZ2UnO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3R5cGVzL1Byb2plY3QnO1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL3R5cGVzL1Rhc2snO1xyXG5cclxuY29uc3QgVmlldyA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IC5idXR0b24nKSk7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcclxuICAgIGNvbnN0IHZpZXdBbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlldy1hbGwtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBlZGl0UHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1tb2RhbCcpO1xyXG4gICAgY29uc3QgZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1mb3JtJyk7XHJcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtcHJvamVjdC1mb3JtJyk7XHJcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLXByb2plY3QtbW9kYWwnKTtcclxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWZvcm0nKTtcclxuICAgIGNvbnN0IHRhc2tEZXRhaWxzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXRhaWxzLW1vZGFsJyk7XHJcbiAgICBjb25zdCB0YXNrRGV0YWlsc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXRhaWxzLWZvcm0nKTtcclxuICAgIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLW1vZGFsJyk7XHJcbiAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLWZvcm0nKTtcclxuICAgIGNvbnN0IGRlbGV0ZVRhc2tNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtdGFzay1tb2RhbCcpO1xyXG4gICAgY29uc3QgZGVsZXRlVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLXRhc2stZm9ybScpO1xyXG4gICAgY29uc3Qgdmlld1RvZGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXctdG9kYXktYnV0dG9uJyk7XHJcbiAgICBjb25zdCB2aWV3V2Vla0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3LXdlZWstYnV0dG9uJyk7XHJcblxyXG4gICAgLy9BbGxvdyBuYXYgYnV0dG9ucyB0byBzZXQgYWN0aXZlIHN0YXR1cyBvbmNsaWNrXHJcbiAgICAvL2FuZCBtYWtlIG1haW4gbmF2IGJ1dHRvbnMgaGlkZSBhZGQtdGFzayBidXR0b25cclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZShidXR0b24pO1xyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgIH0pKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3RpdmUoYnV0dG9uKSB7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9BZGQgbmV3IHByb2plY3QgdG8gRE9NXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3QsIGNsaWNrKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCBidXR0b24nKTtcclxuICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3QucHJvamVjdElkKTtcclxuXHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IChcclxuICAgICAgICAgICAgYCR7cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGVuY2lsLXNxdWFyZSBlZGl0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10cmFzaCBkZWxldGVcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZShidXR0b24pO1xyXG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBhZGRUYXNrRm9ybS5wcm9qZWN0SWQudmFsdWUgPSBwcm9qZWN0LnByb2plY3RJZDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gU3RvcmFnZS5nZXRQcm9qZWN0VGFza3MocHJvamVjdC5wcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IGFkZFRhc2sodGFzaykpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcclxuXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBlZGl0UHJvamVjdEZvcm0ucHJvamVjdElkLnZhbHVlID0gcHJvamVjdC5wcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0Rm9ybS50aXRsZS52YWx1ZSA9IHByb2plY3QudGl0bGU7XHJcblxyXG4gICAgICAgICAgICBlZGl0UHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0Rm9ybS5wcm9qZWN0SWQudmFsdWUgPSBwcm9qZWN0LnByb2plY3RJZDtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRlbGV0ZVByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtbWVzc2FnZScpO1xyXG4gICAgICAgICAgICBtZXNzYWdlLmlubmVyVGV4dCA9IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7cHJvamVjdC50aXRsZX0/YDtcclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBpZiAoY2xpY2spIGJ1dHRvbi5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQWRkIG5ldyB0YXNrIHRvIERPTVxyXG4gICAgZnVuY3Rpb24gYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcclxuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xyXG4gICAgICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrLnRhc2tJZCk7XHJcblxyXG4gICAgICAgIHRhc2tJdGVtLmlubmVySFRNTCA9IChcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJ0YXNrLWl0ZW0tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGFzay50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWl0ZW0tcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+RGV0YWlsczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke3Rhc2suZHVlRGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1wZW5jaWwtc3F1YXJlIGVkaXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10cmFzaCBkZWxldGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUnKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG5cclxuICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICB0YXNrRGV0YWlsc0Zvcm0udGl0bGUudmFsdWUgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgICAgICB0YXNrRGV0YWlsc0Zvcm0uZGVzYy52YWx1ZSA9IHRhc2suZGVzYztcclxuICAgICAgICAgICAgdGFza0RldGFpbHNGb3JtLnByaW9yaXR5LnZhbHVlID0gdGFzay5wcmlvcml0eTtcclxuICAgICAgICAgICAgdGFza0RldGFpbHNGb3JtLmR1ZURhdGUudmFsdWUgPSB0YXNrLmR1ZURhdGU7XHJcblxyXG4gICAgICAgICAgICB0YXNrRGV0YWlsc01vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGVkaXRUYXNrRm9ybS50YXNrSWQudmFsdWUgPSB0YXNrLnRhc2tJZDtcclxuICAgICAgICAgICAgZWRpdFRhc2tGb3JtLnRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcclxuICAgICAgICAgICAgZWRpdFRhc2tGb3JtLmRlc2MudmFsdWUgPSB0YXNrLmRlc2M7XHJcbiAgICAgICAgICAgIGVkaXRUYXNrRm9ybS5wcmlvcml0eS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XHJcbiAgICAgICAgICAgIGVkaXRUYXNrRm9ybS5kdWVEYXRlLnZhbHVlID0gdGFzay5kdWVEYXRlO1xyXG5cclxuICAgICAgICAgICAgZWRpdFRhc2tNb2RhbC5zaG93TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkZWxldGVUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1tZXNzYWdlJyk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHt0YXNrLnRpdGxlfWA7XHJcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tGb3JtLnRhc2tJZC52YWx1ZSA9IHRhc2sudGFza0lkO1xyXG5cclxuICAgICAgICAgICAgZGVsZXRlVGFza01vZGFsLnNob3dNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcclxuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9ICFjaGVja2JveC5jaGVja2VkO1xyXG5cclxuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnc3RyaWtlJyk7XHJcblxyXG4gICAgICAgICAgICBTdG9yYWdlLnNldENvbXBsZXRlKHRhc2sudGFza0lkLCBjaGVja2JveC5jaGVja2VkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy9oYW5kbGUgb3BlbmluZyBhbmQgY2xvc2luZyBvZiBhZGQtcHJvamVjdCBtb2RhbFxyXG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LW1vZGFsJyk7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RDYW5jZWwgPSBhZGRQcm9qZWN0TW9kYWwucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idXR0b24nKTtcclxuICAgIGFkZFByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGFkZFByb2plY3RNb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkUHJvamVjdEZvcm0ucmVzZXQoKTtcclxuICAgICAgICBhZGRQcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjbG9zZU1vZGFsKGUsIGFkZFByb2plY3RNb2RhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2hhbmRsZSBhZGQtcHJvamVjdCBtb2RhbCBldmVudFxyXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtZm9ybScpO1xyXG4gICAgYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChhZGRQcm9qZWN0Rm9ybS50aXRsZS52YWx1ZSk7XHJcblxyXG4gICAgICAgIFN0b3JhZ2UuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgICAgICBWaWV3LmFkZFByb2plY3QocHJvamVjdCwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2VkaXQtcHJvamVjdCBtb2RhbFxyXG4gICAgY29uc3QgZWRpdFByb2plY3RDYW5jZWwgPSBlZGl0UHJvamVjdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnV0dG9uJyk7XHJcbiAgICBlZGl0UHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZWRpdFByb2plY3RNb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGVkaXRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjbG9zZU1vZGFsKGUsIGVkaXRQcm9qZWN0TW9kYWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBlZGl0UHJvamVjdEZvcm0ucHJvamVjdElkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZWRpdFByb2plY3RGb3JtLnRpdGxlLnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFN0b3JhZ2UuZWRpdFByb2plY3QocHJvamVjdElkLCB0aXRsZSk7XHJcblxyXG4gICAgICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiBhZGRQcm9qZWN0KHByb2plY3QsIHRydWUpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vZGVsZXRlLXByb2plY3QgbW9kYWxcclxuICAgIGRlbGV0ZVByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGNsb3NlTW9kYWwoZSwgZGVsZXRlUHJvamVjdE1vZGFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlbGV0ZVByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkZWxldGVQcm9qZWN0Rm9ybS5wcm9qZWN0SWQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3RJZCk7XHJcblxyXG4gICAgICAgIFN0b3JhZ2UuZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xyXG4gICAgICAgIHByb2plY3QucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwcm9qZWN0KTtcclxuXHJcbiAgICAgICAgdmlld0FsbEJ1dHRvbi5jbGljaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsUHJvamVjdERlbGV0ZSA9IGRlbGV0ZVByb2plY3RNb2RhbC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWNhbmNlbC1idXR0b24nKTtcclxuICAgIGNhbmNlbFByb2plY3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZVByb2plY3RNb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoZSwgbW9kYWwpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSB7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vSEFORExFIEFERCBUQVNLIE1PREFMUyBCRUxPV1xyXG4gICAgY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLW1vZGFsJyk7XHJcbiAgICBjb25zdCBjYW5jZWxBZGRUYXNrID0gYWRkVGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnV0dG9uJyk7XHJcblxyXG4gICAgYWRkVGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjbG9zZU1vZGFsKGUsIGFkZFRhc2tNb2RhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkVGFza01vZGFsLnNob3dNb2RhbCgpKTtcclxuICAgIGNhbmNlbEFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhZGRUYXNrTW9kYWwuY2xvc2UoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBhZGRUYXNrRm9ybS5wcm9qZWN0SWQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBhZGRUYXNrRm9ybS50aXRsZS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkZXNjID0gYWRkVGFza0Zvcm0uZGVzYy52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGFkZFRhc2tGb3JtLnByaW9yaXR5LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBhZGRUYXNrRm9ybS5kdWVEYXRlLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXHJcbiAgICAgICAgICAgIHByb2plY3RJZCxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2MsXHJcbiAgICAgICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgICAgICBkdWVEYXRlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgU3RvcmFnZS5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgIGFkZFRhc2sodGFzayk7XHJcblxyXG4gICAgICAgIGFkZFRhc2tGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgYWRkVGFza0Zvcm0ucHJvamVjdElkLnZhbHVlID0gcHJvamVjdElkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy90YXNrIGRldGFpbHMgbW9kYWxcclxuICAgIHRhc2tEZXRhaWxzTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjbG9zZU1vZGFsKGUsIHRhc2tEZXRhaWxzTW9kYWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9lZGl0IHRhc2sgbW9kYWxcclxuICAgIGVkaXRUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjbG9zZU1vZGFsKGUsIGVkaXRUYXNrTW9kYWwpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrSWQgPSBlZGl0VGFza0Zvcm0udGFza0lkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZWRpdFRhc2tGb3JtLnRpdGxlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2MgPSBlZGl0VGFza0Zvcm0uZGVzYy52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGVkaXRUYXNrRm9ybS5wcmlvcml0eS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZWRpdFRhc2tGb3JtLmR1ZURhdGUudmFsdWU7XHJcblxyXG4gICAgICAgIFN0b3JhZ2UuZWRpdFRhc2soXHJcbiAgICAgICAgICAgIHRhc2tJZCxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2MsXHJcbiAgICAgICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgICAgICBkdWVEYXRlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrSWQpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcclxuICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XHJcbiAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJUZXh0ID0gZHVlRGF0ZTtcclxuXHJcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbG93Jyk7XHJcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtJyk7XHJcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaCcpO1xyXG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsRWRpdFRhc2sgPSBlZGl0VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxFZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlZGl0VGFza01vZGFsLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2RlbGV0ZSB0YXNrIG1vZGFsXHJcbiAgICBkZWxldGVUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBjbG9zZU1vZGFsKGUsIGRlbGV0ZVRhc2tNb2RhbCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNhbmNlbFRhc2tEZWxldGUgPSBkZWxldGVUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignLmRlbGV0ZS1jYW5jZWwtYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxUYXNrRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRlbGV0ZVRhc2tNb2RhbC5jbG9zZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGVsZXRlVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGRlbGV0ZVRhc2tGb3JtLnRhc2tJZC52YWx1ZTtcclxuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tJZCk7XHJcblxyXG4gICAgICAgIHRhc2tJdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGFza0l0ZW0pO1xyXG4gICAgICAgIFN0b3JhZ2UuZGVsZXRlVGFzayh0YXNrSWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9mdW5jdGlvbmFsaXR5IG9mIGRlZmF1bHQgbmF2IGJ1dHRvbnNcclxuICAgIHZpZXdBbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gU3RvcmFnZS5nZXRUYXNrcygpO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiBhZGRUYXNrKHRhc2spKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZpZXdUb2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBTdG9yYWdlLmdldFRhc2tzKCkuZmlsdGVyKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICB0b2RheS5nZXREYXRlKCkgPT09IGRhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgICB0b2RheS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICAgIHRvZGF5LmdldEZ1bGxZZWFyKCkgPT09IGRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gYWRkVGFzayh0YXNrKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2aWV3V2Vla0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gU3RvcmFnZS5nZXRUYXNrcygpLmZpbHRlcih0YXNrID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPCBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgKyAoNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4gYWRkVGFzayh0YXNrKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZFByb2plY3QsXHJcbiAgICAgICAgYWRkVGFzayxcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3OyIsImltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdElkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3RJZCwgdGl0bGUsIGRlc2MsIHByaW9yaXR5LCBkdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy50YXNrSWQgPSB1dWlkdjQoKTtcclxuICAgICAgICB0aGlzLnByb2plY3RJZCA9IHByb2plY3RJZDtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XHJcblxyXG4vL2xvYWQgcHJvamVjdHMgYW5kIHRhc2tzIGZyb20gc3RvcmFnZSBvbiBzdGFydHVwXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IFN0b3JhZ2UuZ2V0VGFza3MoKTtcclxuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiBWaWV3LmFkZFRhc2sodGFzaykpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzID0gU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IFZpZXcuYWRkUHJvamVjdChwcm9qZWN0LCBmYWxzZSkpO1xyXG59XHJcblxyXG5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9