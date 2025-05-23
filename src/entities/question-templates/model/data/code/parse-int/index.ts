import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'parseInt',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 8.9,
  frequency: {
    low: 0,
    medium: 0.03,
    high: 0.04,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
