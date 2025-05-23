export default function question({
    string,
  char,
  minorBool,
  value,
}: QuestionHelpers): RawQuestion {
  const [a, b] = [char(), char()];
  const values = { a: value(), b: value() };
  const anotherCase = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: () => {
      return `
      ${anotherCase ? '"use strict";' : ""}
      var arr = [${string(values.a)}, ${string(values.b)}];
      [${a},${b}] = arr;
      console.log(${a});
      `;
    },
    answers: [
      { code: string(values.a), right: !anotherCase },
      { code: string(values.b) },
      { text: "Ошибка", right: anotherCase },
      { code: "undefined" },
    ],
  };
}
