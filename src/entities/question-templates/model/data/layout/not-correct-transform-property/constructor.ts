export default function question({ choice, int }: QuestionHelpers): RawQuestion {
  return {
    upperText:
      "[CSS]  Какие значения свойства <code>transform</code> являются некорректными ?",
    multiple: true,
    answers: [
      {
        text: `<code>scale(${choice(["50%", "100%", "150%", "200%"])})</code>`,
      },
      { text: `<code>rotate(${choice(["0.5", "1", "1.5", "2"])}turn)</code>` },
      { text: `<code>matrix(1,2,3,4,5,6)</code>` },
      { text: `<code>rotate(${int(1, 15) * 10}degrees)</code>`, right: true },
    ],
  };
}
