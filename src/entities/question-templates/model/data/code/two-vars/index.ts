import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'twoVars',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 4,
  frequency: {
    low: 0.39,
    medium: 1,
    high: 0.08,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
