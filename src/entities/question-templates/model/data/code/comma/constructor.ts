export default function question({ char }: QuestionHelpers): RawQuestion {
  const [a, b, c, d] = [char(), char(), char(), char()];
  const varName = char();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      const ${varName} = ('${a}' + '${b}' + '${d}', '${c}' + '${d}')
      console.log(${varName})
    `,
    answers: [
      { code: `'${a + b + d}'` },
      { code: `'${c + d}'`, right: true },
      { text: "Ошибка" },
      { code: `'${a + b + d}', '${c + d}'` },
    ],
  };
}
