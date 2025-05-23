export default function question({
    minorBool,
  word,
  int,
}: QuestionHelpers): RawQuestion {
  const a = word();
  const withUseStrict = minorBool();
  const [num1, num2] = [int(0, 10), int(11, 20)];
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
${withUseStrict ? "'use strict';" : ""}
 function fn(${a}){
    var ${a} = ${num1};
    console.log(${a});
    function ${a}() {};
    console.log(${a});
  }

  fn(${num2});
    `,
    answers: [
      { text: "Ошибка" },
      { code: `${num1} ${num1}`, right: true },
      { code: `${num2} ${a}() {}` },
      { code: `${num1} ${a}() {}` },
      { code: `${num2} ${num2}` },
    ],
  };
}
