import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'hoistingCode',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 7.5,
  frequency: {
    low: 0,
    medium: 0,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
