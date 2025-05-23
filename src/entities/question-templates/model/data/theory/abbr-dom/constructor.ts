export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Расшифруйте аббревиатуру DOM",
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Document Object Model", right: true },
      { text: "Digital Optical Model" },
      { text: "Digital Object Model" },
      { text: "Domestic Object Model" },
      { text: "Document Offset Model" },
      { text: "Document Operand Model" },
    ],
  };
}
