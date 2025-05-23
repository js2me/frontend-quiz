export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Как  расшифровывается аббревиатура <b>CRP</b>?",
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Web/Performance/Critical_rendering_path",
    ],
    helpText: `
Критические этапы рендеринга (Critical Rendering Path) - это последовательность шагов, которые выполняет браузер, когда преобразуется HTML, CSS и JavaScript в пиксели, которые вы видите на экране
`,
    answers: [
      { text: "<b>Critical Rendering Path</b>", right: true },
      { text: "<b>Critical Rendering Point</b>" },
      { text: "<b>Cascade Rendering Point</b>" },
      { text: "<b>Cascade Rendering Path</b>" },
    ],
  };
}
