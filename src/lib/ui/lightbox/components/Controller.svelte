<script lang="ts">
  import Button from './Button.svelte';
  import type { Writable } from 'svelte/store';
  import type { Options } from '../types';

  export let options: Options;

  export let countItemsStore: Writable<number>;
  export let activeItemStore: Writable<number>;

  const previous = () => {
    if ($activeItemStore === 0) {
      if (options.behaviour === 'loop') {
        activeItemStore.set($countItemsStore - 1);
      }
    } else {
      activeItemStore.set($activeItemStore - 1);
    }
  };

  const next = () => {
    if ($activeItemStore === $countItemsStore - 1) {
      if (options.behaviour === 'loop') {
        activeItemStore.set(0);
      }
    } else {
      activeItemStore.set($activeItemStore + 1);
    }
  };

  const handleKey = (event: KeyboardEvent) => {
    if (options.enableKeyboard) {
      switch (event.key) {
        case 'ArrowLeft': {
          previous();
          break;
        }
        case 'ArrowRight': {
          next();
          break;
        }
      }
    }
  };
</script>

<svelte:window on:keydown={handleKey} />

<Button
  on:click={previous}
  next={false}
  {options}
  activeItem={$activeItemStore}
  countItems={$countItemsStore} />

<slot />

<Button
  on:click={next}
  next={true}
  {options}
  activeItem={$activeItemStore}
  countItems={$countItemsStore} />
