<script lang="ts">
  import { page } from '$app/stores';

  export let href!: string;
  export let target: undefined | string = undefined;
  export let itemprop: undefined | string = undefined;
  export let role: undefined | string = undefined;
  export let rel: undefined | string = undefined;
  export let tag = 'span';
</script>

{#if $page.url.pathname === href}
  <svelte:element
    this={tag}
    class:disabled={true}
    role="none"
    {...$$restProps}>
    <slot />
  </svelte:element>
{:else}
  <a
    {href}
    {target}
    {itemprop}
    {role}
    {rel}
    {...$$restProps}>
    <slot />
  </a>
{/if}
