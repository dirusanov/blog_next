(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_basic"],{

/***/ "./node_modules/highlight.js/lib/languages/basic.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/basic.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: BASIC\nAuthor: Raphaël Assénat <raph@raphnet.net>\nDescription: Based on the BASIC reference from the Tandy 1000 guide\nWebsite: https://en.wikipedia.org/wiki/Tandy_1000\n*/\n\n/** @type LanguageFn */\nfunction basic(hljs) {\n  return {\n    name: 'BASIC',\n    case_insensitive: true,\n    illegal: '^\\.',\n    // Support explicitly typed variables that end with $%! or #.\n    keywords: {\n        $pattern: '[a-zA-Z][a-zA-Z0-9_\\$\\%\\!\\#]*',\n        keyword:\n          'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE ' +\n          'CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ ' +\n          'DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ ' +\n          'EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO ' +\n          'HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON ' +\n          'OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET ' +\n          'MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION ' +\n          'BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET ' +\n          'PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET ' +\n          'RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP ' +\n          'SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE ' +\n          'WEND WIDTH WINDOW WRITE XOR'\n    },\n    contains: [\n      hljs.QUOTE_STRING_MODE,\n      hljs.COMMENT('REM', '$', {relevance: 10}),\n      hljs.COMMENT('\\'', '$', {relevance: 0}),\n      {\n        // Match line numbers\n        className: 'symbol',\n        begin: '^[0-9]+\\ ',\n        relevance: 10\n      },\n      {\n        // Match typed numeric constants (1000, 12.34!, 1.2e5, 1.5#, 1.2D2)\n        className: 'number',\n        begin: '\\\\b([0-9]+[0-9edED\\.]*[#\\!]?)',\n        relevance: 0\n      },\n      {\n        // Match hexadecimal numbers (&Hxxxx)\n        className: 'number',\n        begin: '(\\&[hH][0-9a-fA-F]{1,4})'\n      },\n      {\n        // Match octal numbers (&Oxxxxxx)\n        className: 'number',\n        begin: '(\\&[oO][0-7]{1,6})'\n      }\n    ]\n  };\n}\n\nmodule.exports = basic;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaWMuanM/YTE1YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsSUFBSTtBQUN2QyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLElBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaWMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEJBU0lDXG5BdXRob3I6IFJhcGhhw6tsIEFzc8OpbmF0IDxyYXBoQHJhcGhuZXQubmV0PlxuRGVzY3JpcHRpb246IEJhc2VkIG9uIHRoZSBCQVNJQyByZWZlcmVuY2UgZnJvbSB0aGUgVGFuZHkgMTAwMCBndWlkZVxuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGFuZHlfMTAwMFxuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGJhc2ljKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQkFTSUMnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgaWxsZWdhbDogJ15cXC4nLFxuICAgIC8vIFN1cHBvcnQgZXhwbGljaXRseSB0eXBlZCB2YXJpYWJsZXMgdGhhdCBlbmQgd2l0aCAkJSEgb3IgIy5cbiAgICBrZXl3b3Jkczoge1xuICAgICAgICAkcGF0dGVybjogJ1thLXpBLVpdW2EtekEtWjAtOV9cXCRcXCVcXCFcXCNdKicsXG4gICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgJ0FCUyBBU0MgQU5EIEFUTiBBVVRPfDAgQkVFUCBCTE9BRHwxMCBCU0FWRXwxMCBDQUxMIENBTExTIENEQkwgQ0hBSU4gQ0hESVIgQ0hSJHwxMCBDSU5UIENJUkNMRSAnICtcbiAgICAgICAgICAnQ0xFQVIgQ0xPU0UgQ0xTIENPTE9SIENPTSBDT01NT04gQ09OVCBDT1MgQ1NORyBDU1JMSU4gQ1ZEIENWSSBDVlMgREFUQSBEQVRFJCAnICtcbiAgICAgICAgICAnREVGREJMIERFRklOVCBERUZTTkcgREVGU1RSIERFRnwwIFNFRyBVU1IgREVMRVRFIERJTSBEUkFXIEVESVQgRU5EIEVOVklST04gRU5WSVJPTiQgJyArXG4gICAgICAgICAgJ0VPRiBFUVYgRVJBU0UgRVJERVYgRVJERVYkIEVSTCBFUlIgRVJST1IgRVhQIEZJRUxEIEZJTEVTIEZJWCBGT1J8MCBGUkUgR0VUIEdPU1VCfDEwIEdPVE8gJyArXG4gICAgICAgICAgJ0hFWCQgSUYgVEhFTiBFTFNFfDAgSU5LRVkkIElOUCBJTlBVVCBJTlBVVCMgSU5QVVQkIElOU1RSIElNUCBJTlQgSU9DVEwgSU9DVEwkIEtFWSBPTiAnICtcbiAgICAgICAgICAnT0ZGIExJU1QgS0lMTCBMRUZUJCBMRU4gTEVUIExJTkUgTExJU1QgTE9BRCBMT0MgTE9DQVRFIExPRiBMT0cgTFBSSU5UIFVTSU5HIExTRVQgJyArXG4gICAgICAgICAgJ01FUkdFIE1JRCQgTUtESVIgTUtEJCBNS0kkIE1LUyQgTU9EIE5BTUUgTkVXIE5FWFQgTk9JU0UgTk9UIE9DVCQgT04gT1IgUEVOIFBMQVkgU1RSSUcgT1BFTiBPUFRJT04gJyArXG4gICAgICAgICAgJ0JBU0UgT1VUIFBBSU5UIFBBTEVUVEUgUENPUFkgUEVFSyBQTUFQIFBPSU5UIFBPS0UgUE9TIFBSSU5UIFBSSU5UXSBQU0VUIFBSRVNFVCAnICtcbiAgICAgICAgICAnUFVUIFJBTkRPTUlaRSBSRUFEIFJFTSBSRU5VTSBSRVNFVHwwIFJFU1RPUkUgUkVTVU1FIFJFVFVSTnwwIFJJR0hUJCBSTURJUiBSTkQgUlNFVCAnICtcbiAgICAgICAgICAnUlVOIFNBVkUgU0NSRUVOIFNHTiBTSEVMTCBTSU4gU09VTkQgU1BBQ0UkIFNQQyBTUVIgU1RFUCBTVElDSyBTVE9QIFNUUiQgU1RSSU5HJCBTV0FQICcgK1xuICAgICAgICAgICdTWVNURU0gVEFCIFRBTiBUSU1FJCBUSU1FUiBUUk9GRiBUUk9OIFRPIFVTUiBWQUwgVkFSUFRSIFZBUlBUUiQgVklFVyBXQUlUIFdISUxFICcgK1xuICAgICAgICAgICdXRU5EIFdJRFRIIFdJTkRPVyBXUklURSBYT1InXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVCgnUkVNJywgJyQnLCB7cmVsZXZhbmNlOiAxMH0pLFxuICAgICAgaGxqcy5DT01NRU5UKCdcXCcnLCAnJCcsIHtyZWxldmFuY2U6IDB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gTWF0Y2ggbGluZSBudW1iZXJzXG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAnXlswLTldK1xcICcsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIE1hdGNoIHR5cGVkIG51bWVyaWMgY29uc3RhbnRzICgxMDAwLCAxMi4zNCEsIDEuMmU1LCAxLjUjLCAxLjJEMilcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihbMC05XStbMC05ZWRFRFxcLl0qWyNcXCFdPyknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIE1hdGNoIGhleGFkZWNpbWFsIG51bWJlcnMgKCZIeHh4eClcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICcoXFwmW2hIXVswLTlhLWZBLUZdezEsNH0pJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gTWF0Y2ggb2N0YWwgbnVtYmVycyAoJk94eHh4eHgpXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnKFxcJltvT11bMC03XXsxLDZ9KSdcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzaWM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/basic.js\n");

/***/ })

}]);