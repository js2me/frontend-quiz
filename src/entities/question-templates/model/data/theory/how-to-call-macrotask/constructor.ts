export default function question({ choice, minorBool }: QuestionHelpers): RawQuestion {
  const answerText = (answer: string) => {
    const answerWithCode = `<code>${answer}</code>`;
    return choice([
      `При помощи ${answerWithCode}`,
      `С помощью ${answerWithCode}`,
      `Через ${answerWithCode}`,
      `Используя ${answerWithCode}`,
    ]);
  };

  const anotherCase = minorBool();

  return {
    upperText: "Как создать макротаску ?",
    multiple: true,
    helpLinks: [
      `https://habr.com/ru/company/oleg-bunin/blog/417461/`,
      `https://medium.com/@stasonmars/%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B5-%D0%BF%D0%BE-javascript-%D1%82%D0%B0%D0%B8%CC%86%D0%BC%D0%B5%D1%80%D0%B0%D0%BC-%D0%B2-%D1%81%D0%B5%D1%82%D0%B8-a8ef0e13e18`,
    ],
    answers: [
      {
        text: answerText(choice([`setTimeout`, `setInterval`])),
        right: true,
      },
      { text: answerText(choice([`createMicrotask`, `queryMicrotask`])) },
      { text: answerText(`queueMicrotask`) },
      {
        text: answerText(
          choice([`Promise`, `async/await`, `Promise.resolve()`])
        ),
      },
      {
        text: answerText(
          anotherCase
            ? `setImmediate`
            : choice([`requestAnimationFrame`, `requestIdleCallback`])
        ),
        right: anotherCase,
      },
    ],
  };
}
