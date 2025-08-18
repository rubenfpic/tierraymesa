export function setActiveNav(path) {
  const currentSection = path === "/" ? "/experiences" : path;
  document.querySelectorAll("a[data-route]").forEach((a) => {
    const isActive = a.getAttribute("data-route") === currentSection;
    a.classList.toggle("is-active", isActive);
    a.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

export function showMobileNav(nav, burger) {
  nav.classList.add("is-open");
  burger.setAttribute("aria-expanded", true);
  document.body.classList.add("no-scroll");
}

export function hideMobileNav(nav, burger) {
  nav.classList.remove("is-open");
  burger.setAttribute("aria-expanded", false);
  document.body.classList.remove("no-scroll");
}
