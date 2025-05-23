export default function question({ choice, int, string, word }: QuestionHelpers): RawQuestion {
  const interval = int(1, 15) * 1000;
  return {
    upperText: "Что произойдет?",
    code: `
      let config = {
        alert: setInterval(() => {
          console.log(${string(word())})
        }, ${interval})
      }

      ${choice(["config = null", "config.alert = null", "delete config.alert"])}
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Обратный вызов setInterval не будет вызван" },
      { text: "Обратный вызов setInterval будет вызван один раз" },
      {
        text: `Обратный вызов setInterval будет вызываться каждые ${interval}мс`,
        right: true,
      },
      { text: "Ошибка" },
    ],
  };
}
