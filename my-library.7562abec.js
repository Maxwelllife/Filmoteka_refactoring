var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequirec2b7;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequirec2b7=a),a("8pSXg");const o={pagiContainer:document.querySelector("#tui-pagination-container"),wachedBtn:document.querySelector(".js-watched"),queueBtn:document.querySelector(".js-queue"),gallery:document.querySelector(".gallery")},{pagiContainer:r,wachedBtn:i,queueBtn:l,gallery:c}=o;var s=a("g4lwF"),d=a("2nhTy"),u=a("f63xy"),g=a("8pSXg");const f=(0,u.default)();let p;function v(e){i.classList.remove("active"),l.classList.remove("active"),e.target.classList.add("active"),localStorage.setItem("Active",e.target.name),m(e.target.name,1)}async function m(e,t){const n=JSON.parse(sessionStorage.getItem("user"));let a=n?await f.readUserData(n.uid):null;a=a||{};let o=n?a[e]||[]:JSON.parse(localStorage.getItem(e))||[];const i=function(){let e;return e=window.innerWidth>=1280?9:window.innerWidth>=768?8:4,e}();let l;p=(0,d.default)(o.length,i,r),p.on("afterMove",(e=>{if(r.removeAttribute("style"),o.length<=i){if(2===e.page)return void moveToPage(1);r.setAttribute("style","display: none")}l=o.slice(e.page*i-i,e.page*i),c.innerHTML=(0,s.createMarkup)(l),localStorage.setItem("LS",JSON.stringify(l)),sessionStorage.setItem("Page",e.page)})),p.movePageTo(t)}document.body.addEventListener("close",(function(){m(localStorage.getItem("Active"),sessionStorage.getItem("Page"))})),(0,g.checkLogin)(),function(){i&&(i.addEventListener("click",v),l.addEventListener("click",v),"queue"===localStorage.getItem("Active")?l.dispatchEvent(new Event("click")):i.dispatchEvent(new Event("click")));sessionStorage.setItem("window","library")}(),a("dmm04"),a("h8wPa"),a("bpn3I");
//# sourceMappingURL=my-library.7562abec.js.map
