export default function question({ majorBool, minorBool }: QuestionHelpers): RawQuestion {
  const showArgs = majorBool();
  const anotherNameForSecondInvalidCase = !showArgs || minorBool();

  return {
    upperText: "Можно ли остановить <code>requestAnimationFrame</code> ?",
    answers: [
      {
        text: `Да, с помощью <code>cancelAnimationFrame${
          showArgs ? "(requestID)" : ""
        }</code>`,
        right: true,
      },
      {
        text: `Да, с помощью <code>stopAnimationFrame${
          showArgs ? "(requestID)" : ""
        }</code>`,
      },
      {
        text: `Да, с помощью <code>${
          anotherNameForSecondInvalidCase
            ? "preventAnimationFrame"
            : "stopAnimationFrame"
        }${showArgs ? "(callback)" : ""}</code>`,
      },
      { text: "Нет, нельзя" },
    ],
  };
}
