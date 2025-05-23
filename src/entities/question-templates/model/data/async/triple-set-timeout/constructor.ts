export default function question({ string, value }: QuestionHelpers): RawQuestion {
  const [a, b, c] = [value(), value(), value()].map(string);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    setTimeout(() => console.info(${a}), 0)
    setTimeout(() => console.info(${b}), -1)
    setTimeout(() => console.info(${c}), -2)
    `,
    answers: [
      { code: `${a}, ${b}, ${c}`, right: true },
      { code: `${c}, ${b}, ${a}` },
      { code: `${a}` },
      { text: "Ошибка" },
    ],
  };
}
