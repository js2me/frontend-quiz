import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'tagDoesnotExisthtml',
  category: 'layout',
  enabled: true,
  time: 60,
  complexity: 6,
  frequency: {
    low: 0,
    medium: 1,
    high: 0,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
