"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./src/pages/404.tsx":
/*!***************************!*\
  !*** ./src/pages/404.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Custom404 = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        let reidrectUrl = \"/\";\n        if (router.asPath.includes(\"learn\")) {\n            reidrectUrl = \"/blog\";\n        }\n        router.replace(reidrectUrl);\n    });\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Custom404);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvNDA0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUNNO0FBRXhDLE1BQU1FLFNBQVMsR0FBRyxJQUFZO0lBQzVCLE1BQU1DLE1BQU0sR0FBR0Ysc0RBQVMsRUFBRTtJQUUxQkQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSUksV0FBVyxHQUFHLEdBQUc7UUFFckIsSUFBSUQsTUFBTSxDQUFDRSxNQUFNLENBQUNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQ0YsV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUN2QjtRQUVERCxNQUFNLENBQUNJLE9BQU8sQ0FBQ0gsV0FBVyxDQUFDLENBQUM7S0FDN0IsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJLENBQUM7Q0FDYjtBQUVELGlFQUFlRixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vY2thbS13ZWJzaXRlLy4vc3JjL3BhZ2VzLzQwNC50c3g/NWM3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEN1c3RvbTQwNCA9ICgpOiBudWxsID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgcmVpZHJlY3RVcmwgPSAnLyc7XG5cbiAgICBpZiAocm91dGVyLmFzUGF0aC5pbmNsdWRlcygnbGVhcm4nKSkge1xuICAgICAgcmVpZHJlY3RVcmwgPSAnL2Jsb2cnO1xuICAgIH1cblxuICAgIHJvdXRlci5yZXBsYWNlKHJlaWRyZWN0VXJsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b200MDQ7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQ3VzdG9tNDA0Iiwicm91dGVyIiwicmVpZHJlY3RVcmwiLCJhc1BhdGgiLCJpbmNsdWRlcyIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/404.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/404.tsx"));
module.exports = __webpack_exports__;

})();