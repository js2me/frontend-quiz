export type TimerData = { seconds: number; minutes: number };

declare global {
  /** функции рандомных значений */
  type QuestionRandHelpers = {
    /** Выдает рандомное слово строку */
    word: () => string;

    /** Выдает рандомное целое число в диапазоне от min до max */
    int: (min?: number, max?: number) => number;

    /** Выдает рандомное число с плавающей точкой в диапазоне от min до max */
    float: (min?: number, max?: number) => number;

    /** Выдает рандомное булево значение */
    bool: () => boolean;

    /** Выдает рандомный символ */
    char: () => string;

    /** Выдает рандомное булево значение с большей редкостью выпадения true */
    minorBool: () => boolean;

    /** Выдает рандомное булево значение с меньшей редкостью выпадения false */
    majorBool: () => boolean;

    /** Выдает рандомный HEX цвет */
    color: () => string;

    /** Рандомно меняет порядок элементов массива */
    shuffle: <T>(arr: T[]) => T[];

    /** Выдает случайный элемент массива */
    choice: <T>(arr: T[]) => T;

    /** рандомный html tag */
    htmlTag: () => string;

    /** Отдает случайное примитивное значение кроме boolean типа */
    value: () => string | number;

    /** Отдает случайное имя переменной */
    varName: () => string;
  };

  /**
   * Хелперы для вопросов
   */
  type QuestionHelpers = QuestionRandHelpers & {
    /** функции рандомных значений */
    rand: QuestionRandHelpers;

    /**
     * Создает таймер, который необходим полю timer
     * @deprecated Это не нужно
     */
    timer: (minutes: number, seconds?: number) => () => TimerData;

    /** Выдает последовательный уникальный идентификатор */
    id: () => string;

    /** Превращает любое значение в читабельный формат для вопросов и ответов */
    string: (value: any) => string;

    /** Превращает текст в html tag */
    tag: (value: string) => string;

    /** переводит набор строк в camelCase регистр */
    camelCase: (...str: string[]) => string;

    /** переводит набор строк в PascalCase регистр */
    pascalCase: (...str: string[]) => string;

    /** переводит набор строк в snakeCase регистр */
    snakeCase: (...str: string[]) => string;

    /**
     * Создает строковую функцию
     *
     * @example
     * ```
     * createStringFunction({ type: "arrow", name: "foo", args: ["a"], body: "console.log(a)" })
     * // "const foo = (a) => console.log(a)"
     * ```
     */
    createStringFunction: (cfg: {
      type: 'arrow' | 'function-expression' | 'function-declaration';
      name: string;
      args: string[];
      body: string;
      expressionName?: string;
    }) => string;

    /**
     * Вызывает строковую функцию
     *
     * @example
     * ```
     * callStringFunction({ name: "foo", args: [1] }) // "foo(1)"
     * ```
     */
    callStringFunction: (cfg: { name: string; args: string[] }) => string;
  };
}
