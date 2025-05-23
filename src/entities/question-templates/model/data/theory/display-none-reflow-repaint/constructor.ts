export default function question({ shuffle }: QuestionHelpers): RawQuestion {
  const cssField = "display";
  const [valueA, valueB] = shuffle(["block", "none"]);

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
Будут вызваны Repaint (Перерисовка) и Reflow (Перерасчёт)
Так как поменялось и геометрия, и визуальная составляющая
`,
    answers: [
      { text: "Reflow", right: true },
      { text: "Repaint", right: true },
      { text: "Ничего" },
    ],
  };
}
