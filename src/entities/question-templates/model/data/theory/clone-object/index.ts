import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'cloneObject',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 1,
  frequency: {
    low: 0.75,
    medium: 0.26,
    high: 0.03,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
