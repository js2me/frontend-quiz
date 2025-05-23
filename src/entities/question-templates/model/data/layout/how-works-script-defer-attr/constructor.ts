export default function question({ choice }: QuestionHelpers): RawQuestion {
  return {
    upperText:
      "Как работает <code><script></code> с атрибутом <code>defer</code>?",
    code: `
      <script defer src="/script.js"></script>
    `,
    language: "html",
    multiple: true,
    helpLinks: ["https://learn.javascript.ru/script-async-defer#defer"],
    answers: [
      {
        text: choice([
          "Страница не будет ждать этот скрипт",
          "Скрипт не будет блокировать отрисовку страницы",
        ]),
        right: true,
      },
      {
        text: "Событие <code>DOMContentLoaded</code> будет ждать этот скрипт",
        right: true,
      },
      {
        text: "Этот скрипт будет запущен в порядке с другими скриптами с <code>defer</code>",
        right: true,
      },
      {
        text: "Этот скрипт не будет ждать другие <code>defer</code> скрипты",
      },
      {
        text: "Этот скрипт будет запущен, когда <code>DOM</code> дерево будет полностью построено",
        right: true,
      },
    ],
  };
}
