<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte/offline';

  export let icon!: string;

  export let size: undefined | number | string = undefined;
  export let width: undefined | number | string = undefined;
  export let height: undefined | number | string = undefined;
  if (size) width = height = size;

  //export let id: undefined | string = undefined;
  //id ??= Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);

  let render = false;

  onMount(() => (render = true));
</script>

{#if render}
  {#key icon}
    <Icon
      {icon}
      {width}
      {height}
      {...$$restProps} />
  {/key}
{:else}
  <slot />
{/if}
