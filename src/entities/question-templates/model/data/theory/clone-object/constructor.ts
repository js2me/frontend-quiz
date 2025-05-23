export default function question({
  choice,
  word,
  value,
  string,
}: QuestionHelpers): RawQuestion {
  const varName = choice(["obj", "myobj", "data", word()]);
  const objName = { [word()]: value(), [word()]: value() };
  return {
    multiple: true,
    code: `const ${varName} = ${string(objName)}`,
    upperText: "Как можно клонировать объект?",
    helpText: `
В данном случае достаточно будет сделать shallow copy объекта, т.е.поверхостное копирование.
Так как у нас нет вложенных ссылочных типов внутри объекта <code>${varName}</code>

Поэтому здесь подойдут три варианта:  
<ol>
<li><code>spread</code> оператор</li>
<li><code>Object.assign()</code></li>
<li><code>JSON.parse(JSON.stringify())</code></li>
</ol>
    `,
    answers: [
      { text: "С помощью оператора <code>spread</code>", right: true },
      { code: `Object.clone(${varName})` },
      { code: `Object.assign({}, ${varName})`, right: true },
      { code: `Object.copy(${varName})` },
      { code: `JSON.parse(JSON.stringify(${varName}))`, right: true },
    ],
  };
}
