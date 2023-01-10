import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

import 'dotenv/config';
const toStatic = process.env.ADAPTER === 'static';

const adapter = toStatic ? adapterStatic : adapterNode;
const options = {
  fallback: toStatic ? 'error_page.html' : undefined,
  precompress: true
};

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    alias: {
      $assets: resolve(__dirname, 'static')
    },

    adapter: adapter(options),

    files: {
      serviceWorker: 'src/lib/app/service-worker'
    }

    //inlineStyleThreshold: 8192
  },

  package: {
    files(filepath) {
      return !/^(configs)/.test(filepath);
    },
    exports(filepath) {
      return !/^(assets\/fonts|assets\/iconify)/.test(filepath);
    }
  }
};

export default config;
