import { useMemo } from 'react';
import { cx } from 'yummies/css';
import { useToggle } from 'yummies/react';

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
  const [isDialogShown, toggleDialogShow] = useToggle();

  const { isVideo, videoFormat } = useMemo(() => {
    const videoFormat = videoFormats.find((format) => src?.endsWith(format));

    return {
      isVideo: !!videoFormat,
      videoFormat: videoFormat?.replace('.', 'video/') ?? '',
    };
  }, [src]);

  return (
    <Dialog open={isDialogShown}>
      <DialogTrigger asChild onClick={toggleDialogShow}>
        <img
          className={cx(
            'h-auto min-h-25 min-w-25 max-w-full cursor-pointer rounded-lg object-cover object-center',
            {
              'bg-input': isVideo && !videoProps?.preview,
            },
            className,
          )}
          src={videoProps?.preview ?? src ?? ''}
          alt={alt}
        />
      </DialogTrigger>
      <DialogContent
        closeButtonProps={{
          className:
            'bg-background/80 size-6 flex items-center justify-center rounded-sm cursor-pointer',
          onClick: toggleDialogShow,
        }}
        className={cx(
          'max-h-[100vh] min-h-[80vh] min-w-[90vw] border-transparent bg-transparent p-0 shadow-none',
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
              'h-full max-h-[100vh] w-full max-w-full cursor-pointer rounded-lg bg-background object-contain object-center',
              fullClassName,
            )}
          >
            <source src={src} type={videoFormat} />
            Ваш браузер не поддерживает встроенные видео.
          </video>
        ) : (
          <img
            className={cx(
              'h-full max-h-[100vh] w-full max-w-full cursor-pointer rounded-lg object-contain object-center',
              fullClassName,
            )}
            onClick={toggleDialogShow}
            src={src ?? ''}
            alt={alt}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
