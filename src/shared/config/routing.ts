import {
  routeConfig,
  createMemoryHistory,
  createQueryParams,
} from 'mobx-route';

const history = createMemoryHistory();
const queryParams = createQueryParams({ history });

routeConfig.set({
  history,
  queryParams,
  baseUrl: buildEnvs.BASE_URL,
});
