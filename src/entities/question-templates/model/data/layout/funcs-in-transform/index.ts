import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: ' funcsInTransform',
  category: 'layout',
  enabled: true,
  time: 60,
  complexity: 2.1,
  frequency: {
    low: 0.93,
    medium: 0.19,
    high: 0.01,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
