export default function question({ choice, color }: QuestionHelpers): RawQuestion {
  const [fieldName, fieldValueA, fieldValueB] = choice([
    ["background", color(), color()],
    ["border-color", color(), color()],
    ["color", color(), color()],
    ["box-shadow", `2px 2px 2px ${color()}`, `2px 4px 4px ${color()}`],
  ]);
  const cssField = fieldName;
  const [valueA, valueB] = [fieldValueA, fieldValueB];

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
