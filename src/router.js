export function initRouter({ onRouteChange } = {}) {
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

  const view = document.getElementById("main");
  const navLinks = () => document.querySelectorAll("a[data-route]");

  function setAriaCurrent(path) {
    navLinks().forEach((a) =>
      a.setAttribute(
        "aria-current",
        a.getAttribute("data-route") === path ? "page" : "false"
      )
    );
  }

  function render(path, replace = false) {
    const route = routes[path] || routes["/"];
    const tpl = document.getElementById(route.tpl);
    if (!tpl) return;

    view.innerHTML = "";
    view.appendChild(tpl.content.cloneNode(true));

    document.title = route.title;
    setAriaCurrent(path);

    requestAnimationFrame(() => {
      view.focus();
      window.scrollTo(0, 0);
    });

    const url = path;
    if (replace) history.replaceState({ path }, "", url);
    else history.pushState({ path }, "", url);

    if (typeof onRouteChange === "function") {
      onRouteChange(path);
    }
  }

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

  window.addEventListener("popstate", (e) => {
    const path = e.state?.path || location.pathname;
    render(path, true);
  });

  const initial = routes[location.pathname] ? location.pathname : "/";
  render(initial, true);
}
