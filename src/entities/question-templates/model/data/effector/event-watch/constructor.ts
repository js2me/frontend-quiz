export default function question({
    int,
  char,
  bool,
  choice,
}: QuestionHelpers): RawQuestion {
  const values = { a: int(0, 9), b: int(10, 20), c: int(21, 30) };
  const events = { a: char(), b: char() };
  const failed = bool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: ["https://effector.dev/docs/api/effector/createEvent"],
    code: `
    import { createEvent } from "effector"
    
    const ${events.a} = createEvent()
    
    ${events.a}.${
      failed ? choice(["subscribe", "on", "listen"]) : "watch"
    }(arg => console.log('arg: ', arg))
    
    ${events.a}(${values.a})
    
    `,
    answers: [
      { text: "Ошибка", right: failed },
      { code: `"arg: ${values.a}"`, right: !failed },
    ],
  };
}
