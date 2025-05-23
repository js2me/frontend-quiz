export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText:
      "[CSS] Что из перечисленных не является допустимой единицей в CSS?",
    helpLinks: [],
    helpText: `
    ch и rem – длина шрифта
    turn – единица для угла
    px – абсолютная единица длины
    dpcm – единица для разрешения экрана
    s – единица времени
    hz – единица частоты
    `,
    display: "grid",
    gridCols: 2,
    multiple: true,
    answers: [
      { code: "ems", right: true },
      { code: "turn" },
      { code: "px" },
      { code: "ch" },
      { code: "dpcm" },
      { code: "s" },
      { code: "hz" },
      { code: "rem" },
    ],
  };
}
