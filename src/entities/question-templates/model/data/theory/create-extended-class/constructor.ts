export default function question(helpers: QuestionHelpers): RawQuestion {
  const parentClassName = helpers.pascalCase(helpers.varName());
  const childClassName = helpers.pascalCase(helpers.varName());

  return {
    upperText: helpers.choice([
      `Как создать класс <code>${childClassName}</code>, который будет наследником класса <code>${parentClassName}</code>?`,
      `Как создать класс <code>${childClassName}</code>, который будет наследоваться от класса <code>${parentClassName}</code>?`,
      `Как создать класс <code>${childClassName}</code>, у которого класс <code>${parentClassName}</code> будет являться его родителем?`,
    ]),
    code: `
class ${parentClassName} {}
    `,
    answers: [
      {
        text: `<code>class ${childClassName} implements ${parentClassName} {}</code>`,
      },
      {
        text: `<code>class ${childClassName} extend ${parentClassName} {}</code>`,
      },
      {
        text: `<code>class ${childClassName} extends ${parentClassName} {}</code>`,
        right: true,
      },
      {
        text: `<code>class ${childClassName} extends from ${parentClassName} {}</code>`,
      },
    ],
  };
}
