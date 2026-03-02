import type { QuestionTemplate } from '@/entities/question-templates/model';

export default {
  name: 'modifyProto',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 7,
  frequency: {
    low: 0,
    medium: 0.66,
    high: 0.87,
  },
  loadConstructor: () => import('./constructor'),
} satisfies QuestionTemplate;
