export default function question({
  choice,
  shuffle,
  minorBool,
  word,
  char,
}: QuestionHelpers): RawQuestion {
  const someConstruct = `[].some(() => {})`;
  const everyConstruct = `[].every(() => {})`;

  if (minorBool()) {
    const someVarName = shuffle([word, char])[0]();
    const everyVarName = shuffle([word, char])[0]();

    const vars = shuffle([
      `const ${someVarName} = ${someConstruct}`,
      `const ${everyVarName} = ${everyConstruct}`,
    ]);

    const log = choice([
      `console.log(${someVarName}, ${everyVarName})`,
      `console.log(${everyVarName}, ${someVarName})`,
    ]);

    const isFirstSomeBlock = log.startsWith(`console.log(${someVarName},`);

    return {
      upperText: "Что будет выведено в консоль?",
      lowerText: "",
      code: `
          ${vars.join("\n")}
          ${log}
        `,
      answers: [
        { code: "true false", right: !isFirstSomeBlock },
        { code: "false true", right: isFirstSomeBlock },
      ],
    };
  }

  const blocks = shuffle([
    `console.log(${someConstruct})`,
    `console.log(${everyConstruct})`,
  ]);

  const isFirstSomeBlock = blocks[0].includes("some");

  return {
    upperText: "Что будет выведено в консоль?",
    lowerText: "",
    code: `
      ${blocks.join("\n")}
    `,
    answers: [
      { code: "true false", right: !isFirstSomeBlock },
      { code: "false true", right: isFirstSomeBlock },
    ],
  };
}
