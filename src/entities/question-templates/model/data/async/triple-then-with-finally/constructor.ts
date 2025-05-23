export default function question({
    string,
  int,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const [a] = [int(1, 9) * 10];
  const usingCatch = minorBool();
  const [resolveOrReject, thenOrCatch] = usingCatch
    ? ["resolve", "then"]
    : ["reject", "catch"];
  const plusOrMinus = minorBool() ? "-" : "+";
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    Promise.${resolveOrReject}(${string(a)})
      .${thenOrCatch}(a => a ${plusOrMinus} ${string(a)})
      .${thenOrCatch}(a => a ${plusOrMinus} ${string(a)})
      .${thenOrCatch}(a => a ${plusOrMinus} ${string(a)})
      .finally(value => {
        console.log(value)
      })
    `,
    answers: [
      { code: string(a) },
      { code: string(a * 4 * (plusOrMinus === "-" ? -1 : 1)) },
      { code: string(undefined), right: true },
      { text: "Ошибка" },
    ],
  };
}
