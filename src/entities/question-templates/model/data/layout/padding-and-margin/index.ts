import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'paddingAndMargin',
  category: 'layout',
  enabled: true,
  time: 30,
  complexity: 1,
  frequency: {
    low: 0.15,
    medium: 0,
    high: 0,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
