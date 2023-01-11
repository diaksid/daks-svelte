import { addCollection } from '@iconify/svelte/offline';

import bundles from './bundles.json';
bundles.forEach((bundle: any) => addCollection(bundle));

const custom: string[] = ['svelte-logo'];

import './custom/svelte-logo';

export default custom;

console.debug('CSR iconify');
