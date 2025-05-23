import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'sortWithNoArgs',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 4,
  frequency: {
    low: 0.38,
    medium: 1,
    high: 0.14,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
