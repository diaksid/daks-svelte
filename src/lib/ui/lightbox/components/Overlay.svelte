<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';
  import type { Css, Options } from '../types';

  const dispatch = createEventDispatcher();

  export let css: Css;
  export let fullscreen: boolean;
  export let options: Options;

  const handleKey = (event: KeyboardEvent) =>
    options.enableKeyboard && event.key === 'Escape' && dispatch('close');
  const handleClick = () => options.clickableClose && dispatch('close');

  let modal: HTMLElement;
  let anchor: HTMLElement;
  onMount(() => {
    anchor = document.createElement('div');
    document.body.appendChild(anchor);
    anchor.appendChild(modal);
  });
  onDestroy(() => typeof document !== 'undefined' && document.body.removeChild(anchor));
</script>

<svelte:window on:keydown={handleKey} />

<div
  bind:this={modal}
  in:fade={{ duration: options.duration }}
  out:fade={{ duration: options.duration && options.duration / 2 }}
  on:keypress
  on:click={handleClick}
  class="fixed z-[999] left-0 top-0 max-w-full max-h-screen w-full h-screen overflow-hidden
         flex justify-center items-center
         bg-black/90
         clear-pseudo
         {css.overlay}"
  class:hover:cursor-zoom-out={options.clickableClose}
  role="button"
  tabIndex="0">
  <div
    on:keypress
    on:click|preventDefault|stopPropagation={() => false}
    class="max-w-inherit max-h-inherit
           flex flex-col"
    class:w-inherit={fullscreen}
    class:h-inherit={fullscreen}
    role="button"
    tabIndex="0">
    <slot />
  </div>
</div>
