import type { ReactNode } from 'react';
import type { ExternalToast } from 'sonner';

export interface CreateToastPayload extends ExternalToast {
  message: string | ReactNode;
  type?: 'success' | 'info' | 'warning' | 'error';
}
