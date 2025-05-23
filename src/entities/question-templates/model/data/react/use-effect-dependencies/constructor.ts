export default function question({ int, minorBool }: QuestionHelpers): RawQuestion {
  const times = int(1, 9);
  const anotherCase = minorBool();
  return {
    upperText: `Сколько раз выполнится код внутри <code>useEffect</code> при условном клике на <code><button></code> ${times} раз ?`,
    display: "grid",
    gridCols: 2,
    code: `
      import { useState, useEffect } from "react";
    
      const Component = () => {
        const [state, setState] = useState(false);
        
        useEffect(() => {
          console.info('hello from useEffect!');
        }${anotherCase ? ", []" : ""})
        
        return (
          <button onClick={() => setState(prev => !prev)}>
            click me
          </button>
        );
      }
    `,
    answers: [
      { text: `${times} раз` },
      { text: `${times + 1} раз`, right: !anotherCase },
      { text: `1 раз`, right: anotherCase },
      { text: `0 раз` },
    ],
  };
}
