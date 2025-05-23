export default function question({ choice }: QuestionHelpers): RawQuestion {
  return {
    upperText:
      "Как работает <code><script></code> с атрибутом <code>async</code>?",
    code: `
      <script async src="/script.js"></script>
    `,
    language: "html",
    multiple: true,
    helpLinks: ["https://learn.javascript.ru/script-async-defer#async"],
    answers: [
      {
        text: choice([
          "Страница не будет ждать этот скрипт",
          "Скрипт не будет блокировать отрисовку страницы",
        ]),
        right: true,
      },
      {
        text: "Событие <code>DOMContentLoaded</code> не будет ждать этот скрипт",
        right: true,
      },
      {
        text: choice([
          "Остальные скрипты не будут ждать этот скрипт",
          "Этот скрипт не будут ждать остальные скрипты",
        ]),
        right: true,
      },
      {
        text: "Этот скрипт будет запущен в порядке с другими скриптами с <code>async</code>",
      },
      {
        text: "Этот скрипт будет запущен, когда <code>DOM</code> дерево будет полностью построено",
      },
    ],
  };
}
