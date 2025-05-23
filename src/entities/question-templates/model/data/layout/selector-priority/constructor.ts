export default function question(): RawQuestion {
  return {
    upperText: "[CSS] Что такое специфичность селекторов CSS ?",
    helpLinks: ["https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"],
    answers: [
      {
        text: `
      это свойство определяющее приоритет стилевого правила
      `,
        right: true,
      },
      {
        text: `
      это свойство определяющее порядок загрузки стилевого правила
      `,
      },
      {
        text: `
      это методология написания стилевых правил
      `,
      },
      {
        text: `
      это набор правил определяющий порядок загрузки CSS файлов
      `,
      },
    ],
  };
}
