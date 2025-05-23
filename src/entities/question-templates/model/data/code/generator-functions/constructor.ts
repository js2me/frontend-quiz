export default function question({ int, char }: QuestionHelpers): RawQuestion {
  const arg = char();
  const startInt = int(1, 30);
  const endInt = startInt * 2;
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      function* generator(${arg}) {
        yield ${arg};
        yield ${arg} * 2;
      }

      const gen = generator(${startInt});

      console.log(gen.next().value);
      console.log(gen.next().value);
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { code: `[0, ${startInt}] [${startInt}, ${endInt}]` },
      { code: `${endInt} ${endInt}` },
      { code: `${startInt} ${endInt}`, right: true },
      { code: `0 ${startInt} ${startInt} ${endInt}` },
      { text: "Ошибка" },
    ],
  };
}
