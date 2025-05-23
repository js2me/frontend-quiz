export default function question({
  word,
    value,
  string,
  choice,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const objName = word();
  const objContent = {
    [word()]: value(),
  };
  const anotherCase = minorBool();

  const modifyField = word();
  const modifyValue = value();

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      ${choice(["", '"use strict";'])}
      const ${objName} = ${string(objContent)};

      ${
        anotherCase
          ? `${objName} = { ...${objName}, ${modifyField}: ${string(
              modifyValue
            )}}`
          : `${choice([
              `${objName}[${string(modifyField)}]`,
              `${objName}.${modifyField}`,
            ])} = ${string(modifyValue)};`
      }

      console.log(${objName});
    `,
    helpText: anotherCase
      ? `
Будет ошибка, так как присвоение значения у переменной, объявленной через ключевое слово <code>const</code>, запрещено
`
      : `
Расширение объекта будет выполнено успешно, несмотря на ключевое слово <code>const</code>
    `,
    answers: [
      {
        code: string({ ...objContent, [modifyField]: modifyValue }),
        right: !anotherCase,
      },
      { code: string({ ...objContent }) },
      { text: "Ошибка", right: anotherCase },
    ],
  };
}
