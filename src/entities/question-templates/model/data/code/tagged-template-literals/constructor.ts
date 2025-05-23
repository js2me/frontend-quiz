export default function question({
    word,
  int,
  choice,
  string,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const [a, b] = [
    choice([int(10, 50), word()]),
    choice([int(51, 100), word()]),
  ];
  const anotherCase = minorBool();
  const stringParts = choice([
    ["from point ", " to point ", "!"],
    ["using ", " but get ", "..."],
    ["open { ", " } and add { ", " }"],
  ]);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    ${anotherCase ? `"use strict";` : ""}
    function fn(a, b, c) {
      console.log(a, b, c);
    }
    
    const a = ${string(a)};
    const b = ${string(b)};
    
    fn\`${stringParts[0]}\${a}${stringParts[1]}$\{b}${stringParts[2]}\`;
    `,
    helpLinks: [
      "https://codeburst.io/javascript-what-are-tag-functions-97682f29521b",
    ],
    helpText: `
Это валидный синтаксис tag functions, более подробно про них можно прочесть ниже
    `,
    answers: [
      { code: `${string(a)} ${string(b)} ${string(stringParts)}` },
      {
        code: `${string(stringParts)} ${string(a)} ${string(b)}`,
        right: true,
      },
      { text: "Ошибка" },
      { code: `${stringParts.map((part) => string(part)).join(" ")}` },
      { code: `${string(a)} ${string(b)} ${string(stringParts[0])}` },
    ],
  };
}
