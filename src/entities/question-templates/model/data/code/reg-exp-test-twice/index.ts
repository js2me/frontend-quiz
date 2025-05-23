import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'regExpTestTwice',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 6.6,
  frequency: {
    low: 0.27,
    medium: 0.75,
    high: 0.96,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
