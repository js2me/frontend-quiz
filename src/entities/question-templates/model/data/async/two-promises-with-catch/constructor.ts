export default function question({ string, int }: QuestionHelpers): RawQuestion {
  const values = {
    a: int(1, 9),
    b: int(10, 19),
    c: int(20, 29),
    d: int(30, 39),
  };
  const [a1, b1, c1, d1, a2, b2, c3, d4] = [
    values.a,
    values.b,
    values.c,
    values.d,
    values.a * 10,
    values.b * 10,
    values.c * 10,
    values.d * 10,
  ].map(string);
  return {
    upperText: "Что будет выведено в консоль ?",
    display: "grid",
    gridCols: 2,
    helpLinks: ["https://habr.com/ru/post/582914/"],
    code: `
Promise.resolve()
  .then(() => console.log(${a1}))
  .then(() => {
    console.log(${b1});
    throw new Error();
  })
  .catch(() => console.log(${c1}))
  .then(() => console.log(${d1}));

Promise.resolve()
  .then(() => console.log(${a2}))
  .then(() => {
    console.log(${b2});
    throw new Error();
  })
  .catch(() => console.log(${c3}))
  .then(() => console.log(${d4}));
    `,
    answers: [
      { text: "Ошибка" },
      { code: `${a1} ${b1} ${c1} ${d1} ${a2} ${b2} ${c3} ${d4}` },
      { code: `${a1} ${a2} ${b1} ${b2} ${c1} ${c3} ${d1} ${d4}`, right: true },
      { code: `${a1} ${a2} ${b1} ${b2} ${c1} ${c3}` },
      { code: `${a1} ${b1} ${c1} ${a2} ${b2} ${c3}` },
    ],
  };
}
