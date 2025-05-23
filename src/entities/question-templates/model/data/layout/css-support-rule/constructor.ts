export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "[CSS] Как проверить поддерживает ли браузер CSS технологию ?",
    helpLinks: ["https://habr.com/ru/post/178021/"],
    answers: [
      { text: "С помощью правила <code>@supports</code>", right: true },
      { text: "С помощью правила <code>@exists</code>" },
      { text: "С помощью правила <code>@has</code>" },
      { text: "Ничего из перечисленного" },
    ],
  };
}
