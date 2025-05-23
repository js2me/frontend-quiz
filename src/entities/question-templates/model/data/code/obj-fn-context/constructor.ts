export default function question({ word, bool, char }: QuestionHelpers): RawQuestion {
  const str = word();
  const useArrowFn = bool();
  const field = char();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const obj = {
      ${field}: "${str}",
      fn: ${
        useArrowFn
          ? `() => console.info(this.${field})`
          : `function() { console.info(this.${field}) }`
      },
    }
    
    console.log(${useArrowFn ? "obj.fn.call(obj)" : "obj.fn()"});
    `,
    helpText: useArrowFn
      ? `
У стрелочной функции нет своего контекста, поэтому его невозможно переопределить, соответственно контекст у стрелочной функции будет внешний т.е. <code>window</code>
А поле <code>${field}</code> у <code>window</code> нет
    `
      : `
При вызове <code>obj.fn()</code> в <code>this</code> в момент вызова функции <code>fn</code> будет записан <code>obj</code>
`,
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this",
      "https://learn.javascript.ru/bind",
    ],
    answers: [
      { text: "Ошибка" },
      { code: `"${str}"`, right: !useArrowFn },
      { code: `undefined`, right: useArrowFn },
    ],
  };
}
