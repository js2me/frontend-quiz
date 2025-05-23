import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'regExpTestExecCursor',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 8.4,
  frequency: {
    low: 0,
    medium: 0.39,
    high: 0.72,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
