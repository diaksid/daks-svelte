<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import fullscreenExitSvg from './fullscreen-exit.svg';
  import fullscreenSvg from './fullscreen.svg';
  import closeSvg from './close.svg';
  import type { Css, Options } from '../Types';

  const dispatch = createEventDispatcher();

  export let css: Css;
  export let fullscreen: boolean;
  export let options: Options;
</script>

<div
  class:fullscreen
  class="lightbox-header
         relative z-30 w-auto h-12
         flex justify-end items-center
         linecap-round linejoin-round text-4xl text-gray-200/50 cursor-default
         {css.header}">
  {#if options.buttonFullscreen}
    <button
      on:click={() => dispatch('fullscreen')}
      class="py-1.5 pl-2 
            hover:text-white hover:scale-125
             transition-all duration-300 ease-in
             hover:cursor-pointer"
      class:drop-shadow-lg={fullscreen}
      class:pr-2={fullscreen && !options.buttonClose}>
      {@html fullscreen ? fullscreenExitSvg : fullscreenSvg}
    </button>
  {/if}
  {#if options.buttonClose}
    <button
      on:click={() => dispatch('close')}
      class="py-1.5 pl-2
            hover:text-white hover:scale-125 hover:cursor-pointer
             transition-all duration-300 ease-in"
      class:drop-shadow-lg={fullscreen}
      class:pr-2={fullscreen}>
      {@html closeSvg}
    </button>
  {/if}
</div>
