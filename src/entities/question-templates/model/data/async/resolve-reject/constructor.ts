export default function question({ word, minorBool }: QuestionHelpers): RawQuestion {
  const [a, b, c] = [word(), word(), word()];
  const anotherCase = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    display: "grid",
    gridCols: 2,
    code: `
  new Promise((resolve, reject) => {
    ${anotherCase ? "reject" : "resolve"}("${a}");
    ${anotherCase ? "resolve" : "reject"}("${b}");
    return "${c}";
  })
    .then(a => console.log(a))
    .catch(b => console.log(b))
    `,
    answers: [
      { code: `"${a}"`, right: true },
      { code: `"${b}"` },
      { code: `"${c}"` },
      { text: "Ничего" },
      { text: "Ошибка" },
    ],
  };
}
