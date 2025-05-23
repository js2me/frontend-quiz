import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'clearFunction',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 6.5,
  frequency: {
    low: 0,
    medium: 1,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
