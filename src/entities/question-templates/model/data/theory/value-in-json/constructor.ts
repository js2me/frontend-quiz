export default function question(): RawQuestion {
  return {
    upperText: "Какой метод преобразует значение JavaScript в строку JSON?",
    display: "grid",
    gridCols: 2,
    answers: [
      { code: "JSON.parse()" },
      { code: "JSON.string()" },
      { code: "JSON.stringify()", right: true },
      { code: "JSON.toString()" },
    ],
  };
}
