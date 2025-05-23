export default function question({ choice, minorBool }: QuestionHelpers): RawQuestion {
  const anotherCase = minorBool();
  return {
    display: "grid",
    gridCols: 4,
    upperText: `Какие типы данных в JavaScript ${
      anotherCase ? "" : "НЕ "
    }являются примитивами?`,
    helpLinks: ["https://learn.javascript.ru/types"],
    multiple: true,
    answers: [
      {
        text: `<code>${choice(["Boolean", "String"])}</code>`,
        right: anotherCase,
      },
      { text: `<code>Object</code>`, right: !anotherCase },
      { text: `<code>BigInt</code>`, right: anotherCase },
      { text: `<code>Symbol</code>`, right: anotherCase },
      { text: `<code>Undefined</code>`, right: anotherCase },
      { text: `<code>Null</code>`, right: anotherCase },
      { text: `<code>NaN</code>`, right: anotherCase },
      { text: `<code>Array</code>`, right: !anotherCase },
      { text: `<code>${choice(["Set", "Map"])}</code>`, right: !anotherCase },
      {
        text: `<code>${choice(["WeakMap", "WeakSet"])}</code>`,
        right: !anotherCase,
      },
      { text: `<code>Number</code>`, right: anotherCase },
      { text: `<code>Function</code>`, right: !anotherCase },
    ],
  };
}
