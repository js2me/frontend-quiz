export default function question({ word }: QuestionHelpers): RawQuestion {
  const [a, b, c] = [word(), word(), word()].map((s) => `"${s}"`);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
  const promise = new Promise((resolve) => {
    console.info(${b});
    resolve(${b})
  })

  setTimeout(() => {
    console.info(${a});
  }, 0)
  
  console.info(${c});
  
  promise.then(console.log)
    `,
    answers: [
      { text: "Ошибка" },
      { code: `${b}, ${c}, ${b}, ${a}`, right: true },
      { code: `${b}, ${c}, ${a}, ${b}` },
      { code: `${a}, ${c}, ${b}, ${b}` },
      { code: `${c}, ${b}, ${b}, ${a}` },
    ],
  };
}
