export default function question({
    choice,
  value,
  string,
  varName,
}: QuestionHelpers): RawQuestion {
  const a = varName();
  const varValue = value();
  const varNewValue = value();

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    ${choice(['"use strict";', ""])}
    const ${a} = ${string(varValue)}
    ${a} = ${string(varNewValue)}
    console.log(${a})
    `,
    answers: [
      { code: string(varValue) },
      { code: string(varNewValue) },
      { text: "Ошибка", right: true },
    ],
  };
}
