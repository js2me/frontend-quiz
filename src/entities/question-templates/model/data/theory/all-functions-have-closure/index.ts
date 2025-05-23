import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'allFunctionsHaveClosure',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 9,
  frequency: {
    low: 0,
    medium: 0.01,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
