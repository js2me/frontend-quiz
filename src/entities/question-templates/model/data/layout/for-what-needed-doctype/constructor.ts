export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "[HTML] Для чего нужен <code>doctype</code> ?",
    helpLinks: ["http://htmlbook.ru/html/%21doctype"],
    answers: [
      {
        text: "Чтобы браузер понимал, как следует обрабатывать веб-страницу",
        right: true,
      },
      {
        text: "Чтобы браузер получал более подробную информацию о хостинге сайта",
      },
      {
        text: "Чтобы браузер мог работать с <code>JSX</code> разметкой в <code>HTML</code> файле",
      },
      {
        text: "Чтобы браузер понимал, какие теги имеют повышенный приоритет интерпретации",
      },
    ],
  };
}
