export default function question({
    word,
  string,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const a = word();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    ${minorBool() ? '"use strict";' : ""}
    if (function ${a}(){}) {
      console.log(${a})
    }
    `,
    helpText: `
Будет ошибка:
<code>Uncaught ReferenceError: ${a} is not defined</code>   
Как в режиме <code>"use strict";</code>, так и без него.
`,
    answers: [
      { code: string(undefined) },
      { code: string(`${a}(){}`) },
      { code: string("object") },
      { text: "Ошибка", right: true },
    ],
  };
}
