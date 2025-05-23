export default function question({ int }: QuestionHelpers): RawQuestion {
  const num = int(1, 100);

  return {
    upperText: `Как представить число <code>${num}</code> в двоичной системе счисления ?`,
    display: "grid",
    gridCols: 2,
    answers: [
      { code: `(${num}).toString(2)`, right: true },
      { code: `(${num}).toBinary()` },
      { code: `(${num}).toSystem(2)` },
      { code: `(${num}).toBase(2)` },
      { code: `(${num}).toNumber(2)` },
      { code: `(${num}).numerate(2)` },
    ],
  };
}
