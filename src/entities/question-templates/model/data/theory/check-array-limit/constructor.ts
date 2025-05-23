export default function question({ minorBool, int, string }: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();
  const size = int(5, 8);
  const arr = Array(size)
    .fill(null)
    .map((_, i) => i + 1);

  return {
    upperText: `Как убедиться что индекс ${
      anotherCase ? "" : "НЕ "
    }выходит за верхнюю границу массива?`,
    code: `
      const items = ${string(arr)}
      const index = ${arr.length + 1}
    `,
    answers: [
      {
        text: `<code>index < items.length${anotherCase ? " - 1" : ""}</code>`,
        right: !anotherCase,
      },
      {
        text: `<code>index > items.length${anotherCase ? " - 1" : ""}</code>`,
        right: anotherCase,
      },
      {
        text: `<code>index <= items.length${anotherCase ? " - 1" : ""}</code>`,
      },
    ],
  };
}
