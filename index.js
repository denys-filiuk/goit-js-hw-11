import{a as c,i as n}from"./assets/vendor-4NxNCUZT.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";const f={key:"49327646-fcd0425046884d30268cb7003",image_type:"photo",orientation:"horizontal",safesearch:!0};function p(o){return c.get("/",{params:{...f,q:o}}).then(r=>r.data.hits).catch(r=>(console.error(r),[]))}function g(o){if(!o.length)return;const r=document.querySelector(".gallery"),s=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:u,comments:m,downloads:d})=>`
        <li class="galleryCard">
          <a href="${e}" >
            <img class="img" src="${i}" alt="${t}" >
          </a>
          <ul class="attributesList">
            <li class="attributesItem"><span class="attributesLabel">Likes</span><br>${a}</li>
            <li class="attributesItem"><span class="attributesLabel">Views</span><br>${u}</li>
            <li class="attributesItem"><span class="attributesLabel">Comments</span><br>${m}</li>
            <li class="attributesItem"><span class="attributesLabel">Downloads</span><br>${d}</li>
          </ul>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",s)}const l=document.querySelector(".form"),h=document.querySelector(".gallery");l.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements.search.value.trim();if(!r){n.show({message:"Введіть слово для пошуку!",position:"topRight"});return}h.innerHTML="";try{const s=await p(r);!s||s.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconColor:"#FAFAFB"}):g(s)}catch(s){console.error("Error while retrieving images:",s),n.show({message:"An error occurred while searching. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconColor:"#FAFAFB"})}l.reset()});
//# sourceMappingURL=index.js.map
