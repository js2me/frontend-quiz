export default function question(): RawQuestion {
  return {
    upperText: "Когда в JavaScript создаются замыкания ?",
    display: "grid",
    gridCols: 2,
    answers: [
      {
        text: `В момент выполнения функции`,
      },
      {
        text: `Во время создания функции`,
        right: true,
      },
      {
        text: `Во время создания переменных`,
      },
      {
        text: "Во время обработки JavaScript файла",
      },
      {
        text: "Никогда",
      },
    ],
  };
}
