import { observer } from 'mobx-react-lite';

import { Layout } from '@/pages/_layout';

export const AboutPage = observer(() => {
  return (
    <>
      <Layout.Header>О проекте</Layout.Header>
      <p className={'max-w-[480px]'}>
        Это перенесенная версия оригинального проекта <b>frontend-quiz</b>,
        который ранее был расположен по адресу:{' '}
        <a href={'https://frontend-quiz.ru'}>https://frontend-quiz.ru</a>
      </p>
      <p className={'max-w-[480px]'}>
        Но, увы, компания <b>Hetzner</b>, где были расположены сервера этого
        проекта решила полностью остановить поддержку русскоязычного сегмента.
      </p>
      <p className={'max-w-[480px]'}>
        В связи с этим актуальный дамп базы данных был утерян, а проект
        перенесён пока что на{' '}
        <a href={'https://github.com/js2me/frontend-quiz'}>GitHub</a>
      </p>
      <h3>Цель</h3>
      <p className={'max-w-[480px]'}>
        Цель проекта - улучшить качество фронтенд разработчиков в русскоязычном
        сегменте!
      </p>
      <h3>Авторы</h3>
      <p className={'max-w-[480px]'}>
        Большая часть вопросов по фронтенду была создана{' '}
        <a href={'https://github.com/js2me'}>мной лично</a>, за поддержку в
        разработке бэкенд-части и построения архитектуры базы данных хочется
        сказать спасибо GitHub пользователю{' '}
        <a href={'https://github.com/jar3b'}>jar3b</a>.
      </p>
      <h3>Технический стек:</h3>
      <p>
        <span>На чем работает проект:</span>
        <code className={'flex flex-col'}>
          {Object.entries(buildEnvs.packageJson.dependencies).map(
            ([dependencyName, version]) => {
              return (
                <span
                  key={dependencyName}
                >{`${dependencyName}@${version}`}</span>
              );
            },
          )}
        </code>
      </p>
    </>
  );
});
