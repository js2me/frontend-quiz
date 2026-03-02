import { TooltipPortal } from '@radix-ui/react-tooltip';
import { cx } from 'yummies/css';
import {
  isMissedRightAnswer,
  isRightChosenAnswer,
  isWrongAnswer,
} from '@/entities/quiz/lib';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';
import type { QuestionAnswerProps } from '..';
import { AnswerContent } from './answer-content';
import { Checkbox, Radio } from './elements';

export const ViewModeAnswer = ({
  answer,
  onClick,
  ordered,
  multiple,
}: QuestionAnswerProps) => {
  const checked = answer.selected || (!answer.selected && answer.right);

  const wrong = isWrongAnswer(answer);
  const missedRight = isMissedRightAnswer(answer);
  const rightChosen = isRightChosenAnswer(answer, ordered);

  return (
    <div
      className={cx(`-ml-2 flex flex-row gap-2 px-2 py-1`, {
        'cursor-pointer': onClick,
      })}
      onClick={onClick && (() => onClick(answer))}
    >
      <Tooltip
        delayDuration={200}
        disableHoverableContent
        open={!checked && !missedRight && wrong ? false : undefined}
      >
        <TooltipTrigger asChild>
          <div className={'flex flex-row justify-center gap-1'}>
            {multiple ? (
              <>
                {ordered && (
                  <Checkbox
                    checked={checked}
                    number={
                      answer.order == null ? null : `${answer.order + 1}.`
                    }
                    className={cx(
                      'border-transparent font-semibold text-reverse dark:text-accent',
                    )}
                  />
                )}
                <Checkbox
                  checked={checked}
                  number={
                    !!ordered &&
                    (answer.selectedOrder == null
                      ? null
                      : answer.selectedOrder + 1)
                  }
                  className={cx({
                    'text-accent/50 dark:text-accent/20': !missedRight && wrong,
                    'text-reverse/30 dark:text-accent':
                      checked && missedRight && !wrong,
                    'border-positive bg-positive text-positive-foreground':
                      checked && !missedRight && rightChosen,
                    'text-destructive dark:text-destructive':
                      checked && !missedRight && !rightChosen,
                  })}
                  showX={!ordered && checked && !missedRight && !rightChosen}
                />
              </>
            ) : (
              <Radio
                checked={checked}
                className={cx({
                  'text-accent/50 dark:text-accent/20': !missedRight && wrong,
                  'text-reverse/30 dark:text-accent':
                    checked && missedRight && !wrong,
                  'text-positive dark:text-positive':
                    checked && !missedRight && rightChosen,
                  'text-destructive dark:text-destructive':
                    checked && !missedRight && !rightChosen,
                })}
                circleClassName={'bg-current'}
              />
            )}
          </div>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            {multiple && ordered && checked && !missedRight && rightChosen && (
              <p>Правильный ответ</p>
            )}
            {multiple && ordered && checked && !missedRight && !rightChosen && (
              <p>
                Неправильный порядок ответа
                <br />
                (правильный -{' '}
                {answer.order == null ? null : `${answer.order + 1}`}, выбранный
                -{' '}
                {answer.selectedOrder == null ? null : answer.selectedOrder + 1}
                )
              </p>
            )}
            {multiple &&
              !ordered &&
              checked &&
              !missedRight &&
              !rightChosen && <p>Неправильный ответ</p>}
            {multiple && checked && missedRight && !wrong && (
              <p>Невыбранный правильный ответ</p>
            )}
            {multiple && !ordered && checked && !missedRight && rightChosen && (
              <p>Правильный ответ</p>
            )}
            {!multiple && checked && !missedRight && rightChosen && (
              <p>Правильный ответ</p>
            )}
            {!multiple && checked && !missedRight && !rightChosen && (
              <p>Неправильный ответ</p>
            )}
            {!multiple && checked && missedRight && !wrong && (
              <p>Невыбранный правильный ответ</p>
            )}
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
      <AnswerContent
        answer={answer}
        className={cx({
          'opacity-40 grayscale': !missedRight && wrong && !checked,
          'opacity-60 grayscale': !missedRight && wrong && checked,
          'font-semibold': (missedRight || rightChosen) && answer.selected,
        })}
      />
    </div>
  );
};
