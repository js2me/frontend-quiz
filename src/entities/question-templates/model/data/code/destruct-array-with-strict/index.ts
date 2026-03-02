import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'destructArrayWithStrict',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 3,
  frequency: {
    low: 1,
    medium: 0,
    high: 0,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
