(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LegoReact"] = factory();
	else
		root["LegoReact"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_Button_Button__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_components_Button_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_components_Button_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_components_Input_Input__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_components_Input_Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_components_Input_Input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_Select_Select__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_Select_Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_components_Select_Select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_OverUnderLine_OverUnderLine__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_OverUnderLine_OverUnderLine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_components_OverUnderLine_OverUnderLine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_Pagination_Pagination__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_Pagination_Pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_components_Pagination_Pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_Dropdown_Dropdown__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_Dropdown_Dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__src_components_Dropdown_Dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_Tabs_Tabs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_Tabs_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__src_components_Tabs_Tabs__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_components_Button_Button__, "default")) __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_0__src_components_Button_Button__["default"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__src_components_Input_Input__, "default")) __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_1__src_components_Input_Input__["default"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__src_components_Select_Select__, "default")) __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_2__src_components_Select_Select__["default"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__src_components_OverUnderLine_OverUnderLine__, "default")) __webpack_require__.d(__webpack_exports__, "OverUnderLine", function() { return __WEBPACK_IMPORTED_MODULE_3__src_components_OverUnderLine_OverUnderLine__["default"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__src_components_Pagination_Pagination__, "default")) __webpack_require__.d(__webpack_exports__, "Pagination", function() { return __WEBPACK_IMPORTED_MODULE_4__src_components_Pagination_Pagination__["default"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__src_components_Dropdown_Dropdown__, "default")) __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return __WEBPACK_IMPORTED_MODULE_5__src_components_Dropdown_Dropdown__["default"]; });











/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (7:19)\nYou may need an appropriate loader to handle this file type.\n| \n| class Button extends React.Component {\n|   static propTypes = {\n|     name: PropTypes.string.isRequired,\n|     onClick: PropTypes.func.isRequired,");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (20:19)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   static propTypes = {\n|     name: PropTypes.string.isRequired,\n|     id: PropTypes.string,");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (12:19)\nYou may need an appropriate loader to handle this file type.\n|     this.onSelectTimeout = undefined;\n|   }\n|   static propTypes = {\n|     name: PropTypes.string,\n|     id: PropTypes.string,");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (6:19)\nYou may need an appropriate loader to handle this file type.\n| \n| class OverUnderLine extends React.Component {\n|   static propTypes = {\n|     over: PropTypes.string.isRequired,\n|     under: PropTypes.number.isRequired");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (8:19)\nYou may need an appropriate loader to handle this file type.\n| \n| class Pagination extends React.Component {\n|   static propTypes = {\n|     currentPage: PropTypes.number.isRequired,\n|     totalPages: PropTypes.number.isRequired,");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (16:19)\nYou may need an appropriate loader to handle this file type.\n|   }\n| \n|   static propTypes = {\n|     name: PropTypes.string,\n|     side: PropTypes.oneOf(['left', 'right']),");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (14:19)\nYou may need an appropriate loader to handle this file type.\n| \n| class Tabs extends React.Component {\n|   static propTypes = {\n|     name: PropTypes.string,\n|     classes: PropTypes.string,");

/***/ })
/******/ ]);
});