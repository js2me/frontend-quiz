export default function question({
    word,
  minorBool,
  int,
  choice,
}: QuestionHelpers): RawQuestion {
  const [nameA, nameB] = [word(), word()];
  const [fnNameA, fnNameB] = [
    choice(["", nameA.toUpperCase(), nameA]),
    choice(["", nameB.toUpperCase(), nameB]),
  ];
  const field = word();
  const value = choice([`"${word()}"`, int(0, 50)]);
  const anotherCase = minorBool();
  const AIsArrowFn = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const ${nameA} = ${AIsArrowFn ? `() => ` : `function ${fnNameA}()`} {}
    ${nameA}.${anotherCase ? "prototype" : "__proto__"}.${field} = ${value}

    const ${nameB} = ${choice([
      `function ${fnNameB}()`,
      `() => `,
    ])} { console.log("${word()}") }

    console.log(${nameB}.${field})
    `,
    helpText: anotherCase
      ? AIsArrowFn
        ? `
 У стрелочных функций нет прототипа, поэтому в данном случае будет ошибка.
`
        : `
 В данном случае мы расширяем <code>prototype</code> конкретно у <code>${fnNameA}</code>  
 Это значение появится только в экземпляре класса (в нашем случае это функция-конструктор), т.е. когда мы вызовем <code>${nameA}</code> через ключевое слово <code>new</code>.

 Пример:  
  <code>${nameA}.${field} // undefined </code>
  <code>${nameB}.${field} // undefined </code>
  <code>
  const instance = new ${nameA}()
  instance.${field} // ${value}
  </code>
`
      : `
  В нашем случае когда мы изменяем <code>__proto__</code> у функции, мы говорим что у всех функций будет лежать в <code>__proto__</code> поле <code>${field}</code>.  
  Таким образом <code>${nameB}.${field}</code> будет содержать значение <code>${value}</code>
`,
    answers: [
      { text: "Ошибка", right: AIsArrowFn && anotherCase },
      { code: `${value}`, right: !anotherCase },
      { code: `undefined`, right: !AIsArrowFn && anotherCase },
    ],
  };
}
