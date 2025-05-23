export default function question({
    int,
  minorBool,
  char,
}: QuestionHelpers): RawQuestion {
  const [a, b] = [int(30, 40), int(41, 59)];
  const anotherCase = minorBool();
  const field = char();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: () => {
      const iife = anotherCase
        ? `
  (() => {
    this.${field} = ${b};
  })();`
        : `
  (function () {
    this.${field} = ${b};
  })();`;
      return `
const fn = function () {
  this.${field} = ${a};${iife}
  console.log(this.${field});
};
fn();
    `;
    },
    answers: [
      { code: `${a}` },
      { code: `${b}`, right: true },
      { text: "Ошибка" },
      { code: "undefined" },
    ],
  };
}
