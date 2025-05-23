export default function question({
    word,
  bool,
  char,
  string,
}: QuestionHelpers): RawQuestion {
  const a = word();
  const field = char();
  const anotherCase = bool();
  const fieldValue = bool();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
const ${field} = ${string(anotherCase ? null : fieldValue)};
console.log( ${field} ?? ${string(a)} );
    `,
    answers: [
      { code: string(null) },
      { code: string(fieldValue), right: !anotherCase },
      { code: `undefined` },
      { code: string(a), right: anotherCase },
    ],
  };
}
