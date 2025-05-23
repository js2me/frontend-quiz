import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'promiseRace',
  category: 'async',
  enabled: true,
  time: 60,
  complexity: 3,
  frequency: {
    low: 0.75,
    medium: 0.5,
    high: 0.26,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
