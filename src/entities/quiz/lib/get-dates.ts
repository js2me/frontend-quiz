import { formatDate, getTimeDiff } from 'yummies/date-time';
import type { QuizResultDtoDC } from '@/shared/api';

export const getDates = (data: Maybe<QuizResultDtoDC>) => {
  if (!data)
    return {
      labels: {
        startDate: '',
        endDate: '',
        finishDate: '',
      },
      spentTime: {
        minutes: 0,
        seconds: 0,
      },
      finished: false,
    };

  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  const finishDate = data.finishDate ? new Date(data.finishDate) : null;

  const diff = finishDate ? getTimeDiff(finishDate, startDate) : null;

  return {
    labels: {
      startDate: formatDate(startDate, { pattern: 'DD.MM.YYYY HH:mm' }),
      endDate: formatDate(endDate, { pattern: 'DD.MM.YYYY HH:mm' }),
      finishDate: formatDate(finishDate, { pattern: 'DD.MM.YYYY HH:mm' }),
    },
    spentTime: diff
      ? {
          minutes: diff.minutes,
          seconds: diff.seconds,
        }
      : {
          minutes: 0,
          seconds: 0,
        },
    finished: finishDate != null,
  };
};
