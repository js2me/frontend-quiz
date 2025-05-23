export default function question(): RawQuestion {
  return {
    upperText: `[CSS] Как с помощью CSS можно центрировать inline контент блочного элемента (<code><div></code>) по горизонтали?`,
    answers: [
      { code: `align-items: center`, language: "css" },
      { code: `text-align: center`, language: "css", right: true },
      { code: `vertical-align: center`, language: "css" },
      { code: `padding: auto`, language: "css" },
    ],
  };
}
