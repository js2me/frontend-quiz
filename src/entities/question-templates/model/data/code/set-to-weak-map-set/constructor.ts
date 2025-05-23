export default function question({
    word,
  minorBool,
  value,
  string,
}: QuestionHelpers): RawQuestion {
  const varName = word();
  const anotherCase = minorBool();
  const weakMapOrSet = anotherCase ? "WeakMap" : "WeakMap";
  const [key, val] = [value(), value()];

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
      const ${varName} = new ${weakMapOrSet}()

      ${varName}.set(${string(key)}, ${string(val)})

      console.log(${varName}.get(${string(key)}))
    `,
    helpText: `
Произойдет ошибка при вызове <code>set</code> у <code>${weakMapOrSet}</code> потому что нельзя установить примитивное значение <code>WeakMap</code> и <code>WeakSet</code>
    `,
    answers: [
      { code: string(val) },
      { code: string(undefined) },
      { code: string(null) },
      { text: "Ошибка", right: true },
    ],
  };
}
