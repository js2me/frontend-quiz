export default function question({ int }: QuestionHelpers): RawQuestion {
  const blurValue = `${int(4, 24)}px`;

  return {
    upperText: "[CSS] Как размыть изображение?",
    code: `
      <img src="https://link.to/img.png" />
    `,
    language: "html",
    display: "grid",
    gridCols: 2,
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur",
    ],
    answers: [
      { code: `transform: blur(${blurValue})` },
      { code: `blur: ${blurValue}` },
      { code: `filter: blur(${blurValue})`, right: true },
      { code: `backdrop-filter: blur(${blurValue})` },
    ],
  };
}
