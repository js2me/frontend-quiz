import { maxValue, minValue, number, object, pipe } from 'valibot';

export const newQuizSchema = object({
  questionsCount: pipe(pipe(number(), minValue(8), maxValue(32))),
});
