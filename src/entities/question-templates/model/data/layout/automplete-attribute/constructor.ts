export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText:
      "К какому из перечисленных тегов применим атрибут <code>autocomplete</code>?",
    multiple: true,
    answers: [
      { code: "<form>", right: true, language: "html" },
      { code: "<input>", right: true, language: "html" },
      { code: "<textarea>", right: true, language: "html" },
      { code: "<select>", right: true, language: "html" },
    ],
  };
}
