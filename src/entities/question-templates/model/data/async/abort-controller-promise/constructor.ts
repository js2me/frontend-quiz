export default function question({ value, string, int, bool }: QuestionHelpers): RawQuestion {
  const timeout = int(1, 8) * 100;
  const outputData = value();
  const failureData = value();
  const anotherCase = bool();

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const controller = new AbortController()

    new Promise((resolve, reject) => {
      setTimeout(() => ${anotherCase ? "resolve" : "reject"}(${string(
      outputData
    )}), ${timeout})
    })
      .then(value => console.info(value))
      .catch(() => console.info(${string(failureData)}))

    controller.abort();
    `,
    answers: [
      { text: `Ничего` },
      { text: "Ошибка" },
      { text: `<code>${string(failureData)}</code>`, right: !anotherCase },
      { text: `<code>${string(outputData)}</code>`, right: anotherCase },
    ],
  };
}
