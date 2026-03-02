import { cx } from 'yummies/css';
import type { QuestionAnswerProps } from '..';
import { AnswerContent } from './answer-content';
import { Checkbox, Radio } from './elements';

export const QuizModeAnswer = ({
  answer,
  onClick,
  ordered,
  multiple,
}: QuestionAnswerProps) => {
  const checked = answer.selected;

  return (
    <div
      className={cx(`-ml-2 flex flex-row gap-1.5 px-2 py-1`, {
        'cursor-pointer': onClick,
      })}
      onClick={onClick && (() => onClick(answer))}
    >
      {multiple ? (
        <Checkbox
          checked={checked}
          number={
            !!ordered &&
            (answer.selectedOrder == null ? null : answer.selectedOrder + 1)
          }
          className={cx({
            'border-primary bg-primary': checked,
            'text-reverse': !checked,
          })}
          contentClassName={'text-primary-foreground'}
        />
      ) : (
        <Radio
          checked={checked}
          className={cx({
            'text-primary': checked,
            'text-reverse': !checked,
          })}
          circleClassName={'bg-primary'}
        />
      )}
      <AnswerContent answer={answer} />
    </div>
  );
};
