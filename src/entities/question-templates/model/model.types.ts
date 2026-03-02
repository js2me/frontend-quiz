export type QuestionCategory =
  | 'theory'
  | 'code'
  | 'layout'
  | 'async'
  | 'react'
  | 'effector';

export type QuestionConstructor = (helpers: QuestionHelpers) => RawQuestion;

export type QuestionLevel = 'low' | 'medium' | 'high';

export interface QuestionTemplate {
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
  loadConstructor: () => Promise<{ default: QuestionConstructor }>;
}

export interface QuestionTemplatesCollectParams {
  categories: QuestionCategory[];
  count: number;
  levels: QuestionLevel[];
  sortByComplexity?: boolean;
}

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
