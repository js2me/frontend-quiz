export default function question({
  word,
    value,
  string,
  choice,
}: QuestionHelpers): RawQuestion {
  const scriptName = `${word()}.js`;
  const consoleLog = choice([
    "console.info",
    "console.log",
    "console.warn",
    "console.error",
  ]);

  return {
    upperText: "Каким будет результат выполнения этого кода",
    code: `
      <script src=${string(scriptName)} ${choice([
      "async",
      "defer",
      "",
    ])}${choice([' type="text/javascript"', ""])}>
        ${consoleLog}(${string(value())})
      </script>
    `,
    language: "html",
    helpText: `
<code>${consoleLog}()</code> не выполнится потому мы указали скрипту атрибут <code>src</code>, а это означает, что скрипт будет загружать JavaScript файл и исполнять только его, а не код внутри тега <code><script></code>
    `,
    answers: [
      {
        text: `Загрузится <code>${scriptName}</code>, и затем выполнится <code>${consoleLog}</code>`,
      },
      {
        text: `Загрузится <code>${scriptName}</code>, но <code>${consoleLog}</code> не выполнится`,
        right: true,
      },
      { text: `Выполнится только <code>${consoleLog}</code>` },
    ],
  };
}
