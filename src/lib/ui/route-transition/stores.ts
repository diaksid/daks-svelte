import { writable } from 'svelte/store';

export default (() => {
  const { subscribe, update } = writable(0);

  return {
    subscribe,
    change: () => update((value) => (value < 2 ? ++value : 0))
  };
})();
