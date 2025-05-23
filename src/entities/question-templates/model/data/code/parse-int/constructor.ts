export default function question({
  word,
  int,
  string,
  minorBool,
  choice,
}: QuestionHelpers): RawQuestion {
  const varName = word();
  const zeroParsedNum = int(8, 9);
  const okParsedNum = int(1, 7);
  const usingMinus = minorBool();

  const pads = choice([2, 4]);
  const zeroStrNum = zeroParsedNum.toString().padStart(pads, "0");
  const okStrNum = okParsedNum.toString().padStart(pads, "0");

  return {
    upperText: "Что будет выведено в консоль?",
    code: `
      const ${varName} = parseInt(${string(zeroStrNum)}, 8) ${
      usingMinus ? "-" : "+"
    } parseInt(${string(okStrNum)}, 8)
      console.log(${varName})
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { code: "0" },
      {
        code: string(usingMinus ? 0 - okParsedNum : 0 + okParsedNum),
        right: true,
      },
      {
        code: string(
          usingMinus ? zeroParsedNum - okParsedNum : zeroParsedNum + okParsedNum
        ),
      },
      { code: string(zeroParsedNum) },
      { code: string(NaN) },
      { text: "Ошибка" },
    ],
  };
}
