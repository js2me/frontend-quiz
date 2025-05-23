export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    multiple: true,
    upperText: "Как получить текущий <b>URL</b>?",
    display: "grid",
    gridCols: 2,
    answers: [
      { code: "window.URL" },
      { code: "new URL()" },
      { code: "window.location.href", right: true },
      { code: "document.URL", right: true },
    ],
  };
}
