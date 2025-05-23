export default function question({
    minorBool,
  int,
  word,
  shuffle,
}: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();
  const intA = int(1, 10);
  const intB = int(intA + 1, intA + 10);
  const intC = int(intB + 1, intB + 10);
  const intD = int(intC + 1, intC + 10);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const array = ['', ${intA}, ${shuffle([
      "null",
      "undefined",
    ])}, '${word()}', '${intB}', ${intC}, '0${intD}'];

    const result = array
      .map(value => +value)
      .reduce((result, value) => {
        if (result ${anotherCase ? ">" : "<"} value) result = value;
  
        return result
      }, 0)

    console.log(result);
    `,
    answers: [
      { text: "Ошибка" },
      { code: `null` },
      { code: `undefined` },
      { code: `NaN` },
      { code: `0`, right: anotherCase },
      { code: `${intD}`, right: !anotherCase },
    ],
  };
}
