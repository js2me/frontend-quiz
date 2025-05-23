import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'promiseAll',
  category: 'async',
  enabled: true,
  time: 60,
  complexity: 3.3,
  frequency: {
    low: 1,
    medium: 0.11,
    high: 0.09,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
