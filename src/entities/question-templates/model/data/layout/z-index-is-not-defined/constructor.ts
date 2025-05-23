export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText:
      "Если свойство <code>z-index</code> не определено, какой элемент будет находиться визуально наверху?",
    answers: [
      { text: "Тот, который расположен в коде ниже", right: true },
      { text: "Тот, который расположен в коде выше" },
    ],
  };
}
