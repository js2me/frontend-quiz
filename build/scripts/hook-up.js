#!/usr/bin/env node
// @ts-check
// Скрипт для опциональной установки хуков
import cp from 'node:child_process';

const isCIRun = process.env.CI === 'true';

if (isCIRun) {
  // eslint-disable-next-line no-console
  console.log('skipping hook install');
} else {
  cp.execSync('lefthook install', { stdio: 'inherit' });
}
