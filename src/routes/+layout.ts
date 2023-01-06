//import { dev } from '$app/environment';
//export const csr = dev;
export const prerender = true;

import type { Page } from '@sveltejs/kit';
export const load = (page: Page) => ({
  navbar: [
    {
      href: '/iconify',
      label: 'iconify'
    }
  ],
  footer: {
    copylink: {
      href: '//daks.dev',
      target: '_blank',
      label: 'daks dev'
    },
    links: []
  },
  referesh: page.url.pathname
});