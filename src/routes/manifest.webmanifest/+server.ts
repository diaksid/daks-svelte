import { promises as fs } from 'fs';
import { resolve } from 'path';

import app from '$lib/configs/app';
const { id, scope, name, shortName, description, display, backgroundColor, themeColor } = app;

const pkg = JSON.parse(await fs.readFile(resolve(process.cwd(), 'package.json'), 'utf8'));

const url = new URL(import.meta.env.VITE_APP_CANONICAL);

const any = [128, 192, 256, 384, 512];
const maskable = [192, 384, 512];
const monochrome = [128, 192, 256];
const icons: any[] = [];
const push = (arr = any, purpose = 'any') => {
  arr.forEach((val) => {
    const png = typeof val === 'number';
    const dir =
      purpose.indexOf('maskable') > -1
        ? 'maskable/'
        : purpose.indexOf('monochrome') > -1
        ? 'monochrome/'
        : '';
    const file = png ? `${val}.png` : val;
    icons.push({
      src: `/favicon/${dir}${file}?v=${pkg.version}`,
      sizes: png ? `${val}x${val}` : 'any',
      type: `image/${png ? 'png' : 'svg+xml'}`,
      purpose: purpose
    });
  });
};

push();
push(maskable, 'maskable');
push(monochrome, 'monochrome');

const data = {
  name: name,
  short_name: shortName,
  description: description,
  icons: icons,
  id: id,
  start_url: url.pathname,
  scope: scope,
  display: display,
  background_color: backgroundColor,
  theme_color: themeColor
};

export const prerender = true;

export const GET = function get({ setHeaders }: unknown) {
  setHeaders({
    'content-type': 'application/manifest+json'
  });
  return new Response(JSON.stringify(data));
};
