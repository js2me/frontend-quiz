export type QuestionCategory =
  | 'theory'
  | 'code'
  | 'layout'
  | 'async'
  | 'react'
  | 'effector';

type QuestionConstructor = (helpers: QuestionHelpers) => RawQuestion;

export type QuestionLevel = 'low' | 'medium' | 'high';

export interface QuestionTemplateConfig {
  name: string;
  enabled: boolean;
  category: QuestionCategory;
  /**
   * Время в секундах сколько нужно для правильного ответа
   */
  time: number;
  /**
   * Сложность вопроса от 0 до 10
   */
  complexity: number;
  /**
   * Частота
   */
  frequency: Record<QuestionLevel, number>;
  loader: () => Promise<{ default: QuestionConstructor }>;
}

export type TemplateConfigLoaderFn = () => Promise<{
  default: QuestionTemplateConfig;
}>;

export type TemplateLoadedConfig = QuestionTemplateConfig;

declare global {
  type Answer = {
    /**
     * Для вопросов, у которых есть порядок правильных ответов
     */
    order?: number;

    /**
     * Правильный или неправильный ответ
     */
    right?: boolean;

    /**
     * Текст ответа
     */
    text?: string;

    /**
     * Код ответа
     */
    code?: string;

    /**
     * Язык кода ответа
     */
    language?: CodeLang;
  };

  /**
   * Типы, которые используются в конструкторе вопросов
   */

  type CodeLang = 'js' | 'css' | 'html';

  type DisplayType = 'flex' | 'grid';

  type HelpType = 'big' | 'small';

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
    timer: (minutes: number, seconds?: number) => () => Record<string, any>;

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

  type DynamicField<T> = T | ((params: QuestionHelpers) => T);

  interface RawQuestion {
    /**
     * Заголовок вопроса
     */
    upperText: DynamicField<string>;

    /**
     * Описание вопроса, доп. текст
     */
    lowerText?: DynamicField<string>;

    /**
     * Тип подсказки (размеры)
     */
    helpType?: HelpType;

    /**
     * Текст подсказки
     */
    helpText?: DynamicField<string>;

    /**
     * ссылки на подсказки
     */
    helpLinks?: string[];

    /**
     * Код вопроса
     */
    code?: DynamicField<string>;

    /**
     * Варианты отображения ответов вопроса
     */
    display?: DisplayType;

    /**
     * количество столбцов грида при режиме отображения "grid"
     */
    gridCols?: number;

    /**
     * количество строк грида при режиме отображения "grid"
     */
    gridRows?: number;

    /**
     * Этот вопрос будет иметь несколько правильных вариантов ответа
     */
    multiple?: boolean;

    /**
     * Этот вопрос будет иметь порядок правильных вариантов ответа
     */
    ordered?: boolean;

    /**
     * Варианты ответа
     */
    answers: DynamicField<MaybeFalsy<Answer>[]>;

    /**
     * Язык кода
     */
    language?: CodeLang;
  }
}
