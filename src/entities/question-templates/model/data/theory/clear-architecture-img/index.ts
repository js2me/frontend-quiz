import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'clearArchitectureImg',
  category: 'theory',
  enabled: true,
  time: 30,
  complexity: 7.3,
  frequency: {
    low: 0,
    medium: 0.51,
    high: 0.8,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
