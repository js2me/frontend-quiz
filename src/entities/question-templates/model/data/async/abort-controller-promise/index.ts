import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'abortControllerPromise',
  category: 'async',
  enabled: true,
  time: 60,
  complexity: 7,
  frequency: {
    low: 0,
    medium: 0.4,
    high: 0.4,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
