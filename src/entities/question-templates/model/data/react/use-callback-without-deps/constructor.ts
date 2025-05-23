export default function question(helpers: QuestionHelpers): RawQuestion {
  return {
    upperText: "Есть ли проблемы в этом коде?",
    code: `
      const [list, setList] = useState([]);
      const addItemToList = useCallback(item => {
        setList([...list, item]);
      }, []);
    `,
    answers: [
      { text: "В этом коде проблем нет" },
      {
        text: "После каждого вызова <code>addItemToList</code>, в <code>list</code> будет только <code>item</code>",
        right: true,
      },
      {
        text: "После каждого вызова <code>addItemToList</code>, в <code>list</code> будет оставаться пустым массивом",
      },
      {
        text: "<code>addItemToList</code> будет замемоизирован и в список добавится только один элемент от первого вызова",
      },
      {
        text: "<code>addItemToList</code> будет зациклен после первого вызова",
      },
    ],
  };
}
