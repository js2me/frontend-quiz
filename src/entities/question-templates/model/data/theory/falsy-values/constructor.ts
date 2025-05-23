export default function question({ minorBool }: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();

  return {
    display: "grid",
    gridCols: 3,
    upperText: `Какие значения в JavaScript ${
      anotherCase ? "НЕ " : " "
    }являются ложными?`,
    multiple: true,
    answers: [
      { code: `""`, right: !anotherCase },
      { code: `[]`, right: anotherCase },
      { code: `{}`, right: anotherCase },
      { code: `null`, right: !anotherCase },
      { code: `Symbol()`, right: anotherCase },
      { code: `NaN`, right: !anotherCase },
      { code: `undefined`, right: !anotherCase },
      { code: `0n`, right: !anotherCase },
      { code: anotherCase ? "true" : "false", right: true },
    ],
  };
}
