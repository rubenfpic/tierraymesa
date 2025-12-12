let isLightboxInitialized = false;

export function initLightbox() {
  if (isLightboxInitialized) return;
  isLightboxInitialized = true;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="lightbox__backdrop" data-lightbox-close></div>
    <figure class="lightbox__figure" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
      <img class="lightbox__img js-lightbox-image" alt="">
      <figcaption class="lightbox__caption js-lightbox-caption" hidden></figcaption>
      <button type="button" class="lightbox__close js-lightbox-close" aria-label="Cerrar" data-lightbox-close>
        <svg aria-hidden="true" class="icon icon--24">
          <use xlink:href="/sprite.svg#close"></use>
        </svg>
      </button>
    </figure>
  `;
  document.body.appendChild(overlay);

  const image = overlay.querySelector(".js-lightbox-image");
  const caption = overlay.querySelector(".js-lightbox-caption");

  function openLightbox(src, alt, captionText) {
    image.src = src;
    image.alt = alt || "";
    if (captionText) {
      caption.textContent = captionText;
      caption.hidden = false;
    } else {
      caption.hidden = true;
      caption.textContent = "";
    }
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.documentElement.classList.add("no-scroll");
    overlay.querySelector(".lightbox__close").focus();
  }

  function closeLightbox() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.documentElement.classList.remove("no-scroll");
    image.removeAttribute("src");
  }

  overlay.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (t.closest("[data-lightbox-close]")) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      e.preventDefault();
      closeLightbox();
    }
  });

  document.addEventListener("click", (e) => {
    const el = e.target;
    if (!(el instanceof HTMLElement)) return;
    if (el.matches(".js-card-image[data-lightbox]")) {
      const src =
        el.getAttribute("data-lightbox-src") || el.getAttribute("src");
      const alt = el.getAttribute("alt") || "";
      const caption = el.getAttribute("data-lightbox-caption");
      openLightbox(src, alt, caption);
    }
  });
}
