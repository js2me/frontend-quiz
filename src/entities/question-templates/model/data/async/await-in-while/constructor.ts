export default function question({
    choice,
  minorBool,
  int,
  word,
  char,
  string,
}: QuestionHelpers): RawQuestion {
  const iterations = int(2, 4);
  const delayTimeout = int(1, 8) * 100;
  const varName = () => choice([char, word])();
  const delayVarName = varName();
  const fnVarName = varName();
  const anotherCase = minorBool();

  const prefixes = choice([
    { sync: string("syn"), async: string("asyn") },
    { sync: string("sy"), async: string("asy") },
    { sync: string("s"), async: string("a") },
  ]);

  const iterationsValues = Array(iterations)
    .fill(null)
    .map((_, i) => i);

  const asyncOperation = `await ${delayVarName}(() => console.log(${prefixes.async}, i));`;
  const syncOperation = `console.log(${prefixes.sync}, i);`;

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
${delayVarName} = (fn) => {
  return new Promise(res => setTimeout(() => res(fn()), ${delayTimeout}))
}
${fnVarName} = async () => {
    let i = 0;
    while (i < ${iterations}) {
        ${anotherCase ? syncOperation : asyncOperation};
        ${anotherCase ? asyncOperation : syncOperation};
        ${choice(["i++;", "++i;"])}
    }
}

${fnVarName}()
    `,
    answers: [
      { text: "Ошибка" },
      {
        code: iterationsValues
          .map((i) => `${prefixes.async} ${i} ${prefixes.sync} ${i}`)
          .join(" "),
        right: !anotherCase,
      },
      {
        code: [
          ...iterationsValues.map((i) => `${prefixes.sync} ${i}`),
          ...iterationsValues.map((i) => `${prefixes.async} ${i}`),
        ].join(" "),
      },
      {
        code: [
          ...iterationsValues.map((i) => `${prefixes.async} ${i}`),
          ...iterationsValues.map((i) => `${prefixes.sync} ${i}`),
        ].join(" "),
      },
      {
        code: iterationsValues
          .map((i) => `${prefixes.sync} ${i} ${prefixes.async} ${i}`)
          .join(" "),
        right: anotherCase,
      },
    ],
  };
}
