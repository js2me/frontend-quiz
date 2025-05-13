import { ChevronsUpDown } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { useToggle } from 'react-shared-utils/hooks';

import { Layout } from '@/pages/_layout';
import { Button } from '@/shared/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/shared/ui/collapsible';
import { MediaViewer } from '@/shared/ui/media-viewer';

const oldVersionAssets = Object.values(
  import.meta.glob('./assets/old-versions/*', { eager: true }),
).map((module: any) => module.default as string);

const oldVerionAssetsGroupped = oldVersionAssets.reduce((groups, assetUrl) => {
  const lastGroup = groups.at(-1);

  if (!lastGroup || lastGroup.length >= 3) {
    groups.push([assetUrl]);
  } else {
    lastGroup.push(assetUrl);
  }

  return groups;
}, [] as string[][]);

export const AboutPage = observer(() => {
  const [oldVersionShowed, toggleOldVersionShow] = useToggle();

  console.info('oldVerionAssetsGroupped', oldVerionAssetsGroupped);

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
      <p className={'max-w-[480px] mt-0'}>
        Дополнительные ресурсы откуда были взяты вопросы:
        <br />
        <a href={'https://github.com/lydiahallie/javascript-questions/'}>
          https://github.com/lydiahallie/javascript-questions/
        </a>
        <br />
        <a href={'https://github.com/vvscode/js--interview-questions'}>
          https://github.com/vvscode/js--interview-questions
        </a>
        <br />
        <a href={'https://learn.javascript.ru/'}>
          https://learn.javascript.ru/
        </a>
      </p>
      <h3>Скриншоты старой версии:</h3>
      <Collapsible open={oldVersionShowed}>
        <CollapsibleTrigger asChild>
          <Button
            variant={'secondary'}
            size={'sm'}
            onClick={toggleOldVersionShow}
          >
            <span>Посмотреть</span>
            <ChevronsUpDown className={'h-4 w-4'} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div
            className={'mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 not-prose'}
          >
            {oldVerionAssetsGroupped.map((group, i) => {
              return (
                <div className={'grid gap-4'} key={i}>
                  {group.map((assetUrl, j) => (
                    <div key={j}>
                      <MediaViewer src={assetUrl} />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
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
