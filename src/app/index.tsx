import { observer } from 'mobx-react-lite';
import { RouteView } from 'mobx-route/react';
import { ViewModelsProvider } from 'mobx-view-model';
import { aboutRoute } from '@/pages/about';
import { homeRoute } from '@/pages/home';
import { quizRoute } from '@/pages/quiz';
import { vmStore } from '@/shared/config';
import { Layout } from '@/widgets/layout';

console.log(homeRoute, aboutRoute, quizRoute);

export const App = observer(() => {
  return (
    <ViewModelsProvider value={vmStore}>
      <Layout.Container>
        <RouteView
          route={homeRoute}
          loading={Layout.Loader}
          loadView={() => import('@/pages/home/ui').then((m) => m.HomePage)}
        />
        <RouteView
          route={aboutRoute}
          loading={Layout.Loader}
          loadView={() => import('@/pages/about/ui').then((m) => m.AboutPage)}
        />
        <RouteView
          route={quizRoute}
          loading={Layout.Loader}
          loadView={() =>
            import('@/pages/quiz/ui/page').then((m) => m.QuizPage)
          }
        />
      </Layout.Container>
    </ViewModelsProvider>
  );
});
