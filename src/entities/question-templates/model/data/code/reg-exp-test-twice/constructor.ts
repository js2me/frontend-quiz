export default function question({
    word,
  int,
  choice,
  string,
  char,
}: QuestionHelpers): RawQuestion {
  const testStr = choice([word(), int(1000, 9999)]).toString();
  const regexpVarName = choice([word(), char()]);
  const strVarName = choice([word(), char()]);

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      const ${regexpVarName} = /${testStr}/g;
      const ${strVarName} = ${string(testStr)};

      console.log(${regexpVarName}.test(${strVarName}), ${regexpVarName}.test(${strVarName}))
    `,
    helpText: `
Метод <code>test()</code>, вызванный несколько раз на одном и том же экземпляре глобального регулярного выражения, будет начинать проверку с конца предыдущего сопоставления.
`,
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test",
    ],
    answers: [
      { code: `true true` },
      { code: `true false`, right: true },
      { code: `false false` },
      { code: `false true` },
    ],
  };
}
