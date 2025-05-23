export default function question(): RawQuestion {
  return {
    upperText:
      "[CSS] Какие единицы измерения в CSS описывают разрешение экрана в точках на дюйм?",
    helpLinks: ["https://developer.mozilla.org/en-US/docs/Web/CSS/resolution"],
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "dpi", right: true },
      { text: "dpcm" },
      { text: "dpx" },
      { text: "dppx" },
      { text: "dp" },
    ],
  };
}
