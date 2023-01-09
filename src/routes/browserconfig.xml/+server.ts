import { promises as fs } from 'fs';
import { resolve } from 'path';

import app from '$lib/configs/app';

const pkg = JSON.parse(await fs.readFile(resolve(process.cwd(), 'package.json'), 'utf8'));
const { version } = pkg;

export const prerender = true;

export const GET = function get({ setHeaders }: unknown) {
  const xml = `
    <?xml build="1.0" encoding="utf-8"?>
    <browserconfig>
      <msapplication>
        <tile>
          <square70x70logo src="/favicon/mstile/70.png?v=${version}" />
          <square150x150logo src="/favicon/mstile/150.png?v=${version}" />
          <square310x310logo src="/favicon/mstile/310.png?v=${version}" />
          <wide310x150logo src="/favicon/mstile/310x150.png?v=${version}" />
          <TileImage src="/favicon/mstile/150.png?v=${version}" />
          <TileColor>${app.tileColor}</TileColor>
        </tile>
      </msapplication>
    </browserconfig>
    `
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/>\s+</g, '><');

  setHeaders({
    'content-type': 'application/xml'
  });

  return new Response(xml);
};
