import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'typecastFalseNull',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 3,
  frequency: {
    low: 1,
    medium: 0.1,
    high: 0.02,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
