/* eslint-disable import/order,import/no-internal-modules */
import './bootstrap';
import { createRoot } from 'react-dom/client';
import { rootElement } from '@/shared/config/dom';

import { App } from '@/app';

const root = createRoot(rootElement);

root.render(<App />);
