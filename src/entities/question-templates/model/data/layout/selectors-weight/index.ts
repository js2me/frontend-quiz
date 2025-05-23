import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'selectorsWeight',
  category: 'layout',
  enabled: true,
  time: 60,
  complexity: 10,
  frequency: {
    low: 0,
    medium: 0,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
