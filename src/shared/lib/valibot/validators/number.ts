import {
  custom,
  nullable,
  number,
  pipe,
  string,
  transform,
  union,
} from 'valibot';
import { typeGuard } from 'yummies/type-guard';

import { messages } from './config';

export interface NumberParams {
  requiredMessage?: string;
  invalidNumberMessage?: string;
}

export const requiredNumber = (params?: NumberParams) =>
  pipe(
    union([string(), number(), nullable(number())]),
    transform((input) => {
      if (input === null) return null;
      if (input === '') return null;
      if (typeGuard.isNumber(+input)) {
        return +input;
      }
      return input;
    }),
    custom(
      (value) => value !== null,
      params?.requiredMessage ?? messages.required,
    ),
    custom(
      (value) => !typeGuard.isNaN(+`${value}`),
      params?.invalidNumberMessage ?? 'Значение должно быть числом',
    ),
  );
