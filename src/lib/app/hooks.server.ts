import { promises as fs } from 'fs';
import { resolve } from 'path';
import * as cookie from 'cookie';
import { minify } from 'html-minifier-terser';
import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';

const pkg = JSON.parse(await fs.readFile(resolve(process.cwd(), 'package.json'), 'utf8'));

const minification = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  //preserveLineBreaks: true,
  removeAttributeQuotes: true,
  //removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: true,
  useShortDoctype: true
};

const microdata = (pathname: string) => {
  const data: any = {};
  switch (pathname) {
    case '/about':
      data.page = 'AboutPage';
      break;
    case '/contacts':
      data.page = 'ContactPage';
      break;
    default:
      data.page = 'WebPage';
  }
  return data;
};

export const handle: Handle = async ({ event, resolve }) => {
  const preloads = ['js', 'css', 'font'];
  const response = await resolve(event, {
    // transformPageChunk: ({ html }) => html.replace('%schema.page%', schema(event.url.pathname)),
    preload: ({ type }) => preloads.includes(type)
  });

  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  event.locals.userid = cookies['userid'] || crypto.randomUUID();
  if (!cookies['userid']) {
    response.headers.set(
      'set-cookie',
      cookie.serialize('userid', event.locals.userid, {
        path: '/',
        httpOnly: true
      })
    );
  }

  if (response.headers.get('content-type') === 'text/html') {
    const schema = microdata(event.url.pathname);
    let html = (await response.text())
      .replaceAll('%app.version%', pkg.version)
      .replace('%schema.page%', schema.page);
    if (building) html = await minify(html, minification);
    return new Response(html, {
      status: response.status,
      headers: response.headers
    });
  }

  return response;
};
