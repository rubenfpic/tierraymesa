export function createFilters() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="filters__toggle">
      <button type="submit" class="button button--secondary button--md button--icon js-filters-toggle" aria-controls="filtersPanel" aria-expanded="false">
        <svg aria-hidden="true" class="icon icon--24">
          <use xlink:href="/sprite.svg#filter"></use>
          </svg>
        <span>Filtros</span>
      </button>
    </div>
    <div class="filters__panel js-filters-panel" id="filtersPanel">
      <div class="filters__panel-inner">
        <div class="filters__header">
          <h3 class="filters__title">Filtrar la búsqueda</h3>
          <div class="filters__close">
            <button type="button" class="button button--icon button--link js-filters-close" aria-label="Cerrar panel de filtros">
              <svg class="icon icon--24" aria-hidden="true">
                <use xlink:href="/sprite.svg#close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `);

  return fragment;
}

export function toggleFiltersPanel() {
  const filtersToggle = document.querySelector(".js-filters-toggle");
  const filtersPanel = document.querySelector(".js-filters-panel");
  const filtersClose = document.querySelector(".js-filters-close");
  const body = document.querySelector("body");

  filtersToggle.addEventListener("click", () => {
    const isExpanded = filtersPanel.classList.contains("is-visible");

    filtersToggle.setAttribute("aria-expanded", !isExpanded);
    filtersPanel.classList.toggle("is-visible");
    if (
      window.getComputedStyle(filtersPanel).position == "fixed" &&
      filtersPanel.classList.contains("is-visible")
    ) {
      body.classList.add("no-scroll");
    }
  });

  filtersClose.addEventListener("click", () => {
    filtersPanel.classList.toggle("is-visible");
    body.classList.remove("no-scroll");
  });

  window.addEventListener("resize", () => {
    filtersPanel.classList.remove("is-visible");
    filtersToggle.setAttribute("aria-expanded", false);
    body.classList.remove("no-scroll");
  });
}
