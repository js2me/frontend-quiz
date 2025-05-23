export default function question({
    camelCase,
  word,
  string,
  minorBool,
  choice,
}: QuestionHelpers): RawQuestion {
  const str = word();
  const [varName, funcName] = [
    camelCase("say", str),
    camelCase("say", str, "func"),
  ];
  const anotherCase = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://learn.javascript.ru/function-object",
      "https://learn.javascript.ru/function-object#named-function-expression",
    ],
    helpText:
      anotherCase
        ? `
Такое объявление функции <code>let ${varName} = function ${funcName}() {}</code> валидно, поэтому код выполнится успешно
      `
        : `
Доступ к именованному функциональному выражению, объявленному в переменной <code>${varName}</code>, возможен только внутри самой этой функции
          `,
    code: `
${choice(["", '"use strict";'])}
let ${varName} = function ${funcName}() {
    console.log(${string(str)})
};

${anotherCase ? varName : funcName}();
    `,
    answers: [
      { code: string(str), right: anotherCase },
      { text: "Ничего" },
      { text: "Ошибка", right: !anotherCase },
    ],
  };
}
