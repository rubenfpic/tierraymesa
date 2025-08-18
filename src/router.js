import { setActiveNav, hideMobileNav } from "@components/nav";

// Router mínimo con History API y plantillas embebidas (<template>)
// - Mantiene un único index.html con varias vistas (experiencias / about-us)
// - Sin librerías: delegación de eventos + pushState/popstate
export function initRouter({ onRouteChange } = {}) {
  // Tabla de rutas -> id de <template> y título del documento.
  // Nota: "/experiences" es un alias de "/" que carga la misma plantilla.
  const routes = {
    "/": { tpl: "tpl-experiences", title: "Tierra y Mesa — Experiencias" },
    "/experiences": {
      tpl: "tpl-experiences",
      title: "Tierra y Mesa — Experiencias",
    },
    "/about-us": {
      tpl: "tpl-about-us",
      title: "Tierra y Mesa — Sobre nosotros",
    },
  };

  // Contenedor donde se inyecta la vista activa (contenido de los <template>)
  const view = document.getElementById("main");
  // Helper perezoso: devuelve los enlaces de navegación con data-route
  const navLinks = () => document.querySelectorAll("a[data-route]");

  // Marca accesible del enlace activo en el menú (WAI-ARIA):
  // aria-current="page" para la ruta actual; "false" para el resto.
  function setAriaCurrent(path) {
    navLinks().forEach((a) =>
      a.setAttribute(
        "aria-current",
        a.getAttribute("data-route") === path ? "page" : "false"
      )
    );
  }

  // Renderiza una ruta:
  // - Resuelve la ruta (o cae a "/")
  // - Clona el contenido del <template> asociado y lo inyecta en <main>
  // - Actualiza título y estado del menú
  // - Gestiona foco/scroll por accesibilidad y UX
  // - Actualiza el historial del navegador (pushState/replaceState)
  // - Dispara un hook opcional para inicializaciones de cada vista
  function render(path, replace = false) {
    const route = routes[path] || routes["/"];
    const tpl = document.getElementById(route.tpl);
    if (!tpl) return;

    // Limpia la vista e inserta el contenido de la plantilla seleccionada
    view.innerHTML = "";
    view.appendChild(tpl.content.cloneNode(true));

    // Título del documento + estado del menú activo
    document.title = route.title;
    setAriaCurrent(path);

    // Espera al siguiente frame para:
    // - Mover el foco al main (accesibilidad, lectores de pantalla)
    // - Volver al inicio de la página en cada "navegación"
    requestAnimationFrame(() => {
      view.focus();
      window.scrollTo(0, 0);
    });

    // Actualiza la URL sin recargar la página:
    // - replaceState en cargas iniciales o navegación por historial
    // - pushState en clics de usuario
    const url = path;
    if (replace) history.replaceState({ path }, "", url);
    else history.pushState({ path }, "", url);

    // 🔑 Hook: notifica al proyecto que se ha cargado una nueva vista
    // Útil para inicializar componentes dinámicos (filtros, cards, lightbox, etc.)
    if (typeof onRouteChange === "function") {
      onRouteChange(path);
    }

    setActiveNav(path);
    hideMobileNav(
      document.querySelector(".js-nav"),
      document.querySelector(".js-burger")
    );
  }

  // Intercepta clicks en el nav (progressive enhancement):
  // - Solo actúa sobre <a data-route="...">
  // - Respeta Cmd/Ctrl/Shift/Alt click y target="_blank" (abre en nueva pestaña)
  // - Previene la navegación por defecto y renderiza la vista vía router
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-route]");
    if (!a) return;
    const path = a.getAttribute("data-route");
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      a.target === "_blank"
    )
      return;
    e.preventDefault();
    render(path);
  });

  // Navegación con botones del navegador (atrás/adelante):
  // - Lee el estado almacenado en history.state o, si no existe, location.pathname
  // - Usa replace para no duplicar entradas en el historial
  window.addEventListener("popstate", (e) => {
    const path = e.state?.path || location.pathname;
    render(path, /*replace*/ true);
  });

  // Primera carga:
  // - Si la ruta actual existe, la renderiza
  // - Si no, cae a "/"
  // - replace para establecer el estado inicial sin añadir una nueva entrada
  const initial = routes[location.pathname] ? location.pathname : "/";
  render(initial, /*replace*/ true);
}
