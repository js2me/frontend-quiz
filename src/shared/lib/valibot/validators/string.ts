import noun from 'plural-ru';
import {
  null_,
  optional,
  pipe,
  string as stringBase,
  transform,
  trim,
  undefined_,
  union,
  maxLength as maxLengthBase,
  minLength as minLengthBase,
  LengthInput,
  MaxLengthIssue,
  ErrorMessage,
  MinLengthIssue,
} from 'valibot';

import { messages } from './config';

export const minLength = <
  TInput extends LengthInput,
  const TRequirement extends number,
  const TMessage extends
    | ErrorMessage<MinLengthIssue<TInput, TRequirement>>
    | undefined,
>(
  requirement: TRequirement,
  message?: TMessage,
) => {
  return minLengthBase<TInput, TRequirement, TMessage>(
    requirement,
    message ??
      (noun(
        requirement,
        `Это поле не может быть короче ${requirement} символа`,
        `Это поле не может быть короче ${requirement} символов`,
        `Это поле не может быть короче ${requirement} символов`,
      ) as any),
  );
};

export const maxLength = <
  TInput extends LengthInput,
  const TRequirement extends number,
  const TMessage extends
    | ErrorMessage<MaxLengthIssue<TInput, TRequirement>>
    | undefined,
>(
  requirement: TRequirement,
  message?: TMessage,
) => {
  return maxLengthBase<TInput, TRequirement, TMessage>(
    requirement,
    message ??
      (noun(
        requirement,
        `Это поле не может быть длиннее ${requirement} символа`,
        `Это поле не может быть длиннее ${requirement} символов`,
        `Это поле не может быть длиннее ${requirement} символов`,
      ) as any),
  );
};

export interface StringParams {
  trim?: boolean;
  minLength?: number;
  maxLength?: number;
  message?: string;
}

export const string = (params?: StringParams) => {
  let schema = stringBase(params?.message ?? messages.required);

  if (params?.trim ?? true) {
    schema = pipe(schema, trim());
  }

  if (params?.minLength != null) {
    schema = pipe(schema, minLength(params.minLength, params?.message)) as any;
  }

  if (params?.maxLength != null) {
    schema = pipe(schema, maxLength(params.maxLength, params?.message)) as any;
  }

  return schema;
};

export const requiredString = (params?: StringParams) =>
  pipe(string(params), minLength(1, params?.message ?? messages.required));

export const optionalString = (params?: StringParams) => {
  return optional(
    pipe(
      union([
        string({ ...params, minLength: undefined }),
        null_(),
        undefined_(),
      ]),
      transform((input) => {
        if (input == null || input === '') {
          return;
        }
        return input;
      }),
      optional(string(params)),
    ),
  );
};
