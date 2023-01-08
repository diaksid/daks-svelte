import { promises as fs } from 'fs';
import { resolve } from 'path';
import { addAPIProvider, loadIcon } from 'iconify-icon';

export default async () => {
  addAPIProvider('online', {
    resources: ['http://localhost:3000']
  });

  const __dirname = process.cwd();
  const bundles: any[] = [];
  const count: any = {};

  const iconset = JSON.parse(
    await fs.readFile(resolve(__dirname, 'src/lib/ui/iconify/iconset.json'), 'utf8')
  );

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

  await fs.writeFile(resolve(__dirname, 'src/lib/ui/iconify/bundles.json'), JSON.stringify(bundles));

  return count;
};
