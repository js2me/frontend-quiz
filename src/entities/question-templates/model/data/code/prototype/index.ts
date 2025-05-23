import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'prototype',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 6,
  frequency: {
    low: 0.12,
    medium: 1,
    high: 0.25,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
