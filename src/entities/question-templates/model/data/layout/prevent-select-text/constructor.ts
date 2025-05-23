export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Как предотвратить выделение текста на странице?",
    answers: [
      { code: "pointer-events: none;", language: "css" },
      { code: "user-select: none;", language: "css", right: true },
      { text: "Любой из них" },
      { text: "Лишь оба одновременно" },
    ],
  };
}
