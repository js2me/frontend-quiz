import { Form, type FormParams } from 'mobx-react-hook-form';
import { blockHistoryWhile } from 'mobx-route';
import type { FieldValues } from 'react-hook-form';
import { generateId } from 'yummies/id';
import { history } from '@/shared/config/routing';

export interface EnhancedFormConfig<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
> extends FormParams<TFieldValues, TContext, TTransformedValues> {
  id?: string;
  blockHistoryWhileFormIsDirty?: boolean;
}

export class EnhancedForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
> extends Form<TFieldValues, TContext, TTransformedValues> {
  unblockHistory: undefined | VoidFunction;

  readonly id: string;

  constructor({
    id,
    blockHistoryWhileFormIsDirty,
    ...config
  }: EnhancedFormConfig<TFieldValues, TContext, TTransformedValues>) {
    super({
      ...config,
      onSubmit: async (data) => {
        const result = await config.onSubmit?.(data);
        this.unblockHistory?.();
        return result;
      },
    });

    this.id = id ?? generateId();

    if (blockHistoryWhileFormIsDirty) {
      this.unblockHistory = blockHistoryWhile(() => this.isDirty, {
        history: history,
        signal: config.abortSignal,
      });
    }
  }
}
