<script lang="ts">
  import { browser } from '$app/environment';
  import { Navbar, Footer, ScreenBlock, RouteTransition, YandexMetrikaInit } from '$lib';

  import type { PageData } from './$types';
  export let data: PageData;

  import '../app.css';

  if (browser && !('color-theme' in localStorage)) {
    localStorage.setItem('color-theme', 'dark');
    document.documentElement.classList.add('dark');
  }
</script>

<svelte:head>
  <link
    rel="alternate icon"
    href="/favicon.ico"
    sizes="any" />
</svelte:head>

<Navbar links={data.navbar} />

<RouteTransition
  referesh={data.referesh}
  mode={1}
  class="flex flex-col grow">
  <slot />
</RouteTransition>

<Footer {...data.footer}>DAks DEV</Footer>

<ScreenBlock class="bg-slate-800" />

<YandexMetrikaInit />
