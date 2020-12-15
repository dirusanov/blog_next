(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_dts"],{

/***/ "./node_modules/highlight.js/lib/languages/dts.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dts.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Device Tree\nDescription: *.dts files used in the Linux kernel\nAuthor: Martin Braun <martin.braun@ettus.com>, Moritz Fischer <moritz.fischer@ettus.com>\nWebsite: https://elinux.org/Device_Tree_Reference\nCategory: config\n*/\n\nfunction dts(hljs) {\n  var STRINGS = {\n    className: 'string',\n    variants: [\n      hljs.inherit(hljs.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?\"' }),\n      {\n        begin: '(u8?|U)?R\"', end: '\"',\n        contains: [hljs.BACKSLASH_ESCAPE]\n      },\n      {\n        begin: '\\'\\\\\\\\?.', end: '\\'',\n        illegal: '.'\n      }\n    ]\n  };\n\n  var NUMBERS = {\n    className: 'number',\n    variants: [\n      { begin: '\\\\b(\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)(u|U|l|L|ul|UL|f|F)' },\n      { begin: hljs.C_NUMBER_RE }\n    ],\n    relevance: 0\n  };\n\n  var PREPROCESSOR = {\n    className: 'meta',\n    begin: '#', end: '$',\n    keywords: {'meta-keyword': 'if else elif endif define undef ifdef ifndef'},\n    contains: [\n      {\n        begin: /\\\\\\n/, relevance: 0\n      },\n      {\n        beginKeywords: 'include', end: '$',\n        keywords: {'meta-keyword': 'include'},\n        contains: [\n          hljs.inherit(STRINGS, {className: 'meta-string'}),\n          {\n            className: 'meta-string',\n            begin: '<', end: '>',\n            illegal: '\\\\n'\n          }\n        ]\n      },\n      STRINGS,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE\n    ]\n  };\n\n  var DTS_REFERENCE = {\n    className: 'variable',\n    begin: '\\\\&[a-z\\\\d_]*\\\\b'\n  };\n\n  var DTS_KEYWORD = {\n    className: 'meta-keyword',\n    begin: '/[a-z][a-z\\\\d-]*/'\n  };\n\n  var DTS_LABEL = {\n    className: 'symbol',\n    begin: '^\\\\s*[a-zA-Z_][a-zA-Z\\\\d_]*:'\n  };\n\n  var DTS_CELL_PROPERTY = {\n    className: 'params',\n    begin: '<',\n    end: '>',\n    contains: [\n      NUMBERS,\n      DTS_REFERENCE\n    ]\n  };\n\n  var DTS_NODE = {\n    className: 'class',\n    begin: /[a-zA-Z_][a-zA-Z\\d_@]*\\s{/,\n    end: /[{;=]/,\n    returnBegin: true,\n    excludeEnd: true\n  };\n\n  var DTS_ROOT_NODE = {\n    className: 'class',\n    begin: '/\\\\s*{',\n    end: '};',\n    relevance: 10,\n    contains: [\n      DTS_REFERENCE,\n      DTS_KEYWORD,\n      DTS_LABEL,\n      DTS_NODE,\n      DTS_CELL_PROPERTY,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      NUMBERS,\n      STRINGS\n    ]\n  };\n\n  return {\n    name: 'Device Tree',\n    keywords: \"\",\n    contains: [\n      DTS_ROOT_NODE,\n      DTS_REFERENCE,\n      DTS_KEYWORD,\n      DTS_LABEL,\n      DTS_NODE,\n      DTS_CELL_PROPERTY,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      NUMBERS,\n      STRINGS,\n      PREPROCESSOR,\n      {\n        begin: hljs.IDENT_RE + '::',\n        keywords: \"\"\n      }\n    ]\n  };\n}\n\nmodule.exports = dts;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZHRzLmpzP2IwY2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMseUJBQXlCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTywwREFBMEQ7QUFDakUsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUErRDtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQSxpQ0FBaUMseUJBQXlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZHRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBEZXZpY2UgVHJlZVxuRGVzY3JpcHRpb246ICouZHRzIGZpbGVzIHVzZWQgaW4gdGhlIExpbnV4IGtlcm5lbFxuQXV0aG9yOiBNYXJ0aW4gQnJhdW4gPG1hcnRpbi5icmF1bkBldHR1cy5jb20+LCBNb3JpdHogRmlzY2hlciA8bW9yaXR6LmZpc2NoZXJAZXR0dXMuY29tPlxuV2Vic2l0ZTogaHR0cHM6Ly9lbGludXgub3JnL0RldmljZV9UcmVlX1JlZmVyZW5jZVxuQ2F0ZWdvcnk6IGNvbmZpZ1xuKi9cblxuZnVuY3Rpb24gZHRzKGhsanMpIHtcbiAgdmFyIFNUUklOR1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHsgYmVnaW46ICcoKHU4P3xVKXxMKT9cIicgfSksXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKHU4P3xVKT9SXCInLCBlbmQ6ICdcIicsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXCdcXFxcXFxcXD8uJywgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJy4nXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBOVU1CRVJTID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHsgYmVnaW46ICdcXFxcYihcXFxcZCsoXFxcXC5cXFxcZCopP3xcXFxcLlxcXFxkKykodXxVfGx8THx1bHxVTHxmfEYpJyB9LFxuICAgICAgeyBiZWdpbjogaGxqcy5DX05VTUJFUl9SRSB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICB2YXIgUFJFUFJPQ0VTU09SID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnIycsIGVuZDogJyQnLFxuICAgIGtleXdvcmRzOiB7J21ldGEta2V5d29yZCc6ICdpZiBlbHNlIGVsaWYgZW5kaWYgZGVmaW5lIHVuZGVmIGlmZGVmIGlmbmRlZid9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxcXFxcbi8sIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2luY2x1ZGUnLCBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6IHsnbWV0YS1rZXl3b3JkJzogJ2luY2x1ZGUnfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoU1RSSU5HUywge2NsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ30pLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJyxcbiAgICAgICAgICAgIGJlZ2luOiAnPCcsIGVuZDogJz4nLFxuICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFNUUklOR1MsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xuXG4gIHZhciBEVFNfUkVGRVJFTkNFID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICBiZWdpbjogJ1xcXFwmW2EtelxcXFxkX10qXFxcXGInXG4gIH07XG5cbiAgdmFyIERUU19LRVlXT1JEID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEta2V5d29yZCcsXG4gICAgYmVnaW46ICcvW2Etel1bYS16XFxcXGQtXSovJ1xuICB9O1xuXG4gIHZhciBEVFNfTEFCRUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJ15cXFxccypbYS16QS1aX11bYS16QS1aXFxcXGRfXSo6J1xuICB9O1xuXG4gIHZhciBEVFNfQ0VMTF9QUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnPCcsXG4gICAgZW5kOiAnPicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIE5VTUJFUlMsXG4gICAgICBEVFNfUkVGRVJFTkNFXG4gICAgXVxuICB9O1xuXG4gIHZhciBEVFNfTk9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgYmVnaW46IC9bYS16QS1aX11bYS16QS1aXFxkX0BdKlxcc3svLFxuICAgIGVuZDogL1t7Oz1dLyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBleGNsdWRlRW5kOiB0cnVlXG4gIH07XG5cbiAgdmFyIERUU19ST09UX05PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luOiAnL1xcXFxzKnsnLFxuICAgIGVuZDogJ307JyxcbiAgICByZWxldmFuY2U6IDEwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBEVFNfUkVGRVJFTkNFLFxuICAgICAgRFRTX0tFWVdPUkQsXG4gICAgICBEVFNfTEFCRUwsXG4gICAgICBEVFNfTk9ERSxcbiAgICAgIERUU19DRUxMX1BST1BFUlRZLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIE5VTUJFUlMsXG4gICAgICBTVFJJTkdTXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0RldmljZSBUcmVlJyxcbiAgICBrZXl3b3JkczogXCJcIixcbiAgICBjb250YWluczogW1xuICAgICAgRFRTX1JPT1RfTk9ERSxcbiAgICAgIERUU19SRUZFUkVOQ0UsXG4gICAgICBEVFNfS0VZV09SRCxcbiAgICAgIERUU19MQUJFTCxcbiAgICAgIERUU19OT0RFLFxuICAgICAgRFRTX0NFTExfUFJPUEVSVFksXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgTlVNQkVSUyxcbiAgICAgIFNUUklOR1MsXG4gICAgICBQUkVQUk9DRVNTT1IsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJzo6JyxcbiAgICAgICAga2V5d29yZHM6IFwiXCJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZHRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/dts.js\n");

/***/ })

}]);