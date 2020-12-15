(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_c"],{

/***/ "./node_modules/highlight.js/lib/languages/c.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/c.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: C\nCategory: common, system\nWebsite: https://en.wikipedia.org/wiki/C_(programming_language)\nRequires: c-like.js\n*/\n\n/** @type LanguageFn */\nfunction c(hljs) {\n\n  var lang = hljs.getLanguage('c-like').rawDefinition();\n  // Until C is actually different than C++ there is no reason to auto-detect C\n  // as it's own language since it would just fail auto-detect testing or\n  // simply match with C++.\n  //\n  // See further comments in c-like.js.\n\n  // lang.disableAutodetect = false;\n  lang.name = 'C';\n  lang.aliases = ['c', 'h'];\n  return lang;\n\n}\n\nmodule.exports = c;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYy5qcz8xZmU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBDXG5DYXRlZ29yeTogY29tbW9uLCBzeXN0ZW1cbldlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NfKHByb2dyYW1taW5nX2xhbmd1YWdlKVxuUmVxdWlyZXM6IGMtbGlrZS5qc1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGMoaGxqcykge1xuXG4gIHZhciBsYW5nID0gaGxqcy5nZXRMYW5ndWFnZSgnYy1saWtlJykucmF3RGVmaW5pdGlvbigpO1xuICAvLyBVbnRpbCBDIGlzIGFjdHVhbGx5IGRpZmZlcmVudCB0aGFuIEMrKyB0aGVyZSBpcyBubyByZWFzb24gdG8gYXV0by1kZXRlY3QgQ1xuICAvLyBhcyBpdCdzIG93biBsYW5ndWFnZSBzaW5jZSBpdCB3b3VsZCBqdXN0IGZhaWwgYXV0by1kZXRlY3QgdGVzdGluZyBvclxuICAvLyBzaW1wbHkgbWF0Y2ggd2l0aCBDKysuXG4gIC8vXG4gIC8vIFNlZSBmdXJ0aGVyIGNvbW1lbnRzIGluIGMtbGlrZS5qcy5cblxuICAvLyBsYW5nLmRpc2FibGVBdXRvZGV0ZWN0ID0gZmFsc2U7XG4gIGxhbmcubmFtZSA9ICdDJztcbiAgbGFuZy5hbGlhc2VzID0gWydjJywgJ2gnXTtcbiAgcmV0dXJuIGxhbmc7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/c.js\n");

/***/ })

}]);