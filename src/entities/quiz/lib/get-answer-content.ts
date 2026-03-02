import { sanitizeHtml } from 'yummies/html';
import type { AnswerDtoDC } from '@/shared/api';
import { highlightCode } from '@/shared/lib/code';
import { formatHtmlField } from './format-html-field';

export const getAnswerContent = async (answer: AnswerDtoDC) => {
  if (!answer.code) {
    return formatHtmlField(answer.text);
  }

  try {
    const codeHtml = await highlightCode({
      code: answer.code,
      language: answer.language,
    });

    return sanitizeHtml(codeHtml || formatHtmlField(answer.text));
    // eslint-disable-next-line no-empty
  } catch (_) {}

  return formatHtmlField(answer.text);
};
