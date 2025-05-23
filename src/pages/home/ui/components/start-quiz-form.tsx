/* eslint-disable sonarjs/no-nested-functions */
import { Controller } from 'mobx-react-hook-form';
import { observer } from 'mobx-react-lite';
import { useViewModel } from 'mobx-view-model';

import {
  getQuestionCategoryLabel,
  getQuestionLevelLabel,
} from '@/entities/question-templates/lib';
import {
  availableQuestionCategories,
  availableQuestionLevels,
} from '@/features/quiz/create/config';
import { Button } from '@/shared/ui/button';
import { Field } from '@/shared/ui/field';
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';

import { quizAvailableCountToChoose } from '../../config';
import { HomePageVM } from '../../model';

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
                {availableQuestionLevels.map((level) => {
                  return (
                    <ToggleGroupItem
                      key={level}
                      value={level}
                      variant={'outline-brand-extra'}
                      size={'lg'}
                      className={'shadow-none'}
                      onClick={() => {
                        if (field.value.includes(level)) {
                          field.onChange(
                            field.value.filter((it) => it !== level),
                          );
                        } else {
                          field.onChange([...field.value, level]);
                        }
                      }}
                    >
                      {getQuestionLevelLabel(level)}
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
                {availableQuestionCategories.map((category) => {
                  return (
                    <ToggleGroupItem
                      key={category}
                      value={category}
                      variant={'outline-brand-extra'}
                      size={'lg'}
                      className={'shadow-none relative'}
                      onClick={() => {
                        if (field.value.includes(category)) {
                          field.onChange(
                            field.value.filter((it) => it !== category),
                          );
                        } else {
                          field.onChange([...field.value, category]);
                        }
                      }}
                    >
                      {getQuestionCategoryLabel(category)}
                    </ToggleGroupItem>
                  );
                })}
              </ToggleGroup>
            </Field>
          )}
        />
      </div>
      <div className={'flex flex-row ml-auto mt-8'}>
        <Button
          type={'submit'}
          variant={'default'}
          size={'lg'}
          className={'relative'}
          disabled={model.isLoading}
        >
          {model.isLoading ? 'Загрузка' : 'Запуск'}
        </Button>
      </div>
    </form>
  );
});
