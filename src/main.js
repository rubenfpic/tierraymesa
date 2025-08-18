// Styles
import "@styles/index.scss";

// Routes
import { initRouter } from "./router.js";

// Generic
import { createHeader } from "@components/header";
import { createFooter } from "@components/footer";

// Section - Experiences
import { createIntro } from "@components/intro";
import {
  createFilters,
  toggleFiltersPanel,
  toggleFiltersFieldset,
  toggleFiltersList,
  activateCheckboxFilter,
} from "@components/filters";
import { createCards, updateCards, initCardDetails } from "@components/cards";
// Section - About us
import { createAboutUs } from "@components/about-us";

// Utils
import { closePopovers } from "@components/popover";
import { initLightbox } from "@components/lightbox";

function renderSection(id, factory) {
  const node = document.getElementById(id);
  node.innerHTML = "";
  node.appendChild(factory());
}

renderSection("header", createHeader);
renderSection("footer", createFooter);

window.addEventListener("resize", closePopovers);

initRouter({
  onRouteChange: (path) => {
    if (path === "/" || path === "/experiences") {
      function onFilterChange(filteredCards) {
        updateCards(filteredCards);
      }

      renderSection("intro", createIntro);
      renderSection("filters", createFilters);
      renderSection("cards", createCards);

      toggleFiltersPanel();
      toggleFiltersFieldset();
      toggleFiltersList();
      initCardDetails();
      initLightbox();
      activateCheckboxFilter("region", onFilterChange);
      activateCheckboxFilter("experience", onFilterChange);
    }
    if (path === "/about-us") {
      renderSection("about-us", createAboutUs);
    }
  },
});
