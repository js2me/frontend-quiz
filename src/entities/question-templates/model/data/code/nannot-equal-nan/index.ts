import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'NaNnotEqualNaN',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 8.5,
  frequency: {
    low: 0.02,
    medium: 0.74,
    high: 0.91,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
