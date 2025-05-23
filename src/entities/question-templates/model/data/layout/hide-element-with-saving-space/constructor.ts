export default function question(): RawQuestion {
  return {
    upperText:
      "[CSS] Какие свойства позволяют спрятать элемент, но сохранить занимаемое им пространство на странице?",
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/CSS/opacity",
      "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility",
    ],
    display: "grid",
    gridCols: 2,
    multiple: true,
    answers: [
      { code: "visibility", right: true },
      { code: "hidden" },
      { code: "transparent" },
      { code: "opacity", right: true },
      { code: "display" },
      { code: "position" },
      { code: "z-index" },
    ],
  };
}
