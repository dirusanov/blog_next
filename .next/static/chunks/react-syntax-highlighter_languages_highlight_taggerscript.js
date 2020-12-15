(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_taggerscript"],{

/***/ "./node_modules/highlight.js/lib/languages/taggerscript.js":
/*!*****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/taggerscript.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Tagger Script\nAuthor: Philipp Wolfer <ph.wolfer@gmail.com>\nDescription: Syntax Highlighting for the Tagger Script as used by MusicBrainz Picard.\nWebsite: https://picard.musicbrainz.org\n */\nfunction taggerscript(hljs) {\n\n  var COMMENT = {\n    className: 'comment',\n    begin: /\\$noop\\(/,\n    end: /\\)/,\n    contains: [{\n      begin: /\\(/,\n      end: /\\)/,\n      contains: ['self', {\n        begin: /\\\\./\n      }]\n    }],\n    relevance: 10\n  };\n\n  var FUNCTION = {\n    className: 'keyword',\n    begin: /\\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,\n    end: /\\(/,\n    excludeEnd: true\n  };\n\n  var VARIABLE = {\n    className: 'variable',\n    begin: /%[_a-zA-Z0-9:]*/,\n    end: '%'\n  };\n\n  var ESCAPE_SEQUENCE = {\n    className: 'symbol',\n    begin: /\\\\./\n  };\n\n  return {\n    name: 'Tagger Script',\n    contains: [\n      COMMENT,\n      FUNCTION,\n      VARIABLE,\n      ESCAPE_SEQUENCE\n    ]\n  };\n}\n\nmodule.exports = taggerscript;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdGFnZ2Vyc2NyaXB0LmpzPzI0NjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3RhZ2dlcnNjcmlwdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogVGFnZ2VyIFNjcmlwdFxuQXV0aG9yOiBQaGlsaXBwIFdvbGZlciA8cGgud29sZmVyQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBTeW50YXggSGlnaGxpZ2h0aW5nIGZvciB0aGUgVGFnZ2VyIFNjcmlwdCBhcyB1c2VkIGJ5IE11c2ljQnJhaW56IFBpY2FyZC5cbldlYnNpdGU6IGh0dHBzOi8vcGljYXJkLm11c2ljYnJhaW56Lm9yZ1xuICovXG5mdW5jdGlvbiB0YWdnZXJzY3JpcHQoaGxqcykge1xuXG4gIHZhciBDT01NRU5UID0ge1xuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIGJlZ2luOiAvXFwkbm9vcFxcKC8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICBjb250YWluczogW3tcbiAgICAgIGJlZ2luOiAvXFwoLyxcbiAgICAgIGVuZDogL1xcKS8sXG4gICAgICBjb250YWluczogWydzZWxmJywge1xuICAgICAgICBiZWdpbjogL1xcXFwuL1xuICAgICAgfV1cbiAgICB9XSxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG5cbiAgdmFyIEZVTkNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgIGJlZ2luOiAvXFwkKD8hbm9vcClbYS16QS1aXVtfYS16QS1aMC05XSovLFxuICAgIGVuZDogL1xcKC8sXG4gICAgZXhjbHVkZUVuZDogdHJ1ZVxuICB9O1xuXG4gIHZhciBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46IC8lW19hLXpBLVowLTk6XSovLFxuICAgIGVuZDogJyUnXG4gIH07XG5cbiAgdmFyIEVTQ0FQRV9TRVFVRU5DRSA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAvXFxcXC4vXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVGFnZ2VyIFNjcmlwdCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIENPTU1FTlQsXG4gICAgICBGVU5DVElPTixcbiAgICAgIFZBUklBQkxFLFxuICAgICAgRVNDQVBFX1NFUVVFTkNFXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRhZ2dlcnNjcmlwdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/taggerscript.js\n");

/***/ })

}]);