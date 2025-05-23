export default function question({ choice, word }: QuestionHelpers): RawQuestion {
  const attrName = choice(["title", "foo", "bar", "id", "name"]);
  const attrValue = word();

  return {
    upperText: `Как работает <code>[${attrName}|="${attrValue}"]</code> селектор ?`,
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Web/CSS/Attribute_selectors",
      "https://www.w3schools.com/cssref/tryit.asp?filename=trycss_sel_attribute_hyphen",
    ],
    answers: [
      {
        text: `Обозначает элемент с именем атрибута <code>${attrName}</code> значение которого начинается с <code>"${attrValue}"</code>`,
      },
      {
        text: `Обозначает элемент с именем атрибута <code>${attrName}</code> чьё значение содержит по крайней мере одно вхождение строки <code>"${attrValue}"</code> как подстроки.`,
      },
      {
        text: `Обозначает элемент с именем атрибута <code>${attrName}</code>. Его значение при этом может быть или в точности равно <code>"${attrValue}"</code> или может начинаться с <code>"${attrValue}"</code> со сразу же следующим <code>"-"</code>`,
        right: true,
      },
      { text: "Это невалидный селектор" },
    ],
  };
}
