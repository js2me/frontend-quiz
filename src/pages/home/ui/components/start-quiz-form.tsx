/* eslint-disable sonarjs/no-nested-functions */
import { observer } from 'mobx-react-lite';
import { useViewModel } from 'mobx-view-model';
import { ReactNode } from 'react';
import { Controller } from 'react-hook-form';
import { InferOutput } from 'valibot';

import { Button } from '@/shared/ui/button';
import { Field } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';

import { HomePageVM } from '../../model';
import { quizLevelSchema } from '../../model/schemas';

const LEVEL_LABELS: Record<InferOutput<typeof quizLevelSchema>, ReactNode> = {
  junior: 'Junior 😺',
  middle: 'Middle 🤓',
  senior: 'Senior 🤖',
};

export const StartQuizForm = observer(() => {
  const model = useViewModel(HomePageVM);

  return (
    <form
      className={'flex flex-col w-full'}
      onSubmit={model.newQuizForm.submit}
      onReset={model.newQuizForm.reset}
    >
      <div className={'flex flex-col gap-6 min-h-[240px]'}>
        <Field
          label={'Количество вопросов:'}
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
        <Field
          label={'Уровни:'}
          error={model.newQuizForm.errors.levels?.message}
        >
          <Controller
            control={model.newQuizForm.control}
            name={'levels'}
            render={({ field }) => (
              <ToggleGroup
                type={'multiple'}
                className={'justify-left flex-wrap'}
                value={field.value}
              >
                {quizLevelSchema.options.map((option) => {
                  return (
                    <ToggleGroupItem
                      key={option.literal}
                      value={option.literal}
                      variant={'outline-brand-extra'}
                      size={'lg'}
                      className={'shadow-none'}
                      onClick={() => {
                        if (field.value.includes(option.literal)) {
                          field.onChange(
                            field.value.filter((it) => it !== option.literal),
                          );
                        } else {
                          field.onChange([...field.value, option.literal]);
                        }
                      }}
                    >
                      {LEVEL_LABELS[option.literal]}
                    </ToggleGroupItem>
                  );
                })}
              </ToggleGroup>
            )}
          />
        </Field>
      </div>
      <div className={'flex flex-row ml-auto'}>
        <Button type={'submit'} variant={'default'} size={'lg'}>
          Запуск
        </Button>
      </div>
    </form>
  );
});
