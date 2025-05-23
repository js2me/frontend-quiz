import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'numberToStringRadix',
  category: 'code',
  enabled: true,
  time: 45,
  complexity: 3.5,
  frequency: {
    low: 0.12,
    medium: 0.08,
    high: 0.03,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
