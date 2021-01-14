module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GvLQ");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _caasy_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("A1+9");
/* harmony import */ var _caasy_sdk_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_caasy_sdk_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blogConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("QyJS");
/* harmony import */ var _blogConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blogConfig__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _stylesheets_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TQWz");
/* harmony import */ var _stylesheets_global_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_global_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stylesheets_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3iY6");
/* harmony import */ var _stylesheets_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stylesheets_nightOwl_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("sFTw");
/* harmony import */ var _stylesheets_nightOwl_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_nightOwl_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_paginate_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("iL3X");
/* harmony import */ var _assets_paginate_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_paginate_scss__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // Blog config

 // Import style sheets




 // Initialize the Caasy SDK. Update the Caasy
// site ID in "blogConfig.js" in the root folder.

_caasy_sdk_js__WEBPACK_IMPORTED_MODULE_3___default.a.init(_blogConfig__WEBPACK_IMPORTED_MODULE_5___default.a.caasySDKConfig); // Loading indicator

next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeStart', nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.start);
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeComplete', nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done);
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on('routeChangeError', nprogress__WEBPACK_IMPORTED_MODULE_2___default.a.done);
/**
 * The component ensures that every site has title and meta element
 * in the header. Additional meta tags can be added below. Make sure
 * to add them als children of the Head component.
 * @param Component {jsx} the component that is currently display
 * @param pageProps {object} the currently active element's props
 * @returns {*}
 * @constructor
 */

const App = ({
  Component,
  pageProps
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", {
  key: "title"
}, _blogConfig__WEBPACK_IMPORTED_MODULE_5___default.a.blogName || ''), __jsx("meta", {
  key: "description",
  name: "description",
  content: _blogConfig__WEBPACK_IMPORTED_MODULE_5___default.a.description
})), __jsx(Component, pageProps));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "3iY6":
/***/ (function(module, exports) {



/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "A1+9":
/***/ (function(module, exports) {

module.exports = require("@caasy/sdk-js");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "QyJS":
/***/ (function(module, exports) {

/**
 * This files contains all the meta data of your blog. Feel
 * free to change it according to your needs. Please
 * keep in mind, that the actual blog posts are fetched
 * from the Caasy API. This file only contains static
 * information that does not change such as the name
 * of the blog.
 */
module.exports = {
  caasySDKConfig: {
    siteId: '5f7cc20dc302c4fa0a961f81'
  },
  blogName: 'Rusanov',
  defaultTitle: 'BLOG',
  description: 'This is the blog of Dmitry Rusanov, a lawyer and programmer. I am writing articles about what interests me.',
  // The default language is used to improve accessibility.
  // It is set on the HTML element. You can change this
  // to the main language of your content.
  defaultLocale: 'ru',
  // The locale is used for multi language content. This
  // feature hasn't been released yet. Please don't change
  // this until Caasy fully supports multi language content.
  locales: ['ru', 'en-US'],
  pagination: {
    amountPostsOnPage: 10
  },
  social: {
    github: 'https://github.com/Random1k11',
    stackoverflow: 'https://stackoverflow.com/users/12097204/random1k11?tab=profile',
    // dev: 'https://dev.to/jz222',
    // twitter: 'https://twitter.com',
    // linkedin: 'https://www.linkedin.com/in/timo-zimmermann',
    youtube: 'https://www.youtube.com/channel/UCjl1oFkCqlAXjqqSD_1oVGw?view_as=subscriber' // facebook: 'https://facebook.com',
    // instagram: 'https://instagram.com'

  },
  footer: {
    links: [{
      title: 'Website',
      items: [{
        label: 'Caasy',
        url: 'https://caasy.io'
      }]
    }, {
      title: 'Developer',
      items: [{
        label: 'Docs',
        url: 'https://docs.caasy.io'
      }, {
        label: 'Github',
        url: 'https://logowl.io'
      }, {
        label: 'JS SDK',
        url: 'https://mosaic.mc'
      }]
    }, {
      title: 'About',
      items: [{
        label: 'Mosaic',
        url: 'https://mosaic.mc'
      }, {
        label: 'Log Owl',
        url: 'https://logowl.io'
      }]
    }]
  }
};

/***/ }),

/***/ "TQWz":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iL3X":
/***/ (function(module, exports) {



/***/ }),

/***/ "sFTw":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });