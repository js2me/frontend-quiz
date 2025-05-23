import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'scriptTag',
  category: 'code',
  enabled: true,
  time: 45,
  complexity: 2,
  frequency: {
    low: 0.25,
    medium: 0.02,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
