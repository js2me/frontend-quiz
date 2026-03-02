import * as z from 'zod';
import {
  availableQuestionCategories,
  availableQuestionLevels,
} from '@/entities/quiz/model/config';

export const quizParamsSchema = z.object({
  questionsCount: z
    .number({ message: 'Значение должно быть числом' })
    .min(8, { message: 'Минимум 8' })
    .max(32, { message: 'Максимум 32' }),
  levels: z
    .array(z.union(availableQuestionLevels.map((level) => z.literal(level))))
    .min(1, { message: 'Выберите хотя бы один уровень' }),
  categories: z
    .array(
      z.union(
        availableQuestionCategories.map((category) => z.literal(category)),
      ),
    )
    .min(1, { message: 'Выберите хотя бы одну категорию' }),
});
