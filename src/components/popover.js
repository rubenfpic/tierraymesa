let lastTrigger = null;
let keydownHandler = null;
let popoverClickHandler = null;

/**
 * Obtiene todos los elementos focusables dentro de un contenedor.
 * @param {HTMLElement} container - El elemento dentro del que buscar.
 * @returns {HTMLElement[]} Lista de elementos que pueden recibir foco.
 */
function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => el.offsetParent !== null);
}

/**
 * Genera la plantilla HTML de un popover accesible.
 * @param {string|number} id - Identificador único del popover.
 * @param {string} popoverContent - Contenido HTML del popover.
 * @returns {string} HTML del popover listo para inyectar.
 */
export function createPopover(id, popoverContent) {
  return `
    <div class="popover js-popover"
         role="dialog"
         id="popover-${id}"
         aria-modal="true"
         aria-labelledby="popover-title-${id}"
         tabindex="-1"
         data-popover-for="popover-${id}">
      <button type="button" class="popover__close js-popover-close" aria-label="Cerrar">
        <svg aria-hidden="true" class="icon icon--16">
          <use xlink:href="/sprite.svg#close"></use>
        </svg>
      </button>

      <div class="popover__content">
        <!-- Título accesible del diálogo (si ya tienes un <h3> en el contenido, puedes eliminar este y referenciar el tuyo) -->
        <h3 id="popover-title-${id}" class="u-visually-hidden">Detalles</h3>
        ${popoverContent}
      </div>
    </div>
  `;
}

/**
 * Cierra popovers visibles, limpia eventos y devuelve el foco al trigger original.
 */
export function closePopovers() {
  // 1 - Ocultar los popovers visibles, resetear aria-expanded, y desbloquear el body
  const allPopovers = document.querySelectorAll(".js-popover");
  allPopovers.forEach((el) => {
    el.classList.remove("is-visible");
    el.parentElement
      .querySelector("button[aria-expanded]")
      ?.setAttribute("aria-expanded", "false");
  });
  document.body.classList.remove("no-scroll");

  // 2 - Limpiar manejadores de eventos y variables
  if (keydownHandler) {
    document.removeEventListener("keydown", keydownHandler);
    keydownHandler = null;
  }
  if (popoverClickHandler) {
    document.removeEventListener("pointerdown", popoverClickHandler);
    popoverClickHandler = null;
  }

  // 3 - Devolver el foco al trigger original
  if (lastTrigger) {
    try {
      lastTrigger.focus();
    } catch {}
    lastTrigger = null;
  }
}

/**
 * Abre un popover, gestiona foco, eventos de cierre y accesibilidad.
 * @param {HTMLElement} trigger - Elemento que ha disparado la apertura (ej. botón "Ver detalles").
 * @param {HTMLElement} [container=document.body] - Contenedor usado para calcular el posicionamiento.
 */
export function openPopover(trigger, container = document.body) {
  // 1 - Cerrar popovers abiertos y preparar variables
  closePopovers();
  trigger.setAttribute("aria-expanded", "true");

  lastTrigger = trigger;
  const id = trigger.getAttribute("aria-controls");
  const popover = document.getElementById(id);
  if (!popover) return;
  const popoverClose = popover.querySelector(".js-popover-close");

  // 2 - Mostrar popover y bloquear body
  popover.classList.add("is-visible");

  if (window.getComputedStyle(popover).position === "fixed") {
    document.body.classList.add("no-scroll");
  }

  // 3 - Posicionar popover respecto del contenedor
  const containerRect = container.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();

  if (containerRect) {
    if (
      popoverRect.left + popoverRect.width >
        containerRect.left + containerRect.width &&
      popoverRect.left !== 0
    ) {
      popover.style.left = `${containerRect.right - popoverRect.right}px`;
    }
    if (
      popoverRect.top + popoverRect.height >
        containerRect.top + containerRect.height &&
      popoverRect.top !== 0
    ) {
      popover.style.top = `${containerRect.bottom - popoverRect.bottom}px`;
    }
  }

  // 4 - Establecer el foco dentro del popover
  (getFocusableElements(popover)[0] || popover).focus();

  // 5 - Manejar eventos de teclado
  keydownHandler = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      closePopovers();
      return;
    }
    if (e.key === "Tab") {
      const items = getFocusableElements(popover);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };
  document.addEventListener("keydown", keydownHandler);

  // 6 - Manejar eventos de ratón
  popoverClickHandler = (e) => {
    if (e.target === lastTrigger) return;
    if (e.target.closest(".js-popover-close")) {
      closePopovers();
      return;
    }
    if (!popover.contains(e.target)) {
      closePopovers();
    }
  };
  document.addEventListener("pointerdown", popoverClickHandler);
}
