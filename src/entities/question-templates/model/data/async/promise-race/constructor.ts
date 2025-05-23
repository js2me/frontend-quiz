export default function question({
    word,
  minorBool,
  int,
  string,
}: QuestionHelpers): RawQuestion {
  const [a, b] = [word(), word()];
  const anotherCase = minorBool();
  const [timerA, timerB] = anotherCase
    ? [int(4, 8) * 1000, int(1, 3) * 1000]
    : [int(1, 3) * 1000, int(4, 8) * 1000];
  const failed = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race",
    ],
    display: "grid",
    gridCols: 2,
    code: `
  Promise.race([
    new Promise((resolve, reject) => {
      setTimeout(() => ${failed ? "reject" : "resolve"}(${string(
      a
    )}), ${timerA});
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => ${failed ? "reject" : "resolve"}(${string(
      b
    )}), ${timerB});
    })
  ])
    .then((data) => console.log('success', data))
    .catch((error) => console.log('failed', error));
    `,
    answers: [
      { code: `success ${a}`, right: !failed && !anotherCase },
      { code: `success ${b}`, right: !failed && anotherCase },
      { code: `failed ${a}`, right: failed && !anotherCase },
      { code: `failed ${b}`, right: failed && anotherCase },
      { text: "Ошибка" },
      { text: "Ничего" },
    ],
  };
}
