export default function question(): RawQuestion {
  return {
    upperText: "Что означает значение <code>undefined</code>?",
    answers: [
      {
        text: `Ссылка на несуществующий объект`,
      },
      {
        text: `Ошибочный результат вычислений`,
      },
      {
        text: `Что значение не было присвоено`,
        right: true,
      },
    ],
  };
}
