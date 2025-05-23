import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'floatEqualStringFloat',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 5,
  frequency: {
    low: 0.5,
    medium: 0.26,
    high: 0.01,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
