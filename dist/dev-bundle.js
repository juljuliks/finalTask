/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_toggleNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleNumber */ \"./src/modules/toggleNumber.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n\n\n\n\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_toggleNumber__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.default)();\n\n//# sourceURL=webpack://relax-live/./src/index.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scroll = function scroll() {\n  var menu = document.querySelector('.popup-menu-nav'),\n      menuItems = menu.querySelectorAll('.menu-link'),\n      upBtn = document.querySelector('.button-footer');\n\n  var scrollTo = function scrollTo(target) {\n    window.scroll({\n      left: 0,\n      top: target.getBoundingClientRect().top,\n      behavior: 'smooth'\n    });\n  };\n\n  var scrollHandler = function scrollHandler(e) {\n    e.preventDefault();\n    var id = e.target.getAttribute('href');\n    var block = document.querySelector(id);\n    scrollTo(block);\n  };\n\n  upBtn.addEventListener('click', scrollHandler);\n  menuItems.forEach(function (el) {\n    el.addEventListener('click', scrollHandler);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://relax-live/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('.popup-dialog-menu');\n  window.addEventListener('click', function (e) {\n    if (e.target.matches('.menu__icon')) {\n      menu.style.transform = 'translate3d(0px, 0px, 0px)';\n    } else if (e.target.matches('.close-menu') || e.target.matches('.menu-link') || e.target.closest('.main')) {\n      menu.style.transform = 'translate3d(645px, 0px, 0px)';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://relax-live/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/toggleNumber.js":
/*!*************************************!*\
  !*** ./src/modules/toggleNumber.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleNumber = function toggleNumber() {\n  var arrowBtn = document.querySelector('.header-contacts__arrow').querySelector('img'),\n      phoneAccord = document.querySelector('.header-contacts__phone-number-accord'),\n      phoneNumber = document.querySelector('.header-contacts__phone-number-accord a');\n  arrowBtn.addEventListener('click', function () {\n    var currentOpacity = getComputedStyle(phoneNumber).opacity;\n\n    if (currentOpacity === '0') {\n      phoneNumber.style.display = 'block';\n      phoneAccord.style.position = 'static';\n      phoneNumber.style.opacity = '1';\n      arrowBtn.style.transform = 'rotateZ(180deg)';\n    } else {\n      phoneAccord.style.position = 'relative';\n      phoneNumber.style.opacity = '0';\n      phoneNumber.style.display = 'none';\n      arrowBtn.style.transform = 'rotateZ(0deg)';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleNumber);\n\n//# sourceURL=webpack://relax-live/./src/modules/toggleNumber.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;