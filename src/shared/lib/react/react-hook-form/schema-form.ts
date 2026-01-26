import { zodResolver } from '@hookform/resolvers/zod';
import type * as z from 'zod';
import type { $ZodType } from 'zod/v4/core';
import { EnhancedForm, type EnhancedFormConfig } from './enhanced-form';

type PossibleSchemaVariants = $ZodType<any, any>;

export interface SchemaFormParams<
  TSchema extends PossibleSchemaVariants,
  TContext = any,
> extends Omit<
    EnhancedFormConfig<z.input<TSchema>, TContext, z.output<TSchema>>,
    'resolver'
  > {
  schema: TSchema;
}

export class SchemaForm<
  TSchema extends PossibleSchemaVariants = PossibleSchemaVariants,
  TContext = any,
> extends EnhancedForm<z.input<TSchema>, TContext, z.infer<TSchema>> {
  schema: TSchema;

  constructor({
    schema,
    id,
    blockHistoryWhileFormIsDirty,
    ...params
  }: SchemaFormParams<TSchema, TContext>) {
    const resolver = zodResolver(schema as any);

    super({
      ...params,
      resolver,
      onSubmit: async (data) => {
        const result = await params.onSubmit?.(data);
        return result;
      },
    });

    this.schema = schema;
  }
}
