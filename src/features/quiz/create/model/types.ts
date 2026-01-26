import type * as z from 'zod';
import type { quizCreateSchema } from './schemas';

export type QuizCreateParams = z.output<typeof quizCreateSchema>;
