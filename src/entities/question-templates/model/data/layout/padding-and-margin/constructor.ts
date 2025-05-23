export default function question({ int, bool }: QuestionHelpers): RawQuestion {
  const offset = `${int(2, 10)}px`;
  const marginOffset = bool();

  return {
    upperText: `Как задать ${
      marginOffset ? "внешний" : "внутренний"
    } отступ <code>${offset}</code> у элемента?`,
    display: "grid",
    gridCols: 2,
    answers: [
      { code: `padding: ${offset}`, right: !marginOffset },
      { code: `margin: ${offset}`, right: marginOffset },
      { code: `offset: ${offset}` },
      { code: `spacing: ${offset}` },
      { code: `inset: ${offset}` },
    ],
  };
}
