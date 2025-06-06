import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'featureDetection',
  category: 'theory',
  enabled: true,
  time: 60,
  complexity: 6,
  frequency: {
    low: 0,
    medium: 1,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
