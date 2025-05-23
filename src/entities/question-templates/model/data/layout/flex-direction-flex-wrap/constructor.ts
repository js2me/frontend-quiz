export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText:
      "Какое свойство является сокращением для свойств <code>flex-direction</code> и <code>flex-wrap</code>?",
    answers: [
      { code: "flex-style" },
      { code: "flex-type" },
      { code: "flex-flow", right: true },
      { code: "flex-params" },
      { text: "Такого свойства не существует" },
    ],
  };
}
