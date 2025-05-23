export default function question({ word, string }: QuestionHelpers): RawQuestion {
  const [a, b, c] = [`${word()}!`, `${word()}!`, `${word()}!`];
  return {
    upperText: "Что будет выведено в консоль ?",
    helpType: "big",
    helpText: `
  Сначала мы вызываем функцию <code>fn1</code>. В первой строке <code>fn1</code> происходит вызов обещания <code>promise</code>, которое является асинхронной операцией.
  Пока движок занят обработкой обещания, он продолжает выполнение функции <code>fn1</code>.
  Следующая строка является асинхронной функцией <code>setTimeout</code>, поэтому её обратный вызов будет отправлен в <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank">Web API</a>. (см. <a href="https://github.com/lydiahallie" target="_blank">автора вопроса</a> о цикле событий <a href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif" target="_blank">здесь</a>.)

  Обещание, как и таймер, является асинхронной операцией, поэтому функция продолжит выполняться несмотря на обработку обещания и обратного вызова <code>setTimeout</code>. Выходит так, что <code>${string(
    c
  )}</code> попадет в консоль первой, т.к. не является асинхронной операцией. Далее, в следующей строке <code>fn1</code>, обещание будет выполнено и <code>${string(
      a
    )}</code> выводится в консоль. Однако, т.к. далее мы вызываем <code>fn2()</code>, стэк вызывов не будет пустым, из-за чего обратный вызов функции <code>setTimeout</code> пока не будет добавлен в стэк вызовов.
  
  В первой строке <code>fn2</code> мы ожидаем выполнения обещания <code>promise</code>. С помощью ключевого слова await мы приостанавливаем выполнение функции пока обещание не будет выполнено (или отклонено). Затем выводим в консоль ожидаемое значение res (т.к. предыдущее обещание вернуло обещание). После чего в консоль попадает <code>${string(
    a
  )}</code>.
  
  Следующая строка является асинхронной функцией <code>setTimeout</code>, которая отправляет обратный вызов в <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank">Web API</a>.
  
  Мы перешли к следующей строке функции <code>fn2</code> которая выводит в консоль <code>${string(
    c
  )}</code> Теперь, когда стэк вызовов извлечен из <code>fn2</code>, он становится пустым. Обратные вызовы, которые ожидали очереди <code>(() => console.log(${string(
      b
    )})</code> из <code>fn1</code>, и <code>() => console.log(${string(
      b
    )})</code> из <code>fn2</code>) добавлены в стэк вызовов один за другим. Первый вызов выведет в консоль <code>${string(
      b
    )}</code> и будет извлечен из стэка. Следующий вызов также выведет <code>${string(
      b
    )}</code> и тоже будет извлечен из стэка вызовов. Лог будет равен <code>${string(
      c
    )}</code> <code>${string(a)}</code> <code>${string(
      a
    )}</code> <code>${string(c)}</code> <code>${string(
      b
    )}</code> <code>${string(b)}</code>
    `,
    code: `
    const promise = Promise.resolve(Promise.resolve(${string(a)}));
    
    function fn1() {
      promise.then(res => res).then(res => console.log(res));
      setTimeout(() => console.log(${string(b)}, 0));
      console.log(${string(c)});
    }
    
    async function fn2() {
      const res = await promise;
      console.log(await res);
      setTimeout(() => console.log(${string(b)}, 0));
      console.log(${string(c)});
    }
    
    fn1();
    fn2();
    `,
    answers: [
      {
        code: `${string(a)} ${string(c)} ${string(a)} ${string(c)} ${string(
          c
        )} ${string(a)}`,
      },
      {
        code: `${string(c)} ${string(b)} ${string(a)} ${string(c)} ${string(
          b
        )} ${string(a)}`,
      },
      {
        code: `${string(a)} ${string(c)} ${string(c)} ${string(a)} ${string(
          b
        )} ${string(b)}`,
      },
      {
        code: `${string(c)} ${string(a)} ${string(a)} ${string(c)} ${string(
          b
        )} ${string(b)}`,
        right: true,
      },
      { text: "Ошибка" },
    ],
  };
}
