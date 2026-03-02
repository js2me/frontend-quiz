import type * as z from 'zod';
import type { quizParamsSchema } from './schema';

export type QuizParams = z.output<typeof quizParamsSchema>;
