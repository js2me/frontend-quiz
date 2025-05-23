export default function question({ word, char, string }: QuestionHelpers): RawQuestion {
  const args = { a: char(), b: char(), c: char() };
  const [a, b, c] = [word(), word(), word()].map(string);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const fn = (${args.a},${args.b},${args.c}) => console.info(${args.a},${args.b},${args.c})
    
    const result = fn
      .bind(null)
      .bind(null, ${a})
      .apply(null, [${a}, ${b}, ${c}]);

    console.log(result);
    `,
    answers: [
      { text: "Ошибка" },
      { code: `${a} ${b} ${c}` },
      { code: `${a} undefined undefined` },
      { code: `${a} ${a} ${b}`, right: true },
      { code: `${a} ${a} ${b} ${c}` },
    ],
  };
}
