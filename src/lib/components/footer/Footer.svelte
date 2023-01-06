<script lang="ts">
  import { Link } from '$lib/ui';
  import { time } from './stores';

  export let links: undefined | NavLink[] = undefined;

  $$props.class ??= '';

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
           leading-loose font-mono font-thin text-2xs xs:text-xs sm:text-sm sm:tracking-wide text-gray-400/75
           {$$props.class}">
    <Link
      href="/admin"
      class="ml-4 hover:text-sky-500"
      rel="nofollow">
      &copy; {year}
      <slot />&trade;
    </Link>

    <div class="px-2 text-slate-400">
      {timer.format($time)}
    </div>

    {#if links}
      <div>
        {#each links as link}
          <Link
            href={link.href}
            class="mr-4 text-right hover:text-sky-500"
            itemprop="relatedLink">
            {link.label}
          </Link>
        {/each}
      </div>
    {/if}
  </div>
</footer>
