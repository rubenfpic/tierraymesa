export function slugify(str) {
  return String(str)
    .normalize("NFD") // separa caracteres y diacríticos
    .replace(/[\u0300-\u036f]/g, "") // elimina diacríticos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // todo lo no alfanumérico → guion
    .replace(/^-+|-+$/g, ""); // limpia guiones al inicio/fin
}
