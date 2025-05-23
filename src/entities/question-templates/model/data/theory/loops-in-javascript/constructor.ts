export default function question(): RawQuestion {
  return {
    upperText: "Какие циклы есть в JavaScript?",
    display: "grid",
    gridCols: 2,
    multiple: true,
    helpLinks: ["https://html5book.ru/cikly-javascript/"],
    answers: [
      { text: `<code>for</code>`, right: true },
      { text: `<code>while</code>`, right: true },
      { text: `<code>do while</code>`, right: true },
      { text: `<code>forMap</code>` },
      { text: `<code>foreach</code>` },
      { text: `<code>each</code>` },
      { text: `<code>loop</code>` },
    ],
  };
}
