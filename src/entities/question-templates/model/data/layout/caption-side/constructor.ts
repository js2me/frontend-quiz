export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: `[CSS] Что делает свойство <code>caption-side</code>?`,
    display: "grid",
    gridCols: 2,
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side",
    ],
    answers: [
      { text: "Определяет расстояние от плоскости экрана" },
      { text: "Задаёт координаты точки, куда смотрит наблюдатель" },
      {
        text: "Устанавливает тип кавычек, который применяется в тексте документа",
      },
      { text: "Определяет положение заголовка таблицы", right: true },
    ],
  };
}
