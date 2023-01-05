<script lang="ts">
  import type { Css, Status } from '../Types';

  export let title: string;
  export let description: string;

  export let css: Css;
  export let fullscreen: boolean;

  export let status: Status = undefined;
</script>

<div
  class:fullscreen
  class="lightbox-footer
         relative z-20 min-h-[3rem] w-auto p-2
         flex flex-wrap gap-2 items-center
         leading-none text-white/50 hover:text-white
         cursor-default
         {css.footer}">
  {#if title}
    <div class="font-semibold">
      {@html title}
    </div>
  {/if}
  {#if status}
    <div class="ml-auto font-mono whitespace-nowrap">
      {status.activeItem + 1} <sup>[{status.countItems}]</sup>
    </div>
  {/if}
  {#if description}
    <div class="w-full text-sm">
      {@html description}
    </div>
  {/if}
</div>
