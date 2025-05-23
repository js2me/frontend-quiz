import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'cors',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 5,
  frequency: {
    low: 0.4,
    medium: 0.98,
    high: 0.01,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
