import { withViewModel } from 'mobx-view-model';
import { cx } from 'yummies/css';
import { Button } from '@/shared/ui/button';
import { Label } from '@/shared/ui/label';
import { QuizPageVM } from '../model/vm';
import { QuestionCard } from './components/question-card';

export const QuizPage = withViewModel(QuizPageVM, ({ model }) => {
  return (
    <div className="flex flex-col">
      <div className={'flex w-full flex-1 flex-col gap-2'}>
        <div
          className={
            'mb-4 flex flex-1 flex-row flex-wrap gap-2 px-6 max-sm:px-4 max-xs:flex-col-reverse max-xs:px-2 2xl:mb-8'
          }
        >
          <div className={'mr-auto'}>
            <Label className={'mb-2'}>Карта вопросов:</Label>
            <div className={'grid grid-cols-12 gap-2 max-md:grid-cols-8'}>
              {model.quiz?.state.questions.map((question, i) => {
                const active = question.id === model.quiz.activeQuestion?.id;
                const answered = !!question.answers;

                return (
                  <Button
                    value={`${question.id}`}
                    variant={active ? 'default' : 'outline'}
                    size={'icon'}
                    className={cx('relative h-8 w-8 p-0', {
                      'bg-accent/60': !active && answered,
                    })}
                    key={question.id}
                    disabled={model.isProcessing}
                    onClick={() => model.handleQuestionClick(question)}
                  >
                    {i + 1}
                  </Button>
                );
              })}
            </div>
          </div>
          {/* <QuizTimerBadge className={'mt-auto ml-auto'} /> */}
        </div>
        <QuestionCard
          mode={'quiz'}
          question={model.quiz.activeQuestion}
          onAnswerClick={model.clickQuestionAnswer}
          loading={model.isProcessing}
        />
        <div
          className={
            'sticky bottom-0 mt-2 flex flex-row justify-end bg-custom-background/35 px-6 py-2 backdrop-blur-sm max-xs:px-2 2xl:mt-4'
          }
        >
          {/*<Button*/}
          {/*  variant={'outline'}*/}
          {/*  className={*/}
          {/*    'mr-auto hover:bg-destructive/90 hover:text-destructive-foreground/90'*/}
          {/*  }*/}
          {/*>*/}
          {/*  Завершить*/}
          {/*</Button>*/}
          <Button
            className={'ml-2'}
            onClick={model.clickContinueButton}
            disabled={model.continueDisabled}
          >
            {model.displayResultsLabel ? 'Результаты' : 'Продолжить'}
          </Button>
        </div>
      </div>
    </div>
  );
});
