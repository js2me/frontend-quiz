export default function question({ choice, word }: QuestionHelpers): RawQuestion {
  const attrName = choice(["title", "foo", "bar", "id", "name"]);
  const attrValue = word();

  return {
    upperText: `Как работает <code>[${attrName}^="${attrValue}"]</code> селектор ?`,
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Web/CSS/Attribute_selectors",
    ],
    answers: [
      {
        text: `Обозначает элемент с именем атрибута <code>${attrName}</code> значение которого начинается с <code>"${attrValue}"</code>`,
        right: true,
      },
      {
        text: `Обозначает элемент с именем атрибута <code>${attrName}</code> чьё значение содержит по крайней мере одно вхождение строки <code>"${attrValue}"</code> как подстроки.`,
      },
      {
        text: `Обозначает элемент с именем атрибута <code>${attrName}</code> чьё значение заканчивается на <code>"${attrValue}"</code>`,
      },
      { text: "Это невалидный селектор" },
    ],
  };
}
