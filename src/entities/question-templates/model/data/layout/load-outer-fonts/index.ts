import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'loadOuterFonts',
  category: 'layout',
  enabled: true,
  time: 35,
  complexity: 2.6,
  frequency: {
    low: 0.36,
    medium: 0.1,
    high: 0,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
