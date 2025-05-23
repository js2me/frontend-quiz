export default function question({ word, choice }: QuestionHelpers): RawQuestion {
  const varName = word();

  return {
    upperText: `Как можно определить, является ли <code>${varName}</code> массивом?`,
    code: `
      const ${varName} = [];
    `,
    display: "grid",
    gridCols: 2,
    multiple: true,
    helpText: `
Проверить является ли <code>${varName}</code> можно двумя способами:
<ol>
<li><code>Array.isArray(${varName})</code> - метод, добавленный в ES5, он надежно проверяет является ли перменная массивом</li>
<li><code>${varName} instanceof Array</code> -  проверяет прототип <code>${varName}</code> относится ли он к классу <code>Array</code>. Это не самый эффективный способ, но для нашего случая подходит</li>
</ol>
    `,
    answers: [
      { code: `typeof ${varName}` },
      {
        code: `Array.isArray(${varName})`,
        right: true,
      },
      { code: `instanceof ${varName} === "array"` },
      { code: `instanceof ${varName} === Array` },
      { code: `Array.instanceOf(${varName})` },
      {
        code: `${varName} instanceof Array`,
        right: true,
      },
    ],
  };
}
