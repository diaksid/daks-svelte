//@ts-nocheck
import { addCollection } from '@iconify/svelte/offline';

import bundles from './bundles.json';
bundles.forEach((bundle: any) => addCollection(bundle));

const custom = [];

// import './custom/...';

export default custom;

console.debug('CSR iconify');
