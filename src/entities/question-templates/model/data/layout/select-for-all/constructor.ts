export default function question(): RawQuestion {
  return {
    upperText:
      "[CSS] Какой селектор позволяет обратиться к каждому элементу веб-страницы?",
    display: "grid",
    gridCols: 2,
    helpText: `
Универсальный селектор <code>*</code> позволяет обратиться к каждому элементу веб-страницы
    `,
    helpLinks: ["https://webref.ru/css/selector/universal"],
    answers: [
      { code: "*", right: true },
      { code: ":all" },
      { code: "$all" },
      { text: "Селектор не пишется" },
      { code: "any" },
      { code: "&" },
    ],
  };
}
