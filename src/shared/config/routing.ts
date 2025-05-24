import { routeConfig, createHashHistory } from 'mobx-route';

const history = createHashHistory();

routeConfig.update({
  history,
  baseUrl: buildEnvs.BASE_URL,
});
