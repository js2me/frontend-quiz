import { observer } from 'mobx-react-lite';
import { RouteView } from 'mobx-route/react';
import { ViewModelsProvider } from 'mobx-view-model';

import { homeRoute } from '@/pages/home';
import { vmStore } from '@/shared/config/view-models';

export const App = observer(() => {
  return (
    <ViewModelsProvider value={vmStore}>
      <RouteView
        route={homeRoute}
        lazyView={async () => {
          const { HomePage } = await import('@/pages/home/ui');
          return HomePage;
        }}
      />
    </ViewModelsProvider>
  );
});
