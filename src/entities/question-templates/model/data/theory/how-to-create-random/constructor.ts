export default function question({ choice }: QuestionHelpers): RawQuestion {
  const answerText = (answer: string) => {
    const answerWithCode = `<code>${answer}</code>`;
    return choice([
      `При помощи ${answerWithCode}`,
      `С помощью ${answerWithCode}`,
      `Через ${answerWithCode}`,
      `Используя ${answerWithCode}`,
    ]);
  };

  return {
    upperText: "Как получить случайное число?",
    answers: [
      { text: answerText("Math.random()"), right: true },
      { text: answerText("Math.rnd()") },
      { text: answerText("Math.rand()") },
      { text: answerText("Math.seed()") },
    ],
  };
}
