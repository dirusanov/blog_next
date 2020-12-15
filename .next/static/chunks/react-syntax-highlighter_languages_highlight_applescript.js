(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_applescript"],{

/***/ "./node_modules/highlight.js/lib/languages/applescript.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/applescript.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: AppleScript\nAuthors: Nathan Grigg <nathan@nathanamy.org>, Dr. Drang <drdrang@gmail.com>\nCategory: scripting\nWebsite: https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/introduction/ASLR_intro.html\n*/\n\n/** @type LanguageFn */\nfunction applescript(hljs) {\n  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: ''});\n  var PARAMS = {\n    className: 'params',\n    begin: '\\\\(', end: '\\\\)',\n    contains: ['self', hljs.C_NUMBER_MODE, STRING]\n  };\n  var COMMENT_MODE_1 = hljs.COMMENT('--', '$');\n  var COMMENT_MODE_2 = hljs.COMMENT(\n    '\\\\(\\\\*',\n    '\\\\*\\\\)',\n    {\n      contains: ['self', COMMENT_MODE_1] //allow nesting\n    }\n  );\n  var COMMENTS = [\n    COMMENT_MODE_1,\n    COMMENT_MODE_2,\n    hljs.HASH_COMMENT_MODE\n  ];\n\n  return {\n    name: 'AppleScript',\n    aliases: ['osascript'],\n    keywords: {\n      keyword:\n        'about above after against and around as at back before beginning ' +\n        'behind below beneath beside between but by considering ' +\n        'contain contains continue copy div does eighth else end equal ' +\n        'equals error every exit fifth first for fourth from front ' +\n        'get given global if ignoring in into is it its last local me ' +\n        'middle mod my ninth not of on onto or over prop property put ref ' +\n        'reference repeat returning script second set seventh since ' +\n        'sixth some tell tenth that the|0 then third through thru ' +\n        'timeout times to transaction try until where while whose with ' +\n        'without',\n      literal:\n        'AppleScript false linefeed return pi quote result space tab true',\n      built_in:\n        'alias application boolean class constant date file integer list ' +\n        'number real record string text ' +\n        'activate beep count delay launch log offset read round ' +\n        'run say summarize write ' +\n        'character characters contents day frontmost id item length ' +\n        'month name paragraph paragraphs rest reverse running time version ' +\n        'weekday word words year'\n    },\n    contains: [\n      STRING,\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'built_in',\n        begin:\n          '\\\\b(clipboard info|the clipboard|info for|list (disks|folder)|' +\n          'mount volume|path to|(close|open for) access|(get|set) eof|' +\n          'current date|do shell script|get volume settings|random number|' +\n          'set volume|system attribute|system info|time to GMT|' +\n          '(load|run|store) script|scripting components|' +\n          'ASCII (character|number)|localized string|' +\n          'choose (application|color|file|file name|' +\n          'folder|from list|remote application|URL)|' +\n          'display (alert|dialog))\\\\b|^\\\\s*return\\\\b'\n      },\n      {\n        className: 'literal',\n        begin:\n          '\\\\b(text item delimiters|current application|missing value)\\\\b'\n      },\n      {\n        className: 'keyword',\n        begin:\n          '\\\\b(apart from|aside from|instead of|out of|greater than|' +\n          \"isn't|(doesn't|does not) (equal|come before|come after|contain)|\" +\n          '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' +\n          'contained by|comes (before|after)|a (ref|reference)|POSIX file|' +\n          'POSIX path|(date|time) string|quoted form)\\\\b'\n      },\n      {\n        beginKeywords: 'on',\n        illegal: '[${=;\\\\n]',\n        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]\n      }\n    ].concat(COMMENTS),\n    illegal: '//|->|=>|\\\\[\\\\['\n  };\n}\n\nmodule.exports = applescript;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXBwbGVzY3JpcHQuanM/N2JjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFEQUFxRCxZQUFZO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FwcGxlc2NyaXB0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBBcHBsZVNjcmlwdFxuQXV0aG9yczogTmF0aGFuIEdyaWdnIDxuYXRoYW5AbmF0aGFuYW15Lm9yZz4sIERyLiBEcmFuZyA8ZHJkcmFuZ0BnbWFpbC5jb20+XG5DYXRlZ29yeTogc2NyaXB0aW5nXG5XZWJzaXRlOiBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9hcmNoaXZlL2RvY3VtZW50YXRpb24vQXBwbGVTY3JpcHQvQ29uY2VwdHVhbC9BcHBsZVNjcmlwdExhbmdHdWlkZS9pbnRyb2R1Y3Rpb24vQVNMUl9pbnRyby5odG1sXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXBwbGVzY3JpcHQoaGxqcykge1xuICB2YXIgU1RSSU5HID0gaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiAnJ30pO1xuICB2YXIgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICBjb250YWluczogWydzZWxmJywgaGxqcy5DX05VTUJFUl9NT0RFLCBTVFJJTkddXG4gIH07XG4gIHZhciBDT01NRU5UX01PREVfMSA9IGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpO1xuICB2YXIgQ09NTUVOVF9NT0RFXzIgPSBobGpzLkNPTU1FTlQoXG4gICAgJ1xcXFwoXFxcXConLFxuICAgICdcXFxcKlxcXFwpJyxcbiAgICB7XG4gICAgICBjb250YWluczogWydzZWxmJywgQ09NTUVOVF9NT0RFXzFdIC8vYWxsb3cgbmVzdGluZ1xuICAgIH1cbiAgKTtcbiAgdmFyIENPTU1FTlRTID0gW1xuICAgIENPTU1FTlRfTU9ERV8xLFxuICAgIENPTU1FTlRfTU9ERV8yLFxuICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdBcHBsZVNjcmlwdCcsXG4gICAgYWxpYXNlczogWydvc2FzY3JpcHQnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2Fib3V0IGFib3ZlIGFmdGVyIGFnYWluc3QgYW5kIGFyb3VuZCBhcyBhdCBiYWNrIGJlZm9yZSBiZWdpbm5pbmcgJyArXG4gICAgICAgICdiZWhpbmQgYmVsb3cgYmVuZWF0aCBiZXNpZGUgYmV0d2VlbiBidXQgYnkgY29uc2lkZXJpbmcgJyArXG4gICAgICAgICdjb250YWluIGNvbnRhaW5zIGNvbnRpbnVlIGNvcHkgZGl2IGRvZXMgZWlnaHRoIGVsc2UgZW5kIGVxdWFsICcgK1xuICAgICAgICAnZXF1YWxzIGVycm9yIGV2ZXJ5IGV4aXQgZmlmdGggZmlyc3QgZm9yIGZvdXJ0aCBmcm9tIGZyb250ICcgK1xuICAgICAgICAnZ2V0IGdpdmVuIGdsb2JhbCBpZiBpZ25vcmluZyBpbiBpbnRvIGlzIGl0IGl0cyBsYXN0IGxvY2FsIG1lICcgK1xuICAgICAgICAnbWlkZGxlIG1vZCBteSBuaW50aCBub3Qgb2Ygb24gb250byBvciBvdmVyIHByb3AgcHJvcGVydHkgcHV0IHJlZiAnICtcbiAgICAgICAgJ3JlZmVyZW5jZSByZXBlYXQgcmV0dXJuaW5nIHNjcmlwdCBzZWNvbmQgc2V0IHNldmVudGggc2luY2UgJyArXG4gICAgICAgICdzaXh0aCBzb21lIHRlbGwgdGVudGggdGhhdCB0aGV8MCB0aGVuIHRoaXJkIHRocm91Z2ggdGhydSAnICtcbiAgICAgICAgJ3RpbWVvdXQgdGltZXMgdG8gdHJhbnNhY3Rpb24gdHJ5IHVudGlsIHdoZXJlIHdoaWxlIHdob3NlIHdpdGggJyArXG4gICAgICAgICd3aXRob3V0JyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICdBcHBsZVNjcmlwdCBmYWxzZSBsaW5lZmVlZCByZXR1cm4gcGkgcXVvdGUgcmVzdWx0IHNwYWNlIHRhYiB0cnVlJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnYWxpYXMgYXBwbGljYXRpb24gYm9vbGVhbiBjbGFzcyBjb25zdGFudCBkYXRlIGZpbGUgaW50ZWdlciBsaXN0ICcgK1xuICAgICAgICAnbnVtYmVyIHJlYWwgcmVjb3JkIHN0cmluZyB0ZXh0ICcgK1xuICAgICAgICAnYWN0aXZhdGUgYmVlcCBjb3VudCBkZWxheSBsYXVuY2ggbG9nIG9mZnNldCByZWFkIHJvdW5kICcgK1xuICAgICAgICAncnVuIHNheSBzdW1tYXJpemUgd3JpdGUgJyArXG4gICAgICAgICdjaGFyYWN0ZXIgY2hhcmFjdGVycyBjb250ZW50cyBkYXkgZnJvbnRtb3N0IGlkIGl0ZW0gbGVuZ3RoICcgK1xuICAgICAgICAnbW9udGggbmFtZSBwYXJhZ3JhcGggcGFyYWdyYXBocyByZXN0IHJldmVyc2UgcnVubmluZyB0aW1lIHZlcnNpb24gJyArXG4gICAgICAgICd3ZWVrZGF5IHdvcmQgd29yZHMgeWVhcidcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBTVFJJTkcsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgYmVnaW46XG4gICAgICAgICAgJ1xcXFxiKGNsaXBib2FyZCBpbmZvfHRoZSBjbGlwYm9hcmR8aW5mbyBmb3J8bGlzdCAoZGlza3N8Zm9sZGVyKXwnICtcbiAgICAgICAgICAnbW91bnQgdm9sdW1lfHBhdGggdG98KGNsb3NlfG9wZW4gZm9yKSBhY2Nlc3N8KGdldHxzZXQpIGVvZnwnICtcbiAgICAgICAgICAnY3VycmVudCBkYXRlfGRvIHNoZWxsIHNjcmlwdHxnZXQgdm9sdW1lIHNldHRpbmdzfHJhbmRvbSBudW1iZXJ8JyArXG4gICAgICAgICAgJ3NldCB2b2x1bWV8c3lzdGVtIGF0dHJpYnV0ZXxzeXN0ZW0gaW5mb3x0aW1lIHRvIEdNVHwnICtcbiAgICAgICAgICAnKGxvYWR8cnVufHN0b3JlKSBzY3JpcHR8c2NyaXB0aW5nIGNvbXBvbmVudHN8JyArXG4gICAgICAgICAgJ0FTQ0lJIChjaGFyYWN0ZXJ8bnVtYmVyKXxsb2NhbGl6ZWQgc3RyaW5nfCcgK1xuICAgICAgICAgICdjaG9vc2UgKGFwcGxpY2F0aW9ufGNvbG9yfGZpbGV8ZmlsZSBuYW1lfCcgK1xuICAgICAgICAgICdmb2xkZXJ8ZnJvbSBsaXN0fHJlbW90ZSBhcHBsaWNhdGlvbnxVUkwpfCcgK1xuICAgICAgICAgICdkaXNwbGF5IChhbGVydHxkaWFsb2cpKVxcXFxifF5cXFxccypyZXR1cm5cXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICBiZWdpbjpcbiAgICAgICAgICAnXFxcXGIodGV4dCBpdGVtIGRlbGltaXRlcnN8Y3VycmVudCBhcHBsaWNhdGlvbnxtaXNzaW5nIHZhbHVlKVxcXFxiJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOlxuICAgICAgICAgICdcXFxcYihhcGFydCBmcm9tfGFzaWRlIGZyb218aW5zdGVhZCBvZnxvdXQgb2Z8Z3JlYXRlciB0aGFufCcgK1xuICAgICAgICAgIFwiaXNuJ3R8KGRvZXNuJ3R8ZG9lcyBub3QpIChlcXVhbHxjb21lIGJlZm9yZXxjb21lIGFmdGVyfGNvbnRhaW4pfFwiICtcbiAgICAgICAgICAnKGdyZWF0ZXJ8bGVzcykgdGhhbiggb3IgZXF1YWwpP3woc3RhcnRzP3xlbmRzfGJlZ2lucz8pIHdpdGh8JyArXG4gICAgICAgICAgJ2NvbnRhaW5lZCBieXxjb21lcyAoYmVmb3JlfGFmdGVyKXxhIChyZWZ8cmVmZXJlbmNlKXxQT1NJWCBmaWxlfCcgK1xuICAgICAgICAgICdQT1NJWCBwYXRofChkYXRlfHRpbWUpIHN0cmluZ3xxdW90ZWQgZm9ybSlcXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdvbicsXG4gICAgICAgIGlsbGVnYWw6ICdbJHs9O1xcXFxuXScsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUsIFBBUkFNU11cbiAgICAgIH1cbiAgICBdLmNvbmNhdChDT01NRU5UUyksXG4gICAgaWxsZWdhbDogJy8vfC0+fD0+fFxcXFxbXFxcXFsnXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbGVzY3JpcHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/applescript.js\n");

/***/ })

}]);