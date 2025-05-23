import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'symbol',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 4,
  frequency: {
    low: 0.65,
    medium: 1,
    high: 0.01,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
