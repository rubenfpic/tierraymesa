import "@styles/index.scss";
import { createHeader } from "@components/header";
import { createFooter } from "@components/footer";
import { createIntro } from "@components/intro";
import { createCards, initCardDetails } from "@components/cards";

const headerNode = document.getElementById("header");
const headerContent = createHeader();
headerNode.appendChild(headerContent);

const introNode = document.getElementById("intro");
const introContent = createIntro();
introNode.appendChild(introContent);

const cardsNode = document.getElementById("cards");
const cardsContent = createCards();
cardsNode.appendChild(cardsContent);
initCardDetails();

const footerNode = document.getElementById("footer");
const footerContent = createFooter();
footerNode.appendChild(footerContent);
