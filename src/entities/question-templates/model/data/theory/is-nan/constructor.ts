export default function question(): RawQuestion {
  return {
    upperText:
      "Чем отличается поведение <code>isNaN()</code> и <code>Number.isNaN()</code>?",
    answers: [
      {
        text: `
        <code>isNaN()</code> - преобразует значение в число, а потом проверяет его
        <code>Number.isNaN()</code> - не преобразует значение в число
        `,
        right: true,
      },
      {
        text: `
        <code>Number.isNaN()</code> - преобразует значение в число, а потом проверяет его
        <code>isNaN()</code> - не преобразует значение в число
        `,
      },
      {
        text: "<code>Number.isNaN()</code> и <code>isNaN()</code> работают одинаково",
      },
    ],
  };
}
