export default function question(): RawQuestion {
  return {
    upperText:
      "Как узнать, сколько аргументов ожидает получить функция <code>sum</code>?",
    code: `
    const sum = (a, b, c) => console.log(a,b,c);
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { code: "sum.arguments.length" },
      { code: "sum.arguments" },
      { code: "sum.caller.length" },
      { code: "sum.size" },
      { text: "Никак" },
      { code: "sum.length", right: true },
    ],
  };
}
