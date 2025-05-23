export default function question({ choice, minorBool, tag }: QuestionHelpers): RawQuestion {
  const pairTags = minorBool();

  return {
    upperText: `[HTML] Какие нижеперечисленные теги являются ${
      pairTags ? "парными" : "одиночными"
    }?`,
    multiple: true,
    display: "grid",
    helpLinks: ["https://gabdrahimov.ru/html-tegi-parnye"],
    gridCols: 3,
    answers: [
      {
        code: tag("img"),
        language: "html",
        right: !pairTags,
      },
      {
        code: tag(choice(["input", "br"])),
        language: "html",
        right: !pairTags,
      },
      {
        code: tag("link"),
        language: "html",
        right: !pairTags,
      },
      {
        code: tag(choice(["div", "p", "span"])),
        language: "html",
        right: pairTags,
      },
      {
        code: tag(choice(["b", "em", "small", "q"])),
        language: "html",
        right: pairTags,
      },
      {
        code: tag("!doctype"),
        language: "html",
        right: !pairTags,
      },
      {
        code: tag("source"),
        language: "html",
        right: !pairTags,
      },
      {
        code: tag(choice(["code", "dir"])),
        language: "html",
        right: pairTags,
      },
      {
        code: tag(choice(["footer", "mark"])),
        language: "html",
        right: pairTags,
      },
    ],
  };
}
