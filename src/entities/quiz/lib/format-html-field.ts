import { sanitizeHtml } from 'yummies/html';

export const formatHtmlField = (raw: Maybe<string>): string => {
  const value = (raw || '')
    .trim()
    .split('<code>')
    .flatMap((part) => {
      if (part.includes('</code>')) {
        const [codeContent, ...others] = part.split('</code>');

        return [
          `<code class="hljs">${codeContent
            .replace('<', '&lt;')
            .replace('>', '&gt;')}</code>`,
          ...others,
        ];
      }

      return part;
    })
    .join('');

  return sanitizeHtml(value);
};
