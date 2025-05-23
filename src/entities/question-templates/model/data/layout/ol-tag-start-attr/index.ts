import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'OlTagStartAttr',
  category: 'layout',
  enabled: true,
  time: 45,
  complexity: 8,
  frequency: {
    low: 0.01,
    medium: 0.15,
    high: 0.15,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
