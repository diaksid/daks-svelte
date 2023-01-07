<script lang="ts">
  import { onMount } from 'svelte';
  import { Moon, Sun } from 'svelte-heros-v2';
  //import Icon from '$lib/ui/iconfy';

  let className = '';
  export { className as class };

  export let size = '24';

  let icon: undefined | ConstructorOfATypedSvelteComponent = undefined;
  const toggle = () => {
    const dark = document.documentElement.classList.toggle('dark');
    icon = dark ? Sun : Moon;
    localStorage.setItem('color-theme', dark ? 'dark' : 'light');
  };
  onMount(() => (icon = document.documentElement.classList.contains('dark') ? Sun : Moon));
</script>

<svelte:head>
  <script>
    if (window) {
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    }
  </script>
</svelte:head>

<button
  on:click={toggle}
  class="relative z-10 flex
         {className}"
  type="button"
  aria-haspopup="true"
  aria-expanded="false"
  aria-labelledby="">
  <svelte:component
    this={icon}
    {size}
    ariaLabel="color theme" />
  <!--Icon
    icon={`material-symbols:${dark ? 'light' : 'dark'}-mode-outline`}
    width={size}
    height={size} /-->
</button>
