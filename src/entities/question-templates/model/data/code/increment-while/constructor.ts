export default function question({
    bool,
  int,
  char,
  varName,
  string,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const a = varName();
  const reversed = minorBool();

  const minNum = 0;
  const maxNum = int(1, 3) * 10;

  const initial = reversed ? maxNum : minNum;
  const target = reversed ? minNum : maxNum;
  const right = bool();
  const increment = right ? "0.5" : "0.2";

  const cycleCondition = `${a} != ${target}`;
  const cycleOperation = `${a} ${reversed ? "-" : "+"}= ${increment}`;

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    let ${a} = ${initial};

    while (${cycleCondition}) {
        ${cycleOperation}
    }
    
    console.log(${a});
    `,
    helpText: right
      ? `
Всё успешно выполнится, код выйдет из цикла и выведет результат <code>${string(
          target
        )}</code> в консоль
`
      : `
При такой операции <code>${cycleOperation}</code> условие <code>${cycleCondition}</code>, внутри <code>while</code> цикла, никогда не станет <code>false</code>.
Поэтому текущий цикл будет выполняться бесконечно и мы никогда не дойдем до <code>console.log(${a})</code>
`,
    answers: [
      { text: "Ничего", right: !right },
      { code: `${target}`, right },
      { text: "Ошибка" },
      { code: `${reversed ? "-" : ""}${target}.00000000${+increment * 10}` },
      { code: `${reversed ? "-" : ""}${target}.${+increment * 10}` },
    ],
  };
}
