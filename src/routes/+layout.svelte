<script lang="ts">
  import { Navbar, Footer, ScreenBlock, RouteTransition, YandexMetrikaInit } from '$lib';
  import '$iconify';
  import '../app.css';

  import type { PageData } from './$types';
  export let data: PageData;

  import navigation from '$lib/configs/navigation';

  const brand = undefined; // '/icons/logo.svg'

  if (!import.meta.env.SSR && !('color-theme' in localStorage)) {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.classList.add('dark');
  }
</script>

<!--svelte:head>
</svelte:head-->

<Navbar
  {...navigation.navbar}
  {brand} />

<RouteTransition
  referesh={data.referesh}
  mode={1}
  class="flex flex-col grow">
  <slot />
</RouteTransition>

<Footer {...navigation.footer}>DAks DEV</Footer>

<ScreenBlock class="bg-slate-800" />

<YandexMetrikaInit />
