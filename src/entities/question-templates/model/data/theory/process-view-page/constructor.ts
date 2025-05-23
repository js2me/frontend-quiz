export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Порядок этапов процесса отображения страницы",
    multiple: true,
    ordered: true,
    helpLinks: ["https://webdevblog.ru/kak-brauzer-renderit-veb-stranicu/"],
    answers: [
      { text: "Разбор HTML файла", right: true, order: 0 },
      { text: "Получение внешних ресурсов", right: true, order: 1 },
      { text: "Разбор CSS и создание CSSOM", right: true, order: 2 },
      { text: "Выполнение JavaScript", right: true, order: 3 },
      {
        text: "Объединение DOM и CSSOM, для построения дерево рендеринга",
        right: true,
        order: 4,
      },
      { text: "Расчет макета и отрисовка результата", right: true, order: 5 },
    ],
  };
}
