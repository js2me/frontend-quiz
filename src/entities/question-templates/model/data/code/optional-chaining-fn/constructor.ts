export default function question({
    minorBool,
  char,
  choice,
  word,
  int,
  string,
}: QuestionHelpers): RawQuestion {
  const objVariableName = word();
  const fn = choice(["saySomething", "sayHi", "callFn", "say", "fn"]);
  const intVariableName = char();
  const value = int(0, 10);
  const anotherCase = minorBool();
  const objVarValue = anotherCase
    ? choice(["0", "false", '""'])
    : choice(["null", "void 0", "undefined"]);

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    let ${objVariableName} = ${objVarValue};
    let ${intVariableName} = ${value};

    ${objVariableName}?.${fn}(${choice([
      `++${intVariableName}`,
      `${intVariableName}++`,
    ])});
    
    console.log(${intVariableName});
    `,
    helpText: anotherCase
      ? `
В консоль будет выведена ошибка потому что будет сделана попытка вызвать функцию <code>${fn}</code>,
которой не существует у <code>${objVariableName}</code>
Код после <code>?.</code> сработает потому что он проверяет <code>${objVariableName}</code> на <code>null</code> и <code>undefined</code>
    `
      : `
Код после <code>?.</code> не сработает потому что он проверяет <code>${objVariableName}</code> на <code>null</code> и <code>undefined</code>,
а значение у этой переменной как раз является <code>${objVarValue}</code>.

Соответственно, несуществующая функция не будет вызвана и ошибок в консоли никаких не возникнет.
    `,
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining",
    ],
    answers: [
      { code: `${value}`, right: !anotherCase },
      { code: `${value + 1}` },
      { code: `NaN` },
      { code: `null` },
      { text: "Ошибка", right: anotherCase },
    ],
  };
}
