/* eslint-disable sonarjs/no-nested-functions */
import { Controller } from 'mobx-react-hook-form';
import { observer } from 'mobx-react-lite';
import { useViewModel } from 'mobx-view-model';
import { ReactNode } from 'react';
import { InferOutput } from 'valibot';

import { Button } from '@/shared/ui/button';
import { Field } from '@/shared/ui/field';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';

import { HomePageVM } from '../../model';
import {
  quizAvailableCountToChoose,
  quizLevelSchema,
  quizCategorySchema,
} from '../../model/schemas';

const LEVEL_LABELS: Record<InferOutput<typeof quizLevelSchema>, ReactNode> = {
  junior: 'Junior 😺',
  middle: 'Middle 🤓',
  senior: 'Senior 🤖',
};

const CATEGORY_LABELS: Record<
  InferOutput<typeof quizCategorySchema>,
  ReactNode
> = {
  code: 'Код',
  theory: 'Теория',
  'html/css': 'HTML/CSS',
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
        <Controller
          control={model.newQuizForm.control}
          name={'questionsCount'}
          render={({ field, fieldState }) => (
            <Field
              label={'Количество вопросов:'}
              error={fieldState.error?.message}
            >
              <Tabs value={`${field.value}`}>
                <TabsList>
                  {quizAvailableCountToChoose.map((count) => {
                    return (
                      <TabsTrigger
                        key={count}
                        value={`${count}`}
                        className={'w-[50px]'}
                        onClick={() => field.onChange(count)}
                      >
                        {count}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </Tabs>
            </Field>
          )}
        />
        <Controller
          control={model.newQuizForm.control}
          name={'levels'}
          render={({ field, fieldState }) => (
            <Field label={'Уровни:'} error={fieldState.error?.message}>
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
            </Field>
          )}
        />
        <Controller
          control={model.newQuizForm.control}
          name={'categories'}
          render={({ field, fieldState }) => (
            <Field label={'Категории:'} error={fieldState.error?.message}>
              <ToggleGroup
                type={'multiple'}
                className={'justify-left flex-wrap'}
                value={field.value}
              >
                {quizCategorySchema.options.map((option) => {
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
                      {CATEGORY_LABELS[option.literal]}
                    </ToggleGroupItem>
                  );
                })}
              </ToggleGroup>
            </Field>
          )}
        />
      </div>
      <div className={'flex flex-row ml-auto mt-8'}>
        <Button type={'submit'} variant={'default'} size={'lg'}>
          Запуск
        </Button>
      </div>
    </form>
  );
});
