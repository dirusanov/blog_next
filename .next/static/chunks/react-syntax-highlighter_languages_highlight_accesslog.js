(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_accesslog"],{

/***/ "./node_modules/highlight.js/lib/languages/accesslog.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/accesslog.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n Language: Apache Access Log\n Author: Oleg Efimov <efimovov@gmail.com>\n Description: Apache/Nginx Access Logs\n Website: https://httpd.apache.org/docs/2.4/logs.html#accesslog\n */\n\n /** @type LanguageFn */\nfunction accesslog(hljs) {\n  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods\n  var HTTP_VERBS = [\n    \"GET\", \"POST\", \"HEAD\", \"PUT\", \"DELETE\", \"CONNECT\", \"OPTIONS\", \"PATCH\", \"TRACE\"\n  ];\n  return {\n    name: 'Apache Access Log',\n    contains: [\n      // IP\n      {\n        className: 'number',\n        begin: '^\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}(:\\\\d{1,5})?\\\\b',\n        relevance:5\n      },\n      // Other numbers\n      {\n        className: 'number',\n        begin: '\\\\b\\\\d+\\\\b',\n        relevance: 0\n      },\n      // Requests\n      {\n        className: 'string',\n        begin: '\"(' + HTTP_VERBS.join(\"|\") + ')', end: '\"',\n        keywords: HTTP_VERBS.join(\" \"),\n        illegal: '\\\\n',\n        relevance: 5,\n        contains: [{\n          begin: 'HTTP/[12]\\\\.\\\\d',\n          relevance:5\n        }]\n      },\n      // Dates\n      {\n        className: 'string',\n        // dates must have a certain length, this prevents matching\n        // simple array accesses a[123] and [] and other common patterns\n        // found in other languages\n        begin: /\\[\\d[^\\]\\n]{8,}\\]/,\n        illegal: '\\\\n',\n        relevance: 1\n      },\n      {\n        className: 'string',\n        begin: /\\[/, end: /\\]/,\n        illegal: '\\\\n',\n        relevance: 0\n      },\n      // User agent / relevance boost\n      {\n        className: 'string',\n        begin: '\"Mozilla/\\\\d\\\\.\\\\d \\\\\\(', end: '\"',\n        illegal: '\\\\n',\n        relevance: 3\n      },\n      // Strings\n      {\n        className: 'string',\n        begin: '\"', end: '\"',\n        illegal: '\\\\n',\n        relevance: 0\n      }\n    ]\n  };\n}\n\nmodule.exports = accesslog;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYWNjZXNzbG9nLmpzPzk5OGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixJQUFJLE9BQU8sSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSTtBQUNwRTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsR0FBRztBQUMvQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FjY2Vzc2xvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IEFwYWNoZSBBY2Nlc3MgTG9nXG4gQXV0aG9yOiBPbGVnIEVmaW1vdiA8ZWZpbW92b3ZAZ21haWwuY29tPlxuIERlc2NyaXB0aW9uOiBBcGFjaGUvTmdpbnggQWNjZXNzIExvZ3NcbiBXZWJzaXRlOiBodHRwczovL2h0dHBkLmFwYWNoZS5vcmcvZG9jcy8yLjQvbG9ncy5odG1sI2FjY2Vzc2xvZ1xuICovXG5cbiAvKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYWNjZXNzbG9nKGhsanMpIHtcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9NZXRob2RzXG4gIHZhciBIVFRQX1ZFUkJTID0gW1xuICAgIFwiR0VUXCIsIFwiUE9TVFwiLCBcIkhFQURcIiwgXCJQVVRcIiwgXCJERUxFVEVcIiwgXCJDT05ORUNUXCIsIFwiT1BUSU9OU1wiLCBcIlBBVENIXCIsIFwiVFJBQ0VcIlxuICBdO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBcGFjaGUgQWNjZXNzIExvZycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIC8vIElQXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnXlxcXFxkezEsM31cXFxcLlxcXFxkezEsM31cXFxcLlxcXFxkezEsM31cXFxcLlxcXFxkezEsM30oOlxcXFxkezEsNX0pP1xcXFxiJyxcbiAgICAgICAgcmVsZXZhbmNlOjVcbiAgICAgIH0sXG4gICAgICAvLyBPdGhlciBudW1iZXJzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGJcXFxcZCtcXFxcYicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIC8vIFJlcXVlc3RzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCIoJyArIEhUVFBfVkVSQlMuam9pbihcInxcIikgKyAnKScsIGVuZDogJ1wiJyxcbiAgICAgICAga2V5d29yZHM6IEhUVFBfVkVSQlMuam9pbihcIiBcIiksXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIHJlbGV2YW5jZTogNSxcbiAgICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgICAgYmVnaW46ICdIVFRQL1sxMl1cXFxcLlxcXFxkJyxcbiAgICAgICAgICByZWxldmFuY2U6NVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIC8vIERhdGVzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIC8vIGRhdGVzIG11c3QgaGF2ZSBhIGNlcnRhaW4gbGVuZ3RoLCB0aGlzIHByZXZlbnRzIG1hdGNoaW5nXG4gICAgICAgIC8vIHNpbXBsZSBhcnJheSBhY2Nlc3NlcyBhWzEyM10gYW5kIFtdIGFuZCBvdGhlciBjb21tb24gcGF0dGVybnNcbiAgICAgICAgLy8gZm91bmQgaW4gb3RoZXIgbGFuZ3VhZ2VzXG4gICAgICAgIGJlZ2luOiAvXFxbXFxkW15cXF1cXG5dezgsfVxcXS8sXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIHJlbGV2YW5jZTogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC9cXFsvLCBlbmQ6IC9cXF0vLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBVc2VyIGFnZW50IC8gcmVsZXZhbmNlIGJvb3N0XG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCJNb3ppbGxhL1xcXFxkXFxcXC5cXFxcZCBcXFxcXFwoJywgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICByZWxldmFuY2U6IDNcbiAgICAgIH0sXG4gICAgICAvLyBTdHJpbmdzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhY2Nlc3Nsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/accesslog.js\n");

/***/ })

}]);