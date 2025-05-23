export default function question({
    int,
  string,
  minorBool,
  shuffle,
}: QuestionHelpers): RawQuestion {
  const digits = [1, 2, 3, 4];
  const numbers = [int(10, 19), int(20, 29), int(30, 39), int(40, 49)];
  const arr = shuffle([...digits, ...numbers]);

  const wrongArr = [...digits, ...numbers];
  const sortedArr = [...arr].sort();

  const index = int(0, sortedArr.length - 1);

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      const arr = ${string(arr)}

      arr.sort()

      console.info(arr[${index}])
    `,
    helpText: `
Если функция сравнения <code>compareFunction</code> не предоставляется, элементы сортируются путём преобразования их в строки и сравнения строк в порядке следования кодовых точек Unicode.
    `,
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    ],
    answers: [
      {
        code: string(
          wrongArr[index] === sortedArr[index]
            ? wrongArr[index + 1]
            : wrongArr[index]
        ),
      },
      { code: string(sortedArr[index]), right: true },
      { code: string(arr[index]) },
      { text: "Ошибка" },
    ],
  };
}
