(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8oxB":function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,s=[],u=!1,f=-1;function h(){u&&c&&(u=!1,c.length?s=c.concat(s):f=-1,s.length&&p())}function p(){if(!u){var e=l(h);u=!0;for(var t=s.length;t;){for(c=s,s=[];++f<t;)c&&c[f].run();f=-1,t=s.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new d(e,t)),1!==s.length||u||l(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},AHik:function(e,t,r){e.exports={social:"SocialIcons_social__2H3Dt"}},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};function c(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var r,o=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var a=e.attr,c=e.title,s=l(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:i({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},QgM0:function(e,t,r){e.exports={logo:"Logo_logo__14Tkn"}},QyJS:function(e,t,r){"use strict";t.a={caasySDKConfig:{siteId:"5f7cc20dc302c4fa0a961f81"},blogName:"Rusanov",defaultTitle:"BLOG",description:"This is the blog of Dmitry Rusanov, a lawyer and programmer. I am writing articles about what interests me.",defaultLanguage:"en",locale:"en_US",pagination:{amountPostsOnPage:10},social:{github:"https://github.com/Random1k11",stackoverflow:"https://stackoverflow.com/users/12097204/random1k11?tab=profile",youtube:"https://www.youtube.com/channel/UCjl1oFkCqlAXjqqSD_1oVGw?view_as=subscriber"},footer:{links:[{title:"Website",items:[{label:"Caasy",url:"https://caasy.io"}]},{title:"Developer",items:[{label:"Docs",url:"https://docs.caasy.io"},{label:"Github",url:"https://logowl.io"},{label:"JS SDK",url:"https://mosaic.mc"}]},{title:"About",items:[{label:"Mosaic",url:"https://mosaic.mc"},{label:"Log Owl",url:"https://logowl.io"}]}]}}},U3EX:function(e,t,r){e.exports={nav:"Nav_nav__2QeeE",container:"Nav_container__2Iy4D",menu:"Nav_menu__2OfDq"}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("lwsE"),o=r("W8MJ"),a=r("7W2i"),i=r("a1gu"),l=r("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var s=r("TqRt"),u=r("284h");t.__esModule=!0,t.default=void 0;var f,h=u(r("q1tI")),p=r("QmWs"),d=r("g/15"),v=s(r("nOHt")),m=r("elyg");function g(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,w={};function k(){return f||(b?f=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){a(r,e);var t=c(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var i=e(o,a);return t=o,r=a,n=i,i}}((function(e,t){return{href:(0,m.addBasePath)(g(e)),as:t?(0,m.addBasePath)(g(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,l=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),r=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var c=window.location.pathname;i=(0,p.resolve)(c,i),l=l?(0,p.resolve)(c,l):i,e.preventDefault();var s=o.props.scroll;null==s&&(s=l.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](i,l,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,p.resolve)(e,r);return[o,n?(0,p.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=k();return r?(r.observe(e),y.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),h.default.cloneElement(a,i)}}]),r}(h.Component);t.default=_},jj8X:function(e,t,r){e.exports={footer:"Footer_footer__tzq27",wrapper:"Footer_wrapper__359bV",info:"Footer_info__3XLIw",description:"Footer_description__3KK6N",links:"Footer_links__18RoM",contacts:"Footer_contacts__149C3"}},x9ar:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("8Kt/"),i=r.n(a),l=r("Lnxd");function c(e){return Object(l.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}var s=r("ma3e"),u=r("QyJS"),f=r("AHik"),h=r.n(f),p=o.a.createElement,d=function(){return p("div",{className:h.a.social},p("a",{href:u.a.social.youtube,target:"_blank",rel:"noreferrer",hidden:!u.a.social.youtube},p(s.j,null)),p("a",{href:u.a.social.linkedin,target:"_blank",rel:"noreferrer",hidden:!u.a.social.linkedin},p(s.e,null)),p("a",{href:u.a.social.dev,target:"_blank",rel:"noreferrer",hidden:!u.a.social.dev},p(s.a,null)),p("a",{href:u.a.social.facebook,target:"_blank",rel:"noreferrer",hidden:!u.a.social.facebook},p(s.b,null)),p("a",{href:u.a.social.instagram,target:"_blank",rel:"noreferrer",hidden:!u.a.social.instagram},p(s.d,null)),p("a",{href:u.a.social.twitter,target:"_blank",rel:"noreferrer",hidden:!u.a.social.twitter},p(s.h,null)),p("a",{href:u.a.social.github,target:"_blank",rel:"noreferrer",hidden:!u.a.social.github},p(s.c,null)),p("a",{href:u.a.social.stackoverflow,target:"_blank",rel:"noreferrer",hidden:!u.a.social.stackoverflow},p(s.f,null)))},v=r("YFqc"),m=r.n(v),g=r("QgM0"),y=r.n(g),b=o.a.createElement,w=function(){return b(m.a,{href:"/"},b("div",{className:y.a.logo},"Rusanov",b("b",null," | BLOG")))},k=r("jj8X"),_=r.n(k),E=o.a.createElement,T=function(){return E("footer",{className:_.a.footer},E("div",{className:_.a.wrapper},E("div",{className:_.a.info},E(w,null),E("p",{className:_.a.description},u.a.description),E(d,null)),E("div",{className:_.a.contacts},E("b",null,"Contacts"),E("br",null),E("a",{href:"https://t.me/Qazart",target:"_blank",rel:"noreferrer"},E(s.g,null)),E("a",{href:"https://wa.me/79774083327",target:"_blank",rel:"noreferrer"},E(s.i,null)),"+79774083327",E("br",null),E(c,null)," random1k11@gmail.com")))},N=r("U3EX"),O=r.n(N),x=o.a.createElement,L=function(){return x("nav",{className:O.a.nav},x("div",{className:O.a.container},x(w,null),x("ul",{className:O.a.menu},x("li",null,x(m.a,{href:"/"},x("a",null,"\u041f\u043e\u0441\u0442\u044b"))),x("li",null,x(m.a,{href:"/about-me"},x("a",null,"\u041e\u0431\u043e \u043c\u043d\u0435"))))))},j=o.a.createElement;t.a=function(e){var t=e.title,r=e.children;return j(o.a.Fragment,null,j(i.a,null,j("title",null,u.a.blogName+" | "+(t||u.a.defaultTitle))),j("header",null,j(L,null)),j("main",null,r),j(T,null))}}}]);