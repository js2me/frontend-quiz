import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'doubleResolve',
  category: 'async',
  enabled: true,
  time: 60,
  complexity: 8.7,
  frequency: {
    low: 0,
    medium: 1,
    high: 0.76,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
