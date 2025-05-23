export default function question({ choice, bool }: QuestionHelpers): RawQuestion {
  const className = choice(["User", "Monster", "Tester", "Admin", "Foo"]);
  const fieldName = choice(["isAdmin", "isSuperUser", "isUser", "isMonster"]);
  const fieldValue = bool();
  const instanceName = className.toLowerCase();
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    function ${className}() {}
    ${className}.prototype = { ${fieldName}: ${fieldValue} };

    let ${instanceName} = new ${className}();

    ${instanceName}.prototype = { ${fieldName}: ${!fieldValue} };

    console.log(${instanceName}.${fieldName});
    `,
    answers: [
      { code: `false`, right: !fieldValue },
      { code: `undefined` },
      { code: `true`, right: fieldValue },
    ],
  };
}
