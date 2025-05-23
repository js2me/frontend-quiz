export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "[CSS] Для чего нужно <code>will-change</code> свойство ?",
    helpLinks: ["https://dev.opera.com/articles/ru/css-will-change-property/"],
    answers: [
      {
        text: "Позволяет заранее уведомить браузер об изменениях",
        right: true,
      },
      { text: "Позволяет изменять позицию скролла в элементе" },
      {
        text: "Позволяет подсказывать браузеру какая ориентация экрана предположительно будет выбрана пользователем",
      },
      {
        text: "Позволяет применять стили к свойствам с определенной задержкой",
      },
    ],
  };
}
