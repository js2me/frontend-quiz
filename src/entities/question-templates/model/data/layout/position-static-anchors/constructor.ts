export default function question(): RawQuestion {
  return {
    upperText:
      "[CSS] Если элементу прописать свойство <code>position: static</code> , то будут ли доступны свойства: <code>left</code>, <code>top</code>, <code>right</code> и <code>bottom</code>?",
    answers: [
      {
        text: `Да`,
      },
      {
        text: `Нет`,
        right: true,
      },
    ],
  };
}
