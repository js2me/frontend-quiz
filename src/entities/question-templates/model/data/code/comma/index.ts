import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'comma',
  category: 'code',
  enabled: true,
  time: 45,
  complexity: 3,
  frequency: {
    low: 0.66,
    medium: 0.14,
    high: 0.06,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
