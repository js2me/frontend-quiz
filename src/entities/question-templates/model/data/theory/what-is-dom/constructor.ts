export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Что такое DOM ?",
    answers: [
      { text: "Это программный интерфейс к HTML-документам", right: true },
      { text: "Это программный интерфейс к браузерному API" },
      {
        text: "Это подход разработки интерфейсов, ориентированный на наличие дизайн-архитектуры",
      },
      { text: "Это программный интерфейс к CSS-документам" },
      { text: "Это программный интерфейс к JS-документам" },
    ],
  };
}
