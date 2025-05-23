export default function question({
  char,
  int,
  minorBool,
  string,
}: QuestionHelpers): RawQuestion {
  const a = { name: char(), value: int(0, 7) };
  const b = { name: char(), value: int(8, 14) };
  const anotherCase = minorBool();

  return {
    upperText: "Что будет выведено в консоль?",
    code: `
      const ${a.name} = ${a.value};
      ${anotherCase ? "" : `const ${b.name} = ${b.value};`}

      //prettier-ignore
      console.log(${a.name}+++${anotherCase ? b.value : b.name})
    `,
    answers: [
      { code: string(a.value + 1 + b.value) },
      { code: string(a.value + b.value - 1) },
      { code: string(a.value + b.value), right: true },
      { text: "Ошибка" },
    ],
  };
}
