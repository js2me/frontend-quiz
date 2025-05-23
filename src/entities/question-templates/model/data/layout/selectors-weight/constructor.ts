export default function question({ word, value, htmlTag }: QuestionHelpers): RawQuestion {
  const className = word();
  const attrValue = value();
  const id = word();
  const tagName = htmlTag();

  return {
    upperText: "Вес селекторов (по убыванию)",
    ordered: true,
    multiple: true,
    helpText: `
Селектор с наивысшим «счётом» будет преобладать, независимо от порядка, в котором появляются правила CSS.
Правильный порядок:  
1. <code>style=""</code>
2. <code>#${id}</code>
3. <code>.${className}</code>
4. <code>[attr="${attrValue}"]</code>
5. <code>${tagName}</code>
6. <code>*</code>

    `,
    helpLinks: [
      "https://doka.guide/css/specificity/",
      "http://css.yoksel.ru/specifity/",
    ],
    answers: [
      { code: `style=""`, right: true, order: 0, language: "js" },
      { code: `#${id}`, right: true, order: 1, language: "css" },
      { code: `.${className}`, right: true, order: 2, language: "css" },
      { code: `[attr="${attrValue}"]`, right: true, order: 3, language: "css" },
      { code: tagName, right: true, order: 4, language: "css" },
      { code: "*", right: true, order: 5, language: "css" },
    ],
  };
}
