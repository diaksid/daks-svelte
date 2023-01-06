<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '$lib/ui/iconfy';

  let className = '';
  export { className as class };
  export let size = 25;
</script>

{#if $page.url.pathname === '/'}
  <span
    class="relative z-10 flex
           {className}"
    role="none">
    <Icon
      icon="line-md:home-simple-twotone"
      width={size}
      height={size}>
      Главная
    </Icon>
    <!--img
      src="/images/logo.xs.webp"
      width={size}
      height={size}
      alt="Главная" /-->
  </span>
{:else}
  <a
    on:click
    class="relative z-10 flex
           {className}"
    href="/"
    itemprop="relatedLink">
    <Icon
      icon="line-md:home-simple"
      width={size}
      height={size}>
      Главная
    </Icon>
    <!--img
      src="/images/logo.xs.webp"
      width={size}
      height={size}
      alt="Главная" /-->
  </a>
{/if}
