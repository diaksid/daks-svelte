import { addCollection } from '@iconify/svelte/offline';
import bundles from '$lib/assets/iconify/bundles.json';
import '$lib/assets/iconify/custom';

bundles.forEach((bundle: any) => addCollection(bundle));

console.debug('CSR iconify');
