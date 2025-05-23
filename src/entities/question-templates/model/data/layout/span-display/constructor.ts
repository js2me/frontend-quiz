export default function question(): RawQuestion {
  return {
    upperText:
      "[CSS] Какое значение свойства <code>display</code> установлено по умолчанию у HTML-элемента <code><span></code>?",
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "<code>inline</code>", right: true },
      { text: "<code>inline-block</code>" },
      { text: "<code>block</code>" },
      { text: "<code>flex</code>" },
    ],
  };
}
