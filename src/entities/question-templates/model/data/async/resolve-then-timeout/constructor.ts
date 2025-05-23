export default function question({ word, minorBool }: QuestionHelpers): RawQuestion {
  const [a, b, c] = [word(), word(), word()].map((s) => `"${s}"`);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
  Promise.resolve(${b}).then(result =>
    console.info(result)
  );

  setTimeout(() => {
    console.info(${a});
  }, ${minorBool() ? -1 : 0})
  
  console.info(${c});
    `,
    answers: [
      { text: "Ошибка" },
      { code: `${a}, ${b}, ${c}` },
      { code: `${b}, ${c}, ${a}` },
      { code: `${c}, ${b}, ${a}`, right: true },
    ],
  };
}
