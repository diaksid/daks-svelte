//import '$lib/ui/iconify/server';
if (import.meta.env.DEV) await import('$lib/ui/iconify/server');

import type { Page } from '@sveltejs/kit';
export const load = (page: Page) => ({
  referesh: page.url.pathname
});
