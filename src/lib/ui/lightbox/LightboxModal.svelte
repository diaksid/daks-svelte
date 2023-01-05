<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  export let title: string = '';
  export let description: string = '';

  const activeItemStore: Writable<number> = getContext('activeItem');

  const fn: Function = getContext('counterItems');
  const id = fn({
    title,
    description
  });
</script>

{#if $activeItemStore === id}
  <slot {...$$restProps} />
{/if}
