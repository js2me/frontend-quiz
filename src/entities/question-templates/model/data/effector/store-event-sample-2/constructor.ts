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
    
    store$.watch(state => console.log('state: ', state))
    
    const event = sample({
      source: store$,
      fn: () => ${b},
      target: store$,
    })
    
    event();
    
    console.log(store$.getState())
    `,
    answers: [
      { text: "Ошибка", right: true },
      { code: `"state: ${a}", "state: ${b}", ${b}` },
      { code: `"state: ${b}", ${b}` },
      { code: `"state: ${a}", "state: ${b}", ${a}` },
      { code: `"state: ${a}", ${a}` },
      { code: `${a}` },
    ],
  };
}
