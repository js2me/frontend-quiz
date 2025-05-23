import { QuestionCategory, QuestionTemplateConfig } from './model.types';

const questionTemplateScannedPaths = import.meta.glob('./data/**/index.ts', {
  eager: true,
  exhaustive: true,
});

export class QuestionTemplatesModel {
  private data: Record<QuestionCategory, QuestionTemplateConfig[]> = {
    theory: [],
    code: [],
    layout: [],
    async: [],
    react: [],
    effector: [],
  };

  constructor() {
    Object.entries(questionTemplateScannedPaths).forEach(([path, module]) => {
      const category = path.split('/')[2] as QuestionCategory;
      const questionConfig = (module as any).default as QuestionTemplateConfig;
      this.data[category].push(questionConfig);
    });

    console.info('this', this.data);
  }

  getTemplateConfigs(category: QuestionCategory) {
    return this.data[category];
  }
}
