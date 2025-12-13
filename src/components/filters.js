import { cardsData } from "@data/data";
import { slugify } from "@utils/slugify";

const activeFilters = {
  region: [],
  experience: [],
};

const spriteHref = `${import.meta.env.BASE_URL}sprite.svg`;

function updateActiveFilters(filterName) {
  const checkboxes = document.querySelectorAll(`input[name="${filterName}"]`);
  activeFilters[filterName] = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
}

function getFilteredCards(cardsData) {
  return cardsData.filter((card) => {
    return Object.entries(activeFilters).every(([filterName, values]) => {
      return values.length === 0 || values.includes(card[filterName]);
    });
  });
}

function createLegend(icon, name) {
  return `
    <legend class="filters__legend js-legend">
      <button type="button" class="filters__legend-button js-legend-button" aria-expanded="true">
        <svg class="icon icon--24" aria-hidden="true">
          <use xlink:href="${spriteHref}#${icon}"></use>
        </svg>
        <span class="filters__legend-text">${name} </span>
        <svg class="filters__legend-expander icon icon--24 js-chevron" aria-hidden="true">
          <use xlink:href="${spriteHref}#chevron"></use>
        </svg>
      </button>
    </legend>
  `;
}

function createCheckbox(groupName, filterId, filterLabel) {
  return `
  <label for="${filterId}" class="u-capitalize">
  <input class="input" type="checkbox" name="${groupName}" id="${filterId}" value="${filterLabel}">
  ${filterLabel} 
  </label>
  `;
}

function createInput(icon, name, placeholder) {
  return `
  <svg class="input-wrapper__icon" aria-hidden="true">
  <use xlink:href="${spriteHref}#${icon}"></use>
  </svg>
    <input class="input input--icon" type="text" name="${name}" placeholder="${placeholder}">
  `;
}

function getUniqueValuesByProperty(property) {
  return [...new Set(cardsData.map((card) => card[property]))].sort((a, b) =>
    a.localeCompare(b)
  );
}

function createFieldset(filterName, filterLabel) {
  const propertyValues = getUniqueValuesByProperty(filterName);

  return `
    <fieldset class="filters__fieldset js-filters-fieldset" id="${filterName}Fieldset">
      ${createLegend(filterName, filterLabel)}
      ${propertyValues
        .map(
          (value) => `
          <div class="checkbox-wrapper">
            ${createCheckbox(filterName, slugify(value), value)}
          </div>
        `
        )
        .join("")}
    </fieldset>
  `;
  // <button class="button button--link button--sm js-filters-list-toggle" id="${filterName}Toggle" type="button">Ver más</button>
}

export function createFilters() {
  const fragment = document.createRange().createContextualFragment(`
    <div class="filters__toggle">
      <button type="button" class="button button--secondary button--md button--icon js-filters-toggle" aria-controls="filtersPanel" aria-expanded="false">
        <svg aria-hidden="true" class="icon icon--24">
          <use xlink:href="${spriteHref}#filter"></use>
        </svg>
        <span>Filtros</span>
      </button>
    </div>
    <div class="filters__panel js-filters-panel" id="filtersPanel">
      <div class="filters__panel-inner">
        <div class="filters__header">
          <h3 class="filters__title">Filtrar la búsqueda</h3>
          <div class="filters__close">
            <button type="button" class="button button--icon button--link u-p-0 js-filters-close" aria-label="Cerrar panel de filtros">
              <svg class="icon icon--24" aria-hidden="true">
                <use xlink:href="${spriteHref}#close"></use>
              </svg>
            </button>
          </div>
        </div>
        <form class="filters__form js-filters-form">
          ${createFieldset("region", "Región")}
          ${createFieldset("experience", "Experiencia")}
        </form>
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

export function toggleFiltersFieldset() {
  const legendButtonList = document.querySelectorAll(".js-legend-button");

  legendButtonList.forEach((legendButton) => {
    legendButton.addEventListener("click", () => {
      const fieldset = legendButton.closest(".js-filters-fieldset");
      fieldset.classList.toggle("is-collapsed");

      const expanded = legendButton.getAttribute("aria-expanded") === "true";
      legendButton.setAttribute("aria-expanded", String(!expanded));
    });
  });
}

export function toggleFiltersList() {
  const filtersFieldsets = document.querySelectorAll(".js-filters-fieldset");

  filtersFieldsets.forEach((el) => {
    const filtersListToggle = el.querySelector(".js-filters-list-toggle");
    const filtersListHiddenElements = el.querySelectorAll(".is-hidden");

    if (filtersListToggle) {
      filtersListToggle.addEventListener("click", () => {
        filtersListHiddenElements.forEach((item) => {
          item.classList.toggle("is-hidden");
        });
        filtersListToggle.textContent = !document.querySelector(".is-hidden")
          ? "Ver menos"
          : "Ver más";
      });
    }
  });
}

export function activateCheckboxFilter(filterName, onFilterChange) {
  const checkboxes = document.querySelectorAll(`input[name="${filterName}"]`);
  const cards = document.querySelectorAll(".js-card");
  const cardsLists = document.querySelectorAll(".js-cards-list");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateActiveFilters(filterName);
      const filteredCards = getFilteredCards(cardsData);
      onFilterChange(filteredCards);
    });
  });
}
