export default function question({ choice }: QuestionHelpers): RawQuestion {
  return {
    upperText: "Сколько родительских элементов можно вывести одновременно?",
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Не более 1", right: true },
      { text: choice(["Не более 2", "Не более 3", "Не более 4"]) },
      { text: "Не более 10" },
      { text: "Неограниченное количество" },
    ],
  };
}
