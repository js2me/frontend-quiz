import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'tripleThenWithFinally',
  category: 'async',
  enabled: true,
  time: 60,
  complexity: 5,
  frequency: {
    low: 0.4,
    medium: 1,
    high: 0.04,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
