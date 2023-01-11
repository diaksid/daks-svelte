//import { dev } from '$app/environment';
//export const csr = dev;
export const prerender = true;

//import '$iconify';

import type { Page } from '@sveltejs/kit';
export const load = (page: Page) => {
  //import.meta.env.SSR || (await import('$iconify'));
  return {
    referesh: page.url.pathname
  };
};
