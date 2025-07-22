export function createFooter() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="footer__layout">
      <div class="footer__main">

      </div>
      <div class="footer__legal">
        <p>2025 Tierra y Mesa</p>
      </div>
    </div>
  `);

  return fragment;
}
