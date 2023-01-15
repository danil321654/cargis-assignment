export const toStringDate = (initial: string) =>
  new Date(initial)
    .toLocaleDateString("Ru-ru", {
      month: "long",
      year: "numeric",
      day: "numeric",
    })
    .replace(" г.", "");
