(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_erb"],{

/***/ "./node_modules/highlight.js/lib/languages/erb.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/erb.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: ERB (Embedded Ruby)\nRequires: xml.js, ruby.js\nAuthor: Lucas Mazza <lucastmazza@gmail.com>\nContributors: Kassio Borges <kassioborgesm@gmail.com>\nDescription: \"Bridge\" language defining fragments of Ruby in HTML within <% .. %>\nWebsite: https://ruby-doc.org/stdlib-2.6.5/libdoc/erb/rdoc/ERB.html\nCategory: template\n*/\n\nfunction erb(hljs) {\n  return {\n    name: 'ERB',\n    subLanguage: 'xml',\n    contains: [\n      hljs.COMMENT('<%#', '%>'),\n      {\n        begin: '<%[%=-]?', end: '[%-]?%>',\n        subLanguage: 'ruby',\n        excludeBegin: true,\n        excludeEnd: true\n      }\n    ]\n  };\n}\n\nmodule.exports = erb;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZXJiLmpzPzEzNjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9lcmIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEVSQiAoRW1iZWRkZWQgUnVieSlcblJlcXVpcmVzOiB4bWwuanMsIHJ1YnkuanNcbkF1dGhvcjogTHVjYXMgTWF6emEgPGx1Y2FzdG1henphQGdtYWlsLmNvbT5cbkNvbnRyaWJ1dG9yczogS2Fzc2lvIEJvcmdlcyA8a2Fzc2lvYm9yZ2VzbUBnbWFpbC5jb20+XG5EZXNjcmlwdGlvbjogXCJCcmlkZ2VcIiBsYW5ndWFnZSBkZWZpbmluZyBmcmFnbWVudHMgb2YgUnVieSBpbiBIVE1MIHdpdGhpbiA8JSAuLiAlPlxuV2Vic2l0ZTogaHR0cHM6Ly9ydWJ5LWRvYy5vcmcvc3RkbGliLTIuNi41L2xpYmRvYy9lcmIvcmRvYy9FUkIuaHRtbFxuQ2F0ZWdvcnk6IHRlbXBsYXRlXG4qL1xuXG5mdW5jdGlvbiBlcmIoaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdFUkInLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCc8JSMnLCAnJT4nKSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc8JVslPS1dPycsIGVuZDogJ1slLV0/JT4nLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3J1YnknLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXJiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/erb.js\n");

/***/ })

}]);