export default function question({ int, minorBool }: QuestionHelpers): RawQuestion {
  const [a, b] = [int(0, 9), int(10, 20)];
  const anotherCase = minorBool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://effector.dev/docs/api/effector/restore",
      "https://effector.dev/docs/api/effector/createEvent",
      "https://effector.dev/docs/api/effector/store",
    ],
    code: `
    import { restore, createEvent } from "effector"
    
    const event = createEvent();
    const store$ = restore(event${anotherCase ? "" : `, ${a}`});
    
    store$.watch(state => console.log('state: ', state))
    
    event(${b})
    `,
    answers: [
      { text: "Ошибка", right: anotherCase },
      {
        code: `"state: ${anotherCase ? "undefined" : a}", "state: ${b}"`,
        right: !anotherCase,
      },
      { code: `"state: ${b}"` },
      { text: "Ничего" },
      { code: `"state: ${anotherCase ? "undefined" : a}"` },
    ],
  };
}
