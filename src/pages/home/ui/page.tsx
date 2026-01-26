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
      <div className={'!my-auto prose dark:prose-invert flex flex-col'}>
        <h1
          className={
            '-mt-40 text-5xl max-sm:text-4xl max-md:mt-auto max-md:mb-4 max-lg:-mt-20'
          }
        >
          Frontend <span className={'text-brand'}>Quiz</span>
        </h1>
        <div
          className={
            'flew-wrap flex flex-row gap-5 max-md:flex-col max-md:gap-1'
          }
        >
          <Card
            className={
              'prose dark:prose-invert relative w-full flex-none md:max-w-85'
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
