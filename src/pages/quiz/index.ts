import { createRoute } from 'mobx-route';
import { Quiz } from '@/entities/quiz/model/quiz';
export const quizRoute = createRoute('/quiz', { exact: true });

if (Quiz.hasActive && !quizRoute.isOpened) {
  quizRoute.open({}, { replace: true });
}
