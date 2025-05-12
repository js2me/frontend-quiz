import { observer } from 'mobx-react-lite';
import { useCreateViewModel } from 'mobx-view-model';

import { Button } from '@/shared/ui/button';
import { Field } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';

import { HomePageVM } from '../model';

export const HomePage = observer(() => {
  const model = useCreateViewModel(HomePageVM);

  return (
    <form
      className={
        'prose flex flex-col w-[480px] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 -mt-30'
      }
      onSubmit={model.newQuizForm.submit}
      onReset={model.newQuizForm.reset}
    >
      <h1>Квиз по фронтенду</h1>
      <div className={'flex flex-col gap-2 min-h-[240px]'}>
        <Field
          label={'Количество вопросов'}
          error={model.newQuizForm.errors.questionsCount?.message}
        >
          <Input
            defaultValue={
              model.newQuizForm.defaultValues?.questionsCount ?? undefined
            }
            {...model.newQuizForm.register('questionsCount')}
            className={'max-w-[220px]'}
            placeholder={'Введите число'}
            type={'number'}
            autoFocus
          />
        </Field>
      </div>
      <div className={'flex flex-row ml-auto my-4'}>
        <Button type={'submit'}>Начать</Button>
      </div>
    </form>
  );
});
