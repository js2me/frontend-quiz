export default function question({ string, value }: QuestionHelpers): RawQuestion {
  const [a, b, c, d] = [value(), value(), value(), value()].map(string);
  return {
    upperText: "Что будет выведено в консоль ?",
    display: "grid",
    gridCols: 2,
    helpLinks: ["https://habr.com/ru/post/582914/"],
    code: `
Promise.resolve()
    .then(() => console.log(${a}))
    .then(() => console.log(${b}))

Promise.resolve()
    .then(() => console.log(${c}))
    .then(() => console.log(${d}))
    `,
    answers: [
      { code: `${a} ${b} ${c} ${d}` },
      { code: `${a} ${c} ${b} ${d}`, right: true },
      { code: `${a} ${c} ${d} ${b}` },
      { code: `${a} ${d} ${b} ${c}` },
      { text: "Ошибка" },
    ],
  };
}
