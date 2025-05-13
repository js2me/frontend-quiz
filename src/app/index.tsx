import { observer } from 'mobx-react-lite';
import { RouteView } from 'mobx-route/react';
import { ViewModelsProvider } from 'mobx-view-model';

import { Layout } from '@/pages/_layout';
import { aboutRoute } from '@/pages/about';
import { homeRoute } from '@/pages/home';
import { vmStore } from '@/shared/config/view-models';
import { TooltipProvider } from '@/shared/ui/tooltip';

export const App = observer(() => {
  return (
    <TooltipProvider>
      <ViewModelsProvider value={vmStore}>
        <Layout.Container>
          <RouteView
            route={homeRoute}
            loader={Layout.Loader}
            lazyView={async () => {
              const { HomePage } = await import('@/pages/home/ui');
              return HomePage;
            }}
          />
          <RouteView
            route={aboutRoute}
            loader={Layout.Loader}
            lazyView={async () => {
              const { AboutPage } = await import('@/pages/about/ui');
              return AboutPage;
            }}
          />
        </Layout.Container>
      </ViewModelsProvider>
    </TooltipProvider>
  );
});
