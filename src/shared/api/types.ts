/* eslint-disable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line import/no-internal-modules

import { typeGuard } from 'yummies/type-guard';
import type {
  FullQuestionDtoDC,
  QuizInfoDtoDC,
  QuizResultDtoDC,
} from '@/shared/api';

export type Kek = true;

// export type Page = PageInfoDC['page'];
//
// export type PageType = Required<Page>['page_type'];
//
// export type PageByType<Type extends PageType> = Extract<
//   Required<Page>,
//   { page_type: Type }
// >;
//
// export const isSingleError = (obj?: unknown): obj is SingleErrorDC =>
//   typeof obj === 'object' &&
//   obj != null &&
//   ('header' in obj || 'message' in obj);
//
// export const isDetailError = (
//   obj?: unknown,
// ): obj is Required<HandlersHttpErrorDC> =>
//   typeof obj === 'object' &&
//   obj != null &&
//   'detail' in obj &&
//   typeof obj.detail === 'string';

export const isQuizInfoDto = (data: unknown): data is QuizInfoDtoDC =>
  typeGuard.isObject(data) && 'questions' in data && 'question' in data;
export const isFullQuestionDto = (data: unknown): data is FullQuestionDtoDC =>
  typeGuard.isObject(data) &&
  'answer_count' in data &&
  'complexity' in data &&
  'pings' in data;

export const isQuizResultDto = (data: unknown): data is QuizResultDtoDC =>
  typeGuard.isObject(data) && 'skipped' in data;
