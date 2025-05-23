import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'twoPromises',
  category: 'async',
  enabled: true,
  time: 60,
  complexity: 5,
  frequency: {
    low: 0.4,
    medium: 1,
    high: 0.1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
