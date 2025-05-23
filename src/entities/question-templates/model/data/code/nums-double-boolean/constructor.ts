export default function question({ string, choice, int }: QuestionHelpers): RawQuestion {
  const joinSymbol = choice(["_", ",", "-", "+"]);
  const nums = [
    int(-5, -1),
    0,
    int(1, 5),
    int(2, 6),
    choice([null, undefined]),
    int(10, 18),
  ];

  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
const nums = ${string(nums)};

var output = nums.map(Boolean).filter(Boolean).join('${joinSymbol}')

console.log(output)
    `,
    answers: [
      { text: "Ошибка" },
      { code: string("") },
      { code: string(joinSymbol) },
      { code: string(Array(6).fill(true).join(joinSymbol)) },
      { code: string(Array(3).fill(true).join(joinSymbol)) },
      {
        code: string(nums.map(Boolean).filter(Boolean).join(joinSymbol)),
        right: true,
      },
    ],
  };
}
