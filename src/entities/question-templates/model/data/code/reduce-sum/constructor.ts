export default function question({
    int,
  bool,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const [boolA, boolD] = bool() ? [true, false] : [false, true];
  const [intA, stringC] = [int(0, 4), int(5, 10).toString()];
  const anotherCase = minorBool();
  const extraObj = minorBool()
    ? {
        a: int(60, 120),
        valueOf() {
          return this.a;
        },
      }
    : null;
  const calcAnswer = (...args: any[]) =>
    args.reduce((a, b) => (b === null ? a : a + b), 0);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    
    ${
      extraObj
        ? `
    const obj = {
      a: ${extraObj.a},
      valueOf() {
        return this.a;
      },
    }
    `
        : ""
    }
    
    const sum = [${anotherCase ? `"${stringC}"` : intA}, ${boolA}, ${
      anotherCase ? intA : `"${stringC}"`
    }, ${boolD}].reduce((a,b) => a + b, 0)
    
    console.log(sum${extraObj ? " + obj" : ""})
    `,
    answers: [
      { code: "NaN" },
      { code: "undefined" },
      { text: "Ошибка" },
      {
        code: `"${
          anotherCase
            ? calcAnswer(stringC, boolA, intA, boolD, extraObj)
            : calcAnswer(intA, boolA, stringC, boolD, extraObj)
        }"`,
        right: true,
      },
      {
        code: `"${
          anotherCase
            ? calcAnswer(+stringC, boolA.toString(), intA, boolD, extraObj)
            : calcAnswer(intA, boolA.toString(), stringC, boolD, extraObj)
        }"`,
      },
      {
        code: `${
          anotherCase
            ? calcAnswer(+stringC, +boolA, intA, +boolD, extraObj)
            : calcAnswer(intA, +boolA, +stringC, +boolD, extraObj)
        }`,
      },
    ],
  };
}
