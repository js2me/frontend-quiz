import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'sumInIf',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 8.9,
  frequency: {
    low: 0.35,
    medium: 0.81,
    high: 0.86,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
