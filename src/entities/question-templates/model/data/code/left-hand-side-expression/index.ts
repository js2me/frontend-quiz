import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'leftHandSideExpression',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 9,
  frequency: {
    low: 0,
    medium: 0,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
