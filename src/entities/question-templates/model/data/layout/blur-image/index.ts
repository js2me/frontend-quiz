import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'blurImage',
  category: 'layout',
  enabled: true,
  time: 35,
  complexity: 2,
  frequency: {
    low: 0.86,
    medium: 0.21,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
