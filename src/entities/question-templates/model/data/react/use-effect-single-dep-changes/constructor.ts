export default function question({
  pascalCase,
  camelCase,
  word,
  int,
  string,
  choice,
}: QuestionHelpers): RawQuestion {
  const propName = camelCase(word(), "id");
  const componentName = pascalCase("display", propName);
  const propValues = choice([
    () => [int(10, 100), int(100, 200), int(200, 300)],
    () => [int(10, 100), int(100, 200)],
  ])();
  const propStringValues = propValues.map(string);

  // data: { values: string[], keys: string }[]
  // превращает данные в результат вывода в консоль
  const resultFn = (data: { values: string[], keys: string[] }[]) => {
    return data
      .map(({ values, keys }) =>
        values
          .map((value) =>
            keys.map((key) => `<code>${key}:${value}</code>`).join(",")
          )
          .join(",")
      )
      .join(",");
  };

  return {
    upperText: "Что в результате выведет этот компонент?",
    display: "grid",
    gridCols: 2,
    helpLinks: [
      "https://medium.com/nuances-of-programming/%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83%D1%82%D1%8B%D0%B5-react-hooks-%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D1%8B%D0%B9-%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80-useeffect-2027af4d8dea",
    ],
    helpText: `
      В текущем случае useEffect принимает массив зависимостей <code>[${propName}]</code>, соответственно функция, отправленная в useEffect, будет вызываться каждый раз при обновлении этой зависимости.<br/>
      Функция очистки (функция, которую возвращает функция, отправленная в useEffect) будет вызывать каждый раз перед тем, как зависимость поменялась.<br/>
      <a href="https://codesandbox.io/s/67212234-react-use-effect-example-7frcfz?file=/index.js" target="_blank">Живой пример работы useEffect на примере этой задачи</a>
    `,
    code: `
      export const ${componentName} = ({ ${propName} }) => {
      
        // Жизненный цикл компонента
        ${propValues
          .map(
            (propValue, i) =>
              `//   ${i === 0 ? "mount" : "update"}: ${propName} = ${string(
                propValue
              )}`
          )
          .join("\n")}
        //   unmount
        
        
        useEffect(() => {
            console.log(\`A:\${${propName}}\`);
            
            return () => {
                console.log(\`B:\${${propName}}\`);
            }
        }, [${propName}])
        
        return <span>{propName}</span>
      }
    `,
    answers: [
      { text: "Ошибка" },
      {
        text: resultFn([
          {
            values: propStringValues,
            keys: ["A", "B"],
          },
        ]),
        right: true,
      },
      {
        text: resultFn([
          {
            values: propStringValues,
            keys: ["A", "B"],
          },
          {
            values: propStringValues.slice(-1),
            keys: ["B"],
          },
        ]),
      },
      {
        text: resultFn([
          {
            values: propStringValues.slice(0, 1),
            keys: ["A"],
          },
          {
            values: propStringValues.slice(1),
            keys: ["A", "B"],
          },
        ]),
      },
      {
        text: resultFn([
          {
            values: propStringValues,
            keys: ["A"],
          },
          {
            values: propStringValues,
            keys: ["B"],
          },
        ]),
      },
    ],
  };
}
