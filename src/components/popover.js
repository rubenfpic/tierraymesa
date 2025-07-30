export function createPopover(id, popoverContent) {
  return `
    <div class="popover js-popover" role="dialog" id="popover-${id}" aria-labelledby="popover-${id}" data-popover-for="popover-${id}">
      <button type="button" class="popover__close js-popover-close" aria-label="Cerrar">
        <svg aria-hidden="true" class="icon icon--16">
          <use xlink:href="/sprite.svg#close"></use>
        </svg>
      </button>
      ${popoverContent}
    </div>
`;
}

export function openPopover(trigger, container = document.body) {
  closePopovers();

  const popoverId = trigger.getAttribute("aria-controls");
  const popover = document.querySelector(
    `.js-popover[data-popover-for="${popoverId}"]`
  );
  const popoverClose = popover.querySelector(".js-popover-close");

  if (!popover) return;

  popover.classList.add("is-visible");

  if (window.getComputedStyle(popover).position == "fixed") {
    document.body.classList.add("no-scroll");
  }

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

  if (popoverClose) {
    popoverClose.addEventListener("click", () => {
      closePopovers();
    });
  }
}

export function closePopovers() {
  const allPopovers = document.querySelectorAll(".js-popover");
  allPopovers.forEach((el) => {
    el.classList.remove("is-visible");
    el.parentElement
      .querySelector("button[aria-expanded]")
      ?.setAttribute("aria-expanded", "false");
  });
  document.body.classList.remove("no-scroll");
}
