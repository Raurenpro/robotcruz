import { registerPlugin } from '@capacitor/core';

import type { CruzrSdkPlugin } from './definitions';

const CruzrSdk = registerPlugin<CruzrSdkPlugin>('CruzrSdk');

export * from './definitions';
export { CruzrSdk };
