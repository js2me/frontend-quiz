export default function question({ shuffle }: QuestionHelpers): RawQuestion {
  const logs = shuffle([
    { code: "console.log(false == undefined);", output: "false" },
    { code: "console.log(false == null);", output: "false" },
    { code: "console.log(null == undefined);", output: "true" },
  ]);
  const rightAnswer = logs.map((log) => log.output).join(" ");
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
${logs.map((log) => log.code).join("\n")}
    `,
    answers: 
      [
        { code: `false false true` },
        { code: `false true false` },
        { code: `true false false` },
      ].map((answer) =>
        Object.assign(Object.assign({}, answer), {
          right: answer.code === rightAnswer,
        })
      ),
  };
}
