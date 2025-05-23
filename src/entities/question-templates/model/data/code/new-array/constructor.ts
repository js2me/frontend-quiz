export default function question({
    char,
  word,
  string,
  choice,
  int,
}: QuestionHelpers): RawQuestion {
  const [variable, field] = [char(), char()];
  const value = choice([word(), int(40, 150)]);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      let ${variable} = new Array();
      ${variable}[${string(field)}] = ${string(value)};
      console.log(${variable}.length);
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { code: string(0), right: true },
      { code: string(1) },
      { text: "Ошибка" },
      { code: string(null) },
      { code: string(undefined) },
    ],
  };
}
