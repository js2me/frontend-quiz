import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'howWorksScriptDeferAttr',
  category: 'layout',
  enabled: true,
  time: 75,
  complexity: 9.5,
  frequency: {
    low: 0.1,
    medium: 0.64,
    high: 0.96,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
