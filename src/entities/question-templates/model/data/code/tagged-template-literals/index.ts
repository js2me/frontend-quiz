import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'taggedTemplateLiterals',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 5,
  frequency: {
    low: 0.41,
    medium: 1,
    high: 0.21,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
