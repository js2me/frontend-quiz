export default function question({
  int,
  bool,
  minorBool,
  }: QuestionHelpers): RawQuestion {
  const [a, b] = [int(0, 10), int(11, 20)];
  const failed = minorBool();
  const anotherCase = bool();
  return {
    upperText: "Что будет выведено в консоль ?",
    helpLinks: [
      "https://effector.dev/docs/api/effector/createStore",
      "https://effector.dev/docs/api/effector/createEvent",
      "https://effector.dev/docs/api/effector/filter",
    ],
    code: `
    import { createStore, createEvent, forward, guard } from "effector"
    
    const store$ = createStore(${a});
    const event = createEvent();
    
    store$.watch(state => console.log(state))
    
    guard({
      source: event,
      ${failed ? "fn" : "filter"}: (value) => value ${
      anotherCase ? "<" : ">"
    } ${a},
      target: store$,
    })
    
    event(${b});
    `,
    answers: [
      { text: "Ошибка", right: failed },
      { code: `${a}, ${b}`, right: !failed && !anotherCase },
      { code: `${a}`, right: !failed && anotherCase },
    ],
  };
}
