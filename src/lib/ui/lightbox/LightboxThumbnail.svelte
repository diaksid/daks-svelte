<script lang="ts">
  import { getContext } from 'svelte';

  export let id: number = 0;

  const openImage: (id: number) => void = getContext('openImage');

  if (!id) {
    const fn: Function = getContext('counterThumbnails');
    id = fn();
  }
</script>

<div
  on:click={() => openImage(id)}
  class="lightbox-thumbnail
         static cursor-zoom-in"
  {...$$restProps}>
  <slot />
</div>
