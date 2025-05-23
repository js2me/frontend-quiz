export default function question(): RawQuestion {
  return {
    upperText: "[CSS] Что делает элемент <code>column-gap</code>?",
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Задает цвет правила между столбцами" },
      { text: "Задает стиль правила между столбцами" },
      { text: "Указывает зазор между столбцами", right: true },
      { text: "Указывает, сколько столбцов элемент должен охватывать поперек" },
    ],
  };
}
