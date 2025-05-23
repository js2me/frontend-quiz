export default function question({ minorBool, word, choice }: QuestionHelpers): RawQuestion {
  const lastRight = minorBool();
  const attrName = choice(["title", "foo", "bar", "id", "name"]);
  const [a, b, c, d, e, f] = Array(6).fill(null).map(word);

  return {
    upperText: "[CSS] Какие селекторы валидны ?",
    multiple: true,
    display: "grid",
    gridCols: 2,
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Web/CSS/Attribute_selectors",
    ],
    helpText: `
<h3><code>[${attrName}^="${a}"]</code></h3>
Обозначает элемент с именем атрибута <code>${attrName}</code> значение которого начинается с <code>"${a}"</code>

<h3><code>[${attrName}~="${a}"]</code></h3>
Обозначает элемент с именем атрибута <code>${attrName}</code> значением которого является набор слов разделённых пробелами, одно из которых в точности равно <code>${a}</code>

<h3><code>[${attrName}|="${f}"]</code></h3>
Обозначает элемент с именем атрибута <code>${attrName}</code>. Его значение при этом может быть или в точности равно <code>"${f}"</code> или может начинаться с <code>"${f}"</code> со сразу же следующим "-" (U+002D). Это может быть использовано когда язык описывается с подходом.  

<h3><code>[${attrName}$="${b}"]</code></h3>
Обозначает элемент с именем атрибута <code>${attrName}</code> чьё значение заканчивается на <code>"${b}"</code>

<h3><code>[${attrName}*="${c}"]</code></h3>
Обозначает элемент с именем атрибута <code>${attrName}</code> чьё значение содержит по крайней мере одно вхождение строки <code>"${c}"</code> как подстроки.

`,
    answers: [
      {
        code: choice([`[${attrName}^="${a}"]`, `[${attrName}~="${a}"]`]),
        language: "css",
        right: true,
      },
      { code: `[${attrName}$="${b}"]`, language: "css", right: true },
      { code: `[${attrName}*="${c}"]`, language: "css", right: true },
      { code: `[${attrName}#="${d}"]`, language: "css" },
      { code: `[${attrName}+="${e}"]`, language: "css" },
      {
        code: lastRight ? `[${attrName}|="${f}"]` : `[${attrName}?="${f}"]`,
        language: "css",
        right: lastRight,
      },
    ],
  };
}
