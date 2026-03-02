export const sortAnswersBySelectedOrder = <
  T extends { selectedOrder?: number | null },
>(
  answers: T[],
): T[] => {
  const ordered: T[] = [];
  const unordered: T[] = [];

  answers.forEach((answer) => {
    if (answer.selectedOrder == null) {
      unordered.push(answer);
    } else {
      ordered.push(answer);
    }
  });

  return [
    ...ordered.sort((a, b) => a.selectedOrder! - b.selectedOrder!),
    ...unordered,
  ];
};
