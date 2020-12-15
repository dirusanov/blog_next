(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_xml"],{

/***/ "./node_modules/highlight.js/lib/languages/xml.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: HTML, XML\nWebsite: https://www.w3.org/XML/\nCategory: common\n*/\n\nfunction xml(hljs) {\n  var XML_IDENT_RE = '[A-Za-z0-9\\\\._:-]+';\n  var XML_ENTITIES = {\n    className: 'symbol',\n    begin: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;'\n  };\n  var XML_META_KEYWORDS = {\n\t  begin: '\\\\s',\n\t  contains:[\n\t    {\n\t      className: 'meta-keyword',\n\t      begin: '#?[a-z_][a-z1-9_-]+',\n\t      illegal: '\\\\n',\n      }\n\t  ]\n  };\n  var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {begin: '\\\\(', end: '\\\\)'});\n  var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {className: 'meta-string'});\n  var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'});\n  var TAG_INTERNALS = {\n    endsWithParent: true,\n    illegal: /</,\n    relevance: 0,\n    contains: [\n      {\n        className: 'attr',\n        begin: XML_IDENT_RE,\n        relevance: 0\n      },\n      {\n        begin: /=\\s*/,\n        relevance: 0,\n        contains: [\n          {\n            className: 'string',\n            endsParent: true,\n            variants: [\n              {begin: /\"/, end: /\"/, contains: [XML_ENTITIES]},\n              {begin: /'/, end: /'/, contains: [XML_ENTITIES]},\n              {begin: /[^\\s\"'=<>`]+/}\n            ]\n          }\n        ]\n      }\n    ]\n  };\n  return {\n    name: 'HTML, XML',\n    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],\n    case_insensitive: true,\n    contains: [\n      {\n        className: 'meta',\n        begin: '<![a-z]', end: '>',\n        relevance: 10,\n        contains: [\n\t\t\t\t  XML_META_KEYWORDS,\n\t\t\t\t  QUOTE_META_STRING_MODE,\n\t\t\t\t  APOS_META_STRING_MODE,\n\t\t\t\t\tXML_META_PAR_KEYWORDS,\n\t\t\t\t\t{\n\t\t\t\t\t  begin: '\\\\[', end: '\\\\]',\n\t\t\t\t\t  contains:[\n\t\t\t\t\t\t  {\n\t\t\t\t\t      className: 'meta',\n\t\t\t\t\t      begin: '<![a-z]', end: '>',\n\t\t\t\t\t      contains: [\n\t\t\t\t\t        XML_META_KEYWORDS,\n\t\t\t\t\t        XML_META_PAR_KEYWORDS,\n\t\t\t\t\t        QUOTE_META_STRING_MODE,\n\t\t\t\t\t        APOS_META_STRING_MODE\n\t\t\t\t\t\t    ]\n\t\t\t        }\n\t\t\t\t\t  ]\n\t\t\t\t  }\n\t\t\t\t]\n      },\n      hljs.COMMENT(\n        '<!--',\n        '-->',\n        {\n          relevance: 10\n        }\n      ),\n      {\n        begin: '<\\\\!\\\\[CDATA\\\\[', end: '\\\\]\\\\]>',\n        relevance: 10\n      },\n      XML_ENTITIES,\n      {\n        className: 'meta',\n        begin: /<\\?xml/, end: /\\?>/, relevance: 10\n      },\n      {\n        className: 'tag',\n        /*\n        The lookahead pattern (?=...) ensures that 'begin' only matches\n        '<style' as a single word, followed by a whitespace or an\n        ending braket. The '$' is needed for the lexeme to be recognized\n        by hljs.subMode() that tests lexemes outside the stream.\n        */\n        begin: '<style(?=\\\\s|>)', end: '>',\n        keywords: {name: 'style'},\n        contains: [TAG_INTERNALS],\n        starts: {\n          end: '</style>', returnEnd: true,\n          subLanguage: ['css', 'xml']\n        }\n      },\n      {\n        className: 'tag',\n        // See the comment in the <style tag about the lookahead pattern\n        begin: '<script(?=\\\\s|>)', end: '>',\n        keywords: {name: 'script'},\n        contains: [TAG_INTERNALS],\n        starts: {\n          end: '\\<\\/script\\>', returnEnd: true,\n          subLanguage: ['javascript', 'handlebars', 'xml']\n        }\n      },\n      {\n        className: 'tag',\n        begin: '</?', end: '/?>',\n        contains: [\n          {\n            className: 'name', begin: /[^\\/><\\s]+/, relevance: 0\n          },\n          TAG_INTERNALS\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = xml;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveG1sLmpzPzhkY2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVLGNBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCx5QkFBeUI7QUFDeEYsbUVBQW1FLHlCQUF5QjtBQUM1RixxRUFBcUUseUJBQXlCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrQ0FBK0M7QUFDOUQsZUFBZSwrQ0FBK0M7QUFDOUQsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogSFRNTCwgWE1MXG5XZWJzaXRlOiBodHRwczovL3d3dy53My5vcmcvWE1ML1xuQ2F0ZWdvcnk6IGNvbW1vblxuKi9cblxuZnVuY3Rpb24geG1sKGhsanMpIHtcbiAgdmFyIFhNTF9JREVOVF9SRSA9ICdbQS1aYS16MC05XFxcXC5fOi1dKyc7XG4gIHZhciBYTUxfRU5USVRJRVMgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJyZbYS16XSs7fCYjWzAtOV0rO3wmI3hbYS1mMC05XSs7J1xuICB9O1xuICB2YXIgWE1MX01FVEFfS0VZV09SRFMgPSB7XG5cdCAgYmVnaW46ICdcXFxccycsXG5cdCAgY29udGFpbnM6W1xuXHQgICAge1xuXHQgICAgICBjbGFzc05hbWU6ICdtZXRhLWtleXdvcmQnLFxuXHQgICAgICBiZWdpbjogJyM/W2Etel9dW2EtejEtOV8tXSsnLFxuXHQgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgfVxuXHQgIF1cbiAgfTtcbiAgdmFyIFhNTF9NRVRBX1BBUl9LRVlXT1JEUyA9IGhsanMuaW5oZXJpdChYTUxfTUVUQV9LRVlXT1JEUywge2JlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKSd9KTtcbiAgdmFyIEFQT1NfTUVUQV9TVFJJTkdfTU9ERSA9IGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtjbGFzc05hbWU6ICdtZXRhLXN0cmluZyd9KTtcbiAgdmFyIFFVT1RFX01FVEFfU1RSSU5HX01PREUgPSBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge2NsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ30pO1xuICB2YXIgVEFHX0lOVEVSTkFMUyA9IHtcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvPC8sXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICBiZWdpbjogWE1MX0lERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPVxccyovLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7YmVnaW46IC9cIi8sIGVuZDogL1wiLywgY29udGFpbnM6IFtYTUxfRU5USVRJRVNdfSxcbiAgICAgICAgICAgICAge2JlZ2luOiAvJy8sIGVuZDogLycvLCBjb250YWluczogW1hNTF9FTlRJVElFU119LFxuICAgICAgICAgICAgICB7YmVnaW46IC9bXlxcc1wiJz08PmBdKy99XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdIVE1MLCBYTUwnLFxuICAgIGFsaWFzZXM6IFsnaHRtbCcsICd4aHRtbCcsICdyc3MnLCAnYXRvbScsICd4amInLCAneHNkJywgJ3hzbCcsICdwbGlzdCcsICd3c2YnLCAnc3ZnJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICc8IVthLXpdJywgZW5kOiAnPicsXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG5cdFx0XHRcdCAgWE1MX01FVEFfS0VZV09SRFMsXG5cdFx0XHRcdCAgUVVPVEVfTUVUQV9TVFJJTkdfTU9ERSxcblx0XHRcdFx0ICBBUE9TX01FVEFfU1RSSU5HX01PREUsXG5cdFx0XHRcdFx0WE1MX01FVEFfUEFSX0tFWVdPUkRTLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIGJlZ2luOiAnXFxcXFsnLCBlbmQ6ICdcXFxcXScsXG5cdFx0XHRcdFx0ICBjb250YWluczpbXG5cdFx0XHRcdFx0XHQgIHtcblx0XHRcdFx0XHQgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcblx0XHRcdFx0XHQgICAgICBiZWdpbjogJzwhW2Etel0nLCBlbmQ6ICc+Jyxcblx0XHRcdFx0XHQgICAgICBjb250YWluczogW1xuXHRcdFx0XHRcdCAgICAgICAgWE1MX01FVEFfS0VZV09SRFMsXG5cdFx0XHRcdFx0ICAgICAgICBYTUxfTUVUQV9QQVJfS0VZV09SRFMsXG5cdFx0XHRcdFx0ICAgICAgICBRVU9URV9NRVRBX1NUUklOR19NT0RFLFxuXHRcdFx0XHRcdCAgICAgICAgQVBPU19NRVRBX1NUUklOR19NT0RFXG5cdFx0XHRcdFx0XHQgICAgXVxuXHRcdFx0ICAgICAgICB9XG5cdFx0XHRcdFx0ICBdXG5cdFx0XHRcdCAgfVxuXHRcdFx0XHRdXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnPCEtLScsXG4gICAgICAgICctLT4nLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAge1xuICAgICAgICBiZWdpbjogJzxcXFxcIVxcXFxbQ0RBVEFcXFxcWycsIGVuZDogJ1xcXFxdXFxcXF0+JyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIFhNTF9FTlRJVElFUyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvPFxcP3htbC8sIGVuZDogL1xcPz4vLCByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICAvKlxuICAgICAgICBUaGUgbG9va2FoZWFkIHBhdHRlcm4gKD89Li4uKSBlbnN1cmVzIHRoYXQgJ2JlZ2luJyBvbmx5IG1hdGNoZXNcbiAgICAgICAgJzxzdHlsZScgYXMgYSBzaW5nbGUgd29yZCwgZm9sbG93ZWQgYnkgYSB3aGl0ZXNwYWNlIG9yIGFuXG4gICAgICAgIGVuZGluZyBicmFrZXQuIFRoZSAnJCcgaXMgbmVlZGVkIGZvciB0aGUgbGV4ZW1lIHRvIGJlIHJlY29nbml6ZWRcbiAgICAgICAgYnkgaGxqcy5zdWJNb2RlKCkgdGhhdCB0ZXN0cyBsZXhlbWVzIG91dHNpZGUgdGhlIHN0cmVhbS5cbiAgICAgICAgKi9cbiAgICAgICAgYmVnaW46ICc8c3R5bGUoPz1cXFxcc3w+KScsIGVuZDogJz4nLFxuICAgICAgICBrZXl3b3Jkczoge25hbWU6ICdzdHlsZSd9LFxuICAgICAgICBjb250YWluczogW1RBR19JTlRFUk5BTFNdLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6ICc8L3N0eWxlPicsIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogWydjc3MnLCAneG1sJ11cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgLy8gU2VlIHRoZSBjb21tZW50IGluIHRoZSA8c3R5bGUgdGFnIGFib3V0IHRoZSBsb29rYWhlYWQgcGF0dGVyblxuICAgICAgICBiZWdpbjogJzxzY3JpcHQoPz1cXFxcc3w+KScsIGVuZDogJz4nLFxuICAgICAgICBrZXl3b3Jkczoge25hbWU6ICdzY3JpcHQnfSxcbiAgICAgICAgY29udGFpbnM6IFtUQUdfSU5URVJOQUxTXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAnXFw8XFwvc2NyaXB0XFw+JywgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiBbJ2phdmFzY3JpcHQnLCAnaGFuZGxlYmFycycsICd4bWwnXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICBiZWdpbjogJzwvPycsIGVuZDogJy8/PicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsIGJlZ2luOiAvW15cXC8+PFxcc10rLywgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBUQUdfSU5URVJOQUxTXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0geG1sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/xml.js\n");

/***/ })

}]);