export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText:
      "Какой атрибут тега <code><ol></code> начинает нумерацию списка с определённого значения?",
    code: `
      <ol>
        <ul>1</ul>
        <ul>2</ul>
      </ol>
    `,
    language: "html",
    display: "grid",
    gridCols: 2,
    answers: [
      { code: "number" },
      { code: "type" },
      { code: "value" },
      { code: "start", right: true },
      { code: "index" },
    ],
  };
}
