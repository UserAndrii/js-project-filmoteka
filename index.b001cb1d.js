!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequired7c6=o);var i=o("bpxeT"),l=o("2TvXO"),c="58645e23389326a2e8ed75695b9e1b79",d=o("dIxxU").default,s={modalCont:document.querySelector(".modal__container")};function r(){return(r=t(i)(t(l).mark((function e(){var n,a;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(76341,"?api_key=").concat(c),t.prev=1,t.next=4,d.get(n);case 4:return a=t.sent,console.log(a),t.abrupt("return",u(a));case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function u(t){var e='<div class="modal__img">\n    <img src="https://image.tmdb.org/t/p/w500/'.concat(t.data.poster_path,'" alt="').concat(t.data.title,'" width="500px"/>\n  </div>\n  <div class="modal__content">\n    <h2 class="modal__title">').concat(t.data.title,'</h2>\n    <ul class="charact__list">\n      <li class="charact__item"><span>Vote / Votes</span>').concat(Math.round10(t.data.vote_average,-1),"/").concat(t.data.vote_count,'</li>\n      <li class="charact__item"><span>Popularity</span>').concat(Math.round10(t.data.popularity,-1),'</li>\n      <li class="charact__item"><span>Original Title</span>').concat(t.data.original_title,'</li>\n      <li class="charact__item"><span>Genre</span>').concat(t.data.title,'</li>\n    </ul>\n    <div class="modal__about">\n      <p>ABOUT</p>\n      <p class="about">').concat(t.data.overview,'</p>\n    </div>\n    <div class="modal__buttons">\n      <button\n        class="modal__button"\n        type="button"\n        data-modal-button="add-to-watched"\n      >\n        add to Watched\n      </button>\n      <button\n        class="modal__button"\n        type="button"\n        data-modal-button="add-to-queue"\n      >\n        add to queue\n      </button>\n    </div>\n  </div>\n');return console.log(e),s.modalCont.insertAdjacentHTML("afterbegin",e)}function m(t,e,n){return void 0===n||0==+n?Math[t](e):(e=+e,n=+n,isNaN(e)||"number"!=typeof n||n%1!=0?NaN:(e=e.toString().split("e"),+((e=(e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-n:-n)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]+n:n))))}!function(){r.apply(this,arguments)}(),Math.round10||(Math.round10=function(t,e){return m("round",t,e)}),Math.floor10||(Math.floor10=function(t,e){return m("floor",t,e)}),Math.ceil10||(Math.ceil10=function(t,e){return m("ceil",t,e)}),document.getElementById("close-btn").addEventListener("click",(function(){document.getElementById("backdrop").classList.remove("is-visible"),document.getElementById("modal").classList.remove("is-visible")})),document.getElementById("backdrop").addEventListener("click",(function(){document.getElementById("backdrop").classList.remove("is-visible"),document.getElementById("modal").classList.remove("is-visible")})),document.getElementById("btn-modal").addEventListener("click",(function(){document.getElementById("overlay").classList.add("is-visible"),document.getElementById("modal").classList.add("is-visible")})),document.getElementById("close-btn").addEventListener("click",(function(){document.getElementById("overlay").classList.remove("is-visible"),document.getElementById("modal").classList.remove("is-visible")})),document.getElementById("overlay").addEventListener("click",(function(){document.getElementById("overlay").classList.remove("is-visible")}))}();
//# sourceMappingURL=index.b001cb1d.js.map
