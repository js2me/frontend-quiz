export default function question({
    char,
  int,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const names = { a: char(), b: char(), c: char() };
  const values = { a: int(0, 9), b: int(10, 19), c: int(20, 30) };
  const anotherCase = minorBool();
  const strictModeEnabled = minorBool();

  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments",
    ],
    code: `
${strictModeEnabled ? '"use strict";' : ""}

function fn(${names.a}, ${names.b}, ${names.c}) {
  arguments[${anotherCase ? 0 : 2}] = arguments[${anotherCase ? 2 : 0}];
  console.log(${anotherCase ? names.a : names.c});
}
fn(${values.a}, ${values.b}, ${values.c});
    `,
    answers: [
      {
        code: `${values.a}`,
        right: strictModeEnabled ? anotherCase : !anotherCase,
      },
      { text: "Ошибка" },
      {
        code: `${values.c}`,
        right: strictModeEnabled ? !anotherCase : anotherCase,
      },
    ],
  };
}
