export default function question({ choice }: QuestionHelpers): RawQuestion {
  const void0 = "void 0";
  return {
    upperText: "Что будет выведено в консоль?",
    code: `
      console.log(${void0} === undefined)
    `,
    helpText: `
<code>void 0</code> или <code>void(0)</code> это эквивалент <code>undefined</code>\n' +
Такая конструкция используется для примитивного значения <code>undefined</code>\n' +
    `,
    answers: [
      { code: "true", right: true },
      { code: "false" },
      { text: "Ошибка" },
    ],
  };
}
