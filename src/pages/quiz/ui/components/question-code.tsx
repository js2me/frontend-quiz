import { observer } from 'mobx-react-lite';
import { colorScheme } from 'mobx-web-api';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useEventListener } from 'yummies/react';
import { renderCodeToImage } from '@/shared/lib/code';
import { codeThemeData } from '@/shared/lib/code-theme/model';

export interface QuestionCodeProps {
  className?: string;
  loading?: boolean;
  language?: string;
  code: Maybe<string>;
  id: string | number;
}

export const QuestionCode = observer(
  ({ className, code, id, language = 'js' }: QuestionCodeProps) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [printWidth, setPrintWidth] = useState(getCodePrintWidth);

    function getCodePrintWidth() {
      if (window.innerWidth >= 1280) {
        return 120;
      }
      if (window.innerWidth <= 500) {
        return 40;
      }
      if (window.innerWidth <= 640) {
        return 60;
      }
      return 80;
    }

    useEventListener({
      event: 'resize',
      debounce: 250,
      node: window,
      handler: () => setPrintWidth(getCodePrintWidth),
      options: true,
    });

    useEffect(() => {
      setTimeout(() => {
        renderCodeToImage({
          code,
          language,
          printWidth,
          target: imgRef.current,
        });
      });
    }, [
      code,
      id,
      language,
      printWidth,
      colorScheme.scheme,
      codeThemeData.value,
    ]);

    return (
      <div
        className={twMerge('hljs pointer-events-none rounded-md', className)}
      >
        <img
          ref={imgRef}
          className={'border-0 opacity-0 data-[state=ready]:opacity-100'}
        />
      </div>
    );
  },
);
