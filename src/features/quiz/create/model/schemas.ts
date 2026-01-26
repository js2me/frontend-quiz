import * as z from 'zod';

import {
  availableQuestionCategories,
  availableQuestionLevels,
} from '../config';

export const quizCreateSchema = z.object({
  questionsCount: z
    .number({ message: 'Значение должно быть числом' })
    .min(8, { message: 'Минимум 8' })
    .max(32, { message: 'Максимум 32' }),
  levels: z
    .array(z.union(availableQuestionLevels.map((level) => z.literal(level))))
    .min(1),
  categories: z
    .array(
      z.union(
        availableQuestionCategories.map((category) => z.literal(category)),
      ),
    )
    .min(1),
});
