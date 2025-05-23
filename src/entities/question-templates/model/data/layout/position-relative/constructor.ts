export default function question(): RawQuestion {
  return {
    upperText:
      "[CSS] Относительно какого элемента позиционируется элемент с <code>position: absolute</code> ?",
    helpLinks: [
      "https://html5book.ru/css-position/#:~:text=%D0%90%D0%B1%D1%81%D0%BE%D0%BB%D1%8E%D1%82%D0%BD%D0%BE%D0%B5%20%D0%BF%D0%BE%D0%B7%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5,%3B%20%D0%B8%20position%3A%20fixed%3B%20.",
    ],
    helpText: `
      Позиционирование элемента с <code>position: absolute</code> будет только относительно ближайшего родителя с <code>position: relative</code>, <code>position: fixed</code>, <code>position: absolute</code><br/>
      Иначе позиционирование элемента будет осуществляться относительно всего документа
    `,
    answers: [
      {
        text: "Ближайшего родителя с <code>display: block</code> или всего документа",
      },
      {
        text: "Только родителя с <code>position: sticky</code> или <code>position: relative</code> или всего документа",
      },
      {
        text: "Ближайшего родителя с <code>position</code> не <code>static</code> или всего документа",
      },
      {
        text: "Ближайшего родителя с <code>position: relative</code>, <code>position: fixed</code>, <code>position: absolute</code> или всего документа",
        right: true,
      },
    ],
  };
}
