export default function question({ _minorBool }: QuestionHelpers): RawQuestion {
  return {
    upperText: 'У каких примитив нет методов?',
    display: 'grid',
    gridCols: 2,
    multiple: true,
    answers: [
      { text: '<code>null</code>', right: true },
      { text: '<code>bigint</code>' },
      { text: '<code>boolean</code>' },
      { text: '<code>undefined</code>', right: true },
      { text: '<code>string</code>' },
      {
        text: '<code>symbol</code>',
        right: true,
      },
    ],
  };
}
