import { observer } from 'mobx-react-lite';
import { RouteView } from 'mobx-route/react';
import { ViewModelsProvider } from 'mobx-view-model';

import { Layout } from '@/pages/_layout';
import { aboutRoute } from '@/pages/about';
import { homeRoute } from '@/pages/home';
import { vmStore } from '@/shared/config';

export const App = observer(() => {
  return (
    <ViewModelsProvider value={vmStore}>
      <Layout.Container>
        <RouteView
          route={homeRoute}
          loading={Layout.Loader}
          loadView={async () => {
            const { HomePage } = await import('@/pages/home/ui');
            return HomePage;
          }}
        />
        <RouteView
          route={aboutRoute}
          loading={Layout.Loader}
          loadView={async () => {
            const { AboutPage } = await import('@/pages/about/ui');
            return AboutPage;
          }}
        />
      </Layout.Container>
    </ViewModelsProvider>
  );
});
