import logo from "@assets/images/logo-color.svg";

export function createHeader() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="header__layout">
      <a href="/" class="logo" aria-label="Inicio">
        <img src="${logo}" class="logo__img" alt="Logo de Tierra y Mesa" />
        <span class="logo__text" aria-label="Tierra y Mesa">tierraymesa</span>
      </a>
      <div class="header__nav">
        <nav class="nav">
          <a class="nav__item" href="/experiences" data-route="/experiences">Experiencias</a>
          <a class="nav__item" href="/about-us" data-route="/about-us">Sobre nosotros</a>
        </nav>
      </div>
      <div class="header__actions">
        
      </div>
    </div>  
  `);

  return fragment;
}
