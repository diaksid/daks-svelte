<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '$lib/ui/iconfy';

  export let icons: { home: string; page: string } = {
    home: 'line-md:home-simple-twotone',
    page: 'line-md:home-simple'
  };
  export let image: undefined | string = undefined;
  export let size = 25;
  export let alt = 'Главная';

  let className = '';
  export { className as class };
</script>

{#if $page.url.pathname === '/'}
  <span
    class="relative z-10 flex disabled
           {className}"
    role="none">
    {#if image}
      <img
        src={image}
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
    {#if image}
      <img
        src={image}
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
