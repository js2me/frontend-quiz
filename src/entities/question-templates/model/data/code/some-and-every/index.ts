import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'someAndEvery',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 5,
  frequency: {
    low: 0,
    medium: 0.12,
    high: 0.24,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
