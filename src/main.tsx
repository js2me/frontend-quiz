/* eslint-disable import/order,import/no-internal-modules */
import './bootstrap';
import { createRoot } from 'react-dom/client';
import { App } from '@/app';
import { rootElement } from '@/shared/config';

const root = createRoot(rootElement);

root.render(<App />);
