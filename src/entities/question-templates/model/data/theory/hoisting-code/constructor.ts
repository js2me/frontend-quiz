export default function question({
    word,
  string,
  int,
  varName,
  choice,
  camelCase,
  value,
  minorBool,
  majorBool,
  bool,
  createStringFunction,
  callStringFunction,
}: QuestionHelpers): RawQuestion {
  const fnIsHoisted = bool();
  const a = varName();
  const b = varName();
  const wordArg = varName();
  const fnName = camelCase(
    `${choice(["say", "call", "fn", "run"])}_${wordArg}`
  );
  const wordValue = word();
  const useFunctionExpression = minorBool();

  return {
    upperText: `Можно ли сказать что эта функция "поднята" ?`,
    helpLinks: ["https://developer.mozilla.org/ru/docs/Glossary/Hoisting"],
    code: `
const ${a} = ${string(value())};
const ${b} = ${string(value())};

${createStringFunction({
  name: fnName,
  type: fnIsHoisted
    ? "function-declaration"
    : useFunctionExpression
    ? "function-expression"
    : "arrow",
  args: [wordArg],
  body: `
console.log("Say: " + ${wordArg} + ${a} + ${b});
`,
})}

${callStringFunction({ name: fnName, args: [string(wordValue)] })}
    `,
    answers: [
      {
        text: `Да`,
        right: fnIsHoisted,
      },
      {
        text: `Нет`,
        right: !fnIsHoisted,
      },
    ],
    helpText:
      fnIsHoisted
        ? `Функция <code>${fnName}</code>, объявленная через "function declaration" автоматически поднимается вверх своей области видимости. В нашем случае мы можем вызвать эту функцию даже перед объявлением переменной <code>${a}</code>`
        : `Функция <code>${fnName}</code>, объявленная ${
            useFunctionExpression
              ? `через "function expression"`
              : "как стрелочная"
          } не может быть "поднята"`,
  };
}
