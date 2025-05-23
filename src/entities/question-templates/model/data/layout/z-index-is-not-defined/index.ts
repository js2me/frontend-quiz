import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'zIndexIsNotDefined',
  category: 'layout',
  enabled: true,
  time: 35,
  complexity: 1.5,
  frequency: {
    low: 0.76,
    medium: 0.01,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
