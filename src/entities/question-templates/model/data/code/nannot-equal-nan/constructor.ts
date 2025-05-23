export default function question({ char }: QuestionHelpers): RawQuestion {
  const varName = char();

  return {
    upperText: `Какое значение должно быть в переменной <code>${varName}</code>`,
    lowerText: "чтобы <code>result</code> был равен <code>true</code>",
    code: `
      const ${varName} = unknown;

      const result = ${varName} !== ${varName};
    `,
    multiple: true,
    display: "grid",
    gridCols: 2,
    answers: [
      { code: "NaN", right: true },
      { code: "null" },
      { code: "undefined" },
      { code: "Infinity" },
      { code: "Math.random()" },
      { code: "Number.MAX_SAFE_INTEGER" },
    ],
  };
}
