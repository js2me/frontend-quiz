export default function question({
    value,
  string,
  word,
  pascalCase,
}: QuestionHelpers): RawQuestion {
  const FnName = pascalCase(word());
  const logA = value();

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      const ${FnName} = () => {
        console.log(${string(logA)})
      }
      console.log(new ${FnName}())
    `,
    helpText: `
Стрелочные функции не могут быть функциями-конструкторами и у них нет поля <code>prototype</code>
    `,
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
    ],
    answers: [
      { text: `Ошибка`, right: true },
      { code: `${FnName} {}` },
      { code: `${string(logA)} ${FnName} {}` },
      { code: `${string(logA)}` },
    ],
  };
}
