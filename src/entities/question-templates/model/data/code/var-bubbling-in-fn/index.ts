import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'varBubblingInFn',
  category: 'code',
  enabled: true,
  time: 40,
  complexity: 6.5,
  frequency: {
    low: 0.01,
    medium: 0.5,
    high: 0.75,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
