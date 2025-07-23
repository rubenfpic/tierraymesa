import logo from "@assets/images/logo-color.svg";

export function createHeader() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="header__layout">
      <a href="/" class="logo" aria-label="Inicio">
        <img src="${logo}" class="logo__img" alt="Logo de Tierra y Mesa" />
        <span class="logo__text" aria-label="Tierra y Mesa">tierraymesa</span>
      </a>
      <div class="header__nav">

      </div>
      <div class="header__actions">
        <button type="button" class="button button--md button--primary">Primary</button>
        <button type="button" class="button button--md button--secondary">Secondary</button>
        <button type="button" class="button button--md button--link">Link</button>
        <button type="button" class="button button--sm button--danger">sm</button>
        <button type="button" class="button button--md button--danger">Danger</button>
        <button type="button" class="button button--lg button--danger">lg</button>
      </div>
    </div>  
  `);

  return fragment;
}
