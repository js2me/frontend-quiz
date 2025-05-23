export default function question({
  word,
  string,
  htmlTag,
  value,
}: QuestionHelpers): RawQuestion {
  const tags = { a: htmlTag(), b: htmlTag(), c: htmlTag() };
  const logs = { a: word(), b: word(), c: word() };
  const val = value();

  return {
    upperText: `Что будет выведено в консоль после клика на <code>${val}</code> ?`,
    language: "html",
    helpText: `
После клика по <code>${tags.c}</code> будет выведено <code>${logs.c}</code>, <code>${logs.b}</code> и <code>${logs.a}</code>.
В цикле жизни события есть три фазы: захват, цель и всплытие.
По умолчанию обработчики событий выполняются на фазе всплытия (если не установлен параметр useCapture в true).
Всплытие идет с самого глубокого элемента вверх.
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
      { code: `${string(logs.a)}` },
      { code: `${string(logs.b)}` },
      { code: `${string(logs.c)}` },
      { code: `${string(logs.a)} ${string(logs.b)} ${string(logs.c)}` },
      {
        code: `${string(logs.c)} ${string(logs.b)} ${string(logs.a)}`,
        right: true,
      },
    ],
  };
}
