/* eslint-disable sonarjs/no-nested-functions */
import { observer } from 'mobx-react-lite';
import { useCreateViewModel } from 'mobx-view-model';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { TooltipProvider } from '@/shared/ui/tooltip';

import { HomePageVM } from '../model';

import { StartQuizForm } from './components/start-quiz-form';

export const HomePage = observer(() => {
  useCreateViewModel(HomePageVM);

  return (
    <TooltipProvider>
      <div className={'flex flex-col !my-auto prose dark:prose-invert'}>
        <h1
          className={
            'text-5xl -mt-40 max-lg:-mt-20 max-md:!-mt-30 max-md:mb-4 max-sm:text-4xl'
          }
        >
          Frontend <span className={'text-brand'}>Quiz</span>
        </h1>
        <div
          className={
            'flex flex-row flew-wrap gap-5 max-md:flex-col max-md:gap-1'
          }
        >
          <Card
            className={
              'relative prose dark:prose-invert w-full md:max-w-85 flex-none'
            }
          >
            <CardHeader>
              <CardTitle>
                <h2 className={'!m-0'}>Начать квиз</h2>
              </CardTitle>
              <CardDescription>
                {`Выберите необходимые параметры и приступайте к прохождению!`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StartQuizForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
});
