/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AnswerDtoDC {
  code?: string;
  id: string;
  language?: string;
  order?: number;
  right?: boolean;
  selected?: boolean;
  selectedOrder?: number | null;
  text?: string;
}

export type AnswerQuestionDataDC = QuizResultDtoDC | QuizInfoDtoDC;

export interface AnswerQuestionDtoDC {
  answerIds: string[];
  questionId: number;
}

export interface AnswerQuestionParamsDC {
  next_question?: number;
}

export interface AnsweredQuestionOldDtoDC {
  answer_count: number;
  answers: AnswerDtoDC[];
  code: string;
  complexity: number;
  display?: string;
  fileName?: string;
  /** @format date-time */
  generatedDate: string;
  gridCols: number;
  gridRows: number;
  helpLinks?: string[];
  helpText?: string;
  helpType?: string;
  id: number;
  isRight?: boolean | null;
  language?: string;
  /** @format date-time */
  lastAnswerDate?: string | null;
  lowerText?: string;
  multiple?: boolean;
  ordered?: boolean;
  pings: number;
  position: number;
  quizId: string;
  right: boolean;
  skip_count: number;
  skipped: boolean;
  templateId: number;
  timer: number;
  type: QuestionTypeDC;
  upperText: string;
}

export interface AppCurrentQuizDtoDC {
  id: string;
  question: number;
}

export interface AppInfoDtoDC {
  currentQuiz: AppCurrentQuizDtoDC | null;
  permissions: RolePermissionsDtoDC;
  quizParams: AppQuizParamsDtoDC;
  statistic: QuizzesStatisticDtoDC;
  user: UserInfoDtoDC | null;
}

export interface AppQuizParamQuestionTypeDtoDC {
  count: number;
  hidden: boolean;
  id: number;
  name: string;
}

export interface AppQuizParamsDtoDC {
  question_counts: IdNameDtoDC[];
  question_levels: IdNameDtoDC[];
  question_types: AppQuizParamQuestionTypeDtoDC[];
}

export interface BugReportDtoDC {
  description: string;
  questionId: number;
  quizId: string;
}

export interface BugReportFullDtoDC {
  created_date: string;
  description: string;
  id: number;
  question: FullQuestionDtoDC;
}

export interface BugReportListDtoDC {
  items: BugReportFullDtoDC[];
  limit: number;
  offset: number;
  total: number;
}

export type CancelQuizDataDC = any;

export type ChangePasswordDataDC = any;

export interface ChangePasswordDtoDC {
  newPassword: string;
  password?: string;
}

export enum CodeThemeDC {
  Paraiso = "paraiso",
  Github = "github",
  AtomOne = "atom-one",
  QtCreator = "qt-creator",
  Stackoverflow = "stackoverflow",
  TokyoNight = "tokyo-night",
  Nnfx = "nnfx",
  Kimbie = "kimbie",
  PandaSyntax = "panda-syntax",
  IsblEditor = "isbl-editor",
}

export type CreateDataDC = any;

export type CreateQuestionDataDC = QuestionTemplateDetailedDtoDC;

export type CreateQuizLinkDataDC = QuizLinkDtoDC;

export interface CredentialsDtoDC {
  password: string;
  username: string;
}

export type DeleteBugReportDataDC = any;

export type DeleteQuizDataDC = any;

export type DeleteQuizLinkDataDC = any;

export type EndQuizDataDC = QuizResultDtoDC;

export interface EndQuizDtoDC {
  quizId: string;
}

export type ExecuteCodeDataDC = FullQuestionDtoDC;

export interface ExecuteCodeInputDtoDC {
  id?: number | null;
  source: string;
  type?: QuestionTypeDC | null;
}

export enum ExternalAuthorizationTypeDC {
  Github = "github",
}

export interface FullQuestionDtoDC {
  answer_count: number;
  answers: AnswerDtoDC[];
  code: string;
  complexity: number;
  display?: string;
  fileName?: string;
  /** @format date-time */
  generatedDate: string;
  gridCols: number;
  gridRows: number;
  helpLinks?: string[];
  helpText?: string;
  helpType?: string;
  id: number;
  isRight?: boolean | null;
  language?: string;
  /** @format date-time */
  lastAnswerDate?: string | null;
  lowerText?: string;
  multiple?: boolean;
  ordered?: boolean;
  pings: number;
  position: number;
  quizId: string;
  skip_count: number;
  templateId: number;
  timer: number;
  type: QuestionTypeDC;
  upperText: string;
}

