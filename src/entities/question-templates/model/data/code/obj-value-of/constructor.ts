export default function question({ bool, char }: QuestionHelpers): RawQuestion {
  const reverse = bool();
  const field = char();
  const [a, b] = reverse ? [0, 1] : [0, -1];
  const right = bool();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const obj = {
      ${field}: 0,
      valueOf: function () {
        return ${right ? "" : reverse ? "++" : "--"}this.${field}${
      right ? (reverse ? "++" : "--") : ""
    };
      }
    }
    
    console.log(obj == ${a} && obj == ${b});
    `,
    answers: [
      { code: `true`, right },
      { code: `false`, right: !right },
      { code: `undefined` },
      { text: "Ошибка" },
    ],
  };
}
