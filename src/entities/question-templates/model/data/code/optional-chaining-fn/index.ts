import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'optionalChainingFn',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 5,
  frequency: {
    low: 0.75,
    medium: 1,
    high: 0.08,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
