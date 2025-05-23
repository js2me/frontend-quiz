import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'whatIsCRP',
  category: 'theory',
  enabled: true,
  time: 110,
  complexity: 9.5,
  frequency: {
    low: 0,
    medium: 0.13,
    high: 0.5,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
