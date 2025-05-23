import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'spreadStringOrNumber',
  category: 'code',
  enabled: true,
  time: 45,
  complexity: 5.3,
  frequency: {
    low: 0.37,
    medium: 0.43,
    high: 0.09,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
