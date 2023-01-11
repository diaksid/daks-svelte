import { addAPIProvider, loadIcon } from 'iconify-icon';
import { rootpath, readFile, writeFile } from '$lib/utils/fs';

export default async (resources = ['http://localhost:3000']) => {
  addAPIProvider('online', {
    resources
  });

  let assets = await readFile('.svelte-kit/tsconfig.json');
  assets = assets && JSON.parse(assets).compilerOptions.paths['$iconify'];
  assets = assets ? assets[0] : 'src/lib/assets/iconify';

  const bundles: any[] = [];
  const count: any = {};

  const iconset = JSON.parse(await readFile(rootpath(assets, 'iconset.json')));

  const load = async (prefix: string) => {
    const icons = iconset[prefix];
    const bundle: any = {
      prefix: prefix,
      icons: {}
    };
    let data: any;
    count[prefix] = 0;
    for (const name of icons) {
      const icon = `${prefix}:${name}`;
      try {
        //bundle.icons[name] = await loadIcon(icon);
        data = await loadIcon(icon);
        bundle.icons[name] = {
          body: data.body,
          width: data.width,
          height: data.height
        };
        ++count[prefix];
      } catch (err) {
        console.error(`Failed to load ${icon} icon`);
      }
    }
    bundles.push(bundle);
  };

  for (const prefix of Object.keys(iconset)) await load(prefix);

  await writeFile(rootpath(assets, 'bundles.json'), JSON.stringify(bundles));

  return count;
};
