export default function question({ int, minorBool, choice }: QuestionHelpers): RawQuestion {
  const [a, b] = [int(0, 9), int(10, 19)];
  const anotherCase = minorBool();
  return {
    upperText: "Что в результате выведет этот компонент?",
    display: "grid",
    gridCols: 2,
    code: `
      import { useState, useEffect } from "react";
    
      const Component = () => {
        const [state, setState] = useState([${a}]);
        
        useEffect(() => {
          setState(${anotherCase ? `` : choice([`[${b}]`, `() => [${b}]`])});
        }, [])
        
        return <>{state.join(',')}</>
      }
    `,
    answers: [
      { text: "Ошибка", right: anotherCase },
      { code: `undefined` },
      { code: `${a}` },
      { code: `${b}`, right: !anotherCase },
      { code: `${a},${b}` },
    ],
  };
}
