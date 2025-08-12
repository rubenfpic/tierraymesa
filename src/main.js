import "@styles/index.scss";
import { createHeader } from "@components/header";
import { createFooter } from "@components/footer";
import { createIntro } from "@components/intro";
import {
  createFilters,
  toggleFiltersPanel,
  toggleFiltersFieldset,
  toggleFiltersList,
  activateCheckboxFilter,
} from "@components/filters";
import { closePopovers } from "./components/popover";
import { createCards, updateCards, initCardDetails } from "@components/cards";

function onFilterChange(filteredCards) {
  updateCards(filteredCards);
}

const headerNode = document.getElementById("header");
const headerContent = createHeader();
headerNode.appendChild(headerContent);

const introNode = document.getElementById("intro");
const introContent = createIntro();
introNode.appendChild(introContent);

const filtersNode = document.getElementById("filters");
const filtersContent = createFilters();
filtersNode.appendChild(filtersContent);
toggleFiltersPanel();
toggleFiltersFieldset();
toggleFiltersList();

const cardsNode = document.getElementById("cards");
const cardsContent = createCards();
cardsNode.appendChild(cardsContent);
initCardDetails();

const footerNode = document.getElementById("footer");
const footerContent = createFooter();
footerNode.appendChild(footerContent);

window.addEventListener("resize", closePopovers);

activateCheckboxFilter("region", onFilterChange);
activateCheckboxFilter("experience", onFilterChange);
