//import { fileURLToPath } from 'url';
//import { dirname, resolve } from 'path';
import { rootpath, mkdir, access, writeFile, copyFile } from '$lib/utils/fs';

//export const __dirname = dirname(fileURLToPath(import.meta.url));

const assets = 'src/lib/assets/iconify';

await mkdir(rootpath(assets, 'custom'));

let file = rootpath(assets, 'index.ts');
//await access(file, async () => await copyFile(resolve(__dirname, 'client.ts'), file));
await access(
  file,
  async () =>
    await writeFile(
      file,
`import { addCollection } from '@iconify/svelte/offline';
import bundles from './bundles.json';
bundles.forEach((bundle: any) => addCollection(bundle));
const custom: string[] = [];
// import './custom/...';
export default custom;
console.debug('CSR iconify');`,
      'w+'
    )
);

file = rootpath(assets, 'iconset.json');
await access(file, async () => await writeFile(file, '[]', 'w+'));

file = rootpath(assets, 'bundles.json');
await access(file, async () => await writeFile(file, '[]', 'w+'));

console.debug('SSR iconify');
