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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_toggleNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleNumber */ \"./src/modules/toggleNumber.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_togglePricePopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/togglePricePopup */ \"./src/modules/togglePricePopup.js\");\n/* harmony import */ var _modules_togglePrivacyPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/togglePrivacyPopup */ \"./src/modules/togglePrivacyPopup.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/maskPhone */ \"./src/modules/maskPhone.js\");\n\n\n\n\n\n\n\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_toggleNumber__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_togglePricePopup__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_togglePrivacyPopup__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_5__.default)();\n\n//# sourceURL=webpack://relax-live/./src/index.js?");

/***/ }),

/***/ "./src/modules/maskPhone.js":
/*!**********************************!*\
  !*** ./src/modules/maskPhone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar maskPhone = function maskPhone() {\n  var phoneInputs = document.querySelectorAll('input[name=phone]');\n\n  var getInputNumbersValue = function getInputNumbersValue(input) {\n    return input.value.replace(/\\D/g, '');\n  };\n\n  var onPhonePaste = function onPhonePaste(e) {\n    var input = e.target,\n        inputNumbersValue = getInputNumbersValue(input);\n    var pasted = e.clipboardData || window.clipboardData;\n\n    if (pasted) {\n      var pastedText = pasted.getData('Text');\n\n      if (/\\D/g.test(pastedText)) {\n        input.value = inputNumbersValue;\n        return;\n      }\n    }\n  };\n\n  var onPhoneInput = function onPhoneInput(e) {\n    var input = e.target,\n        inputNumbersValue = getInputNumbersValue(input),\n        selectionStart = input.selectionStart,\n        formattedInputValue = \"\";\n\n    if (!inputNumbersValue) {\n      return input.value = \"\";\n    }\n\n    if (input.value.length != selectionStart) {\n      if (e.data && /\\D/g.test(e.data)) {\n        input.value = inputNumbersValue;\n      }\n\n      return;\n    }\n\n    if ([\"7\", \"8\", \"9\"].indexOf(inputNumbersValue[0]) > -1) {\n      if (inputNumbersValue[0] == \"9\") inputNumbersValue = \"7\" + inputNumbersValue;\n      var firstSymbols = inputNumbersValue[0] == \"8\" ? \"8\" : \"+7\";\n      formattedInputValue = input.value = firstSymbols + \" \";\n\n      if (inputNumbersValue.length > 1) {\n        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);\n      }\n\n      if (inputNumbersValue.length >= 5) {\n        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);\n      }\n\n      if (inputNumbersValue.length >= 8) {\n        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);\n      }\n\n      if (inputNumbersValue.length >= 10) {\n        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);\n      }\n    }\n\n    input.value = formattedInputValue;\n  };\n\n  var onPhoneKeyDown = function onPhoneKeyDown(e) {\n    // Clear input after remove last symbol\n    var inputValue = e.target.value.replace(/\\D/g, '');\n\n    if (e.keyCode == 8 && inputValue.length == 1) {\n      e.target.value = \"\";\n    }\n  };\n\n  var _iterator = _createForOfIteratorHelper(phoneInputs),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var phoneInput = _step.value;\n      phoneInput.addEventListener('keydown', onPhoneKeyDown);\n      phoneInput.addEventListener('input', onPhoneInput);\n      phoneInput.addEventListener('paste', onPhonePaste);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack://relax-live/./src/modules/maskPhone.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scroll = function scroll() {\n  var menu = document.querySelector('.popup-menu-nav'),\n      menuItems = menu.querySelectorAll('.menu-link'),\n      upBtn = document.querySelector('.button-footer');\n\n  var scrollTo = function scrollTo(target) {\n    window.scroll({\n      left: 0,\n      top: target.getBoundingClientRect().top,\n      behavior: 'smooth'\n    });\n  };\n\n  var scrollHandler = function scrollHandler(e) {\n    e.preventDefault();\n    var id = e.target.getAttribute('href');\n\n    if (!e.target.closest('.link-list-menu')) {\n      var block = document.querySelector(id);\n      scrollTo(block);\n    } else {\n      return;\n    }\n  };\n\n  upBtn.addEventListener('click', scrollHandler);\n  menuItems.forEach(function (el) {\n    el.addEventListener('click', scrollHandler);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://relax-live/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('.popup-dialog-menu');\n  window.addEventListener('click', function (e) {\n    if (e.target.matches('.menu__icon')) {\n      menu.style.transform = 'translate3d(0px, 0px, 0px)';\n    } else if (e.target.matches('.close-menu') || e.target.matches('.menu-link') || e.target.closest('.main')) {\n      if (screen.width < 576) {\n        menu.style.transform = 'translate3d(0px, -100vh, 0px)';\n      } else {\n        menu.style.transform = 'translate3d(645px, 0px, 0px)';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://relax-live/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/toggleNumber.js":
/*!*************************************!*\
  !*** ./src/modules/toggleNumber.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleNumber = function toggleNumber() {\n  var arrowBtn = document.querySelector('.header-contacts__arrow').querySelector('img'),\n      phoneAccord = document.querySelector('.header-contacts__phone-number-accord'),\n      phoneNumber = document.querySelector('.header-contacts__phone-number-accord a');\n  arrowBtn.addEventListener('click', function () {\n    var currentOpacity = getComputedStyle(phoneNumber).opacity;\n\n    if (currentOpacity === '0') {\n      phoneNumber.style.display = 'block';\n      phoneAccord.style.position = 'static';\n      phoneNumber.style.opacity = '1';\n      arrowBtn.style.transform = 'rotateZ(180deg)';\n    } else {\n      phoneAccord.style.position = 'relative';\n      phoneNumber.style.opacity = '0';\n      phoneNumber.style.display = 'none';\n      arrowBtn.style.transform = 'rotateZ(0deg)';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleNumber);\n\n//# sourceURL=webpack://relax-live/./src/modules/toggleNumber.js?");

/***/ }),

/***/ "./src/modules/togglePricePopup.js":
/*!*****************************************!*\
  !*** ./src/modules/togglePricePopup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePricePopup = function togglePricePopup() {\n  var popupRepairTypes = document.querySelector('.popup-repair-types');\n\n  var showPricePopup = function showPricePopup(e) {\n    if (e.target.closest('.link-list-menu') || e.target.closest('.link-list-repair')) {\n      popupRepairTypes.style.visibility = 'visible';\n    } else if (!e.target.closest('.popup-dialog-repair-types')) {\n      popupRepairTypes.style.visibility = 'hidden';\n    }\n  };\n\n  window.addEventListener('click', showPricePopup);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePricePopup);\n\n//# sourceURL=webpack://relax-live/./src/modules/togglePricePopup.js?");

/***/ }),

/***/ "./src/modules/togglePrivacyPopup.js":
/*!*******************************************!*\
  !*** ./src/modules/togglePrivacyPopup.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePrivacyPopup = function togglePrivacyPopup() {\n  var main = document.getElementById('main'),\n      privacyPopup = document.querySelector('.popup-privacy');\n  window.addEventListener('click', function (e) {\n    if (e.target.matches('.link-privacy')) {\n      privacyPopup.style.visibility = 'visible';\n    } else if (!e.target.closest('.popup-dialog-privacy')) {\n      privacyPopup.style.visibility = 'hidden';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePrivacyPopup);\n\n//# sourceURL=webpack://relax-live/./src/modules/togglePrivacyPopup.js?");

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