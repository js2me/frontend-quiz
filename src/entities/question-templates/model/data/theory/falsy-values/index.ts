import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'falsyValues',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 4,
  frequency: {
    low: 0.26,
    medium: 1,
    high: 0.13,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
