export default function question({ choice }: QuestionHelpers): RawQuestion {
  return {
    upperText: "Какой из методов отсутствует в <code>Array.prototype</code>?",
    display: "grid",
    gridCols: 2,
    multiple: true,
    answers: [
      { code: "concat" },
      { code: choice(["forEach", "push"]) },
      { code: "find" },
      { code: choice(["slice", "reduce"]) },
      { code: "reverse" },
      { code: "at" },
      { code: "split", right: true },
      { code: choice(["values", "includes"]) },
    ],
  };
}
