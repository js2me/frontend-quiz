export default function question({ word, htmlTag, value }: QuestionHelpers): RawQuestion {
  const tags = { a: htmlTag(), b: htmlTag(), c: htmlTag() };
  const logs = { a: word(), b: word(), c: word() };
  const val = value();
  return {
    upperText: `Какой элемент будет в <code>event.target</code> после клика на <code>${val}</code>?`,
    language: "html",
    helpText: `
<code>event</code> это глобальная переменная, в которую записывается текущее исполняющееся событие
Целью события является самый глубокий вложенный элемент. Остановить распространение событий можно с помощью <code>event.stopPropagation()</code>
`,
    code: `
    <${tags.a} onclick="console.log('${logs.a}')">
      <${tags.b} onclick="console.log('${logs.b}')">
        <${tags.c} onclick="console.log('${logs.c}')">
          ${val}
        </${tags.c}>
      </${tags.b}>
    </${tags.a}>
    `,
    answers: [
      { text: "Ошибка" },
      { code: `<${tags.a} />`, language: "html" },
      { code: `<${tags.b} />`, language: "html" },
      { code: `<${tags.c} />`, language: "html", right: true },
    ],
  };
}
