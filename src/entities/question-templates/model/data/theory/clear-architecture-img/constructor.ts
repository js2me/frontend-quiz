export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Как называется архитектура на фото?",
    lowerText: `
<img src="https://raw.githubusercontent.com/js2me/image-store/main/arch2.png" />
    `,
    gridCols: 2,
    display: "grid",
    helpLinks: ["https://habr.com/ru/company/mobileup/blog/335382/"],
    answers: [
      { text: "Circle Architecture", right: false },
      { text: "Clean Architecture", right: true },
      { text: "Domain Driven Design", right: false },
      { text: "Pure Architecture", right: false },
    ],
  };
}
