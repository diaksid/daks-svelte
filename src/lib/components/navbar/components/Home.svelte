<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '$lib/ui/iconify';

  export let brand: undefined | string = undefined;
  export let icons: { home: string; page: string } = {
    home: 'line-md:home-simple-twotone',
    page: 'line-md:home-simple'
  };
  export let size = '24';
  export let alt = 'Главная';

  let className = '';
  export { className as class };
</script>

{#if $page.url.pathname === '/'}
  <span
    class="relative z-10 flex disabled
           {className}"
    role="none">
    {#if brand}
      <img
        src={brand}
        width={size}
        height={size}
        {alt} />
    {:else}
      <Icon
        icon={icons.home}
        width={size}
        height={size}>
        {alt}
      </Icon>
    {/if}
  </span>
{:else}
  <a
    on:click
    class="relative z-10 flex
           {className}"
    href="/"
    itemprop="relatedLink">
    {#if brand}
      <img
        src={brand}
        width={size}
        height={size}
        {alt} />
    {:else}
      <Icon
        icon={icons.page}
        width={size}
        height={size}>
        {alt}
      </Icon>
    {/if}
  </a>
{/if}
