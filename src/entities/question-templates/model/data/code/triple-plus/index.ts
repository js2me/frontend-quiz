import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'triplePlus',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 6.8,
  frequency: {
    low: 0.25,
    medium: 0.79,
    high: 0.08,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
