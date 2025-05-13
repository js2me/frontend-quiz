import { loadable } from 'react-simple-loadable';

export const MediaViewer = loadable(async () => {
  const { MediaViewer } = await import('./media-viewer');
  return MediaViewer;
});
