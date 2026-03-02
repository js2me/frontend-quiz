import { createElement, useLayoutEffect, useRef } from 'react';
import { cx } from 'yummies/css';
import { getAnswerContent } from '@/entities/quiz/lib';
import type { AnswerDtoDC } from '@/shared/api';

export const AnswerContent = ({
  answer,
  className,
}: {
  answer: AnswerDtoDC;
  className?: string;
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    getAnswerContent(answer).then((content) => {
      if (elementRef.current) {
        elementRef.current.innerHTML = content;
      }
    });
  }, [answer]);

  return createElement(answer.code ? 'code' : 'div', {
    ref: elementRef,
    className: cx(
      `text-base text-reverse break-all`,
      { hljs: answer.code },
      className,
    ),
  });
};
