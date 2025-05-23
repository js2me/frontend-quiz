export default function question({ minorBool }: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();
  return {
    upperText: `Выберите метод позволяющий округлить число до ближайшего ${
      anotherCase ? "меньшего" : "большего"
    } целого`,
    display: "grid",
    helpLinks: anotherCase
      ? [
          "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/floor",
        ]
      : [
          "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil",
        ],
    gridCols: 2,
    answers: [
      { code: "Math.floor()", right: anotherCase },
      { code: "Math.round()" },
      { code: "Math.ceil()", right: !anotherCase },
      { code: "Math.trunc()" },
    ],
  };
}
