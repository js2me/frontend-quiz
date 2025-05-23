export default function question(): RawQuestion {
  return {
    upperText:
      "[CSS] Если значение position задано как <code>static</code>, сработает ли <code>z-index</code>?",
    helpText:
      `Это свойство работает только у элементов, у которых значение <code>position</code> задано как <code>absolute, fixed, sticky</code> или <code>relative</code>`,
    answers: [
      { text: "Да" },
      { text: "Нет", right: true },
      {
        text: "<code>static</code> значение у CSS свойства <code>position</code> невалидно",
      },
    ],
  };
}
