import{a as c,i as l,S as u}from"./assets/vendor-YT4DRQk6.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function m(t){const a="https://pixabay.com/api/",o=new URLSearchParams({key:"48819387-421892b97c727b1ba27e3124c",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${a}?${o}`;return c.get(i).then(e=>e.data.hits.length===0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),null):e.data.hits).catch(e=>{throw console.error("Error fetching images:",e),l.error({message:"Something went wrong. Please try again later.",position:"topRight"}),e})}function g(t){return`<div
  class="image-container fb js-image-container"
  style="justify-content: start"
>
  <div class="image-card card">
    <a class="photo-container" href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}" class="photo" />
    </a>
    <ul class="image-body">
      <li>
        <h2>Likes</h2>
        <p>${t.likes}</p>
      </li>
      <li>
        <h2>Views</h2>
        <p>${t.views}</p>
      </li>
      <li>
        <h2>Comments</h2>
        <p>${t.comments}</p>
      </li>
      <li>
        <h2>Downloads</h2>
        <p>${t.downloads}</p>
      </li>
    </ul>
  </div>
</div>`}let d=new u(".gallery a",{captionsData:"alt",captionDelay:250});const s={formEl:document.querySelector("#search-images"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader")};s.formEl.addEventListener("submit",t=>{t.preventDefault();const a=t.target.elements.query.value.trim();s.loader.style.display="block",s.galleryEl.innerHTML="",setTimeout(()=>{m(a).then(o=>{if(!o)return;const i=o.map(g).join("");s.galleryEl.insertAdjacentHTML("beforeend",i),d.refresh()}).catch(o=>{console.error("Error fetching images:",o),l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{s.loader.style.display="none"})},1e3),t.target.reset()});
//# sourceMappingURL=index.js.map
