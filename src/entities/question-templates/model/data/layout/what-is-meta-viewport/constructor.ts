export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Для чего нужен этот элемент ?",
    language: "html",
    helpLinks: [
      "https://ru.hexlet.io/courses/css-adaptive/lessons/viewport/theory_unit",
    ],
    code: `
      <meta name="viewport" content="" />
    `,
    answers: [
      {
        text: "Настраивает видимую пользователю область страницы, которая доступна без прокрутки",
        right: true,
      },
      { text: "Указывает браузеру размеры содержимого HTML документа" },
      {
        text: "Указывает область сайта, которую необходимо отобразить в превью социальных сетей",
      },
      { text: "Такого тега не существует в спецификации HTML" },
    ],
  };
}
