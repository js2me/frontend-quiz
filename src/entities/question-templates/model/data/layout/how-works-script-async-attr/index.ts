import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'howWorksScriptAsyncAttr',
  category: 'layout',
  enabled: true,
  time: 75,
  complexity: 9.5,
  frequency: {
    low: 0.09,
    medium: 0.67,
    high: 1,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
