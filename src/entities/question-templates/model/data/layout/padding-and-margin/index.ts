import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'paddingAndMargin',
  category: 'layout',
  enabled: true,
  time: 30,
  complexity: 1,
  frequency: {
    low: 0.15,
    medium: 0,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
