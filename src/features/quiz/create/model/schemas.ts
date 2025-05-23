import {
  array,
  check,
  literal,
  maxValue,
  minLength,
  minValue,
  nan,
  nullable,
  number,
  object,
  pipe,
  string,
  transform,
  union,
} from 'valibot';
import { typeGuard } from 'yummies/type-guard';

import {
  availableQuestionCategories,
  availableQuestionLevels,
} from '../config';

export const quizCreateSchema = object({
  questionsCount: pipe(
    union([string(), number(), nullable(number()), nan()]),
    transform((value) => {
      if (value == null || value === '') {
        return null;
      }
      return Number(value);
    }),
    check(
      (input) => typeGuard.isNumber(input),
      (input) => {
        if (input.input === null) {
          return 'Это поле обязательно';
        }
        return 'Значение должно быть числом';
      },
    ),
    number(),
    minValue(8),
    maxValue(32),
  ),
  levels: pipe(
    array(union(availableQuestionLevels.map((level) => literal(level)))),
    minLength(1),
  ),
  categories: pipe(
    array(
      union(availableQuestionCategories.map((category) => literal(category))),
    ),
    minLength(1),
  ),
});
