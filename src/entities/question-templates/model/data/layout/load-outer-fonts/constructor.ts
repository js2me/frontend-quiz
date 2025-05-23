export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "[CSS] Какое правило позволяет подключать сторонние шрифты?",
    helpText: `
Правило <code>@font-face</code> позволяет подключать разнообразные пользовательские шрифты. Браузер загружает шрифты в кэш и использует их для оформления текста на странице.
`,
    helpLinks: ["https://html5book.ru/pravilo-font-face/"],
    answers: [
      { code: "@font-rule" },
      { code: "@font-face", right: true },
      { code: "@font" },
      { code: "@include" },
    ],
  };
}
