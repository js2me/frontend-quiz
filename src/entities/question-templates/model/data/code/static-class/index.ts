import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'staticClass',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 5,
  frequency: {
    low: 0.38,
    medium: 1,
    high: 0.01,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
