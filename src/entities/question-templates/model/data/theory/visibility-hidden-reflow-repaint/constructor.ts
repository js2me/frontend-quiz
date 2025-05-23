export default function question({ shuffle, minorBool }: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();
  const cssField = anotherCase ? "opacity" : "visibility";
  const [valueA, valueB] = anotherCase
    ? shuffle(["0", "1"])
    : shuffle(["visible", "hidden"]);

  return {
    upperText: "Что вызовет это изменение в браузере ?",
    lowerText: `Изменение CSS свойства <code>${cssField}: ${valueA}</code> на <code>${cssField}: ${valueB}</code>`,
    multiple: true,
    helpLinks: [
      "https://habr.com/ru/post/224187/",
      "https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/",
      "https://csstriggers.com/",
    ],
    helpText: `
Будет вызвано только Repaint (Перерисовка)
Reflow не будет вызвано, так как геометрия не поменялась
`,
    answers: [
      { text: "Reflow" },
      { text: "Repaint", right: true },
      { text: "Ничего" },
    ],
  };
}
