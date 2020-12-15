(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_q"],{

/***/ "./node_modules/highlight.js/lib/languages/q.js":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/q.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: Q\nDescription: Q is a vector-based functional paradigm programming language built into the kdb+ database.\n             (K/Q/Kdb+ from Kx Systems)\nAuthor: Sergey Vidyuk <svidyuk@gmail.com>\nWebsite: https://kx.com/connect-with-us/developers/\n*/\nfunction q(hljs) {\n  var Q_KEYWORDS = {\n  $pattern: /(`?)[A-Za-z0-9_]+\\b/,\n  keyword:\n    'do while select delete by update from',\n  literal:\n    '0b 1b',\n  built_in:\n    'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',\n  type:\n    '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'\n  };\n  return {\n  name: 'Q',\n  aliases:['k', 'kdb'],\n  keywords: Q_KEYWORDS,\n  contains: [\n  hljs.C_LINE_COMMENT_MODE,\n    hljs.QUOTE_STRING_MODE,\n    hljs.C_NUMBER_MODE\n     ]\n  };\n}\n\nmodule.exports = q;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcS5qcz81ZGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9xLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBRXG5EZXNjcmlwdGlvbjogUSBpcyBhIHZlY3Rvci1iYXNlZCBmdW5jdGlvbmFsIHBhcmFkaWdtIHByb2dyYW1taW5nIGxhbmd1YWdlIGJ1aWx0IGludG8gdGhlIGtkYisgZGF0YWJhc2UuXG4gICAgICAgICAgICAgKEsvUS9LZGIrIGZyb20gS3ggU3lzdGVtcylcbkF1dGhvcjogU2VyZ2V5IFZpZHl1ayA8c3ZpZHl1a0BnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2t4LmNvbS9jb25uZWN0LXdpdGgtdXMvZGV2ZWxvcGVycy9cbiovXG5mdW5jdGlvbiBxKGhsanMpIHtcbiAgdmFyIFFfS0VZV09SRFMgPSB7XG4gICRwYXR0ZXJuOiAvKGA/KVtBLVphLXowLTlfXStcXGIvLFxuICBrZXl3b3JkOlxuICAgICdkbyB3aGlsZSBzZWxlY3QgZGVsZXRlIGJ5IHVwZGF0ZSBmcm9tJyxcbiAgbGl0ZXJhbDpcbiAgICAnMGIgMWInLFxuICBidWlsdF9pbjpcbiAgICAnbmVnIG5vdCBudWxsIHN0cmluZyByZWNpcHJvY2FsIGZsb29yIGNlaWxpbmcgc2lnbnVtIG1vZCB4YmFyIHhsb2cgYW5kIG9yIGVhY2ggc2NhbiBvdmVyIHByaW9yIG1tdSBsc3EgaW52IG1kNSBsdGltZSBndGltZSBjb3VudCBmaXJzdCB2YXIgZGV2IG1lZCBjb3YgY29yIGFsbCBhbnkgcmFuZCBzdW1zIHByZHMgbWlucyBtYXhzIGZpbGxzIGRlbHRhcyByYXRpb3MgYXZncyBkaWZmZXIgcHJldiBuZXh0IHJhbmsgcmV2ZXJzZSBpYXNjIGlkZXNjIGFzYyBkZXNjIG1zdW0gbWNvdW50IG1hdmcgbWRldiB4cmFuayBtbWluIG1tYXggeHByZXYgcm90YXRlIGRpc3RpbmN0IGdyb3VwIHdoZXJlIGZsaXAgdHlwZSBrZXkgdGlsIGdldCB2YWx1ZSBhdHRyIGN1dCBzZXQgdXBzZXJ0IHJhemUgdW5pb24gaW50ZXIgZXhjZXB0IGNyb3NzIHN2IHZzIHN1Ymxpc3QgZW5saXN0IHJlYWQwIHJlYWQxIGhvcGVuIGhjbG9zZSBoZGVsIGhzeW0gaGNvdW50IHBlYWNoIHN5c3RlbSBsdHJpbSBydHJpbSB0cmltIGxvd2VyIHVwcGVyIHNzciB2aWV3IHRhYmxlcyB2aWV3cyBjb2xzIHhjb2xzIGtleXMgeGtleSB4Y29sIHhhc2MgeGRlc2MgZmtleXMgbWV0YSBsaiBhaiBhajAgaWogcGogYXNvZiB1aiB3dyB3aiB3ajEgZmJ5IHhncm91cCB1bmdyb3VwIGVqIHNhdmUgbG9hZCByc2F2ZSBybG9hZCBzaG93IGNzdiBwYXJzZSBldmFsIG1pbiBtYXggYXZnIHdhdmcgd3N1bSBzaW4gY29zIHRhbiBzdW0nLFxuICB0eXBlOlxuICAgICdgZmxvYXQgYGRvdWJsZSBpbnQgYHRpbWVzdGFtcCBgdGltZXNwYW4gYGRhdGV0aW1lIGB0aW1lIGBib29sZWFuIGBzeW1ib2wgYGNoYXIgYGJ5dGUgYHNob3J0IGBsb25nIGByZWFsIGBtb250aCBgZGF0ZSBgbWludXRlIGBzZWNvbmQgYGd1aWQnXG4gIH07XG4gIHJldHVybiB7XG4gIG5hbWU6ICdRJyxcbiAgYWxpYXNlczpbJ2snLCAna2RiJ10sXG4gIGtleXdvcmRzOiBRX0tFWVdPUkRTLFxuICBjb250YWluczogW1xuICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/q.js\n");

/***/ })

}]);