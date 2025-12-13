(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();function D(e){const t=e==="/"?"/experiences":e;document.querySelectorAll("a[data-route]").forEach(a=>{const i=a.getAttribute("data-route")===t;a.classList.toggle("is-active",i),a.setAttribute("aria-current",i?"page":"false")})}function z(e,t){e.classList.add("is-open"),t.setAttribute("aria-expanded",!0),document.body.classList.add("no-scroll")}function h(e,t){e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),document.body.classList.remove("no-scroll")}const m=(()=>{const e="/tierraymesa/";return e.endsWith("/")?e.slice(0,-1):e})();function E(e){if(m&&e.startsWith(m)){const t=e.slice(m.length)||"/";return t.startsWith("/")?t:`/${t}`}return e}function I(e){return m?e==="/"?`${m}/`:`${m}${e}`:e}function G({onRouteChange:e}={}){const t={"/":{tpl:"tpl-experiences",title:"Tierra y Mesa — Experiencias"},"/experiences":{tpl:"tpl-experiences",title:"Tierra y Mesa — Experiencias"},"/about-us":{tpl:"tpl-about-us",title:"Tierra y Mesa — Sobre nosotros"}},a=document.getElementById("main"),i=()=>document.querySelectorAll("a[data-route]");function s(o){i().forEach(c=>c.setAttribute("aria-current",c.getAttribute("data-route")===o?"page":"false"))}function r(o,c=!1){const d=t[o]||t["/"],g=document.getElementById(d.tpl);if(!g)return;a.innerHTML="",a.appendChild(g.content.cloneNode(!0)),document.title=d.title,s(o),requestAnimationFrame(()=>{a.focus(),window.scrollTo(0,0)});const v=I(o);c?history.replaceState({path:o},"",v):history.pushState({path:o},"",v),typeof e=="function"&&e(o),D(o),h(document.querySelector(".js-nav"),document.querySelector(".js-burger"))}document.addEventListener("click",o=>{const c=o.target.closest("a[data-route]");if(!c)return;const d=c.getAttribute("data-route");o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||c.target==="_blank"||(o.preventDefault(),r(d))}),window.addEventListener("popstate",o=>{const c=o.state?.path||E(location.pathname);r(c,!0)});const n=E(location.pathname),l=t[n]?n:"/";r(l,!0)}const O="/tierraymesa/assets/logo-color-Cu312fW1.svg";function H(){const e="/tierraymesa/",t=`${e}sprite.svg`,a=`${e}experiences`,i=`${e}about-us`,s=document.createRange().createContextualFragment(`
    <div class="header__layout">
      <div class="header__logo">
        <a href="${e}" class="logo" aria-label="Inicio">
          <img src="${O}" class="logo__img" alt="Logo de Tierra y Mesa" />
          <span class="logo__text" aria-label="Tierra y Mesa">tierraymesa</span>
        </a>
      </div>
      <div class="header__nav">
        <nav class="nav js-nav" id="nav" aria-label="Menú principal">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="${a}" class="nav__link is-active" data-route="/experiences">Experiencias</a>
            </li>
            <li class="nav__item">
              <a href="${i}" class="nav__link" data-route="/about-us">Sobre nosotros</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__actions">
        <button type="button" class="button button--icon button--link header__theme js-theme" aria-label="Cambiar el tema" aria-controls="nav" aria-theme="dark">
          <svg class="icon icon--32" aria-hidden="true">
            <use xlink:href="${t}#theme"></use>
          </svg>
        </button>
        <button type="button" class="button button--icon button--link header__burger js-burger" aria-label="Abrir el menú principal" aria-controls="nav" aria-expanded="false">
          <svg class="icon icon--32" aria-hidden="true">
            <use xlink:href="${t}#burger"></use>
          </svg>
        </button>
      </div>
    </div>  
  `),r=s.querySelector(".js-burger"),n=s.querySelector(".js-nav"),l=s.querySelector(".js-theme");return r.addEventListener("click",()=>{n.classList.contains("is-open")?h(n,r):z(n,r)}),l.addEventListener("click",()=>{const c=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",c),l.setAttribute("aria-theme",c)}),window.addEventListener("resize",()=>{h(n,r)}),s}function N(){return document.createRange().createContextualFragment(`
    <div class="footer__layout">
      <div class="footer__main">
        <a href="#" class="footer__main-link">Aviso legal</a> · <a href="#" class="footer__main-link">Política de privacidad</a>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright-text">2025 Tierra y Mesa</p>
      </div>
    </div>
  `)}function W(){return document.createRange().createContextualFragment(`
    <div class="intro__layout">
      <h1 class="intro__title">Sabores que cuentan historias</h1>
      <p class="intro__subtitle">Rutas, alojamientos, catas y degustaciones con esencia de origen</p>
    </div>
  `)}const $=[{id:"101",image:"card101.webp",tag:"Novedad",experience:"Ruta",country:"España",region:"Cantabria",destination:"Liébana",title:"Ruta en Cantabria",description:"Explora senderos únicos entre paisajes naturales y patrimonio local.",days:"3",includes:["Ruta guiada","Seguro de accidentes","Mapa detallado"],extras:[{label:"Transporte desde ciudad cercana",price:"25 €"}],priceFrom:"150 €",priceBeforeTaxes:"165 €",taxes:"16 €",finalPrice:"181 €"},{id:"102",image:"card102.webp",experience:"Degustación",country:"España",region:"Galicia",destination:"O Ribeiro",title:"Degustación en Galicia",description:"Una experiencia gastronómica auténtica con productos de la zona.",days:"2",includes:["Menú degustación","Maridaje con vinos locales","Café incluido"],extras:[{label:"Pack gourmet para llevar",price:"18 €"}],priceFrom:"131 €",priceBeforeTaxes:"144 €",taxes:"14 €",finalPrice:"158 €"},{id:"103",image:"card103.webp",tag:"Oferta limitada",experience:"Alojamiento",country:"España",region:"Galicia",destination:"Costa da Morte",title:"Alojamiento en Galicia",description:"Disfruta de una estancia acogedora en alojamientos rurales con encanto.",days:"4",includes:["Alojamiento 2 noches","Desayuno incluido","WiFi y amenities"],extras:[{label:"Media pensión",price:"20 €"},{label:"Pensión completa",price:"35 €"}],priceFrom:"107 €",priceBeforeTaxes:"118 €",taxes:"12 €",finalPrice:"130 €"},{id:"104",image:"card104.webp",experience:"Cata",country:"España",region:"Galicia",destination:"Ribeira Sacra",title:"Cata en Galicia",description:"Cata de vinos locales guiada por expertos en un entorno con historia.",days:"3",includes:["3 vinos seleccionados","Tabla de quesos","Guía especializada"],extras:[{label:"Botella extra",price:"10 €"}],priceFrom:"116 €",priceBeforeTaxes:"127 €",taxes:"13 €",finalPrice:"140 €"},{id:"105",image:"card105.webp",tag:"Novedad",experience:"Cata",country:"España",region:"Aragón",destination:"Somontano",title:"Cata en Aragón",description:"Cata de vinos locales guiada por expertos en un entorno con historia.",days:"4",includes:["3 vinos seleccionados","Tabla de quesos","Guía especializada"],extras:[{label:"Botella extra",price:"10 €"}],priceFrom:"118 €",priceBeforeTaxes:"130 €",taxes:"13 €",finalPrice:"143 €"},{id:"106",image:"card106.webp",experience:"Alojamiento",country:"España",region:"Andalucía",destination:"Alpujarra Granadina",title:"Alojamiento en Andalucía",description:"Disfruta de una estancia acogedora en alojamientos rurales con encanto.",days:"2",includes:["Alojamiento 2 noches","Desayuno incluido","WiFi y amenities"],extras:[{label:"Media pensión",price:"20 €"}],priceFrom:"130 €",priceBeforeTaxes:"143 €",taxes:"14 €",finalPrice:"157 €"},{id:"107",image:"card107.webp",tag:"Oferta limitada",experience:"Ruta",country:"España",region:"Cataluña",destination:"Parque Natural del Montseny",title:"Ruta en Cataluña",description:"Explora senderos únicos entre paisajes naturales y patrimonio local.",days:"3",includes:["Ruta guiada","Seguro de accidentes","Mapa detallado"],extras:[{label:"Transporte desde ciudad cercana",price:"25 €"}],priceFrom:"238 €",priceBeforeTaxes:"262 €",taxes:"26 €",finalPrice:"288 €"},{id:"108",image:"card108.webp",experience:"Degustación",country:"España",region:"Aragón",destination:"Campo de Cariñena",title:"Degustación en Aragón",description:"Una experiencia gastronómica auténtica con productos de la zona.",days:"2",includes:["Menú degustación","Maridaje con vinos locales","Café incluido"],extras:[{label:"Pack gourmet para llevar",price:"18 €"}],priceFrom:"199 €",priceBeforeTaxes:"219 €",taxes:"22 €",finalPrice:"241 €"},{id:"109",image:"card109.webp",tag:"Oferta limitada",experience:"Cata",country:"España",region:"Galicia",destination:"Valdeorras",title:"Cata en Galicia",description:"Cata de vinos locales guiada por expertos en un entorno con historia.",days:"3",includes:["3 vinos seleccionados","Tabla de quesos","Guía especializada"],extras:[{label:"Botella extra",price:"10 €"}],priceFrom:"116 €",priceBeforeTaxes:"128 €",taxes:"13 €",finalPrice:"141 €"},{id:"110",image:"card110.webp",experience:"Ruta",country:"España",region:"Galicia",destination:"Fragas do Eume",title:"Ruta en Galicia",description:"Explora senderos únicos entre paisajes naturales y patrimonio local.",days:"5",includes:["Ruta guiada","Seguro de accidentes","Mapa detallado"],extras:[{label:"Transporte desde ciudad cercana",price:"25 €"}],priceFrom:"219 €",priceBeforeTaxes:"241 €",taxes:"24 €",finalPrice:"265 €"},{id:"111",image:"card111.webp",tag:"Recomendado",experience:"Cata",country:"España",region:"Cataluña",destination:"Priorat",title:"Cata en Cataluña",description:"Cata de vinos locales guiada por expertos en un entorno con historia.",days:"3",includes:["3 vinos seleccionados","Tabla de quesos","Guía especializada"],extras:[{label:"Botella extra",price:"10 €"}],priceFrom:"205 €",priceBeforeTaxes:"226 €",taxes:"23 €",finalPrice:"248 €"},{id:"112",image:"card112.webp",experience:"Alojamiento",country:"España",region:"Cantabria",destination:"Valles Pasiegos",title:"Alojamiento en Cantabria",description:"Disfruta de una estancia acogedora en alojamientos rurales con encanto.",days:"3",includes:["Alojamiento 2 noches","Desayuno incluido","WiFi y amenities"],extras:[{label:"Media pensión",price:"20 €"}],priceFrom:"219 €",priceBeforeTaxes:"241 €",taxes:"24 €",finalPrice:"265 €"}];function A(e){return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}const S={region:[],experience:[]},x="/tierraymesa/sprite.svg";function K(e){const t=document.querySelectorAll(`input[name="${e}"]`);S[e]=Array.from(t).filter(a=>a.checked).map(a=>a.value)}function V(e){return e.filter(t=>Object.entries(S).every(([a,i])=>i.length===0||i.includes(t[a])))}function U(e,t){return`
    <legend class="filters__legend js-legend">
      <button type="button" class="filters__legend-button js-legend-button" aria-expanded="true">
        <svg class="icon icon--24" aria-hidden="true">
          <use xlink:href="${x}#${e}"></use>
        </svg>
        <span class="filters__legend-text">${t} </span>
        <svg class="filters__legend-expander icon icon--24 js-chevron" aria-hidden="true">
          <use xlink:href="${x}#chevron"></use>
        </svg>
      </button>
    </legend>
  `}function J(e,t,a){return`
  <label for="${t}" class="u-capitalize">
  <input class="input" type="checkbox" name="${e}" id="${t}" value="${a}">
  ${a} 
  </label>
  `}function X(e){return[...new Set($.map(t=>t[e]))].sort((t,a)=>t.localeCompare(a))}function j(e,t){const a=X(e);return`
    <fieldset class="filters__fieldset js-filters-fieldset" id="${e}Fieldset">
      ${U(e,t)}
      ${a.map(i=>`
          <div class="checkbox-wrapper">
            ${J(e,A(i),i)}
          </div>
        `).join("")}
    </fieldset>
  `}function Y(){return document.createRange().createContextualFragment(`
    <div class="filters__toggle">
      <button type="button" class="button button--secondary button--md button--icon js-filters-toggle" aria-controls="filtersPanel" aria-expanded="false">
        <svg aria-hidden="true" class="icon icon--24">
          <use xlink:href="${x}#filter"></use>
        </svg>
        <span>Filtros</span>
      </button>
    </div>
    <div class="filters__panel js-filters-panel" id="filtersPanel">
      <div class="filters__panel-inner">
        <div class="filters__header">
          <h3 class="filters__title">Filtrar la búsqueda</h3>
          <div class="filters__close">
            <button type="button" class="button button--icon button--link u-p-0 js-filters-close" aria-label="Cerrar panel de filtros">
              <svg class="icon icon--24" aria-hidden="true">
                <use xlink:href="${x}#close"></use>
              </svg>
            </button>
          </div>
        </div>
        <form class="filters__form js-filters-form">
          ${j("region","Región")}
          ${j("experience","Experiencia")}
        </form>
      </div>
    </div>
  `)}function Q(){const e=document.querySelector(".js-filters-toggle"),t=document.querySelector(".js-filters-panel"),a=document.querySelector(".js-filters-close"),i=document.querySelector("body");e.addEventListener("click",()=>{const s=t.classList.contains("is-visible");e.setAttribute("aria-expanded",!s),t.classList.toggle("is-visible"),window.getComputedStyle(t).position=="fixed"&&t.classList.contains("is-visible")&&i.classList.add("no-scroll")}),a.addEventListener("click",()=>{t.classList.toggle("is-visible"),i.classList.remove("no-scroll")}),window.addEventListener("resize",()=>{t.classList.remove("is-visible"),e.setAttribute("aria-expanded",!1),i.classList.remove("no-scroll")})}function Z(){document.querySelectorAll(".js-legend-button").forEach(t=>{t.addEventListener("click",()=>{t.closest(".js-filters-fieldset").classList.toggle("is-collapsed");const i=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",String(!i))})})}function ee(){document.querySelectorAll(".js-filters-fieldset").forEach(t=>{const a=t.querySelector(".js-filters-list-toggle"),i=t.querySelectorAll(".is-hidden");a&&a.addEventListener("click",()=>{i.forEach(s=>{s.classList.toggle("is-hidden")}),a.textContent=document.querySelector(".is-hidden")?"Ver más":"Ver menos"})})}function w(e,t){const a=document.querySelectorAll(`input[name="${e}"]`);document.querySelectorAll(".js-card"),document.querySelectorAll(".js-cards-list"),a.forEach(i=>{i.addEventListener("change",()=>{K(e);const s=V($);t(s)})})}let f=null,b=null,_=null;function q(e){return Array.from(e.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')).filter(t=>t.offsetParent!==null)}function te(e,t){return`
    <div class="popover js-popover"
         role="dialog"
         id="popover-${e}"
         aria-modal="true"
         aria-labelledby="popover-title-${e}"
         tabindex="-1"
         data-popover-for="popover-${e}">
      <button type="button" class="popover__close js-popover-close" aria-label="Cerrar">
        <svg aria-hidden="true" class="icon icon--16">
          <use xlink:href="/tierraymesa/sprite.svg#close"></use>
        </svg>
      </button>

      <div class="popover__content">
        <!-- Título accesible del diálogo (si ya tienes un <h3> en el contenido, puedes eliminar este y referenciar el tuyo) -->
        <h3 id="popover-title-${e}" class="u-d-none">Detalles</h3>
        ${t}
      </div>
    </div>
  `}function u(){if(document.querySelectorAll(".js-popover").forEach(t=>{t.classList.remove("is-visible"),t.parentElement.querySelector("button[aria-expanded]")?.setAttribute("aria-expanded","false")}),document.body.classList.remove("no-scroll"),b&&(document.removeEventListener("keydown",b),b=null),_&&(document.removeEventListener("pointerdown",_),_=null),f){try{f.focus()}catch{}f=null}}function ae(e,t=document.body){u(),e.setAttribute("aria-expanded","true"),f=e;const a=e.getAttribute("aria-controls"),i=document.getElementById(a);if(!i)return;i.querySelector(".js-popover-close"),i.classList.add("is-visible"),window.getComputedStyle(i).position==="fixed"&&document.body.classList.add("no-scroll");const s=t.getBoundingClientRect(),r=i.getBoundingClientRect();s&&(r.left+r.width>s.left+s.width&&r.left!==0&&(i.style.left=`${s.right-r.right}px`),r.top+r.height>s.top+s.height&&r.top!==0&&(i.style.top=`${s.bottom-r.bottom}px`)),(q(i)[0]||i).focus(),b=n=>{if(n.key==="Escape"){n.preventDefault(),u();return}if(n.key==="Tab"){const l=q(i);if(!l.length)return;const o=l[0],c=l[l.length-1];n.shiftKey&&document.activeElement===o?(n.preventDefault(),c.focus()):!n.shiftKey&&document.activeElement===c&&(n.preventDefault(),o.focus())}},document.addEventListener("keydown",b),_=n=>{if(n.target!==f){if(n.target.closest(".js-popover-close")){u();return}i.contains(n.target)||u()}},document.addEventListener("pointerdown",_)}const ie="/tierraymesa/assets/card101-DKuDiaJY.webp",se="/tierraymesa/assets/card102-BmveTX0a.webp",re="/tierraymesa/assets/card103-tGY7wGv3.webp",ne="/tierraymesa/assets/card104-BpaLieWz.webp",oe="/tierraymesa/assets/card105-BlxRKLCI.webp",ce="/tierraymesa/assets/card106-l-IF9q6M.webp",le="/tierraymesa/assets/card107-CeSK03Po.webp",de="/tierraymesa/assets/card108-ajR37IRO.webp",ue="/tierraymesa/assets/card109-CtWRJ_jZ.webp",pe="/tierraymesa/assets/card110-C3NniSkX.webp",me="/tierraymesa/assets/card111-wD88W2Ji.webp",ge="/tierraymesa/assets/card112-ByBJ8sTs.webp",fe=Object.assign({"/src/assets/images/content/card101.webp":ie,"/src/assets/images/content/card102.webp":se,"/src/assets/images/content/card103.webp":re,"/src/assets/images/content/card104.webp":ne,"/src/assets/images/content/card105.webp":oe,"/src/assets/images/content/card106.webp":ce,"/src/assets/images/content/card107.webp":le,"/src/assets/images/content/card108.webp":de,"/src/assets/images/content/card109.webp":ue,"/src/assets/images/content/card110.webp":pe,"/src/assets/images/content/card111.webp":me,"/src/assets/images/content/card112.webp":ge});function be(e){for(const[t,a]of Object.entries(fe))if(t.endsWith("/"+e))return a;return""}function _e({id:e,image:t,tag:a,experience:i,country:s,region:r,destination:n,title:l,description:o,days:c,includes:d,extras:g,priceFrom:v,priceBeforeTaxes:T,taxes:P,finalPrice:M,popoverContent:Ee}){const B="/tierraymesa/sprite.svg",L=be(t),R=`
    <div class="summary">
      <h4 class="summary__title"><strong>${n}</strong> (${r})</h4>
      <p class="summary__info"><span class="u-capitalize">${i}</span>, ${c} días</p>
      <dl class="summary__list">
        <dt class="summary__term">Precio antes de impuestos</dt>
        <dd class="summary__description">${T}</dd>
        <dt class="summary__term">Impuestos</dt>
        <dd class="summary__description">${P}</dd>
      </dl>
      ${d.length>0?`<dl class="summary__list">
              <dt class="summary__term">Incluye</dt>
              <dd class="summary__description">${d.map(y=>`${y}<br>`).join("")}</dd>
              </dl>`:""}
      <dl class="summary__list">
        <dt class="summary__term"><strong>Precio </strong></dt>
        <dd class="summary__description"><strong>${M}</strong></dd>
      </dl>
      ${g.length>0?'<dl class="summary__list">'+g.map(y=>`
                  <dt class="summary__term">${y.label}</dt>
                  <dd class="summary__description">+ ${y.price}</dd>
                `).join("")+"</dl>":""}
    </div>
  `;return`
    <article class="card js-card" data-experience="${i}" data-region="${r}" data-destination="${n}" data-id="${e}">
      <div class="card__header">
        <img class="card__image js-card-image"
          loading="lazy"
          data-lightbox
          data-lightbox-src="${L}"
          data-lightbox-caption="${n} (${r})"
          src="${L}"
          alt="Imagen de ${i} en ${n}" />
        ${a?`<span class="card__tag">${a}</span>`:""}
      </div>
      <div class="card__body">
        <p class="card__pretitle"><span class="u-capitalize">${i}</span> en ${r}</p>
        <h3 class="card__title">${n}</h3>
        <p class="card__description">${o}</p>
      </div>
      <div class="card__footer">
        <span class="card__price-label">Desde</span>
        <strong class="card__price-value">${v}</strong>
        <div class="card__show-details">
          <button type="button" class="button button--link u-p-0 js-card-details-trigger" aria-expanded="false" aria-controls="popover-${e}">
            Ver detalles
          </button>
          <svg class="icon icon--16 icon--90deg" aria-hidden="true">
            <use xlink:href="${B}#chevron"></use>
          </svg>
          ${te(e,R)}
        </div>        
        <button type="button" class="button button--md button--primary">Reservar</button>
      </div>
    </article>
  `}const ve="/tierraymesa/sprite.svg";function ye(e){const t=document.querySelector(".js-cards");t&&(t.innerHTML=`
    <div class="cards__layout">
      ${k(e)}
    </div>
  `,F())}function k(e){const t=e.reduce((a,i)=>{const s=i.experience||"...";return a[s]||(a[s]=[]),a[s].push(i),a},{});return Object.entries(t).map(([a,i])=>`
        <div class="cards__list js-cards-list">
          <h2 class="cards__title u-capitalize js-cards-title">
            <svg aria-hidden="true" class="icon icon--24">
              <use xlink:href="${ve}#${A(a)}"></use>
            </svg>
            ${a}
          </h2>
          ${i.map(s=>`
              <div class="cards__item js-cards-item">
                ${_e(s)}
              </div>
            `).join("")}
        </div>
      `).join("")}function xe(){const e=document.createElement("div");return e.classList.add("cards__layout"),e.innerHTML=k($),e}function he(e){ye(e)}function F(){document.querySelectorAll(".js-card-details-trigger").forEach(t=>{t.addEventListener("click",()=>{u(),ae(t,document.querySelector(".js-cards"))})})}function $e(){return document.createRange().createContextualFragment(`
    <h1 class="article__title">Officia deserunt eiusmod fugiat ipsum anim quis minim Lorem ex occaecat id aliqua magna.</h1>
    <p class="article__text">Do tempor enim sit labore labore do cupidatat tempor culpa pariatur nulla. Ipsum quis qui aliqua duis id ut elit commodo. Non
        nostrud eu consectetur
        irure sunt do consectetur non culpa non quis. Magna non dolore ipsum excepteur sunt nisi eu sint consectetur tempor nisi magna exercitation consequat.
        Sint nulla sunt laborum fugiat labore sunt adipisicing eu magna. Voluptate quis nostrud consequat nisi enim fugiat eiusmod.</p>

    <p class="article__text">Labore elit pariatur aliquip dolore. Deserunt non magna deserunt adipisicing exercitation. Quis fugiat aliquip pariatur
        reprehenderit non enim
        consectetur nisi eiusmod nulla sunt dolore fugiat. Aute Lorem anim quis dolore ullamco laborum ullamco eu exercitation ut incididunt. Eu ipsum
        pariatur fugiat reprehenderit eu. Non ad sunt mollit incididunt tempor. Aliqua exercitation pariatur eu eu officia ullamco nostrud excepteur in
        ullamco id proident.</p>

    <p class="article__text">Magna sunt enim esse dolore do excepteur consequat. Cillum dolore fugiat sint do excepteur qui laboris pariatur. Nulla cillum
        laboris est tempor
        Lorem pariatur fugiat dolor consectetur nisi. Lorem commodo sit quis voluptate aliqua eiusmod sit dolor ipsum magna mollit duis irure ad. Ex
        exercitation duis dolor cupidatat non incididunt. Est aute ad minim labore et aliqua aliqua occaecat ullamco.</p>

    <p class="article__text">Officia Lorem adipisicing id ea aute qui dolore aliqua et aliqua non. Ullamco reprehenderit ullamco mollit ipsum aliqua in
        magna. Culpa nulla velit
        aliqua laboris sunt adipisicing cillum. Anim esse excepteur occaecat minim elit excepteur dolore et labore fugiat qui anim qui ea. Ea in incididunt
        commodo elit deserunt laborum aliquip dolore id consequat Lorem labore est.</p>

    <p class="article__text">Laboris ea do qui eiusmod cillum proident Lorem in non dolore. Ullamco commodo amet amet dolore quis consectetur reprehenderit
        esse exercitation
        cillum. Irure proident aliquip mollit enim exercitation. Eiusmod voluptate est ad non magna consectetur nisi amet sint fugiat commodo.</p>
    `)}let C=!1;function Le(){if(C)return;C=!0;const e=document.createElement("div");e.className="lightbox",e.setAttribute("aria-hidden","true"),e.innerHTML=`
    <div class="lightbox__backdrop" data-lightbox-close></div>
    <figure class="lightbox__figure" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
      <img class="lightbox__img js-lightbox-image" alt="">
      <figcaption class="lightbox__caption js-lightbox-caption" hidden></figcaption>
      <button type="button" class="lightbox__close js-lightbox-close" aria-label="Cerrar" data-lightbox-close>
        <svg aria-hidden="true" class="icon icon--24">
          <use xlink:href="/tierraymesa/sprite.svg#close"></use>
        </svg>
      </button>
    </figure>
  `,document.body.appendChild(e);const t=e.querySelector(".js-lightbox-image"),a=e.querySelector(".js-lightbox-caption");function i(r,n,l){t.src=r,t.alt=n||"",l?(a.textContent=l,a.hidden=!1):(a.hidden=!0,a.textContent=""),e.classList.add("is-open"),e.setAttribute("aria-hidden","false"),document.documentElement.classList.add("no-scroll"),e.querySelector(".lightbox__close").focus()}function s(){e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),document.documentElement.classList.remove("no-scroll"),t.removeAttribute("src")}e.addEventListener("click",r=>{const n=r.target;n instanceof Element&&n.closest("[data-lightbox-close]")&&s()}),window.addEventListener("keydown",r=>{r.key==="Escape"&&e.classList.contains("is-open")&&(r.preventDefault(),s())}),document.addEventListener("click",r=>{const n=r.target;if(n instanceof HTMLElement&&n.matches(".js-card-image[data-lightbox]")){const l=n.getAttribute("data-lightbox-src")||n.getAttribute("src"),o=n.getAttribute("alt")||"",c=n.getAttribute("data-lightbox-caption");i(l,o,c)}})}function p(e,t){const a=document.getElementById(e);a.innerHTML="",a.appendChild(t())}p("header",H);p("footer",N);window.addEventListener("resize",u);G({onRouteChange:e=>{if(e==="/"||e==="/experiences"){let a=function(i){he(i)};var t=a;p("intro",W),p("filters",Y),p("cards",xe),Q(),Z(),ee(),F(),Le(),w("region",a),w("experience",a)}e==="/about-us"&&p("about-us",$e)}});
