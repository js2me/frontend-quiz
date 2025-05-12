import { observer } from 'mobx-react-lite';
import { RouteView } from 'mobx-route/react';
import { ViewModelsProvider } from 'mobx-view-model';

import { Layout } from '@/pages/_layout';
import { aboutRoute } from '@/pages/about';
import { homeRoute } from '@/pages/home';
import { vmStore } from '@/shared/config/view-models';

export const App = observer(() => {
  return (
    <ViewModelsProvider value={vmStore}>
      <Layout.Container>
        <RouteView
          route={homeRoute}
          lazyView={async () => {
            const { HomePage } = await import('@/pages/home/ui');
            return HomePage;
          }}
        />
        <RouteView
          route={aboutRoute}
          lazyView={async () => {
            const { AboutPage } = await import('@/pages/about/ui');
            return AboutPage;
          }}
        />
      </Layout.Container>
    </ViewModelsProvider>
  );
});
