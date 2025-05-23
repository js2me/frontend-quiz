import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'reflowHappens',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 10,
  frequency: {
    low: 0,
    medium: 0.07,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
