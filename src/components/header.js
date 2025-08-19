import logo from "@assets/images/logo-color.svg";
import { showMobileNav, hideMobileNav } from "./nav.js";

export function createHeader() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="header__layout">
      <div class="header__logo">
        <a href="/" class="logo" aria-label="Inicio">
          <img src="${logo}" class="logo__img" alt="Logo de Tierra y Mesa" />
          <span class="logo__text" aria-label="Tierra y Mesa">tierraymesa</span>
        </a>
      </div>
      <div class="header__nav">
        <nav class="nav js-nav" id="nav" aria-label="Menú principal">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="/experiences" class="nav__link is-active" data-route="/experiences">Experiencias</a>
            </li>
            <li class="nav__item">
              <a href="/about-us" class="nav__link" data-route="/about-us">Sobre nosotros</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__actions">
        <select id="theme-selector">
          <option value="system">Sistema</option>
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
        <button type="button" class="button button--icon button--link header__burger js-burger" aria-label="Abrir el menú principal" aria-controls="nav" aria-expanded="false">
          <svg class="icon icon--32" aria-hidden="true">
            <use xlink:href="/sprite.svg#burger"></use>
          </svg>
        </button>
      </div>
    </div>  
  `);

  const burger = fragment.querySelector(".js-burger");
  const nav = fragment.querySelector(".js-nav");

  burger.addEventListener("click", () => {
    const isExpanded = nav.classList.contains("is-open");

    !isExpanded ? showMobileNav(nav, burger) : hideMobileNav(nav, burger);
  });

  window.addEventListener("resize", () => {
    hideMobileNav(nav, burger);
  });

  return fragment;
}
