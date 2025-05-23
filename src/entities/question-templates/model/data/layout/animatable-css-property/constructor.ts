export default function question({ choice }: QuestionHelpers): RawQuestion {
  return {
    upperText: "Какое из перечисленных свойств нельзя анимировать?",
    display: "grid",
    gridCols: 2,
    helpLinks: ["https://webref.ru/css/animated_properties"],
    answers: [
      { code: choice(["opacity", "letter-spacing"]), language: "css" },
      {
        code: choice(["text-align", "align-items", "align-self"]),
        language: "css",
        right: true,
      },
      { code: choice(["left", "right", "bottom", "top"]), language: "css" },
      {
        code: choice(["max-width", "max-height", "line-height"]),
        language: "css",
      },
      { code: choice(["transform", "font-size"]), language: "css" },
      {
        code: choice([
          "margin-right",
          "margin-top",
          "margin-bottom",
          "margin-left",
        ]),
        language: "css",
      },
    ],
  };
}
