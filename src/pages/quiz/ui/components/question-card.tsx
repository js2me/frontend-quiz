import { cx } from 'yummies/css';
import {
  formatHtmlField,
  sortAnswersByOrder,
  sortAnswersBySelectedOrder,
} from '@/entities/quiz/lib';
import type { Question } from '@/entities/quiz/model/quiz/types';
import {
  type AnswerDtoDC,
  type FullQuestionDtoDC,
  isFullQuestionDto,
  type QuestionQuizProcessingDtoDC,
} from '@/shared/api';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Skeleton } from '@/shared/ui/skeleton';
import { QuestionAnswer } from './question-answer';
import { QuestionCode } from './question-code';
import { QuestionTypeBadge } from './question-type-badge';

export interface QuestionCardProps {
  loading?: boolean;

  mode?: 'view' | 'quiz';

  question?: Maybe<Question>;

  onAnswerClick?: (answer: AnswerDtoDC) => void;

  className?: string;
  headerClassName?: string;
  footerClassName?: string;

  hideBugReportBlock?: boolean;
}

export const QuestionCard = ({
  onAnswerClick,
  question,
  loading,
  mode,
  className,
  headerClassName,
  footerClassName,
  hideBugReportBlock,
}: QuestionCardProps) => {
  let answers: AnswerDtoDC[] = question?.generated.answers || [];

  if (question?.ordered && mode === 'quiz') {
    answers = sortAnswersBySelectedOrder(question.answers);
  } else if (question?.ordered && mode === 'view') {
    answers = sortAnswersByOrder(question.answers);
  }

  return (
    <Card className={cx('relative', className)}>
      <CardHeader className={headerClassName}>
        <div
          className={'flex flex-row justify-between max-xs:flex-col-reverse'}
        >
          <CardTitle
            className={'text-xl 2xl:text-2xl'}
            dangerouslySetInnerHTML={{
              __html: formatHtmlField(question?.upperText),
            }}
          />
          <QuestionTypeBadge
            className={
              'mb-auto ml-5 flex-none max-xs:mr-auto max-xs:mb-2 max-xs:ml-0'
            }
            type={question?.type}
            loading={loading}
          />
        </div>
        {question?.lowerText && (
          <CardDescription
            dangerouslySetInnerHTML={{
              __html: formatHtmlField(question.lowerText),
            }}
          />
        )}
      </CardHeader>
      {!!question?.code && (
        <CardContent className={'overflow-auto'}>
          <QuestionCode
            code={question?.code}
            id={question.templateId}
            language={question.language}
            loading={loading}
          />
        </CardContent>
      )}
      <CardFooter className={cx('flex flex-col items-start', footerClassName)}>
        {question?.multiple && mode === 'quiz' && (
          <p
            className={`${
              question?.ordered ? 'mb-1' : 'mb-2'
            } text-muted-foreground text-xs opacity-75`}
          >
            *Возможен выбор нескольких вариантов ответа
          </p>
        )}
        {question?.ordered && mode === 'quiz' && (
          <p className={'mb-2 text-muted-foreground text-xs opacity-75'}>
            *Необходимо указать порядок вариантов ответа (не все варианты ответы
            могут быть правильными)
          </p>
        )}
        <div
          className={cx('max-xs:flex max-xs:flex-col max-xs:flex-wrap', {
            'flex flex-col flex-wrap': question?.display !== 'grid',
            grid: question?.display === 'grid',
          })}
          style={{
            gridTemplateColumns:
              question?.display === 'grid' && question?.gridCols != null
                ? (`repeat(${question.gridCols}, 1fr)` as string)
                : void 0,
          }}
        >
          {answers?.map((answer) => {
            return (
              <QuestionAnswer
                key={answer.id}
                mode={mode}
                answer={answer}
                multiple={question?.multiple}
                ordered={question?.ordered}
                onClick={onAnswerClick}
              />
            );
          })}
        </div>
        {!!(
          mode === 'view' &&
          isFullQuestionDto(question) &&
          question.helpText
        ) && (
          <p
            className={'mt-8 whitespace-pre-wrap text-muted-foreground text-sm'}
            dangerouslySetInnerHTML={{
              __html: formatHtmlField(question.helpText),
            }}
          />
        )}
        {!!(
          mode === 'view' &&
          isFullQuestionDto(question) &&
          question.helpLinks?.length
        ) && (
          <div
            className={`${
              question.helpText ? 'mt-4' : 'mt-8'
            } flex flex-col gap-1 text-muted-foreground text-sm`}
          >
            <span>Полезные ссылки:</span>
            {question.helpLinks.map((helpLink) => (
              <a
                target={'_blank'}
                key={helpLink}
                href={helpLink}
                rel={'noreferrer'}
                className={
                  'text-ellipsis break-all text-primary visited:text-primary/80'
                }
              >
                {helpLink}
              </a>
            ))}
          </div>
        )}
        {!hideBugReportBlock &&
          !!(mode === 'view' && isFullQuestionDto(question)) && (
            <div className={`mt-6 ml-auto`}>
              {/* <ReportBugButton
                questionId={question.id}
                quizId={question.quizId}
              /> */}
            </div>
          )}
      </CardFooter>
      {loading && <Skeleton className={'absolute inset-0'} />}
    </Card>
  );
};
