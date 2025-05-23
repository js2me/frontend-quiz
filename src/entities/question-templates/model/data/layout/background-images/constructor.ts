export default function question(): RawQuestion {
  return {
    upperText:
      "[CSS] свойство <code>background-image</code> может содержать несколько изображений?",
    answers: [
      {
        text: `Да`,
        right: true,
      },
      {
        text: `Нет`,
      },
    ],
  };
}
