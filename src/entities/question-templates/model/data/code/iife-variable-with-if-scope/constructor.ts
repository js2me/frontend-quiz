export default function question({
    minorBool,
  value,
  char,
  string,
}: QuestionHelpers): RawQuestion {
  const [firstValue] = [value(), value()];
  const withUseStrict = minorBool();
  const varName = char();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://doka.guide/js/closures/",
      "https://medium.com/@stasonmars/%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D1%81-%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%D0%BC-hoisting-%D0%B2-javascript-7d2d27bc51f1",
    ],
    helpText: `
    Выведется в консоль только ${string(
      firstValue
    )} потому что внутри функции создается переменная с идентификатором ${varName} и ее объявление поднимается на верх тела функции<br/>
    Такой механизм называется "всплытием"<br/>
    А присвоение значения (<code>true</code>) остается на том же месте, соответственно, тело <code>if</code> условия не выполнится. 
    `,
    code: `
${withUseStrict ? "'use strict';" : ""}
var ${varName} = ${string(firstValue)};
(function () {
    if (${varName}) {
      console.log(${varName})
    }
    var ${varName} = true;
})();
console.log(${varName});
    `,
    answers: [
      { text: "Ошибка" },
      { code: `${string(firstValue)} ${string(firstValue)}` },
      { code: `${string(true)} ${string(firstValue)}` },
      { code: `${string(true)} ${string(true)}` },
      { code: `${string(true)}` },
      { code: `${string(firstValue)}`, right: true },
    ],
  };
}
