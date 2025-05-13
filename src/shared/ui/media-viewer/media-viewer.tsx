import { useMemo } from 'react';
import { cx } from 'yummies/css';

import { Dialog, DialogContent, DialogTrigger } from '../dialog';

export interface MediaViewerProps {
  className?: string;
  src?: string;
  alt?: string;
  fullClassName?: string;
  dialogClassName?: string;
  videoProps?: {
    preview?: string;
  };
}

const videoFormats = ['.mp4', '.avi', '.webm'];

export const MediaViewer = ({
  className,
  src,
  alt = '',
  fullClassName,
  videoProps,
  dialogClassName,
}: MediaViewerProps) => {
  const { isVideo, videoFormat } = useMemo(() => {
    const videoFormat = videoFormats.find((format) => src?.endsWith(format));

    return {
      isVideo: !!videoFormat,
      videoFormat: videoFormat?.replace('.', 'video/') ?? '',
    };
  }, [src]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          className={cx(
            'h-auto max-w-full rounded-lg object-cover object-center cursor-pointer min-w-[100px] min-h-[100px]',
            className,
          )}
          src={videoProps?.preview ?? src ?? ''}
          alt={alt}
        />
      </DialogTrigger>
      <DialogContent
        className={cx(
          'p-0 min-h-[80vh] min-w-[90vw] max-h-[100vh] bg-transparent border-transparent shadow-none',
          dialogClassName,
        )}
      >
        {isVideo ? (
          // eslint-disable-next-line sonarjs/media-has-caption
          <video
            controls
            poster={videoProps?.preview ?? src}
            autoPlay
            className={cx(
              'h-full max-w-full bg-background rounded-lg object-contain w-full max-h-[100vh] object-center cursor-pointer',
              fullClassName,
            )}
          >
            <source src={src} type={videoFormat} />
            Ваш браузер не поддерживает встроенные видео.
          </video>
        ) : (
          <img
            className={cx(
              'h-full max-w-full rounded-lg object-contain w-full max-h-[100vh] object-center cursor-pointer',
              fullClassName,
            )}
            src={src ?? ''}
            alt={alt}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
