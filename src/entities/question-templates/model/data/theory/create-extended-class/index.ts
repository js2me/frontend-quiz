import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'createExtendedClass',
  category: 'theory',
  enabled: true,
  time: 35,
  complexity: 2.1,
  frequency: {
    low: 0.97,
    medium: 0.01,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
