import { QuestionCategory } from '../model';

const categoryLabels: Record<QuestionCategory, string> = {
  code: 'Код',
  theory: 'Теория',
  async: 'async',
  layout: 'HTML/CSS',
  react: 'React',
  effector: 'effector',
};

export const getQuestionCategoryLabel = (category: QuestionCategory) =>
  categoryLabels[category];
