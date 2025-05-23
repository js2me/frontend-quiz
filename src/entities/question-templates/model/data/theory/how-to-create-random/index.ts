import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'howToCreateRandom',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 1.5,
  frequency: {
    low: 0.76,
    medium: 0.04,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
