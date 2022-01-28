parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/rectangle2-min.jpg":[["rectangle2-min.dc072569.jpg","rPeu"],"rPeu"],"./../images/search2.png":[["search2.ad918c6d.png","pL6O"],"pL6O"]}],"rzWj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={home:document.querySelector(".home"),library:document.querySelector(".library"),hero:document.querySelector(".hero"),addToWatch:document.querySelector(".addToWatch"),addToQueue:document.querySelector("addToQueue")};exports.refs=e;
},{}],"jOiQ":[function(require,module,exports) {
"use strict";function e(e){console.log(`click on Home ${e.target}`)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"ljQW":[function(require,module,exports) {
"use strict";function e(e){console.log(`click on Library ${e.target}`)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"WT8E":[function(require,module,exports) {
"use strict";function e(e){console.log(`click on SearchMovie ${e.target}`)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"lk7g":[function(require,module,exports) {
"use strict";function e(e){console.log(`click on Hero ${e.target}`)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"DFB4":[function(require,module,exports) {
"use strict";function e(e){console.log(`click on Watched ${e.target}`)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"lZV9":[function(require,module,exports) {
"use strict";function e(e){console.log(`click on Queue ${e.target}`)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Iz5z":[function(require,module,exports) {
"use strict";function e(e){console.log(`click on TeamModal ${e.target}`)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"LPK7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=l(require("../listeners/onHome")),r=l(require("../listeners/onLibrary")),t=l(require("../listeners/onSearchMovie")),n=l(require("../listeners/onHero")),i=l(require("../listeners/onWatched")),o=l(require("../listeners/onQueue")),s=l(require("../listeners/onTeamModal"));function l(e){return e&&e.__esModule?e:{default:e}}function u(t){const{home:i,library:o,searchMovie:s,hero:l,watched:u,queue:a,nIceTeam:d}=t;i.addEventListener("click",e.default),o.addEventListener("click",r.default),l.addEventListener("click",n.default),console.log("Hello World")}
},{"../listeners/onHome":"jOiQ","../listeners/onLibrary":"ljQW","../listeners/onSearchMovie":"WT8E","../listeners/onHero":"lk7g","../listeners/onWatched":"DFB4","../listeners/onQueue":"lZV9","../listeners/onTeamModal":"Iz5z"}],"QU1Y":[function(require,module,exports) {
"use strict";function e(){return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=e2b1fd67e69bae9f083d3c611e2b6f41").then(e=>e.json())}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=require("./js/base/refs"),s=u(require("./js/base/eventListeners")),r=u(require("./js/base/request"));function u(e){return e&&e.__esModule?e:{default:e}}function t(){(0,s.default)(e.refs)}t(),(0,r.default)().then(e=>console.log(e));
},{"./sass/main.scss":"clu1","./js/base/refs":"rzWj","./js/base/eventListeners":"LPK7","./js/base/request":"QU1Y"}]},{},["Focm"], null)
//# sourceMappingURL=/Film_collection/src.b850089a.js.map