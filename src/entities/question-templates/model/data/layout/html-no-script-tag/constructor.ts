export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "[HTML] Как проверить включён ли JavaScript в браузере?",
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Web/HTML/Element/noscript",
    ],
    answers: [
      { text: "С помощью тега <code><noscript></code>", right: true },
      { text: "С помощью тега <code><nocode></code>" },
      { text: "С помощью мета тега c атрибутом <code>script</code>" },
      { text: "С помощью тега <code><!doctype></code>" },
    ],
  };
}
