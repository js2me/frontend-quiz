import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'currentURL',
  category: 'theory',
  enabled: true,
  time: 35,
  complexity: 1,
  frequency: {
    low: 0,
    medium: 0.41,
    high: 0.2,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
