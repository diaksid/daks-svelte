<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '$lib/ui/iconfy';

  let className = '';
  export { className as class };
  export let size = 24;

  let dark: boolean;
  const toggle = () => {
    dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', dark ? 'dark' : 'light');
  };
  onMount(() => (dark = document.documentElement.classList.contains('dark')));
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
  <Icon
    icon={`material-symbols:${dark ? 'light' : 'dark'}-mode-outline`}
    width={size}
    height={size} />
</button>
