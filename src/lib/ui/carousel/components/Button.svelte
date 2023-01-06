<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import chevronSvg from './chevron.svg';
  import pauseSvg from './pause.svg';
  import startSvg from './start.svg';
  import type { Css } from '../types';

  const dispatch = createEventDispatcher();

  let className: string = '';
  export { className as class };

  export let css: Css;

  export let disabled: boolean = false;
  export let event: string;

  const icon = (() => {
    switch (event) {
      case 'next':
      case 'previous':
        return chevronSvg;
      case 'pause':
        return pauseSvg;
      case 'start':
        return startSvg;
    }
  })();
</script>

<button
  on:click={() => dispatch(event)}
  class="absolute z-10 flex 
        text-white/75 hover:text-white disabled:hover:text-black/75 hover:cursor-pointer
         {className}
         {css.button}"
  {disabled}>
  <span
    class="text-4xl hover:scale-125 transition-transform duration-300 ease-in
           linecap-round linejoin-round"
    class:rotate-180={event === 'previous'}>
    {@html icon}
  </span>
</button>
