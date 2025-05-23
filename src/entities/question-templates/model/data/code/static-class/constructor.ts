export default function question({
    word,
  string,
  pascalCase,
  camelCase,
  bool,
}: QuestionHelpers): RawQuestion {
  const Class = pascalCase(word());
  const fieldName = word();
  const fieldNameMethod = camelCase("change", fieldName);
  const instance = camelCase(Class);
  const values = { a: word(), b: word(), c: word() };
  const anotherCase = bool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpText: `
    Функция <code>${fieldNameMethod}</code> является статичной. Статичные методы не имеют доступа к экземплярам класса, и, соответственно, к контексту экземпляра тоже.
    `,
    helpLinks: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static",
    ],
    code: `
    class ${Class} {
      static ${fieldNameMethod}(${fieldName}) {
        this.${fieldName} = ${fieldName};
        return this.${fieldName};
      }
    
      constructor({ ${fieldName} = ${string(values.a)} } = {}) {
        this.${fieldName} = ${fieldName};
      }
    }
    
    const ${instance} = new ${Class}({ ${fieldName}: ${string(values.b)} });
    ${
      anotherCase
        ? `${instance}.constructor.${fieldNameMethod}(${string(values.c)})`
        : `${instance}.${fieldNameMethod}(${string(values.c)})`
    };
    
    console.log(${instance}.${fieldName});
    `,
    answers: [
      { code: string(values.a) },
      { code: string(values.b), right: anotherCase },
      { code: string(values.c) },
      { text: "Ошибка", right: !anotherCase },
    ],
  };
}
