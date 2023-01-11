//import { dev } from '$app/environment';
//export const csr = dev;
export const prerender = import.meta.env.PROD;

import bundles from '$iconify/bundles.json';
import custom from '$iconify';

import type { Page } from '@sveltejs/kit';
export const load = (page: Page) => ({
  referesh: page.url.pathname,
  bundles,
  custom
});
