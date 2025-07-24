export function createIntro() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="intro__layout">
      <h1 class="intro__title">Sabores que cuentan historias</h1>
      <p class="intro__subtitle">Rutas, alojamientos, catas y degustaciones con esencia de origen</p>
    </div>
  `);

  return fragment;
}
