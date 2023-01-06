<script lang="ts">
  import { blur } from 'svelte/transition';
  import type { Options } from '../types';

  export let fullscreen: boolean;
  export let scrollable: boolean;
  export let options: Options;
</script>

<div
  in:blur={{ duration: options.duration }}
  out:blur={{ duration: options.duration && options.duration / 2 }}
  class:fullscreen
  class:scrollable
  class="lightbox-body
         relative z-10 flex overflow-hidden cursor-default"
  class:overflow-y-auto={scrollable}>
  <slot />
</div>
