(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_mojolicious"],{

/***/ "./node_modules/highlight.js/lib/languages/mojolicious.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mojolicious.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Mojolicious\nRequires: xml.js, perl.js\nAuthor: Dotan Dimet <dotan@corky.net>\nDescription: Mojolicious .ep (Embedded Perl) templates\nWebsite: https://mojolicious.org\nCategory: template\n*/\nfunction mojolicious(hljs) {\n  return {\n    name: 'Mojolicious',\n    subLanguage: 'xml',\n    contains: [\n      {\n        className: 'meta',\n        begin: '^__(END|DATA)__$'\n      },\n    // mojolicious line\n      {\n        begin: \"^\\\\s*%{1,2}={0,2}\", end: '$',\n        subLanguage: 'perl'\n      },\n    // mojolicious block\n      {\n        begin: \"<%{1,2}={0,2}\",\n        end: \"={0,1}%>\",\n        subLanguage: 'perl',\n        excludeBegin: true,\n        excludeEnd: true\n      }\n    ]\n  };\n}\n\nmodule.exports = mojolicious;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbW9qb2xpY2lvdXMuanM/NjZiYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsdUJBQXVCLElBQUksRUFBRSxJQUFJO0FBQ2pDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSSxFQUFFLElBQUk7QUFDN0IsZ0JBQWdCLElBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbW9qb2xpY2lvdXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IE1vam9saWNpb3VzXG5SZXF1aXJlczogeG1sLmpzLCBwZXJsLmpzXG5BdXRob3I6IERvdGFuIERpbWV0IDxkb3RhbkBjb3JreS5uZXQ+XG5EZXNjcmlwdGlvbjogTW9qb2xpY2lvdXMgLmVwIChFbWJlZGRlZCBQZXJsKSB0ZW1wbGF0ZXNcbldlYnNpdGU6IGh0dHBzOi8vbW9qb2xpY2lvdXMub3JnXG5DYXRlZ29yeTogdGVtcGxhdGVcbiovXG5mdW5jdGlvbiBtb2pvbGljaW91cyhobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ01vam9saWNpb3VzJyxcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXl9fKEVORHxEQVRBKV9fJCdcbiAgICAgIH0sXG4gICAgLy8gbW9qb2xpY2lvdXMgbGluZVxuICAgICAge1xuICAgICAgICBiZWdpbjogXCJeXFxcXHMqJXsxLDJ9PXswLDJ9XCIsIGVuZDogJyQnLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3BlcmwnXG4gICAgICB9LFxuICAgIC8vIG1vam9saWNpb3VzIGJsb2NrXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBcIjwlezEsMn09ezAsMn1cIixcbiAgICAgICAgZW5kOiBcIj17MCwxfSU+XCIsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAncGVybCcsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtb2pvbGljaW91cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/mojolicious.js\n");

/***/ })

}]);