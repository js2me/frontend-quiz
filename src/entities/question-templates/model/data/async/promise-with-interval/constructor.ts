export default function question({ minorBool, char }: QuestionHelpers): RawQuestion {
  const decrement = minorBool();
  const resolve = minorBool();
  const result = decrement ? -1 : 1;
  const a = char();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    new Promise((res, rej) => {
      let ${a} = 0;
      
      setInterval(() => {
        if (${resolve ? (decrement ? "--" : "++") : ""}${a}${
      resolve ? "" : decrement ? "--" : "++"
    }) {
          res(${a});
        } else {
          rej(${a})
        }
      }, 500)
    })
      .then(r => console.log('then: ', r))
      .catch(r => console.log('catch: ', r))
    `,
    answers: [
      { code: `then: ${result}`, right: resolve },
      { code: `catch: ${result}`, right: !resolve },
      { text: "Ошибка" },
    ],
  };
}
