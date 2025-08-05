import { cardsData } from "@data/data";
import { createCard } from "@components/card";
import { createPopover, openPopover, closePopovers } from "@components/popover";

export function createCards() {
  const cardsByExperience = cardsData.reduce((acumulator, card) => {
    const experience = card.experience || "...";
    if (!acumulator[experience]) {
      acumulator[experience] = [];
    }
    acumulator[experience].push(card);
    return acumulator;
  }, {});

  const fragment = document.createRange().createContextualFragment(`

    <div class="cards__layout">
    ${Object.entries(cardsByExperience)
      .map(
        ([experience, cards]) => `
        <div class="cards__list js-cards-list">
          <h2 class="cards__title u-capitalize js-cards-title">${experience}</h2>
          ${cards
            .map(
              (card) => `
            <div class="cards__item js-cards-item">
              ${createCard(card)}
            </div>
          `
            )
            .join("")}
        </div>
      `
      )
      .join("")}
    </div>
  `);
  return fragment;
}
export function initCardDetails() {
  const detailsShow = document.querySelectorAll(".js-card-details-trigger");

  detailsShow.forEach((el) => {
    el.addEventListener("click", () => {
      closePopovers();
      openPopover(el, document.querySelector(".js-cards"));
      el.setAttribute("aria-expanded", true);
    });
  });

  window.addEventListener("resize", () => {
    closePopovers();
  });
}
