import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'globalContext',
  category: 'theory',
  enabled: false,
  time: 60,
  complexity: 2,
  frequency: {
    low: 1,
    medium: 0,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
