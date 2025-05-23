export default function question({
    char,
  word,
  int,
  choice,
}: QuestionHelpers): RawQuestion {
  const variableName = char();
  const variableValue = word();
  const index = int(0, variableValue.length - 1);
  const newChar = int(0, 9);
  const modifiedValue =
    variableValue.slice(0, index) + newChar + variableValue.slice(index + 1);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      ${choice(["let", "const"])} ${variableName} = "${variableValue}";
      ${variableName}[${index}] = "${newChar}";
      console.log(${variableName})
    `,
    helpText: `
Строки в JavaScript являются иммутабельными, поэтому они не имеют возможности посимвольного изменения, такого как в текущем примере кода
    `,
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures",
    ],
    answers: [
      { code: `"${modifiedValue}"` },
      { text: "Ошибка" },
      { code: `"${variableValue}"`, right: true },
    ],
  };
}
