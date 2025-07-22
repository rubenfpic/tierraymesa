export function createFooter() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="footer__layout">
      <div class="footer__main">
        <a href="#" class="footer__main-link">Aviso legal</a> · <a href="#" class="footer__main-link">Política de privacidad</a>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright-text">2025 Tierra y Mesa</p>
      </div>
    </div>
  `);

  return fragment;
}
