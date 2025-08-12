import { createPopover, openPopover, closePopovers } from "@components/popover";

export function createCard({
  id,
  image,
  tag,
  experience,
  country,
  region,
  destination,
  title,
  description,
  days,
  includes,
  extras,
  priceFrom,
  priceBeforeTaxes,
  taxes,
  finalPrice,
  popoverContent,
}) {
  const summaryContent = `
    <div class="summary">
      <h4 class="summary__title"><strong>${destination}</strong> (${region})</h4>
      <p class="summary__info"><span class="u-capitalize">${experience}</span>, ${days} días</p>
      <dl class="summary__list">
        <dt class="summary__term">Precio antes de impuestos</dt>
        <dd class="summary__description">${priceBeforeTaxes}</dd>
        <dt class="summary__term">Impuestos</dt>
        <dd class="summary__description">${taxes}</dd>
      </dl>
      ${
        includes.length > 0
          ? `<dl class="summary__list">
              <dt class="summary__term">Incluye</dt>
              <dd class="summary__description">${includes
                .map((item) => `${item}<br>`)
                .join("")}</dd>
              </dl>`
          : ""
      }
      <dl class="summary__list">
        <dt class="summary__term"><strong>Precio </strong></dt>
        <dd class="summary__description"><strong>${finalPrice}</strong></dd>
      </dl>
      ${
        extras.length > 0
          ? '<dl class="summary__list">' +
            extras
              .map(
                (item) => `
                  <dt class="summary__term">${item.label}</dt>
                  <dd class="summary__description">+ ${item.price}</dd>
                `
              )
              .join("") +
            "</dl>"
          : ""
      }
    </div>
  `;

  return `
    <article class="card js-card" data-experience="${experience}" data-region="${region}" data-id="${id}">
      <div class="card__header">
        <img class="card__image" src="/src/assets/images/content/${image}" alt="Imagen de ${experience} en ${destination}" />
        ${tag ? `<span class="card__tag">${tag}</span>` : ""}
      </div>
      <div class="card__body">
        <p class="card__pretitle"><span class="u-capitalize">${experience}</span> en ${region}</p>
        <h3 class="card__title">${destination}</h3>
        <p class="card__description">${description}</p>
      </div>
      <div class="card__footer">
        <span class="card__price-label">Desde</span>
        <strong class="card__price-value">${priceFrom}</strong>
        <div class="card__show-details">
          <button type="button" class="button button--link u-p-0 js-card-details-trigger" aria-expanded="false" aria-controls="popover-${id}">
            Ver detalles
          </button>
          <svg class="icon icon--16 icon--90deg" aria-hidden="true">
            <use xlink:href="/sprite.svg#chevron"></use>
          </svg>
          ${createPopover(id, summaryContent)}
        </div>        
        <button type="button" class="button button--md button--primary">Reservar</button>
      </div>
    </article>
  `;
}
