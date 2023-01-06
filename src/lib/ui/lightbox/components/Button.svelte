<script lang="ts">
  import chevronSvg from './chevron.svg';
  import type { Options } from '../types';

  export let options: Options;

  export let next: boolean = false;

  export let countItems: number;
  export let activeItem: number;

  $: disabled =
    options.behaviour !== 'loop' && (next ? activeItem === countItems - 1 : activeItem === 0);
</script>

<button
  on:click|preventDefault|stopPropagation
  {disabled}
  class="absolute z-20 top-0 bottom-0
         flex items-center
         w-1/5 md:w-1/6 xl:w-1/12
         text-gray-200/50 hover:text-white disabled:text-black
         bg-black/25 hover:bg-black/50 active:bg-transparent
         hover:cursor-pointer"
  class:right-0={next}
  class:justify-end={next}
  class:left-0={!next}
  class:justify-start={!next}
  class:hidden={disabled && options.behaviour === 'hide'}>
  <span
    class="p-2 linecap-round linejoin-round text-5xl
           hover:scale-125 transition-all duration-300 ease-in"
    class:rotate-180={!next}>
    {@html chevronSvg}
  </span>
</button>
