export default function question({ minorBool, choice }: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();

  return {
    upperText: `[CSS] Какие из следующих свойств ${
      anotherCase ? "" : "НЕ "
    }влияют на модель Box?`,
    helpLinks: [
      "https://webref.ru/layout/learn-html-css/box-model",
      "https://www.w3.org/TR/1998/REC-CSS2-19980512/ui.html#dynamic-outlines",
      "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
    ],
    helpText: `
    Обводка, созданная через свойство outline, рисуется «поверх» бокса, то есть outline всегда сверху,
    и не влияет на позицию и размер бокса или других боксов.
    Поэтому, показ или скрытие outline не приводит к пересчёту страницы.
    `,
    display: "grid",
    gridCols: 2,
    multiple: true,
    answers: [
      { code: "padding", language: "css", right: anotherCase },
      { code: "margin", language: "css", right: anotherCase },
      { code: "outline", language: "css", right: !anotherCase },
      { code: "border", language: "css", right: anotherCase },
      { code: "content", language: "css", right: anotherCase },
      {
        code: choice(["height", "width"]),
        language: "css",
        right: anotherCase,
      },
    ],
  };
}
