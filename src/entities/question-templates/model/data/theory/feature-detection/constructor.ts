export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Что такое <b>feature detection</b> ?",
    answers: [
      { text: "Проверка на поддержку технологии браузером", right: true },
      {
        text: "Подход разработки, позволяющий включать/выключать части веб-системы",
      },
      { text: "Механизм отключения определенных технологий браузера" },
    ],
  };
}