export type GetBugReportDataDC = BugReportFullDtoDC;

export type GetInfoDataDC = QuestionTemplatesInfoDtoDC;

export type GetInfoResultDC = AppInfoDtoDC;

export type GetQuestionDataDC = QuizInfoDtoDC;

export interface GetQuestionParamsOldDtoDC {
  questionId: string;
}

export type GetQuestionTemplateDataDC = QuestionTemplateDetailedDtoDC;

export interface GetQuestionTemplateParamsDC {
  templateId: number;
}

export type GetQuestionTemplatesListDataDC = QuestionTemplateListDtoDC;

export interface GetQuestionTemplatesListParamsDC {
  limit: number;
  offset: number;
  orderBy?: string;
  search?: string;
  sort?: "asc" | "desc";
  types?: number[];
}

export type GetQuizDataDC = QuizResultDtoDC;

export type GetQuizLinkDetailsDataDC = QuizLinkDetailsDtoDC;

export type GetQuizLinksDataDC = QuizLinkDtoDC[];

export type GetQuizListDataDC = QuizResultListDtoDC;

export interface GetQuizListParamsDC {
  limit: number;
  offset: number;
  orderBy?: string;
  sessionId?: string;
  sort?: string;
  state?: string;
  username?: string;
}

export type GetQuizResultDC = QuizResultDtoDC | QuizInfoDtoDC;

export type GetQuizResultDataDC = QuizResultDtoDC;

export interface GetQuizResultDtoDC {
  quizId: string;
}

export type GetQuizResultListDataDC = QuizResultListDtoDC;

export interface GetQuizResultListParamsDC {
  limit: number;
  offset: number;
  userId: number;
}

export type GetQuizResultsDataDC = QuizResultDtoDC[];

export type GetQuizzesDataDC = QuizResultDtoDC[];

export type GetQuizzesResultDC = QuizResultDtoDC[];

export type GetReportListDataDC = BugReportListDtoDC;

export interface GetReportListParamsDC {
  limit: number;
  offset: number;
  orderBy?: string;
  sort?: string;
}

export type GetResultQuizQuestionDataDC = FullQuestionDtoDC;

export type GetRoleSettingsDataDC = SettingsDaoDC;

export type GetSessionByIdDataDC = SessionInfoDtoDC;

export type GetSessionListDataDC = SessionListDtoDC;

export interface GetSessionListParamsDC {
  agent?: string;
  ip?: string;
  limit: number;
  offset: number;
  orderBy?: string;
  sessId?: string;
  sort?: string;
  userslug?: string;
}

export type GetSessionsDataDC = SessionInfoOldDtoDC[];

export type GetUserByIdDataDC = UserInfoDtoDC;

export type GetUserInfoByUsernameDataDC = UserInfoDtoDC;

export type GetUserListDataDC = UserListDtoDC;

export interface GetUserListParamsDC {
  limit: number;
  offset: number;
  orderBy?: string;
  sort?: string;
}

export type GetUserQuizResultsDataDC = QuizResultListDtoDC;

export interface GetUserQuizResultsParamsDC {
  limit: number;
  offset: number;
  userId: number;
}

export type GetUserSettingsDataDC = SettingsDtoDC;

export type GetUsersDataDC = UserInfoDtoDC[];

export interface GithubUserInfoDtoDC {
  id: number;
  url: string;
  userLink: string;
  username: string;
}

export type HealthzControllerGetOkDataDC = any;

export interface IdNameDtoDC {
  id: number;
  name: string;
}

export enum LocaleDC {
  Ru = "ru",
  En = "en",
}

export type LoginDataDC = UserInfoDtoDC;

export type LogoutUserDataDC = any;

export interface NewUserDtoDC {
  password: string;
  username: string;
}

export type PingDataDC = any;

export interface QuestionCodeFrequencyDtoDC {
  high: number;
  low: number;
  medium: number;
}

export interface QuestionCodeInfoDtoDC {
  active: boolean;
  created_date: number;
  frequency: QuestionCodeFrequencyDtoDC;
  group: QuestionTypeDC;
  id: string;
  modified_date: number;
  name: string;
  score: number;
  source: string;
  timer: TimerDataDtoDC;
}

