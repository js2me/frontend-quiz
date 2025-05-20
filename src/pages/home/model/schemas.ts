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

import { AVAILABLE_QUESTION_CATEGORIES } from '@/entities/questions/model/data/categories';

export const quizAvailableCountToChoose = [8, 16, 24];

export const quizLevelSchema = union([
  literal('junior'),
  literal('middle'),
  literal('senior'),
]);

export const quizCategorySchema = union(
  AVAILABLE_QUESTION_CATEGORIES.map((category) => literal(category)),
);

export const newQuizSchema = object({
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
  levels: pipe(array(quizLevelSchema), minLength(1)),
  categories: pipe(array(quizCategorySchema), minLength(1)),
});
