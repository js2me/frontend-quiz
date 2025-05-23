export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "В чём разница между Rest и Spread операторами ?",
    answers: [
      {
        text: "<code>Spread</code> используется для разделения коллекций на отдельные элементы, а <code>Rest</code>, наоборот, для соединения отдельных значений в массив",
        right: true,
      },
      {
        text: "<code>Rest</code> используется для разделения коллекций на отдельные элементы, а <code>Spread</code>, наоборот, для соединения отдельных значений в массив.",
      },
      {
        text: "Эти операторы работают одинаково",
      },
    ],
  };
}
