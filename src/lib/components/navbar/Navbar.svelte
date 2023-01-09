<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import Home from './components/Home.svelte';
  import ToggleSearch from './components/TogglerSearch.svelte';
  import ToggleTheme from './components/ToggleTheme.svelte';
  import ToggleNav from './components/ToggleNav.svelte';
  import Waiting from './components/Waiting.svelte';

  export let links!: NavLink[];
  export let centered = true;
  export let brand: undefined | string = undefined;

  let className = '';
  export { className as class };

  let scrollY: any;
  $: scrolled = scrollY > 43;

  let navbar: HTMLElement;
  let nav: HTMLElement;
  const duration = 250;

  const close = () => {
    if (!nav.classList.contains('opacity-0')) {
      nav.classList.add('opacity-0');
      setTimeout(() => nav.classList.add('invisible'), duration);
    }
  };

  const toggle = () => {
    if (nav.classList.contains('opacity-0')) nav.classList.remove('opacity-0', 'invisible');
    else close();
  };

  let waiting = false;
  const click = (ev: Event) => {
    if (waiting) {
      ev.preventDefault();
      ev.stopPropagation();
      toggle();
      return false;
    }
    return (waiting = true);
  };

  afterNavigate(() => setTimeout(() => (waiting = false), 500));
</script>

<svelte:window bind:scrollY />

<div
  bind:this={navbar}
  id="navbar"
  class:fixed={scrolled}
  class:absolute={!scrolled}
  class="z-10 top-0 left-0 w-full fixed:bg-slate-700/90 overflow-offset
         transition-all ease-in-out origin-top
         {className}"
  style:transition-duration={`${duration}ms`}>
  <div
    class="relative
           flex flex-wrap justify-end items-center
           wrapper lg:container">
    <Home
      on:click={click}
      class="p-2 text-cyan-600 hover:text-sky-500 dark:hover:text-sky-300"
      size="28"
      {brand} />

    <Waiting
      class="ml-auto text-gray-400"
      {waiting}
      size="24" />

    <nav
      bind:this={nav}
      class="grid align-middle
             grid-cols-1 lg:auto-cols-max lg:grid-flow-col lg:gap-4
             absolute z-0 left-0 top-0 mt-12 ml-1 rounded-md lg:static lg:mt-0 lg:ml-4 lg:rounded-none
             font-semibold uppercase
             text-lg xl:text-xl
             tracking-wide lg:tracking-wider
             bg-slate-700/95 lg:bg-transparent
             invisible lg:visible
             opacity-0 lg:opacity-100
             transition-opacity ease-in-out"
      style:transition-duration={`${duration}ms`}>
      {#each links as link}
        <!-- sveltekit:prefetch / sveltekit:prefetch -->
        {#if link.href === $page.url.pathname}
          <span
            class="py-2 px-6 lg:px-2
                   text-cyan-600 cursor-default"
            role="none">
            {@html link.label}
          </span>
        {:else}
          <a
            on:click={click}
            class="py-2 px-6 lg:px-2
                   text-slate-300 lg:text-slate-700 fixed:text-slate-300 dark:text-slate-300
                   hover:text-sky-500 dark:hover:text-sky-300
                   hover:bg-gray-500/50 lg:hover:bg-transparent"
            href={link.href}
            itemprop="relatedLink">
            {@html link.label}
          </a>
        {/if}
      {/each}
    </nav>

    <ToggleTheme
      class="p-2.5 ml-4 
             text-cyan-600 hover:text-sky-300
             {centered ? 'lg:ml-auto' : ''}"
      size="25" />

    <ToggleSearch
      class="p-2.5 mt-0.5 ml-4
             text-slate-500 hover:text-slate-200"
      frame={navbar}
      size="25"
      disabled={$page.url.pathname.indexOf('/search') === 0} />

    <ToggleNav
      on:toggle={toggle}
      on:close={close}
      class="lg:hidden p-2 ml-4
             text-slate-500 hover:text-slate-200"
      size="28" />
  </div>
</div>
