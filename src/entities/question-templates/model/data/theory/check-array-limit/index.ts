import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'checkArrayLimit',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 4,
  frequency: {
    low: 0.31,
    medium: 1,
    high: 0,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
