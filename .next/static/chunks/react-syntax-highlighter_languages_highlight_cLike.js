(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_cLike"],{

/***/ "./node_modules/highlight.js/lib/languages/c-like.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/c-like.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nLanguage: C-like foundation grammar for C/C++ grammars\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nContributors: Evgeny Stepanischev <imbolk@gmail.com>, Zaven Muradyan <megalivoithos@gmail.com>, Roel Deckers <admin@codingcat.nl>, Sam Wu <samsam2310@gmail.com>, Jordi Petit <jordi.petit@gmail.com>, Pieter Vantorre <pietervantorre@gmail.com>, Google Inc. (David Benjamin) <davidben@google.com>\nCategory: common, system\n*/\n\n/* In the future the intention is to split out the C/C++ grammars distinctly\nsince they are separate languages.  They will likely share a common foundation\nthough, and this file sets the groundwork for that - so that we get the breaking\nchange in v10 and don't have to change the requirements again later.\n\nSee: https://github.com/highlightjs/highlight.js/issues/2146\n*/\n\n/** @type LanguageFn */\nfunction cLike(hljs) {\n  function optional(s) {\n    return '(?:' + s + ')?';\n  }\n  var DECLTYPE_AUTO_RE = 'decltype\\\\(auto\\\\)';\n  var NAMESPACE_RE = '[a-zA-Z_]\\\\w*::';\n  var TEMPLATE_ARGUMENT_RE = '<.*?>';\n  var FUNCTION_TYPE_RE = '(' +\n    DECLTYPE_AUTO_RE + '|' +\n    optional(NAMESPACE_RE) +'[a-zA-Z_]\\\\w*' + optional(TEMPLATE_ARGUMENT_RE) +\n  ')';\n  var CPP_PRIMITIVE_TYPES = {\n    className: 'keyword',\n    begin: '\\\\b[a-z\\\\d_]*_t\\\\b'\n  };\n\n  // https://en.cppreference.com/w/cpp/language/escape\n  // \\\\ \\x \\xFF \\u2837 \\u00323747 \\374\n  var CHARACTER_ESCAPES = '\\\\\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\\\S)';\n  var STRINGS = {\n    className: 'string',\n    variants: [\n      {\n        begin: '(u8?|U|L)?\"', end: '\"',\n        illegal: '\\\\n',\n        contains: [hljs.BACKSLASH_ESCAPE]\n      },\n      {\n        begin: '(u8?|U|L)?\\'(' + CHARACTER_ESCAPES + \"|.)\", end: '\\'',\n        illegal: '.'\n      },\n      hljs.END_SAME_AS_BEGIN({\n        begin: /(?:u8?|U|L)?R\"([^()\\\\ ]{0,16})\\(/,\n        end: /\\)([^()\\\\ ]{0,16})\"/,\n      })\n    ]\n  };\n\n  var NUMBERS = {\n    className: 'number',\n    variants: [\n      { begin: '\\\\b(0b[01\\']+)' },\n      { begin: '(-?)\\\\b([\\\\d\\']+(\\\\.[\\\\d\\']*)?|\\\\.[\\\\d\\']+)(u|U|l|L|ul|UL|f|F|b|B)' },\n      { begin: '(-?)(\\\\b0[xX][a-fA-F0-9\\']+|(\\\\b[\\\\d\\']+(\\\\.[\\\\d\\']*)?|\\\\.[\\\\d\\']+)([eE][-+]?[\\\\d\\']+)?)' }\n    ],\n    relevance: 0\n  };\n\n  var PREPROCESSOR =       {\n    className: 'meta',\n    begin: /#\\s*[a-z]+\\b/, end: /$/,\n    keywords: {\n      'meta-keyword':\n        'if else elif endif define undef warning error line ' +\n        'pragma _Pragma ifdef ifndef include'\n    },\n    contains: [\n      {\n        begin: /\\\\\\n/, relevance: 0\n      },\n      hljs.inherit(STRINGS, {className: 'meta-string'}),\n      {\n        className: 'meta-string',\n        begin: /<.*?>/, end: /$/,\n        illegal: '\\\\n',\n      },\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE\n    ]\n  };\n\n  var TITLE_MODE = {\n    className: 'title',\n    begin: optional(NAMESPACE_RE) + hljs.IDENT_RE,\n    relevance: 0\n  };\n\n  var FUNCTION_TITLE = optional(NAMESPACE_RE) + hljs.IDENT_RE + '\\\\s*\\\\(';\n\n  var CPP_KEYWORDS = {\n    keyword: 'int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof ' +\n      'dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace ' +\n      'unsigned long volatile static protected bool template mutable if public friend ' +\n      'do goto auto void enum else break extern using asm case typeid wchar_t ' +\n      'short reinterpret_cast|10 default double register explicit signed typename try this ' +\n      'switch continue inline delete alignas alignof constexpr consteval constinit decltype ' +\n      'concept co_await co_return co_yield requires ' +\n      'noexcept static_assert thread_local restrict final override ' +\n      'atomic_bool atomic_char atomic_schar ' +\n      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +\n      'atomic_ullong new throw return ' +\n      'and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq',\n    built_in: 'std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' +\n      'auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set ' +\n      'unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos ' +\n      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +\n      'fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +\n      'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' +\n      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +\n      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +\n      'vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary',\n    literal: 'true false nullptr NULL'\n  };\n\n  var EXPRESSION_CONTAINS = [\n    CPP_PRIMITIVE_TYPES,\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    NUMBERS,\n    STRINGS\n  ];\n\n  var EXPRESSION_CONTEXT = {\n    // This mode covers expression context where we can't expect a function\n    // definition and shouldn't highlight anything that looks like one:\n    // `return some()`, `else if()`, `(x*sum(1, 2))`\n    variants: [\n      {begin: /=/, end: /;/},\n      {begin: /\\(/, end: /\\)/},\n      {beginKeywords: 'new throw return else', end: /;/}\n    ],\n    keywords: CPP_KEYWORDS,\n    contains: EXPRESSION_CONTAINS.concat([\n      {\n        begin: /\\(/, end: /\\)/,\n        keywords: CPP_KEYWORDS,\n        contains: EXPRESSION_CONTAINS.concat(['self']),\n        relevance: 0\n      }\n    ]),\n    relevance: 0\n  };\n\n  var FUNCTION_DECLARATION = {\n    className: 'function',\n    begin: '(' + FUNCTION_TYPE_RE + '[\\\\*&\\\\s]+)+' + FUNCTION_TITLE,\n    returnBegin: true, end: /[{;=]/,\n    excludeEnd: true,\n    keywords: CPP_KEYWORDS,\n    illegal: /[^\\w\\s\\*&:<>]/,\n    contains: [\n\n      { // to prevent it from being confused as the function title\n        begin: DECLTYPE_AUTO_RE,\n        keywords: CPP_KEYWORDS,\n        relevance: 0,\n      },\n      {\n        begin: FUNCTION_TITLE, returnBegin: true,\n        contains: [TITLE_MODE],\n        relevance: 0\n      },\n      {\n        className: 'params',\n        begin: /\\(/, end: /\\)/,\n        keywords: CPP_KEYWORDS,\n        relevance: 0,\n        contains: [\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          STRINGS,\n          NUMBERS,\n          CPP_PRIMITIVE_TYPES,\n          // Count matching parentheses.\n          {\n            begin: /\\(/, end: /\\)/,\n            keywords: CPP_KEYWORDS,\n            relevance: 0,\n            contains: [\n              'self',\n              hljs.C_LINE_COMMENT_MODE,\n              hljs.C_BLOCK_COMMENT_MODE,\n              STRINGS,\n              NUMBERS,\n              CPP_PRIMITIVE_TYPES\n            ]\n          }\n        ]\n      },\n      CPP_PRIMITIVE_TYPES,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      PREPROCESSOR\n    ]\n  };\n\n  return {\n    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'],\n    keywords: CPP_KEYWORDS,\n    // the base c-like language will NEVER be auto-detected, rather the\n    // derivitives: c, c++, arduino turn auto-detect back on for themselves\n    disableAutodetect: true,\n    illegal: '</',\n    contains: [].concat(\n      EXPRESSION_CONTEXT,\n      FUNCTION_DECLARATION,\n      EXPRESSION_CONTAINS,\n      [\n      PREPROCESSOR,\n      { // containers: ie, `vector <int> rooms (9);`\n        begin: '\\\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\\\s*<', end: '>',\n        keywords: CPP_KEYWORDS,\n        contains: ['self', CPP_PRIMITIVE_TYPES]\n      },\n      {\n        begin: hljs.IDENT_RE + '::',\n        keywords: CPP_KEYWORDS\n      },\n      {\n        className: 'class',\n        beginKeywords: 'class struct', end: /[{;:]/,\n        contains: [\n          {begin: /</, end: />/, contains: ['self']}, // skip generic stuff\n          hljs.TITLE_MODE\n        ]\n      }\n    ]),\n    exports: {\n      preprocessor: PREPROCESSOR,\n      strings: STRINGS,\n      keywords: CPP_KEYWORDS\n    }\n  };\n}\n\nmodule.exports = cLike;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYy1saWtlLmpzP2FmOWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxFQUFFLGNBQWMsSUFBSSxPQUFPLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0MsMEJBQTBCLEtBQUs7QUFDL0IsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7QUFDakMsT0FBTyw4RUFBOEU7QUFDckYsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNkJBQTZCLHlCQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtQkFBbUIsRUFBRTtBQUM1QixPQUFPLHVCQUF1QjtBQUM5QixPQUFPLCtDQUErQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRDQUE0QztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxXQUFXLHlDQUF5QztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2MtbGlrZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQy1saWtlIGZvdW5kYXRpb24gZ3JhbW1hciBmb3IgQy9DKysgZ3JhbW1hcnNcbkF1dGhvcjogSXZhbiBTYWdhbGFldiA8bWFuaWFjQHNvZnR3YXJlbWFuaWFjcy5vcmc+XG5Db250cmlidXRvcnM6IEV2Z2VueSBTdGVwYW5pc2NoZXYgPGltYm9sa0BnbWFpbC5jb20+LCBaYXZlbiBNdXJhZHlhbiA8bWVnYWxpdm9pdGhvc0BnbWFpbC5jb20+LCBSb2VsIERlY2tlcnMgPGFkbWluQGNvZGluZ2NhdC5ubD4sIFNhbSBXdSA8c2Ftc2FtMjMxMEBnbWFpbC5jb20+LCBKb3JkaSBQZXRpdCA8am9yZGkucGV0aXRAZ21haWwuY29tPiwgUGlldGVyIFZhbnRvcnJlIDxwaWV0ZXJ2YW50b3JyZUBnbWFpbC5jb20+LCBHb29nbGUgSW5jLiAoRGF2aWQgQmVuamFtaW4pIDxkYXZpZGJlbkBnb29nbGUuY29tPlxuQ2F0ZWdvcnk6IGNvbW1vbiwgc3lzdGVtXG4qL1xuXG4vKiBJbiB0aGUgZnV0dXJlIHRoZSBpbnRlbnRpb24gaXMgdG8gc3BsaXQgb3V0IHRoZSBDL0MrKyBncmFtbWFycyBkaXN0aW5jdGx5XG5zaW5jZSB0aGV5IGFyZSBzZXBhcmF0ZSBsYW5ndWFnZXMuICBUaGV5IHdpbGwgbGlrZWx5IHNoYXJlIGEgY29tbW9uIGZvdW5kYXRpb25cbnRob3VnaCwgYW5kIHRoaXMgZmlsZSBzZXRzIHRoZSBncm91bmR3b3JrIGZvciB0aGF0IC0gc28gdGhhdCB3ZSBnZXQgdGhlIGJyZWFraW5nXG5jaGFuZ2UgaW4gdjEwIGFuZCBkb24ndCBoYXZlIHRvIGNoYW5nZSB0aGUgcmVxdWlyZW1lbnRzIGFnYWluIGxhdGVyLlxuXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzIxNDZcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjTGlrZShobGpzKSB7XG4gIGZ1bmN0aW9uIG9wdGlvbmFsKHMpIHtcbiAgICByZXR1cm4gJyg/OicgKyBzICsgJyk/JztcbiAgfVxuICB2YXIgREVDTFRZUEVfQVVUT19SRSA9ICdkZWNsdHlwZVxcXFwoYXV0b1xcXFwpJztcbiAgdmFyIE5BTUVTUEFDRV9SRSA9ICdbYS16QS1aX11cXFxcdyo6Oic7XG4gIHZhciBURU1QTEFURV9BUkdVTUVOVF9SRSA9ICc8Lio/Pic7XG4gIHZhciBGVU5DVElPTl9UWVBFX1JFID0gJygnICtcbiAgICBERUNMVFlQRV9BVVRPX1JFICsgJ3wnICtcbiAgICBvcHRpb25hbChOQU1FU1BBQ0VfUkUpICsnW2EtekEtWl9dXFxcXHcqJyArIG9wdGlvbmFsKFRFTVBMQVRFX0FSR1VNRU5UX1JFKSArXG4gICcpJztcbiAgdmFyIENQUF9QUklNSVRJVkVfVFlQRVMgPSB7XG4gICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgYmVnaW46ICdcXFxcYlthLXpcXFxcZF9dKl90XFxcXGInXG4gIH07XG5cbiAgLy8gaHR0cHM6Ly9lbi5jcHByZWZlcmVuY2UuY29tL3cvY3BwL2xhbmd1YWdlL2VzY2FwZVxuICAvLyBcXFxcIFxceCBcXHhGRiBcXHUyODM3IFxcdTAwMzIzNzQ3IFxcMzc0XG4gIHZhciBDSEFSQUNURVJfRVNDQVBFUyA9ICdcXFxcXFxcXCh4WzAtOUEtRmEtZl17Mn18dVswLTlBLUZhLWZdezQsOH18WzAtN117M318XFxcXFMpJztcbiAgdmFyIFNUUklOR1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJyh1OD98VXxMKT9cIicsIGVuZDogJ1wiJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyh1OD98VXxMKT9cXCcoJyArIENIQVJBQ1RFUl9FU0NBUEVTICsgXCJ8LilcIiwgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJy4nXG4gICAgICB9LFxuICAgICAgaGxqcy5FTkRfU0FNRV9BU19CRUdJTih7XG4gICAgICAgIGJlZ2luOiAvKD86dTg/fFV8TCk/UlwiKFteKClcXFxcIF17MCwxNn0pXFwoLyxcbiAgICAgICAgZW5kOiAvXFwpKFteKClcXFxcIF17MCwxNn0pXCIvLFxuICAgICAgfSlcbiAgICBdXG4gIH07XG5cbiAgdmFyIE5VTUJFUlMgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogJ1xcXFxiKDBiWzAxXFwnXSspJyB9LFxuICAgICAgeyBiZWdpbjogJygtPylcXFxcYihbXFxcXGRcXCddKyhcXFxcLltcXFxcZFxcJ10qKT98XFxcXC5bXFxcXGRcXCddKykodXxVfGx8THx1bHxVTHxmfEZ8YnxCKScgfSxcbiAgICAgIHsgYmVnaW46ICcoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05XFwnXSt8KFxcXFxiW1xcXFxkXFwnXSsoXFxcXC5bXFxcXGRcXCddKik/fFxcXFwuW1xcXFxkXFwnXSspKFtlRV1bLStdP1tcXFxcZFxcJ10rKT8pJyB9XG4gICAgXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICB2YXIgUFJFUFJPQ0VTU09SID0gICAgICAge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAvI1xccypbYS16XStcXGIvLCBlbmQ6IC8kLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJ21ldGEta2V5d29yZCc6XG4gICAgICAgICdpZiBlbHNlIGVsaWYgZW5kaWYgZGVmaW5lIHVuZGVmIHdhcm5pbmcgZXJyb3IgbGluZSAnICtcbiAgICAgICAgJ3ByYWdtYSBfUHJhZ21hIGlmZGVmIGlmbmRlZiBpbmNsdWRlJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXFxcXFxuLywgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5pbmhlcml0KFNUUklOR1MsIHtjbGFzc05hbWU6ICdtZXRhLXN0cmluZyd9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLFxuICAgICAgICBiZWdpbjogLzwuKj8+LywgZW5kOiAvJC8sXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICB9LFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfTtcblxuICB2YXIgVElUTEVfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgYmVnaW46IG9wdGlvbmFsKE5BTUVTUEFDRV9SRSkgKyBobGpzLklERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBGVU5DVElPTl9USVRMRSA9IG9wdGlvbmFsKE5BTUVTUEFDRV9SRSkgKyBobGpzLklERU5UX1JFICsgJ1xcXFxzKlxcXFwoJztcblxuICB2YXIgQ1BQX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6ICdpbnQgZmxvYXQgd2hpbGUgcHJpdmF0ZSBjaGFyIGNoYXI4X3QgY2hhcjE2X3QgY2hhcjMyX3QgY2F0Y2ggaW1wb3J0IG1vZHVsZSBleHBvcnQgdmlydHVhbCBvcGVyYXRvciBzaXplb2YgJyArXG4gICAgICAnZHluYW1pY19jYXN0fDEwIHR5cGVkZWYgY29uc3RfY2FzdHwxMCBjb25zdCBmb3Igc3RhdGljX2Nhc3R8MTAgdW5pb24gbmFtZXNwYWNlICcgK1xuICAgICAgJ3Vuc2lnbmVkIGxvbmcgdm9sYXRpbGUgc3RhdGljIHByb3RlY3RlZCBib29sIHRlbXBsYXRlIG11dGFibGUgaWYgcHVibGljIGZyaWVuZCAnICtcbiAgICAgICdkbyBnb3RvIGF1dG8gdm9pZCBlbnVtIGVsc2UgYnJlYWsgZXh0ZXJuIHVzaW5nIGFzbSBjYXNlIHR5cGVpZCB3Y2hhcl90ICcgK1xuICAgICAgJ3Nob3J0IHJlaW50ZXJwcmV0X2Nhc3R8MTAgZGVmYXVsdCBkb3VibGUgcmVnaXN0ZXIgZXhwbGljaXQgc2lnbmVkIHR5cGVuYW1lIHRyeSB0aGlzICcgK1xuICAgICAgJ3N3aXRjaCBjb250aW51ZSBpbmxpbmUgZGVsZXRlIGFsaWduYXMgYWxpZ25vZiBjb25zdGV4cHIgY29uc3RldmFsIGNvbnN0aW5pdCBkZWNsdHlwZSAnICtcbiAgICAgICdjb25jZXB0IGNvX2F3YWl0IGNvX3JldHVybiBjb195aWVsZCByZXF1aXJlcyAnICtcbiAgICAgICdub2V4Y2VwdCBzdGF0aWNfYXNzZXJ0IHRocmVhZF9sb2NhbCByZXN0cmljdCBmaW5hbCBvdmVycmlkZSAnICtcbiAgICAgICdhdG9taWNfYm9vbCBhdG9taWNfY2hhciBhdG9taWNfc2NoYXIgJyArXG4gICAgICAnYXRvbWljX3VjaGFyIGF0b21pY19zaG9ydCBhdG9taWNfdXNob3J0IGF0b21pY19pbnQgYXRvbWljX3VpbnQgYXRvbWljX2xvbmcgYXRvbWljX3Vsb25nIGF0b21pY19sbG9uZyAnICtcbiAgICAgICdhdG9taWNfdWxsb25nIG5ldyB0aHJvdyByZXR1cm4gJyArXG4gICAgICAnYW5kIGFuZF9lcSBiaXRhbmQgYml0b3IgY29tcGwgbm90IG5vdF9lcSBvciBvcl9lcSB4b3IgeG9yX2VxJyxcbiAgICBidWlsdF9pbjogJ3N0ZCBzdHJpbmcgd3N0cmluZyBjaW4gY291dCBjZXJyIGNsb2cgc3RkaW4gc3Rkb3V0IHN0ZGVyciBzdHJpbmdzdHJlYW0gaXN0cmluZ3N0cmVhbSBvc3RyaW5nc3RyZWFtICcgK1xuICAgICAgJ2F1dG9fcHRyIGRlcXVlIGxpc3QgcXVldWUgc3RhY2sgdmVjdG9yIG1hcCBzZXQgcGFpciBiaXRzZXQgbXVsdGlzZXQgbXVsdGltYXAgdW5vcmRlcmVkX3NldCAnICtcbiAgICAgICd1bm9yZGVyZWRfbWFwIHVub3JkZXJlZF9tdWx0aXNldCB1bm9yZGVyZWRfbXVsdGltYXAgcHJpb3JpdHlfcXVldWUgbWFrZV9wYWlyIGFycmF5IHNoYXJlZF9wdHIgYWJvcnQgdGVybWluYXRlIGFicyBhY29zICcgK1xuICAgICAgJ2FzaW4gYXRhbjIgYXRhbiBjYWxsb2MgY2VpbCBjb3NoIGNvcyBleGl0IGV4cCBmYWJzIGZsb29yIGZtb2QgZnByaW50ZiBmcHV0cyBmcmVlIGZyZXhwICcgK1xuICAgICAgJ2ZzY2FuZiBmdXR1cmUgaXNhbG51bSBpc2FscGhhIGlzY250cmwgaXNkaWdpdCBpc2dyYXBoIGlzbG93ZXIgaXNwcmludCBpc3B1bmN0IGlzc3BhY2UgaXN1cHBlciAnICtcbiAgICAgICdpc3hkaWdpdCB0b2xvd2VyIHRvdXBwZXIgbGFicyBsZGV4cCBsb2cxMCBsb2cgbWFsbG9jIHJlYWxsb2MgbWVtY2hyIG1lbWNtcCBtZW1jcHkgbWVtc2V0IG1vZGYgcG93ICcgK1xuICAgICAgJ3ByaW50ZiBwdXRjaGFyIHB1dHMgc2NhbmYgc2luaCBzaW4gc25wcmludGYgc3ByaW50ZiBzcXJ0IHNzY2FuZiBzdHJjYXQgc3RyY2hyIHN0cmNtcCAnICtcbiAgICAgICdzdHJjcHkgc3RyY3NwbiBzdHJsZW4gc3RybmNhdCBzdHJuY21wIHN0cm5jcHkgc3RycGJyayBzdHJyY2hyIHN0cnNwbiBzdHJzdHIgdGFuaCB0YW4gJyArXG4gICAgICAndmZwcmludGYgdnByaW50ZiB2c3ByaW50ZiBlbmRsIGluaXRpYWxpemVyX2xpc3QgdW5pcXVlX3B0ciBfQm9vbCBjb21wbGV4IF9Db21wbGV4IGltYWdpbmFyeSBfSW1hZ2luYXJ5JyxcbiAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxscHRyIE5VTEwnXG4gIH07XG5cbiAgdmFyIEVYUFJFU1NJT05fQ09OVEFJTlMgPSBbXG4gICAgQ1BQX1BSSU1JVElWRV9UWVBFUyxcbiAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICBOVU1CRVJTLFxuICAgIFNUUklOR1NcbiAgXTtcblxuICB2YXIgRVhQUkVTU0lPTl9DT05URVhUID0ge1xuICAgIC8vIFRoaXMgbW9kZSBjb3ZlcnMgZXhwcmVzc2lvbiBjb250ZXh0IHdoZXJlIHdlIGNhbid0IGV4cGVjdCBhIGZ1bmN0aW9uXG4gICAgLy8gZGVmaW5pdGlvbiBhbmQgc2hvdWxkbid0IGhpZ2hsaWdodCBhbnl0aGluZyB0aGF0IGxvb2tzIGxpa2Ugb25lOlxuICAgIC8vIGByZXR1cm4gc29tZSgpYCwgYGVsc2UgaWYoKWAsIGAoeCpzdW0oMSwgMikpYFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC89LywgZW5kOiAvOy99LFxuICAgICAge2JlZ2luOiAvXFwoLywgZW5kOiAvXFwpL30sXG4gICAgICB7YmVnaW5LZXl3b3JkczogJ25ldyB0aHJvdyByZXR1cm4gZWxzZScsIGVuZDogLzsvfVxuICAgIF0sXG4gICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICBjb250YWluczogRVhQUkVTU0lPTl9DT05UQUlOUy5jb25jYXQoW1xuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcKC8sIGVuZDogL1xcKS8sXG4gICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBFWFBSRVNTSU9OX0NPTlRBSU5TLmNvbmNhdChbJ3NlbGYnXSksXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF0pLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBGVU5DVElPTl9ERUNMQVJBVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW46ICcoJyArIEZVTkNUSU9OX1RZUEVfUkUgKyAnW1xcXFwqJlxcXFxzXSspKycgKyBGVU5DVElPTl9USVRMRSxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSwgZW5kOiAvW3s7PV0vLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAvW15cXHdcXHNcXComOjw+XS8sXG4gICAgY29udGFpbnM6IFtcblxuICAgICAgeyAvLyB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY29uZnVzZWQgYXMgdGhlIGZ1bmN0aW9uIHRpdGxlXG4gICAgICAgIGJlZ2luOiBERUNMVFlQRV9BVVRPX1JFLFxuICAgICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogRlVOQ1RJT05fVElUTEUsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1RJVExFX01PREVdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAga2V5d29yZHM6IENQUF9LRVlXT1JEUyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIFNUUklOR1MsXG4gICAgICAgICAgTlVNQkVSUyxcbiAgICAgICAgICBDUFBfUFJJTUlUSVZFX1RZUEVTLFxuICAgICAgICAgIC8vIENvdW50IG1hdGNoaW5nIHBhcmVudGhlc2VzLlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAgU1RSSU5HUyxcbiAgICAgICAgICAgICAgTlVNQkVSUyxcbiAgICAgICAgICAgICAgQ1BQX1BSSU1JVElWRV9UWVBFU1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIENQUF9QUklNSVRJVkVfVFlQRVMsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgUFJFUFJPQ0VTU09SXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydjJywgJ2NjJywgJ2gnLCAnYysrJywgJ2grKycsICdocHAnLCAnaGgnLCAnaHh4JywgJ2N4eCddLFxuICAgIGtleXdvcmRzOiBDUFBfS0VZV09SRFMsXG4gICAgLy8gdGhlIGJhc2UgYy1saWtlIGxhbmd1YWdlIHdpbGwgTkVWRVIgYmUgYXV0by1kZXRlY3RlZCwgcmF0aGVyIHRoZVxuICAgIC8vIGRlcml2aXRpdmVzOiBjLCBjKyssIGFyZHVpbm8gdHVybiBhdXRvLWRldGVjdCBiYWNrIG9uIGZvciB0aGVtc2VsdmVzXG4gICAgZGlzYWJsZUF1dG9kZXRlY3Q6IHRydWUsXG4gICAgaWxsZWdhbDogJzwvJyxcbiAgICBjb250YWluczogW10uY29uY2F0KFxuICAgICAgRVhQUkVTU0lPTl9DT05URVhULFxuICAgICAgRlVOQ1RJT05fREVDTEFSQVRJT04sXG4gICAgICBFWFBSRVNTSU9OX0NPTlRBSU5TLFxuICAgICAgW1xuICAgICAgUFJFUFJPQ0VTU09SLFxuICAgICAgeyAvLyBjb250YWluZXJzOiBpZSwgYHZlY3RvciA8aW50PiByb29tcyAoOSk7YFxuICAgICAgICBiZWdpbjogJ1xcXFxiKGRlcXVlfGxpc3R8cXVldWV8cHJpb3JpdHlfcXVldWV8cGFpcnxzdGFja3x2ZWN0b3J8bWFwfHNldHxiaXRzZXR8bXVsdGlzZXR8bXVsdGltYXB8dW5vcmRlcmVkX21hcHx1bm9yZGVyZWRfc2V0fHVub3JkZXJlZF9tdWx0aXNldHx1bm9yZGVyZWRfbXVsdGltYXB8YXJyYXkpXFxcXHMqPCcsIGVuZDogJz4nLFxuICAgICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTLFxuICAgICAgICBjb250YWluczogWydzZWxmJywgQ1BQX1BSSU1JVElWRV9UWVBFU11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJzo6JyxcbiAgICAgICAga2V5d29yZHM6IENQUF9LRVlXT1JEU1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3Mgc3RydWN0JywgZW5kOiAvW3s7Ol0vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtiZWdpbjogLzwvLCBlbmQ6IC8+LywgY29udGFpbnM6IFsnc2VsZiddfSwgLy8gc2tpcCBnZW5lcmljIHN0dWZmXG4gICAgICAgICAgaGxqcy5USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdKSxcbiAgICBleHBvcnRzOiB7XG4gICAgICBwcmVwcm9jZXNzb3I6IFBSRVBST0NFU1NPUixcbiAgICAgIHN0cmluZ3M6IFNUUklOR1MsXG4gICAgICBrZXl3b3JkczogQ1BQX0tFWVdPUkRTXG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNMaWtlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/c-like.js\n");

/***/ })

}]);