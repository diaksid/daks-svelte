import { mkdir, access } from '$lib/utils/fs';

await mkdir('src/lib/assets/iconify/custom');
await access('src/lib/assets/iconify/iconset.json', '[]');
await access('src/lib/assets/iconify/bundles.json', '[]');
await access('src/lib/assets/iconify/custom/index.ts', 'export default [];');

console.debug('SSR iconify');
