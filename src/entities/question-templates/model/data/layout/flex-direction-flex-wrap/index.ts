import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'flexDirectionFlexWrap',
  category: 'layout',
  enabled: true,
  time: 40,
  complexity: 3.4,
  frequency: {
    low: 0.95,
    medium: 0.15,
    high: 0.01,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
