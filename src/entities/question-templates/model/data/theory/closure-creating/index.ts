import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'closureCreating',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 8,
  frequency: {
    low: 0,
    medium: 0.12,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
