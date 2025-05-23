export default function question(): RawQuestion {
  return {
    upperText: "Что такое <b>CORS</b>?",
    helpLinks: ["https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"],
    answers: [
      {
        text: `Технология приоритета загрузки ресурсов у источников`,
      },
      {
        text: `Технология совместного использования ресурсов между разными источниками`,
        right: true,
      },
      {
        text: `Технология распределения запросов на разные доменные имена`,
      },
    ],
  };
}
