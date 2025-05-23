import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'howToCallMicrotask',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 9.2,
  frequency: {
    low: 0,
    medium: 0.25,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
