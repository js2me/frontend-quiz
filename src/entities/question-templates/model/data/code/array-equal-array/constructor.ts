export default function question({ minorBool, string }: QuestionHelpers): RawQuestion {
  // [] == ![]
  // [] === []
  const wrong = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
  let array = [];
  console.log(array ${wrong ? "===" : "=="} !array);
    `,
    helpText: wrong
      ? `
При строгом сравнении <code>===</code> у операндов не будет выполнено приведение типов к единому.  
Соответственно <code>[] === false</code> будет всегда <code>false</code>, так как операнды не равны по типу
`
      : `
Порядок приведения типов в этом примере кода
1. <code>[]==![]</code>
2. <code>[]==false</code> - выполнение выражений слева и справа от оператора сравнения
3. <code>[]==0</code> - приведение к числу правого операнда
4. <code>""==0</code> - приведение массива к примитивному типу. В нашем случае к строке
5. <code>0==0</code> - приведение строки <code>""</code> к числу (<code>Number("")</code>) для выполнения сравнения
6. <code>true</code>
</code>
    `,
    helpLinks: ["https://262.ecma-international.org/5.1/#sec-11.9.3"],
    answers: [
      { code: string(undefined) },
      { code: string(true), right: !wrong },
      { code: string(false), right: wrong },
    ],
  };
}
