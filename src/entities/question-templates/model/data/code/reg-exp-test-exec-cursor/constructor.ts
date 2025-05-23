export default function question({
  varName,
  word,
  value,
  bool,
  string,
  choice,
  int,
}: QuestionHelpers): RawQuestion {
  const regExpVar = varName();
  const inputVar = varName();

  const elseOutput = value();
  const numsRegExp = bool();

  const regExp = numsRegExp ? `/\d+/g` : `/[A-Za-z]+/g`;

  const divider = choice([".", "/", "-"]);

  const min = 3;
  const max = int(min, 5);

  const regExpExecArr = Array(max)
    .fill(null)
    .map(() => {
      return numsRegExp ? int(100, 999).toString() : word();
    });
  const inputValue = regExpExecArr.join(divider);

  const log = (...args: any[]) => {
    return `console.${choice(["log", "info", "warn", "error"])}(${args.join(
      ", "
    )})`;
  };

  const targetingIndex = 0;

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const ${regExpVar} = ${regExp};
    const ${inputVar} = ${string(inputValue)};

    if (${regExpVar}.test(input)) {
      ${log(`${regExpVar}.exec(${inputVar})[${targetingIndex}]`)}
    } else {
      ${log(`${string(elseOutput)}`)}
    }
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Ошибка" },
      { code: `${string(regExpExecArr[targetingIndex])}` },
      { code: `${string(regExpExecArr[targetingIndex + 1])}`, right: true },
      { code: `${string(regExpExecArr[targetingIndex + 2])}` },
      { code: `${string(regExpExecArr[max])}` },
      { code: `${string(elseOutput)}` },
    ],
  };
}