export interface QuestionDtoDC {
  answer_count: number;
  answers: AnswerDtoDC[];
  code: string;
  complexity: number;
  display?: string;
  fileName?: string;
  /** @format date-time */
  generatedDate: string;
  gridCols: number;
  gridRows: number;
  helpLinks?: string[];
  helpText?: string;
  helpType?: string;
  id: number;
  isRight?: boolean | null;
  language?: string;
  /** @format date-time */
  lastAnswerDate?: string | null;
  lowerText?: string;
  multiple?: boolean;
  ordered?: boolean;
  pings: number;
  position: number;
  quizId: string;
  skip_count: number;
  templateId: number;
  timer: number;
  type: QuestionTypeDC;
  upperText: string;
}

export interface QuestionQuizProcessingDtoDC {
  answered?: boolean;
  answers: AnswerDtoDC[];
  code?: string;
  display?: string;
  gridCols?: number;
  gridRows?: number;
  id: number;
  language?: string;
  lowerText?: string;
  multiple?: boolean;
  ordered?: boolean;
  position: number;
  skipped?: boolean;
  templateId: number;
  timer: number;
  type: QuestionTypeDC;
  upperText?: string;
}

export interface QuestionTemplateDetailedDtoDC {
  complexity: number;
  creationDate: string;
  creatorId: number | null;
  enabled: boolean;
  frequency: Record<string, any>;
  id: number;
  modifiedDate: string | null;
  name: string;
  source: string;
  timer: number;
  type: QuestionTypeDC;
}

export interface QuestionTemplateListDtoDC {
  items: QuestionTemplateDetailedDtoDC[];
  limit: number;
  offset: number;
  total: number;
}

export interface QuestionTemplatesInfoDtoDC {
  question_levels: IdNameDtoDC[];
  question_template_backend_empty_question: string;
  question_template_backend_types: string;
  question_types: IdNameDtoDC[];
}

export enum QuestionTypeDC {
  Theoretical = 1,
  Code = 2,
  Layout = 3,
  Async = 4,
  React = 5,
  Effector = 6,
}

export enum QuestionTypeOLDDC {
  Theoretical = "theoretical",
  Code = "code",
  Async = "async",
  Layout = "layout",
  React = "react",
  Effector = "effector",
}

