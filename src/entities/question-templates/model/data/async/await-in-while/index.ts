import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'awaitInWhile',
  category: 'async',
  enabled: true,
  time: 60,
  complexity: 8.2,
  frequency: {
    low: 0,
    medium: 0.5,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
