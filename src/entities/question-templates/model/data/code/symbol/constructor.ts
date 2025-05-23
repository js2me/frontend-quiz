export default function question({
    minorBool,
  char,
  int,
}: QuestionHelpers): RawQuestion {
  const a = char();
  const anotherCase = minorBool();
  const [num1, num2] = [int(0, 10), int(11, 20)];
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
    ],
    code: `
const obj = {};
const a1 = ${anotherCase ? "new" : ""} Symbol('${a}');
const a2 = ${anotherCase ? "new" : ""} Symbol('${a}');
obj[a1] = ${num1};
obj[a2] = ${num2};
console.info(obj)
    `,
    helpText: anotherCase
      ? `
Создание символов не вызывается через ключевое слово <code>new</code>
    `
      : `
Символы можно записывать как ключи в объекте и все символы, даже если они имеют одинаковые имена, будут уникальны по отношению к другим символам
`,
    answers: [
      { text: "Ошибка", right: anotherCase },
      {
        code: `{ Symbol(${a}): ${num1}, Symbol(${a}): ${num2} }`,
        right: !anotherCase,
      },
      { code: `{ Symbol(${a}): ${num2} }` },
      { code: `{ }` },
    ],
  };
}
