export default function question({ choice }: QuestionHelpers): RawQuestion {
  return {
    upperText: "Во что превращается JSX разметка в React?",
    display: "grid",
    gridCols: 2,
    answers: [
      { code: "React.createElement()", right: true },
      {
        code: choice([
          "React.makeElement()",
          "React.jsx()",
          "React.JSX()",
          "React.content()",
        ]),
      },
      { code: "React.element()" },
      { code: "React.component()" },
    ],
  };
}
