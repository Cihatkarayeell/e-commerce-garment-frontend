!function(){var e={3:function(){document.querySelectorAll("table").forEach((e=>{e.parentElement.classList.contains("table-responsive")||(e.outerHTML='<div class="table-responsive">'+e.outerHTML+"</div>")}))},57:function(){const e=window.location.origin;window.onload=()=>{document.querySelectorAll("img").forEach((t=>{t.complete&&void 0!==t.naturalWidth&&t.naturalWidth<=0&&(t.src=e+"/img/no-image.jpg")}))}},276:function(){console.log("%cMade by passion","background:#da4648;color:#fff;padding:10px;font-weight:bold;")},277:function(){document.getElementsByClassName("accordion")&&document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".accordion-header").forEach((e=>{e.addEventListener("click",(function(){const e=this.nextElementSibling,t=e.classList.contains("active");document.querySelectorAll(".accordion-content").forEach((e=>{e.style.height="0px",e.classList.remove("active")})),document.querySelectorAll(".accordion-header").forEach((e=>{e.classList.remove("active")})),t||(this.classList.add("active"),e.classList.add("active"),e.style.height=e.scrollHeight+"px")}))}))}))},302:function(){document.querySelectorAll("a").forEach((e=>{e.hasAttribute("target")&&"_blank"===e.getAttribute("target")&&e.setAttribute("rel","noopener noreferrer nofollow")}))},417:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".blog-card");let t=1;const n=Math.ceil(e.length/6);function o(t){const n=6*(t-1),o=n+6;e.forEach(((e,t)=>{e.style.display=t>=n&&t<o?"":"none"}))}e.length>0&&(o(t),function e(){const c=document.querySelector(".blog-pagination ul");if(!c)return;if(c.innerHTML="",t>=2){const n=document.createElement("li"),r=document.createElement("a");r.href="#",r.innerHTML='<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.625 1L1.375 6L6.625 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',r.addEventListener("click",(n=>{n.preventDefault(),t--,o(t),e()})),n.appendChild(r),c.appendChild(n)}if(t===n&&t>1){const n=document.createElement("li"),r=document.createElement("a");r.href="#",r.textContent=t-1,r.addEventListener("click",(n=>{n.preventDefault(),t--,o(t),e()})),n.appendChild(r),c.appendChild(n)}const r=document.createElement("li");r.className="active";const a=document.createElement("a");if(a.href="#",a.textContent=t,r.appendChild(a),c.appendChild(r),t<n){const n=document.createElement("li"),r=document.createElement("a");r.href="#",r.textContent=t+1,r.addEventListener("click",(n=>{n.preventDefault(),t++,o(t),e()})),n.appendChild(r),c.appendChild(n);const a=document.createElement("li"),i=document.createElement("a");i.href="#",i.innerHTML='<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.375 1L6.625 6L1.375 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',i.addEventListener("click",(n=>{n.preventDefault(),t++,o(t),e()})),a.appendChild(i),c.appendChild(a)}}())}))},464:function(){document.querySelectorAll("a").forEach((e=>{e.hasAttribute("href")&&e.href.startsWith("tel:")&&(e.href="tel:"+e.href.replaceAll(/[^\d+]/g,""))}))},574:function(){document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("qaModal"),t=document.querySelector(".search-btn"),n=e.querySelector(".close-btn"),o=document.getElementById("questionForm");t.addEventListener("click",(()=>{e.classList.add("active"),document.body.style.overflow="hidden"})),n.addEventListener("click",(()=>{e.classList.remove("active"),document.body.style.overflow=""})),e.addEventListener("click",(t=>{t.target===e&&(e.classList.remove("active"),document.body.style.overflow="")})),o.addEventListener("submit",(t=>{t.preventDefault(),e.classList.remove("active"),document.body.style.overflow=""}))}))},663:function(){document.addEventListener("click",(e=>{if("A"!==e.target.tagName)return!1;const t=e.target,n=t.getAttribute("href");if("#"===n)e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"});else if("#"===n.charAt(0)||"/"===n.charAt(0)&&"#"===n.charAt(1)){if(!t.hash)return!1;const n=document.querySelector(t.hash);n&&(e.preventDefault(),(o=n)&&o.scrollIntoView({behavior:"smooth"}))}var o}))},722:function(){document.querySelector(".size-options")&&document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".size-btn");e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>e.classList.remove("active"))),this.classList.add("active")}))}))}))},831:function(){document.querySelector(".review-form form")&&document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("file-upload"),t=document.querySelector(".file-info"),n=document.querySelector(".review-form form");e?.addEventListener("change",(e=>{const n=e.target.files;n.length>0?1===n.length?t.textContent=n[0].name:t.textContent=`${n.length} dosya seçildi`:t.textContent="Dosya seçilmedi"})),n?.addEventListener("submit",(e=>{e.preventDefault(),console.log("Form gönderildi")}))}))},845:function(){document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('.quantity input[type="number"]').forEach((e=>{const t=e.closest(".quantity"),n=t.querySelector(".minus"),o=t.querySelector(".plus"),c=e=>{e<=1?n.classList.add("disabled"):n.classList.remove("disabled")};e.addEventListener("change",(function(){this.value<1&&(this.value=1),c(parseInt(this.value))})),n.addEventListener("click",(function(){const t=parseInt(e.value);t>1&&(e.value=t-1,c(t-1))})),o.addEventListener("click",(function(){const t=parseInt(e.value);e.value=t+1,c(t+1)}))}))}))},850:function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".tab-btn"),t=document.querySelectorAll(".tab-content");e.forEach((n=>{n.addEventListener("click",(function(){e.forEach((e=>e.classList.remove("active"))),this.classList.add("active");const n=this.getAttribute("data-tab");t.forEach((e=>{e.classList.remove("active"),e.id===n&&e.classList.add("active")}))}))}))}))},921:function(){document.addEventListener("contextmenu",(e=>{"IMG"===e.target.nodeName&&e.preventDefault()}))}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(302),n(417),n(464),n(921),n(3),n(276),n(722),n(845),n(850),n(574),n(831),n(277),n(57),n(663);document.addEventListener("DOMContentLoaded",(()=>{console.log("Webpack Frontend Starter Kit loaded!");const e=document.querySelector(".modal-trigger");e&&e.addEventListener("click",(()=>{const e=document.createElement("div");e.className="modal",e.innerHTML="Modal content here",document.body.appendChild(e)}));const t=document.querySelector(".tabs");if(t){const e=t.querySelectorAll(".tab"),n=t.querySelectorAll(".tab-panel");e.forEach(((t,o)=>{t.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("active"))),n.forEach((e=>e.classList.remove("active"))),t.classList.add("active"),n[o].classList.add("active")}))}))}}))}()}();