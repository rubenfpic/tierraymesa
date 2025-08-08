import { cardsData } from "@data/data";
import { createCard } from "@components/card";
import { createPopover, openPopover, closePopovers } from "@components/popover";

function renderCards(cardsArray) {
  const cardsContainer = document.querySelector(".js-cards");
  if (!cardsContainer) return;

  cardsContainer.innerHTML = `
    <div class="cards__layout">
      ${buildCards(cardsArray)}
    </div>
  `;

  initCardDetails();
}

function buildCards(cardsArray) {
  const cardsByExperience = cardsArray.reduce((acumulator, card) => {
    const experience = card.experience || "...";
    if (!acumulator[experience]) {
      acumulator[experience] = [];
    }
    acumulator[experience].push(card);
    return acumulator;
  }, {});

  return Object.entries(cardsByExperience)
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
    .join("");
}

export function createCards() {
  const container = document.createElement("div");
  container.classList.add("cards__layout");
  container.innerHTML = buildCards(cardsData);
  return container;
}

export function updateCards(cardsArray) {
  renderCards(cardsArray);
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
