import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'cssAttributeSelectors',
  category: 'layout',
  enabled: true,
  time: 60,
  complexity: 8,
  frequency: {
    low: 0,
    medium: 0,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
