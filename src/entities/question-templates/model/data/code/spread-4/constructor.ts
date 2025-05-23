export default function question({
    word,
  shuffle,
  int,
  char,
  string,
}: QuestionHelpers): RawQuestion {
  const object = { [word()]: int(10, 60) };
  const mergableValues = {
    c: object,
    d: word(),
  };
  const intValue = int(100, 200);
  const [a, b, c, d, e] = shuffle([
    { name: char(), value: null },
    { name: char(), value: undefined },
    { name: char(), value: mergableValues.c },
    { name: char(), value: mergableValues.d },
    { name: char(), value: intValue },
  ]);
  return {
    upperText: "Что будет выведено в консоль ?",
    code: `
    const ${a.name} = ${string(a.value)};
    const ${b.name} = ${string(b.value)};
    const ${c.name} = ${string(c.value)};
    const ${d.name} = ${string(d.value)};
    const ${e.name} = ${string(e.value)};
    
    console.info({ ...${a.name}, ...${b.name}, ...${c.name}, ...${d.name}, ...${
      e.name
    } });
    `,
    answers: [
      {
        code: string(
          Object.assign(Object.assign({}, mergableValues.c), mergableValues.d)
        ),
        right: true,
      },
      { code: string(Object.assign({}, mergableValues.c)) },
      {
        code: string(
          Object.assign(
            Object.assign(
              Object.assign({}, mergableValues.c),
              mergableValues.d
            ),
            intValue.toString()
          )
        ),
      },
      { text: "Ошибка" },
    ],
  };
}
