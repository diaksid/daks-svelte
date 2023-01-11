<script lang="ts">
  import Link from '$lib/ui/link';
  import { time } from './stores';

  export let copylink: undefined | NavLink = undefined;
  export let links: undefined | NavLink[] = undefined;

  let className = '';
  export { className as class };

  const year = new Date().getFullYear();
  const timer = new Intl.DateTimeFormat('ru', {
    minute: '2-digit',
    second: '2-digit'
  });
</script>

<footer
  id="footer"
  class="pt-4 pb-2">
  <div
    class="wrapper lg:container
           flex flex-row justify-between items-center
           leading-loose font-mono font-thin text-2xs xs:text-xs sm:text-sm sm:tracking-wide text-gray-500
           {className}">
    {#if copylink}
      <Link
        class="pr-4 mr-auto hover:text-sky-500"
        href={copylink.href}
        target={copylink.target}
        rel="nofollow">
        &copy;{year}
        {@html copylink.label}&trade;
      </Link>
    {:else}
      <span
        class="pr-4 mr-auto cursor-default"
        role="none">
        &copy; {year}
        <slot />&trade;
      </span>
    {/if}

    {#if links?.length}
      <nav class="mx-4">
        {#each links as link}
          <Link
            href={link.href}
            class="px-4 text-right hover:text-sky-500"
            itemprop="relatedLink">
            {@html link.label}
          </Link>
        {/each}
      </nav>
    {/if}

    <div class="pl-4 text-slate-400">
      {timer.format($time)}
    </div>
  </div>
</footer>
