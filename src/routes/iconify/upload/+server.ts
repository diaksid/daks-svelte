import { building } from '$app/environment';
import upload from '$lib/ui/iconify/upload';

export const prerender = false;

export const GET = async function get({ setHeaders }: unknown) {
  setHeaders({
    'content-type': 'application/json'
  });
  return new Response(JSON.stringify(building ? null : await upload()));
};
