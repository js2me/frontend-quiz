export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "[HTML] Что такое семантическая вёрстка ?",
    helpLinks: ["https://htmlacademy.ru/blog/articles/semantics"],
    // display: "grid",
    // gridCols: 2,
    answers: [
      {
        text: "Использование HTML-тегов в соответствии с их предназначением",
        right: true,
      },
      {
        text: "Использование HTML-тегов в соответствии с новой спецификацией HTML",
      },
      {
        text: "Особенность вёрстки писем электронной почты",
      },
      { text: "Использованием атомарных HTML контент блоков" },
    ],
  };
}
