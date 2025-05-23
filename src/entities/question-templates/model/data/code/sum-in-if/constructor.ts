export default function question({
  char,
  choice,
  word,
  int,
  string,
}: QuestionHelpers): RawQuestion {
  const getVarName = () => choice([char, word])();

  const varName = getVarName();
  const startValue = int(1, 20);
  const sumValue = int(1, 10);
  const compareValue = int(
    startValue + sumValue + 1,
    (startValue + sumValue + 1) * 2
  );

  const [insideIfWord, outsideIfWord] = [getVarName(), getVarName()];

  const createOutput = (category: string, value: number) => {
    if (category === "inside") {
      return `${string(insideIfWord)}, ${value}`;
    }

    return `${string(outsideIfWord)}, ${value}`;
  };

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
  let ${varName} = ${string(startValue)};
  if (${varName} += ${string(sumValue)} && ${varName} == ${string(
      compareValue
    )}){
    console.log(${string(insideIfWord)}, ${varName})
  }
  console.log(${string(outsideIfWord)}, ${varName})
    `,
    gridCols: 2,
    display: "grid",
    answers: [
      {
        code: `${createOutput("inside", startValue)} ${createOutput(
          "outside",
          startValue
        )}`,
        right: true,
      },
      {
        code: `${createOutput("inside", startValue + 1)} ${createOutput(
          "outside",
          startValue + 1
        )}`,
      },
      {
        code: `${createOutput("outside", startValue)}`,
      },
      {
        code: `${createOutput("inside", startValue + sumValue)} ${createOutput(
          "outside",
          startValue + sumValue
        )}`,
      },
      {
        code: `${createOutput("outside", startValue + sumValue)}`,
      },
    ],
  };
}
