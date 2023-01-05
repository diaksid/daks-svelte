<script lang="ts">
  import { Link } from '$lib/ui';
  import { time } from '$lib/stores';

  let className = '';
  export { className as class };

  const year = new Intl.DateTimeFormat('ru', {
    year: '2-digit'
  });
  const online = new Intl.DateTimeFormat('ru', {
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
           {className}">
    <Link
      href="/admin"
      class="ml-4 hover:text-sky-500"
      rel="nofollow">
      &copy; 20{year.format($time)} <slot />&trade;
    </Link>

    <div class="px-2 text-center text-slate-400">
      {online.format($time)}
    </div>

    <Link
      href="/privacy"
      class="mr-4 text-right hover:text-sky-500"
      itemprop="relatedLink">
      Политика конфиденциальности
    </Link>
  </div>
</footer>
