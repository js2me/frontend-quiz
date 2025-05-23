export default function question({
    word,
  value,
  choice,
  string,
  camelCase,
}: QuestionHelpers): RawQuestion {
  const answerText = value();
  const varName = word();
  const fnName = camelCase(choice(["create", "call", "set"]), varName);

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      function ${fnName}() {
        ${varName} = ${string(answerText)};

        if (false) {
          var ${varName};
        }
      }
      ${fnName}();

      console.info(${varName})
    `,
    answers: [
      { code: string(answerText) },
      { text: "Ошибка" },
      { code: string(undefined), right: true },
    ],
  };
}
