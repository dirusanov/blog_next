(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_clojureRepl"],{

/***/ "./node_modules/highlight.js/lib/languages/clojure-repl.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/clojure-repl.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Clojure REPL\nDescription: Clojure REPL sessions\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nRequires: clojure.js\nWebsite: https://clojure.org\nCategory: lisp\n*/\n\n/** @type LanguageFn */\nfunction clojureRepl(hljs) {\n  return {\n    name: 'Clojure REPL',\n    contains: [\n      {\n        className: 'meta',\n        begin: /^([\\w.-]+|\\s*#_)?=>/,\n        starts: {\n          end: /$/,\n          subLanguage: 'clojure'\n        }\n      }\n    ]\n  }\n}\n\nmodule.exports = clojureRepl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY2xvanVyZS1yZXBsLmpzPzE0OWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jbG9qdXJlLXJlcGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IENsb2p1cmUgUkVQTFxuRGVzY3JpcHRpb246IENsb2p1cmUgUkVQTCBzZXNzaW9uc1xuQXV0aG9yOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cblJlcXVpcmVzOiBjbG9qdXJlLmpzXG5XZWJzaXRlOiBodHRwczovL2Nsb2p1cmUub3JnXG5DYXRlZ29yeTogbGlzcFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNsb2p1cmVSZXBsKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQ2xvanVyZSBSRVBMJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC9eKFtcXHcuLV0rfFxccyojXyk/PT4vLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogJ2Nsb2p1cmUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9qdXJlUmVwbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/clojure-repl.js\n");

/***/ })

}]);