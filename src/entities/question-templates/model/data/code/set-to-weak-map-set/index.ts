import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'setToWeakMapSet',
  category: 'code',
  enabled: true,
  time: 45,
  complexity: 8.4,
  frequency: {
    low: 0,
    medium: 0.5,
    high: 0.74,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
