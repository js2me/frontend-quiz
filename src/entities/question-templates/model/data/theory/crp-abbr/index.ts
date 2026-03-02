import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'CRPAbbr',
  category: 'theory',
  enabled: true,
  time: 55,
  complexity: 8.6,
  frequency: {
    low: 0.03,
    medium: 0.55,
    high: 0.89,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
