import { QuestionTemplateConfig } from '@/entities/question-templates/model';

export default {
  name: 'howToPreventRaf',
  category: 'async',
  enabled: true,
  time: 60,
  complexity: 9.3,
  frequency: {
    low: 0,
    medium: 0,
    high: 0.06,
  },
  loader: () => import('./constructor'),
} satisfies QuestionTemplateConfig;
