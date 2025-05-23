export default function question({ int, minorBool }: QuestionHelpers): RawQuestion {
  const [a, b] = [int(0, 100), int(5, 12)];
  const anotherCase = minorBool();
  return {
    upperText: "Что будет выведено в консоли?",
    display: "grid",
    gridCols: 2,
    helpText:
      anotherCase
        ? `
Начальное состояние для <code>useState()</code> можно задавать при помощи функции, которая будет вызвана 1 раз.
Поэтому последующие ререндеры никак будут вызывать функцию для получения начального состояния для <code>useState()</code>
`
        : `
<code>setState()</code>, который изменяет значение у <code>state</code> будет вызывать ререндер компонента, соответственно и <code>console.log()</code> тоже 
        `,
    helpLinks: [
      "https://reactjs.org/docs/hooks-state.html",
      "https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/",
    ],
    code: `
      import { useState, useEffect } from "react";
    
      const Component = () => {
        const [state, setState] = ${
          anotherCase
            ? `useState(() => console.info(${a}) || ${b})`
            : `useState(console.info(${a}) || ${b})`
        };
        
        useEffect(() => {
          if (state && state > 0) {
            setState(prev => prev - 1);
          }
        }, [state]);
        
        return null;
      }
    `,
    answers: [
      { text: `1 раз <code>${a}</code>`, right: anotherCase },
      { text: "Ничего" },
      { text: `${b + 1} раз <code>${a}</code>`, right: !anotherCase },
      { text: `${b} раз <code>${a}</code>` },
    ],
  };
}
