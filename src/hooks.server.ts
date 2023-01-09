import type { Handle } from '@sveltejs/kit';
import { handle as _handle } from '$lib/app/hooks';

export const handle: Handle = async ({ event, resolve }) => await _handle({ event, resolve });
