export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Что такое <b>CRP</b>?",
    answers: [
      {
        text: "это шаги, которые выполняет браузер, когда преобразуется HTML, CSS и JavaScript в пиксели",
        right: true,
      },
      {
        text: "это шаги, которые выполняет браузер, когда происходит HTTP request",
      },
      {
        text: "это шаги, которые выполняет DOM, когда происходит смена адресной строки браузера. Эти шаги включают в себя преобразование HTML, CSS и JS",
      },
    ],
  };
}
