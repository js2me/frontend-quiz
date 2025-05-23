export default function question({ word, string }: QuestionHelpers): RawQuestion {
  const [firstWord, secondWord] = [word(), word()];
  return {
    upperText: `Как получить результат <code>"hi ${firstWord}"</code>`,
    helpLinks: [
      "https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Object_prototypes",
      "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call",
    ],
    code: `
    class A {
      name() { return ${string(firstWord)}; }
      hi() { return \`bye \${this.name()}\` }
    }
    
    class B extends A {
      name() { return \`\${super.name()}/${secondWord}\` }
      hi() { return \`hi \${this.name()}\` }
    }
    `,
    display: "grid",
    gridCols: 2,
    answers: [
      { text: "Ошибка" },
      { code: `(new A()).hi()` },
      { code: `A.prototype.hi.call(new B())` },
      { code: `(new B()).hi()` },
      { code: `B.prototype.hi.call(new A())`, right: true },
    ],
  };
}
