export default function question({ int }: QuestionHelpers): RawQuestion {
  const [a, b] = [int(0, 10), int(11, 20)];
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://effector.dev/docs/api/effector/createStore",
      "https://effector.dev/docs/api/effector/sample",
      "https://effector.dev/docs/api/effector/store",
    ],
    code: `
    import { createStore, createEvent, sample } from "effector"
    
    const store$ = createStore(${a});
    const event = createEvent();
    
    sample({
      source: event,
      fn: Number,
      target: store$,
    })
    
    store$.watch(state => console.log('state: ', state))
    
    event(${b});
    
    console.log(store$.getState())
    `,
    answers: [
      { text: "Ошибка" },
      { code: `"state: ${a}", "state: ${b}", ${b}`, right: true },
      { code: `"state: ${b}", ${b}` },
      { code: `"state: ${a}", "state: ${b}", ${a}` },
      { code: `"state: ${a}", ${a}` },
      { code: `${a}` },
    ],
  };
}
