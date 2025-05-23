export default function question({ bool, char }: QuestionHelpers): RawQuestion {
  const [a, b, c, d] = [char(), char(), char(), char()];
  const anotherCase = bool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/API/queueMicrotask",
    ],
    code: `
      queueMicrotask(() => console.info("${a}"))
      setTimeout(() => console.info("${b}"))
      queueMicrotask(() => console.info("${c}"))
      new Promise(() => ${anotherCase ? `console.info("${d}")` : `"${d}"`})
        ${anotherCase ? "" : `.then(a => console.info(a))`}
    
    `,
    answers: [
      { code: `"${d}", "${b}"` },
      { code: `"${a}", "${c}", "${d}", "${b}"`, right: !anotherCase },
      { code: `"${d}", "${a}", "${c}", "${b}"`, right: anotherCase },
      { code: `"${b}", "${d}", "${a}", "${c}"` },
      { code: `"${a}", "${c}", "${b}", "${d}"` },
      { text: "Ошибка" },
    ],
  };
}
