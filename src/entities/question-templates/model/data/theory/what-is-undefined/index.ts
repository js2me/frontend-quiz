import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'whatIsUndefined',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 1,
  frequency: {
    low: 1,
    medium: 0,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
