import {
  MobxLocation,
  QueryParams,
  routeConfig,
  MobxHistory,
} from 'mobx-route';

const history = new MobxHistory();
const location = new MobxLocation(history);
const queryParams = new QueryParams(location, history);

routeConfig.set({
  history,
  location,
  queryParams,
  useHashRouting: true,
  baseUrl: buildEnvs.BASE_URL,
});
