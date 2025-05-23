export default function question({ int }: QuestionHelpers): RawQuestion {
  const [a] = [int(1, 5) * 10];
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: ["https://learn.javascript.ru/promise-chaining"],
    code: `
const promise = Promise.resolve(0)

const callback = a => {
    const next = a + ${a};
    console.log(next)
    return next;
}

promise.then(callback)
promise.then(callback)
promise.then(callback)
    `,
    answers: [
      { code: `${a} ${a * 2} ${a * 3}` },
      { code: `${a} ${a} ${a}`, right: true },
      { text: "Ничего" },
      { text: "Ошибка" },
    ],
  };
}