export enum QuizComplexityDC {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export interface QuizInfoDtoDC {
  endDate: string;
  link: Record<string, any>;
  question: QuestionQuizProcessingDtoDC;
  questions: QuizQuestionShortInfoDtoDC[];
  quizId: string;
  startDate: string;
}

export interface QuizLinkDetailsDtoDC {
  completed?: boolean;
  created_date: number;
  id: string;
  quizId?: string;
  quizParams: QuizParamsDtoDC;
  result: QuizResultDtoDC | null;
  sessionId?: string;
  ttl: number | null;
  userId: string;
}

export interface QuizLinkDtoDC {
  completed?: boolean;
  created_date: number;
  id: string;
  quizId?: string;
  quizParams: QuizParamsDtoDC;
  sessionId?: string;
  ttl: number | null;
  userId: string;
}

export interface QuizLinkStartDtoDC {
  name: string;
}

export interface QuizParamsDtoDC {
  complexity: number[];
  questionTypes: number[];
  questionsCount: number;
  username: string;
}

export interface QuizQuestionShortInfoDtoDC {
  answers: string[] | null;
  id: number;
  visited: boolean;
}

export interface QuizResultDtoDC {
  all: number;
  canceled?: boolean;
  endDate: string;
  finishDate?: string;
  finished: boolean;
  githubUrl?: string;
  id: string;
  lastSeenDate?: string;
  link: string;
  pings: number;
  questions: FullQuestionDtoDC[];
  questionsCount: number;
  right: number;
  score: number;
  sessionId?: string;
  skipped: number;
  startDate: string;
  userAvatar?: string | null;
  userId?: number;
  username: string;
  views?: number;
}

export interface QuizResultListDtoDC {
  items: QuizResultDtoDC[];
  limit: number;
  offset: number;
  total: number;
}

export interface QuizResultOldDtoDC {
  all: number;
  endDate: string;
  finishDate: string;
  githubUrl?: string;
  id: string;
  language: LocaleDC;
  link: string;
  pings: number;
  questions: AnsweredQuestionOldDtoDC[];
  questionsCount: number;
  right: number;
  score: number;
  skipped: number;
  startDate: string;
  userAvatar?: string;
  userId?: string;
  username: string;
  views?: number;
}

export interface QuizzesStatisticDtoDC {
  month_best: UserShortInfoDtoDC | null;
  month_quizzes: number;
  today_best: UserShortInfoDtoDC | null;
  today_quizzes: number;
  week_best: UserShortInfoDtoDC | null;
  week_quizzes: number;
}

export type RegisterDataDC = UserInfoDtoDC;

export type RemoveQuestionDataDC = any;

export type RemoveSessionByIdDataDC = any;

export type RemoveUserDataDC = any;

export enum RoleDC {
  Admin = 1,
  Pro = 2,
  Base = 3,
  Anon = 4,
}

export interface RolePermissionsDtoDC {
  question_counts: number[];
  question_levels: number[];
  question_types: number[];
  quiz_links: boolean;
}

export interface SessionInfoDtoDC {
  creationDate: string;
  enabled: boolean;
  expireDate: string;
  id: string;
  ip: string | null;
  loggedIn: boolean;
  modifyDate?: string | null;
  onSite: boolean;
  userAgent: string | null;
  userId?: number | null;
  userSlug: string | null;
}

export interface SessionInfoOldDtoDC {
  __?: string;
  ip?: string;
  lookup?: Record<string, any>;
  pings?: number;
  questions?: FullQuestionDtoDC[];
  quizInfo?: QuizInfoDtoDC;
  quizParams?: QuizParamsDtoDC;
  referer?: string;
  sessionId: string;
  userId?: string;
}

export interface SessionListDtoDC {
  items: SessionInfoDtoDC[];
  limit: number;
  offset: number;
  total: number;
}

export interface SessionUpdateDtoDC {
  enabled?: boolean;
  userAgent?: string | null;
  userSlug?: string | null;
}

export interface SettingsCategoryDaoDC {
  roles: UserRoleDC[];
  value: QuestionTypeDC;
  visible: boolean;
}

export interface SettingsCategoryDtoDC {
  disabled: boolean;
  value: QuestionTypeDC;
}

export interface SettingsComplexityDaoDC {
  roles: UserRoleDC[];
  value: QuizComplexityDC;
  visible: boolean;
}

export interface SettingsComplexityDtoDC {
  disabled: boolean;
  value: QuizComplexityDC;
}

export interface SettingsDaoDC {
  categories: SettingsCategoryDaoDC[];
  complexity: SettingsComplexityDaoDC[];
  questionCount: SettingsQuestionCountDaoDC[];
}

export interface SettingsDtoDC {
  categories: SettingsCategoryDtoDC[];
  complexity: SettingsComplexityDtoDC[];
  questionCount: SettingsQuestionCountDtoDC[];
}

export interface SettingsQuestionCountDaoDC {
  roles: UserRoleDC[];
  value: number;
  visible: boolean;
}

export interface SettingsQuestionCountDtoDC {
  disabled: boolean;
  value: number;
}

export type StartQuizByLinkDataDC = QuizInfoDtoDC;

export type StartQuizDataDC = QuizInfoDtoDC;

export interface TimerDataDtoDC {
  minutes: number;
  seconds: number;
}

export type UnlinkAccountDataDC = any;

export type UpdateQuestionDataDC = QuestionTemplateDetailedDtoDC;

export type UpdateRoleSettingsDataDC = any;

export type UpdateSessionByIdDataDC = SessionInfoDtoDC;

export type UpdateUserDataDC = UserInfoDtoDC;

export type UpdateUserInfoDataDC = UserInfoDtoDC;

export interface UserInfoDtoDC {
  avatar: string | null;
  codeTheme?: CodeThemeDC;
  creationDate: string;
  email: string | null;
  fullName: string | null;
  github?: GithubUserInfoDtoDC;
  hasPass: boolean;
  id: number;
  publicGithub: boolean;
  publicProfileLink: boolean;
  quizCount: number;
  role?: RoleDC;
  score: number;
  username: string;
}

export interface UserListDtoDC {
  items: UserInfoDtoDC[];
  limit: number;
  offset: number;
  total: number;
}

export enum UserRoleDC {
  User = 0,
  Admin = 1,
  PaidUser = 2,
}

export interface UserShortInfoDtoDC {
  avatar: string | null;
  id: number;
  public?: boolean;
  username: string;
}

export interface UserUpdateDtoDC {
  avatar?: string | null;
  codeTheme?: CodeThemeDC | null;
  email?: string | null;
  fullName?: string | null;
  publicGithub?: boolean | null;
  publicProfileLink?: boolean | null;
  username?: string | null;
}
