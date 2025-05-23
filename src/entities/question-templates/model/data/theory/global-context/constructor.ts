export default function question(): RawQuestion {
  return {
    upperText:
      "Глобальный контекст исполнения создает две вещи: глобальный объект и <code>this</code> ? ",
    display: "grid",
    gridCols: 2,
    helpLinks: ["https://habr.com/ru/company/ruvds/blog/422089/"],
    helpText:
      "Базовый контекст исполнения это глобальный контекст исполнения: это то, что доступно где угодно в твоем коде.",
    answers: [
      { text: "Да", right: true },
      { text: "Нет" },
      { text: "Зависит от разных факторов" },
    ],
  };
}
