export default function question({ int }: QuestionHelpers): RawQuestion {
  const [a, b] = [int(0, 10), int(11, 20)];
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://effector.dev/docs/api/effector/createStore",
      "https://effector.dev/docs/api/effector/createEvent",
    ],
    code: `
    import { createStore, createEvent } from "effector"
    
    const store$ = createStore(${a});
    const event = createEvent();
    
    store$.on(event, (_, payload) => payload)
    
    store$.watch(state => console.log(state))
    
    event(${b});
    event(${b});
    event(${b});
    `,
    answers: [
      { text: "Ошибка" },
      { code: `${a}, ${b}`, right: true },
      { code: `${a}, ${b}, ${b}, ${b}` },
      { code: `${b}` },
      { code: `${b}, ${b}, ${b}` },
    ],
  };
}
