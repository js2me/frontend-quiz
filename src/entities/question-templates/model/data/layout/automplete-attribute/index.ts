import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'autompleteAttribute',
  category: 'layout',
  enabled: true,
  time: 45,
  complexity: 6.4,
  frequency: {
    low: 0.08,
    medium: 0.74,
    high: 0.25,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
