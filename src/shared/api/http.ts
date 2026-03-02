// eslint-disable-next-line import/no-internal-modules
import { HttpClient } from './common/http-client';

const siteUrl = `${location.protocol}//${location.host}`;

const apiUrl =
  window.sharedEnvs?.apiUrl ||
  (buildEnvs.DEV || buildEnvs.PREVIEW
    ? `${siteUrl}/__dev-api__`
    : `${siteUrl}`);

export const http = new HttpClient({
  baseUrl: apiUrl,
  baseApiParams: {
    format: 'json',
  },
});
