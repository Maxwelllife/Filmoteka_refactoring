function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequirec2b7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequirec2b7=r),r("8pSXg");var i,c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,p=d||f||Function("return this")(),v=Object.prototype.toString,y=Math.max,m=Math.min,h=function(){return p.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=s.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}i=function(e,t,n){var o,r,i,c,a,s,u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=o,i=r;return o=r=void 0,u=t,c=e.apply(i,n)}function v(e){return u=e,a=setTimeout(S,t),l?p(e):c}function w(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-u>=i}function S(){var e=h();if(w(e))return L(e);a=setTimeout(S,function(e){var n=t-(e-s);return d?m(n,i-(e-u)):n}(e))}function L(e){return a=void 0,f&&o?p(e):(o=r=void 0,c)}function q(){var e=h(),n=w(e);if(o=arguments,r=this,s=e,n){if(void 0===a)return v(s);if(d)return a=setTimeout(S,t),p(s)}return void 0===a&&(a=setTimeout(S,t)),c}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?y(b(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),q.cancel=function(){void 0!==a&&clearTimeout(a),u=0,o=s=r=a=void 0},q.flush=function(){return void 0===a?c:L(h())},q};var w=r("kvr73"),S=r("2nhTy"),L=r("g4lwF"),q=r("eWCmQ"),_=r("8pSXg");const j=document.querySelector("#tui-pagination-container"),E=document.querySelector("#search-box"),T=document.querySelector(".gallery"),x=(document.querySelector("#user"),new(0,w.default));async function O(){x.query=E.value.trim();const e=await A();if(e.total_results>20){j.removeAttribute("style");(0,S.default)(e.total_results,20).on("afterMove",M)}else e.total_results||q.Notify.failure("Write somethig correct"),j.setAttribute("style","display: none");sessionStorage.setItem("window","home")}async function M(e){x.page=e.page;await A()}async function A(){let e;try{e=x.query?await x.fetchFilms():await x.fetchPopular(),T.innerHTML=(0,L.createMarkup)(e.results),localStorage.setItem("LS",JSON.stringify(e.results))}catch(e){console.log(e)}return e}E.addEventListener("input",e(i)(O,300)),console.log("hello"),(0,_.checkLogin)(),O(),r("dmm04");var N=r("eRClg");L=r("g4lwF");const F=document.querySelector("#genre_choice"),k=document.querySelector("#year_choice"),$=(document.querySelector("#sort_choice"),document.querySelectorAll(".filter__input")),R=document.querySelector(".gallery");document.querySelector("#search-box");async function H(e){x[e.target.name]=e.target.value;const t=await x.fetchFilter();R.innerHTML=(0,L.createMarkup)(t.results),localStorage.setItem("LS",JSON.stringify(t.results))}$.forEach((e=>e.addEventListener("change",H))),function(){const t=Object.keys(e(N)),n=[];for(const o of t)n.push(`<option value="${o}">${e(N)[o]}</option>`);F.insertAdjacentHTML("beforeend",n.join(""))}(),function(){let e=(new Date).getFullYear(),t=[];k.insertAdjacentHTML("beforeend",'<option value="">Choose year</option>');for(let n=e;n>1969;n-=1)t.push(`<option value="${n}">${n}</option>`);k.insertAdjacentHTML("beforeend",t.join(""))}();const I=document.querySelector("#genre_checkbox"),C=document.querySelector(".header-search"),D=document.querySelector("#genre_choice");function W(){I.checked?(C.setAttribute("style","opacity: 0"),D.removeAttribute("style")):(D.setAttribute("style","opacity: 0"),C.removeAttribute("style"))}I.addEventListener("change",W),W();const J=window.SpeechRecognition||window.webkitSpeechRecognition,P=document.querySelector(".header-search__btn-mic"),U=document.querySelector(".header-search__icon-record");let X,Y=!0;try{X=new J,X.lang="en-EN",X.interimResults=!1,X.maxAlternatives=1,X.onnomatch=function(e){alert("I didn't recognise that movie."),U.classList.add("visually-hidden"),P.classList.remove("-active"),X.stop()},X.onerror=function(e){alert(`Error occurred in recognition: ${e.error}`),U.classList.add("visually-hidden"),P.classList.remove("-active"),X.stop()}}catch{Y=!1}function Q(e){const t=e.results[0][0].transcript;E.value=t,e.results[0].isFinal&&(console.log("is Final",e.results[0].isFinal),X.onspeechend=(console.log("Speech has stopped being detected"),X.removeEventListener("result",Q),U.classList.add("visually-hidden"),P.classList.remove("-active"),X.stop(),void console.log("recognition.stop",X.stop()))),E.dispatchEvent(new Event("input"))}P.addEventListener("click",(function(){E.value="",Y?(X.addEventListener("result",Q),U.classList.remove("visually-hidden"),P.classList.add("-active"),X.start()):alert("Your browser is not support microphone enter"),console.log("Ready to receive a movieName command.")})),r("h8wPa");
//# sourceMappingURL=index.01914ce0.js.map