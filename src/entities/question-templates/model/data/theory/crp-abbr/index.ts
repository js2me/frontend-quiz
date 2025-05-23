import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'CRPAbbr',
  category: 'theory',
  enabled: true,
  time: 55,
  complexity: 8.6,
  frequency: {
    low: 0.03,
    medium: 0.55,
    high: 0.89,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
