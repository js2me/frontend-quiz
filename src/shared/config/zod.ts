import * as z from 'zod';
import { betterRuLocale } from 'zod-i18n-better-ru';

z.config(betterRuLocale());
