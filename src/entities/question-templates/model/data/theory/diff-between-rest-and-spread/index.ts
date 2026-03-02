import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'diffBetweenRestAndSpread',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 6.9,
  frequency: {
    low: 0.2,
    medium: 0.41,
    high: 0.39,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
