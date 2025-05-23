export default function question({
    minorBool,
  char,
  int,
  string,
}: QuestionHelpers): RawQuestion {
  const [a, b] = [char(), char()];
  const anotherCase = minorBool();
  const num = int(0, 10);
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: anotherCase
      ? [
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",
        ]
      : [],
    code: `
  ${anotherCase ? "'use strict';" : ""}
  function fn() {
    let ${a} = ${b} = ${num};
    ${a}++;
    return ${a};
  }
  
  fn();
  console.log(typeof ${a})
    `,
    answers: [
      { code: string("undefined"), right: !anotherCase },
      { code: string("number") },
      { text: "Ошибка", right: anotherCase },
    ],
  };
}
