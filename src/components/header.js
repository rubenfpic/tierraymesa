import logo from "@assets/images/logo-color.svg";
import { showMobileNav, hideMobileNav } from "./nav.js";

export function createHeader() {
  const base = import.meta.env.BASE_URL;
  const spriteHref = `${base}sprite.svg`;
  const experiencesHref =
    base === "/" ? "/experiences" : `${base}experiences`;
  const aboutHref = base === "/" ? "/about-us" : `${base}about-us`;

  const fragment = document.createRange().createContextualFragment(`
    <div class="header__layout">
      <div class="header__logo">
        <a href="${base}" class="logo" aria-label="Inicio">
          <img src="${logo}" class="logo__img" alt="Logo de Tierra y Mesa" />
          <span class="logo__text" aria-label="Tierra y Mesa">tierraymesa</span>
        </a>
      </div>
      <div class="header__nav">
        <nav class="nav js-nav" id="nav" aria-label="Menú principal">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="${experiencesHref}" class="nav__link is-active" data-route="/experiences">Experiencias</a>
            </li>
            <li class="nav__item">
              <a href="${aboutHref}" class="nav__link" data-route="/about-us">Sobre nosotros</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__actions">
        <button type="button" class="button button--icon button--link header__theme js-theme" aria-label="Cambiar el tema" aria-controls="nav" aria-theme="dark">
          <svg class="icon icon--32" aria-hidden="true">
            <use xlink:href="${spriteHref}#theme"></use>
          </svg>
        </button>
        <button type="button" class="button button--icon button--link header__burger js-burger" aria-label="Abrir el menú principal" aria-controls="nav" aria-expanded="false">
          <svg class="icon icon--32" aria-hidden="true">
            <use xlink:href="${spriteHref}#burger"></use>
          </svg>
        </button>
      </div>
    </div>  
  `);

  const burger = fragment.querySelector(".js-burger");
  const nav = fragment.querySelector(".js-nav");
  const theme = fragment.querySelector(".js-theme");

  burger.addEventListener("click", () => {
    const isExpanded = nav.classList.contains("is-open");

    !isExpanded ? showMobileNav(nav, burger) : hideMobileNav(nav, burger);
  });

  theme.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    theme.setAttribute("aria-theme", newTheme);
  });

  window.addEventListener("resize", () => {
    hideMobileNav(nav, burger);
  });

  return fragment;
}
