export default function question({ minorBool }: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();

  return {
    upperText: `[CSS] Какие из приведённых вариантов ${
      anotherCase ? "" : "НЕ "
    }являются допустимыми значениями свойства <code>border-style</code>?`,
    display: "grid",
    gridCols: 2,
    helpLinks: ["https://www.w3.org/TR/css-backgrounds-3/#the-border-style"],
    multiple: true,
    answers: [
      { code: "dotted", right: anotherCase },
      { code: "lined", right: !anotherCase },
      { code: "inset", right: anotherCase },
      { code: "groove", right: anotherCase },
      { code: "solid", right: anotherCase },
      { code: "glazed", right: !anotherCase },
      { code: "double", right: anotherCase },
      { code: "strong", right: !anotherCase },
    ],
  };
}
// hidden
// dashed
// ridge
// outset
// none
