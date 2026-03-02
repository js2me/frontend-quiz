import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'notCorrectTransformProperty',
  category: 'layout',
  enabled: true,
  time: 50,
  complexity: 5,
  frequency: {
    low: 0.24,
    medium: 0.08,
    high: 0,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
