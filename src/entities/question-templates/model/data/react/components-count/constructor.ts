export default function question(): RawQuestion {
  return {
    upperText: "Как много компонентов может быть на сайте?",
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Не более 300" },
      { text: "Не более 100" },
      { text: "Не более 50" },
      { text: "Неограниченное количество", right: true },
    ],
  };
}
