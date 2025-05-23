export default function question({ word }: QuestionHelpers): RawQuestion {
  const [a, b, c] = [word(), word(), word()].map((s) => `"${s}"`);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
  setTimeout(() => {
    console.info(${a});
  }, 0)
  
  Promise.resolve(${b}).then(result =>
    console.info(result)
  );
  
  console.info(${c});
    `,
    answers: [
      { code: `${a}, ${b}, ${c}` },
      { code: `${b}, ${c}, ${a}` },
      { code: `${c}, ${b}, ${a}`, right: true },
    ],
  };
}
