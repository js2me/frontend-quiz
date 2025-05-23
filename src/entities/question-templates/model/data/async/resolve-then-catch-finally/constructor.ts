export default function question({ word, bool }: QuestionHelpers): RawQuestion {
  const [a, b, c] = [word(), word(), word()];
  const anotherCase = bool();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    Promise.resolve("${a}")
      .then(result => { ${anotherCase ? "return" : "throw"} result })
      .then(result => console.info(\`then1: \${result}\`))
      .catch(error => {
        console.info(\`catch: \${error}\`)
        return "${b}"
      })
      .finally(result => {
        console.info(\`finally: \${result}\`)
        return "${c}"
      })
      .then(result => {
        console.info(\`then2: \${result}\`)
      })
    `,
    answers: [
      {
        code: `"catch: ${a}", "finally: undefined", "then2: ${b}"`,
        right: !anotherCase,
      },
      { text: "Ошибка" },
      { code: `"catch: ${a}"` },
      { code: `"catch: ${a}", "finally: undefined"` },
      {
        code: anotherCase
          ? `"then1: ${a}", "finally: undefined", "then: undefined"`
          : `"catch: ${a}", "finally: ${b}"`,
        right: anotherCase,
      },
      { code: `"then1: ${a}", "finally: ${a}", "then: ${c}"` },
      { code: `"catch: ${a}", "finally: ${b}", "then2: ${c}"` },
    ],
  };
}
