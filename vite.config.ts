import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

/*
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
const pkg = JSON.parse(
  await fs.readFile(fileURLToPath(new URL('package.json', import.meta.url)), 'utf8')
);
process.env.APP_VERSION ??= pkg.version;
*/

const config: UserConfig = {
  logLevel: 'error', // 'info'
  plugins: [sveltekit()],
  /*
  server: {
    fs: {
      strict: false
    }
  },
  define: {
    'process.env': process.env,
    __APP_VERSION__: JSON.stringify(pkg.version)
  },
  */
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
};

export default config;
