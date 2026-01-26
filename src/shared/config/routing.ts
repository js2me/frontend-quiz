import { createHashHistory, createQueryParams, routeConfig } from 'mobx-route';

export const history = createHashHistory();

export const query = createQueryParams({ history });

routeConfig.update({
  history,
  queryParams: query,
  baseUrl: buildEnvs.BASE_URL,
});
