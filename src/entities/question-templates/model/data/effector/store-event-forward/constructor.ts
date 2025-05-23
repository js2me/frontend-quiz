export default function question({ int }: QuestionHelpers): RawQuestion {
  const [a, b] = [int(0, 10), int(11, 20)];
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://effector.dev/docs/api/effector/createStore",
      "https://effector.dev/docs/api/effector/sample",
      "https://effector.dev/docs/api/effector/forward",
    ],
    code: `
    import { createStore, createEvent, forward } from "effector"
    
    const store$ = createStore(${a});
    const event = createEvent();
    
    store$.watch(state => console.log('state: ', state))
    
    forward({ from: event, to: store$ })
    
    event(${b});
    `,
    answers: [
      { text: "Ошибка" },
      { code: `"state: ${a}", "state: ${b}"`, right: true },
      { code: `"state: ${b}"` },
      { code: `"state: ${b}", "state: ${b}"` },
      { code: `"state: ${a}"` },
    ],
  };
}
