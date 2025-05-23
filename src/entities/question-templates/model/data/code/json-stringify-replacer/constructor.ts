export default function question({
    word,
  char,
  choice,
  string,
  shuffle,
  value,
  varName,
}: QuestionHelpers): RawQuestion {
  const varNames = {
    a: varName(),
    b: varName(),
  };

  const log = (...args: any[]) => {
    return `console.${choice(["log", "warn", "info", "error"])}(${args.join(
      ", "
    )})`;
  };

  const anyField = () => choice([word, char])();
  const fields = {
    a: anyField(),
    b: anyField(),
    c: anyField(),
    d: anyField(),
  };
  const values = { a: value(), b: value(), c: value(), d: value() };
  const missingField = anyField();
  const obj = {
    [fields.a]: values.a,
    [fields.b]: values.b,
    [fields.c]: values.c,
    [fields.d]: values.d,
  };
  const answers = {
    a: JSON.stringify(obj, [fields.a, fields.b, missingField]),
    b: JSON.stringify(obj),
    c: JSON.stringify({
      [fields.a]: values.a,
      [fields.b]: values.b,
      [missingField]: null,
    }),
    d: JSON.stringify({
      [fields.a]: values.a,
      [fields.b]: values.b,
      [missingField]: "undefined",
    }).replace('"undefined"', "undefined"),
  };
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const ${varNames.a} = ${string(obj)}
    
    const ${varNames.b} = JSON.stringify(${varNames.a}, ${string(
      shuffle([fields.a, fields.b, missingField])
    )});
    ${log(varNames.b)}
    `,
    helpText: `
Второй аргумент у JSON.stringify позволяет отправить массив полей, которые необходимо вытащить из входящего объекта и только эти поля обработать с помощью функции JSON.stringify()
    `,
    answers: [
      { text: "Ошибка" },
      { code: string(answers.a), right: true },
      { code: string(answers.b) },
      { code: string(answers.c) },
      { code: string(answers.d) },
    ],
  };
}
