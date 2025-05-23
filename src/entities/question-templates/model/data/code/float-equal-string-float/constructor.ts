export default function question({
    int,
  string,
  shuffle,
  minorBool,
}: QuestionHelpers): RawQuestion {
  // "000.380" == 0.38
  // "001.01" != 1.01
  const stringFloat = `${Array(int(2, 8)).fill(0).join("")}${int(0, 8)}.${int(
    0,
    10
  )}${int(0, 10)}${int(0, 0)}`;
  const floatNum = +stringFloat;

  const [left, right] = shuffle([stringFloat, floatNum]);

  const anotherCase = minorBool();

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      console.log(${string(left)} ${anotherCase ? "!=" : "=="} ${string(right)})
    `,
    answers: [
      { code: string(true), right: !anotherCase },
      { code: string(false), right: anotherCase },
      { text: "Ошибка" },
    ],
  };
}
