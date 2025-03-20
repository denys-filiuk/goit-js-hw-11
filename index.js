import{a as c,i as n}from"./assets/vendor-4NxNCUZT.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";const p={key:"49327646-fcd0425046884d30268cb7003",image_type:"photo",orientation:"horizontal",safesearch:!0};function d(s){return c.get("/",{params:{...p,q:s}}).then(r=>r.data.hits).catch(r=>(console.error(r),[]))}function h(s){if(!s.length)return;const r=document.querySelector(".gallery"),a=s.map(({webformatURL:i,largeImageURL:e,tags:t,likes:o,views:u,comments:f,downloads:m})=>`
        <li class="galleryCard">
          <a href="${e}" >
            <img class="img" src="${i}" alt="${t}" >
          </a>
          <ul class="attributesList">
            <li class="attributesItem"><span class="attributesLabel">Likes</span><br>${o}</li>
            <li class="attributesItem"><span class="attributesLabel">Views</span><br>${u}</li>
            <li class="attributesItem"><span class="attributesLabel">Comments</span><br>${f}</li>
            <li class="attributesItem"><span class="attributesLabel">Downloads</span><br>${m}</li>
          </ul>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",a)}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.search.value.trim();if(!r){n.show({message:"Введіть слово для пошуку!",position:"topRight"});return}d(r).then(a=>{a.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconColor:"#FAFAFB"}):h(a)}),l.reset()});
//# sourceMappingURL=index.js.map
