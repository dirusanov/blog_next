(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_c"],{

/***/ "./node_modules/highlight.js/lib/languages/c.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/c.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: C\nCategory: common, system\nWebsite: https://en.wikipedia.org/wiki/C_(programming_language)\nRequires: c-like.js\n*/\n\n/** @type LanguageFn */\nfunction c(hljs) {\n\n  var lang = hljs.getLanguage('c-like').rawDefinition();\n  // Until C is actually different than C++ there is no reason to auto-detect C\n  // as it's own language since it would just fail auto-detect testing or\n  // simply match with C++.\n  //\n  // See further comments in c-like.js.\n\n  // lang.disableAutodetect = false;\n  lang.name = 'C';\n  lang.aliases = ['c', 'h'];\n  return lang;\n\n}\n\nmodule.exports = c;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2MuanM/MWZlNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQ1xuQ2F0ZWdvcnk6IGNvbW1vbiwgc3lzdGVtXG5XZWJzaXRlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DXyhwcm9ncmFtbWluZ19sYW5ndWFnZSlcblJlcXVpcmVzOiBjLWxpa2UuanNcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjKGhsanMpIHtcblxuICB2YXIgbGFuZyA9IGhsanMuZ2V0TGFuZ3VhZ2UoJ2MtbGlrZScpLnJhd0RlZmluaXRpb24oKTtcbiAgLy8gVW50aWwgQyBpcyBhY3R1YWxseSBkaWZmZXJlbnQgdGhhbiBDKysgdGhlcmUgaXMgbm8gcmVhc29uIHRvIGF1dG8tZGV0ZWN0IENcbiAgLy8gYXMgaXQncyBvd24gbGFuZ3VhZ2Ugc2luY2UgaXQgd291bGQganVzdCBmYWlsIGF1dG8tZGV0ZWN0IHRlc3Rpbmcgb3JcbiAgLy8gc2ltcGx5IG1hdGNoIHdpdGggQysrLlxuICAvL1xuICAvLyBTZWUgZnVydGhlciBjb21tZW50cyBpbiBjLWxpa2UuanMuXG5cbiAgLy8gbGFuZy5kaXNhYmxlQXV0b2RldGVjdCA9IGZhbHNlO1xuICBsYW5nLm5hbWUgPSAnQyc7XG4gIGxhbmcuYWxpYXNlcyA9IFsnYycsICdoJ107XG4gIHJldHVybiBsYW5nO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/c.js\n");

/***/ })

}]);