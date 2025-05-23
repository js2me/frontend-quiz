export default function question({
  word,
  int,
  minorBool,
  string,
  char,
}: QuestionHelpers): RawQuestion {
  const variable = word();
  const expectError = minorBool();
  const values = expectError ? int(123, 54321) : `${int(123, 54321)}`;
  const anotherCase = minorBool();
  const spreadedVarName = word();

  return {
    upperText: "Что будет выведено в консоль?",
    code: `
      const ${variable} = ${string(values)}
      const [${(anotherCase ? [char(), char(), char()] : [char(), char()]).join(
        ","
      )}, ...${spreadedVarName}] = ${variable}

      console.log(${spreadedVarName})
    `,
    helpText: expectError
      ? `
Число не является иттерируемым, поэтому с ним нельзя работать как с массивом, и <code>spread</code> оператор запрещен
    `
      : `
Строка является иттерируемым типом.
Поэтому в данном случае такая конструкция
<code>const [${(anotherCase ? [char(), char(), char()] : [char(), char()]).join(
          ","
        )}, ...${spreadedVarName}] = ${variable}</code>
Валидна и выполнится успешно
      `,
    helpLinks: ["https://doka.guide/js/spread/"],
    answers: [
      {
        code: string(
          values
            .toString()
            .substring(anotherCase ? 3 : 2)
            .split("")
            .map((value) => (expectError ? Number(value) : String(value)))
        ),
        right: !expectError,
      },
      {
        code: string(
          expectError
            ? values
                .toString()
                .substring(anotherCase ? 3 : 2)
                .split("")
                .map(String)
            : values.toString().substring(anotherCase ? 3 : 2)
        ),
      },
      { text: "Ошибка", right: expectError },
    ],
  };
}
