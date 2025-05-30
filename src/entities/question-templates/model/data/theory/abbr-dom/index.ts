import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'abbrDOM',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 2,
  frequency: {
    low: 1,
    medium: 0.03,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
