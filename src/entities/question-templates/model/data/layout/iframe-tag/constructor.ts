export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "[HTML] Что делает тег <code><iframe></code>?",
    display: "grid",
    gridCols: 2,
    answers: [
      {
        text: "Встраивает другой HTML-документ в текущий",
        right: true,
      },
      {
        text: "Позволяет создать модальное окно на текущей веб-странице",
      },
      {
        text: "Встраивает видео в текующий HTML-документ",
      },
      {
        text: "Позволяет запускать JavaScript код в веб-воркере",
      },
    ],
  };
}
