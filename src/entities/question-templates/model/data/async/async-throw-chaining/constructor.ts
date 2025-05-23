export default function question({ string, value }: QuestionHelpers): RawQuestion {
  const [a, b, c] = [value(), value(), value()];
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: ["https://learn.javascript.ru/promise-chaining"],
    helpText: `
В консоли браузера отобразится <code>${a}/${c}</code> и <code>Uncaught (in promise) ${a}</code><br/>
Такое произойдет потому что:
<ol>
    <li>Мы вызываем <code>throw</code> в теле функции, соответственно, мы попадем в <code>.catch()</code> <code>Promise</code></li>
    <li>В этом примере кода отсутствует цепочка обработчиков промиса, поэтому наш изначальный промис не знает что мы отлавливаем его ошибку</li>
</ol>
    `,
    code: `
async function fn() {
  throw ${string(a)};
}

const result = fn();

result.then(a => console.log(\`\${a}/${b}\`))
result.catch(a => console.log(\`\${a}/${c}\`))
    `,
    answers: [
      {
        text: `<code>${a}/${c}</code> и <code>Uncaught (in promise) ${a}</code>`,
        right: true,
      },
      {
        text: `<code>${a}/${c}</code>`,
      },
      { text: "Ничего" },
      {
        text: `<code>${a}/${b}</code>`,
      },
    ],
  };
}
