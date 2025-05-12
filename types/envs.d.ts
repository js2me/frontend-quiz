/**
 * Переменные окружения, которые вшиваются при сборке проекта.
 * Это статичные данные
 */
declare interface BuildEnvVariables {
  packageJson: Record<string, any>;
  VERSION: string;
  DEV: boolean;
  TESTS?: string;
  BASE_URL: string;
  PREVIEW: boolean;
}

declare const buildEnvs: BuildEnvVariables;
