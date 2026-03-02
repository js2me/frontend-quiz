/* eslint-disable @typescript-eslint/no-explicit-any */

import { toast as createSonnerToast } from 'sonner';
import type { CreateToastPayload } from './types';

export const createToast = ({
  message,
  type = 'info',
  ...config
}: CreateToastPayload) => {
  createSonnerToast[type](message, config);
};
