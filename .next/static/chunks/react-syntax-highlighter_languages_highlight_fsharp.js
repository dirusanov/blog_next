(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_fsharp"],{

/***/ "./node_modules/highlight.js/lib/languages/fsharp.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/fsharp.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: F#\nAuthor: Jonas Follesø <jonas@follesoe.no>\nContributors: Troy Kershaw <hello@troykershaw.com>, Henrik Feldt <henrik@haf.se>\nWebsite: https://docs.microsoft.com/en-us/dotnet/fsharp/\nCategory: functional\n*/\nfunction fsharp(hljs) {\n  var TYPEPARAM = {\n    begin: '<', end: '>',\n    contains: [\n      hljs.inherit(hljs.TITLE_MODE, {begin: /'[a-zA-Z0-9_]+/})\n    ]\n  };\n\n  return {\n    name: 'F#',\n    aliases: ['fs'],\n    keywords:\n      'abstract and as assert base begin class default delegate do done ' +\n      'downcast downto elif else end exception extern false finally for ' +\n      'fun function global if in inherit inline interface internal lazy let ' +\n      'match member module mutable namespace new null of open or ' +\n      'override private public rec return sig static struct then to ' +\n      'true try type upcast use val void when while with yield',\n    illegal: /\\/\\*/,\n    contains: [\n      {\n        // monad builder keywords (matches before non-bang kws)\n        className: 'keyword',\n        begin: /\\b(yield|return|let|do)!/\n      },\n      {\n        className: 'string',\n        begin: '@\"', end: '\"',\n        contains: [{begin: '\"\"'}]\n      },\n      {\n        className: 'string',\n        begin: '\"\"\"', end: '\"\"\"'\n      },\n      hljs.COMMENT('\\\\(\\\\*', '\\\\*\\\\)'),\n      {\n        className: 'class',\n        beginKeywords: 'type', end: '\\\\(|=|$', excludeEnd: true,\n        contains: [\n          hljs.UNDERSCORE_TITLE_MODE,\n          TYPEPARAM\n        ]\n      },\n      {\n        className: 'meta',\n        begin: '\\\\[<', end: '>\\\\]',\n        relevance: 10\n      },\n      {\n        className: 'symbol',\n        begin: '\\\\B(\\'[A-Za-z])\\\\b',\n        contains: [hljs.BACKSLASH_ESCAPE]\n      },\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),\n      hljs.C_NUMBER_MODE\n    ]\n  };\n}\n\nmodule.exports = fsharp;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZnNoYXJwLmpzPzAyMTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3QkFBd0I7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9mc2hhcnAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEYjXG5BdXRob3I6IEpvbmFzIEZvbGxlc8O4IDxqb25hc0Bmb2xsZXNvZS5ubz5cbkNvbnRyaWJ1dG9yczogVHJveSBLZXJzaGF3IDxoZWxsb0B0cm95a2Vyc2hhdy5jb20+LCBIZW5yaWsgRmVsZHQgPGhlbnJpa0BoYWYuc2U+XG5XZWJzaXRlOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvZnNoYXJwL1xuQ2F0ZWdvcnk6IGZ1bmN0aW9uYWxcbiovXG5mdW5jdGlvbiBmc2hhcnAoaGxqcykge1xuICB2YXIgVFlQRVBBUkFNID0ge1xuICAgIGJlZ2luOiAnPCcsIGVuZDogJz4nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46IC8nW2EtekEtWjAtOV9dKy99KVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdGIycsXG4gICAgYWxpYXNlczogWydmcyddLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ2Fic3RyYWN0IGFuZCBhcyBhc3NlcnQgYmFzZSBiZWdpbiBjbGFzcyBkZWZhdWx0IGRlbGVnYXRlIGRvIGRvbmUgJyArXG4gICAgICAnZG93bmNhc3QgZG93bnRvIGVsaWYgZWxzZSBlbmQgZXhjZXB0aW9uIGV4dGVybiBmYWxzZSBmaW5hbGx5IGZvciAnICtcbiAgICAgICdmdW4gZnVuY3Rpb24gZ2xvYmFsIGlmIGluIGluaGVyaXQgaW5saW5lIGludGVyZmFjZSBpbnRlcm5hbCBsYXp5IGxldCAnICtcbiAgICAgICdtYXRjaCBtZW1iZXIgbW9kdWxlIG11dGFibGUgbmFtZXNwYWNlIG5ldyBudWxsIG9mIG9wZW4gb3IgJyArXG4gICAgICAnb3ZlcnJpZGUgcHJpdmF0ZSBwdWJsaWMgcmVjIHJldHVybiBzaWcgc3RhdGljIHN0cnVjdCB0aGVuIHRvICcgK1xuICAgICAgJ3RydWUgdHJ5IHR5cGUgdXBjYXN0IHVzZSB2YWwgdm9pZCB3aGVuIHdoaWxlIHdpdGggeWllbGQnLFxuICAgIGlsbGVnYWw6IC9cXC9cXCovLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIC8vIG1vbmFkIGJ1aWxkZXIga2V5d29yZHMgKG1hdGNoZXMgYmVmb3JlIG5vbi1iYW5nIGt3cylcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAvXFxiKHlpZWxkfHJldHVybnxsZXR8ZG8pIS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnQFwiJywgZW5kOiAnXCInLFxuICAgICAgICBjb250YWluczogW3tiZWdpbjogJ1wiXCInfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCJcIlwiJywgZW5kOiAnXCJcIlwiJ1xuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXFxcXChcXFxcKicsICdcXFxcKlxcXFwpJyksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3R5cGUnLCBlbmQ6ICdcXFxcKHw9fCQnLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgIFRZUEVQQVJBTVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdcXFxcWzwnLCBlbmQ6ICc+XFxcXF0nLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ1xcXFxCKFxcJ1tBLVphLXpdKVxcXFxiJyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9LFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsfSksXG4gICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnNoYXJwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/fsharp.js\n");

/***/ })

}]);