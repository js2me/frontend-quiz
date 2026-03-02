export const sortAnswersByOrder = <T extends { order?: number }>(
  answers: T[],
): T[] => {
  const ordered: T[] = [];
  const unordered: T[] = [];

  answers.forEach((answer) => {
    if (answer.order == null) {
      unordered.push(answer);
    } else {
      ordered.push(answer);
    }
  });

  return [...ordered.sort((a, b) => a.order! - b.order!), ...unordered];
};
