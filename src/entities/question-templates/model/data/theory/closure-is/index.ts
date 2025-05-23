import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'closureIs',
  category: 'theory',
  enabled: true,
  time: 75,
  complexity: 6,
  frequency: {
    low: 0.01,
    medium: 0.76,
    high: 0.76,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
