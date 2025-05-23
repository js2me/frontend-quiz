export default function question({
    char,
  int,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const names = { a: char(), b: char() };
  const values = { a: int(0, 9), b: int(10, 19) };
  const assignToFirst = minorBool();
  const usingStrict = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments",
      ...(usingStrict
        ? [
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",
          ]
        : []),
    ],
    code: `
function fn(${names.a}, ${names.b}) {
  ${usingStrict ? '"use strict";' : ""}
  ${assignToFirst ? names.a : names.b} = ${assignToFirst ? names.b : names.a}
  console.log(arguments[${assignToFirst ? 0 : 1}]);
}
fn(${values.a}, ${values.b});
    `,
    answers: [
      {
        code: `${values.a}`,
        right: usingStrict ? assignToFirst : !assignToFirst,
      },
      { text: "Ошибка" },
      {
        code: `${values.b}`,
        right: usingStrict ? !assignToFirst : assignToFirst,
      },
    ],
  };
}
