import { promises as fs } from 'fs';
import { resolve } from 'path';

import app from '$lib/configs/app';

const pkg = JSON.parse(await fs.readFile(resolve(process.cwd(), 'package.json'), 'utf8'));
const { version } = pkg;

const canonical = new URL(import.meta.env.VITE_APP_CANONICAL).origin;

const data = {
  version,
  api_version: 1,
  layout: {
    logo: `${canonical}/favicon/tableau/60.png?v=${version}`, //encodeURIComponent()
    color: app.tileColor,
    show_title: true
  }
};

export const prerender = true;

export const GET = function get({ setHeaders }: unknown) {
  setHeaders({
    'content-type': 'application/json'
  });
  return new Response(JSON.stringify(data));
};
