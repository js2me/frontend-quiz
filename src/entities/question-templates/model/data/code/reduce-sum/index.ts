import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'reduceSum',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 3,
  frequency: {
    low: 1,
    medium: 0.56,
    high: 0.09,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
