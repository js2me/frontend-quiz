export default function question(): RawQuestion {
  return {
    upperText: "Что такое <b>Promise</b>?",
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
    ],
    answers: [
      {
        text: `
        Объект который содержит будущее значение асинхронной операции.
        `,
        right: true,
      },
      {
        text: `
        Объект который изменяет последовательность выполнения асинхронной операции
        `,
      },
      {
        text: `
        Объект который планирует запуск выполнения асинхронного кода.
        `,
      },
    ],
  };
}
