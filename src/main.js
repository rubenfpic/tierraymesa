import "@styles/index.scss";
import { createHeader } from "@components/header";
import { createFooter } from "@components/footer";

const headerNode = document.getElementById("header");
const headerContent = createHeader();
headerNode.appendChild(headerContent);

const footerNode = document.getElementById("footer");
const footerContent = createFooter();
footerNode.appendChild(footerContent);
