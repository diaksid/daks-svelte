import { building } from '$app/environment';
import upload from '$lib/ui/iconfy/upload';

const data = building ? null : await upload();

export const GET = function get({ setHeaders }: unknown) {
  setHeaders({
    'content-type': 'application/json'
  });
  return new Response(JSON.stringify(data));
};
