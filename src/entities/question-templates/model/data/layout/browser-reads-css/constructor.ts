export default function question(): RawQuestion {
  return {
    upperText: `Как браузер "читает" css`,
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Сверху вниз", right: true },
      { text: "Снизу вверх" },
    ],
  };
}
