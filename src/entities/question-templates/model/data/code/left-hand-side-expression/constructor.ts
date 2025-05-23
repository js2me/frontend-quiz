export default function question({
    char,
  int,
  word,
  string,
  choice,
}: QuestionHelpers): RawQuestion {
  const [a, b] = [char(), char()];
  const [valueA, valueB] = [int(0, 5), int(6, 10)];
  const [varA, varB] = [word(), word()];

  const log = (...args: any[]) => {
    return `console.${choice(["log", "warn", "info", "error"])}(${args.join(
      ", "
    )})`;
  };

  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: ["https://es5.github.io/#x11.13.1"],
    code: `
var ${varA} = ${string({ [a]: valueA })};
var ${varB} = ${varA};
${varA}.${b} = ${varA} = ${string({ [a]: valueB })};

${log(`${varA}.${b}`)}
    `,
    answers: [
      { code: string(undefined), right: true },
      { code: string({ [a]: valueB }) },
      { text: "Ошибка" },
    ],
  };
}
