export default function question(): RawQuestion {
  return {
    upperText:
      "Как ведет себя <b>JavaScript</b> при обращении к несуществующему индексу массива?",
    answers: [
      {
        text: `Возвращает <code>undefined</code>`,
        right: true,
      },
      {
        text: `Возвращает случайный элемент из массива`,
      },
      {
        text: `Возвращает <code>null</code>`,
      },
      {
        text: `Падает с ошибкой`,
      },
    ],
  };
}
