export default function question({
    char,
  word,
  string,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const [a, b] = [char(), char()];
  const text = word();
  const failed = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpText: `
<h3>без режима <code>"use strict";</code></h3>
будет выведено в консоль <code>false true</code> потому что в первом случае у нас переменная объявлена через ключевое слово <code>const</code> и она не привязывается к объекту window,
в отличие от переменной <code>${b}</code> которая привязывается к объекту window

<h3>с режимом <code>"use strict";</code></h3>
Попытка удалить какие-либо некачественные идентификаторы будут вызывать ошибку
<code>Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.</code>
    `,
    code: `
      ${failed ? `"use strict";` : ""}
      const ${a} = ${string(text)};
      ${b} = true;

      console.log(delete ${a});
      console.log(delete ${b});
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { code: "false true", right: !failed },
      { code: `${string(text)} true` },
      { code: "true true" },
      { code: "undefined undefined" },
      { code: "true false" },
      { text: "Ошибка", right: failed },
    ],
  };
}
