import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'tripleThenChaining',
  category: 'async',
  enabled: true,
  time: 60,
  complexity: 6.3,
  frequency: {
    low: 0.4,
    medium: 1,
    high: 0.5,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
