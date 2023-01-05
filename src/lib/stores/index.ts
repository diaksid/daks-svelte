import { readable } from 'svelte/store';

export const time = readable(0, function start(set) {
  const date = Date.now();
  const interval = setInterval(() => {
    set(Date.now() - date);
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
