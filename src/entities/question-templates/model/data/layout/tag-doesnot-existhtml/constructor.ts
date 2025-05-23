export default function question({ choice, tag }: QuestionHelpers): RawQuestion {
  return {
    upperText: "Какой тег не существует в HTML?",
    display: "grid",
    gridCols: 2,
    helpLinks: ["https://developer.mozilla.org/en-US/docs/Web/HTML/Element"],
    answers: [
      {
        code: tag(choice(["menu", "data", "time"])),
        language: "html",
      },
      {
        code: tag(choice(["command", "progress"])),
        language: "html",
      },
      {
        code: tag(choice(["mark", "audio", "player"])),
        language: "html",
      },
      {
        code: tag(choice(["navigation", "music", "anchor", "url"])),
        language: "html",
        right: true,
      },
    ],
  };
}
