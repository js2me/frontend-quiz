export default function question({ string, word }: QuestionHelpers): RawQuestion {
  const [a, b, c, d] = [word(), word(), word(), word()];
  return {
    upperText: "Что будет выведено в консоль ?",
    gridCols: 2,
    display: "grid",
    code: `
      new Promise(resolve => {
        resolve(${string(a)});
        return ${string(d)}
      })
        .then(a => {
          console.log(a);
          return ${string(b)};
        })
        .finally(a => {
          console.log(a)
          return ${string(c)};
        })
        .then(a => {
          console.log(a);
        })
    `,
    answers: [
      { code: `${string(a)} ${string(undefined)} ${string(b)}`, right: true },
      { code: `${string(a)} ${string(undefined)} ${string(c)}` },
      { code: `${string(a)} ${string(b)} ${string(b)}` },
      { code: `${string(d)} ${string(b)} ${string(b)}` },
    ],
  };
}
