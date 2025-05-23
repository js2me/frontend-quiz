export default function question({ bool, int, char }: QuestionHelpers): RawQuestion {
  const right = bool();
  const variable = char();
  const [a, b] = [int(10, 20), int(21, 30)];
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    'use strict';
    
    var ${variable} = ${a};
    var fn = function () {
      console.log(${variable});
      ${right ? "var" : "let"} ${variable} = ${b};
    }
    
    fn();
    `,
    answers: [
      { text: "Ошибка", right: !right },
      { code: `undefined`, right },
      { code: `${a}` },
      { code: `${b}` },
    ],
    helpLinks: ["https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"],
  };
}
