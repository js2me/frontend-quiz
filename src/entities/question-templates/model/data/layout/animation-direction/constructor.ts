export default function question({ minorBool }: QuestionHelpers): RawQuestion {
  const anotherChoice = minorBool();
  return {
    upperText: `[CSS] Как указать, чтобы анимация двигалась ${
      anotherChoice
        ? "с конца до начала и обратно"
        : "с начала до конца и обратно"
    }?`,
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction",
    ],
    answers: [
      { code: `animation-direction: normal`, language: "css" },
      {
        code: `animation-direction: alternate`,
        language: "css",
        right: !anotherChoice,
      },
      { code: `animation-direction: reverse`, language: "css" },
      {
        code: `animation-direction: alternate-reverse`,
        language: "css",
        right: anotherChoice,
      },
    ],
  };
}
