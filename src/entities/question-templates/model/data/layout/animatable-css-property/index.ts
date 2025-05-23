import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: ' animatableCssProperty',
  category: 'layout',
  enabled: true,
  time: 60,
  complexity: 7,
  frequency: {
    low: 0,
    medium: 0.4,
    high: 0.4,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
