export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "[HTML] Для чего нужна семантическая разметка ?",
    helpLinks: ["https://htmlacademy.ru/blog/articles/semantics"],
    multiple: true,
    // display: "grid",
    // gridCols: 2,
    answers: [
      {
        text: "Чтобы сделать сайт доступным для людей с ограниченными способностями",
        right: true,
      },
      { text: "Чтобы сайт был выше в поисковиках", right: true },
      { text: "Чтобы сайт быстрее работал в браузерах" },
      { text: "Чтобы построить превью сайта в соц. сетях" },
    ],
  };
}
