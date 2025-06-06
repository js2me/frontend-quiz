import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'cssSupportRule',
  category: 'layout',
  enabled: true,
  time: 60,
  complexity: 3,
  frequency: {
    low: 1,
    medium: 0,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
