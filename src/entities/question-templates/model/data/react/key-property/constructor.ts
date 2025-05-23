export default function question({
    shuffle,
  int,
  string,
}: QuestionHelpers): RawQuestion {
  const [stringA, stringB] = [`SSQ${int(0, 4)}`, `SSQ${int(5, 9)}`];
  const items = shuffle([
    {
      id: int(5520, 5524),
      value: stringA,
    },
    {
      id: int(5525, 5529),
      value: stringB,
    },
    {
      id: int(5530, 5535),
      value: stringA,
    },
  ]);
  return {
    upperText: `Какое значение свойства <code>key</code> у тега <code><p></code> в данном случае самое подходящее ?`,
    display: "grid",
    gridCols: 2,
    helpText:
      `Свойство <code>key</code> должно быть уникальным, чтобы React лучше понимал какой компонент изменился`,
    helpLinks: [
      "https://habr.com/ru/company/hh/blog/352150/",
      "https://reactjs.org/docs/lists-and-keys.html#keys",
    ],
    code: `
      import { useState } from "react";

      const Component = () => {
        const [items, setItems] = useState(${string(items)});
        
        
        const shuffleItems = () => {
            setItems(items => [...items.slice(1), items[0]]);
        };
        
        return (
          <div>
            <button onClick={shuffleItems}>click me</button>   
            {items.map((item, index) => <p key={KEY}>{item}</p>)} 
          </div>
        );
      }
    `,
    answers: [
      { code: `index` },
      { code: `item` },
      { code: `item.id`, right: true },
      { code: `item.value` },
      { code: `Date.now()` },
      { code: `Math.random()` },
    ],
  };
}
