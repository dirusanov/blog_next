webpackHotUpdate("static/development/pages/about-me.js",{

/***/ "./components/about-me/AboutMe.js":
/*!****************************************!*\
  !*** ./components/about-me/AboutMe.js ***!
  \****************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_main_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/main/Main */ \"./components/layout/main/Main.js\");\n/* harmony import */ var _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AboutMe.module.scss */ \"./components/about-me/AboutMe.module.scss\");\n/* harmony import */ var _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/dima/Desktop/learning/dj-blog/next_js_blog/components/about-me/AboutMe.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar AboutMeComponent = function AboutMeComponent(_ref) {\n  var AboutMeData = _ref.AboutMeData;\n  return __jsx(_layout_main_Main__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"about-me\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: AboutMeData.logo,\n    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.previewImageBackground,\n    alt: \"preview image background\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  })), __jsx(\"article\", {\n    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.elements,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: AboutMeData.image,\n    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.previewImage,\n    alt: \"preview logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 17\n    }\n  }), __jsx(\"h1\", {\n    align: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, AboutMeData.title), __jsx(\"div\", {\n    className: _AboutMe_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.wrapper,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, AboutMeData.text)));\n};\n\n_c = AboutMeComponent;\nfunction getStaticProps(_x) {\n  return _getStaticProps.apply(this, arguments);\n}\n\nfunction _getStaticProps() {\n  _getStaticProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(API_URL + 'about-me');\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            data = _context.sent;\n\n            if (data) {\n              _context.next = 8;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              notFound: true\n            });\n\n          case 8:\n            return _context.abrupt(\"return\", {\n              props: {} // will be passed to the page component as props\n\n            });\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticProps.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMeComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutMeComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0LW1lL0Fib3V0TWUuanM/MTFmNSJdLCJuYW1lcyI6WyJBYm91dE1lQ29tcG9uZW50IiwiQWJvdXRNZURhdGEiLCJzdHlsaW5nIiwiaGVhZGVyIiwibG9nbyIsInByZXZpZXdJbWFnZUJhY2tncm91bmQiLCJlbGVtZW50cyIsImltYWdlIiwicHJldmlld0ltYWdlIiwidGl0bGUiLCJ3cmFwcGVyIiwidGV4dCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImZldGNoIiwiQVBJX1VSTCIsInJlcyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBR0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFxQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDMUMsU0FDSSxNQUFDLHlEQUFEO0FBQU0sU0FBSyxFQUFDLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFQywyREFBTyxDQUFDQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxPQUFHLEVBQUVGLFdBQVcsQ0FBQ0csSUFEckI7QUFFSSxhQUFTLEVBQUVGLDJEQUFPLENBQUNHLHNCQUZ2QjtBQUdJLE9BQUcsRUFBQywwQkFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQVFJO0FBQVMsYUFBUyxFQUFFSCwyREFBTyxDQUFDSSxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxPQUFHLEVBQUVMLFdBQVcsQ0FBQ00sS0FEckI7QUFFSSxhQUFTLEVBQUVMLDJEQUFPLENBQUNNLFlBRnZCO0FBR0ksT0FBRyxFQUFDLGNBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBTUk7QUFBSSxTQUFLLEVBQUMsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CUCxXQUFXLENBQUNRLEtBQWhDLENBTkosRUFPSTtBQUFLLGFBQVMsRUFBRVAsMkRBQU8sQ0FBQ1EsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLVCxXQUFXLENBQUNVLElBRGpCLENBUEosQ0FSSixDQURKO0FBc0JILENBdkJEOztLQUFNWCxnQjtBQXlCQyxTQUFlWSxjQUF0QjtBQUFBO0FBQUE7OztxTUFBTyxpQkFBOEJDLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2VDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLFVBQVgsQ0FEcEI7O0FBQUE7QUFDR0MsZUFESDtBQUFBO0FBQUEsbUJBRWdCQSxHQUFHLENBQUNDLElBQUosRUFGaEI7O0FBQUE7QUFFR0MsZ0JBRkg7O0FBQUEsZ0JBR0VBLElBSEY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBSVE7QUFDTEMsc0JBQVEsRUFBRTtBQURMLGFBSlI7O0FBQUE7QUFBQSw2Q0FTSTtBQUNIQyxtQkFBSyxFQUFFLEVBREosQ0FDUTs7QUFEUixhQVRKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFlUXBCLCtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hYm91dC1tZS9BYm91dE1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1haW4gZnJvbSAnLi4vbGF5b3V0L21haW4vTWFpbic7XG5cbmltcG9ydCBzdHlsaW5nIGZyb20gJy4vQWJvdXRNZS5tb2R1bGUuc2Nzcyc7XG5cblxuY29uc3QgQWJvdXRNZUNvbXBvbmVudCA9ICh7IEFib3V0TWVEYXRhIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFpbiB0aXRsZT1cImFib3V0LW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGluZy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtBYm91dE1lRGF0YS5sb2dvfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxpbmcucHJldmlld0ltYWdlQmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PSdwcmV2aWV3IGltYWdlIGJhY2tncm91bmQnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsaW5nLmVsZW1lbnRzfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17QWJvdXRNZURhdGEuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGluZy5wcmV2aWV3SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGFsdD0ncHJldmlldyBsb2dvJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgxIGFsaWduPSdjZW50ZXInPntBYm91dE1lRGF0YS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsaW5nLndyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7QWJvdXRNZURhdGEudGV4dH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9NYWluPlxuICAgICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9VUkwgKyAnYWJvdXQtbWUnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge30sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBYm91dE1lQ29tcG9uZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/about-me/AboutMe.js\n");

/***/ })

})