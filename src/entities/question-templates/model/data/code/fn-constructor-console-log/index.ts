import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'fnConstructorConsoleLog',
  category: 'code',
  enabled: true,
  time: 35,
  complexity: 5,
  frequency: {
    low: 0.03,
    medium: 0.25,
    high: 0.37,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
