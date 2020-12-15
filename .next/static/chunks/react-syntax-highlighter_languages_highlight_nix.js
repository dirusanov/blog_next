(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_nix"],{

/***/ "./node_modules/highlight.js/lib/languages/nix.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/nix.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Nix\nAuthor: Domen Kožar <domen@dev.si>\nDescription: Nix functional language\nWebsite: http://nixos.org/nix\n*/\n\n\nfunction nix(hljs) {\n  var NIX_KEYWORDS = {\n    keyword:\n      'rec with let in inherit assert if else then',\n    literal:\n      'true false or and null',\n    built_in:\n      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +\n      'toString derivation'\n  };\n  var ANTIQUOTE = {\n    className: 'subst',\n    begin: /\\$\\{/,\n    end: /}/,\n    keywords: NIX_KEYWORDS\n  };\n  var ATTRS = {\n    begin: /[a-zA-Z0-9-_]+(\\s*=)/, returnBegin: true,\n    relevance: 0,\n    contains: [\n      {\n        className: 'attr',\n        begin: /\\S+/\n      }\n    ]\n  };\n  var STRING = {\n    className: 'string',\n    contains: [ANTIQUOTE],\n    variants: [\n      {begin: \"''\", end: \"''\"},\n      {begin: '\"', end: '\"'}\n    ]\n  };\n  var EXPRESSIONS = [\n    hljs.NUMBER_MODE,\n    hljs.HASH_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    STRING,\n    ATTRS\n  ];\n  ANTIQUOTE.contains = EXPRESSIONS;\n  return {\n    name: 'Nix',\n    aliases: [\"nixos\"],\n    keywords: NIX_KEYWORDS,\n    contains: EXPRESSIONS\n  };\n}\n\nmodule.exports = nix;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbml4LmpzPzQ2YWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbml4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBOaXhcbkF1dGhvcjogRG9tZW4gS2/FvmFyIDxkb21lbkBkZXYuc2k+XG5EZXNjcmlwdGlvbjogTml4IGZ1bmN0aW9uYWwgbGFuZ3VhZ2VcbldlYnNpdGU6IGh0dHA6Ly9uaXhvcy5vcmcvbml4XG4qL1xuXG5cbmZ1bmN0aW9uIG5peChobGpzKSB7XG4gIHZhciBOSVhfS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdyZWMgd2l0aCBsZXQgaW4gaW5oZXJpdCBhc3NlcnQgaWYgZWxzZSB0aGVuJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RydWUgZmFsc2Ugb3IgYW5kIG51bGwnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ2ltcG9ydCBhYm9ydCBiYXNlTmFtZU9mIGRpck9mIGlzTnVsbCBidWlsdGlucyBtYXAgcmVtb3ZlQXR0cnMgdGhyb3cgJyArXG4gICAgICAndG9TdHJpbmcgZGVyaXZhdGlvbidcbiAgfTtcbiAgdmFyIEFOVElRVU9URSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46IC9cXCRcXHsvLFxuICAgIGVuZDogL30vLFxuICAgIGtleXdvcmRzOiBOSVhfS0VZV09SRFNcbiAgfTtcbiAgdmFyIEFUVFJTID0ge1xuICAgIGJlZ2luOiAvW2EtekEtWjAtOS1fXSsoXFxzKj0pLywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICBiZWdpbjogL1xcUysvXG4gICAgICB9XG4gICAgXVxuICB9O1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY29udGFpbnM6IFtBTlRJUVVPVEVdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IFwiJydcIiwgZW5kOiBcIicnXCJ9LFxuICAgICAge2JlZ2luOiAnXCInLCBlbmQ6ICdcIid9XG4gICAgXVxuICB9O1xuICB2YXIgRVhQUkVTU0lPTlMgPSBbXG4gICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgU1RSSU5HLFxuICAgIEFUVFJTXG4gIF07XG4gIEFOVElRVU9URS5jb250YWlucyA9IEVYUFJFU1NJT05TO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdOaXgnLFxuICAgIGFsaWFzZXM6IFtcIm5peG9zXCJdLFxuICAgIGtleXdvcmRzOiBOSVhfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IEVYUFJFU1NJT05TXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbml4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/nix.js\n");

/***/ })

}]);