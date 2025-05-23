export default function question({
    word,
  int,
  choice,
  string,
  minorBool,
}: QuestionHelpers): RawQuestion {
  const variable = word();
  const [a, b] = [
    choice([int(10, 50), word()]),
    choice([int(51, 100), word()]),
  ];
  const anotherCase = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpText: `
    С помощью ключевого слова <code>var</code> можно определять сколько угодно переменных с одним и тем же именем.
    Переменная будет хранить последнее присвоенное значение.

    Но такой трюк нельзя проделать с <code>let</code> и <code>const</code>, т.к. у них блочная область видимости.

    <code>"use strict";</code> режим никак не повлияет на исполнение этого кода
    `,
    code: `
    ${anotherCase ? `"use strict";` : ""}
    var ${variable} = ${string(a)};
    var ${variable} = ${string(b)};
    
    console.log(${variable});
    `,
    answers: [
      { code: string(a) },
      { code: string(b), right: true },
      { text: "Ошибка" },
    ],
  };
}
