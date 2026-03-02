import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'stringMutationByIndex',
  category: 'code',
  enabled: true,
  time: 45,
  complexity: 5,
  frequency: {
    low: 0.11,
    medium: 0.64,
    high: 0.5,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
