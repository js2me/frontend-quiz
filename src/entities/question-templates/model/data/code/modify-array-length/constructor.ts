export default function question({
    int,
  bool,
  string,
  varName,
  callStringFunction,
}: QuestionHelpers): RawQuestion {
  const arrVarName = varName();
  const arr = [int(0, 10), int(0, 10), int(0, 10), int(0, 10), int(0, 10)];
  const length = int(0, arr.length - 2);
  const arrayLengthFirst = bool();

  const outputFn = (arr: any[], length: any) => {
    if (arrayLengthFirst) {
      return `${string(length)} ${string(arr)}`;
    }

    return `${string(arr)} ${string(length)}`;
  };

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const ${arrVarName} = [${arr.join(", ")}];
    ${arrVarName}.length = ${length};
    
    ${callStringFunction({
      name: "console.log",
      args: arrayLengthFirst
        ? [`${arrVarName}.length`, arrVarName]
        : [arrVarName, `${arrVarName}.length`],
    })}
    `,
    answers: [
      { text: "Ошибка" },
      { code: outputFn(arr.slice(0, length), length), right: true },
      { code: outputFn(arr.slice(0, length), arr.length) },
      { code: outputFn(arr, arr.length) },
      { code: outputFn(arr, length) },
    ],
  };
}
