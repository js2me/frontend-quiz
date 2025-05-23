export default function question({
    minorBool,
  value,
  char,
  string,
}: QuestionHelpers): RawQuestion {
  const [firstValue, secondValue] = [value(), value()];
  const withUseStrict = minorBool();
  const varName = char();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: ["https://doka.guide/js/closures/"],
    helpText: `
Внутри функции создастся своя область видимости и в нее будет записана переменная <code>${varName}</code> со значением <code>${string(
      secondValue
    )}</code><br/>
После её вызова, при вызове последнего <code>console.log</code> мы будем уже ссылаться на глобальную область видимости к идентификатору <code>${varName}</code> глобальной области видимости<br/>
В который записано значение <code>${string(firstValue)}</code>
    `,
    code: `
${withUseStrict ? "'use strict';" : ""}
var ${varName} = ${string(firstValue)};
(function () {
    var ${varName} = ${string(secondValue)};
    console.log(${varName})
})();
console.log(${varName});
    `,
    answers: [
      { text: "Ошибка" },
      { code: `${string(secondValue)} ${string(firstValue)}`, right: true },
      { code: `${string(firstValue)} ${string(secondValue)}` },
      { code: `${string(firstValue)} ${string(firstValue)}` },
      { code: `${string(secondValue)} ${string(secondValue)}` },
    ],
  };
}
