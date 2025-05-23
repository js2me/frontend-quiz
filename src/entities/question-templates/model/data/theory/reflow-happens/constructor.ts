export default function question({ choice }: QuestionHelpers): RawQuestion {
  return {
    upperText: "Что из нижеперечисленного вызовет Reflow ?",
    multiple: true,
    helpLinks: [
      "https://habr.com/ru/post/224187/",
      "https://gist.github.com/paulirish/5d52fb081b3570c81e3a",
      "https://rashidovr.medium.com/reflow-repaint-composite-%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-%D0%B8-%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-a777c5760295",
      "https://csstriggers.com/",
    ],
    answers: [
      { text: "Манипуляции с DOM", right: true },
      {
        text: choice(["Добавление таблиц стилей", "Удаление таблиц стилей"]),
        right: true,
      },
      {
        text: choice(["Прокрутка страницы", "Изменение размеров страницы"]),
        right: true,
      },
      { text: "Активация псевдо-классов", right: true },
      {
        text: choice(["Расчёт CSS-свойств", "изменение CSS-свойств"]),
        right: true,
      },
      { text: "Манипуляции с атрибутом <code>class</code>", right: true },
    ],
  };
}
