(()=>{var n={896:()=>{const n=document.querySelector(".header__dark-mode"),e=document.querySelector("body"),a=localStorage.getItem("mode")?localStorage.getItem("mode"):null;a&&e.classList.add("dark-mode"),n.addEventListener("click",(()=>{e.classList.toggle("dark-mode"),a?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var t=e[s]={exports:{}};return n[s](t,t.exports,a),t.exports}(()=>{"use strict";a(896);const n=document.querySelector(".loader"),e=e=>{e?n.classList.remove("hidden"):n.classList.add("hidden")},s=(document.querySelector(".cards"),window.location.search);(async n=>{e(!0);const a=await fetch(n);if(200!==a.status)throw e(!1),new Error("Data is not coming from server");const s=await a.json();return e(!1),s})(`https://restcountries.com/v3.1/${new URLSearchParams(s).get("country")}`).then((n=>{(n=>{const e=document.querySelector(".country-info"),{population:a,capital:s,borders:o,region:t,subregion:r,flags:c,name:l,tld:i,languages:p,currencies:u}=n,d=Object.values(l.nativeName)[0].official,m=Object.values(u)[0].name,g=Object.values(p);console.log(n),console.log(o),e.innerHtml="",e.innerHTML=`\n    \n        <img src=${c.svg} alt=${c.alt} class="country-info__img"/>\n        <div class="country-info__content">\n          <ul class="country-info__list">\n            <li class="country-info__item">\n              <p class="name">\n                  Native Name: \n                  <span>${d}</span>\n              </p>\n              <p class="population">\n                  Population: \n                  <span>${a}</span>\n              </p>\n              <p class="region">\n                  Region: \n                  <span>${t}</span>\n              </p>\n              <p class="sub-region">\n                  Sub Region: \n                  <span>${r}</span>\n              </p>\n              <p class="capital">\n                  Capital: \n                  <span>${s}</span>\n              </p>\n            </li>\n\n            <li class="country-info__item">\n              <p class="name">\n                  Top Level Domain: \n                  <span>${i}</span>\n              </p>\n              <p class="population">\n                  Currencies: \n                  <span>${m}</span>\n              </p>\n              <p class="region">\n                  Language: \n                  <span>${g}</span>\n              </p> \n            </li>\n          </ul>\n\n          <div class="country-info__borders">\n            <h3>Border Countries</h3>\n            ${o?o.map((n=>`<a href="./about.html?country=/alpha/${n}">${n}</a>`)):"No border countries"}\n          </div>\n\n        </div>\n    \n  `})(n[0])})).catch((n=>{alert(n.message)}))})()})();