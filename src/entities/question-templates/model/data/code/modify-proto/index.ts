import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'modifyProto',
  category: 'code',
  enabled: true,
  time: 60,
  complexity: 7,
  frequency: {
    low: 0,
    medium: 0.66,
    high: 0.87,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
