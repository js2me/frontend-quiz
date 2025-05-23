export default function question({
    minorBool,
  char,
  int,
}: QuestionHelpers): RawQuestion {
  const [a] = [char()];
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
  var output = (function(${a}) {
    delete ${a};
    return ${a};
  })(${num});
  
  console.log(output);
    `,
    answers: [
      { text: "Ничего" },
      { code: `undefined` },
      { code: `${num}`, right: !anotherCase },
      { text: "Ошибка", right: anotherCase },
    ],
  };
}
