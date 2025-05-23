export default function question({
    int,
  bool,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const a = int(10, 40);
  const usingClosure = minorBool();
  const usingVar = bool();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
  for (${usingVar ? "var" : "let"} x = 0; x < ${a}; x++) {
    setTimeout(${
      usingClosure
        ? "((x) => () => console.info(x))(x)"
        : "() => console.info(x)"
    }, 0)
  }
    `,
    answers: (helpers) => {
      const outputFromTo = usingClosure || !usingVar;
      return [
        { text: `от ${0} до ${a - 1}`, right: outputFromTo },
        {
          text: `${a} раз по ${a}`,
          right: !outputFromTo,
        },
        { text: `${a} раз по ${0}` },
        { text: "Ничего" },
      ];
    },
  };
}
