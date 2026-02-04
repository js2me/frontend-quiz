import { createRoute } from 'mobx-route';
import { Quiz } from '@/features/quiz/create/model/model';

export const quizRoute = createRoute('/quiz', { exact: true });

if (Quiz.tryToRestore() && !quizRoute.isOpened) {
  quizRoute.open({}, { replace: true });
}
