export default function question({
    minorBool,
  word,
  int,
  choice,
  string,
  camelCase,
}: QuestionHelpers): RawQuestion {
  const propName = word();
  const anotherCase = minorBool();
  const fnName = camelCase("get", propName);
  const value = choice([int(40, 150), word()]);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      function ${fnName}() {
        ${anotherCase ? `` : `"use strict";`}
        ${propName} = ${string(value)};
        console.log(${propName});
      }

      ${fnName}();
    `,
    helpText: `
Без режима <code>strict</code> данный код не вызовет никаких проблем, мы просто запишем в <code>window</code> в поле <code>${propName}</code> значение <code>${string(
      value
    )}</code>

Однако в режиме <code>strict</code> будет ошибка:
<code>Uncaught ReferenceError: ${propName} is not defined</code>
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Ошибка", right: !anotherCase },
      { code: "undefined" },
      { code: string(value), right: anotherCase },
    ],
  };
}
