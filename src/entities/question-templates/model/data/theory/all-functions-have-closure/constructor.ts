export default function question(): RawQuestion {
  return {
    upperText:
      "Можно ли сказать, что в JavaScript все функции являются замыкающими ?",
    display: "grid",
    gridCols: 2,
    helpText: `
Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ.
В некоторых языках это невозможно, или функция должна быть написана специальным образом, чтобы получилось замыкание.
В JavaScript, все функции изначально являются замыканиями (есть только одно исключение, про которое рассказано в <a href="https://learn.javascript.ru/new-function" target="_blank">Синтаксис "new Function"</a>).
    `,
    helpLinks: [
      "https://learn.javascript.ru/closure",
      "https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures",
    ],
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
