import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'visualChangesReflowRepaint',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 9.1,
  frequency: {
    low: 0,
    medium: 0.02,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
