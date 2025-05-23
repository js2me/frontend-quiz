export default function question({ word, bool }: QuestionHelpers): RawQuestion {
  const [a, b, c, d] = [word(), word(), word(), word()];
  const failed = bool();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const a = Promise.resolve("${a}").then(a => {
      console.log(a);
      return a;
    })
    const b = Promise.resolve("${b}").then(b => {
      console.log(b);
      return b;
    })
    const c = Promise.resolve("${c}").then(c => {
      console.log(c);
      return c;
    })
    
    const promiseAll = Promise.all(${failed ? `a, b, c` : `[a, b, c]`})
    
    promiseAll
      .then(result => console.log(\`result: \${result.join(',')}\`))
      .catch(() => console.log("${d}"));
    `,
    answers: [
      {
        code: `"${a}", "${b}", "${c}", "result: ${[a, b, c].join(",")}"`,
        right: !failed,
      },
      { code: `"${a}", "${b}", "${c}", "${d}"`, right: failed },
      { code: `"result: ${[a, b, c].join(",")}", "${a}", "${b}", "${c}"` },
      { text: "Ошибка" },
    ],
  };
}
