export default function question({ word, string }: QuestionHelpers): RawQuestion {
  const [firstWord, secondWord] = [word(), word()];
  return {
    upperText: `Как получить результат <code>${string(
      `${firstWord} ${secondWord}`
    )}</code>`,
    helpLinks: [
      "https://ru.hexlet.io/courses/js-introduction-to-oop/lessons/arrow-functions/theory_unit",
    ],
    helpText: `
    Стрелочные функции не имеют своего контекста, поэтому они ссылаются на внешний контекст.<br/>
    Соответственно, контекст стрелочной функции невозможно переопределить
    `,
    code: `
    const fi = (str) => {
      return \`\${this()} \${str}\`;
    }
    const hi = () => {
      return ${string(firstWord)}
    }
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Никак", right: true },
      { code: `fi.call(hi, ${string(secondWord)})` },
      { code: `fi.apply(hi, ${string([secondWord])})` },
      { code: `fi.bind(hi, ${string(secondWord)})()` },
    ],
  };
}
