/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/button.tsx":
/*!**********************************!*\
  !*** ./src/component/button.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Button = function Button(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: props.onClick,
    style: {
      backgroundColor: props.color,
      border: props.border,
      borderRadius: props.radius,
      height: props.height,
      width: props.width
    }
  }, props.children);
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/component/counter.tsx":
/*!***********************************!*\
  !*** ./src/component/counter.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var MyCounter = function MyCounter(_a) {
  var _b = _a.value,
    value = _b === void 0 ? 0 : _b;
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),
    counter = _c[0],
    setCounter = _c[1];
  var onMinus = function onMinus() {
    setCounter(function (prev) {
      return prev - 1;
    });
  };
  var onPlus = function onPlus() {
    setCounter(function (prev) {
      return prev + 1;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Counter: ", counter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onMinus
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onPlus
  }, "+"));
};
/* harmony default export */ __webpack_exports__["default"] = (MyCounter);

/***/ }),

/***/ "react":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** external {"Children":{},"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED":{"ReactCurrentDispatcher":{"current":null},"ReactCurrentBatchConfig":{"transition":null},"ReactCurrentOwner":{"current":null},"ReactDebugCurrentFrame":{"getCurrentStack":null},"ReactCurrentActQueue":{"current":null,"isBatchingLegacy":false,"didScheduleLegacyUpdate":false}},"version":"18.2.0"} ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module) {

module.exports = undefined;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* reexport safe */ _component_button__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "MyCounter": function() { return /* reexport safe */ _component_counter__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _component_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/counter */ "./src/component/counter.tsx");
/* harmony import */ var _component_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/button */ "./src/component/button.tsx");



}();
/******/ })()
;
//# sourceMappingURL=index.js.map