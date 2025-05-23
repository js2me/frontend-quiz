export default function question({ bool }: QuestionHelpers): RawQuestion {
  return {
    upperText: "Что выведет этот console.log?",
    code: `console.log(typeof NaN)`,
    display: "grid",
    gridCols: 2,
    answers: [
      { code: `"number"`, right: true },
      { code: bool() ? `"object"` : `"string"` },
      { code: `"NaN"` },
      { text: "Ошибка" },
    ],
  };
}
