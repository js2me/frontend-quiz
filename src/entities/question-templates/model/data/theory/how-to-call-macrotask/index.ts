import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'howToCallMacrotask',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 8.8,
  frequency: {
    low: 0.23,
    medium: 0.51,
    high: 1,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
