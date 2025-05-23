export default function question({ bool, color, choice }: QuestionHelpers): RawQuestion {
  const anotherCase = bool();
  return {
    upperText: "[CSS] Какое значение свойства <code>content</code> не валидно?",
    display: "grid",
    gridCols: 2,
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/CSS/counter()",
      "https://developer.mozilla.org/en-US/docs/Web/CSS/content",
    ],
    answers: [
      {
        code: anotherCase
          ? choice(["red", "blue", "indigo", "yellow"])
          : "normal",
        right: anotherCase,
      },
      { code: `"" counter(link) ""` },
      { code: choice(["close-quote", "open-quote"]) },
      { code: `linear-gradient(${color()}, ${color()})` },
      { text: "Все перечисленные значения валидны", right: !anotherCase },
    ],
  };
}
