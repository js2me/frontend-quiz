export default function question({
    int,
  char,
  string,
  minorBool,
  choice,
  float,
  varName,
}: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();
  const objKeys = [
    { key: int(10, 18), value: char() },
    { key: int(7, 9), value: char() },
    { key: choice([char(), int(4, 6)]), value: char() },
    { key: 1, value: char() },
    { key: choice([2, float(2, 2.9)]), value: char() },
    { key: 3, value: char() },
  ];
  const objVarName = varName();
  const obj = objKeys.reduce(
    (acc, data) =>
      Object.assign(Object.assign({}, acc), { [data.key]: data.value }),
    {}
  );
  const wrongValue = objKeys.map((data) =>
    anotherCase ? [data.key.toString(), data.value] : data.key.toString()
  );
  const rightValue = anotherCase ? Object.entries(obj) : Object.keys(obj);

  const log = (...args: any[]) => {
    return `console.${choice(["log", "warn", "info", "error"])}(${args.join(
      ", "
    )})`;
  };

  return {
    upperText: "Что будет выведено в консоль ?",
    helpText: `
    У объекта целочисленные ключи всегда будут отсортированы
    `,
    code: `
    const ${objVarName} = { ${objKeys
      .map((data) => `${data.key}: ${string(data.value)}`)
      .join(",")} }
    
    ${log(
      anotherCase
        ? `Object.entries(${objVarName})`
        : `Object.keys(${objVarName})`
    )}
    `,
    answers: [
      { code: string(wrongValue) },
      { code: string(rightValue), right: true },
      { text: "Ошибка" },
    ],
  };
}
