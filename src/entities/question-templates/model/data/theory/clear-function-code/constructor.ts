export default function question({
  shuffle,
  minorBool,
  int,
  choice,
  word,
  camelCase,
}: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();
  const outerVarName = word().toUpperCase();
  const argName = choice(["data", "value", "arg", "param"]);
  const fnName = camelCase(choice(["calc", "get", "total"]), outerVarName);
  const outerVarValue = int(-1000, 1000);
  const operator = choice(["*", "-", "+", "**", "/"]);
  return {
    upperText: `Является ли эта функция «${
      anotherCase ? "нечистой" : "чистой"
    }» ?`,
    helpText: `
Это «нечистая» функция, так как состояние нашего приложения влияет на вывод нашей функции.
`,
    helpLinks: [
      "https://frontend-stuff.com/blog/pure-and-impure-functions-in-js/",
    ],
    code: `
${shuffle([
  `const ${outerVarName} = ${outerVarValue};`,
  `const ${fnName} = (${argName}) => ${outerVarName} ${operator} ${argName};`,
]).join("\n")}
    `,
    answers: [
      {
        text: "Да",
        right: anotherCase,
      },
      {
        text: "Нет",
        right: !anotherCase,
      },
    ],
  };
}
