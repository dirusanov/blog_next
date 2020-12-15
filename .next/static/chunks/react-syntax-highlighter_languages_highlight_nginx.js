(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_nginx"],{

/***/ "./node_modules/highlight.js/lib/languages/nginx.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nginx.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Nginx config\nAuthor: Peter Leonov <gojpeg@yandex.ru>\nContributors: Ivan Sagalaev <maniac@softwaremaniacs.org>\nCategory: common, config\nWebsite: https://www.nginx.com\n*/\n\nfunction nginx(hljs) {\n  var VAR = {\n    className: 'variable',\n    variants: [\n      {begin: /\\$\\d+/},\n      {begin: /\\$\\{/, end: /}/},\n      {begin: '[\\\\$\\\\@]' + hljs.UNDERSCORE_IDENT_RE}\n    ]\n  };\n  var DEFAULT = {\n    endsWithParent: true,\n    keywords: {\n      $pattern: '[a-z/_]+',\n      literal:\n        'on off yes no true false none blocked debug info notice warn error crit ' +\n        'select break last permanent redirect kqueue rtsig epoll poll /dev/poll'\n    },\n    relevance: 0,\n    illegal: '=>',\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      {\n        className: 'string',\n        contains: [hljs.BACKSLASH_ESCAPE, VAR],\n        variants: [\n          {begin: /\"/, end: /\"/},\n          {begin: /'/, end: /'/}\n        ]\n      },\n      // this swallows entire URLs to avoid detecting numbers within\n      {\n        begin: '([a-z]+):/', end: '\\\\s', endsWithParent: true, excludeEnd: true,\n        contains: [VAR]\n      },\n      {\n        className: 'regexp',\n        contains: [hljs.BACKSLASH_ESCAPE, VAR],\n        variants: [\n          {begin: \"\\\\s\\\\^\", end: \"\\\\s|{|;\", returnEnd: true},\n          // regexp locations (~, ~*)\n          {begin: \"~\\\\*?\\\\s+\", end: \"\\\\s|{|;\", returnEnd: true},\n          // *.example.com\n          {begin: \"\\\\*(\\\\.[a-z\\\\-]+)+\"},\n          // sub.example.*\n          {begin: \"([a-z\\\\-]+\\\\.)+\\\\*\"}\n        ]\n      },\n      // IP\n      {\n        className: 'number',\n        begin: '\\\\b\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}(:\\\\d{1,5})?\\\\b'\n      },\n      // units\n      {\n        className: 'number',\n        begin: '\\\\b\\\\d+[kKmMgGdshdwy]*\\\\b',\n        relevance: 0\n      },\n      VAR\n    ]\n  };\n\n  return {\n    name: 'Nginx config',\n    aliases: ['nginxconf'],\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      {\n        begin: hljs.UNDERSCORE_IDENT_RE + '\\\\s+{', returnBegin: true,\n        end: '{',\n        contains: [\n          {\n            className: 'section',\n            begin: hljs.UNDERSCORE_IDENT_RE\n          }\n        ],\n        relevance: 0\n      },\n      {\n        begin: hljs.UNDERSCORE_IDENT_RE + '\\\\s', end: ';|{', returnBegin: true,\n        contains: [\n          {\n            className: 'attribute',\n            begin: hljs.UNDERSCORE_IDENT_RE,\n            starts: DEFAULT\n          }\n        ],\n        relevance: 0\n      }\n    ],\n    illegal: '[^\\\\s\\\\}]'\n  };\n}\n\nmodule.exports = nginx;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbmdpbnguanM/ZjU0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZUFBZTtBQUN0QixPQUFPLFlBQVksVUFBVSxFQUFFO0FBQy9CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNEJBQTRCLEVBQUUsbUJBQW1CO0FBQzVEO0FBQ0EsV0FBVywrQkFBK0IsRUFBRSxtQkFBbUI7QUFDL0Q7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QztBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUk7QUFDdEUsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx3REFBd0QsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL25naW54LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBOZ2lueCBjb25maWdcbkF1dGhvcjogUGV0ZXIgTGVvbm92IDxnb2pwZWdAeWFuZGV4LnJ1PlxuQ29udHJpYnV0b3JzOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cbkNhdGVnb3J5OiBjb21tb24sIGNvbmZpZ1xuV2Vic2l0ZTogaHR0cHM6Ly93d3cubmdpbnguY29tXG4qL1xuXG5mdW5jdGlvbiBuZ2lueChobGpzKSB7XG4gIHZhciBWQVIgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC9cXCRcXGQrL30sXG4gICAgICB7YmVnaW46IC9cXCRcXHsvLCBlbmQ6IC99L30sXG4gICAgICB7YmVnaW46ICdbXFxcXCRcXFxcQF0nICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFfVxuICAgIF1cbiAgfTtcbiAgdmFyIERFRkFVTFQgPSB7XG4gICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnW2Etei9fXSsnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ29uIG9mZiB5ZXMgbm8gdHJ1ZSBmYWxzZSBub25lIGJsb2NrZWQgZGVidWcgaW5mbyBub3RpY2Ugd2FybiBlcnJvciBjcml0ICcgK1xuICAgICAgICAnc2VsZWN0IGJyZWFrIGxhc3QgcGVybWFuZW50IHJlZGlyZWN0IGtxdWV1ZSBydHNpZyBlcG9sbCBwb2xsIC9kZXYvcG9sbCdcbiAgICB9LFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBpbGxlZ2FsOiAnPT4nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgVkFSXSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7YmVnaW46IC9cIi8sIGVuZDogL1wiL30sXG4gICAgICAgICAge2JlZ2luOiAvJy8sIGVuZDogLycvfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gdGhpcyBzd2FsbG93cyBlbnRpcmUgVVJMcyB0byBhdm9pZCBkZXRlY3RpbmcgbnVtYmVycyB3aXRoaW5cbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcoW2Etel0rKTovJywgZW5kOiAnXFxcXHMnLCBlbmRzV2l0aFBhcmVudDogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtWQVJdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgVkFSXSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7YmVnaW46IFwiXFxcXHNcXFxcXlwiLCBlbmQ6IFwiXFxcXHN8e3w7XCIsIHJldHVybkVuZDogdHJ1ZX0sXG4gICAgICAgICAgLy8gcmVnZXhwIGxvY2F0aW9ucyAofiwgfiopXG4gICAgICAgICAge2JlZ2luOiBcIn5cXFxcKj9cXFxccytcIiwgZW5kOiBcIlxcXFxzfHt8O1wiLCByZXR1cm5FbmQ6IHRydWV9LFxuICAgICAgICAgIC8vICouZXhhbXBsZS5jb21cbiAgICAgICAgICB7YmVnaW46IFwiXFxcXCooXFxcXC5bYS16XFxcXC1dKykrXCJ9LFxuICAgICAgICAgIC8vIHN1Yi5leGFtcGxlLipcbiAgICAgICAgICB7YmVnaW46IFwiKFthLXpcXFxcLV0rXFxcXC4pK1xcXFwqXCJ9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyBJUFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJ1xcXFxiXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfVxcXFwuXFxcXGR7MSwzfSg6XFxcXGR7MSw1fSk/XFxcXGInXG4gICAgICB9LFxuICAgICAgLy8gdW5pdHNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYlxcXFxkK1trS21NZ0dkc2hkd3ldKlxcXFxiJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgVkFSXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ05naW54IGNvbmZpZycsXG4gICAgYWxpYXNlczogWyduZ2lueGNvbmYnXSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccyt7JywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGVuZDogJ3snLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICAgICAgYmVnaW46IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzJywgZW5kOiAnO3x7JywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICAgIGJlZ2luOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgICAgICAgICBzdGFydHM6IERFRkFVTFRcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF0sXG4gICAgaWxsZWdhbDogJ1teXFxcXHNcXFxcfV0nXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmdpbng7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/nginx.js\n");

/***/ })

}]);