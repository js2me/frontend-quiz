import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'reduceValues',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 4,
  frequency: {
    low: 0.37,
    medium: 1,
    high: 0.2,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
