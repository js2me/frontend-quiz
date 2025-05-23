export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Как перечисляются функции в свойстве <code>transform</code>?",
    answers: [
      { text: "Через запятую" },
      { text: "Через дефис" },
      { text: "Через пробел", right: true },
      { text: "Через точку с запятой" },
      {
        text: "Свойство <code>transform</code> позволяет указать только одну функцию",
      },
      {
        text: "Ни один из перечисленных вариантов не является правильным ответом",
      },
    ],
  };
}
