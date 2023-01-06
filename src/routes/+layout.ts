//import { dev } from '$app/environment';
//export const csr = dev;
export const prerender = true;

import type { Page } from '@sveltejs/kit';
export const load = (page: Page) => ({
  navbar: [
    {
      href: '/about',
      label: 'О!'
    }
  ],
  footer: {
    copylink: {
      href: '//www.npmjs.com/package/daks-svelte',
      target: '_blank',
      label: 'daks-svelte npm package'
    },
    links: [
      {
        href: '/admin',
        label: 'Администрирование'
      }
    ]
  },
  referesh: page.url.pathname
});
